__d(
  "MAIBAPreviewPublishReviewImageUrls",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t == null ? void 0 : t.imageUrls,
        r = [];
      for (var o of e) {
        var a = n == null ? void 0 : n.get(o);
        a != null && a !== "" && r.push(a);
      }
      return r;
    }
    i.resolveImageUrls = e;
  },
  66,
);
