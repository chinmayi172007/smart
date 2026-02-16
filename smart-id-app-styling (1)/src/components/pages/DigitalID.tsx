export function DigitalID() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
      <h3 className="text-xl font-bold text-[#3E4C59] mb-4">Digital ID</h3>
      <div className="p-4 bg-[#F9F7F2] rounded-xl w-full text-center border-dashed border-2 border-[#6B705C]">
        <p className="text-lg font-mono text-[#3E4C59]">ID: CSID00123</p>
        <p className="text-xs text-gray-400 mt-2">Valid until Dec 2025</p>
      </div>
    </div>
  );
}
