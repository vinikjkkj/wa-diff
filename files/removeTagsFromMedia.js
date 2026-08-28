__d(
  "removeTagsFromMedia",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Map(t),
        r = e.data.id;
      if (r == null) return n;
      var o =
          ((e == null ? void 0 : e.fileType) === "PHOTO" ||
            (e == null ? void 0 : e.fileType) === "VIDEO") &&
          e.data.tags != null
            ? [].concat(e.data.tags).filter(Boolean)
            : [],
        a = o.reduce(function (e, t) {
          return (
            t.taggee.id != null &&
              t.taggee.taggee_type !== "PRODUCT_ITEM" &&
              e.push(t.taggee.id),
            e
          );
        }, []);
      return (
        a.forEach(function (e) {
          var t = n.get(e);
          if (t != null) {
            var o = {
              isDisplayedInSocialSentence: t.isDisplayedInSocialSentence,
              withTagSourceIDs: t.withTagSourceIDs.filter(function (e) {
                return e !== r;
              }),
            };
            o.withTagSourceIDs.length === 0 ? n.delete(e) : n.set(e, o);
          }
        }),
        n
      );
    }
    i.default = e;
  },
  66,
);
