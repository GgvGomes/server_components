import { Dialog } from "./dialog";

export interface GithubUserProps {
  username: string;
}

export async function GithubUser({ username }: GithubUserProps) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Dialog />
    </>
  );
}
