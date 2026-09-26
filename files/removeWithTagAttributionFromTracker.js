__d(
  "removeWithTagAttributionFromTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = t.get(e);
      if (r != null) {
        var o = {
          isDisplayedInSocialSentence: !1,
          withTagSourceIDs: r.withTagSourceIDs.filter(function (e) {
            return e !== n;
          }),
        };
        o.withTagSourceIDs.length > 0 ? t.set(e, o) : t.delete(e);
      }
      return t;
    }
    i.default = e;
  },
  66,
);
