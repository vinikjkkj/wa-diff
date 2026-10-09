__d(
  "WAWebCustomerManagerImportLidUtils",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = String(e);
      return t.endsWith(o("WAJids").LID_DOMAIN)
        ? t.slice(0, -o("WAJids").LID_DOMAIN.length)
        : null;
    }
    l.toBareLid = e;
  },
  98,
);
