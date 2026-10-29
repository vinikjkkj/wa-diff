__d(
  "WAWebSharableEventListJob",
  [
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebDBSharableEventInvitee",
    "WAWebDBSharableEventMetadata",
    "WAWebRelayClient",
    "WAWebSharableEventListJobQuery.graphql",
    "WAWebSharableEventServerInvitationRows",
    "WAWebSharableEventServerRows",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 100,
      u = 720 * 60 * 60,
      c = 365 * 24 * 60 * 60,
      d = e !== void 0 ? e : (e = n("WAWebSharableEventListJobQuery.graphql"));
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent() &&
            (yield o("WAWebCanonicalUtils").waitForCanonicalPresent());
          var e = o("WATimeUtils").unixTime(),
            t = null,
            n = yield o("WAWebRelayClient").fetchQuery(
              d,
              {
                input: {
                  categories: ["UPCOMING", "PAST", "SCHEDULED_CALLS"],
                  page_size: s,
                  time_range: { start_ts_sec: e - u, end_ts_sec: e + c },
                },
              },
              {
                environmentType: "whatsapp_web",
                fetchPolicy: "network-only",
                getInlineDataReader: function (n) {
                  t = n;
                },
              },
            ),
            a = n == null ? void 0 : n.xwa_event_list,
            i = t;
          if (a == null || i == null)
            throw r("err")(
              "[sharable_event] xwa_event_list returned no events",
            );
          var l = _(i, a.upcoming),
            m = _(i, a.scheduled_calls),
            p = f([].concat(l, _(i, a.past), m)),
            y = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer(
              p.map(function (e) {
                var t = e.event;
                return t;
              }),
              { insertMissing: !0 },
            ),
            C = yield o(
              "WAWebDBSharableEventInvitee",
            ).upsertSharableEventInvitees(
              p.flatMap(function (e) {
                var t = e.event,
                  n = e.myInvitation,
                  r =
                    n == null
                      ? null
                      : o(
                          "WAWebSharableEventServerInvitationRows",
                        ).readSharableEventInvitee(i, n);
                return r == null
                  ? []
                  : [babelHelpers.extends({}, r, { eventId: t.eventId })];
              }),
            ),
            b = yield o(
              "WAWebDBSharableEventMetadata",
            ).updateSharableEventsScheduledCall(g(l, m)),
            v = h(
              y.map(function (e) {
                return e.row;
              }),
              b,
            );
          (v.length > 0 || C.length > 0) &&
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { events: v, invitees: C },
            );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return t == null
        ? []
        : t.flatMap(function (t) {
            var n =
              (t == null ? void 0 : t.privacy_aware_event) == null
                ? null
                : o("WAWebSharableEventServerRows").readSharableEventMetadata(
                    e,
                    t.privacy_aware_event,
                  );
            return n == null
              ? []
              : [
                  {
                    event: n,
                    myInvitation:
                      t == null ? void 0 : t.privacy_aware_my_invitation,
                  },
                ];
          });
    }
    function f(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          t.has(e.event.eventId) || t.set(e.event.eventId, e);
        }),
        Array.from(t.values())
      );
    }
    function g(e, t) {
      var n = new Map(
        e.map(function (e) {
          var t = e.event;
          return [t.eventId, !1];
        }),
      );
      return (
        t.forEach(function (e) {
          var t = e.event;
          return n.set(t.eventId, !0);
        }),
        n
      );
    }
    function h(e, t) {
      var n = new Map();
      return (
        [].concat(e, t).forEach(function (e) {
          return n.set(e.eventId, e);
        }),
        Array.from(n.values())
      );
    }
    l.syncSharableEventList = m;
  },
  98,
);
