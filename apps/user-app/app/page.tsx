import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";

export default function Home() {
  return (
    <div className="flex flex-col w-6/12 mx-auto">
      <Button
        children="User App"
        appName="User"
        className="bg-gray-800 w-fit text-white p-2 rounded-lg m-4 hover:bg-gray-600"
      />
      <Card
        title="Random Title"
        children="Card Contents"
        href="https://x.com/sarthak_1893"
        className="bg-gray-800 p-6 w-fit text-white m-4 rounded-lg hover:bg-gray-600"
      />
      <Code
        children="int main() {
          int x,y;
          cout<<'Sum of these two numbers is: '<<x+y;
          return 0;
        }"
      />
    </div>
  );
}
