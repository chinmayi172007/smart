import { payments } from '../../data/mockData';
import { FileText, CheckCircle, CreditCard } from 'lucide-react';

export function PaymentsPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-[#3E4C59] px-2 flex items-center justify-between">
        Payments <CreditCard className="w-5 h-5 text-[#6B705C]" />
      </h3>
      
      <div className="bg-[#3E4C59] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute right-[-20px] top-[-20px] bg-white/10 w-32 h-32 rounded-full blur-xl" />
        <p className="text-sm opacity-80 mb-1">Total Outstanding</p>
        <h2 className="text-3xl font-bold mb-4">$0.00</h2>
        <button className="bg-white text-[#3E4C59] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
          Pay Now
        </button>
      </div>

      <h4 className="text-sm font-bold text-gray-500 px-2 mt-6 mb-2 uppercase tracking-wide">Recent Transactions</h4>
      
      <div className="space-y-3">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-green-50 text-green-600 rounded-full">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#3E4C59]">{payment.title}</p>
                <p className="text-xs text-gray-400">{payment.date}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-bold text-[#3E4C59] block">{payment.amount}</span>
              <button className="text-xs text-blue-500 flex items-center gap-1 mt-1 hover:underline justify-end">
                <FileText className="w-3 h-3" /> Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
