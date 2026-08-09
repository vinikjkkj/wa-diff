__d(
  "LSQplMarkPoint.nop",
  [
    "EBMarkerIdToQPLEvent",
    "Promise",
    "QPLUserFlow",
    "WAHashStringToNumber",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (a, i, l, s, u) {
        try {
          var t = r("nullthrows")(
              o("EBMarkerIdToQPLEvent").markerIdToQPLEvent(l),
            ),
            c = o("WAHashStringToNumber").hashStringToNumber(s);
          return (
            r("QPLUserFlow").addPoint(t, u, { instanceKey: c }),
            (e || (e = n("Promise"))).resolve()
          );
        } catch (t) {
          return (e || (e = n("Promise"))).resolve();
        }
      };
    ((s.__nop_name__ = "LSQplMarkPoint"), (l.default = s));
  },
  98,
);
