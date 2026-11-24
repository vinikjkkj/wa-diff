__d(
  "WAWebVoipActionRepairSwitchEntryCallLog",
  [
    "WALogger",
    "WALongInt",
    "WAWebCallLogMsgData.flow",
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
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebWidFactory",
    "compactMap",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f;
    async function g(t, n, r) {
      r === void 0 && (r = !1);
      var a = await o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: t.remote,
          isOffline: !1,
          msgCategory: null,
          action: async function () {
            return o("WAWebCmd").Cmd.isOfflineDeliveryEnd
              ? (await C(t, n, r), !0)
              : (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip-order] phase=repair-wait callId=",
                      " reason=offline-delivery",
                    ])),
                  t.id,
                ),
                !1);
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_call_log_write",
          );
        });
      a === !1 && (await h(), await g(t, n, r));
    }
    async function h() {
      o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
        (await r("WAWebEventsWaitForBbEvent")(
          o("WAWebCmd").Cmd,
          "offline_delivery_end_from_bridge",
        ));
    }
    async function y(e, t, n) {
      var r = N(e);
      if (r != null) {
        var o = n != null ? n : await M(e, t);
        o != null && (await g(o, r));
      }
    }
    async function C(e, t, n) {
      var r = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "chat"], function (r) {
          var o = r[0],
            a = r[1];
          return b(o, a, e, t, n);
        });
      if (r == null)
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] phase=repair-complete callId=",
              " result=no-change",
            ])),
          e.id,
        );
      else {
        var a = r.chatT,
          i = r.update;
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] phase=repair-commit callId=",
              " timeSet=",
              " canonicalT=",
              " viewSet=",
              " view=",
              " expirySet=",
              " chatTResult=",
              "",
            ])),
          e.id,
          i.t != null,
          i.t,
          i.viewMode != null,
          i.viewMode,
          i.expiredTimestamp != null,
          a,
        ),
          P(e, r));
      }
    }
    async function b(e, t, n, r, a) {
      var i = await e.get(n.toString(), !1);
      if (i == null)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=repair-check callId=",
                " stored=false reason=missing-row",
              ])),
            n.id,
          ),
          null
        );
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[voip-order] phase=repair-check callId=",
            " stored=true storedT=",
            " rootT=",
            " view=",
            " outcome=",
            " ordinary=",
            " switchTime=",
            " switchEnded=",
            "",
          ])),
        n.id,
        i.t,
        r,
        i.viewMode,
        i.callOutcome,
        a,
        i.switchEntryCallLogTime,
        i.switchEntryEnded,
      );
      var l =
        i.switchEntryCallLogTime != null
          ? await v(e, n, i, r)
          : await S(e, n, i, a ? r : null);
      if (l == null) return null;
      await e.merge(
        i.id,
        babelHelpers.extends(
          {},
          I(i, n, l),
          l.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
            ? { pendingReadReceipt: null }
            : null,
        ),
      );
      var s = await t.get(n.remote.toString()),
        u = await o(
          "WAWebVoipCallLogOrderingTimestampRepair",
        ).repairStoredChatTimestamp(e, t, n.remote, s == null ? void 0 : s.t, [
          i.t,
        ]);
      return { update: l, chatT: u };
    }
    async function v(e, t, n, r) {
      var a = D(n, r),
        i = (await x(e, t, babelHelpers.extends({}, n, a))) && T(t.id);
      return i
        ? babelHelpers.extends({}, a, {
            viewMode:
              o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER,
          })
        : a;
    }
    async function S(e, t, n, r) {
      if (r == null || !L(t, n))
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=repair-decision callId=",
                " reason=",
                "",
              ])),
            t.id,
            r == null ? "no-trusted-time" : "not-ordinary-terminal",
          ),
          null
        );
      var a = R(n, r);
      if (!k(t, n))
        return (
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[voip-order] phase=repair-decision callId=",
                " reason=hide-ineligible",
              ])),
            t.id,
          ),
          a
        );
      var i = await o("WAWebVoipCallLogOrderingContext").getCallLogOrdering(
          e,
          t.remote,
          n.internalId,
          r,
        ),
        l = i.isOutOfOrder,
        s = i.predecessorT,
        u = i.scanLimited,
        c = i.successorT;
      return (
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] phase=repair-decision callId=",
              " comparedT=",
              " predecessorT=",
              " successorT=",
              " limited=",
              " reason=",
              "",
            ])),
          t.id,
          r,
          s,
          c,
          u,
          l ? "new-hide" : "no-inversion-found",
        ),
        l
          ? babelHelpers.extends({}, a, {
              viewMode:
                o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER,
            })
          : a
      );
    }
    function R(e, t) {
      var n;
      if (t === e.t) return null;
      var r = e.ephemeralDuration;
      if (r == null || r <= 0) return { t };
      var o =
        e.expiredTimestamp === e.t + r &&
        ((n = e.afterReadDuration) != null ? n : 0) <= 0 &&
        e.scheduledTimestampS == null;
      return o ? { t, expiredTimestamp: t + r } : { t };
    }
    function L(e, t) {
      return (
        t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        t.isCallLink !== !0 &&
        t.internalId != null &&
        (t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE ||
          t.viewMode ===
            o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER) &&
        E(t) &&
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(e.id)
      );
    }
    function E(e) {
      return (
        e.callOutcome != null &&
        e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Unknown &&
        e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
        e.terminatedByDeviceSwitch !== !0
      );
    }
    function k(e, t) {
      var n;
      return (
        t.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE &&
        !o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        T(e.id) &&
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(e.id) == null &&
        ((n = o("WAWebMsgCollection").MsgCollection.get(e)) == null
          ? void 0
          : n.selfOtherDeviceConnected) !== !0
      );
    }
    function I(e, t, n) {
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
    function T(e) {
      return (
        !o(
          "WAWebVoipActionWriteCallLogSwitchEntryPoint",
        ).isSwitchEntryRootCallLiveHere(e) && !r("justknobx")._("8695")
      );
    }
    function D(e, t) {
      return t != null &&
        Number.isFinite(t) &&
        t > 0 &&
        e.switchEntryCallLogTime === "pending"
        ? { t, switchEntryCallLogTime: "canonical" }
        : null;
    }
    async function x(e, t, n) {
      if (!$(t, n)) return !1;
      var r = await o("WAWebVoipCallLogOrderingContext").getCallLogOrdering(
          e,
          t.remote,
          n.internalId,
          n.t,
        ),
        a = r.isOutOfOrder,
        i = r.predecessorT,
        l = r.scanLimited,
        s = r.successorT;
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[voip-order] phase=repair-neighbors callId=",
              " comparedT=",
              " predecessorT=",
              " successorT=",
              " limited=",
              " outOfOrder=",
              "",
            ])),
          t.id,
          n.t,
          i,
          s,
          l,
          a,
        ),
        a
      );
    }
    function $(e, t) {
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
    function P(e, t) {
      var n,
        r = t.chatT,
        a = t.update;
      (n = o("WAWebMsgCollection").MsgCollection.get(e)) == null || n.set(a);
      var i = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, !1);
      i != null && (r != null && i.set({ t: r }), i.msgsChanged++);
    }
    function N(e) {
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
    async function M(e, t) {
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
    ((l.repairSwitchEntryCallLog = g), (l.repairSyncedRootCallLog = y));
  },
  98,
);
