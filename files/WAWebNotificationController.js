__d(
  "WAWebNotificationController",
  [
    "WAAbortError",
    "WALogger",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebNotificationsMsgNotification",
    "asyncToGeneratorRuntime",
    "cr:4692",
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
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: show lastest unread msg due to offline delivery end",
                      ])),
                  ),
                    e.$3());
                }),
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
          (t.triggerNotification = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = e.buildKey();
                this.$5(n, e);
                try {
                  var r,
                    a = yield e.triggerNotification(
                      (r = this.$2) == null ? void 0 : r.call(this),
                    );
                  if (a != null) {
                    if (
                      o(
                        "WAWebNotificationsMsgNotification",
                      ).shouldReplaceMsgNotificationManually() &&
                      e instanceof
                        o("WAWebNotificationsMsgNotification").WAMsgNotification
                    ) {
                      var i = o("WAWebFrontendMsgGetters")
                          .getChat(e.msg)
                          .id.toString(),
                        l = this.lastMsgNotifByChat.get(i);
                      (l &&
                        self.setTimeout(function () {
                          return l.close();
                        }, 2e3),
                        this.lastMsgNotifByChat.set(i, a),
                        a.waitForClose().then(function () {
                          t.lastMsgNotifByChat.get(i) === a &&
                            t.lastMsgNotifByChat.delete(i);
                        }));
                    }
                    a.waitForClose().then(function () {
                      t.$4(n);
                    });
                  } else
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: notification not invoked:",
                        ])),
                    ),
                      this.$4(n));
                } catch (e) {
                  o("WAAbortError").catchAbort(function (e) {
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: notification aborted: ",
                          "",
                        ])),
                      e,
                    ),
                      t.$4(n));
                  })(e);
                }
                return e;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
