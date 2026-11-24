__d(
  "WAWebVoipNativeRootCallLogEnding",
  [
    "WALogger",
    "WAResolvable",
    "WAWebCallLogMsgData.flow",
    "WAWebDBMessageSerialization",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebModelStorageUtils",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebVoipActionWriteCallLogImpl",
    "WAWebVoipLiveRootCallLogState",
    "WAWebVoipTransferredCallRegistry",
    "WAWebVoipUnresolvedPlaceholderLoadable",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      if (
        !y(e) ||
        o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(e.callId)
      )
        return null;
      var t = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
        e.callId,
      );
      return t != null
        ? {
            callId: e.callId,
            root: t,
            deviceSwitch: e.terminatedByDeviceSwitch,
          }
        : null;
    }
    async function c(e, t, n) {
      if (o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(t))
        return (
          o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(t),
          d(t, "failed-transfer")
        );
      if (n == null) return m(e);
      if (!h(n, e, t)) return d(t, "before-persist");
      if (
        (await o("WAWebVoipActionWriteCallLogImpl").waitForEagerCallLogPersist(
          e.id,
        ),
        !h(n, e, t))
      )
        return d(t, "after-persist");
      if (
        (o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(t),
        (await p(n, e, t)) === "mismatch")
      )
        return d(t, "stored-root-mismatch");
      if (!h(n, e, t)) return d(t, "after-application");
      var r = null;
      try {
        return (
          (r = await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(e.id.remote, e, !1)),
          r != null && (await p(n, r.toJSON(), t)),
          r
        );
      } finally {
        if (!n.deviceSwitch) {
          var a, i;
          o(
            "WAWebVoipUnresolvedPlaceholderLoadable",
          ).scheduleSwitchEntryCallLogRepair(
            (a = (i = r) == null ? void 0 : i.id) != null ? a : e.id,
            null,
          );
        }
      }
    }
    function d(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call log ",
                ": native root ending skipped (",
                ")",
              ])),
            t,
            n,
          )
          .tags("non-sad"),
        null
      );
    }
    async function m(e) {
      if (
        e.terminatedByDeviceSwitch === !1 &&
        e.callOutcome === o("WAWebCallLogMsgData.flow").CallOutcome.Completed
      ) {
        var t;
        o("WAWebVoipLiveRootCallLogState").forgetNativeDeviceSwitchRoot(
          e.id.id,
          (t = e.from) != null ? t : e.callCreator,
        );
      }
      var n = await o(
        "WAWebVoipActionWriteCallLogImpl",
      ).writeVoipCallLogMessageImpl(e.id.remote, e, !1);
      return (
        n == null ||
          n.set({ terminatedByDeviceSwitch: e.terminatedByDeviceSwitch }),
        n
      );
    }
    function p(e, t, n) {
      var r = new (o("WAResolvable").Resolvable)(),
        a = !1;
      return (
        o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: t.id.remote,
            isOffline: !1,
            msgCategory: null,
            skipOfflineWait: !0,
            action: async function () {
              a = !0;
              try {
                r.resolve(await f(e, t, n));
              } catch (e) {
                throw (r.reject(e), e);
              }
            },
          })
          .catch(function (e) {
            (a || r.reject(e), _(e));
          }),
        r.promise
      );
    }
    function _(e) {
      try {
        o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
          e,
          "voip_call_log_write",
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] native root ending queue failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("voip");
      }
    }
    async function f(e, t, n) {
      var r = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (r) {
          var a = r[0],
            i = await a.get(t.id.toString(), !1);
          if (i == null) return h(e, t, n) ? "missing" : "mismatch";
          var l = o("WAWebDBMessageSerialization").messageFromDbRow(i);
          if (!h(e, l, n)) return "mismatch";
          if (e.deviceSwitch) return "applied";
          var s = i.switchEntryEnded;
          return (
            await a.merge(i.id, { switchEntryEnded: !0 }),
            h(e, l, n)
              ? "applied"
              : (await a.merge(i.id, { switchEntryEnded: s }), "mismatch")
          );
        });
      if (r === "applied") {
        var a;
        (e.deviceSwitch
          ? o("WAWebVoipLiveRootCallLogState").recordNativeDeviceSwitchRoot(
              e.root,
            )
          : o("WAWebVoipLiveRootCallLogState").forgetNativeDeviceSwitchRoot(
              e.root.rootCallId,
              e.root.rootCallCreatorWid,
            ),
          (a = o("WAWebMsgCollection").MsgCollection.get(t.id)) == null ||
            a.set(g(e)));
      }
      return r;
    }
    function g(e) {
      return e.deviceSwitch
        ? { terminatedByDeviceSwitch: !0 }
        : { switchEntryEnded: !0, terminatedByDeviceSwitch: !1 };
    }
    function h(e, t, n) {
      var a,
        i = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(n);
      return (
        !o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(n) &&
        i != null &&
        e.callId === n &&
        i.rootCallId === e.root.rootCallId &&
        o("WAWebVoipLiveRootCallLogState").isSameRootCreator(
          i.rootCallCreatorWid,
          e.root.rootCallCreatorWid,
        ) &&
        t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        t.id.id === i.rootCallId &&
        o("WAWebVoipLiveRootCallLogState").isSameRootCreator(
          (a = t.from) != null ? a : t.callCreator,
          i.rootCallCreatorWid,
        ) &&
        !t.id.remote.isGroup() &&
        t.isCallLink !== !0 &&
        r("isStringNullOrEmpty")(t.callLinkToken)
      );
    }
    function y(e) {
      return (
        e.result === o("WAWebVoipWaCallEnums").CallLogResult.Connected &&
        e.groupJid == null &&
        e.isCallLink !== !0 &&
        r("isStringNullOrEmpty")(e.callLinkToken) &&
        (e.terminatedByDeviceSwitch === !0 || e.terminatedByDeviceSwitch === !1)
      );
    }
    ((l.captureNativeRootCallLogEnd = u),
      (l.writeNativeRootCallLogFromEnding = c));
  },
  98,
);
