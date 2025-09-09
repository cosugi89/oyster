"use client"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Main() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl mb-2">Main Page</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-gray-600 text-center">Click the button below to go to the Home page.</p>
          <Button onClick={() => navigate("/home")} className="w-full">
            Go to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Home Page</h1>
          <p className="text-lg text-muted-foreground mb-8">Welcome to the Home page!</p>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
