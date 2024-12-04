"use client";
import React from "react";
import { useState } from 'react';
import Image from "next/image";
import { comment } from "postcss";

interface formData{
  hiddenField: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  date: string;
  comm: string;
  consent: boolean;
}

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    hiddenField: '',
    name: '',
    email: '',
    phone:'',
    country:'',
    date:'',
    comm:'',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const openModal = (hiddenValue: string) => {
    setFormData({ ...formData, hiddenField: hiddenValue });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ hiddenField: '', name: '', email: '', phone:'', country:'', date:'',comm:'',consent: false });
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value == 'russia') {
      setFormData({ ...formData, country: value });
    } else if (value == 'narnia') {
      setFormData({ ...formData, country: value });
    } else if (value == 'jianghu') {
      setFormData({ ...formData, country: value });
    } else if (value == 'netland') {
      setFormData({ ...formData, country: value });
    } else if (value == 'mordor') {
      setFormData({ ...formData, country: value });
    } else if (value == 'oz') {
      setFormData({ ...formData, country: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, country, date, comm, consent } = formData;

    // Проверка заполненности полей
    if (!name  ||!email || !consent || !phone || !date) {
      alert('Пожалуйста, заполните все поля и согласитесь на обработку данных.');
      return;
    }

    // Отправка формы
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      {/* Кнопки */}
      <div className="flex text-xl flex-col sm:flex-row gap-y-2 sm:gap-x-4 justify-center">
        <div className="sm:w-[33%] drop-shadow-xl">
          <img className="aspect-square" src="https://thumbs.dreamstime.com/b/красивый-маленький-серый-кот-на-желтом-фоне-выглядит-и-играет-172355991.jpg" alt="Котик"/>
          <div className="text-center font-bold bg-white">Сайт-визитка</div>
          <button
          className="btn bg-[#0a493f] text-white w-full text-center hover:bg-[#f29829]"
          onClick={() => openModal('Кнопка 1')}>
          Заказать
          </button>
        </div>
        
        <div className="sm:w-[33%] drop-shadow-lg">
          <img className="aspect-square" src="https://thumbs.dreamstime.com/b/красивый-маленький-серый-кот-на-желтом-фоне-выглядит-и-играет-172355991.jpg" alt="Котик"/>
          <div className="text-center font-bold bg-white">Сайт-визитка</div>
          <button
          className="btn bg-[#0a493f] text-white w-full text-center hover:bg-[#f29829]"
          onClick={() => openModal('Кнопка 2')}>
          Заказать
          </button>
        </div>

        <div className="sm:w-[33%] drop-shadow-lg">
          <img className="aspect-square" src="https://thumbs.dreamstime.com/b/красивый-маленький-серый-кот-на-желтом-фоне-выглядит-и-играет-172355991.jpg" alt="Котик"/>
          <div className="text-center font-bold bg-white">Сайт-визитка</div>
          <button
          className="btn bg-[#0a493f] text-white w-full text-center hover:bg-[#f29829]"
          onClick={() => openModal('Кнопка 3')}>
          Заказать
          </button>
        </div>
      </div>

      <div className="story-text text-justify text-xl p-4 flex flex-col gap-y-4">
        <p>Современный Интернет совершенно немыслим без котов. Более того, история человеческой цивилизации немыслима без котов. Нахальные пушистые задницы сопровождают нас уже много тысяч лет, и даже немного странно, что постоянными обитателями всемирной сети они стали не так уж давно. Зато теперь количество мемов с котами огромно, а история интернет-культуры знает множество популярных кошаков всех цветов и размеров. Проследим же кошачий путь от первого «мяу» у жилища человека к вершинам популярности в глобальной сети!</p>
        <p>История сближения людей и кошек довольно необычна. Первым домашним животным древнего человека, задолго до появления производящего хозяйства, стала собака. Нашим первобытным предком пришлось повозиться не одну тысячу, если не десяток тысяч лет, чтобы «не выступающие в цирке» суровые дикие волки превратились-таки в приносящих тапки пёселей. С кошками всё случилось позже и… в общем-то, нечаянно.</p>
        <p>Довольно быстро сложился взаимовыгодный симбиоз между людьми и кошками. Именно потому, что всё получилось, в общем-то, спонтанно, без целенаправленного отбора, кошки и по сей день остаются довольно-таки самостоятельными созданиями. И человеков, в лучшем случае, держат за равных себе.</p>
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Оформление заказа</h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={closeModal}
              >
                &#10005;
              </button>
            </div>

            {/* Содержимое формы */}
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="hiddenField"
                  value={formData.hiddenField}
                />

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="customer@mail.domain"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Номер телефона
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="+7 (495) 123-45-67"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Страна
                  </label>
                  <select 
                    name="country"
                    value={formData.country}
                    onChange={handleSelectChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  >
                        <option value="russia">Россия</option>
                        <option value="narnia">Нарния</option>
                        <option value="jianghu">Зянху</option>
                        <option value="netland">Нетландия</option>
                        <option value="mordor">Мордор</option>
                        <option value="oz">Страна Оз</option>
                    </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Дата
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="01.01.2001"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Комментарий
                  </label>
                  <input
                    type="text"
                    name="comm"
                    value={formData.comm}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Необязательно для заполнения"
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">
                    Я согласен на обработку персональных данных
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0a493f] text-white py-2 rounded-md hover:bg-[#f29829]"
                >
                  Отправить
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  Спасибо за заказ!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}