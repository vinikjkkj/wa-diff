__d(
  "WAWebImagineActionMediaInputLogging",
  ["WALogger", "WAWebMediaInputEvents", "getErrorSafe", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebImagineActionMediaInputHandler").__setRef(
        "WAWebImagineActionMediaInputLogging",
      ),
      u = !1;
    function c() {
      u || ((u = !0), o("WAWebMediaInputEvents").addMediaInputListener(d));
    }
    function d(t) {
      s.load()
        .then(function (e) {
          var n = e.logImagineMediaInputEvent;
          n(t);
        })
        .catch(function (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "imagine_actions media input logging failed for ",
                  "",
                ])),
              t.type,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("imagine-action-media-input-failed");
        });
    }
    l.initImagineActionMediaInputLogging = c;
  },
  98,
);
