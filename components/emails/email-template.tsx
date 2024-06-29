import * as React from "react";
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components"

interface EmailTemplateProps {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    service: string,
    message: string
}


export const EmailTemplate = ({ firstname, lastname, email, phone, service, message }: EmailTemplateProps) => {
    return (
        <Html>
            <Head />
            <Preview>Yelp recent login</Preview>
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <h1 style={{ color: '#1c1c22', fontFamily: 'jet' }}>Nasim <span>.</span></h1>
                    </Section>

                    <Section style={content}>


                        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Hi Nasim,
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    The following person wants to connect you
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Name: </b>
                                    {firstname} {lastname}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Email: </b>
                                    {email}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Phone: </b>
                                    {phone}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Service: </b>
                                    {service}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Message: </b>
                                    {message}
                                </Text>
                            </Column>
                        </Row>

                    </Section>

                </Container>
            </Body>
        </Html>

    )
};

export default EmailTemplate;

const main = {
    backgroundColor: "#fff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: "30px 20px",
};

const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
};

const boxInfos = {
    padding: "20px",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
};