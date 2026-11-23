__d(
  "WAFrankingNode",
  ["Promise", "WAFranking", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, r, a) {
      return r == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Franking key is missing",
              ])),
          ),
          (u || (u = n("Promise"))).resolve(null))
        : a != null && a !== 0
          ? (o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Can't handle franking version ",
                  "",
                ])),
              a,
            ),
            (u || (u = n("Promise"))).resolve(null))
          : o("WAFranking").genFrankingTag(r, t);
    }
    l.genFrankingTagFromMessageApplicationEncode = c;
  },
  98,
);
