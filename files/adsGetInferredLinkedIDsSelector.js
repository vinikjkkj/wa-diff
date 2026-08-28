__d(
  "adsGetInferredLinkedIDsSelector",
  [
    "AdsPEAdgroupSelectors",
    "AdsPageUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = r("adsCreateStoreSelector")(
        [],
        r("emptyFunction").thatReturnsArgument,
        { name: i.id + ".adObjectIDAndTypeSelector" },
      );
    function u(e) {
      return { page_id: o("AdsPageUtils").getPageIDFromCreativeField(e) };
    }
    var c = r("adsCreateSelector")(
      [s, o("AdsPEAdgroupSelectors").getCachedByFieldsSelector],
      function (n, r) {
        var t = n.id,
          o = n.type;
        try {
          var a = null;
          switch (o) {
            case "ad": {
              var i;
              return (
                (a = r(t, { creative: null }).getValue()),
                u((i = a) == null ? void 0 : i.creative)
              );
            }
            default:
              return e;
          }
        } catch (t) {
          return e;
        }
      },
      { name: i.id + ".adsGetInferredLinkedIDsSelector" },
    );
    l.adsGetInferredLinkedIDsSelector = c;
  },
  98,
);
