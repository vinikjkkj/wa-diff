__d(
  "withTagIDsTrackerConversionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = [];
      return (
        e != null &&
          e.forEach(function (e, n) {
            var r = e.isDisplayedInSocialSentence;
            r && t.push(n);
          }),
        t
      );
    }
    function l(e, t) {
      t === void 0 && (t = "WithTagTool");
      var n = new Map(),
        r = e.filter(Boolean);
      return (
        r.forEach(function (e) {
          e != null &&
            n.set(e, {
              isDisplayedInSocialSentence: !0,
              withTagSourceIDs: [t],
            });
        }),
        n
      );
    }
    ((i.convertWithTagIDsTrackerToArray = e),
      (i.convertArrayToWithTagIDsTracker = l));
  },
  66,
);
