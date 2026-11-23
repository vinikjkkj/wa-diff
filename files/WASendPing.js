__d(
  "WASendPing",
  ["WAComms", "WALogger", "WASetClockSkewApi", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["sendPing: sending"])),
      ),
        o("WAComms")
          .sendPing()
          .catch(function (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "sendPing: sendPingAndWait failed with error ",
                  "",
                ])),
              e,
            );
          }));
    }
    async function c(e) {
      var t = e.clockSkew;
      (o("WATimeUtils").setClockSkew(t),
        await o("WASetClockSkewApi").setClockSkew({ clockSkew: t }));
    }
    ((l.sendPing = u), (l.updateClockSkew = c));
  },
  98,
);
