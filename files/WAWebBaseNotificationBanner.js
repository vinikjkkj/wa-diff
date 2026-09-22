__d(
  "WAWebBaseNotificationBanner",
  [
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWebBannerContextMenuActions",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebEnvironment",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebMuteExpirations",
    "WAWebNewsletterCollection",
    "WAWebNoop",
    "WAWebSendTextMsgChatAction",
    "WAWebSwNotificationBannerRegistry",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "cr:3133",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "actions",
        "contextMenuItems",
        "footer",
        "isReplyable",
        "notification",
        "renotify",
        "showViaServiceWorker",
        "suppressBanner",
        "title",
      ],
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
      y = (s = n("cr:3133")) != null ? s : {},
      C = y.closeMessageNotification,
      b = y.showMessageNotification,
      v = (function () {
        function t(e) {
          var t = this,
            a,
            i = e.key,
            l = e.msgId,
            s = e.options,
            c = e.tag,
            d = e.wid;
          ((this.isReplyable = !1),
            (this.$2 = null),
            (this.$3 = null),
            (this.close = function () {
              t.$5()
                .then(function () {
                  (t.notification &&
                    o("WATypeUtils").isFunction(t.notification.close) &&
                    t.notification.close(),
                    t.$2 != null && (t.$6(), t.$7()),
                    C == null || C(t.key, t.tag));
                })
                .catch(r("WAWebNoop"));
            }),
            (this.$7 = function () {
              (t.waitingPromise.resolver(),
                window.removeEventListener("beforeunload", t.close),
                o(
                  "WAWebSwNotificationBannerRegistry",
                ).unregisterSwNotificationBanner(t.$2),
                (t.$2 = null));
              var e = t.notification;
              (e &&
                (e.removeEventListener("click", t.$8),
                e.removeEventListener("close", t.$7)),
                t.msg && t.msg.off("change:type", t.$9));
            }),
            (this.$8 = function () {
              (t.$1 == null || t.$1(), window.focus());
              var e = t.chat,
                n = t.msg,
                a = t.doNotOpenChat == null ? !1 : t.doNotOpenChat;
              if (e) {
                if (!a) {
                  var i,
                    l =
                      n && n !== e.msgs.last()
                        ? o("WAWebChatMessageSearch").getSearchContext({
                            chat: e,
                            msgKey: n.id,
                          })
                        : void 0;
                  if (
                    o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                      e.groupMetadata,
                    ) ===
                      o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                    (i = e.groupMetadata) != null &&
                    i.parentGroup &&
                    n != null &&
                    (n.subtype ===
                      o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE ||
                      n.subtype ===
                        o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE)
                  ) {
                    var s;
                    o("WAWebCmd").Cmd.openCommunityHome(
                      (s = e.groupMetadata) == null ? void 0 : s.parentGroup,
                    );
                  } else {
                    var u = r("WAWebEnvironment").isWindows
                      ? o("WAWebCmd").Cmd.openChatFromUnread({
                          chat: e,
                          chatEntryPoint: o("WAWebChatEntryPoint")
                            .ChatEntryPoint.Notification,
                        })
                      : o("WAWebCmd").Cmd.openChatAt({
                          chat: e,
                          msgContext: l,
                          chatEntryPoint: o("WAWebChatEntryPoint")
                            .ChatEntryPoint.Notification,
                        });
                    u.then(function (t) {
                      t &&
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
                    });
                  }
                }
                (o("WAWebModalManager").ModalManager.closeMedia(),
                  t.increaseNotificationEngagement({ isClick: !0 }),
                  t.close());
              }
            }),
            (this.$9 = function () {
              !t.msg ||
                t.msg.type !== o("WAWebMsgType").MSG_TYPE.REVOKED ||
                t.close();
            }),
            (this.msg =
              l != null ? o("WAWebMsgCollection").MsgCollection.get(l) : null),
            (this.chat =
              (a = o("WAWebChatCollection").ChatCollection.get(d)) != null
                ? a
                : r("WAWebNewsletterCollection").get(d)),
            (this.tag = c),
            (this.key = i),
            (this.$1 = s.onClick),
            (this.canBlock = s.canBlock),
            (this.doNotOpenChat = s.doNotOpenChat),
            (this.isReplyable = s.isReplyable));
          var m = new (h || (h = n("Promise")))(function (e) {
            t.waitingPromise = { resolver: e };
          });
          this.waitingPromise.promise = m;
          try {
            this.$4(i, c, s);
          } catch (e) {
            var p = r("getErrorSafe")(e);
            (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to create notification",
                  ])),
              )
              .catching(p),
              this.waitingPromise.resolver());
          }
        }
        var a = t.prototype;
        return (
          (a.$5 = function () {
            return (h || (h = n("Promise"))).resolve();
          }),
          (a.waitForClose = function () {
            return this.waitingPromise.promise;
          }),
          (a.detach = function () {
            this.$7();
          }),
          (a.click = function () {
            this.$8();
          }),
          (a.quickReply = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.chat;
                (t &&
                  t.isReadOnly !== !0 &&
                  this.isReplyable &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "quickReply inside WAWebBaseNotificationBanner",
                      ])),
                  ),
                  yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                    t,
                    e,
                  )),
                  this.$7());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = function (n, o, a) {
            var t = a.actions,
              i = a.contextMenuItems,
              l = a.footer,
              s = a.isReplyable,
              u = a.notification,
              c = a.renotify,
              d = a.showViaServiceWorker,
              m = a.suppressBanner,
              p = a.title,
              _ = babelHelpers.objectWithoutPropertiesLoose(a, e);
            _.body && _.body.charCodeAt(0) >= 128 && (_.body = " " + _.body);
            var f = babelHelpers.extends(
              {
                tag: o,
                renotify: c != null ? c : !!o,
                dir: "auto",
                lang: r("WAWebL10N").getNormalizedLocale(),
                silent: !0,
              },
              _,
            );
            (b
              ? b({
                  key: n,
                  tag: o,
                  title: p,
                  body: f.body,
                  icon: f.icon,
                  footer: l,
                  contextMenuItems: i,
                  isReplyable: s,
                  suppressBanner: m,
                  chat: this.chat,
                })
              : d === !0
                ? this.$10(babelHelpers.extends({}, f, { actions: t }), p)
                : this.$11(u, p, f),
              this.msg && this.msg.on("change:type", this.$9),
              window.addEventListener("beforeunload", this.close),
              this.increaseNotificationEngagement({ isShow: !0 }));
          }),
          (a.$11 = function (t, n, r) {
            var e, a, i, l;
            ((this.notification = new t(n, r)),
              (e = this.notification) == null ||
                e.addEventListener("error", function (e) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "native notification error",
                      ])),
                  );
                }),
              (a = this.notification) == null ||
                a.addEventListener("close", function (e) {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "native notification close",
                      ])),
                  );
                }),
              (i = this.notification) == null ||
                i.addEventListener("click", this.$8),
              (l = this.notification) == null ||
                l.addEventListener("close", this.$7));
          }),
          (a.$10 = function (t, n) {
            var e = this,
              a = o(
                "WAWebSwNotificationBannerRegistry",
              ).registerSwNotificationBanner({
                onClick: this.$8,
                onClose: this.$7,
              });
            this.$2 = a;
            var i = this.$12(a, t, n);
            ((this.$3 = i),
              i.catch(function (t) {
                (o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "service worker notification failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("sw-show-notification-failed"),
                  e.$7());
              }));
          }),
          (a.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r,
                  a = yield (r = navigator.serviceWorker) == null
                    ? void 0
                    : r.ready;
                if ((a == null ? void 0 : a.showNotification) == null) {
                  (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "no service worker available to show notification",
                      ])),
                  ),
                    this.$7());
                  return;
                }
                yield a.showNotification(
                  n,
                  babelHelpers.extends({}, t, {
                    data: babelHelpers.extends({}, t.data, {
                      notificationBannerKey: e,
                    }),
                  }),
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = function () {
            var e = this.$2,
              t = this.tag;
            (h || (h = n("Promise")))
              .resolve(this.$3)
              .catch(r("WAWebNoop"))
              .then(function () {
                var e;
                return (e = navigator.serviceWorker) == null ? void 0 : e.ready;
              })
              .then(function (e) {
                return e == null || e.getNotifications == null
                  ? void 0
                  : e.getNotifications(t != null ? { tag: t } : void 0);
              })
              .then(function (t) {
                t == null ||
                  t
                    .filter(function (t) {
                      var n;
                      return (
                        ((n = t.data) == null
                          ? void 0
                          : n.notificationBannerKey) === e
                      );
                    })
                    .forEach(function (e) {
                      return e.close();
                    });
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "sw close notification failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sw-close-notification-failed");
              });
          }),
          (a.contextMenuClick = function (t) {
            var e = this.chat;
            if (e) {
              switch (t) {
                case r("WAWebBannerContextMenuActions").MuteChatForEightHours:
                  this.$13(
                    e,
                    o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[0].duration,
                  );
                  break;
                case r("WAWebBannerContextMenuActions").MuteChatForOneWeek:
                  this.$13(
                    e,
                    o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[1].duration,
                  );
                  break;
                case r("WAWebBannerContextMenuActions").MuteChat:
                  this.$13(
                    e,
                    o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[2].duration,
                  );
                  break;
                case r("WAWebBannerContextMenuActions").DisableNotifications:
                  o(
                    "WAWebMuteCollection",
                  ).MuteCollection.setAllNotificationsAndReactions(!1);
                  break;
                case r("WAWebBannerContextMenuActions").None:
                  break;
              }
              this.$7();
            }
          }),
          (a.$13 = function (t, n) {
            t.mute
              .mute({
                expiration: o("WAWebMuteExpirations").calculateMuteExpiration(
                  n,
                ),
                sendDevice: !0,
              })
              .catch(function (e) {
                o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "mute failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              });
          }),
          (a.increaseNotificationEngagement = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = e === void 0 ? {} : e,
                  a = r.isClick,
                  i = a === void 0 ? !1 : a,
                  l = r.isShow,
                  s = l === void 0 ? !1 : l,
                  u = yield o(
                    "WAWebUserPrefsGeneral",
                  ).getNotificationEngagement();
                o("WAWebUserPrefsGeneral").setNotificationContentEngagement({
                  totalNotifShown:
                    ((t = u == null ? void 0 : u.totalNotifShown) != null
                      ? t
                      : 0) + (s ? 1 : 0),
                  totalNotifTapToOpen:
                    ((n = u == null ? void 0 : u.totalNotifTapToOpen) != null
                      ? n
                      : 0) + (i ? 1 : 0),
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = v;
  },
  98,
);
