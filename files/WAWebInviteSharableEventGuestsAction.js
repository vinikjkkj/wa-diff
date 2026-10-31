__d(
  "WAWebInviteSharableEventGuestsAction",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebSendMsgResultAction",
    "WAWebSendSharableEventInvitesAction",
    "WAWebSharableEventAddInvitationsJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = n("$InternalEnum")({
        Sent: "sent",
        Partial: "partial",
        Failed: "failed",
      });
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.flatMap(function (e) {
            var t = o("WAWebLidMigrationUtils").toUserLid(e.id);
            return t == null ? [] : [t];
          });
          try {
            var i = yield o(
                "WAWebSharableEventAddInvitationsJob",
              ).addSharableEventInvitations(t, a),
              l = new Set(
                i.newlyAddedLids.map(function (e) {
                  return e.toString();
                }),
              ),
              u = a.filter(function (e) {
                return l.has(e.toString());
              }),
              c = u.length === 0 || (yield f(t, u)),
              p = n.filter(function (e) {
                var t, n;
                return l.has(
                  (t =
                    (n = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
                      ? void 0
                      : n.toString()) != null
                    ? t
                    : "",
                );
              }),
              _ = i.failedCount === 0 && i.invalidCount === 0 && c;
            return _
              ? { outcome: m.Sent, invited: p }
              : (o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Some invites weren't sent"),
                  }),
                ),
                { outcome: m.Partial, invited: p });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event] inviting guests failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sharable-event-invite-failed"),
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't send invites"),
                }),
              ),
              { outcome: m.Failed, invited: [] }
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o(
              "WAWebSendSharableEventInvitesAction",
            ).sendSharableEventInvites(e, t);
            return (
              (n == null ? void 0 : n.messageSendResult) ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event] sending invite messages failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sharable-event-invite-message-failed"),
              !1
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.SharableEventInviteOutcome = m), (l.inviteSharableEventGuests = p));
  },
  226,
);
