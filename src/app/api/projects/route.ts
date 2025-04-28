import { NextResponse } from "next/server";

const projects = [
  { id: 1, title: "AI Startup Website", description: "AI company landing page." },
  { id: 2, title: "Fitness App", description: "Workout tracker built with Next.js." },
  { id: 3, title: "Travel Blog", description: "Sharing travel experiences worldwide." }
];

export async function GET() {
  return NextResponse.json(projects)
}