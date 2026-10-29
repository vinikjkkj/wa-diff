__d(
  "WAWebSharableEventBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebApplySharableEventUpdate")
            .__setRef("WAWebSharableEventBridgeApi")
            .load();
        }),
        "WAWebApplySharableEventUpdate",
      ),
      u = {
        applySharableEventUpdate: function (n) {
          s()
            .then(function (e) {
              return e.applySharableEventUpdate(n);
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event] applying an update to the UI failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sharable-event-apply-update-failed");
            });
        },
      };
    l.SharableEventBridgeApi = u;
  },
  98,
);
