import EmailTemplate from '@/components/emails/email-template';
import { Resend } from 'resend';
import { FormDataType } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const { firstname, lastname, email, phone, service, message } = await req.json() as FormDataType;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['contact.nasimshishir@gmail.com'],
            subject: 'New message from portfolio',
            react: EmailTemplate({ firstname, lastname, email, phone, service, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}