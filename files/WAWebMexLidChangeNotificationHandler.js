__d(
  "WAWebMexLidChangeNotificationHandler",
  [
    "WAWebApiChat",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMexLidChangeNotification",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMeUser();
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          id: await r("WAWebMsgKey").newId(),
        }),
        from: e,
        subtype: "change_lid",
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: Date.now(),
        to: n,
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        templateParams: [t],
      };
    }
    async function s(t, n) {
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var r = o("WAWebMexLidChangeNotification").parseLidChangeNotification(
            n,
          ),
          a = r.newLid,
          i = r.oldLid,
          l = (await o("WAWebApiChat").getChatRecordByAccountLid(i))[0],
          s = l != null ? o("WAWebWidFactory").createWid(l.id) : i,
          u = await e(s, a.toString());
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: s,
          newMsg: u,
          handleSingleMsgOrigin: "lid_change_notification",
        });
      }
    }
    l.mexHandleLidChangeNotification = s;
  },
  98,
);
