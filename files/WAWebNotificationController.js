__d(
  "WAWebNotificationController",
  [
    "WAAbortError",
    "WALogger",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebNotificationsMsgNotification",
    "cr:4692",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (e = n("cr:4692")) != null ? e : null,
      f = (function () {
        function e() {
          var e = this;
          ((this.map = new Map()),
            (this.lastMsgNotifByChat = new Map()),
            (this.$1 = null),
            (this.$2 = null),
            _ && (this.$1 = new _(this)),
            r("WAWebEnvironment").isWindows &&
              o("WAWebCmd").Cmd.on(
                "offline_delivery_end_from_bridge",
                async function () {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: show lastest unread msg due to offline delivery end",
                      ])),
                  ),
                    e.$3());
                },
              ));
        }
        var t = e.prototype;
        return (
          (t.notificationExists = function (t) {
            return this.map.has(t);
          }),
          (t.getNotification = function (t) {
            return this.map.get(t);
          }),
          (t.closeOrCancelNotification = function (t) {
            var e = this.getNotification(t);
            e &&
              (e.notificationBanner
                ? e.notificationBanner.close()
                : e.abortController && e.abortController.abort(),
              this.$4(t));
          }),
          (t.closeOrCancelAllNotifications = function () {
            var e = this;
            this.map.forEach(function (t, n) {
              e.closeOrCancelNotification(n);
            });
          }),
          (t.closeOrCancelNotificationsForChat = function (t) {
            var e = this;
            this.map.forEach(function (n, r) {
              n.matchesChat(t) && e.closeOrCancelNotification(r);
            });
          }),
          (t.triggerNotification = async function (t) {
            var e = this,
              n = t.buildKey();
            this.$5(n, t);
            try {
              var a,
                i = await t.triggerNotification(
                  (a = this.$2) == null ? void 0 : a.call(this),
                );
              if (i != null) {
                if (
                  o(
                    "WAWebNotificationsMsgNotification",
                  ).shouldReplaceMsgNotificationManually() &&
                  t instanceof
                    o("WAWebNotificationsMsgNotification").WAMsgNotification
                ) {
                  var l = o("WAWebFrontendMsgGetters")
                      .getChat(t.msg)
                      .id.toString(),
                    s = this.lastMsgNotifByChat.get(l);
                  (s &&
                    self.setTimeout(function () {
                      return s.close();
                    }, 2e3),
                    this.lastMsgNotifByChat.set(l, i),
                    i.waitForClose().then(function () {
                      e.lastMsgNotifByChat.get(l) === i &&
                        e.lastMsgNotifByChat.delete(l);
                    }));
                }
                i.waitForClose().then(function () {
                  e.$4(n);
                });
              } else
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WANotificationController: notification not invoked:",
                    ])),
                ),
                  this.$4(n));
            } catch (t) {
              o("WAAbortError").catchAbort(function (t) {
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "WANotificationController: notification aborted: ",
                      "",
                    ])),
                  t,
                ),
                  e.$4(n));
              })(r("getErrorSafe")(t));
            }
            return t;
          }),
          (t.setAppContext = function (t) {
            this.$2 = t;
          }),
          (t.$3 = function () {
            var e = null;
            (this.map.forEach(function (t, n) {
              (e == null || t.creationAt > e.creationAt) && (e = t);
            }),
              e
                ? this.triggerNotification(e)
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: showLastestUnreadMsgNotification: no unread msg notification found",
                      ])),
                  ));
          }),
          (t.$5 = function (t, n) {
            this.map.set(t, n);
          }),
          (t.$4 = function (t, n) {
            var e = this.getNotification(t);
            if (e == null) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController:_removeNotificationFromMap cannot find notification in map with key: ",
                    "",
                  ])),
                t,
              );
              return;
            }
            if (n != null && e !== n) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController:_removeNotificationFromMap not removing due to strict equality",
                  ])),
              );
              return;
            }
            this.map.delete(t);
          }),
          e
        );
      })(),
      g = new f();
    l.WANotificationController = g;
  },
  98,
);
