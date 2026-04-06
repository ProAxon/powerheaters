import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, Activity, Battery, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Field = 'v' | 'i' | 'r' | 'p';

export default function OhmsLawCalculator() {
  const [inputs, setInputs] = useState({ v: '', i: '', r: '', p: '' });
  const [activeFields, setActiveFields] = useState<Field[]>([]);

  const handleChange = (field: Field, value: string) => {
    // Only allow numbers and decimals
    if (value !== '' && !/^\d*\.?\d*$/.test(value)) return;

    let newActive = [...activeFields];
    if (value === '') {
      newActive = newActive.filter(f => f !== field);
    } else {
      // Move field to the end of the active array (most recently modified)
      newActive = newActive.filter(f => f !== field);
      newActive.push(field);
      // Keep only the most recent two fields as user inputs
      if (newActive.length > 2) {
        newActive.shift();
      }
    }
    setActiveFields(newActive);

    const newInputs = { ...inputs, [field]: value };

    if (newActive.length === 2) {
      const f1 = newActive[0];
      const f2 = newActive[1];
      const val1 = parseFloat(newInputs[f1]);
      const val2 = parseFloat(newInputs[f2]);

      // Helper to set values easily
      const setVals = (v: number, i: number, r: number, p: number) => {
        if (!newActive.includes('v')) newInputs.v = isNaN(v) ? '' : v.toFixed(4).replace(/\.?0+$/, '');
        if (!newActive.includes('i')) newInputs.i = isNaN(i) ? '' : i.toFixed(4).replace(/\.?0+$/, '');
        if (!newActive.includes('r')) newInputs.r = isNaN(r) ? '' : r.toFixed(4).replace(/\.?0+$/, '');
        if (!newActive.includes('p')) newInputs.p = isNaN(p) ? '' : p.toFixed(4).replace(/\.?0+$/, '');
      };

      if (!isNaN(val1) && !isNaN(val2)) {
        // We have our two values, now match which they are
        let v = parseFloat(newInputs.v);
        let i = parseFloat(newInputs.i);
        let r = parseFloat(newInputs.r);
        let p = parseFloat(newInputs.p);

        if (newActive.includes('v') && newActive.includes('i')) {
          setVals(v, i, v / i, v * i);
        } else if (newActive.includes('v') && newActive.includes('r')) {
          setVals(v, v / r, r, (v * v) / r);
        } else if (newActive.includes('v') && newActive.includes('p')) {
          setVals(v, p / v, (v * v) / p, p);
        } else if (newActive.includes('i') && newActive.includes('r')) {
          setVals(i * r, i, r, i * i * r);
        } else if (newActive.includes('i') && newActive.includes('p')) {
          setVals(p / i, i, p / (i * i), p);
        } else if (newActive.includes('r') && newActive.includes('p')) {
          setVals(Math.sqrt(p * r), Math.sqrt(p / r), r, p);
        }
      } else {
        // Clear non-active fields if calculation becomes invalid
        (Object.keys(newInputs) as Field[]).forEach(k => {
          if (!newActive.includes(k)) newInputs[k] = '';
        });
      }
    } else {
      // Clear all calculated fields if we don't have exactly 2 active inputs
      (Object.keys(newInputs) as Field[]).forEach(k => {
        if (!newActive.includes(k)) newInputs[k] = '';
      });
    }

    setInputs(newInputs);
  };

  const handleClear = () => {
    setInputs({ v: '', i: '', r: '', p: '' });
    setActiveFields([]);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ohm's Law Calculator</h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Enter any two given values to instantly calculate the remaining properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4 flex justify-center">
        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl shadow-red-900/5 p-8 sm:p-12 border border-gray-100 w-full max-w-2xl"
        >
          <div className="space-y-8">
            {/* Voltage */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                Voltage (V)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={inputs.v}
                  onChange={(e) => handleChange('v', e.target.value)}
                  className={`block w-full pl-5 pr-16 py-4 border-gray-200 bg-gray-50 border-2 rounded-2xl outline-none focus:ring-0 focus:border-red-500 transition-all font-mono text-xl ${
                    activeFields.includes('v') ? 'border-gray-300 bg-white' : 'text-gray-500'
                  }`}
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-bold">Volts</span>
                </div>
              </div>
            </div>

            {/* Current */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-500" />
                Current (I)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={inputs.i}
                  onChange={(e) => handleChange('i', e.target.value)}
                  className={`block w-full pl-5 pr-16 py-4 border-gray-200 bg-gray-50 border-2 rounded-2xl outline-none focus:ring-0 focus:border-red-500 transition-all font-mono text-xl ${
                    activeFields.includes('i') ? 'border-gray-300 bg-white' : 'text-gray-500'
                  }`}
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-bold">Amps</span>
                </div>
              </div>
            </div>

            {/* Resistance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Battery className="w-5 h-5 mr-2 text-green-500" />
                Resistance (R)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={inputs.r}
                  onChange={(e) => handleChange('r', e.target.value)}
                  className={`block w-full pl-5 pr-16 py-4 border-gray-200 bg-gray-50 border-2 rounded-2xl outline-none focus:ring-0 focus:border-red-500 transition-all font-mono text-xl ${
                    activeFields.includes('r') ? 'border-gray-300 bg-white' : 'text-gray-500'
                  }`}
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-bold">Ohms</span>
                </div>
              </div>
            </div>

            {/* Power */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-red-500" />
                Power (P)
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={inputs.p}
                  onChange={(e) => handleChange('p', e.target.value)}
                  className={`block w-full pl-5 pr-16 py-4 border-gray-200 bg-gray-50 border-2 rounded-2xl outline-none focus:ring-0 focus:border-red-500 transition-all font-mono text-xl ${
                    activeFields.includes('p') ? 'border-gray-300 bg-white' : 'text-gray-500'
                  }`}
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-bold">Watts</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <Button 
                variant="outline"
                onClick={handleClear}
                className="px-8 py-6 border-gray-200 text-gray-600 rounded-2xl hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all flex items-center group font-semibold text-base"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Clear All
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
