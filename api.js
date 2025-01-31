//db.jsondan verileri alan fonksiyon

export const fetchMenu = async () => {
  //fetch ile db.jsondan veriler alindi
  const res = await fetch("db.json");
  //Veriler Jsde kullanilacak tipe cevrildi.
  const data = await res.json();

  return data;
};
