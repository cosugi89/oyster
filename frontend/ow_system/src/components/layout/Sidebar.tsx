"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Home as HomeIcon,
  Settings,
  ChevronUp,
  TagIcon,
  MessageCircleQuestionMarkIcon,
  LogOutIcon,
  CircleUserRoundIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Toaster } from "@/components/ui/sonner";
import { Avatar, AvatarImage } from "../ui/avatar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: HomeIcon,
    hide: false,
  },
  {
    title: "Tags",
    url: "/tags",
    icon: TagIcon,
    hide: false,
  },
  {
    title: "Your Q&A",
    url: "/qa",
    icon: MessageCircleQuestionMarkIcon,
    hide: true,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    hide: true,
  },
];

export default function AppSidebar() {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = window.location.pathname;
  const [isOnClickedLogin, setIsOnClickedLogin] = useState(true);

  const handleLogin = () => {
    const success = login(email, password);
    if (!success) setError("メールアドレスかパスワードが間違っています");
  };

  return (
    <>
      <SidebarProvider defaultOpen>
        <Sidebar className="px-6 pt-[calc(var(--header-height)+24px)] pb-3 w-1/5">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => {
                    const isActive = pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          className={
                            !user && item.hide === true
                              ? "pointer-events-none opacity-20"
                              : ""
                          }
                          asChild
                        >
                          <a href={item.url}>
                            <item.icon
                              className={` ${
                                isActive
                                  ? "text-destructive font-bold"
                                  : "text-foreground/80"
                              }`}
                            />
                            <span
                              className={` ${
                                isActive
                                  ? "text-destructive font-bold"
                                  : "text-foreground/80"
                              }`}
                            >
                              {item.title}
                            </span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="w-full">
            {!user ? (
              <Dialog>
                <DialogTrigger onClick={() => setIsOnClickedLogin(true)}>
                  <SidebarMenu className="w-full">
                    <Button
                      variant="destructive"
                      className="text-muted"
                      onClick={() => setError("")}
                    >
                      Log In
                    </Button>
                  </SidebarMenu>
                </DialogTrigger>
                <DialogTrigger onClick={() => setIsOnClickedLogin(false)}>
                  <SidebarMenu className="w-full">
                    <Button variant="outline">Sign Up</Button>
                  </SidebarMenu>
                </DialogTrigger>
                <DialogContent className="!scale-100 !origin-center !animate-none">
                  <DialogHeader>
                    <DialogDescription>
                      <Tabs
                        value={isOnClickedLogin ? "Login" : "Signup"}
                        onValueChange={(val) =>
                          setIsOnClickedLogin(val === "Login")
                        }
                      >
                        <TabsList className="w-11/12 m-auto">
                          <TabsTrigger value="Login" className="w-full">
                            Log In
                          </TabsTrigger>
                          <TabsTrigger value="Signup" className="w-full">
                            Sign Up
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="Login">
                          <Card className="h-[316px]">
                            <CardHeader>
                              <CardDescription className="text-center">
                                {error ? (
                                  <p className="text-red-500">{error}</p>
                                ) : (
                                  "メールアドレスとパスワードを入力してください。"
                                )}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                              <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Email</Label>
                                <Input
                                  type="email"
                                  id="tabs-demo-name"
                                  placeholder="sample@mail.com"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">
                                  Password
                                </Label>
                                <Input
                                  type="password"
                                  id="tabs-demo-username"
                                  placeholder="8桁以上の英数字"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                              <Button
                                variant="destructive"
                                className="text-muted mt-4 w-40"
                                onClick={handleLogin}
                              >
                                Log In
                              </Button>
                            </CardFooter>
                          </Card>
                        </TabsContent>
                        <TabsContent value="Signup">
                          <Card className="h-[316px]">
                            <CardHeader>
                              <CardDescription className="text-center">
                                正しいメールアドレスを入力してください。
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                              <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Email</Label>
                                <Input
                                  type="email"
                                  id="tabs-demo-name"
                                  placeholder="sample@mail.com"
                                />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">
                                  Password
                                </Label>
                                <Input
                                  type="password"
                                  id="tabs-demo-username"
                                  placeholder="8桁以上の英数字"
                                />
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                              <Button
                                variant="destructive"
                                className="text-muted mt-4 w-40"
                              >
                                Create Account
                              </Button>
                            </CardFooter>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ) : (
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user?.avatarUrl} />
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">
                            {user.name}
                          </span>
                          <span className="truncate text-xs">{user.email}</span>
                        </div>
                        <ChevronUp className="ml-auto size-4" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                      side="top"
                      align="start"
                      sideOffset={4}
                    >
                      <DropdownMenuItem>
                        <CircleUserRoundIcon className="mr-2 h-4 w-4" />
                        Account
                      </DropdownMenuItem>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            Logout
                          </DropdownMenuItem>
                        </AlertDialogTrigger>

                        <AlertDialogContent className="!scale-100 !origin-center !animate-none">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-center">
                              ログアウト
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-center">
                              ログアウトしてもよろしいですか？
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="!justify-center mt-3">
                            <AlertDialogCancel className="mr-4 min-w-32">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="bg-destructive hover:bg-destructive/80 min-w-32"
                              onClick={logout}
                            >
                              OK
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            )}
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            background: "#fff9ef",
            color: "#ffac2a",
            border: "3px solid #fff9ef",
          },
        }}
      />
    </>
  );
}
