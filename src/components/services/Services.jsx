import React, {useEffect} from 'react';
import '../../App.css';
import ser from './Services.module.css';
import btn from '../UI/buttons/Button.module.css';
import arrow from '../../assets/arrow.svg';
import landing_page from '../../assets/landing_page.png';
import site_visit from '../../assets/site_visit.jpg';
import catalog from '../../assets/catalog.jpg';
import corporative from '../../assets/corporative.jpg';
import individual from '../../assets/individual.jpg';
import store from '../../assets/store.png';
import phone from '../../assets/phone.png';
import cloud_up from '../../assets/cloud_up.png';
import cloud_down from '../../assets/cloud_up.png';
import rocket from '../../assets/rocket.png'
import site_rate from '../../assets/site_rate.png';
import site_icon from '../../assets/site_icon.png';
import laptop from '../../assets/laptop.png';
import client from '../../assets/client.png';
import client_message from '../../assets/client_message.png';
import hand from '../../assets/hand.png';
import worker from '../../assets/worker.png';
import notepad from '../../assets/notepad.png';
import nokia from '../../assets/nokia.png';
import mobile_message from '../../assets/mobile_message.png';
import Button from "../UI/buttons/Button";
import {ImEmbed2} from 'react-icons/im';
import { t } from "i18next";
import {useTranslation} from "react-i18next";

