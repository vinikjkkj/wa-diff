__d(
  "addTagsToWithTagsIDsTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = new Map(n);
      return (
        t.forEach(function (t) {
          var n,
            o =
              (n = r.get(t)) != null
                ? n
                : { isDisplayedInSocialSentence: !0, withTagSourceIDs: [] },
            a = o.isDisplayedInSocialSentence,
            i = o.withTagSourceIDs;
          (i.includes(e) || i.push(e),
            r.set(t, { isDisplayedInSocialSentence: a, withTagSourceIDs: i }));
        }),
        r
      );
    }
    i.default = e;
  },
  66,
);
