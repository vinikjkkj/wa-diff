__d(
  "WAWebMetaAIProfileIcon.react",
  ["WAWebImg.react", "WAWebMetaAiRingAssetResolver", "react", "stylex"],
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
      var n = t.size,
        a = n === void 0 ? 80 : n;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(d.container(a, a)),
          {
            children: u.jsx(r("WAWebImg.react"), {
              src: o("WAWebMetaAiRingAssetResolver").getMetaAiProfileURL(),
              style: { width: a, height: a },
              draggable: !1,
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
