__d(
  "WAWebSharableEventDeleteJob",
  [
    "WAWebBackendApi",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebDBSharableEventDeletion",
    "WAWebRelayClient",
    "WAWebSharableEventDeleteJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventDeleteJobMutation.graphql"));
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
          var n = yield o("WAWebRelayClient").commitMutation(
            s,
            { input: { event_id: e } },
            { environmentType: "whatsapp_web" },
          );
          if (
            (n == null || (t = n.xwa_event_delete) == null
              ? void 0
              : t.success) !== !0
          )
            throw r("err")("[sharable_event] xwa_event_delete did not succeed");
          (yield o("WAWebDBSharableEventDeletion").deleteSharableEventsLocally([
            e,
          ]),
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { deletedEventIds: [e] },
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.deleteSharableEvent = u;
  },
  98,
);
