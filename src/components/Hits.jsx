import React from "react";
import "./Hits.css";
import Tags from "./Tags";
import Propselement from "./Propselement";

export default function Hits(props) {
  return (
    <div className="hits">
      <h2 className="bestsellers">Хиты продаж</h2>
      <div className="tagblok">
        <div className="tags">
          <Tags tag="Лучшие сборки" />
          <Tags tag="Ноутбуки" />
          <Tags tag="Мышки" />
          <Tags tag="Клавиатуры" />
          <Tags tag="Блоки питания" />
          <Tags tag="Мониторы" />
          <Tags tag="Наушники" />
          <Tags tag="Коврики для мыши" />
          <Tags tag="Кастомная сборка" />
        </div>
      </div>
      <div className="produktbordrevers">
        <div className="praductBord">
          <Propselement
            img={
              "https://royal-computers.ru/upload/thumbs/catalog/source/gotovyjj-pk-eva-01-intel-core-i9-11900kf-rtx-3080-32gb-ram-1000gb-ssd_630f55.png"
            }
            name={"ИГРОВОЙ ПК ROYAL AMD MINI CORE8 "}
            country={"Испания"}
            price={"100 600"}
            xit={"Хит"}
          />
          <Propselement
            img={
              "https://royal-computers.ru/upload/thumbs/catalog/source/gotovyjj-pk-royal-win-intel-core-i9-11900-rtx-3070-ti-ram-32gb-ssd-1000gb_630649.png"
            }
            star={
              "https://img.freepik.com/premium-vector/five-stars-quality-icon-isolated-on-transparent-background-stars-rating-review_97458-424.jpg"
            }
            name={"ИГРОВОЙ ПК ROYAL NAROD WCOR9"}
            country={"Германия"}
            price={"260 990"}
            acsia={"Акция"}
            priceAcsia={"300 400₽"}
            xit={"Хит"}
          />
          <Propselement
            img={
              "https://royal-computers.ru/upload/thumbs/catalog/source/gotovyjj-pk-royal-god-modamd-ryzen-9-7950x-rtx-4090-64gb-ram-3000gb-ssd_63b042.png"
            }
            star={
              "https://img.freepik.com/premium-vector/five-stars-quality-icon-isolated-on-transparent-background-stars-rating-review_97458-424.jpg"
            }
            name={"DeepCool Matrexx 55 ADD-RGB WH"}
            country={"Германия"}
            price={"120 207"}
            xit={"Хит"}
          />
          <Propselement
            img={
              "https://royal-computers.ru/upload/thumbs/catalog/source/gotovyjj-pk-royal-cube-intel-core-i9-11900k-rtx-3070-ti-ram-32gb-ssd-1000gb-hdd-2000gb_63c159.png"
            }
            star={
              "https://img.freepik.com/premium-vector/five-stars-quality-icon-isolated-on-transparent-background-stars-rating-review_97458-424.jpg"
            }
            name={"ROYALPC SUPER НА БАЗЕ INTEL CORE I7"}
            country={"Испания"}
            price={"140 764"}
            xit={"Хит"}
          />
          <Propselement
            img={
              "https://royal-computers.ru/upload/thumbs/sborki/default/royal-gaming-11th-gen_608949_2.png"
            }
            star={
              "https://img.freepik.com/premium-vector/five-stars-quality-icon-isolated-on-transparent-background-stars-rating-review_97458-424.jpg"
            }
            name={`ROYALPC SUPER НА БАЗЕ RYZEN7`}
            country={"Россия, Украина"}
            price={"150 730"}
            acsia={"Акция"}
            priceAcsia={"170 650₽"}
            xit={"Хит"}
          />
        </div>
      </div>
      <div className="акция">
        <h2 className="bestsellerss www">Акции</h2>

        <div className="tagblok">
          <div className="tags">
            <Tags tag="Лучшие сборки" />
            <Tags tag="Ноутбуки" />
            <Tags tag="Мышки" />
            <Tags tag="Клавиатуры" />
            <Tags tag="Блоки питания" />
            <Tags tag="Мониторы" />
            <Tags tag="Наушники" />
            <Tags tag="Коврики для мыши" />
            <Tags tag="Кастомная сборка" />
          </div>
        </div>

        <div className="produktbordreverss">
          <div className="praductBord">
            <Propselement
              img={
                "https://royal-computers.ru/upload/thumbs/sborki/default/royal-conquer_5fb833.png"
              }
              name={"ROYALPC SUPER НА БАЗЕ RYZEN 9"}
              country={"Испания"}
              price={70600}
              acsia={"Акция"}
              priceAcsia={"60 350₽"}
            />
            <Propselement
              img={
                "https://royal-computers.ru/upload/thumbs/sborki/default/royalpc-super-na-baze-ryzen-9_5f5891.png"
              }
              name={"ROYALPC SUPER НА БАЗЕ INTEL CORE I9"}
              country={"Германия"}
              price={"50 990"}
              xit={"Хит"}
              acsia={"Акция"}
              priceAcsia={"70 000₽"}
            />
            <Propselement
              img={
                "https://royal-computers.ru/upload/thumbs/sborki/default/royalpc-na-baze-intel-core-i3-10th_5f5896.png"
              }
              name={"ROYALPC НА БАЗЕ INTEL CORE I3 10TH"}
              country={"Германия"}
              price={"90 207"}
              acsia={"Акция"}
              priceAcsia={"100 050₽"}
            />
            <Propselement
              img={
                "https://royal-computers.ru/upload/thumbs/sborki/default/royalpc-na-baze-intel-core-i5-10th_5f2fa0.png"
              }
              name={"ROYALPC НА БАЗЕ INTEL CORE I5 10TH"}
              country={"Испания"}
              price={"65 764"}
              priceAcsia={"70 400₽"}
              xit={"Хит"}
              acsia={"Акция"}
            />
            <Propselement
              img={
                "https://royal-computers.ru/upload/thumbs/sborki/default/igrovojj-kompjuter-royalpc-na-baze-ryzen-7_5ec694.png"
              }
              name={"DeepCool Matrexx 55 ADD-RGB WH"}
              country={"Россия"}
              price={"120 730"}
              acsia={"Акция"}
              xit={"Хит"}
              priceAcsia={"150 400₽"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Muhammad juniour
