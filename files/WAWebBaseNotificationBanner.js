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
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "cr:3133",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "contextMenuItems",
        "footer",
        "isReplyable",
        "notification",
        "renotify",
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
      f = (s = n("cr:3133")) != null ? s : {},
      g = f.closeMessageNotification,
      h = f.showMessageNotification,
      y = (function () {
        function t(e, t, a, i, l) {
          var s = this,
            c;
          ((this.isReplyable = !1),
            (this.close = function () {
              s.$3()
                .then(function () {
                  (s.notification &&
                    o("WATypeUtils").isFunction(s.notification.close) &&
                    s.notification.close(),
                    g == null || g(s.key, s.tag));
                })
                .catch(r("WAWebNoop"));
            }),
            (this.$4 = function () {
              (s.waitingPromise.resolver(),
                window.removeEventListener("beforeunload", s.close));
              var e = s.notification;
              (e &&
                (e.removeEventListener("click", s.$5),
                e.removeEventListener("close", s.$4)),
                s.msg && s.msg.off("change:type", s.$6));
            }),
            (this.$5 = function () {
              (s.$1 == null || s.$1(), window.focus());
              var e = s.chat,
                t = s.msg,
                n = s.doNotOpenChat == null ? !1 : s.doNotOpenChat;
              if (e) {
                if (!n) {
                  var a,
                    i,
                    l =
                      t && t !== e.msgs.last()
                        ? o("WAWebChatMessageSearch").getSearchContext({
                            chat: e,
                            msgKey: t.id,
                          })
                        : void 0;
                  if (
                    ((a = e.groupMetadata) == null ? void 0 : a.groupType) ===
                      o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                    (i = e.groupMetadata) != null &&
                    i.parentGroup &&
                    t != null &&
                    (t.subtype ===
                      o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE ||
                      t.subtype ===
                        o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE)
                  ) {
                    var u;
                    o("WAWebCmd").Cmd.openCommunityHome(
                      (u = e.groupMetadata) == null ? void 0 : u.parentGroup,
                    );
                  } else {
                    var c = r("WAWebEnvironment").isWindows
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
                    c.then(function (t) {
                      t &&
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
                    });
                  }
                }
                (o("WAWebModalManager").ModalManager.closeMedia(),
                  s.increaseNotificationEngagement({ isClick: !0 }),
                  s.close());
              }
            }),
            (this.$6 = function () {
              !s.msg ||
                s.msg.type !== o("WAWebMsgType").MSG_TYPE.REVOKED ||
                s.close();
            }),
            (this.msg =
              t != null ? o("WAWebMsgCollection").MsgCollection.get(t) : null),
            (this.chat =
              (c = o("WAWebChatCollection").ChatCollection.get(e)) != null
                ? c
                : r("WAWebNewsletterCollection").get(e)),
            (this.tag = a),
            (this.key = i),
            (this.$1 = l.onClick),
            (this.canBlock = l.canBlock),
            (this.doNotOpenChat = l.doNotOpenChat),
            (this.isReplyable = l.isReplyable));
          var d = new (_ || (_ = n("Promise")))(function (e) {
            s.waitingPromise = { resolver: e };
          });
          this.waitingPromise.promise = d;
          try {
            this.$2(i, a, l);
          } catch (e) {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to create notification: ",
                  ":",
                  "",
                ])),
              e.name,
              e.message,
            ),
              this.waitingPromise.resolver());
          }
        }
        var a = t.prototype;
        return (
          (a.$3 = function () {
            return (_ || (_ = n("Promise"))).resolve();
          }),
          (a.waitForClose = function () {
            return this.waitingPromise.promise;
          }),
          (a.detach = function () {
            this.$4();
          }),
          (a.click = function () {
            this.$5();
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
                  this.$4());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$2 = function (n, a, i) {
            var t = i.contextMenuItems,
              l = i.footer,
              s = i.isReplyable,
              u = i.notification,
              c = i.renotify,
              p = i.suppressBanner,
              _ = i.title,
              f = babelHelpers.objectWithoutPropertiesLoose(i, e);
            f.body && f.body.charCodeAt(0) >= 128 && (f.body = " " + f.body);
            var g = babelHelpers.extends(
              {
                tag: a,
                renotify: c != null ? c : !!a,
                dir: "auto",
                lang: r("WAWebL10N").getNormalizedLocale(),
                silent: !0,
              },
              f,
            );
            if (h)
              h({
                key: n,
                tag: a,
                title: _,
                body: g.body,
                icon: g.icon,
                footer: l,
                contextMenuItems: t,
                isReplyable: s,
                suppressBanner: p,
                chat: this.chat,
              });
            else {
              var y, C, b, v;
              ((this.notification = new u(_, g)),
                (y = this.notification) == null ||
                  y.addEventListener("error", function (e) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "native notification error",
                        ])),
                    );
                  }),
                (C = this.notification) == null ||
                  C.addEventListener("close", function (e) {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "native notification close",
                        ])),
                    );
                  }),
                (b = this.notification) == null ||
                  b.addEventListener("click", this.$5),
                (v = this.notification) == null ||
                  v.addEventListener("close", this.$4));
            }
            (this.msg && this.msg.on("change:type", this.$6),
              window.addEventListener("beforeunload", this.close),
              this.increaseNotificationEngagement({ isShow: !0 }));
          }),
          (a.contextMenuClick = function (t) {
            var e = this.chat;
            if (e) {
              switch (t) {
                case r("WAWebBannerContextMenuActions").MuteChatForEightHours:
                  this.$7(
                    e,
                    o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[0].duration,
                  );
                  break;
                case r("WAWebBannerContextMenuActions").MuteChatForOneWeek:
                  this.$7(
                    e,
                    o("WAWebMuteExpirations").ALL_MUTE_DURATIONS[1].duration,
                  );
                  break;
                case r("WAWebBannerContextMenuActions").MuteChat:
                  this.$7(
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
              this.$4();
            }
          }),
          (a.$7 = function (t, n) {
            t.mute
              .mute({
                expiration: o("WAWebMuteExpirations").calculateMuteExpiration(
                  n,
                ),
                sendDevice: !0,
              })
              .catch(function (e) {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "mute failed: ",
                      "",
                    ])),
                  e,
                );
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
    l.default = y;
  },
  98,
);
