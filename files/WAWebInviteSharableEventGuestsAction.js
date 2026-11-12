__d(
  "WAWebInviteSharableEventGuestsAction",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebSendMsgResultAction",
    "WAWebSendSharableEventInvitesAction",
    "WAWebSharableEventAddInvitationsJob",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventInviteFailedDialog.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = n("$InternalEnum")({
        Sent: "sent",
        Partial: "partial",
        Failed: "failed",
      });
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield g(e, t, n, r),
              i = a.failure,
              l = a.result;
            if (i == null) return l;
            var s = yield o(
              "WAWebSharableEventInviteFailedDialog.react",
            ).askAfterSharableEventInviteFailure(i);
            return s ? _(e, t, n, r) : l;
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = n.flatMap(function (e) {
                var t = o("WAWebLidMigrationUtils").toUserLid(e.id);
                return t == null ? [] : [t];
              }),
              l = n.length - i.length;
            if (
              (l > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] ",
                      " picked contacts have no LID",
                    ])),
                  l,
                ),
              i.length === 0)
            )
              return (
                r == null || r.addFailed(null),
                {
                  result: { outcome: p.Failed, invited: [] },
                  failure: { successfulCount: 0, canRetry: !1 },
                }
              );
            try {
              var u = yield o(
                  "WAWebSharableEventAddInvitationsJob",
                ).addSharableEventInvitations(t, i),
                c = new Set(
                  u.newlyAddedLids.map(function (e) {
                    return e.toString();
                  }),
                ),
                d = i.filter(function (e) {
                  return c.has(e.toString());
                });
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] invited eventId=",
                      " picked=",
                      " withoutLid=",
                      " newlyAdded=",
                      " successful=",
                      " invalid=",
                      " failed=",
                      " retryable=",
                      "",
                    ])),
                  t,
                  n.length,
                  l,
                  d.length,
                  u.successfulCount,
                  u.invalidCount,
                  u.failedCount,
                  String(u.isRetryable),
                ),
                d.length > 0)
              ) {
                var m = yield y(t, d, a);
                m
                  ? r == null || r.messageSent(d.length)
                  : r == null || r.messageFailed();
              }
              var _ = n.filter(function (e) {
                var t, n;
                return c.has(
                  (t =
                    (n = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
                      ? void 0
                      : n.toString()) != null
                    ? t
                    : "",
                );
              });
              return l === 0 && u.failedCount === 0 && u.invalidCount === 0
                ? { result: { outcome: p.Sent, invited: _ }, failure: null }
                : (r == null || r.addPartiallyFailed(),
                  {
                    result: { outcome: p.Partial, invited: _ },
                    failure: {
                      successfulCount: u.successfulCount,
                      canRetry: u.isRetryable && u.failedCount > 0,
                    },
                  });
            } catch (e) {
              return (
                o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                  "invite",
                  e,
                ),
                r == null || r.addFailed(e),
                {
                  result: { outcome: p.Failed, invited: [] },
                  failure: { successfulCount: 0, canRetry: !0 },
                }
              );
            }
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a,
              i,
              l,
              s = yield o(
                "WAWebSendSharableEventInvitesAction",
              ).sendSharableEventInvites(e, t, n);
            if (s == null)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] invite message not sent: no stored event eventId=",
                      "",
                    ])),
                  e,
                ),
                !1
              );
            var p =
              (a =
                (i = (l = s.msg) == null ? void 0 : l.id.id) != null
                  ? i
                  : s.msgId) != null
                ? a
                : "unknown";
            return s.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK
              ? (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] invite message not sent eventId=",
                      " msgId=",
                      " result=",
                      "",
                    ])),
                  e,
                  p,
                  s.messageSendResult,
                ),
                !1)
              : (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] invite message sent eventId=",
                      " msgId=",
                      " recipients=",
                      "",
                    ])),
                  e,
                  p,
                  t.length,
                ),
                !0);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][invite] sending invite messages failed eventId=",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sharable-event-invite-message-failed"),
              !1
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.SharableEventInviteOutcome = p), (l.inviteSharableEventGuests = _));
  },
  98,
);
