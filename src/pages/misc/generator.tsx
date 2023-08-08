
import { SpecialToggle, Toggle } from "@/components/Toggle";
import Container from "@/components/container";
import PageBody from "@/components/pageBody";
import PasswordDisplay from "@/components/passwordDisplay";
import Slider from "@/components/slider";
import passphraseService from "@/services/passphraseService";

import { SetStateAction, useEffect, useState } from "react";


const Disclaimer = () => (
  <div className="p-1 mx-1 md:mx-auto w-full max-w-4xl">
    <br></br>
    <h1 className="text-xs text-left text-slate-500 font-bold">Disclaimers:</h1>
    <p className="my-1 text-xs text-slate-500 text-left">
      The generated passphrases are not stored anywhere; everything is loaded and executed client side, including the word bank. Passphrase generation pulls words from a bank of 10,000 of the most commonly used english words and selects from it using <span className="font-mono">Crypto.getRandomValues()</span>.
    </p>
    <p className="my-2 text-xs text-slate-500 text-left">
      The word bank has not been sanitized for profanity (which has the side benefit of potentially more memorable passphrases), so profanity, slurs, or otherwise scandalizing randomized strings of words may appear.
    </p>
  </div>
);

const calculateEntropy = (passphraseLength: number, useSeparators: boolean, numbers: number) => {

  // separator permutations are dominated by the other sources of entropy, but we count it anyway
  const separatorPerms = useSeparators ? (8 ** (passphraseLength-1)) : 0
  console.log(
    `given passphrase length ${passphraseLength}, separator number: ${passphraseLength-1}, number count: ${numbers}`
  )
  const perms = 10000 ** (passphraseLength) + separatorPerms + (9**numbers)
  return Math.log2(perms).toFixed(2)
}

const Generator = () => {
  const [passphraseLength, setPassphraseLength] = useState<number>(4);
  const [useSeparators, setUseSeparators] = useState<boolean>(false);
  const [spaceBetween, setSpaceBetween] = useState<boolean>(true);
  const [titleCase, setTitleCase] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [numbers, setNumbers] = useState<number>(2);
  const [entropy, setEntropy] = useState<string>("0");

  const handleToggleCharacters = () => {
    setUseSeparators(!useSeparators);
    if (!useSeparators) {
      setSpaceBetween(false);
    }
  }

  const handleToggleSpaces = () => {
    setSpaceBetween(!spaceBetween);
    if (!spaceBetween) {
      setUseSeparators(false);
    }
  }

  const generatePassword = (length: number, separators: boolean, numbers: number, titleCase: boolean, spaceBetween: boolean) => async () => {
    if (length < 1) length = 1
    
    const passphrase = passphraseService.getPassphrase(length, separators, numbers, titleCase, spaceBetween)
    
    setEntropy(calculateEntropy(passphraseLength, useSeparators, numbers))
    setPassword(passphrase)
  }

  useEffect(() => {

    const setFirstPassword = async () => {
      const passphrase = passphraseService.getPassphrase(passphraseLength, useSeparators, numbers, titleCase, spaceBetween)
      setEntropy(calculateEntropy(passphraseLength, useSeparators, numbers))
      setPassword(passphrase)
    }
    void setFirstPassword()
  }, [])
  
  return (
    <Container>
      <PageBody>        
        <h1 className="text-3xl md:text-4xl pt-4 pb-8 text-center text-slate-700 font-bold">
            Passphrase Generator
        </h1>

        <div className="text-center">
          <label className="text-slate-800 text-lg mr-2">Length:</label>
          <Slider 
            sliderValue={passphraseLength} 
            setSliderValue={setPassphraseLength}
            min={1}
            max={20}
          />
          <input 
            onChange={(e) => setPassphraseLength(parseInt(e.target.value))}
            type="number" 
            className="pl-1 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={passphraseLength}
            min="1"
            max="20"
          />
      
          <div id="options-checkboxes" className="block justify-center mt-2 mb-8 md:flex flex-wrap">
            <Toggle 
              label="Title Case?" 
              toggleValue={titleCase} 
              setToggleValue={setTitleCase} 
            />
            <div id="separator-options" className="border inline-block border-gray-200 p-2 rounded-md text-slate-800">
              <span className="font-bold text-lg">Separators:</span>
              <SpecialToggle 
                label="Characters?" 
                toggleValue={useSeparators} 
                handleToggle={handleToggleCharacters}
              />
              <SpecialToggle 
                label="Spaces?" 
                toggleValue={spaceBetween} 
                handleToggle={handleToggleSpaces}
              />
            </div>
            <div id="numbers-selector" className="p-2">
              <label className="text-slate-800 text-lg ml-3 mr-1">
                Numbers: 
              </label>
              <input
                onChange={(e) => setNumbers(parseInt(e.target.value))} 
                value={numbers} 
                type="number" 
                className="pl-1 mr-2 w-12 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                min="0"
                max="20"
              />
            </div>
          </div>

          {password ? <PasswordDisplay password={password} entropy={entropy}/> : null}
          
          <div className="text-xl py-4 text-center">
            <button
              className="bg-teal-700 border-slate-800/70 border-4 border-dashed focus:bg-teal-300 hover:bg-teal-400 text-xl text-white py-2 px-8 rounded-xl"
              name="Generate!"
              onClick={generatePassword(passphraseLength, useSeparators, numbers, titleCase, spaceBetween)}
            >
              regenerate ⟳
            </button>
          </div>
        </div>
      </PageBody>
      <Disclaimer />
    </Container>
  );
}

export default Generator;