import Image from "next/image";
import {Button} from "@/components/ui/button"

export default function Home() {
  return (
    <div className="pt-16">Subscribe to Roadsider
      <br />
      <Button variant={"destructive"}>Subscribe</Button>
    </div>
  );
}
