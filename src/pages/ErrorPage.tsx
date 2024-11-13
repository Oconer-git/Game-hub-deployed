import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar/>
            <Heading>Oops</Heading>
            <Text>
                {isRouteErrorResponse(error) ? 'The page does not exist' : 'An unexpected error occured'}
            </Text>
        </>
    )
}

export default ErrorPage
