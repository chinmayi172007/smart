interface GenericPageProps {
  title: string;
}

export function GenericPage({ title }: GenericPageProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[150px] flex items-center justify-center">
      <h3 className="text-xl font-bold text-[#3E4C59]">{title}</h3>
    </div>
  );
}
