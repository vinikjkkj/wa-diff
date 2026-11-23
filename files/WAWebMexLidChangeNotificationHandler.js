__d(
  "WAWebMexLidChangeNotificationHandler",
  [
    "WAWebDBProcessMessage",
    "WAWebGetChatRecordByAccountLid",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMexLidChangeNotification",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserUtils").getMeUserOrThrow();
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
          l = (
            await o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(
              i,
            )
          )[0],
          s = l != null ? o("WAWebWidFactory").createWid(l.id) : i,
          u = await e(s, a.toString());
        if (l == null) {
          await o("WAWebDBProcessMessage").storeMessages([u], s);
          return;
        }
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
