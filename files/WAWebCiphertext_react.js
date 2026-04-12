__d(
  "WAWebCiphertext.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebPlaceholder",
    "WAWebUISpacing",
    "react",
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
      var n = t.subtype,
        a = o("WAWebPlaceholder").getPlaceholderDetails(n),
        i = a.externalLink,
        l = a.placeholderIcon,
        u = a.placeholderMsg,
        p = c.jsx("span", {
          className: "x187aw1n",
          role: "button",
          onClick: function () {
            m(i != null ? i : "");
          },
          children: s._(/*BTDS*/ "Learn more"),
        });
      return c.jsxs("div", {
        className:
          "xhslqc4 x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n x1vvkbs",
        children: [
          l != null
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    d.icon,
                    o("WAWebUISpacing").uiMargin.end5,
                  ]),
                  { children: l },
                ),
              )
            : null,
          u,
          "\xA0",
          p,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
