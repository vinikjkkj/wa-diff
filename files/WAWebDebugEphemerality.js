__d(
  "WAWebDebugEphemerality",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactCollection",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "err",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n;
      r("vulture")("77AFAtim88Ie31oScn1o7cSI_WY=");
      var a = o("WAWebWidFactory").createUserWidOrThrow(e),
        i = await o("WAWebApiContact").getContactRecord(a);
      if (i == null) throw r("err")("Couldn't find contact for number " + e);
      await o(
        "WAWebUpdateDisappearingModeForContact",
      ).updateDisappearingModeForContact({
        contactId: a,
        newDuration: (n = i.disappearingModeDuration) != null ? n : 0,
        newSettingTimestamp: o("WATimeUtils").unixTime(),
        newEphemeralityDisabled: t,
      });
      var l = o("WAWebContactCollection").ContactCollection.get(a);
      l == null || l.set("isEphemeralityDisabled", t);
    }
    e.doc = "Sets or unsets isEphemeralityDisabled on the specified contact";
    async function s(e, t) {
      r("vulture")("W2lJnXpkBCsEJ011Lh6WjtdnwsA=");
      var n = await o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
          e,
        ]),
        a = n[0];
      if (a == null) throw r("err")("Couldn't find msg for id " + e);
      var i = o("WATimeUtils").unixTime() + t;
      a.expiredTimestamp = i;
    }
    s.doc =
      "Overrides expiredTimestamp on the given msg to (now + durationSeconds). Use durationSeconds=0 to expire immediately. Triggers the AR receiver-side expiration timer / fade-out animation. Note: in-memory only \u2014 change is lost on reload. msgId is the serialized msg key string (e.g. 'false_447...@c.us_3EB0...').";
    async function u() {
      r("vulture")("wkotZBsl40rBy6H--MEt7BLTdig=");
      var e = o("WAWebChatCollection")
        .ChatCollection.getModelsArray()
        .filter(function (e) {
          var t;
          return ((t = e.ephemeralDuration) != null ? t : 0) > 0;
        });
      return (
        await Promise.all(
          e.map(function (e) {
            var t = {
              id: new (r("WAWebMsgKey"))({
                remote: e.id,
                fromMe: !1,
                id: r("WAWebMsgKey").newId_DEPRECATED(),
              }),
              from: e.id,
              to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              recipients: [],
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .EphemeralKeepInChat,
              t: o("WATimeUtils").unixTime(),
              type: "gp2",
              kind: o("WAWebMsgType").MsgKind.Gp2,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            };
            return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: e.id,
              newMsg: t,
              handleSingleMsgOrigin: "handleGroupNotification",
            });
          }),
        ),
        e.length
      );
    }
    u.doc =
      'Inserts a keep-in-chat gp2 system message (subtype ephemeral_keep_in_chat, the "Learn more" notice) into every chat that has disappearing messages enabled (ephemeralDuration > 0). Reproduces the server-sent EPHEMERAL_KEEP_IN_CHAT notice locally via handleSingleMsg (no network; persisted to DB). Returns the number of chats updated. Use to preview/QA the keep-in-chat system message and its CTA.';
    var c = {
      setEphemeralityDisabledForContact: e,
      overrideMsgExpiredTimestamp: s,
      addKeepInChatSystemMsgToAllEphemeralChats: u,
    };
    l.default = c;
  },
  98,
);
