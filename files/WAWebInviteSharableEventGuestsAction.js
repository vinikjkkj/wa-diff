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
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield g(e, t, n),
            a = r.failure,
            i = r.result;
          if (a == null) return i;
          var l = yield o(
            "WAWebSharableEventInviteFailedDialog.react",
          ).askAfterSharableEventInviteFailure(a);
          return l ? _(e, t, n) : i;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = n.flatMap(function (e) {
              var t = o("WAWebLidMigrationUtils").toUserLid(e.id);
              return t == null ? [] : [t];
            }),
            i = n.length - a.length;
          if (
            (i > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][invite] ",
                    " picked contacts have no LID",
                  ])),
                i,
              ),
            a.length === 0)
          )
            return (
              r == null || r.addFailed(null),
              {
                result: { outcome: p.Failed, invited: [] },
                failure: { successfulCount: 0, canRetry: !1 },
              }
            );
          try {
            var l = yield o(
                "WAWebSharableEventAddInvitationsJob",
              ).addSharableEventInvitations(t, a),
              u = new Set(
                l.newlyAddedLids.map(function (e) {
                  return e.toString();
                }),
              ),
              c = a.filter(function (e) {
                return u.has(e.toString());
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
                i,
                c.length,
                l.successfulCount,
                l.invalidCount,
                l.failedCount,
                String(l.isRetryable),
              ),
              c.length > 0)
            ) {
              var d = yield y(t, c);
              d
                ? r == null || r.messageSent(c.length)
                : r == null || r.messageFailed();
            }
            var m = n.filter(function (e) {
              var t, n;
              return u.has(
                (t =
                  (n = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
                    ? void 0
                    : n.toString()) != null
                  ? t
                  : "",
              );
            });
            return i === 0 && l.failedCount === 0 && l.invalidCount === 0
              ? { result: { outcome: p.Sent, invited: m }, failure: null }
              : (r == null || r.addPartiallyFailed(),
                {
                  result: { outcome: p.Partial, invited: m },
                  failure: {
                    successfulCount: l.successfulCount,
                    canRetry: l.isRetryable && l.failedCount > 0,
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              a,
              i,
              l = yield o(
                "WAWebSendSharableEventInvitesAction",
              ).sendSharableEventInvites(e, t);
            if (l == null)
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
            var s =
              (n =
                (a = (i = l.msg) == null ? void 0 : i.id.id) != null
                  ? a
                  : l.msgId) != null
                ? n
                : "unknown";
            return l.messageSendResult !==
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
                  s,
                  l.messageSendResult,
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
                  s,
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
