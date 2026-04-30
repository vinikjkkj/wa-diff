__d(
  "WAWebUprGating",
  ["WAWebABProps", "WAWebPaymentsChatUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t =
          (e = o("WAWebABProps").getABPropConfigValue(
            "payments_upr_bubble_countries",
          )) != null
            ? e
            : "";
      return t === ""
        ? new Set()
        : new Set(
            t
              .split(",")
              .map(function (e) {
                return e.trim().toUpperCase();
              })
              .filter(function (e) {
                return e !== "";
              }),
          );
    }
    function s(t) {
      return t == null || t === "" ? !1 : e().has(t.toUpperCase());
    }
    function u(e) {
      return c(e) != null;
    }
    function c(t) {
      if (t == null) return null;
      for (var n of e())
        if (o("WAWebPaymentsChatUtils").doesUserHaveCountryPhoneNumber(t, n))
          return n;
      return null;
    }
    ((l.isUprBubbleEnabledForSenderCountry = s),
      (l.isUprBubbleEnabledForSender = u),
      (l.getMatchedSenderCountry = c));
  },
  98,
);
