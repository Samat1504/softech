import React, {useEffect} from 'react';
import '../../App.css';
import cont from './Contacts.module.css';
import btn from '../UI/buttons/Button.module.css';
import Button from "../UI/buttons/Button";
import { t } from "i18next";
import {useTranslation} from "react-i18next";

function Contact() {
  const {t, i18n} = useTranslation();

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
            <p>+996 706 498 857</p>
          </div>
          <div className={cont.email}>
            <strong>E-mail:</strong>
            <p>info@softtech.kg</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;