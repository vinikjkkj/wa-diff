__d(
  "WAWebDBBulkGetIsContactABusiness",
  ["WAWebSchemaVerifiedBusinessName"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebSchemaVerifiedBusinessName")
        .getVerifiedBusinessNameTable()
        .bulkGet(
          e.map(function (e) {
            var t;
            return (t = e == null ? void 0 : e.user) != null ? t : "";
          }),
        )
        .then(function (e) {
          return e.map(function (e) {
            return e != null;
          });
        });
    }
    l.bulkGetIsContactABusiness = e;
  },
  98,
);
