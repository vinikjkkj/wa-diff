__d(
  "WAWebUploadRefreshedIcon",
  ["WAWebIcDownloadIcon.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        rotatedUp: { display: "x1rg5ohu", transform: "x19jd1h0", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.xstyle
        ? ((n = [e.xstyle, u.rotatedUp]), (t[0] = e.xstyle), (t[1] = n))
        : (n = t[1]);
      var r;
      return (
        t[2] !== e || t[3] !== n
          ? ((r = s.jsx(
              o("WAWebIcDownloadIcon.react").IcDownloadIcon,
              babelHelpers.extends({}, e, { xstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = r))
          : (r = t[4]),
        r
      );
    }
    l.default = c;
  },
  98,
);
