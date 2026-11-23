__d(
  "AdsUEditorAdgroupCachedChildAttachmentIndexStore",
  [
    "AdsDataAtom",
    "AdsSelectorUtils",
    "AdsUEditorAdgroupBaseUIStore",
    "AdsUEditorAdgroupCachedChildAttachmentIndexRemoveChildAttachmentActionHandler",
    "AdsUEditorAdgroupCachedChildAttachmentIndexReorderListChildAttachmentsActionHandler",
    "AdsUEditorAdgroupCachedChildAttachmentIndexStoreState",
    "AdsUEditorAdgroupSetSelectedChildAttachmentIndexActionHandler",
    "ifRequired",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0,
      c,
      d,
      m = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.reduce = function (a, i) {
            (r("ifRequired")("AdsCFAdgroupEditorContext", function (e) {
              return (c = e);
            }),
              r("ifRequired")("AdsEditingAdgroupEditorContext", function (e) {
                return (d = e);
              }));
            var n = a;
            return (
              (n = [c, d].reduce(function (t, n) {
                if (
                  !n ||
                  ((s || (s = r("AdsDataAtom"))).waitFor(
                    (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                      n.selectedAdgroupIDsSelector,
                    ]),
                  ),
                  (e || (e = o("AdsSelectorUtils")))
                    .getStores([n.selectedAdgroupIDsSelector])
                    .every(function (e) {
                      return !e.hasChanged();
                    }))
                )
                  return t;
                var a = r("immutable").Set(n.selectedAdgroupIDsSelector()),
                  i = t.selectedIDsForHost.get(n.hostID);
                if (i != null && a.equals(i)) return t;
                var l = t.set(
                    "selectedIDsForHost",
                    t.selectedIDsForHost.set(n.hostID, a),
                  ),
                  c = a.map(function (e) {
                    return l.indexMap.get(e);
                  });
                if (c.size === 1 && c.first()) return l;
                var d = l.indexMap.withMutations(function (e) {
                  return a.forEach(function (t) {
                    return e.set(t, u);
                  });
                });
                return l.set("indexMap", d);
              }, n)),
              t.prototype.reduce.call(this, n, i)
            );
          }),
          (a.getInitialState = function () {
            return r("AdsUEditorAdgroupCachedChildAttachmentIndexStoreState")();
          }),
          (a.getHandlers = function () {
            return [
              r(
                "AdsUEditorAdgroupSetSelectedChildAttachmentIndexActionHandler",
              ),
              r(
                "AdsUEditorAdgroupCachedChildAttachmentIndexRemoveChildAttachmentActionHandler",
              ),
              r(
                "AdsUEditorAdgroupCachedChildAttachmentIndexReorderListChildAttachmentsActionHandler",
              ),
            ];
          }),
          n
        );
      })(r("AdsUEditorAdgroupBaseUIStore")),
      p = new m(s || (s = r("AdsDataAtom")));
    l.default = p;
  },
  98,
);
