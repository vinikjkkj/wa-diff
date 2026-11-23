__d(
  "AdsCFAdgroupStateUtils",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsCFAdgroupIDUtils",
    "LoadObject",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e
        .map(function (e) {
          return e.getValueEnforcing();
        })
        .valueSeq()
        .toArray();
    }
    function u(t, n) {
      return (n < t.size || s(0, 2992, n, t.size), e(t)[n]);
    }
    function c(e) {
      return u(e, 0);
    }
    function d(e, t) {
      return e.has(t) ? r("nullthrows")(e.get(t)).getValueEnforcing() : null;
    }
    function m(e) {
      return e.keySeq().toArray();
    }
    function p(e) {
      var t = r("immutable").Map();
      return (
        e.forEach(function (e, n) {
          t = t.set(
            o("AdsCFAdgroupIDUtils").getID(n),
            r("LoadObject")
              .creating({ creatorModuleID: i.id })
              .setValue(
                r("AdsAdgroupRecordAccessors").id.set(
                  o("AdsCFAdgroupIDUtils").getID(n),
                  e,
                ),
              ),
          );
        }),
        t
      );
    }
    function _(e) {
      return !!e.size;
    }
    ((l.getAdgroupRecords = e),
      (l.getAdgroupRecordAtIndex = u),
      (l.getAdgroupRecordByIndex_DEPRECATED = c),
      (l.getAdgroupRecordByAdgroupID = d),
      (l.getAdgroupIDs = m),
      (l.createAdgroupStateWithAdgroups = p),
      (l.hasAdgroupRecords = _));
  },
  98,
);
