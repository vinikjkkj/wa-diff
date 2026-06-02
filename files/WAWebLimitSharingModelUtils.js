__d(
  "WAWebLimitSharingModelUtils",
  [
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebProtobufsProtocol.pb",
    "WAWebSchemaChat",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      return o("WAWebSchemaChat").getChatTable().get(e);
    }
    async function s(e, t) {
      (await o("WAWebDBUpdateChatTable").updateChatTable(e, {
        limitSharing: t,
      }),
        o("WAWebBackendApi").frontendFireAndForget("updateChatLimitSharing", {
          id: e,
          limitSharing: t,
        }));
    }
    async function u(t) {
      var n,
        r = await e(t.toString());
      if (
        (r == null || (n = r.limitSharing) == null
          ? void 0
          : n.sharingLimited) === !0
      ) {
        var a = {
            sharingLimited: r.limitSharing.sharingLimited,
            trigger: r.limitSharing.trigger,
          },
          i = o("WAWebWidFactory").createWid(r.id);
        await d(i, a);
      }
    }
    async function c(t) {
      var n = t.chatWID,
        r = t.sharingLimited;
      if (r === !0) {
        var a,
          i,
          l = await e(n.toString());
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
          var u = {
            sharingLimited: r,
            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
              .UNKNOWN,
            limitSharingSettingTimestamp: 0,
          };
          return (await s(n, u), d(n, u));
        }
      }
    }
    async function d(e, t, n) {
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
    ((l.getChat = e),
      (l.updateChat = s),
      (l.createLimitSharingMsgOnChatClear = u),
      (l.genLimitSharingSystemMessageOnPersistedChat = c),
      (l.genLimitSharingSystemMessage = d));
  },
  98,
);
