__d(
  "WAWebBizBroadcastMarketingMessagesEligibilityModel",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null,
      u = !1;
    function c(t) {
      ((s = t),
        (u = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:mm-eligibility] updated: ",
              "",
            ])),
          String(t),
        ));
    }
    function d() {
      return s === !0;
    }
    function m() {
      return u;
    }
    function p() {
      ((s = null), (u = !1));
    }
    ((l.updateMarketingMessagesEligibility = c),
      (l.isMarketingMessagesEligible = d),
      (l.hasLoadedMarketingMessagesEligibility = m),
      (l.resetMarketingMessagesEligibility = p));
  },
  98,
);
