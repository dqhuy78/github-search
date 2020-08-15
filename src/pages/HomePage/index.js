import React, { useState } from 'react';
import { Input, Avatar, Button, Spin, Result } from 'antd';
import { Link } from "react-router-dom";

import useFetchDataHook from './useFetchDataHook'

const HomePage = () => {
    const [keyword, setKeyword] = useState('');
    const [handleSearch, state] = useFetchDataHook(keyword);

    function handleInputChange(e) {
        setKeyword(e.target.value)
    }

    function render() {
        if (state.status === 'error') {
            return <Result status="500" title="500" subTitle="Sorry, something went wrong." />
        }
        if (state.status === 'success') {
            if (state.data.length === 0) {
                return <Result title="No user found" />
            } else {
                return state.data.map((user, index) => (
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
                ));
            }
        }
    }

    return (
        <div className="container mx-auto pt-8 w-100 h-100 flex flex-col items-center">
            <div className="px-4 py-8 shadow-lg rounded flex items-center bg-white" style={{ width: 600 }}>
                <Input.Search
                    value={keyword}
                    onChange={handleInputChange}
                    onSearch={handleSearch}
                    placeholder="Search by username"
                    enterButton />
            </div>
            <Spin size="large" tip="Loading" spinning={state.status === 'loading'} delay="200">
                <div className="mt-4 px-4 py-8 shadow-lg rounded overflow-y-auto scroll bg-white"
                    style={{ width: 600, height: 'calc(100vh - 170px)' }}
                >
                    {render()}
                </div>
            </Spin>
        </div>
    );
}

export default HomePage
