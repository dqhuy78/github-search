import { useState, useReducer } from 'react';
import { message } from 'antd';

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

const useFetchDataHook = (keyword) => {

    const [state, dispatch] = useReducer(reducer, {
        status: STATUS.LOAD_SUCCESS,
        data: [],
        total: 0
    });

    async function handleSearch() {
        try {
            if (keyword.trim() === '') {
                message.warning('Please enter some keyword to search.', 10);
                return false;
            }
            dispatch({ type: TYPE.LOAD });
            const { data } = await axios.get(`/search/users?q=${keyword}`);
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

    return [
        handleSearch,
        state
    ];
}

export default useFetchDataHook;
