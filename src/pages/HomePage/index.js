import React, { useState, useReducer } from 'react';
import { Link } from "react-router-dom";
import { Input, Avatar, Button, Spin, message } from 'antd';
import { ClearOutlined } from '@ant-design/icons'

import axios from 'utils/axios';

const STATUS = {
    LOADING: 'loading',
    LOAD_SUCCESS: 'success',
    LOAD_ERROR: 'error',
}

const TYPE = {
    LOAD: 'LOAD',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_ERROR: 'LOAD_ERROR',
}

const reducer = (state, action) => {
    switch (action.type) {
        case TYPE.LOAD:
            return {
                ...state,
                status: STATUS.LOADING
            };
        case TYPE.LOAD_SUCCESS:
            return {
                ...state,
                status: STATUS.LOAD_SUCCESS,
                data: action.payload.data,
                total: action.payload.total,
            }
        case TYPE.LOAD_ERROR:
            return {
                ...state,
                status: STATUS.LOAD_ERROR,
            }
        default:
            return state;
    }
}

const HomePage = () => {
    const [state, dispatch] = useReducer(reducer, {
        status: STATUS.LOAD_SUCCESS,
        data: [],
        total: 0
    });
    const [keyword, setKeyword] = useState('');
    const [sourceToken, setSourceToken] = useState(null);


    async function handleSearch(value) {
        try {
            if (value.trim() === '') {
                return message.warning('Please enter some keyword to search');
            }
            if (sourceToken !== null) {
                sourceToken.cancel();
            }
            dispatch({ type: TYPE.LOAD });
            const CancelToken = axios.CancelToken;
            console.log(CancelToken);
            const source = CancelToken.source();
            setSourceToken(source);
            const { data } = await axios.get(`/search/users?q=${value}`, {
                cancelToken: source.token
            });
            dispatch({
                type: TYPE.LOAD_SUCCESS,
                payload: {
                    data: data.items,
                    total: data.total_count
                }
            });
        } catch (error) {
            console.log(error);
            dispatch({ type: TYPE.LOAD_ERROR });
        }
    }

    function handleInputChange(e) {
        setKeyword(e.target.value)
    }

    function handleClearSearch() {
        setKeyword('');
        dispatch({
            type: TYPE.LOAD_SUCCESS,
            payload: {
                data: [],
                total: 0
            }
        });
    }

    return (
        <div className="container mx-auto pt-8 w-100 h-100 flex flex-col items-center">
            <div className="px-4 py-8 shadow-lg rounded flex items-center" style={{ backgroundColor: '#fff', width: 600 }}>
                <Input.Search
                    placeholder="Search by username"
                    enterButton
                    value={keyword}
                    onSearch={handleSearch}
                    onChange={handleInputChange} />
                <Button
                    className="ml-2"
                    icon={<ClearOutlined />}
                    onClick={handleClearSearch}
                >
                    Clear
                </Button>
            </div>
            <Spin size="large" tip="Loading" spinning={state.status === STATUS.LOADING} delay="200">
                <div
                    className="mt-4 px-4 py-8 shadow-lg rounded overflow-y-auto scroll"
                    style={{ backgroundColor: '#fff', width: 600, height: 'calc(100vh - 170px)' }}
                >
                    <p className="font-bold mb-6">Result found: {state.total}</p>
                    {
                        state.data.map((user, index) => (
                            <div key={user.id} className="flex items-center mb-6 pb-6 justify-between" style={{ borderBottom: '1px solid #ccc' }}>
                                <div className="flex items-center">
                                    <p className="mr-8 mb-0">#{index + 1}</p>
                                    <Avatar src={user.avatar_url} size={48} />
                                    <div className="ml-4">
                                        <p className="font-bold text-base mb-0">
                                            {user.login}
                                        </p>
                                        <a href={user.html_url} target="__blank" className="text-sm underline">
                                            Github Link
                                        </a>
                                    </div>
                                </div>
                                <Button type="primary">
                                    <Link to={`/detail/${user.login}`}>
                                        Detail
                                    </Link>
                                </Button>
                            </div>
                        ))
                    }
                    {
                        state.data.length < state.total
                        && (
                            <div className="w-100 mt-4 flex justify-center">
                                <Button type="primary">
                                    Load More
                                </Button>
                            </div>
                        )
                    }
                </div>
            </Spin>
        </div>
    );
}

export default HomePage
