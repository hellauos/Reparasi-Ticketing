import { Filter, Search } from "lucide-react";

export const TicketsList = () => {
  let list;

  list = (
    <div>
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
          <p>Mengelola akses dan data karyawan</p>
        </div>
        {/* Sebuah Drawer create Ticket */}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* search */}
            <div className="relative flex-1">
              <Search className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Cari Ticket"
                className="w-full pl-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* filter */}
            <div className="flex gap-4">
              <div className="relative">
                <select
                  name=""
                  id=""
                  className="py-2 pl-8 pr-10 border-gray-300 rounded-md appearance-none focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="false">New</option>
                  <option value="true">Completed</option>
                </select>
                <Filter className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-2 top-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return list;
};
