import { FC } from "react";
import { Button } from "@/components/buttons/button.tsx";
import { BUTTON_PURPOSE, SIZE } from "@/constants.tsx";

const Home: FC = () => {
  return (
    <div className="p-5">
      <Button
        size={SIZE.S}
        purpose={BUTTON_PURPOSE.BLUE}
        loading={false}
        disabled={true}
      >
        Click me
      </Button>
    </div>
  );
};

export default Home;
