__d(
  "WAWebUnlinkHatchAction",
  [
    "WALogger",
    "WAWebCanonicalHatchChannelUnlinkMutation",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebCanonicalHatchChannelUnlinkMutation",
            ).unlinkHatchChannel();
            return (
              e || c(r("err")("hatch unlink mutation returned success=false")),
              e
            );
          } catch (e) {
            return (c(e instanceof Error ? e : r("err")(String(e))), !1);
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
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
