import React, {useEffect} from 'react';
import '../../App.css';
import pro from './Projects.module.css';
import btn from '../UI/buttons/Button.module.css';
import nano from '../../assets/nanotechnology.png';
import java from '../../assets/java-icon.svg';
import spring from '../../assets/springio-icon.svg';
import react from '../../assets/reactjs-icon.svg';
import redux from '../../assets/redux.svg';
import sql from '../../assets/postgresql.svg';
import postman from '../../assets/postman.svg';
import swift from '../../assets/swift-15.svg';
import kotlin from '../../assets/kotlin-1.svg';
import iphone from '../../assets/iphone.png';
import imac from '../../assets/imac.png';
import samsung_1 from '../../assets/samsung1.png';
import samsung_2 from '../../assets/samsung2.png';
import double_phone from '../../assets/iphone13.png';
import python from '../../assets/python-5.svg';
import d_ocion from '../../assets/digitalocean-icon-1.svg';
import android from '../../assets/android.png';
import firebase from '../../assets/firebase-1.svg';
import nodejs from '../../assets/nodejs-1.svg';
import js from '../../assets/javascript-1.svg';
import admin from '../../assets/admin.png';
import ipad from '../../assets/ipad.png';
import iphone_8_1 from '../../assets/iphone8.1.png';
import iphone_8_2 from '../../assets/iphone8.2.png';
import base from '../../assets/base.png';
import Button from "../UI/buttons/Button";
import { t } from "i18next";
import {useTranslation} from "react-i18next";

