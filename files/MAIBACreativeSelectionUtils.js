__d(
  "MAIBACreativeSelectionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.filter(function (e) {
        return t.has(e.creativeID);
      });
    }
    function l(t, n) {
      return e(t, n)
        .filter(function (e) {
          return e.mediaType !== "VIDEO";
        })
        .map(function (e) {
          return e.imageURL;
        })
        .filter(Boolean);
    }
    function s(t, n) {
      var r = e(t, n);
      if (r.length === 0) return null;
      var o = new Set(
        r.map(function (e) {
          return e.adgroupID;
        }),
      );
      return o.size === 1 ? r[0].adgroupID : null;
    }
    ((i.getSelectedCreatives = e),
      (i.getSelectedImageURLs = l),
      (i.getSelectedAdgroupID = s));
  },
  66,
);
