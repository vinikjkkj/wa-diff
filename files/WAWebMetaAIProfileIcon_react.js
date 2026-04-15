__d(
  "WAWebMetaAIProfileIcon.react",
  [
    "WAWebImg.react",
    "WAWebMetaAiRingAssetResolver",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        borderStartStartRadius: "x1c9tyrk",
        borderStartEndRadius: "xeusxvb",
        borderEndEndRadius: "x1pahc9y",
        borderEndStartRadius: "x1ertn4p",
        backgroundColor: "x1ew7x2d",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: !0,
      },
      d = {
        container: function (t, n) {
          return [
            c,
            {
              width: t != null ? "x5lhr3w" : t,
              height: n != null ? "x16ye13r" : n,
              $$css: !0,
            },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n),
            },
          ];
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.size,
        i = a === void 0 ? 80 : a,
        l;
      n[0] !== i
        ? ((l = (e || (e = r("stylex"))).props(d.container(i, i))),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var s;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL()),
          (n[2] = s))
        : (s = n[2]);
      var c;
      n[3] !== i
        ? ((c = u.jsx(r("WAWebImg.react"), {
            src: s,
            style: { width: i, height: i },
            draggable: !1,
          })),
          (n[3] = i),
          (n[4] = c))
        : (c = n[4]);
      var m;
      return (
        n[5] !== l || n[6] !== c
          ? ((m = u.jsx("div", babelHelpers.extends({}, l, { children: c }))),
            (n[5] = l),
            (n[6] = c),
            (n[7] = m))
          : (m = n[7]),
        m
      );
    }
    l.default = m;
  },
  98,
);
