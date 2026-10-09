__d(
  "WAWebCustomerManagerImportEmailWarnings",
  ["$InternalEnum", "WAWebCustomerManagerImportTemplateUtils"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["INVALID_EMAIL"]),
      s =
        /^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      u = 64,
      c = 255,
      d = 63;
    function m(e) {
      if (!s.test(e)) return !1;
      var t = e.lastIndexOf("@"),
        n = e.slice(t + 1);
      return (
        t <= u &&
        n.length <= c &&
        n.split(".").every(function (e) {
          return e.length <= d;
        })
      );
    }
    function p(t, n) {
      if (n != null && n.email == null) return [];
      var r = [];
      return (
        t.forEach(function (t) {
          var n = o(
            "WAWebCustomerManagerImportTemplateUtils",
          ).readCustomerManagerImportColumn(t, "email");
          n == null ||
            m(n) ||
            r.push({ rowIndex: t.rowIndex, warningType: e.INVALID_EMAIL });
        }),
        r
      );
    }
    ((l.CustomerManagerImportWarning = e),
      (l.isValidImportEmail = m),
      (l.detectInvalidEmails = p));
  },
  98,
);
