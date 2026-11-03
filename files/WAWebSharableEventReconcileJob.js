__d(
  "WAWebSharableEventReconcileJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventDeletion",
    "WAWebRelayClient",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventReconcileJobQuery.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventReconcileJobQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebDBSharableEvent").getSharableEventIds();
          if (t.length !== 0) {
            yield o(
              "WAWebSharableEventCredentials",
            ).waitForSharableEventCredentials("reconcile");
            var n = yield o("WAWebRelayClient").fetchQuery(
                u,
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
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][reconcile] checked=",
                  " expired=",
                  "",
                ])),
              t.length,
              l.length,
            ),
              l.length !== 0 &&
                (yield o(
                  "WAWebDBSharableEventDeletion",
                ).deleteSharableEventsLocally(l),
                o("WAWebBackendApi").frontendFireAndForget(
                  "applySharableEventUpdate",
                  { deletedEventIds: l },
                )));
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.reconcileSharableEventCache = c;
  },
  98,
);
