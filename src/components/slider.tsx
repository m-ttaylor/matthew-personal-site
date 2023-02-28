import { SetStateAction } from "react"

interface SliderProps{
  sliderValue: number
  setSliderValue: React.Dispatch<SetStateAction<number>>
  min?: number
  max?: number
}

const Slider = ({sliderValue, setSliderValue, min=1, max=100}: SliderProps) => {
  return(
    <>
    <input
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSliderValue(parseInt(e.target.value))}
      value={sliderValue}
      type="range"
      min={min}
      max={max}
      className="flex-auto my-4 accent-teal-600 mx-2 w-1/2 md:w-3/4 h-2 bg-gray-200 rounded-lg appearance-non cursor-pointer dark:bg-gray-700" 
      id="myRange" 
    />
    </>
  )
}

export default Slider;