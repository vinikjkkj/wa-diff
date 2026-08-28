__d(
  "AddressPart",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      ADDRESSEE: "addressee",
      BUILDING: "building",
      STREET: "street",
      CITY: "city",
      POSTAL_CODE: "postal_code",
      COUNTRY: "country",
      REGION: "region",
      isValidAddressPart: function (n) {
        return Object.prototype.hasOwnProperty.call(e, n.toUpperCase());
      },
    };
    a.exports = e;
  },
  null,
);
