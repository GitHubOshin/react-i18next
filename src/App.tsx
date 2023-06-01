import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lng = navigator.language
    i18n.changeLanguage(lng)
  }, [])

  const lng = navigator.language

  return (
    <>
      <h2>{t('greeting.hello')}</h2>
      <span>Browser Language: {lng}</span>
    </>
  )
}

export default App
