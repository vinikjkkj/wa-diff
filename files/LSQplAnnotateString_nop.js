__d(
  "LSQplAnnotateString.nop",
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
      s = function (a, i, l, s, u, c) {
        try {
          var t,
            d = r("nullthrows")(
              o("EBMarkerIdToQPLEvent").markerIdToQPLEvent(l),
            ),
            m = o("WAHashStringToNumber").hashStringToNumber(s);
          return (
            r("QPLUserFlow").addAnnotations(
              d,
              { string: ((t = {}), (t[u] = c), t) },
              { instanceKey: m },
            ),
            (e || (e = n("Promise"))).resolve()
          );
        } catch (t) {
          return (e || (e = n("Promise"))).resolve();
        }
      };
    ((s.__nop_name__ = "LSQplAnnotateString"), (l.default = s));
  },
  98,
);
