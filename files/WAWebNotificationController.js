__d(
  "WAWebNotificationController",
  [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebMsgDataUtils",
    "WAWebMsgNotification",
    "WAWebNotificationsMsgNotification",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "cr:17638",
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
      _,
      f,
      g,
      h,
      y = (e = n("cr:4692")) != null ? e : null,
      C = (s = n("cr:17638")) != null ? s : {},
      b = C.isWindowsBackgroundRun,
      v = 2e3,
      S = 7,
      R = n("$InternalEnum").Mirrored(["WindowsMsgNotifiedUpToT"]);
    function L(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e) {
          var r, o;
          if (!(e.creationAt < t)) {
            var a =
                (r = (o = e.notificationBanner) == null ? void 0 : o.tag) !=
                null
                  ? r
                  : e.buildKey(),
              i = n.get(a);
            (i == null || e.creationAt >= i.creationAt) && n.set(a, e);
          }
        }),
        Array.from(n.values()).sort(function (e, t) {
          return e.creationAt - t.creationAt;
        })
      );
    }
    function E(e) {
      return []
        .concat(e)
        .sort(function (e, t) {
          return N(e) - N(t);
        })
        .slice(-S);
    }
    function k(e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.recvFresh !== !0) return null;
        if (T(n)) return n;
      }
      return null;
    }
    function I(e, t) {
      for (var n = e.length - 1; n >= 0; n--) {
        var r,
          a = e[n];
        if (((r = a.t) != null ? r : 0) <= t) return null;
        if (!a.id.fromMe && D(o("WAWebMsgDataUtils").eventTypeFromMsgType(a)))
          return a;
      }
      return null;
    }
    function T(e) {
      return !e.id.fromMe && D(o("WAWebFrontendMsgGetters").getEventType(e));
    }
    function D(e) {
      return (
        e === o("WAWebCommonMsgUtils").EventType.DEFAULT ||
        e === o("WAWebCommonMsgUtils").EventType.SIGNIFICANT
      );
    }
    function x() {
      var e = r("WAWebUserPrefsStore").getUser(R.WindowsMsgNotifiedUpToT);
      return typeof e == "number" ? e : 0;
    }
    function $(e) {
      e > x() && r("WAWebUserPrefsStore").setUser(R.WindowsMsgNotifiedUpToT, e);
    }
    function P() {
      return Math.max.apply(
        Math,
        [0].concat(
          o("WAWebChatCollection")
            .ChatCollection.getModelsArray()
            .filter(function (e) {
              return e.unreadCount > 0;
            })
            .map(function (e) {
              var t, n;
              return (t = (n = e.msgs.last()) == null ? void 0 : n.t) != null
                ? t
                : 0;
            }),
        ),
      );
    }
    function N(e) {
      var t;
      return e instanceof o("WAWebMsgNotification").WAMsgNotification
        ? ((t = e.msg.t) != null ? t : 0) * 1e3
        : e.creationAt;
    }
    var M = (function () {
        function e() {
          var e = this;
          ((this.map = new Map()),
            (this.lastMsgNotifByChat = new Map()),
            (this.$1 = null),
            (this.$2 = null),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = new Set()),
            (this.$6 = new Set()),
            (this.$7 = null),
            y && (this.$1 = new y(this)),
            r("WAWebEnvironment").isWindows &&
              (o("WAWebCmd").Cmd.on(
                "offline_delivery_state_reset_from_bridge",
                function () {
                  e.$4 && ((e.$4 = !1), (e.$3 = Date.now()));
                },
              ),
              o("WAWebCmd").Cmd.on(
                "offline_delivery_end_from_bridge",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if ((b == null ? void 0 : b()) === !0) {
                    yield e.$8();
                    return;
                  }
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: show lastest unread msg due to offline delivery end",
                      ])),
                  ),
                    e.$9(),
                    $(P()));
                }),
              ),
              (b == null ? void 0 : b()) === !0 &&
                o("WAWebCmd").Cmd.isOfflineDeliveryEnd &&
                this.$8()));
        }
        var t = e.prototype;
        return (
          (t.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this.$3;
              ((this.$4 = !0),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "WANotificationController: show the latest notification of each chat due to offline delivery end in a background run",
                    ])),
                ),
                yield (h || (h = n("Promise"))).race([
                  h.allSettled(Array.from(this.$5)),
                  o("WAPromiseDelays").delayMs(v),
                ]));
              var t = E(
                [].concat(L(Array.from(this.map.values()), e), this.$10()),
              );
              for (var a of t.entries()) {
                var i = a[0],
                  l = a[1];
                l.isBannerSuppressed = i < t.length - 1;
                try {
                  yield this.triggerNotification(l);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: background run toast failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("windows-background-run-toast-failed");
                } finally {
                  l.isBannerSuppressed = !1;
                }
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$10 = function () {
            var e = this,
              t = o("WAWebChatCollection")
                .ChatCollection.getModelsArray()
                .filter(function (e) {
                  return e.unreadCount > 0;
                })
                .flatMap(function (t) {
                  var n,
                    r,
                    o = t.msgs.getModelsArray();
                  return (n = (r = k(o)) != null ? r : I(o, e.$11())) != null
                    ? n
                    : [];
                })
                .map(function (e) {
                  return new (o("WAWebMsgNotification").WAMsgNotification)({
                    msg: e,
                  });
                })
                .filter(function (t) {
                  var n = t.buildKey();
                  return (
                    !e.map.has(n) &&
                    !e.$6.has(n) &&
                    t.shouldMute(e.$2 == null ? void 0 : e.$2()) == null
                  );
                });
            return (
              t.forEach(function (t) {
                return e.$6.add(t.buildKey());
              }),
              t
            );
          }),
          (t.$11 = function () {
            var e;
            return ((e = this.$7) != null || (this.$7 = x()), this.$7);
          }),
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
              this.$12(t));
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
                var t,
                  n = this,
                  a = e.buildKey();
                if (
                  (this.$13(a, e),
                  r("WAWebEnvironment").isWindows &&
                    e instanceof o("WAWebMsgNotification").WAMsgNotification)
                ) {
                  var i;
                  (this.$11(), $((i = e.msg.t) != null ? i : 0));
                }
                var l = e.triggerNotification(
                  (t = this.$2) == null ? void 0 : t.call(this),
                );
                this.$5.add(l);
                try {
                  var s = yield l;
                  if (s != null) {
                    if (
                      o(
                        "WAWebNotificationsMsgNotification",
                      ).shouldReplaceMsgNotificationManually() &&
                      e instanceof o("WAWebMsgNotification").WAMsgNotification
                    ) {
                      var u = o("WAWebFrontendMsgGetters")
                          .getChat(e.msg)
                          .id.toString(),
                        c = this.lastMsgNotifByChat.get(u);
                      (c &&
                        self.setTimeout(function () {
                          return c.close();
                        }, 2e3),
                        this.lastMsgNotifByChat.set(u, s),
                        s.waitForClose().then(function () {
                          n.lastMsgNotifByChat.get(u) === s &&
                            n.lastMsgNotifByChat.delete(u);
                        }));
                    }
                    s.waitForClose().then(function () {
                      e.notificationBanner === s && n.$12(a, e);
                    });
                  } else
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: notification not invoked:",
                        ])),
                    ),
                      this.$12(a, e));
                } catch (t) {
                  o("WAAbortError").catchAbort(function (t) {
                    (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "WANotificationController: notification aborted: ",
                          "",
                        ])),
                      t,
                    ),
                      n.$12(a, e));
                  })(r("getErrorSafe")(t));
                } finally {
                  this.$5.delete(l);
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
          (t.$9 = function () {
            var e = null;
            (this.map.forEach(function (t, n) {
              (e == null || t.creationAt > e.creationAt) && (e = t);
            }),
              e
                ? this.triggerNotification(e)
                : o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "WANotificationController: showLastestUnreadMsgNotification: no unread msg notification found",
                      ])),
                  ));
          }),
          (t.$13 = function (t, n) {
            this.map.set(t, n);
          }),
          (t.$12 = function (t, n) {
            var e = this.getNotification(t);
            if (e == null) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "WANotificationController:_removeNotificationFromMap cannot find notification in map with key: ",
                    "",
                  ])),
                t,
              );
              return;
            }
            if (n != null && e !== n) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
      w = new M();
    ((l.findLatestNotificationPerTag = L),
      (l.selectBackgroundRunToasts = E),
      (l.findLatestFreshAlertMsg = k),
      (l.findStoredLatestAlertMsg = I),
      (l.WANotificationController = w));
  },
  98,
);
