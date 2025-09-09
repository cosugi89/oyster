import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full border-b bg-white shadow-md h-[var(--header-height)] z-50">
      <div className="py-5 flex items-center">
        <h1 className="text-xl font-bold text-destructive min-w-60 w-1/5 pl-10">
          Q&A Site
        </h1>
        <div className="flex gap-2 items-center bg-secondary px-4 rounded-md w-2/3 shadow-inner mx-8">
          <Search className="h-4 w-4" />
          <Input
            type="text"
            placeholder="Serch"
            className="flex-grow shadow-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
    </div>
  );
}
