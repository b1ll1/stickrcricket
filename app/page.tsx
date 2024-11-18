import Image from "next/image";
import Camo from "./_components/Camo";
import Tiger from "./_components/svgs/Tiger";

export default function Home() {
  return (
    <div>
     <Camo batPrimary="#2563EB" batSecondary="#60A5FA" batTertiary="#172554" batQuartiary="#BFDBFE"/>
     <Tiger batPrimary="#2563EB" batSecondary="#60A5FA" batTertiary="#172554" batQuartiary="#BFDBFE"/>
    </div>
  );
}
