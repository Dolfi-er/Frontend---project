import React from "react";

export default function FirstSem() {
  return (
    <div className="flex flex-col sm:flex-row text-xl">
      <div className="flex flex-col items-center w-full sm:w-1/6 sm:border-r-4 sm:border-[#0a493f] sm:p-2 sm:items-start gap-y-2">
        <h3 className="text-2xl font-bold">Навигация</h3>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor1">Лекции</a>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor2">Практики</a>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor3">Адрес ВУЗа</a>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor4">Рабочая программа</a>
      </div>

      <div className="p-2 sm:w-5/6">
        <div>
          <h2 id="anchor1" className="text-4xl font-bold p-3">Лекции</h2>
          <table className="w-[100%] text-center border-collapse border border-slate-400">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Тема</th>
                <th>Посещение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Основы языка HTML</td>
                <td className="checkbox"><input type="checkbox" checked/></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Углубленное изучение HTML</td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Основы работы с CSS</td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Адаптивная верстка. Flexbox и Grid Layout</td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Bootstrap — работа с фреймворком</td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Основы языка JavaScript</td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Работа с DOM и событиями в JavaScript</td>
                <td className="checkbox"><input type="checkbox"/></td>
                </tr>
              <tr>
                <td>8</td>
                <td>Введение в GitHub и GitHub Pages</td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h2 id="anchor2" className="text-4xl font-bold p-3">Практики</h2>
          <table className="w-[100%] text-center border-collapse border border-slate-400">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Тема</th>
                <th>Посещение</th>
                <th>Выполнение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Основы языка HTML</td>
                <td className="checkbox"><input type="checkbox" checked/></td>
                <td className="checkbox"><input type="checkbox" checked/></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Формы и кнопки в HTML</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Таблицы и интерактивные элементы HTML</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Основы работы с CSS</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
                </tr>
              <tr>
                <td>5</td>
                <td>Работа с классами в CSS</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Работа со стеками и разметкой в HTML</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Адаптивная верстка</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Bootstrap</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Основы языка JavaScript</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>10</td>
                <td>Базовые задачи на JS</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>11</td>
                <td>DOM-структура приложений и работа с объектами в языке JS</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>12</td>
                <td>Встраивание скриптов</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>13</td>
                <td>Отладка сценариев</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Анимации и работа с ними</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>15</td>
                <td>Github</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
              <tr>
                <td>16</td>
                <td>Защита проекта</td>
                <td className="checkbox"><input type="checkbox"/></td>
                <td className="checkbox"><input type="checkbox"/></td>
              </tr>
            </tbody>
          </table>
         </div>

         <div>
            <h2 id="anchor3" className="text-4xl font-bold p-3">Занятия проходят по адресу: пр. Вернадского 78</h2>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A227af58a14e550c888a2b212f76634a014c576d082db2a296adec4fdcf4695b6&amp;source=constructor" width="500" height="400" allowFullScreen></iframe>
          </div>

          <div>
            <h2 id="anchor4" className="text-4xl font-bold p-3">Рабочая программа</h2>
            <object className="pdf" 
                    data=
                    "https://co4h.colostate.edu/projects/manuals/Cats-WashingtonState-U3.pdf"
                    width="100%"
                    height="600px"
            />
          </div>
      </div>
    </div>
  );
}