function Projects() {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <section className={pro.projects}>
      <h4>{t('project_page')}</h4>
      <div className={pro.projects_technologies}>
        <div className={pro.projects_technologies_content}>
          <div className={pro.projects_technologies_medtech}>
            <h6>MEDTECH</h6>
            <div className={pro.projects_technologies_medtech_content}>
              <div className={pro.medtech_content_item}>{t('project_text_1')}
                <br/>
                {t('project_text_2')}
              </div>
              <ul>
                <li className={pro.projects_technologies_medtech_dot}>{t('project_text_3')}</li>
                <li className={pro.projects_technologies_medtech_dot}>{t('project_text_4')}</li>
                <li className={pro.projects_technologies_medtech_dot}>{t('project_text_5')}</li>
              </ul>
            </div>
            <Button className={`${btn.projects_btns} ${btn.btn_technology}`}>
              <img src={nano} alt=""/>
              Технологии
            </Button>
          </div>
          <div className={pro.projects_technologies_logos}>
            <div className={pro.technology_block}>
              <img src={java} alt="" className={pro.java}/>
              <p>Java</p>
            </div>
            <div className={pro.technology_block}>
              <img src={spring} alt="" className={pro.spring}/>
              <p>Spring Boot</p>
            </div>
            <div className={pro.technology_block}>
              <img src={react} alt="" className={pro.react}/>
              <p>React</p>
            </div>
            <div className={pro.technology_block}>
              <img src={redux} alt="" className={pro.redux}/>
              <p>Redux</p>
            </div>
            <div className={pro.technology_block}>
              <img src={sql} alt="" className={pro.sql}/>
              <p>PostgreSQL</p>
            </div>
            <div className={pro.technology_block}>
              <img src={postman} alt="" className={pro.postman}/>
              <p>Postman</p>
            </div>
            <div className={pro.technology_block}>
              <img src={swift} alt="" className={pro.swift}/>
              <p>Swift</p>
            </div>
            <div className={pro.technology_block}>
              <img src={kotlin} alt="" className={pro.kotlin}/>
              <p>Kotlin</p>
            </div>
          </div>
        </div>
        <div className={pro.projects_technologies_images}>
          <div className={pro.projects_technologies_images_iphone}>
            <img src={iphone} alt="" className={`${pro.iphone} ${pro.iphone_res}`}/>
          </div>
          <div className={pro.projects_technologies_images_imac}>
            <img src={imac} alt="" className={`${pro.imac} ${pro.imac_res}`}/>
          </div>
        </div>
      </div>

      <span className={pro.divider_left}></span>

      <div className={pro.projects_technologies}>
        <div className={pro.projects_technologies_images}>
          <div className={pro.projects_medtech_images_imac}>
            <img src={imac} alt="" className={`${pro.imac} ${pro.imac_res}`}/>
          </div>
          <div className={pro.projects_technologies_images_phones}>
            <div className={pro.projects_technologies_images_s1}>
              <img src={samsung_1} alt="" className={pro.iphone}/>
            </div>
            <div className={pro.projects_technologies_images_s2}>
              <img src={samsung_2} alt="" className={pro.iphone}/>
            </div>
          </div>
        </div>
        <div className={pro.projects_technologies_content}>
          <div className={pro.projects_technologies_medtech}>
            <h6>Neolabs LMS</h6>
            <div className={pro.projects_technologies_medtech_content}>
              <div className={pro.medtech_content_item}>{t('project_text_6')}<br/>{t('project_text_7')}<br/>{t('project_text_8')}</div>
            </div>
            <Button className={`${btn.projects_btns} ${btn.btn_lms}`}>
              <img src={nano} alt=""/>
              Технологии
            </Button>
          </div>
          <div className={pro.projects_technologies_logos}>
            <div className={pro.technology_block}>
              <img src={python} alt="" className={pro.python}/>
              <p>Python</p>
            </div>
            <div className={pro.technology_block}>
              <img src={d_ocion} alt="" className={pro.digital_ocean}/>
              <p>Digital ocean</p>
            </div>
            <div className={pro.technology_block}>
              <img src={android} alt="" className={pro.android_studio}/>
              <p>Android Studio</p>
            </div>
            <div className={pro.technology_block}>
              <img src={firebase} alt="" className={pro.Firebase}/>
              <p>Firebase</p>
            </div>
            <div className={pro.technology_block}>
              <img src={sql} alt="" className={pro.sql}/>
              <p>PostgreSQL</p>
            </div>
            <div className={pro.technology_block}>
              <img src={postman} alt="" className={pro.postman}/>
              <p>Postman</p>
            </div>
            <div className={pro.technology_block}>
              <img src={swift} alt="" className={pro.swift}/>
              <p>Swift</p>
            </div>
            <div className={pro.technology_block}>
              <img src={kotlin} alt="" className={pro.kotlin}/>
              <p>Kotlin</p>
            </div>
          </div>
        </div>
      </div>

      <span className={pro.divider_right}></span>

      <div className={pro.projects_technologies}>
        <div className={pro.projects_technologies_content}>
          <div className={pro.projects_technologies_medtech}>
            <h6>{t('project_text_9')}</h6>
            <div className={pro.projects_technologies_medtech_content}>
              <div className={pro.medtech_content_item}>
                {t('project_text_10')}
                <br/>
                {t('project_text_10_1')}
                <br/>
                {t('project_text_10_2')}
              </div>
            </div>
            <Button className={`${btn.projects_btns} ${btn.btn_crm}`}>
              <img src={nano} alt=""/>
              Технологии
            </Button>
          </div>
          <div className={pro.projects_technologies_logos}>
            <div className={pro.technology_block}>
              <img src={nodejs} alt="" className={pro.nodejs}/>
              <p>NodeJs</p>
            </div>
            <div className={pro.technology_block}>
              <img src={js} alt="" className={pro.js}/>
              <p>JavaScript</p>
            </div>
            <div className={pro.technology_block}>
              <img src={react} alt="" className={pro.react}/>
              <p>React</p>
            </div>
            <div className={pro.technology_block}>
              <img src={redux} alt="" className={pro.redux}/>
              <p>Redux</p>
            </div>
            <div className={pro.technology_block}>
              <img src={sql} alt="" className={pro.sql}/>
              <p>PostgreSQL</p>
            </div>
            <div className={pro.technology_block}>
              <img src={postman} alt="" className={pro.postman}/>
              <p>Postman</p>
            </div>
            <div className={pro.technology_block}>
              <img src={swift} alt="" className={pro.swift}/>
              <p>Swift</p>
            </div>
            <div className={pro.technology_block}>
              <img src={kotlin} alt="" className={pro.kotlin}/>
              <p>Kotlin</p>
            </div>
          </div>
        </div>
        <div className={pro.projects_technologies_images}>
          <div className={pro.projects_technologies_images_ipad}>
            <img src={ipad} alt="" className={pro.ipad}/>
            <div className={pro.iphone_8}>
              <img src={iphone_8_1} alt="" className={pro.iphone_8_1} />
              <img src={iphone_8_2} alt="" className={pro.iphone_8_2} />
            </div>
          </div>
          <div className={pro.project_technologies_images_imac}>
            <img src={admin} alt="" className={`${pro.imac} ${pro.imac_res}`}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;