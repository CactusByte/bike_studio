import { NextResponse } from 'next/server'
import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID

const client = twilio(accountSid, authToken)

export async function POST(request: Request) {
  const { phoneNumber, code } = await request.json()

  try {
    const verificationCheck = await client.verify.v2
      .services(verifyServiceSid!)
      .verificationChecks.create({ to: `+1${phoneNumber}`, code })

    return NextResponse.json({ success: true, status: verificationCheck.status })
  } catch (error) {
    console.error('Error checking verification:', error)
    return NextResponse.json({ success: false, error: 'Failed to check verification' }, { status: 500 })
  }
}

