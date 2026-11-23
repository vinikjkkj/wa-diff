__d(
  "WAWebLimitSharingModelUtils",
  [
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLimitSharingGatingUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebSchemaChat",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    async function s(e) {
      return o("WAWebSchemaChat").getChatTable().get(e, !1);
    }
    async function u(e, t) {
      (await o("WAWebDBUpdateChatTable").updateChatTable(e, {
        limitSharing: t,
      }),
        o("WAWebBackendApi").frontendFireAndForget("updateChatLimitSharing", {
          id: e,
          limitSharing: t,
        }));
    }
    async function c(e, t) {
      (await o("WAWebDBUpdateChatTable").updateChatTable(e, { acp2Setting: t }),
        o("WAWebBackendApi").frontendFireAndForget("updateChatAcp2Setting", {
          id: e,
          acp2Setting: t,
        }));
    }
    async function d(e) {
      var t,
        n = await s(e.toString());
      if (
        !p(n == null ? void 0 : n.acp2Setting, e) &&
        (n == null || (t = n.limitSharing) == null
          ? void 0
          : t.sharingLimited) === !0
      ) {
        var r = {
            sharingLimited: n.limitSharing.sharingLimited,
            trigger: n.limitSharing.trigger,
          },
          a = o("WAWebWidFactory").createWid(n.id);
        await y(a, r);
      }
    }
    async function m(e) {
      var t = await s(e.toString()),
        n = t == null ? void 0 : t.acp2Setting;
      n == null ||
        !p(n, e) ||
        (await h(e, { enabled: !0, trigger: n.trigger }));
    }
    function p(e, t) {
      return (
        (e == null ? void 0 : e.enabled) === !0 &&
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)
      );
    }
    async function _(e) {
      var t = e.acp2Enabled,
        n = e.chatWID,
        r = e.sharingLimited;
      if (r === !0) {
        var a,
          i,
          l = await s(n.toString());
        if (
          (l == null || (a = l.limitSharing) == null
            ? void 0
            : a.limitSharingSettingTimestamp) != null
        )
          return;
        if (
          (l == null || (i = l.limitSharing) == null
            ? void 0
            : i.sharingLimited) !== r
        ) {
          var c = {
            sharingLimited: r,
            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
              .UNKNOWN,
            limitSharingSettingTimestamp: 0,
          };
          return (
            await u(n, c),
            t === !0 && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(n)
              ? void 0
              : y(n, c)
          );
        }
      }
    }
    function f(t) {
      e.set(t.toString(), Date.now());
    }
    async function g(e) {
      var t = e.chatWID,
        n = e.enabled,
        r = e.snapshotRequestedAtMs;
      if (n != null) {
        var a = await s(t.toString()),
          i = a == null ? void 0 : a.acp2Setting;
        if ((i == null ? void 0 : i.enabled) !== n) {
          if (n && (i == null ? void 0 : i.settingTimestamp) == null) {
            var l = {
              enabled: n,
              trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                .UNKNOWN,
              settingTimestamp: 0,
            };
            return (await c(t, l), h(t, l));
          }
          i != null &&
            (C(t, r) ||
              (await c(t, babelHelpers.extends({}, i, { enabled: n }))));
        }
      }
    }
    async function h(e, t, n) {
      var r = o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(e, t),
        a =
          (n == null ? void 0 : n.beforeTimestamp) != null
            ? babelHelpers.extends({}, r, { t: n.beforeTimestamp })
            : r;
      return (
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: a,
          handleSingleMsgOrigin: "acp2",
        }),
        a
      );
    }
    async function y(e, t, n) {
      var r = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(e, t),
        a =
          (n == null ? void 0 : n.beforeTimestamp) != null
            ? babelHelpers.extends({}, r, { t: n.beforeTimestamp })
            : r;
      return (
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: a,
          handleSingleMsgOrigin: "limitSharing",
        }),
        a
      );
    }
    function C(t, n) {
      var r;
      if (n == null) return !1;
      var o = (r = e.get(t.toString())) != null ? r : 0;
      return o >= n;
    }
    ((l.getChat = s),
      (l.updateChat = u),
      (l.updateChatAcp2Setting = c),
      (l.createLimitSharingMsgOnChatClear = d),
      (l.createAcp2MsgOnChatClear = m),
      (l.genLimitSharingSystemMessageOnPersistedChat = _),
      (l.noteDatedAcp2Write = f),
      (l.genAcp2SystemMessageOnPersistedChat = g),
      (l.genAcp2SystemMessage = h),
      (l.genLimitSharingSystemMessage = y));
  },
  98,
);
