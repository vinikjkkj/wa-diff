__d(
  "WAWebHandleSharableEventDirtyBit",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebSharableEventGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebSharableEventReconcileJob")
            .__setRef("WAWebHandleSharableEventDirtyBit")
            .load();
        }),
        "WAWebSharableEventReconcileJob",
      );
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
          )
            return !0;
          try {
            var t = yield s(),
              n = t.reconcileSharableEventCache;
            return (yield n(), !0);
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event] event_metadata dirty bit reconcile failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sharable-event-dirty-bit-reconcile-failed"),
              !1
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.handleSharableEventDirtyBit = u;
  },
  98,
);
