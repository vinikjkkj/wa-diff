__d(
  "WAWebThreadLoggingFalco",
  ["JSResourceForInteraction", "WALogger", "getErrorSafe", "unsafeCast"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")("WAWebWamFalcoGlobalFields").__setRef(
        "WAWebThreadLoggingFalco",
      );
    async function d() {
      try {
        return (await c.load(), !0);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "canLoadThreadLoggingFalcoCanonicals: loading the canonical fields failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("thread-logging-falco-canonicals-preload-failure"),
          !1
        );
      }
    }
    async function m(e, t) {
      var n;
      try {
        n = await c.load();
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "logThreadInteractionFalcoEvent: loading the canonical fields failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("thread-logging-falco-canonicals-load-failure");
        return;
      }
      e.log(function () {
        var e = babelHelpers.extends(
          {},
          p(function () {
            return n.getCanonicalFieldsForFalco();
          }),
        );
        for (var o of Object.entries(t())) {
          var a = o[0],
            i = o[1];
          i != null &&
            (typeof i != "number" || Number.isFinite(i)) &&
            (e[a] = i);
        }
        return r("unsafeCast")(e);
      });
    }
    function p(e) {
      try {
        return e();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "logThreadInteractionFalcoEvent: reading the canonical fields failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("thread-logging-falco-canonicals-read-failure"),
          {}
        );
      }
    }
    ((l.canLoadThreadLoggingFalcoCanonicals = d),
      (l.logThreadInteractionFalcoEvent = m));
  },
  98,
);
