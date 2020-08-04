import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/66559169?s=460&u=d9fc14cbe3fc2f8d9017f40ecec27fac35ce8867&v=4"
          alt="Henrique Balardin"
        />
        <div>
          <strong>Henrique Balardin</strong>
          <span>Philosophy</span>
        </div>
      </header>

      <p>1 + 1 is not 2</p>

      <footer>
        <p>
          Price/hour
          <strong>R$ 3,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Get in Touch
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
