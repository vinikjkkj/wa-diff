__d(
  "WAWebVoipActionWriteCallLogSwitchEntryPoint",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipCallLogWriteMutex",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipUnresolvedPlaceholderLoadable",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Map();
    function d(e) {
      var t;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_1on1_call_transfer_entry_point",
        ) !== !0
      )
        return Promise.resolve();
      var n = e.rootCallId,
        r = ((t = c.get(n)) != null ? t : Promise.resolve()).then(function () {
          return m(e);
        });
      return (
        c.set(n, r),
        r.finally(function () {
          c.get(n) === r && c.delete(n);
        }),
        r
      );
    }
    async function m(t) {
      try {
        t.enabled ? await p(t) : await _(t);
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
    }
    async function p(e) {
      var t = await v(e),
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
              outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Connected,
            },
            {
              participant: o(
                "WAWebUserUtils",
              ).getMeUserMatchingAddressingModeOrThrow(e.peerWid),
              outcome: o("WAWebVoipWaCallEnums").CallParticipantState.Connected,
            },
          ],
          selfOtherDeviceConnected: !0,
          switchEntryCallLogTime: "pending",
        },
        c = await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).writeVoipCallLogMessageImpl(r, u, !1, !1, !1, !0);
      c == null &&
        e.isVideoCall &&
        (await o(
          "WAWebVoipActionWriteCallLogImpl",
        ).updateOngoingVoipCallLogImpl({
          chatId: r,
          msgKey: a,
          update: { isVideoCall: !0 },
        }));
    }
    async function _(e) {
      await o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
      var t = await o(
        "WAWebVoipCallLogWriteMutex",
      ).WACallLogWriteMutex.acquire();
      try {
        !C(e.rootCallId) &&
          o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(e.rootCallId) == null &&
          (await y(e));
      } finally {
        t.release();
      }
    }
    async function f(e) {
      var t,
        n = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (t) {
            var n = t[0],
              r = await n.get(e.toString(), !1);
            return r == null
              ? null
              : (await n.merge(r.id, g(r)),
                {
                  switchEntryEnded: r.switchEntryEnded,
                  finalCallOutcome: r.finalCallOutcome,
                  viewMode: r.viewMode,
                });
          });
      return n == null
        ? function () {
            return Promise.resolve();
          }
        : ((t = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
            t.set(g(n)),
          function () {
            return h(e, n);
          });
    }
    function g(e) {
      return babelHelpers.extends(
        { switchEntryEnded: void 0, finalCallOutcome: void 0 },
        e.viewMode ===
          o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
          ? { viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE }
          : null,
      );
    }
    async function h(e, t) {
      var n;
      (await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (n) {
          var r = n[0];
          await r.merge(e.toString(), t);
        }),
        (n = o("WAWebMsgCollection").MsgCollection.get(e)) == null || n.set(t));
    }
    async function y(e) {
      var t = await v(e),
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
        await o("WAWebVoipActionWriteCallLogImpl").updateOngoingVoipCallLogImpl(
          {
            chatId: n,
            msgKey: r,
            update: {
              finalCallOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                .Completed,
            },
          },
        ),
        await b(r),
        o(
          "WAWebVoipUnresolvedPlaceholderLoadable",
        ).scheduleSwitchEntryCallLogRepair(r, null));
    }
    function C(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    async function b(e) {
      var t = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (t) {
          var n = t[0],
            r = await n.get(e.toString(), !1);
          return (r == null ? void 0 : r.switchEntryCallLogTime) == null ||
            C(e.id)
            ? !1
            : (r.switchEntryEnded !== !0 &&
                (await n.merge(r.id, { switchEntryEnded: !0 })),
              !0);
        });
      if (t) {
        var n;
        (n = o("WAWebMsgCollection").MsgCollection.get(e)) == null ||
          n.set({ switchEntryEnded: !0 });
      }
    }
    async function v(e) {
      var t = e.peerWid,
        n = e.rootCallCreatorJid,
        a = e.rootCallId,
        i = o("WAWebWidFactory").createWid(n),
        l = await o("WAWebCallLogUtils").getCallLogTargetDetails({
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
    }
    ((l.writeCallLogForSwitchEntryPoint = d),
      (l.reopenSwitchEntryCallLog = f),
      (l.isSwitchEntryRootCallLiveHere = C),
      (l.markSwitchEntryCallLogEnded = b),
      (l.resolveRootCallLogTarget = v));
  },
  98,
);
