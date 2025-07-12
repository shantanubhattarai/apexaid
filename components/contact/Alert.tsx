"use client";

import { useSearchParams } from "next/navigation";

export default function Alert({ content }: { content: string }) {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  if (status === "success") {
    return (
      <div className="px-3 py-1 bg-green-100 border-green-200 border text-green-900 mb-8 rounded-sm">
        {content}
      </div>
    );
  } else {
    return null;
  }
}
