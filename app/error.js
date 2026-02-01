"use client";
import { useRouter } from "next/navigation";
export default function Error({ error, reset }) {
    let router=useRouter()
  return (
    <div className="global-error">
      <div className="error-content">
        <h1>Something broke.</h1>
        <p>
          Not your fault. Something went wrong on our side.
        </p>

        <button onClick={() => reset()}>
          Try again
        </button>
        <button onClick={() => router.back()}>
        Go back
        </button>
      </div>
    </div>
  );
}
