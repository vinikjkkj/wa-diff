__d(
  "AdsInsightsObjectives",
  ["AdsAPIObjectives", "StrSet", "ads-objectives", "enumObjectKeys", "memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
        return new (r("StrSet"))(
          r("enumObjectKeys")(o("ads-objectives").APItoKPIObjectives),
        );
      }),
      s = function (n) {
        return e().contains(n);
      },
      u = function (t) {
        return t.count() > 1
          ? r("AdsAPIObjectives").MULTIPLE
          : t.count() === 1
            ? t.toArray()[0]
            : r("AdsAPIObjectives").NONE;
      },
      c = function (t) {
        var e = d(t),
          n = e.validObjectives;
        return n;
      },
      d = function (t) {
        var e = new (r("StrSet"))(),
          n = new (r("StrSet"))();
        return (
          t.forEach(function (t) {
            s(t)
              ? e.add(t)
              : t !== r("AdsAPIObjectives").NONE &&
                t !== r("AdsAPIObjectives").MULTIPLE &&
                n.add(t);
          }),
          { validObjectives: e, otherObjectives: n }
        );
      };
    ((l.getAll = e),
      (l.isValid = s),
      (l.joinAll = u),
      (l.normalize = c),
      (l.splitValidObjectives = d));
  },
  98,
);
