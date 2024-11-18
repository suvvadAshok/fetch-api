import axios from "axios";
import React from "react";

function App() {
  const [api, setApi] = React.useState<string>("");
  const [post, setPost] = React.useState();

  React.useEffect(() => {
    api &&
      axios.get(api).then((response) => {
        setPost(response.data);
      });
  }, [api]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const apiValue = formData.get("api");

    apiValue !== null && typeof apiValue === "string" && setApi(apiValue);
  }

  console.log(post);

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center top-0 fixed w-full gap-2"
      >
        <input
          type="text"
          name="api"
          id=""
          className="p-2 w-[50%] border-gray-500 border-2 rounded-lg focus:border-blue-500"
        />
        <button
          type="submit"
          className="border-[0.5px] hover:shadow-xl shadow-sm px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
      <pre className="mt-8">{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}

export default App;
