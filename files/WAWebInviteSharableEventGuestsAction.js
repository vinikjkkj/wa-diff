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
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield g(e, t),
            r = n.failure,
            a = n.result;
          if (r == null) return a;
          var i = yield o(
            "WAWebSharableEventInviteFailedDialog.react",
          ).askAfterSharableEventInviteFailure(r);
          return i ? _(e, t) : a;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.flatMap(function (e) {
              var t = o("WAWebLidMigrationUtils").toUserLid(e.id);
              return t == null ? [] : [t];
            }),
            a = n.length - r.length;
          if (
            (a > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][invite] ",
                    " picked contacts have no LID",
                  ])),
                a,
              ),
            r.length === 0)
          )
            return {
              result: { outcome: p.Failed, invited: [] },
              failure: { successfulCount: 0, canRetry: !1 },
            };
          try {
            var i = yield o(
                "WAWebSharableEventAddInvitationsJob",
              ).addSharableEventInvitations(t, r),
              l = new Set(
                i.newlyAddedLids.map(function (e) {
                  return e.toString();
                }),
              ),
              u = r.filter(function (e) {
                return l.has(e.toString());
              });
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
              a,
              u.length,
              i.successfulCount,
              i.invalidCount,
              i.failedCount,
              String(i.isRetryable),
            ),
              u.length > 0 && (yield y(t, u)));
            var c = n.filter(function (e) {
              var t, n;
              return l.has(
                (t =
                  (n = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
                    ? void 0
                    : n.toString()) != null
                  ? t
                  : "",
              );
            });
            return a === 0 && i.failedCount === 0 && i.invalidCount === 0
              ? { result: { outcome: p.Sent, invited: c }, failure: null }
              : {
                  result: { outcome: p.Partial, invited: c },
                  failure: {
                    successfulCount: i.successfulCount,
                    canRetry: i.isRetryable && i.failedCount > 0,
                  },
                };
          } catch (e) {
            return (
              o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "invite",
                e,
              ),
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
            if (l == null) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][invite] invite message not sent: no stored event eventId=",
                    "",
                  ])),
                e,
              );
              return;
            }
            var s =
              (n =
                (a = (i = l.msg) == null ? void 0 : i.id.id) != null
                  ? a
                  : l.msgId) != null
                ? n
                : "unknown";
            if (
              l.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            ) {
              o("WALogger").WARN(
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
              );
              return;
            }
            o("WALogger").LOG(
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
            );
          } catch (t) {
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
              .sendLogs("sharable-event-invite-message-failed");
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.SharableEventInviteOutcome = p), (l.inviteSharableEventGuests = _));
  },
  98,
);
