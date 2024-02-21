import clsx from "clsx";

export const Header = () => {
  return (
    <header
      className={clsx(
        "flex h-[64px] items-center border-b-[1px] border-stone-100 bg-white  px-4",
      )}
    >
      <div className="min-w-[248px]"></div>

      <div className="flex flex-1 justify-end">
        <div className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100">
            <span className="text-stone-500">A</span>
          </div>
          <div className="ml-2">
            <span className="text-stone-500">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};
