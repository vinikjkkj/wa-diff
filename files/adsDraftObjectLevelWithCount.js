__d(
  "adsDraftObjectLevelWithCount",
  ["fbt", "AdFLEXConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        o =
          r("AdFLEXConfig") == null ||
          (n = r("AdFLEXConfig").get()) == null ||
          n.getDraftObjectLevelWithCount == null
            ? void 0
            : n.getDraftObjectLevelWithCount(e, t);
      if (o != null) return o;
      switch (e) {
        case "campaign":
          return s._(
            /*BTDS*/ '_j{"*":"{number} campaigns","_1":"1 campaign"}',
            [s._plural(t, "number")],
          );
        case "ad_set":
          return s._(/*BTDS*/ '_j{"*":"{number} ad sets","_1":"1 ad set"}', [
            s._plural(t, "number"),
          ]);
        case "ad":
          return s._(/*BTDS*/ '_j{"*":"{number} ads","_1":"1 ad"}', [
            s._plural(t, "number"),
          ]);
        default:
          return null;
      }
    }
    l.default = e;
  },
  226,
);
