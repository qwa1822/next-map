import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>Router: ${router.query.slug}</h1>

      <div>
        <button
          type="button"
          onClick={() => {
            router.push({ pathname: "/[slug]", query: { slug: "push" } });
          }}
        >
          PUSH
        </button>
      </div>

      <div className="mt-4">
        <br />
        <button
          type="button"
          onClick={() => {
            router.reload();
          }}
        >
          Replace
        </button>
      </div>
    </div>
  );
}
