__d(
  "WAWebVoipActionWriteCallLogSwitchEntryPoint",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Map();
    function m(e) {
      var t;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) !== !0
      )
        return (c || (c = n("Promise"))).resolve();
      var r = e.rootCallId,
        a = (
          (t = d.get(r)) != null ? t : (c || (c = n("Promise"))).resolve()
        ).then(function () {
          return p(e);
        });
      return (
        d.set(r, a),
        a.finally(function () {
          d.get(r) === a && d.delete(r);
        }),
        a
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            t.enabled ? yield f(t) : C(t.rootCallId) || (yield h(t));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: writeCallLog: switchEntryPoint",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .tags("voip")
              .sendLogs("voip-switch-entry-point-call-log-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield b(e),
            n = t.callCreatorUserWid,
            r = t.chatId,
            a = t.id,
            i = t.rootCallCreatorWid,
            l = t.viewMode;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: switch entry point: creating ongoing call log rootCallId=",
                "",
              ])),
            e.rootCallId,
          );
          var u = {
              id: a,
              type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
              kind: o("WAWebMsgType").MsgKind.CallLog,
              viewMode: l,
              callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
              isVideoCall: e.isVideoCall,
              callCreator: i,
              from: n,
              to: r,
              t: o("WATimeUtils").unixTime(),
              callDuration: 0,
              callParticipants: [
                {
                  participant: e.peerWid,
                  outcome: o("WAWebVoipWaCallEnums").CallParticipantState
                    .Connected,
                },
                {
                  participant: o(
                    "WAWebUserUtils",
                  ).getMeUserMatchingAddressingModeOrThrow(e.peerWid),
                  outcome: o("WAWebVoipWaCallEnums").CallParticipantState
                    .Connected,
                },
              ],
              selfOtherDeviceConnected: !0,
            },
            c = yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).writeVoipCallLogMessageImpl(r, u, !1, !1, !1, !0);
          c == null &&
            e.isVideoCall &&
            (yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).updateOngoingVoipCallLogImpl({
              chatId: r,
              msgKey: a,
              update: { isVideoCall: !0 },
            }));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield b(e),
            n = t.chatId,
            r = t.id;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: switch entry point: call ended rootCallId=",
                "",
              ])),
            e.rootCallId,
          ),
            yield o(
              "WAWebVoipActionWriteCallLogImpl",
            ).updateOngoingVoipCallLogImpl({
              chatId: n,
              msgKey: r,
              update: {
                finalCallOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                  .Completed,
              },
            }));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.peerWid,
            n = e.rootCallCreatorJid,
            a = e.rootCallId,
            i = o("WAWebWidFactory").createWid(n),
            l = yield o("WAWebCallLogUtils").getCallLogTargetDetails({
              callCreatorWid: i,
              callId: a,
              groupJid: null,
              participants: [t],
            }),
            s = l.callCreatorUserWid,
            u = l.chatId,
            c = l.fromMe,
            d = l.msgKeyId,
            m = l.participant,
            p = l.viewMode;
          return {
            callCreatorUserWid: s,
            chatId: u,
            id: new (r("WAWebMsgKey"))({
              remote: u,
              participant: m,
              fromMe: c,
              id: d,
            }),
            rootCallCreatorWid: i,
            viewMode: p,
          };
        })),
        v.apply(this, arguments)
      );
    }
    l.writeCallLogForSwitchEntryPoint = m;
  },
  98,
);
