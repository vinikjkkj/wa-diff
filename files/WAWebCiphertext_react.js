__d(
  "WAWebCiphertext.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebPlaceholder",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: {
          flex: "x1okw0bk",
          color: "x1cmudvs",
          marginInlineStart: "xe9ewy2",
          $$css: !0,
        },
      },
      m = function (t) {
        o("WAWebExternalLink.react").openExternalLink(t);
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.subtype,
        i;
      n[0] !== a
        ? ((i = o("WAWebPlaceholder").getPlaceholderDetails(a)),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        u = l.externalLink,
        p = l.placeholderIcon,
        _ = l.placeholderMsg,
        f;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x187aw1n" }), (n[2] = f))
        : (f = n[2]);
      var g;
      n[3] !== u
        ? ((g = function () {
            m(u != null ? u : "");
          }),
          (n[3] = u),
          (n[4] = g))
        : (g = n[4]);
      var h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Learn more")), (n[5] = h))
        : (h = n[5]);
      var y;
      n[6] !== g
        ? ((y = c.jsx(
            "span",
            babelHelpers.extends({}, f, {
              role: "button",
              onClick: g,
              children: h,
            }),
          )),
          (n[6] = g),
          (n[7] = y))
        : (y = n[7]);
      var C = y,
        b;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "xhslqc4 x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n x1vvkbs",
          }),
          (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] !== p
        ? ((v =
            p != null
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props([
                      d.icon,
                      o("WAWebUISpacing").uiMargin.end5,
                    ]),
                    { children: p },
                  ),
                )
              : null),
          (n[9] = p),
          (n[10] = v))
        : (v = n[10]);
      var S;
      return (
        n[11] !== C || n[12] !== _ || n[13] !== v
          ? ((S = c.jsxs(
              "div",
              babelHelpers.extends({}, b, { children: [v, _, "\xA0", C] }),
            )),
            (n[11] = C),
            (n[12] = _),
            (n[13] = v),
            (n[14] = S))
          : (S = n[14]),
        S
      );
    }
    l.default = p;
  },
  226,
);
