import React from "react";

function SubsTableItem({ email, date, mongoId, deleteEmail }) {
  const emailDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap"
      >
        {email ? email : "no email address"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer "
        onClick={() => deleteEmail(mongoId)}
      >
        x
      </td>
    </tr>
  );
}

export default SubsTableItem;
