import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, comment } = (await req.json()) as {
      name: string;
      email: string;
      comment: string;
    };

    const sanitize = (text: string) =>
      text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_TO!,
      subject: `Job offer from ${sanitize(name)}`,
      html: `
      <h2>Job Offer</h2>
      <p><b>Name:</b> ${sanitize(name)}</p>
      <p><b>Email:</b> ${sanitize(email)}</p>
      <p><b>Message:</b><br/>${(sanitize(comment) ?? '').replace(/\n/g, '<br/>')}</p>
    `,
    });

    if (error) throw error;

    return Response.json({ success: true });
  } catch (e: any) {
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
