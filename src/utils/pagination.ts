const calcMaxPage = ({ total, take }: { total?: number; take: number }) =>
  total ? Math.ceil(total / take) : 1;

const calcSkip = ({ take, page }: { take: number; page: number }) =>
  take * (page - 1);

export const pagination = {
  calcMaxPage,
  calcSkip,
};
