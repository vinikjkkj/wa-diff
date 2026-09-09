__d(
  "WAWebBizBroadcastMarketingMessagesEligibilityModel",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(t) {
      ((s = t),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:mm-eligibility] updated: ",
              "",
            ])),
          String(t),
        ));
    }
    function c() {
      return s === !0;
    }
    ((l.updateMarketingMessagesEligibility = u),
      (l.isMarketingMessagesEligible = c));
  },
  98,
);
