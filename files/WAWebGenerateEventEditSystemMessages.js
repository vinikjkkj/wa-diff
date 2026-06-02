__d(
  "WAWebGenerateEventEditSystemMessages",
  [
    "WANullthrows",
    "WAWebBackendApi",
    "WAWebDBProcessMessage",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await Promise.all(
        e.map(async function (e) {
          var t = e[0],
            n = e[1],
            a = o("WAWebWidFactory").createWid(t),
            i = await Promise.all(
              r("compactMap")(n, function (e) {
                var t = e.protocolMsg.latestEditSenderTimestampMs;
                if (
                  !(
                    t == null || o("WAWebMsgGetters").getIsFailed(e.protocolMsg)
                  )
                )
                  return s(a, t, e);
              }),
            ),
            l = await o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: a,
                msgObjs: i,
                meta: { add: "after", isHistory: !1 },
                processMessagesOrigin: "eventEditMessage",
              },
            );
          l && (await o("WAWebDBProcessMessage").storeMessages(i, a));
        }),
      );
    }
    async function s(e, t, n) {
      var a,
        i,
        l,
        s,
        u = n.editedMsgData,
        c = n.protocolMsg,
        d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        m = r("WANullthrows")(o("WAWebMsgGetters").getSender(c)),
        p = {
          eventName: r("WANullthrows")(u == null ? void 0 : u.eventName),
          eventStartTime: r("WANullthrows")(
            u == null ? void 0 : u.eventStartTime,
          ),
          eventEndTime: u == null ? void 0 : u.eventEndTime,
          isEventCanceled:
            (a = u == null ? void 0 : u.isEventCanceled) != null ? a : !1,
          eventLocation:
            (i = u == null ? void 0 : u.eventLocation) != null ? i : void 0,
          eventDescription:
            (l = u == null ? void 0 : u.eventDescription) != null ? l : void 0,
          eventJoinLink:
            (s = u == null ? void 0 : u.eventJoinLink) != null ? s : void 0,
        };
      return babelHelpers.extends(
        {
          id: new (r("WAWebMsgKey"))({
            id: await r("WAWebMsgKey").newId(),
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(m),
            remote: e,
            participant: m,
          }),
          author: m,
          from: e,
          to: d,
          t: c.t,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: "event_edit_decrypted",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
          editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
          latestEditMsgKey: c.latestEditMsgKey,
          latestEditSenderTimestampMs: t,
          protocolMessageKey: n.parentMsg.id,
        },
        p,
      );
    }
    l.generateEventEditSystemMessages = e;
  },
  98,
);
