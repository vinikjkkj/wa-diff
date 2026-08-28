__d(
  "AdsScopeUtils",
  [
    "AdAccountIDConverter",
    "AdsApplicationUtils",
    "ApiClient",
    "CurrentAdAccount",
    "CurrentBusinessUser",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      if (!o("AdsApplicationUtils").isFAME() && !_()) return null;
      var t = (e = r("CurrentAdAccount").getID()) != null ? e : null,
        n = p();
      if (r("isTruthy")(n.hasMisMatches)) {
        var a;
        t = (a = n.accountID) != null ? a : null;
      }
      var i = t === r("CurrentAdAccount").LOGGED_OUT ? null : t;
      return i;
    }
    function s() {
      var t = e();
      return t != null ? o("AdAccountIDConverter").toActID(t) : t;
    }
    function u() {
      return r("CurrentBusinessUser");
    }
    function c() {
      return u().business_id;
    }
    var d = { hasMisMatches: !1, accountID: null };
    function m(e) {
      d = e;
    }
    function p() {
      return d;
    }
    function _() {
      return r("ApiClient").getAccessToken() != null || r("gkx")("21557");
    }
    ((l.getSelectedAccountID = e),
      (l.getSelectedAccountIDPrefixed = s),
      (l.getSelectedBusiness = u),
      (l.getSelectedBusinessID = c),
      (l.setCurrentAdAccountState = m),
      (l.getAdAccountState = p));
  },
  98,
);
