__d(
  "WAWebMetaAIIcon.react",
  [
    "WAWebBotUtils",
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
      var n = o("react-compiler-runtime").c(11),
        a = t.height,
        i = t.wid,
        l = t.width,
        s = a === void 0 ? 24 : a,
        c = l === void 0 ? 24 : l,
        m;
      n[0] !== i
        ? ((m =
            i != null &&
            (o("WAWebBotUtils").isMetaAiBot(i) ||
              o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(i))),
          (n[0] = i),
          (n[1] = m))
        : (m = n[1]);
      var p = m,
        _;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebMetaAiRingAssetResolver").getBotAssistantIconURL()),
          (n[2] = _))
        : (_ = n[2]);
      var f;
      n[3] !== s || n[4] !== c
        ? ((f = u.jsx(r("WAWebImg.react"), {
            src: _,
            style: { width: c, height: s },
            draggable: !1,
          })),
          (n[3] = s),
          (n[4] = c),
          (n[5] = f))
        : (f = n[5]);
      var g = f,
        h;
      return (
        n[6] !== s || n[7] !== g || n[8] !== p || n[9] !== c
          ? ((h = p
              ? u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(d.container(c, s)),
                    { children: g },
                  ),
                )
              : g),
            (n[6] = s),
            (n[7] = g),
            (n[8] = p),
            (n[9] = c),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
    l.default = m;
  },
  98,
);
