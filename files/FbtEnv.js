__d(
  "FbtEnv",
  [
    "FbtErrorListenerWWW",
    "FbtHooks",
    "IntlViewerContext",
    "cr:7730",
    "getFbsResult",
    "getTranslatedInput",
    "promiseDone",
    "requireDeferred",
    "translationOverrideListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("FbtLogging").__setRef("FbtEnv"),
      u = !1;
    function c() {
      u ||
        ((u = !0),
        (e || (e = n("FbtHooks"))).register({
          errorListener: function (t) {
            return new (r("FbtErrorListenerWWW"))(t);
          },
          getFbsResult: r("getFbsResult"),
          getFbtResult: n("cr:7730"),
          getTranslatedInput: r("getTranslatedInput"),
          onTranslationOverride: r("translationOverrideListener"),
          getViewerContext: function () {
            return r("IntlViewerContext");
          },
          logImpression: function (t) {
            return r("promiseDone")(
              s.load().then(function (e) {
                e.logImpression == null || e.logImpression(t);
              }),
            );
          },
        }));
    }
    l.setupOnce = c;
  },
  98,
);
