__d(
  "WAWebDownloadableLink.react",
  ["WAWebFileSaver", "WAWebUnstyledButton.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { button: { display: "x1lliihq", $$css: !0 } };
    function c(e) {
      var t = e.children,
        n = e.download,
        a = e.extension,
        i = e.file;
      return s.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: u.button,
        onClick: function () {
          i != null && o("WAWebFileSaver").FileSaver.downloadData(i, n, a);
        },
        children: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
