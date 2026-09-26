function App() {
  return (
      <main className="min-h-screen w-full bg-[#235789] p-4">
        <section className="h-full min-h-[calc(100vh-2rem)] w-full max-w-md rounded-xl bg-[#FDFFFC] p-6">

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#235789]">
              Add Employee
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Enter employee information
            </p>
          </div>

          <form className="space-y-4">

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee Name
              </label>

              <input
                  type="text"
                  placeholder="Employee Name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"/>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee ID
              </label>

              <input
                  type="text"
                  placeholder="Employee ID"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee Position
              </label>

              <input
                  type="text"
                  placeholder="Employee Position"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employer Name
              </label>

              <input
                  type="text"
                  placeholder="Employer Name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Profile Photo
              </label>

              <input
                  type="url"
                  placeholder="Profile Photo URL"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-[#235789] px-4 py-2 font-medium text-white transition hover:bg-[#1b456d]"
            >
              Add Employee
            </button>

          </form>
        </section>
      </main>
  );
}

export default App;