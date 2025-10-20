import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon, UserIcon } from "@heroicons/react/outline";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (username === 'bookstoreadmin' && password === 'ManageBook68') {
      // Store authentication token/flag
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/store-manager/listbook');
     
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-800 p-6">
      <div className="max-w-md w-full space-y-8 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-10 border border-white/20">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-white/80 rounded-full flex items-center justify-center shadow-md">
            <LockClosedIcon className="h-8 w-8 text-emerald-700" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold text-white drop-shadow-md">
            เข้าสู่ระบบ BackOffice
          </h2>
          <p className="mt-2 text-sm text-emerald-100">
            สำหรับผู้ดูแลระบบเท่านั้น
          </p>
        </div>

        <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white mb-2"
            >
              ชื่อผู้ใช้
            </label>
            <div className="relative">
              <UserIcon className="h-5 w-5 text-gray-300 absolute left-3 top-3" />
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none block w-full pl-10 pr-3 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
                placeholder="กรอกชื่อผู้ใช้"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              รหัสผ่าน
            </label>
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-300 absolute left-3 top-3" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full pl-10 pr-3 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition duration-200"
                placeholder="กรอกรหัสผ่าน"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-lg text-white font-semibold shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-emerald-100 hover:text-white transition-colors duration-200"
          >
            ← กลับสู่หน้าแรก
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
