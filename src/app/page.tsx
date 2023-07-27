import { Suspense } from "react";
import { GithubUser } from "./components/githubUser";
import { DialogProvider } from "./contexts/dialogContex";

export default function Home() {
  return (
    <DialogProvider>
      
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="diego3g" />
      </Suspense>
      <Suspense fallback={<p>Carregando 2...</p>}>
        <GithubUser username="maykbrito" />
      </Suspense>

    </DialogProvider>
  );
}
