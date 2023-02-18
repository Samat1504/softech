import React, {useEffect, useState} from 'react';
import '../../App.css';
import main from './Main.module.css';
import btn from '../UI/buttons/Button.module.css';
import {Link, useSearchParams} from 'react-router-dom'
import embed from '../../assets/embed.png';
import main_logo from '../../assets/header_logo.png';
import Button from "../UI/buttons/Button";
import {useTranslation} from "react-i18next";

function Main() {
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang");
  localStorage.setItem("language", language);

  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <section className={main.main}>
      <div className={main.main_content}>
        <div className={main.main_content_logo}>
          <img src={embed} alt=""/>
          <h1 className={main.main_content_logo_title}>Mountain Hub</h1>
        </div>
        <div className={main.main_content_title}>
          {t('mainPageText')}
        </div>
      </div>
    </section>
  );
}

export default Main;