import { useState } from "react"

const PasswordDisplay = ({password, entropy}: {password: string, entropy: string}) => {

  const [copySuccess, setCopySuccess] = useState<string>("")

  const CopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess("copied!")
    } catch (err) {
      setCopySuccess("failed")
    }
  }

  return (
    <div className="relative">
            
      <div className="border-dashed border-2 p-2 my-2 border-teal-500 overflow-auto">
        <p className="text-gray-700 text-lg font-mono font-extralight">
          {password}
        </p>
        <button title="copy to clipboard" className="absolute bottom-10 right-1 space-x-4 rounded focus:bg-teal-600/70 hover:bg-teal-400/50" onClick={() => CopyToClipboard(password)}>
          <svg className="w-6 h-6 dark:text-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
        </button>
      </div>

      <p className="text-gray-700 text-lg font-mono">{entropy} bits of entropy</p>
      
    </div>
  );
}

export default PasswordDisplay;