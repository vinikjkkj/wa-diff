__d(
  "WAWebOpusUtils",
  [
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebLimitSharingModelUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    async function s(t, n) {
      var r = o("WAWebWidFactory").createWid(t);
      if ((n == null ? void 0 : n.skipSharingLimitedCheck) !== !0) {
        var a,
          i = await o("WAWebApiChatCommon").getChatRecord(r);
        if (
          (i == null || (a = i.limitSharing) == null
            ? void 0
            : a.sharingLimited) !== !0
        )
          return;
      }
      var l = {
        sharingLimited: !1,
        trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN,
        limitSharingSettingTimestamp:
          Math.floor(o("WATimeUtils").unixTime()) * e,
      };
      (await o("WAWebLimitSharingModelUtils").updateChat(r, l),
        (n == null ? void 0 : n.skipSystemMessage) !== !0 &&
          (await o("WAWebLimitSharingModelUtils").genLimitSharingSystemMessage(
            r,
            l,
            { beforeTimestamp: n == null ? void 0 : n.beforeTimestamp },
          )));
    }
    l.opusProcessChat = s;
  },
  98,
);
