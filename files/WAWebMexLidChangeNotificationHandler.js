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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMeUser").getMeUser();
          return {
            id: new (r("WAWebMsgKey"))({
              remote: e,
              fromMe: !1,
              id: yield r("WAWebMsgKey").newId(),
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var r = o(
                "WAWebMexLidChangeNotification",
              ).parseLidChangeNotification(n),
              a = r.newLid,
              i = r.oldLid,
              l = (yield o("WAWebApiChat").getChatRecordByAccountLid(i))[0],
              s = l != null ? o("WAWebWidFactory").createWid(l.id) : i,
              u = yield e(s, a.toString());
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: s,
              newMsg: u,
              handleSingleMsgOrigin: "lid_change_notification",
            });
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.mexHandleLidChangeNotification = u;
  },
  98,
);
