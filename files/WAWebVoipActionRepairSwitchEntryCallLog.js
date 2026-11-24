__d(
  "WAWebVoipActionRepairSwitchEntryCallLog",
  [
    "WALogger",
    "WALongInt",
    "WAWebCallLogUtils",
    "WAWebCmd",
    "WAWebDBMessageRangeIndex",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendMsgGetters",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSyncGatingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipActionWriteCallLogSwitchEntryPoint",
    "WAWebVoipCallLogOrderingContext",
    "WAWebVoipCallLogOrderingTimestampRepair",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebWidFactory",
    "compactMap",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e, t) {
      var n = await o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: e.remote,
          isOffline: !1,
          msgCategory: null,
          action: async function () {
            return o("WAWebCmd").Cmd.isOfflineDeliveryEnd
              ? (await d(e, t), !0)
              : !1;
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_call_log_write",
          );
        });
      n === !1 && (await u(), await s(e, t));
    }
    async function u() {
      o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
        (await r("WAWebEventsWaitForBbEvent")(
          o("WAWebCmd").Cmd,
          "offline_delivery_end_from_bridge",
        ));
    }
    async function c(e, t, n) {
      var r = C(e);
      if (r != null) {
        var o = n != null ? n : await b(e, t);
        o != null && (await s(o, r));
      }
    }
    async function d(e, t) {
      var n = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "chat"], function (n) {
          var r = n[0],
            o = n[1];
          return m(r, o, e, t);
        });
      n != null && y(e, n);
    }
    async function m(t, n, r, a) {
      var i = await t.get(r.toString(), !1);
      if ((i == null ? void 0 : i.switchEntryCallLogTime) == null) return null;
      var l = f(i, a),
        s = (await g(t, r, babelHelpers.extends({}, i, l))) && _(r.id);
      if (l == null && !s) return null;
      var u = s
        ? babelHelpers.extends({}, l, {
            viewMode:
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER,
          })
        : babelHelpers.extends({}, l);
      await t.merge(
        i.id,
        babelHelpers.extends(
          {},
          p(i, r, u),
          s ? { pendingReadReceipt: null } : null,
        ),
      );
      var c = await n.get(r.remote.toString()),
        d = await o(
          "WAWebVoipCallLogOrderingTimestampRepair",
        ).repairStoredChatTimestamp(t, n, r.remote, c == null ? void 0 : c.t, [
          i.t,
        ]);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] switch entry call log ",
              " repaired canonical=",
              " hidden=",
              "",
            ])),
          r.id,
          l != null,
          s,
        ),
        { update: u, chatT: d }
      );
    }
    function p(e, t, n) {
      return n.t == null
        ? n
        : babelHelpers.extends(
            {},
            n,
            {
              isCallLogMsg: n.t,
              messageRangeIndex: o(
                "WAWebDBMessageRangeIndex",
              ).craftMessageRangeIndex({
                chatId: t.remote.toString(),
                isIncoming: !t.fromMe,
                isSystemMessage: o(
                  "WAWebMsgType",
                ).SYSTEM_MESSAGE_TYPES.includes(e.type),
                timestamp: n.t,
              }),
            },
            e.isStarred != null &&
              o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp()
              ? { isStarred: n.t }
              : null,
          );
    }
    function _(e) {
      return (
        !o(
          "WAWebVoipActionWriteCallLogSwitchEntryPoint",
        ).isSwitchEntryRootCallLiveHere(e) && !r("justknobx")._("8695")
      );
    }
    function f(e, t) {
      return t != null &&
        Number.isFinite(t) &&
        t > 0 &&
        e.switchEntryCallLogTime === "pending"
        ? { t, switchEntryCallLogTime: "canonical" }
        : null;
    }
    async function g(e, t, n) {
      if (!h(t, n)) return !1;
      var r = await o("WAWebVoipCallLogOrderingContext").getCallLogOrdering(
        e,
        t.remote,
        n.internalId,
        n.t,
      );
      return r.isOutOfOrder;
    }
    function h(e, t) {
      return (
        t.switchEntryCallLogTime === "canonical" &&
        t.switchEntryEnded === !0 &&
        t.isCallLink !== !0 &&
        !e.remote.isGroup() &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          t.viewMode,
        ) &&
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled()
      );
    }
    function y(e, t) {
      var n,
        r = t.chatT,
        a = t.update;
      (n = o("WAWebMsgCollection").MsgCollection.get(e)) == null || n.set(a);
      var i = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, !1);
      i != null && (r != null && i.set({ t: r }), i.msgsChanged++);
    }
    function C(e) {
      var t = e.callCreatorJid,
        n = e.callLinkToken,
        a = e.groupJid,
        i = e.isCallLink,
        l = e.startTime,
        s = o("WALongInt").maybeNumber(l);
      return s != null &&
        Number.isFinite(s) &&
        s > 0 &&
        i !== !0 &&
        r("isStringNullOrEmpty")(n) &&
        r("isStringNullOrEmpty")(a) &&
        !r("isStringNullOrEmpty")(t)
        ? s
        : null;
    }
    async function b(e, t) {
      var n = await o("WAWebCallLogUtils").getCallLogTargetDetails({
          callCreatorWid: o("WAWebWidFactory").createWid(
            r("nullthrows")(e.callCreatorJid),
          ),
          callId: t,
          groupJid: null,
          isCallLink: !1,
          participants: r("compactMap")(e.participants, function (e) {
            return e.userJid != null && e.userJid !== ""
              ? o("WAWebWidFactory").createWid(e.userJid)
              : null;
          }),
        }),
        a = n.chatId,
        i = n.fromMe,
        l = n.msgKeyId,
        s = n.participant;
      return l === t
        ? new (r("WAWebMsgKey"))({
            remote: a,
            participant: s,
            fromMe: i,
            id: l,
          })
        : null;
    }
    ((l.repairSwitchEntryCallLog = s), (l.repairSyncedRootCallLog = c));
  },
  98,
);
