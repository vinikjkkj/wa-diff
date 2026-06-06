__d(
  "WAWebVoipUpdateRxSubscription",
  ["$InternalEnum", "WALogger", "WAWebVoipStackInterface", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("$InternalEnum")({ DEFAULT: 0, LOW: 1, MEDIUM: 2, HIGH: 3, HD: 4 });
    async function c(t) {
      try {
        var n = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        );
        if (n.type !== "web") return;
        var a = [],
          i = [];
        for (var l of t) {
          var c;
          (a.push(l.wid.toString()),
            i.push((c = l.quality) != null ? c : u.DEFAULT));
        }
        var d = await n.updateParticipantsRxSubscription(a, i);
        d !== 0 &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] updateRxSubscription failed status=",
                "",
              ])),
            d,
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
    }
    ((l.VideoQuality = u), (l.updateRxSubscription = c));
  },
  98,
);
