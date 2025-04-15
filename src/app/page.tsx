import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
      <div className="flex items-center justify-center h-screen">
        <Card className="w-3/4 max-w-md rounded-lg shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Welcome to SafeWatch
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            A family safety and tracking application.
          </CardContent>
        </Card>
      </div>
  );
}

