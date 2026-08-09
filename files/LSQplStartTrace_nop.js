__d(
  "LSQplStartTrace.nop",
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
          var t = r("nullthrows")(
              o("EBMarkerIdToQPLEvent").markerIdToQPLEvent(l),
            ),
            d = o("WAHashStringToNumber").hashStringToNumber(s);
          return (
            r("QPLUserFlow").start(t, { instanceKey: d }),
            (e || (e = n("Promise"))).resolve()
          );
        } catch (t) {
          return (e || (e = n("Promise"))).resolve();
        }
      };
    ((s.__nop_name__ = "LSQplStartTrace"), (l.default = s));
  },
  98,
);
