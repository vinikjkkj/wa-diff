__d(
  "WAWebOrgAdminRosterUploadCsv",
  ["WAWebFileSaver", "WAWebFileSaverTypes"],
  function (t, n, r, o, a, i, l) {
    var e =
        /^[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*[\t\r\+\x2D=@]/,
      s = /\.c[s\u017F]v$/i;
    function u(e, t) {
      return [e].concat(t).map(function (e) {
        return e.map(d).join(",");
      }).join(`\r
`);
    }
    async function c(e, t) {
      await o("WAWebFileSaver").FileSaver.downloadData(
        new Blob(["\uFEFF" + t], { type: "text/csv;charset=utf-8" }),
        e.replace(s, "") + "-to-fix",
        o("WAWebFileSaverTypes").AllowedFileExtensions.CSV,
      );
    }
    function d(t) {
      var n = e.test(t) ? "'" + t : t;
      return /[\n\r\",]/.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }
    ((l.getOrgAdminRosterUploadCsv = u),
      (l.downloadOrgAdminRosterUploadCsv = c));
  },
  98,
);
