__d(
  "WAWebHandleSharableEventDirtyBit",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebSharableEventGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebSharableEventReconcileJob")
          .__setRef("WAWebHandleSharableEventDirtyBit")
          .load();
      }, "WAWebSharableEventReconcileJob");
    async function u() {
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("dirty-bit")
      )
        return !0;
      try {
        var t = await s(),
          n = t.reconcileSharableEventCache;
        return (await n(), !0);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][dirty-bit] event_metadata reconcile failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("sharable-event-dirty-bit-reconcile-failed"),
          !1
        );
      }
    }
    l.handleSharableEventDirtyBit = u;
  },
  98,
);
