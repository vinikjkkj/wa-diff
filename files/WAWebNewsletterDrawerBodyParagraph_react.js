__d(
  "WAWebNewsletterDrawerBodyParagraph.react",
  ["WAWebText.react", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        row: { display: "x78zum5", width: "xh8yej3", $$css: !0 },
        paragraph: { flexGrow: "x1iyjqo2", $$css: !0 },
      };
    function d(t) {
      var n = t.description,
        a = t.icon,
        i = t.title;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props([
            c.row,
            o("WAWebUISpacing").uiMargin.vert15,
          ]),
          {
            children: [
              u.jsx("div", { className: "xvy4d1p xxk0z11", children: a }),
              u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props([c.paragraph, o("WAWebUISpacing").uiMargin.horiz16]),
                  {
                    children: [
                      u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        as: "p",
                        weight: "normal",
                        color: "primary",
                        children: i,
                      }),
                      u.jsx(o("WAWebText.react").WAWebTextMuted, {
                        as: "p",
                        xstyle: o("WAWebUISpacing").uiMargin.top8,
                        children: n,
                      }),
                    ],
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
