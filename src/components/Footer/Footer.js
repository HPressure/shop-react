import React from "react";

import { compose, composeU } from "@bem-react/core";
import { cn } from "@bem-react/classname";

import "./Footer.scss";

import { Button as ButtonPresenter } from "../Button/Button";
import { withButtonTypeLink } from "../Button/_type/Button_type_link/Button_type_link";
import { withButtonThemeIcon } from "../Button/_theme/Button_theme_icon/Button_theme_icon";
import { withButtonThemeText } from "../Button/_theme/Button_theme_text/Button_theme_text";

const Button = compose(
  withButtonTypeLink,
  composeU(withButtonThemeIcon, withButtonThemeText)
)(ButtonPresenter);

function Footer(props) {
  const cnFooter = cn("Footer");
  return (
    <footer className={cnFooter({}, [props.className])}>
      <div className={cnFooter("Col Recomended")}>
        <Button type="link" theme="text" className="Recomended-Elem" href="#">
          Партнерам
        </Button>
        <Button type="link" theme="text" className="Recomended-Elem" href="#">
          Детям
        </Button>
        <Button type="link" theme="text" className="Recomended-Elem" href="#">
          ЗОЖ
        </Button>
        <Button type="link" theme="text" className="Recomended-Elem" href="#">
          Спорт
        </Button>
      </div>
      <div className={cnFooter("Col Follow")}>
        <Button type="link" className="Follow-Elem" href="#">
          <i className="Follow-Elem-Icon fas fa-shopping-cart"></i>
          <span className="Follow-Elem-Text">Пункты самовывоза</span>
        </Button>
        <Button type="link" className="Follow-Elem" href="#">
          <i className="Follow-Elem-Icon fas fa-shopping-cart"></i>
          <span className="Follow-Elem-Text">Мобильное приложение</span>
        </Button>
        <Button type="link" className="Follow-Elem" href="#">
          <i className="Follow-Elem-Icon fas fa-shopping-cart"></i>
          <span className="Follow-Elem-Text">Мобильная версия</span>
        </Button>
        <Button type="link" className="Follow-Elem" href="#">
          <i className="Follow-Elem-Icon fas fa-shopping-cart"></i>
          <span className="Follow-Elem-Text">Энциулопедия моды</span>
        </Button>
        <Button type="link" className="Follow-Elem" href="#">
          <i className="Follow-Elem-Icon fas fa-shopping-cart"></i>
          <span className="Follow-Elem-Text">Online журнал</span>
        </Button>
        <Button type="link" className="Follow-Elem" href="#">
          <i className="Follow-Elem-Icon fas fa-shopping-cart"></i>
          <span className="Follow-Elem-Text">Модный блог</span>
        </Button>
      </div>
      <div className={cnFooter("Col Help")}>
        <Button type="link" className="Help-Title" href="#">
          <span className="Help-Title-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
        <Button type="link" className="Help-Elem" href="#">
          <span className="Help-Elem-Text">Сервис и поддержка</span>
        </Button>
      </div>
      <div className={cnFooter("Col About")}>
        <Button type="link" className="About-Title" href="#">
          <span className="About-Title-Text">О компании</span>
        </Button>
        <Button type="link" className="About-Elem" href="#">
          <span className="About-Elem-Text">О нас</span>
        </Button>
        <Button type="link" className="About-Elem" href="#">
          <span className="About-Elem-Text">О нас</span>
        </Button>
        <Button type="link" className="About-Elem" href="#">
          <span className="About-Elem-Text">О нас</span>
        </Button>
        <Button type="link" className="About-Elem" href="#">
          <span className="About-Elem-Text">О нас</span>
        </Button>
        <Button type="link" className="About-Elem" href="#">
          <span className="About-Elem-Text">О нас</span>
        </Button>
        <Button type="link" className="About-Elem" href="#">
          <span className="About-Elem-Text">О нас</span>
        </Button>
      </div>
      <div className={cnFooter("Col Social")}>
        <Button type="link" className="Social-Title" href="#">
          <span className="Social-Title-Text">Следуйте за нами</span>
        </Button>
        <div className="Social-Links">
          <Button type="link" className="Social-Links-Elem" href="#">
            <i class="fab fa-vk"></i>
          </Button>
          <Button type="link" className="Social-Links-Elem" href="#">
            <i class="Social-Elem-Icon fab fa-instagram"></i>
          </Button>
          <Button type="link" className="Social-Links-Elem" href="#">
            <i class="fab fa-facebook-f"></i>
          </Button>
          <Button type="link" className="Social-Links-Elem" href="#">
            <i class="fab fa-twitter"></i>
          </Button>
          <Button type="link" className="Social-Links-Elem" href="#">
            <i class="fab fa-youtube"></i>
          </Button>
          <Button type="link" className="Social-Links-Elem" href="#">
            <i class="fab fa-odnoklassniki"></i>
          </Button>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
