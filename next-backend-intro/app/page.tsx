import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://localhost:3000/api/user");
  return response.data;
}

// here we are hitting our own next server again and again so instead of hitting next server we can directly fetch data from the database using the prisma.
// remember we can't use database logic for "use client" because we don't want that browser talks to our database.

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">Name: {userDetails?.name}</div>
      </div>
    </div>
  );
}
