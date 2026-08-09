__d(
  "LSQplAnnotateInt.nop",
  [
    "EBMarkerIdToQPLEvent",
    "I64",
    "Promise",
    "QPLUserFlow",
    "WAHashStringToNumber",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (a, i, l, u, c, d) {
        try {
          var t,
            m = r("nullthrows")(
              o("EBMarkerIdToQPLEvent").markerIdToQPLEvent(l),
            ),
            p = o("WAHashStringToNumber").hashStringToNumber(u);
          return (
            r("QPLUserFlow").addAnnotations(
              m,
              {
                int: ((t = {}), (t[c] = (s || (s = o("I64"))).to_int32(d)), t),
              },
              { instanceKey: p },
            ),
            (e || (e = n("Promise"))).resolve()
          );
        } catch (t) {
          return (e || (e = n("Promise"))).resolve();
        }
      };
    ((u.__nop_name__ = "LSQplAnnotateInt"), (l.default = u));
  },
  98,
);
