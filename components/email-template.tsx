import * as React from "react";

interface EmailTemplateProps {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    service?: string,
    message: string
}

export const EmailTemplate = ({ firstname, lastname, email, phone, service, message }: EmailTemplateProps) => (
    <div>
        <h1>Welcome, {firstname}!</h1>
        <h1>Welcome, {lastname}!</h1>
        <h1>Welcome, {email}!</h1>
        <h1>Welcome, {message}!</h1>
    </div>
);

export default EmailTemplate;