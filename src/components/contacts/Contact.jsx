import React, {useEffect} from 'react';
import '../../App.css';
import cont from './Contacts.module.css';
import btn from '../UI/buttons/Button.module.css';
import Button from "../UI/buttons/Button";
import { t } from "i18next";
import {useTranslation} from "react-i18next";

function Contact() {
  const {t, i18n} = useTranslation();

  const handleOpenEmail = () => {
    const openEmail = 'https://mail.google.com/mail/u/0/#inbox'
  }

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <section className={cont.contacts_block}>
      <div className={cont.contacts_block_title}>
        <h3>{t('contact_us')}</h3>
        <p>{t('contact_us_text')}</p>
        <div className={cont.contacts_block_fields}>
          <form className={cont.input_block}>
            <input
              className={cont.rbsid_input_item}
              required
              type="text"
              autoComplete='off'
            />
            <label className={cont.label_item}>{t('name')}</label>
          </form>
          <form className={cont.input_block}>
            <input
              className={cont.rbsid_input_item}
              required
              type="text"
              autoComplete='off'
            />
            <label className={cont.label_item}>{t('mail')}</label>
          </form>
          <form className={cont.input_block}>
            <input
              className={cont.rbsid_input_item}
              required
              type="text"
              autoComplete='off'
            />
            <label className={cont.label_item}>{t('phone')}</label>
          </form>
          <div className={btn.btn_contact_block}>
            <Button className={btn.btn_contact}>{t('send')}</Button>
          </div>
        </div>
      </div>
      <div className={cont.contacts}>
        <h2>{t('contacts')}</h2>
        <div className={cont.contact_data}>
          <div className={cont.phone}>
            <strong>{t('tel')}</strong>
            <p><a href="tel:+996 706 498 857" style={{color: '#fff'}}>+996 706 498 857</a></p>
          </div>
          <div className={cont.email}>
            <strong>E-mail:</strong>
            <p onClick={(e) => {
              window.location.href = 'mailto:talbercs@gmail.com';
              e.preventDefault();
            }}><a href="" style={{color: '#fff'}}>info@softtech.kg</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;