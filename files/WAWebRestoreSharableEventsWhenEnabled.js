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
      s,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebSharableEventStoredDataJob",
          )
            .__setRef("WAWebRestoreSharableEventsWhenEnabled")
            .load();
        }),
        "WAWebSharableEventStoredDataJob",
      );
    function c() {
      if (o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
        d();
        return;
      }
      var e = function () {
        o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
          (o("WAWebBackendEventBus").BackendEventBus.off(
            o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE,
            e,
          ),
          d());
      };
      o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(e);
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield u(),
              n = t.loadStoredSharableEvents,
              a = yield n();
            if (
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][startup] restored events=",
                    "",
                  ])),
                a.events.length,
              ),
              a.events.length === 0)
            )
              return;
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              a,
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][startup] restoring stored events failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sharable-event-restore-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.restoreSharableEventsWhenEnabled = c;
  },
  98,
);