function Services() {

  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);
  return (
    <section className={ser.services}>
      <h2>{t('companuService')}</h2>
      <div className={ser.services_content}>
        <h5>{t('webDev')}</h5>
        <div className={ser.services_content_item}>
          <p>{t('webDevText_1')}</p>
          <p>{t('webDevText_3')}</p>
        </div>
      </div>

      <div className={ser.services_mobile_app_block}>
        <div className={ser.services_explaining_text}>
          <p><span>{t('webDevText_2')}</span> {t('webDevText_2_2')}</p>
        </div>
        <div className={ser.services_explaining_items}>
          <div className={ser.services_mobile_app_icons}>
            <img src={cloud_up} alt="" className={ser.cloud_up}/>
            <img src={phone} alt="" className={ser.phone}/>
            <img src={cloud_down} alt="" className={ser.cloud_down}/>
          </div>
          <div className={ser.mobile_app_tecnolofies}>
            <h5>{t('enumeration_text_15')}</h5>
            <div className={`${ser.services_content_item} ${ser.mobile_app_item}`}>
              <p>{t('enumeration_text_16')} <span>{t('enumeration_text_16_1')}</span> {t('enumeration_text_16_2')}</p>
            </div>
          </div>
          <div className={ser.mobile_app_tecnolofies_item}>
            <div className={`${ser.services_content_item} ${ser.mobile_app_items}`}>
              <div className={ser.mobile_app_items_title}>
                <span>1</span>
                <p>{t('enumeration_text_17')}</p>
              </div>
              <p>{t('enumeration_text_18')}</p>
            </div>
            <div className={`${ser.services_content_item} ${ser.mobile_app_items}`}>
              <div className={ser.mobile_app_items_title}>
                <span>2</span>
                <p>{t('enumeration_text_19')}</p>
              </div>
              <p>{t('enumeration_text_20')}</p>
            </div>
          </div>
          <div className={`${ser.mobile_app_tecnolofies_item} ${ser.mobile_app_tecnolofies_it}`}>
            <div className={`${ser.services_content_item} ${ser.mobile_app_items}`}>
              <div className={ser.mobile_app_items_title}>
                <span>3</span>
                <p>{t('enumeration_text_21')}</p>
              </div>
              <p>{t('enumeration_text_22')}</p>
            </div>
            <div className={`${ser.services_content_item} ${ser.mobile_app_items}`}>
              <div className={ser.mobile_app_items_title}>
                <span>4</span>
                <p>{t('enumeration_text_23')}</p>
              </div>
              <p>{t('enumeration_text_24')}</p>
            </div>
          </div>
        </div>
        <div className={ser.services_explaining_textt}>
          <p>{t('enumeration_text_25')} <span>{t("enumeration_text_25_1")}</span> {t('enumeration_text_25_2')}</p>
        </div>
      </div>

      <div className={ser.development_process}>
        <div className={ser.development_process_title}>
          <div className={ser.development_circle}></div>
          <div className={ser.development_title_content}>
            <div className={ser.development_title_logo}>
              <ImEmbed2 className={ser.development_logo}/>
              <p>Mountain Hub</p>
            </div>
            <h4>{t('enumeration_text_26')}</h4>
          </div>
        </div>
        <div className={ser.development_process_content}>
          <div className={ser.development_process_content_logo}>
            <img src={cloud_up} alt="" className={ser.development_cloud_up}/>
            <img src={rocket} alt="" className={ser.rocket}/>
            <img src={cloud_down} alt="" className={ser.development_cloud_down}/>
          </div>
          <div className={ser.development_process_content_items}>
            <div className={ser.process_content_item}>
              <span>1</span>
              <div className={ser.process_content_item_block}>
                <div className={ser.content_item_block_img}>
                  <img src={site_rate} alt=""/>
                </div>
                <div className={ser.content_item_block_sub_title}>
                  <p>{t('enumeration_text_27')}</p>
                  <span></span>
                </div>
                <p className={ser.content_item_block_text}>{t('enumeration_text_28')}</p>
              </div>
            </div>
            <div className={ser.process_content_item}>
              <span>2</span>
              <div className={ser.process_content_item_block}>
                <div className={ser.content_item_block_img}>
                  <img src={site_icon} alt=""/>
                </div>
                <div className={ser.content_item_block_sub_title}>
                  <p>{t('enumeration_text_29')}</p>
                  <span></span>
                </div>
                <p className={ser.content_item_block_text}>{t('enumeration_text_30')}</p>
              </div>
            </div>
            <div className={ser.process_content_item}>
              <span>3</span>
              <div className={ser.process_content_item_block}>
                <div className={ser.content_item_block_img}>
                  <img src={laptop} alt=""/>
                </div>
                <div className={ser.content_item_block_sub_title}>
                  <p>{t('enumeration_text_31')}</p>
                  <span></span>
                </div>
                <p className={ser.content_item_block_text}>{t('enumeration_text_32')}</p>
              </div>
            </div>
            <div className={ser.process_content_item}>
              <span>4</span>
              <div className={ser.process_content_item_block}>
                <div className={ser.content_item_block_img}>
                  <img src={mobile_message} alt=""/>
                </div>
                <div className={ser.content_item_block_sub_title}>
                  <p>{t('enumeration_text_33')}</p>
                  <span></span>
                </div>
                <p className={ser.content_item_block_text}>{t('enumeration_text_34')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={ser.clients}>
        <div className={ser.clients_title}>
          <span></span>
          <h4>{t('enumeration_text_35')}</h4>
        </div>
        <div className={ser.clients_grid}>
          <div className={ser.clients_grid_items}>
            <div className={ser.clients_grid_items_img}>
              <img src={client} alt="" className={ser.client}/>
            </div>
            <div className={ser.clients_grid_items_text}>
              <h6>{t('enumeration_text_36')}</h6>
              <span></span>
              <p>{t('enumeration_text_37')}</p>
            </div>
          </div>
          <div className={ser.clients_grid_items}>
            <div className={ser.clients_grid_items_img}>
              <img src={client_message} alt="" className={ser.client_message}/>
            </div>
            <div className={ser.clients_grid_items_text}>
              <h6>{t('enumeration_text_38')}</h6>
              <span></span>
              <p>{t('enumeration_text_39')}</p>
            </div>
          </div>
          <div className={ser.clients_grid_items}>
            <div className={ser.clients_grid_items_img}>
              <img src={hand} alt="" className={ser.hand}/>
            </div>
            <div className={ser.clients_grid_items_text}>
              <h6>{t('enumeration_text_40')}</h6>
              <span></span>
              <p>{t('enumeration_text_41')}</p>
            </div>
          </div>
          <div className={ser.clients_grid_items}>
            <div className={ser.clients_grid_items_img}>
              <img src={worker} alt="" className={ser.worker}/>
            </div>
            <div className={ser.clients_grid_items_text}>
              <h6>{t('enumeration_text_42')}</h6>
              <span></span>
              <p>{t('enumeration_text_43')}</p>
            </div>
          </div>
          <div className={ser.clients_grid_items}>
            <div className={ser.clients_grid_items_img}>
              <img src={notepad} alt="" className={ser.notepad}/>
            </div>
            <div className={ser.clients_grid_items_text}>
              <h6>{t('enumeration_text_44')}</h6>
              <span></span>
              <p>{t('enumeration_text_45')}</p>
            </div>
          </div>
          <div className={ser.clients_grid_items}>
            <div className={ser.clients_grid_items_img}>
              <img src={nokia} alt="" className={ser.nokia}/>
            </div>
            <div className={ser.clients_grid_items_text}>
              <h6>{t('enumeration_text_46')}</h6>
              <span></span>
              <p>{t('enumeration_text_47')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;