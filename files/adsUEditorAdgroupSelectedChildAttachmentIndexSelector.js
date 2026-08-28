__d(
  "adsUEditorAdgroupSelectedChildAttachmentIndexSelector",
  [
    "AdsCustomCarouselTabUtils",
    "AdsUEditorAdgroupCachedChildAttachmentIndexStore",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = r("adsCreateStoreSelector")(
        [r("AdsUEditorAdgroupCachedChildAttachmentIndexStore")],
        function () {
          return r(
            "AdsUEditorAdgroupCachedChildAttachmentIndexStore",
          ).getState();
        },
        { name: i.id + ".stateSelector" },
      ),
      u = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector"), s],
        function (n, a) {
          var t = [],
            i = 1 / 0;
          n.forEach(function (e) {
            var n = o("AdsCustomCarouselTabUtils")
              .getCarouselTabCount(e)
              .match({
                Success: r("emptyFunction").thatReturnsArgument,
                Error: r("emptyFunction").thatReturns(0),
              });
            (t.push(e.adgroup.id), n < i && (i = n));
          });
          var l = a.indexMap.get(t[0]);
          return l != null && l < i ? l : e;
        },
        {
          name: i.id + ".adsUEditorAdgroupSelectedChildAttachmentIndexSelector",
        },
      ),
      c = u;
    l.default = c;
  },
  98,
);
