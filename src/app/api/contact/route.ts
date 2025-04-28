import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        const body = await req.json(); // get data from request body

        const newMessage = {
            title: body.name,
            description: body.email,
            message: body.message
        };
        console.log('Contact form submitted:', { body })

        // Simulate saving to database or sending email
        return NextResponse.json(newMessage, { status: 201 }); // 201 Created

    } else {
        NextResponse.error();
    }
}
