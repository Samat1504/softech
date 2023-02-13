import React, {useEffect} from 'react';
import '../../App.css';
import us from './AboutUs.module.css';
import dream_desk from '../../assets/dream_desk.png';
import { t } from "i18next";
import {useTranslation} from "react-i18next";

function AboutUs() {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <section className={us.about_us}>
      <div className={us.about_us_garanty}>
        <h4>{t('project_text_11')}<span>{t('project_text_11_1')}</span>{t('project_text_11_2')}</h4>
        <div className={us.about_us_garanty_content}>
          <div className={us.garanty_content_items}>
            <div className={us.garanty_content_items_title}>
              <span>1</span>
              <p>{t('project_text_12')}</p>
            </div>
            <p>{t('project_text_13')}</p>
          </div>
          <div className={us.garanty_content_items_img}>
            <div className={us.garanty_content_items}>
              <div className={us.garanty_content_items_title}>
                <span>2</span>
                <p>{t('project_text_14')}</p>
              </div>
              <p>{t('project_text_15')}</p>
            </div>
            <img src={dream_desk} alt=""/>
          </div>
          <div className={us.garanty_content_items}>
            <div className={us.garanty_content_items_title}>
              <span>3</span>
              <p>{t('project_text_16')}</p>
            </div>
            <p>{t('project_text_17')}</p>
          </div>
        </div>
      </div>
      <div className={us.about_us_content}>
        <h3>{t('about_title')}</h3>
        <div className={us.about_us_content_items}>
          <p>{t('about_text_1')}</p>
        </div>
        <div className={`${us.about_us_content_items} ${us.about_us_content_items_second}`}>
          <p>{t('about_text_2')}</p>
        </div>
        <h6>{t('about_text_3')} <span>{t('about_text_3_1')}</span> {t('about_text_3_2')}</h6>
      </div>
    </section>
  );
}

export default AboutUs;