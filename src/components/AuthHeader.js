import Logo from "./Logo";

export default function AuthHeader() {
  return (
    <div className="border-b border-slate-200 px-6 py-4">
      <Logo />
      <p className="mt-1 text-xs font-medium text-slate-500">India</p>
    </div>
  );
}
