import SibApiV3Sdk from "@getbrevo/brevo";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return Response.json({ error: "Email requis" }, { status: 400 });
  }

  try {
    const client = new SibApiV3Sdk.ContactsApi();
    client.setApiKey(
      SibApiV3Sdk.ContactsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    );

    await client.createContact({
      email,
      listIds: [parseInt(process.env.BREVO_LIST_ID!, 10)],
    });

    return Response.json({ message: "Inscription réussie !" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}
