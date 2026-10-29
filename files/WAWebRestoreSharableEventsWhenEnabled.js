__d(
  "WAWebRestoreSharableEventsWhenEnabled",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebLazyLoadedRetriable",
    "WAWebSharableEventGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventStoredDataJob",
          )
            .__setRef("WAWebRestoreSharableEventsWhenEnabled")
            .load();
        }),
        "WAWebSharableEventStoredDataJob",
      );
    function u() {
      if (o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
        c();
        return;
      }
      var e = function () {
        o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
          (o("WAWebBackendEventBus").BackendEventBus.off(
            o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE,
            e,
          ),
          c());
      };
      o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(e);
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield s(),
              n = t.loadStoredSharableEvents,
              a = yield n();
            if (a.events.length === 0) return;
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              a,
            );
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event] restoring stored events failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-restore-failed");
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.restoreSharableEventsWhenEnabled = u;
  },
  98,
);
