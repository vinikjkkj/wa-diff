__d(
  "WAWebUnlinkHatchAction",
  ["WALogger", "WAWebCanonicalHatchChannelUnlinkMutation", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      try {
        var e = await o(
          "WAWebCanonicalHatchChannelUnlinkMutation",
        ).unlinkHatchChannel();
        return (
          e || u(r("err")("hatch unlink mutation returned success=false")),
          e
        );
      } catch (e) {
        return (u(e instanceof Error ? e : r("err")(String(e))), !1);
      }
    }
    function u(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Hatch] unlink mutation failed",
            ])),
        )
        .catching(t)
        .sendLogs("hatch-unlink-mutation-fail");
    }
    l.unlinkHatch = s;
  },
  98,
);
