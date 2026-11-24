__d(
  "WAWebVoipLiveRootCallLogState",
  [
    "WALogger",
    "WAWebCallLogMsgData.flow",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebVoipCallStateUtils",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c(e) {
      u = e;
    }
    function d(e, t) {
      var n = u;
      n != null &&
        n.rootCallId === e &&
        R(t, n.rootCallCreatorWid) &&
        (u = null);
    }
    function m(e, t) {
      e != null &&
        t.terminatedByDeviceSwitch !== !1 &&
        N(t) &&
        e.set({ terminatedByDeviceSwitch: !0 });
    }
    async function p(t) {
      if (f(t.id))
        try {
          var n = await o("WAWebDBMsgUtils").getMsgByMsgKey(t.id),
            a = o("WAWebMsgCollection").MsgCollection.get(t.id);
          (n == null ? void 0 : n.switchEntryCallLogTime) != null &&
            (a == null ? void 0 : a.switchEntryCallLogTime) == null &&
            (a == null ||
              a.set({
                switchEntryCallLogTime: n.switchEntryCallLogTime,
                switchEntryEnded: n.switchEntryEnded,
              }));
        } catch (n) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] call log ",
                  ": stored switch-entry state not read",
                ])),
              t.id.id,
            )
            .catching(r("getErrorSafe")(n))
            .tags("non-sad");
        }
    }
    function _(e, t) {
      return e != null && t.kind === "callLog" && t.callParticipants == null
        ? babelHelpers.extends({}, t, { callParticipants: e })
        : t;
    }
    function f(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      return (
        t != null && t.isNewlyStored == null && t.switchEntryCallLogTime == null
      );
    }
    function g(e) {
      return e.kind !== "callLog"
        ? e
        : e.terminatedByDeviceSwitch !== !1 &&
            (e.finalCallOutcome !==
              o("WAWebCallLogMsgData.flow").CallOutcome.Completed ||
              e.terminatedByDeviceSwitch === !0) &&
            N(e)
          ? babelHelpers.extends({}, e, { terminatedByDeviceSwitch: !0 })
          : e;
    }
    function h(e) {
      var t;
      ((t = s) == null ? void 0 : t.segmentId) === e.callId && (s = null);
      var n = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
        e.callId,
      );
      n != null &&
        o("WAWebVoipCallStateUtils").isCallConnected(e.callState) &&
        (s = { segmentId: e.callId, root: n });
    }
    function y(e) {
      return O(e) != null;
    }
    function C(e) {
      return (
        !e.id.remote.isGroup() &&
        (e.finalCallOutcome !==
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed ||
          e.terminatedByDeviceSwitch === !0) &&
        $(e)
      );
    }
    function b(e, t) {
      return t.selfOtherDeviceConnected === !0 && v(e, t);
    }
    function v(e, t) {
      var n,
        r = O(t.id.id);
      return (
        r != null &&
        C(t) &&
        $(e) &&
        F(t.viewMode) &&
        F(e.viewMode) &&
        R((n = e.from) != null ? n : e.callCreator, r)
      );
    }
    function S(e, t) {
      var n;
      if (M(t))
        return {
          callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
          finalCallOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        };
      var r =
        B(t.id.id) != null &&
        t.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing;
      return {
        callOutcome: r
          ? o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
          : (n = e.callOutcome) != null
            ? n
            : t.callOutcome,
        finalCallOutcome: w(e, r),
      };
    }
    function R(e, t) {
      return (
        e != null &&
        e.isUser() &&
        t.isUser() &&
        x(
          o("WAWebWidFactory").asUserWidOrThrow(e),
          o("WAWebWidFactory").asUserWidOrThrow(t),
        )
      );
    }
    async function L(e) {
      var t,
        n = g(e);
      if (n.kind !== "callLog" || !C(n) || !y(n.id.id)) return n;
      var r = await o("WAWebDBMsgUtils").getMsgByMsgKey(n.id);
      return r == null || !v(r, n)
        ? n
        : babelHelpers.extends(
            {},
            n,
            {
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              t: r.t,
              callCreator: (t = r.callCreator) != null ? t : n.callCreator,
              terminatedByDeviceSwitch:
                r.terminatedByDeviceSwitch === !0
                  ? !0
                  : n.terminatedByDeviceSwitch,
            },
            S(r, n),
            {
              switchEntryCallLogTime: r.switchEntryCallLogTime,
              switchEntryEnded: r.switchEntryEnded,
            },
          );
    }
    async function E(e) {
      if (!(e.selfOtherDeviceConnected !== !0 || !y(e.id.id))) {
        var t = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message", "chat"], async function (t) {
            var n,
              r = t[0],
              a = t[1],
              i = await r.get(e.id.toString(), !1);
            if (i == null) return null;
            var l = o("WAWebDBMessageSerialization").messageFromDbRow(i);
            if (!b(l, e)) return null;
            var s = e.id.remote,
              u = await a.get(s.toString()),
              c = I(u, i.t),
              d = {
                viewMode: i.viewMode,
                switchEntryCallLogTime: i.switchEntryCallLogTime,
              },
              m = {
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                switchEntryCallLogTime:
                  (n = i.switchEntryCallLogTime) != null ? n : "pending",
              };
            return (
              await r.merge(i.id, m),
              await T(a, s, c),
              b(l, e)
                ? {
                    row: babelHelpers.extends({}, i, m),
                    chatT: c != null ? c : u == null ? void 0 : u.t,
                  }
                : (await r.merge(i.id, d), await D(a, s, u, c), null)
            );
          });
        k(t, e);
      }
    }
    function k(e, t) {
      var n;
      if (e != null) {
        var r = g(o("WAWebDBMessageSerialization").messageFromDbRow(e.row));
        if (b(r, t)) {
          var a =
            (n = o("WAWebMsgCollection").MsgCollection.get(t.id)) != null
              ? n
              : o("WAWebMsgCollection").MsgCollection.add(r)[0];
          (a == null ||
            a.set({
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              switchEntryCallLogTime: r.switchEntryCallLogTime,
              selfOtherDeviceConnected: !0,
              terminatedByDeviceSwitch: r.terminatedByDeviceSwitch,
            }),
            m(a, r));
          var i = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(t.id, !1);
          i == null ||
            a == null ||
            (i.msgs.add(a),
            e.chatT != null && i.set({ t: e.chatT }),
            i.msgsChanged++);
        }
      }
    }
    function I(e, t) {
      return e == null || t == null ? null : e.t == null || e.t < t ? t : null;
    }
    async function T(e, t, n) {
      n != null && (await e.merge(t.toString(), { t: n }));
    }
    async function D(e, t, n, r) {
      n != null && r != null && (await e.merge(t.toString(), { t: n.t }));
    }
    function x(e, t) {
      if (e.isSameAccountAndAddressingMode(t)) return !0;
      var n = o("WAWebLidMigrationUtils").toUserLid(e);
      return n != null && n.equals(o("WAWebLidMigrationUtils").toUserLid(t));
    }
    function $(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        e.isCallLink !== !0 &&
        e.switchEntryEnded !== !0 &&
        ((e.finalCallOutcome !==
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed &&
          A(e.callOutcome)) ||
          P(e))
      );
    }
    function P(e) {
      var t,
        n = O(e.id.id);
      return (
        n != null &&
        N(e) &&
        e.finalCallOutcome ===
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed &&
        (e.callOutcome ===
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed ||
          e.callOutcome ===
            o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing) &&
        R((t = e.from) != null ? t : e.callCreator, n)
      );
    }
    function N(e) {
      var t,
        n = u;
      return (
        n != null &&
        e.id.id === n.rootCallId &&
        R((t = e.from) != null ? t : e.callCreator, n.rootCallCreatorWid)
      );
    }
    function M(e) {
      return (
        e.terminatedByDeviceSwitch === !0 &&
        e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Completed &&
        e.finalCallOutcome ===
          o("WAWebCallLogMsgData.flow").CallOutcome.Completed
      );
    }
    function w(e, t) {
      var n;
      if (
        !(
          t &&
          N(e) &&
          e.finalCallOutcome ===
            o("WAWebCallLogMsgData.flow").CallOutcome.Completed
        )
      )
        return (n = e.finalCallOutcome) != null
          ? n
          : t &&
              e.callOutcome ===
                o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
            ? o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere
            : void 0;
    }
    function A(e) {
      return (
        e === o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere ||
        e === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing
      );
    }
    function F(e) {
      return (
        e === o("WAWebViewMode.flow").ViewModeType.VISIBLE ||
        e === o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OUT_OF_ORDER
      );
    }
    function O(e) {
      var t,
        n = o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(e);
      return n != null
        ? o("WAWebWidFactory").createWid(n.rootCallCreatorJid)
        : (t = B(e)) == null
          ? void 0
          : t.rootCallCreatorWid;
    }
    function B(e) {
      var t = s,
        n =
          t == null
            ? null
            : o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
                t.segmentId,
              );
      return t != null &&
        n != null &&
        t.root.rootCallId === e &&
        n.rootCallId === e &&
        R(t.root.rootCallCreatorWid, n.rootCallCreatorWid) &&
        o("WAWebVoipTransferredCallRegistry").isTransferredCallLive(
          t.segmentId,
        ) &&
        !o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(
          t.segmentId,
        )
        ? n
        : null;
    }
    ((l.recordNativeDeviceSwitchRoot = c),
      (l.forgetNativeDeviceSwitchRoot = d),
      (l.applyNativeDeviceSwitchFlag = m),
      (l.recoverSwitchEntryStateFromRow = p),
      (l.preserveCallParticipants = _),
      (l.noteNativeRootCallState = h),
      (l.isSameRootCreator = R),
      (l.withNativeLiveRootViewMode = L),
      (l.reactivateExistingNativeRoot = E));
  },
  98,
);
