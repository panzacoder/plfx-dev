export function TH({ children }: { children: React.ReactNode }) {
  return (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  );
}

export function TD({ children }: { children: React.ReactNode }) {
  return (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  );
}

export function TR({ children }: { children: React.ReactNode }) {
  return <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>;
}

export function Table({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <TR>
            {headers.map((header) => (
              <TH key={header}>{header}</TH>
            ))}
          </TR>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
