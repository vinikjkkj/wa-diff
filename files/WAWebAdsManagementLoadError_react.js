__d(
  "WAWebAdsManagementLoadError.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        text: { display: "xt0psk2", $$css: !0 },
        paddingStart4: { paddingInlineStart: "x181vq82", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.errorText,
        a = e.onClickRetry,
        i;
      t[0] !== a
        ? ((i =
            a != null
              ? u.jsx(o("WAWebText.react").WAWebClickableText, {
                  xstyle: c.paddingStart4,
                  onClick: a,
                  children: s._(/*BTDS*/ "Retry"),
                })
              : null),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [c.paddingHoriz24, c.paddingTop16]), (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== n
        ? ((m = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: c.text,
            children: n,
          })),
          (t[3] = n),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== l || t[6] !== m
          ? ((p = u.jsxs(r("WAWebBox.react"), { xstyle: d, children: [m, l] })),
            (t[5] = l),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = d;
  },
  226,
);
