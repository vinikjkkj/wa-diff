__d(
  "AdsAdgroupChildAttachmentsField",
  [
    "AdsAdgroupSemanticFields",
    "AdsChildAttachmentsUtils",
    "AdsUnifiedCreativeAPIFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = function (n, a, i) {
        if (!r("AdsAdgroupSemanticFields").childAttachments.isSupported(a, n))
          return { supported: !1 };
        var e = r("AdsAdgroupSemanticFields").childAttachments.get(a, n);
        if (!e || e.size <= i) return { supported: !1 };
        var l = o("AdsChildAttachmentsUtils").getChildAttachmentTypeFromPath(
          n,
          a,
          i,
        );
        return l.match({
          Success: function (o) {
            var e = a.getChildAttachmentsFieldMapping(n, o).get(t);
            if (!e) return { supported: !1 };
            var l = [].concat(
              r("AdsUnifiedCreativeAPIFields").childAttachments.getPathOrThrow(
                n,
                a,
              ),
              ["" + i],
              e,
            );
            return { path: l, supported: !0, value: n.getIn(l) };
          },
          Error: function (t) {
            return { supported: !1 };
          },
        });
      };
      return { name: t, get: e };
    };
    l.create = e;
  },
  98,
);
