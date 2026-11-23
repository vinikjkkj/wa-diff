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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebSharableEventStoredDataJob")
          .__setRef("WAWebRestoreSharableEventsWhenEnabled")
          .load();
      }, "WAWebSharableEventStoredDataJob");
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
    async function d() {
      try {
        var t = await u(),
          n = t.loadStoredSharableEvents,
          a = await n();
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
    }
    l.restoreSharableEventsWhenEnabled = c;
  },
  98,
);
