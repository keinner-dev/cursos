import { Button } from "@/components/ui/button";
import { Header } from "./components/header";

export default function Home() {
  return (
   <div>
    <Header />
      <Button className="cursor-pointer">click</Button>
   </div>
  );
}
