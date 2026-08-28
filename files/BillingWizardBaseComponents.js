__d(
  "BillingWizardBaseComponents",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function (t, n, r, o, a) {
        return (
          o === void 0 && (o = "body"),
          a === void 0 && (a = 3),
          function (e) {
            return s._(/*BTDS*/ "{text} {link}", [
              s._param("text", t),
              s._param(
                "link",
                u.jsx(e, { href: n, inline: !0, label: r, level: a, type: o }),
              ),
            ]);
          }
        );
      };
    l.withLink = c;
  },
  226,
);
