import type { ClientLogo } from "@/types";

type ClientLogosProps = {
  logos: ClientLogo[];
};

export default function ClientLogos({ logos }: ClientLogosProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {logos.map((client) => (
        <div key={client.id} className="rounded-3xl border border-black/10 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-slate-950 text-sm font-semibold leading-10 text-white">
            {client.name.charAt(0)}
          </div>
          <p className="text-sm font-semibold text-slate-950">{client.name}</p>
        </div>
      ))}
    </div>
  );
}
