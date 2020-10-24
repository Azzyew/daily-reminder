import { Layout, Row } from 'antd';
import React from 'react';

import { Button } from "antd";

const Warning = () => {
    return(
        <Layout>
            <Row>
                <h1>AVISO!!</h1>
            </Row>
            <Row>
                <p>O conteúdo a seguir possui altos níveis de boiolagem</p>
            </Row>
            <Row>
                <h4>Deseja seguir mesmo assim?</h4>
            </Row>
            <Button type="primary">Sim</Button>
            <Button type="primary">Não</Button>

        </Layout>
    );
}

export default Warning;