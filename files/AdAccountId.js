__d(
  "AdAccountId",
  ["AdsAIContextPathUtils", "CurrentAdAccount"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("AdsAIContextPathUtils").getURLParams().searchParams;
      return (
        (r("CurrentAdAccount") == null
          ? void 0
          : r("CurrentAdAccount").getID()) ||
        e.get("act") ||
        e.get("asset_id") ||
        ""
      );
    }
    function s(e) {
      return e !== null && e !== "" && e !== r("CurrentAdAccount").LOGGED_OUT;
    }
    function u(t) {
      var n = t != null ? t : e();
      return s(n) ? n : null;
    }
    ((l.isValidAdAccountID = s), (l.getAdAccountId = u));
  },
  98,
);
