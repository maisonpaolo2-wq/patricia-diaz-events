import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  const { name, email, phone, date, guests, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Nombre y email son obligatorios.' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL ?? 'hola@patriciadiazevents.com'

  const body = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    phone    ? `Telefono: ${phone}`       : null,
    date     ? `Fecha tentativa: ${date}` : null,
    guests   ? `Invitados: ${guests}`     : null,
    message  ? `\nMensaje:\n${message}`   : null,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await resend.emails.send({
      from: 'Patricia Diaz Events <noreply@patriciadiazevents.com>',
      to,
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      text: body,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error al enviar el mensaje. Intentalo mas tarde.' }, { status: 500 })
  }
}
