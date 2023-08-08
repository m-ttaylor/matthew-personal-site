import { SetStateAction } from "react"

interface SpecialToggleProps {
  label: string
  toggleValue: boolean
  handleToggle: () => void
}

interface ToggleProps {
  label: string
  toggleValue: boolean
  setToggleValue: React.Dispatch<SetStateAction<boolean>>
}

const Toggle = ({ label, toggleValue, setToggleValue}: ToggleProps) => (
  <div className="p-2 md:inline-block">
    <label className="text-gray-900 text-lg ml-3 mr-1">{label}</label>
    <input 
      className="w-5 h-5 relative top-1 accent-teal-600 hover:accent-teal-500 focus:accent-teal-300"
      type="checkbox"
      onChange={()=>setToggleValue(!toggleValue)}
      checked={toggleValue}
    />
  </div>
);
const SpecialToggle = ({ label, toggleValue, handleToggle}: SpecialToggleProps) => (
  <div className="md:inline-block">
    <label className="text-gray-900 text-lg ml-3 mr-1">{label}</label>
    <input 
      className="w-5 h-5 relative top-1 accent-teal-600 hover:accent-teal-500 focus:accent-teal-300"
      type="checkbox"
      // onChange={()=>setToggleValue(!toggleValue)}
      onChange={()=>handleToggle()}
      checked={toggleValue}
    />
  </div>
);

export { Toggle, SpecialToggle, type SpecialToggleProps, type ToggleProps };