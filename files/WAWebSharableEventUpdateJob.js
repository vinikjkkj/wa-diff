__d(
  "WAWebSharableEventUpdateJob",
  [
    "WAWebBackendApi",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebDBSharableEventMetadata",
    "WAWebRelayClient",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventUpdateJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventUpdateJobMutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent() &&
            (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
          var n = null,
            a = yield o("WAWebRelayClient").commitMutation(
              s,
              { input: e },
              {
                environmentType: "whatsapp_web",
                getInlineDataReader: function (t) {
                  n = t;
                },
              },
            ),
            i =
              a == null || (t = a.xwa_event_update) == null
                ? void 0
                : t.privacy_aware_event,
            l = n,
            u =
              i == null || l == null
                ? null
                : o("WAWebSharableEventServerRows").readSharableEventMetadata(
                    l,
                    i,
                  );
          if (u == null)
            throw r("err")(
              "[sharable_event] xwa_event_update returned no event",
            );
          var c = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer([u], { insertMissing: !1 }),
            d = c[0];
          (d == null ? void 0 : d.row) != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { events: [d.row], inviteeLists: [] },
            );
        })),
        c.apply(this, arguments)
      );
    }
    l.updateSharableEvent = u;
  },
  98,
);
