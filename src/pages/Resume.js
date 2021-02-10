import React from 'react';
import Layout from '../components/Layout';
import PDF from 'react-pdf-js';
import ResumePdf from '../files/Matthew_Ciaglia_Resume_BlockChainDeveloper.pdf';

export default () => {
    return(
            <Layout>
                <PDF file={ResumePdf} />
            </Layout>
        );
};