import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useInteractions } from '../Context/InteractionContext';

const Stats = () => {
  const { interactions } = useInteractions();

  const data = [
    { name: 'Text', value: interactions.filter(i => i.type === 'Text').length || 1 },
    { name: 'Call', value: interactions.filter(i => i.type === 'Call').length || 1 },
    { name: 'Video', value: interactions.filter(i => i.type === 'Video').length || 1 },
  ];
  const COLORS = ['#8b5cf6', '#2d4a3e', '#5eb471'];

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-6 md:mb-8 text-center md:text-left">
          Friendship Analytics
        </h1>
        <div className="bg-white p-6 md:p-12 rounded-xl shadow-sm border border-slate-50">
          <p className="text-slate-500 font-bold text-xs md:text-sm mb-8 md:mb-12 uppercase tracking-wide text-center md:text-left">
            By Interaction Type
          </p>
          <div className="h-[300px] md:h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={window.innerWidth < 768 ? 70 : 100} 
                  outerRadius={window.innerWidth < 768 ? 100 : 140}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend 
                  iconSize={10}
                  iconType="circle" 
                  verticalAlign="bottom" 
                  align="center"
                  formatter={(value) => <span className="text-slate-500 text-[10px] md:text-xs font-bold ml-1">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;