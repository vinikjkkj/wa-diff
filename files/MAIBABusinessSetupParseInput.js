__d(
  "MAIBABusinessSetupParseInput",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null || e === "" ? null : e;
    }
    function l(e) {
      return e == null || e === ""
        ? []
        : e
            .split(",")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e !== "";
            });
    }
    function s(e) {
      var t = e;
      if (typeof e == "string")
        try {
          t = JSON.parse(e);
        } catch (e) {
          return new Map();
        }
      var n = new Map();
      if (t == null || typeof t != "object" || Array.isArray(t)) return n;
      for (var r of Object.entries(t)) {
        var o = r[0],
          a = r[1];
        o !== "" && typeof a == "string" && a !== "" && n.set(o, a);
      }
      return n;
    }
    function u(t) {
      var n = l(t.page_ids),
        r = l(t.ad_account_ids);
      return {
        adAccountIDs: r,
        businessID: e(t.business_id),
        pageIDs: n,
        userID: e(t.user_id),
      };
    }
    ((i.parseUnavailableAssets = s), (i.parseInput = u));
  },
  66,
);
