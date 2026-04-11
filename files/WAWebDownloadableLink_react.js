__d(
  "WAWebDownloadableLink.react",
  [
    "WAWebFileSaver",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { button: { display: "x1lliihq", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        a = e.download,
        i = e.extension,
        l = e.file,
        c;
      t[0] !== a || t[1] !== i || t[2] !== l
        ? ((c = function () {
            l != null && o("WAWebFileSaver").FileSaver.downloadData(l, a, i);
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== n || t[5] !== c
          ? ((d = s.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: u.button,
              onClick: c,
              children: n,
            })),
            (t[4] = n),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = c;
  },
  98,
);
