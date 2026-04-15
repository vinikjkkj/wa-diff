__d(
  "WAWebBotCommandMutatorComponent.react",
  [
    "WAWebClickable.react",
    "WAWebComposeBoxActions",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { link: { color: "x1ph7ams", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = n === void 0 ? "" : n,
        a;
      t[0] !== r
        ? ((a = function () {
            o("WAWebComposeBoxActions").ComposeBoxActions.paste(
              null,
              String(r) + " ",
              { insertLeadingSpace: !0 },
            );
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== r || t[3] !== i
          ? ((l = s.jsx(o("WAWebClickable.react").Clickable, {
              as: "span",
              xstyle: u.link,
              onClick: i,
              children: r,
            })),
            (t[2] = r),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = c;
  },
  98,
);
