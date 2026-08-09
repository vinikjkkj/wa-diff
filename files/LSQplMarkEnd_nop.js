__d(
  "LSQplMarkEnd.nop",
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
            u
              ? r("QPLUserFlow").endSuccess(t, { instanceKey: c })
              : r("QPLUserFlow").endFailure(t, "failure", { instanceKey: c }),
            (e || (e = n("Promise"))).resolve()
          );
        } catch (t) {
          return (e || (e = n("Promise"))).resolve();
        }
      };
    ((s.__nop_name__ = "LSQplMarkEnd"), (l.default = s));
  },
  98,
);
