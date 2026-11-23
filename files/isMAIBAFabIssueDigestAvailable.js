__d(
  "isMAIBAFabIssueDigestAvailable",
  ["justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        return !r("justknobx")._("6426") ||
          !r("justknobx")._("6576") ||
          r("qex")._("5207") !== !0
          ? !1
          : e === "Ads Manager (Campaigns)" || e === "Business Support"
            ? !0
            : e === "Business Help Center"
              ? r("justknobx")._("6434")
              : !1;
      } catch (e) {
        return !1;
      }
    }
    l.default = e;
  },
  98,
);
