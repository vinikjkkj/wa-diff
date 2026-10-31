__d(
  "WAWebSharableEventInvitationStore",
  [
    "WAWebBackendApi",
    "WAWebDBSharableEventInvitationList",
    "WAWebSharableEventServerInvitationRows",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i =
                n == null
                  ? null
                  : o(
                      "WAWebSharableEventServerInvitationRows",
                    ).readSharableEventInvitationSummary(t, n),
              l = (r != null ? r : []).flatMap(function (e) {
                var n =
                  e == null
                    ? null
                    : o(
                        "WAWebSharableEventServerInvitationRows",
                      ).readSharableEventInvitee(t, e);
                return n == null ? [] : [n];
              }),
              s =
                i == null
                  ? null
                  : yield o(
                      "WAWebDBSharableEventInvitationList",
                    ).replaceSharableEventInvitationsIfNewer(e, i, l),
              u = s != null ? s : a;
            u != null &&
              o("WAWebBackendApi").frontendFireAndForget(
                "applySharableEventUpdate",
                {
                  events: [u],
                  inviteeLists:
                    s == null
                      ? []
                      : [
                          {
                            eventId: e,
                            rows: l.map(function (t) {
                              return babelHelpers.extends({}, t, {
                                eventId: e,
                              });
                            }),
                          },
                        ],
                },
              );
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.storeSharableEventInvitationList = e;
  },
  98,
);
