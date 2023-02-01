import React, {useState} from 'react';
import '../../App.css';
import main from './Main.module.css';
import btn from '../UI/buttons/Button.module.css';
import {useSearchParams} from 'react-router-dom'
import embed from '../../assets/embed.png';
import main_logo from '../../assets/header_logo.png';
import Button from "../UI/buttons/Button";
import {useTranslation} from "react-i18next";

function Main() {
  const [lang, setLang] = useState('en')
  const {t, i18n} = useTranslation();
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang");
  localStorage.setItem("language", language);

  const onchangeEn = () => {
    i18n.changeLanguage("en")
  }

  const onchangeRu = () => {
    i18n.changeLanguage("ru")
  }

  const handleRu = () => {
    setLang('ru')
  }

  const handleEn = () => {
    setLang('en')
  }

  return (
    <section className={main.main}>
      <header>
        <div className={main.header_logo}>
          <img src={main_logo} alt=""/>
        </div>
        <div className={main.header_content}>
          <ul className={main.header_list}>
            <li>{t('service')}</li>
            <li>{t('project')}</li>
            <li>{t('aboutUs')}</li>
            <li>{t('contacts')}</li>
          </ul>
          <div className={btn.main_btn_block}>
            <Button
              className={lang === 'ru' ? btn.btn_active : btn.btn_inactive}
              onClick={() => {
                onchangeRu()
                handleRu()
              }}
            >
              Ru
            </Button>
            <Button
              className={lang === 'en' ? btn.btn_active : btn.btn_inactive}
              onClick={() => {
                onchangeEn()
                handleEn()
              }}
            >
              En
            </Button>
          </div>
        </div>
      </header>
      <div className={main.main_content}>
        <div className={main.main_content_logo}>
          <img src={embed} alt=""/>
          <h1 className={main.main_content_logo_title}>SoftTech</h1>
        </div>
        <div className={main.main_content_title}>
          {t('mainPageText')}
        </div>
      </div>
    </section>
  );
}

export default Main;