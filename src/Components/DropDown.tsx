
export function DropDown( {role , setRole}) {
    return (
        <div className="text-left mt-2">
            <label className="text-sm text-neutral-500 font-medium">Register as:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 p-2 text-white rounded"
            >
              <option className="text-white rounded-3xl bg-black" value="user">User</option>
              <option className="text-white rounded-3xl bg-black" value="admin">Admin</option>
            </select>
          </div>
    )
}