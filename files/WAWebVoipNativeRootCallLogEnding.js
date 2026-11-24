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
    var e, s, u;
    function c(e) {
      if (
        !C(e) ||
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
    async function d(e, t, n) {
      if (o("WAWebVoipTransferredCallRegistry").hasTransferredCallFailed(t))
        return (
          o("WAWebVoipActionWriteCallLogImpl").markCallIdProcessed(t),
          m(t, "failed-transfer")
        );
      if (n == null) return p(e);
      if (!y(n, e, t)) return m(t, "before-persist");
      if (
        (await o("WAWebVoipActionWriteCallLogImpl").waitForEagerCallLogPersist(
          e.id,
        ),
        !y(n, e, t))
      )
        return m(t, "after-persist");
      if (
        (o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(t),
        (await _(n, e, t)) === "mismatch")
      )
        return m(t, "stored-root-mismatch");
      if (!y(n, e, t)) return m(t, "after-application");
      var r = null;
      try {
        return (
          (r = await o(
            "WAWebVoipActionWriteCallLogImpl",
          ).writeVoipCallLogMessageImpl(e.id.remote, e, !1)),
          r != null && (await _(n, r.toJSON(), t)),
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
    function m(t, n) {
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
    async function p(e) {
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
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[voip-order] producer=native-ending callId=",
            " inputT=",
            " view=",
            " outcome=",
            " deviceSwitch=",
            "",
          ])),
        e.id.id,
        e.t,
        e.viewMode,
        e.callOutcome,
        e.terminatedByDeviceSwitch,
      );
      var n = await o(
        "WAWebVoipActionWriteCallLogImpl",
      ).writeVoipCallLogMessageImpl(e.id.remote, e, !1);
      return (
        n == null ||
          n.set({ terminatedByDeviceSwitch: e.terminatedByDeviceSwitch }),
        n
      );
    }
    function _(e, t, n) {
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
                r.resolve(await g(e, t, n));
              } catch (e) {
                throw (r.reject(e), e);
              }
            },
          })
          .catch(function (e) {
            (a || r.reject(e), f(e));
          }),
        r.promise
      );
    }
    function f(e) {
      try {
        o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
          e,
          "voip_call_log_write",
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] native root ending queue failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("voip");
      }
    }
    async function g(e, t, n) {
      var r = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (r) {
          var a = r[0],
            i = await a.get(t.id.toString(), !1);
          if (i == null) return y(e, t, n) ? "missing" : "mismatch";
          var l = o("WAWebDBMessageSerialization").messageFromDbRow(i);
          if (!y(e, l, n)) return "mismatch";
          if (e.deviceSwitch) return "applied";
          var s = i.switchEntryEnded;
          return (
            await a.merge(i.id, { switchEntryEnded: !0 }),
            y(e, l, n)
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
            a.set(h(e)));
      }
      return r;
    }
    function h(e) {
      return e.deviceSwitch
        ? { terminatedByDeviceSwitch: !0 }
        : { switchEntryEnded: !0, terminatedByDeviceSwitch: !1 };
    }
    function y(e, t, n) {
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
    function C(e) {
      return (
        e.result === o("WAWebVoipWaCallEnums").CallLogResult.Connected &&
        e.groupJid == null &&
        e.isCallLink !== !0 &&
        r("isStringNullOrEmpty")(e.callLinkToken) &&
        (e.terminatedByDeviceSwitch === !0 || e.terminatedByDeviceSwitch === !1)
      );
    }
    ((l.captureNativeRootCallLogEnd = c),
      (l.writeNativeRootCallLogFromEnding = d));
  },
  98,
);
