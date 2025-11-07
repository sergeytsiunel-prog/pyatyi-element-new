import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-10 space-y-10">
        {/* Заголовок */}
        <div className="text-center border-b pb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide mb-2">
            ПЯТЫЙ ЭЛЕМЕНТ
          </h1>
          <p className="text-lg italic text-gray-500">
            Каталитическое обновление
          </p>
          <p className="mt-2 text-gray-600">
            Верни себе тишину внутри, ясность ума и энергию жить
          </p>
        </div>

        {/* Это про тебя */}
        <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-indigo-400">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            ЭТО ПРО ТЕБЯ?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Если ты чувствуешь, что живешь на автопилоте, носишь маску и ищешь
            не советов, а настоящего переживания, которое всё расставит по
            местам...
          </p>
        </div>

        {/* Суть метода */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">СУТЬ МЕТОДА</h2>

          <div className="relative grid grid-cols-3 gap-6 justify-items-center items-center py-10">

            {/* Верх — Воздух */}
            <div className="col-start-2 text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl">🜁</div>
              <div className="font-semibold mt-2">ВОЗДУХ</div>
              <div className="text-gray-500 text-sm">Дыхание</div>
            </div>

            {/* Лево — Земля */}
            <div className="col-start-1 row-start-2 text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl">🜃</div>
              <div className="font-semibold mt-2">ЗЕМЛЯ</div>
              <div className="text-gray-500 text-sm">Тело</div>
            </div>

            {/* Центр — Пятый элемент (анимация) */}
            <motion.div
              className="col-start-2 row-start-2 text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10 rounded-2xl shadow-2xl transform scale-110"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.4)",
                  "0 0 40px rgba(147,51,234,0.6)",
                  "0 0 20px rgba(99,102,241,0.4)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-5xl">🜀</div>
              <div className="font-bold mt-2 text-xl tracking-wide">ПЯТЫЙ ЭЛЕМЕНТ</div>
              <div className="text-indigo-100 text-sm italic">Душа</div>
            </motion.div>

            {/* Право — Вода */}
            <div className="col-start-3 row-start-2 text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl">🜄</div>
              <div className="font-semibold mt-2">ВОДА</div>
              <div className="text-gray-500 text-sm">Эмоции</div>
            </div>

            {/* Низ — Огонь */}
            <div className="col-start-2 row-start-3 text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl">🜂</div>
              <div className="font-semibold mt-2">ОГОНЬ</div>
              <div className="text-gray-500 text-sm">Энергия</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-xl text-center space-y-4 shadow-lg">
          <h2 className="text-2xl font-bold">ТВОЙ СЛЕДУЮЩИЙ ШАГ — ВНУТРЬ</h2>
          <p className="text-indigo-100">
            Если ты слышишь зов — хватит его игнорировать.
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-xl hover:scale-105 transform transition">
            Напиши слово ПУТЬ
          </button>
          <p className="text-sm text-indigo-200">
            Бесплатная встреча-знакомство • 1 час онлайн
          </p>
        </div>
      </div>
    </div>
  );
}

