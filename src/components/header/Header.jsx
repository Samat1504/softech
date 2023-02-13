import React, {useState} from 'react';
import main from "../main/Main.module.css";
import main_logo from "../../assets/header_logo.png";
import {Link, useSearchParams} from "react-router-dom";
import btn from "../UI/buttons/Button.module.css";
import Button from "../UI/buttons/Button";
import {useTranslation} from "react-i18next";
import head from './Header.module.css';

function Header() {
  const [lang, setLang] = useState('en')
  const {t, i18n} = useTranslation();
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang");
  localStorage.setItem("language", language);
  const [open, setOpen] = useState(false);

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
    <div className={head.header_block}>
      <header>
        <div className={main.hamburger}>
          <span className={main.bar}></span>
          <span className={main.bar}></span>
          <span className={main.bar}></span>
        </div>
        <div className={main.header_logo}>
          <img src={main_logo} alt=""/>
        </div>
        <div className={main.header_content}>
          <ul className={main.header_list}>
            <Link to='/'><li>{t('home')}</li></Link>
            <Link to='/services'><li>{t('service')}</li></Link>
            <Link to='/projects'><li>{t('project')}</li></Link>
            <Link to='/about'><li>{t('aboutUs')}</li></Link>
            <Link to='/contacts'><li>{t('contacts')}</li></Link>
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
    </div>
  );
}

export default Header;