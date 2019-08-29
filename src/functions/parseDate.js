const parseDate = (date) => {
  // eslint-disable-next-line max-len
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default parseDate;
