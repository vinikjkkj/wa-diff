__d(
  "WAWebVoipActionWriteCallLogInvitee",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a =
              (n = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : n.msg;
          if (a == null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: invitee call log skipped, no active call log",
                ])),
            );
            return;
          }
          yield g(t, a);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          yield e.reduce(
            function (e, o) {
              return e.then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield g(o, t)) || r(o);
                }),
              );
            },
            (d || (d = n("Promise"))).resolve(),
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!b(t))
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: invitee call log skipped, no ad hoc call log",
                  ])),
              ),
              !0
            );
          try {
            var n = yield o("WAWebCallLogUtils").get1x1CallLidOrPnDestination({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(e),
            });
            if (n.equals(t.id.remote)) return !0;
            var a = yield o(
              "WAWebVoipCallLogWriteMutex",
            ).WACallLogWriteMutex.acquire();
            try {
              var i;
              if (
                ((i = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : i.msg) !== t &&
                t.callOutcome ===
                  o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.get(t.id) == null
              )
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: invitee call log skipped, call ending",
                      ])),
                  ),
                  !1
                );
              var l = yield y(n, t, !0);
              return (
                (l == null ? void 0 : l.callOutcome) ===
                  o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
                  t.callOutcome !==
                    o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
                  (yield y(n, t, !1)),
                !0
              );
            } finally {
              a.release();
            }
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: invitee call log write failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-invitee-call-log-failed"),
              !1
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = v(t, e),
            a = yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(e, r, !1, !1, !1, n);
          return a == null
            ? null
            : (r.callOutcome ===
              o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
                ? o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.add(a, { merge: !0 })
                : o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.remove(a.id),
              a);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !e.id.remote.isGroup() &&
        e.isCallLink !== !0 &&
        r("isStringNullOrEmpty")(e.callLinkToken)
      );
    }
    function v(e, t) {
      var n,
        a,
        i,
        l,
        s = e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return {
        id: new (r("WAWebMsgKey"))({ remote: t, fromMe: !0, id: e.id.id }),
        type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
        kind: o("WAWebMsgType").MsgKind.CallLog,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        callOutcome: s
          ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
          : (n = e.callOutcome) != null
            ? n
            : o("WAWebCallLogMsgData.flow").CallOutcome.Unknown,
        finalCallOutcome: (a = e.finalCallOutcome) != null ? a : void 0,
        isVideoCall: e.isVideoCall === !0,
        callCreator: (i = e.callCreator) != null ? i : void 0,
        from: o("WAWebUserUtils").getMeUserMatchingAddressingModeOrThrow(t),
        to: t,
        t: Math.max(s ? o("WATimeUtils").unixTime() : 0, e.t + 1),
        callDuration: s ? 0 : (l = e.callDuration) != null ? l : 0,
        callParticipants: S(e.callParticipants, t),
      };
    }
    function S(e, t) {
      var n = [].concat(e != null ? e : []);
      return (
        n.some(function (e) {
          var n = e.participant;
          return n.equals(t);
        }) ||
          n.push({
            participant: t,
            outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Invited,
          }),
        n
      );
    }
    ((l.writeCallLogForInvitee = m), (l.writeCallLogsForInvitees = _));
  },
  98,
);
