__d(
  "WAWebACSTokenUtils",
  ["WALogger", "WATimeUtils", "WAWebACSTokenConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n = t.creationTs,
        r = t.projectName,
        a = t.redeemCount,
        i = o("WAWebACSTokenConfig").getACSTokenConfig(r),
        l = i.maxExpirySeconds,
        u = i.maxRedeemCount;
      return o("WATimeUtils").happenedWithin(n, l)
        ? a >= u
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " ACS token max redeems reached, re-issue",
                ])),
              r,
            ),
            !1)
          : !0
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "The ",
                " ACS token expired. The client shall re-issue a new one",
              ])),
            r,
          ),
          !1);
    }
    l.isValidACSToken = u;
  },
  98,
);
