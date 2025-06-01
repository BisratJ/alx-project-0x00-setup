import React from "react"

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="bg-gray-200 text-sm text-gray-700 font-medium rounded-full px-3 py-1">
      {title}
    </span>
  )
}

export default Pill;
