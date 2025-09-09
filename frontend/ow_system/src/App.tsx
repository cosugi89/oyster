import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import QuestionDetail from "@/pages/QuestionDetail";
import Profile from "@/pages/Profile";
import Tags from "@/pages/Tags";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-96 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">Main Page</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-gray-600 text-center">
              Click the button below to go to the Home page.
            </p>
            <Button onClick={() => navigate("/home")} className="w-full">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/question_detail/:id"
            element={
              <Layout>
                <QuestionDetail />
              </Layout>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/tags"
            element={
              <Layout>
                <Tags />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
