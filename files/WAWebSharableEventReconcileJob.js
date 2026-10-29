__d(
  "WAWebSharableEventReconcileJob",
  [
    "WAWebBackendApi",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventDeletion",
    "WAWebRelayClient",
    "WAWebSharableEventReconcileJobQuery.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventReconcileJobQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebDBSharableEvent").getSharableEventIds();
          if (t.length !== 0) {
            o("WAWebCanonicalGating").isCanonicalEnabled() &&
              !o("WAWebCanonicalUtils").isCanonicalPresent() &&
              (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
            var n = yield o("WAWebRelayClient").fetchQuery(
                s,
                { input: { event_ids: Array.from(t) } },
                {
                  environmentType: "whatsapp_web",
                  fetchPolicy: "network-only",
                },
              ),
              a =
                n == null || (e = n.xwa_event_validate_cached_event_ids) == null
                  ? void 0
                  : e.retained_event_ids;
            if (a == null)
              throw r("err")(
                "[sharable_event] xwa_event_validate_cached_event_ids returned no ids",
              );
            var i = new Set(a),
              l = t.filter(function (e) {
                return !i.has(e);
              });
            l.length !== 0 &&
              (yield o(
                "WAWebDBSharableEventDeletion",
              ).deleteSharableEventsLocally(l),
              o("WAWebBackendApi").frontendFireAndForget(
                "applySharableEventUpdate",
                { deletedEventIds: l },
              ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.reconcileSharableEventCache = u;
  },
  98,
);
