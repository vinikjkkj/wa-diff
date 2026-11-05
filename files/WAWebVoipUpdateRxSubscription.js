__d(
  "WAWebVoipUpdateRxSubscription",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 70020,
      c = n("$InternalEnum")({ DEFAULT: 0, LOW: 1, MEDIUM: 2, HIGH: 3, HD: 4 });
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
            if (n.type !== "web") return;
            var a = [],
              i = [];
            for (var l of t) {
              var d;
              (a.push(l.wid.toString()),
                i.push((d = l.quality) != null ? d : c.DEFAULT));
            }
            var m = yield n.updateParticipantsRxSubscription(a, i);
            m !== 0 &&
              m !== u &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] updateRxSubscription failed status=",
                    "",
                  ])),
                m,
              );
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] updateRxSubscription error: ",
                  "",
                ])),
              String(e),
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.VideoQuality = c), (l.updateRxSubscription = d));
  },
  98,
);
