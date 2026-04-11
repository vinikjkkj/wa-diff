__d(
  "WAWebVcardGetNameFromParsed",
  ["WAWebWidFormat"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = null,
        n = e.FN,
        r = e.NICKNAME,
        a = e.TEL;
      if (n != null && n[0]) t = n[0].value;
      else if (r != null && r[0]) t = r[0].value;
      else if (a != null && a[0]) {
        var i,
          l = a[0],
          s = (i = l.properties.waid) == null ? void 0 : i[0];
        t = s ? o("WAWebWidFormat").widToFormattedUser(s) : l.value;
      }
      return t;
    }
    l.vcardGetNameFromParsed = e;
  },
  98,
);
