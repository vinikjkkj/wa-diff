__d(
  "WAWebWindowsHandleNotificationAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBannerContextMenuActions",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebMsgKey",
    "WAWebWidFactory",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeInitiator",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = r("JSResourceForInteraction")(
        "WAWebBizAiHandoffNotificationLogEvents",
      ).__setRef("WAWebWindowsHandleNotificationAction"),
      b = (function () {
        function t(e) {
          ((this.$1 = e), this.$2());
        }
        var n = t.prototype;
        return (
          (n.$2 = function () {
            var e,
              t = this;
            if (r("WAWebEnvironment").isWindows) {
              var n =
                (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
                  r("WAWebWindowsHybridBridgeInitiator")
                    .WAWebWindowsHandleNotificationAction,
                )) == null
                  ? void 0
                  : e.systemIntegrationsBridge;
              n != null &&
                n.events.on("MessageNotificationAction", function (e) {
                  t.$3(e);
                });
            }
          }),
          (n.$3 = function (n) {
            var t,
              a = n.action,
              i = n.additionalData,
              l = n.key,
              d = this.$1.getNotification(l);
            if (d == null) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController: cannot find notification in map with key: ",
                    "",
                  ])),
                l,
              ),
                this.$4(l, a));
              return;
            }
            var m = d.notificationBanner;
            if (m == null) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController: notification banner is null",
                  ])),
              ),
                this.$4(l, a));
              return;
            }
            switch (a) {
              case "Click":
                m.click();
                break;
              case "QuickReply":
                m.quickReply(i).catch(function (e) {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: quick reply failed: ",
                        "",
                      ])),
                    e,
                  );
                });
                break;
              case "ContextMenuClick":
                m.contextMenuClick(
                  (t = r("WAWebBannerContextMenuActions").cast(i)) != null
                    ? t
                    : r("WAWebBannerContextMenuActions").None,
                );
                break;
              default:
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "WANotificationController: unknown action: ",
                      "",
                    ])),
                  a,
                );
                break;
            }
          }),
          (n.$4 = function (t, n) {
            if (n === "Click") {
              if (t.startsWith("handoff:")) {
                this.$5(t.slice(8));
                return;
              }
              if (t.startsWith("msg:")) {
                var e = t.slice(4).split("_");
                if (e.length === 3) {
                  var a = e[0] === "true",
                    i = e[1],
                    l = e[2];
                  try {
                    var s = new (r("WAWebMsgKey"))({
                      fromMe: a,
                      remote: o("WAWebWidFactory").createWidFromWidLike(i),
                      id: l,
                    });
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: created MsgKey from notification key: ",
                          "",
                        ])),
                      s.toString(),
                    );
                    var u = o("WAWebChatCollection").ChatCollection.get(
                      s.remote,
                    );
                    if (u == null) {
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "WANotificationController: chat not found for remote WID",
                          ])),
                      );
                      return;
                    }
                    var c = o("WAWebChatMessageSearch").getSearchContext({
                      chat: u,
                      msgKey: s,
                    });
                    o("WAWebCmd")
                      .Cmd.openChatAt({
                        chat: u,
                        msgContext: c,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                          .Notification,
                      })
                      .then(function (e) {
                        e
                          ? o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "WANotificationController: successfully navigated to chat from notification key",
                                ])),
                            )
                          : o("WALogger").LOG(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "WANotificationController: failed to navigate to chat from notification key",
                                ])),
                            );
                      });
                  } catch (e) {
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: failed to create MsgKey from notification key: ",
                          "",
                        ])),
                      e,
                    );
                  }
                }
              }
            }
          }),
          (n.$5 = function (t) {
            try {
              var e = v(t);
              if (e == null) return;
              var n = o("WAWebChatCollection").ChatCollection.get(
                o("WAWebWidFactory").createWidFromWidLike(e.chatId),
              );
              if (n == null) {
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "WANotificationController: handoff chat not found",
                    ])),
                );
                return;
              }
              var a = e.notificationId,
                i = e.notificationTimestampSeconds;
              (a != null &&
                i != null &&
                C.load()
                  .then(function (e) {
                    var t = e.logAiHandoffNotificationClick;
                    return t(n, a, i);
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "WANotificationController: failed to load handoff notification logger",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs(
                        "windows-handoff-notification-logger-load-failed",
                      );
                  }),
                o("WAWebCmd").Cmd.openChatFromUnread({
                  chat: n,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .Notification,
                }));
            } catch (e) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController: failed to handle handoff notification key: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          t
        );
      })();
    function v(e) {
      if (!e.includes("|"))
        return {
          chatId: e,
          notificationId: null,
          notificationTimestampSeconds: null,
        };
      var t = e.split("|");
      if (t.length !== 3) return null;
      var n = Number(t[1]);
      return t[0] === "" || t[2] === "" || !Number.isFinite(n)
        ? null
        : {
            chatId: t[2],
            notificationId: t[0],
            notificationTimestampSeconds: n,
          };
    }
    l.default = b;
  },
  98,
);
