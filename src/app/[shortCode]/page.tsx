'use server'

import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ shortCode: string }> }) {
  const backendUrl = process.env.BACKEND_URL as string
  const { shortCode } = await params;

  const res = await fetch(`${backendUrl}/${shortCode}`, {
    cache: 'no-store' // Garante que ele sempre busque o link atualizado
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  if (data?.url) {
    redirect(data.url);
  }

  notFound();
}