
import React, { useState } from 'react';

const initialHoldings = [
  { stock: 'UPL', qty: 25, buy: 627.2, current: 636.5, target: 725, sl: 590, score: 82 },
  { stock: 'TATAMOTORS', qty: 10, buy: 905, current: 910, target: 1020, sl: 860, score: 88 },
];

export default function Portfolio() {
  const [holdings, setHoldings] = useState(initialHoldings);

  const updateField = (index, field, value) => {
    const updated = [...holdings];
    updated[index][field] = parseFloat(value);
    setHoldings(updated);
  };

  const calculatePnL = (h) => ((h.current - h.buy) * h.qty).toFixed(2);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Portfolio Holdings</h1>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th>Stock</th><th>Qty</th><th>Buy</th><th>Current</th><th>Target</th><th>SL</th><th>P&L</th><th>Score</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((h, idx) => {
            const pnl = calculatePnL(h);
            const isTargetHit = h.current >= h.target;
            const isSLHit = h.current <= h.sl;
            const rowClass = isTargetHit ? 'bg-green-100 animate-pulse' : isSLHit ? 'bg-red-100 animate-pulse' : '';
            return (
              <tr key={idx} className={rowClass}>
                <td>{h.stock}</td>
                <td><input value={h.qty} onChange={e => updateField(idx, 'qty', e.target.value)} className="w-12 text-center border rounded" /></td>
                <td><input value={h.buy} onChange={e => updateField(idx, 'buy', e.target.value)} className="w-20 text-center border rounded" /></td>
                <td>{h.current}</td>
                <td>{h.target}</td>
                <td>{h.sl}</td>
                <td className="font-medium">{pnl}</td>
                <td>{h.score}/100</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
