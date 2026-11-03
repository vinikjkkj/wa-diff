__d(
  "WAWebSharableEventListJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBSharableEventDeletion",
    "WAWebDBSharableEventInvitee",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventListJobQuery.graphql",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerInvitationRows",
    "WAWebSharableEventServerRows",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 100,
      d = 720 * 60 * 60,
      m = 365 * 24 * 60 * 60,
      p = e !== void 0 ? e : (e = n("WAWebSharableEventListJobQuery.graphql"));
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o(
            "WAWebSharableEventCredentials",
          ).waitForSharableEventCredentials("list");
          var e = o("WATimeUtils").monotonicTime(),
            t = o("WATimeUtils").unixTime(),
            n = yield o(
              "WAWebSharableEventServerClient",
            ).querySharableEventServer(p, {
              input: {
                categories: ["UPCOMING", "PAST", "SCHEDULED_CALLS"],
                page_size: c,
                time_range: { start_ts_sec: t - d, end_ts_sec: t + m },
              },
            }),
            a = n.reader,
            i = n.response,
            l = i == null ? void 0 : i.xwa_event_list;
          if (l == null)
            throw r("err")(
              "[sharable_event] xwa_event_list returned no events",
            );
          var _ = h(a, l.upcoming),
            f = h(a, l.past),
            v = h(a, l.scheduled_calls),
            S =
              g(l.upcoming, l.past, l.scheduled_calls) -
              _.length -
              f.length -
              v.length;
          S > 0 &&
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][list] dropped ",
                  " server events missing required fields",
                ])),
              S,
            );
          var R = function (n) {
              var t = n.event;
              return !o(
                "WAWebDBSharableEventDeletion",
              ).wasSharableEventDeletedSince(t.eventId, e);
            },
            L = y([].concat(_, f, v)).filter(R),
            E = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer(
              L.map(function (e) {
                var t = e.event;
                return t;
              }),
              { insertMissing: !0 },
            ),
            k = yield o(
              "WAWebDBSharableEventInvitee",
            ).upsertSharableEventInvitees(
              L.flatMap(function (e) {
                var t = e.event,
                  n = e.myInvitation,
                  r =
                    n == null
                      ? null
                      : o(
                          "WAWebSharableEventServerInvitationRows",
                        ).readSharableEventInvitee(a, n);
                return r == null
                  ? []
                  : [babelHelpers.extends({}, r, { eventId: t.eventId })];
              }),
            ),
            I = yield o(
              "WAWebDBSharableEventMetadata",
            ).updateSharableEventsScheduledCall(C(_.filter(R), v.filter(R))),
            T = b(
              E.map(function (e) {
                return e.row;
              }),
              I,
            );
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][list] synced upcoming=",
                " past=",
                " calls=",
                " written=",
                " invitees=",
                " callFlagChanges=",
                "",
              ])),
            _.length,
            f.length,
            v.length,
            E.length,
            k.length,
            I.length,
          ),
            (T.length > 0 || k.length > 0) &&
              o("WAWebBackendApi").frontendFireAndForget(
                "applySharableEventUpdate",
                { events: T, invitees: k },
              ));
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.reduce(function (e, t) {
        var n;
        return e + ((n = t == null ? void 0 : t.length) != null ? n : 0);
      }, 0);
    }
    function h(e, t) {
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
    function y(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          t.has(e.event.eventId) || t.set(e.event.eventId, e);
        }),
        Array.from(t.values())
      );
    }
    function C(e, t) {
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
    function b(e, t) {
      var n = new Map();
      return (
        [].concat(e, t).forEach(function (e) {
          return n.set(e.eventId, e);
        }),
        Array.from(n.values())
      );
    }
    l.syncSharableEventList = _;
  },
  98,
);
