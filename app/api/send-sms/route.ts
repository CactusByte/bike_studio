import { NextResponse } from 'next/server'
import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromNumber = process.env.TWILIO_PHONE_NUMBER

const client = twilio(accountSid, authToken)

export async function POST(request: Request) {
  const { to, body } = await request.json()

  try {
    const message = await client.messages.create({
      body,
      from: fromNumber,
      to
    })

    return NextResponse.json({ success: true, messageSid: message.sid })
  } catch (error) {
    console.error('Error sending SMS:', error)
    return NextResponse.json({ success: false, error: 'Failed to send SMS' }, { status: 500 })
  }
}

