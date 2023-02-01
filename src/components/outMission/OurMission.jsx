import React from 'react';
import '../../App.css';
import gallery from '../../assets/network_message.png';
import man from '../../assets/man.png';
import notification from '../../assets/gallery.png';
import abstract from '../../assets/photo.png';
import our from './OurMission.module.css';
import { t } from "i18next";

function OurMission() {
  const lang = localStorage.getItem("language");

  return (
    <section className={our.mission}>
      <h2>{t('ourMission')}</h2>
      <div className={our.mission_content_block}>
        <div className={our.mission_content_item}>
          <p className={our.mission_content_text}>{t("mission_1_1")} <span>{t('mission_1_2')}</span> {t('mission_1_3')}</p>
        </div>
      </div>
      <div className={our.mission_sub_content}>
        <div className={our.mission_sub_icons}>
          <img src={notification} alt="" className={our.mission_notification}/>
          <img src={man} alt="" className={our.mission_man}/>
          <img src={gallery} alt="" className={our.mission_gallery}/>
        </div>
        <div className={our.mission_sub_item}>
          <p className={our.mission_sub_text}>{t('mission_2')}</p>
        </div>
        <img src={abstract} alt="" className={our.abstract}/>
      </div>
    </section>
  );
}

export default OurMission;