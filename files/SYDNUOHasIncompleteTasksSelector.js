__d(
  "SYDNUOHasIncompleteTasksSelector",
  [
    "AdsAccountStore",
    "SYDNUOTaskSelector",
    "adsCreateBranchSelector",
    "adsCreateSelector",
    "adsIsIGLoginSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.some(function (e) {
              return (
                e.completionStatus === "INCOMPLETE" &&
                e.taskSetType === "BEGINNER"
              );
            })) != null
        ? t
        : !1;
    }
    var u = (e = r("adsCreateSelector"))(
        [o("SYDNUOTaskSelector").SYDNUOTaskSelector],
        function (t) {
          return t.hasValueWithoutError() ? s(t.getValueEnforcing()) : !1;
        },
        { name: i.id + ".hasIncompleteNUOTasksSelector" },
      ),
      c = e(
        [r("AdsAccountStore").getSelectedAccountCapabilities],
        function (t) {
          return t.includes("HAS_NEVER_CREATED_ADGROUP");
        },
        { name: i.id + ".hasUserNeverPublishedAdBeforeSelector" },
      ),
      d = e(
        [c, r("adsIsIGLoginSelector")],
        function (t, n) {
          return t && !n;
        },
        { name: i.id + ".isEligibleForNUOSelector" },
      ),
      m = r("adsCreateBranchSelector")(
        d,
        u,
        e(
          [],
          function () {
            return !1;
          },
          { name: i.id },
        ),
      ),
      p = m;
    l.default = p;
  },
  98,
);
