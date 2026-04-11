__d(
  "FbtEnv",
  [
    "FbtErrorListenerWWW",
    "FbtHooks",
    "IntlViewerContext",
    "cr:7730",
    "getFbsResult",
    "getTranslatedInput",
    "justknobx",
    "promiseDone",
    "requireDeferred",
    "translationOverrideListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("FbtLogging").__setRef("FbtEnv"),
      u = "JHASH",
      c = new RegExp("__" + u + "__(.+?)__" + u + "__"),
      d = !1;
    function m() {
      d ||
        ((d = !0),
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
          logImpression: function (t, n) {
            return r("promiseDone")(
              s.load().then(function (e) {
                if (
                  (e.logImpression == null || e.logImpression(t),
                  !r("justknobx")._("2269"))
                ) {
                  var o,
                    a = n == null ? void 0 : n.inputTable,
                    i = (o = n == null ? void 0 : n.tokens) != null ? o : [];
                  if (typeof a == "string") {
                    var l = a.match(c);
                    l != null &&
                      (e.logImpressionV2 == null || e.logImpressionV2(l[1], i));
                  }
                }
              }),
            );
          },
        }));
    }
    l.setupOnce = m;
  },
  98,
);
