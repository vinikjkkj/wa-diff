__d(
  "WAWebBaseNotificationBanner",
  [
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
    "cr:3133",
    "getErrorSafe",
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
      _ = (s = n("cr:3133")) != null ? s : {},
      f = _.closeMessageNotification,
      g = _.showMessageNotification,
      h = (function () {
        function t(e) {
          var t = this,
            n,
            a = e.key,
            i = e.msgId,
            l = e.options,
            s = e.tag,
            c = e.wid;
          ((this.isReplyable = !1),
            (this.close = function () {
              t.$3()
                .then(function () {
                  (t.notification &&
                    o("WATypeUtils").isFunction(t.notification.close) &&
                    t.notification.close(),
                    f == null || f(t.key, t.tag));
                })
                .catch(r("WAWebNoop"));
            }),
            (this.$4 = function () {
              (t.waitingPromise.resolver(),
                window.removeEventListener("beforeunload", t.close));
              var e = t.notification;
              (e &&
                (e.removeEventListener("click", t.$5),
                e.removeEventListener("close", t.$4)),
                t.msg && t.msg.off("change:type", t.$6));
            }),
            (this.$5 = function () {
              (t.$1 == null || t.$1(), window.focus());
              var e = t.chat,
                n = t.msg,
                a = t.doNotOpenChat == null ? !1 : t.doNotOpenChat;
              if (e) {
                if (!a) {
                  var i,
                    l,
                    s =
                      n && n !== e.msgs.last()
                        ? o("WAWebChatMessageSearch").getSearchContext({
                            chat: e,
                            msgKey: n.id,
                          })
                        : void 0;
                  if (
                    ((i = e.groupMetadata) == null ? void 0 : i.groupType) ===
                      o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
                    (l = e.groupMetadata) != null &&
                    l.parentGroup &&
                    n != null &&
                    (n.subtype ===
                      o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE ||
                      n.subtype ===
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
                          msgContext: s,
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
                  t.increaseNotificationEngagement({ isClick: !0 }),
                  t.close());
              }
            }),
            (this.$6 = function () {
              !t.msg ||
                t.msg.type !== o("WAWebMsgType").MSG_TYPE.REVOKED ||
                t.close();
            }),
            (this.msg =
              i != null ? o("WAWebMsgCollection").MsgCollection.get(i) : null),
            (this.chat =
              (n = o("WAWebChatCollection").ChatCollection.get(c)) != null
                ? n
                : r("WAWebNewsletterCollection").get(c)),
            (this.tag = s),
            (this.key = a),
            (this.$1 = l.onClick),
            (this.canBlock = l.canBlock),
            (this.doNotOpenChat = l.doNotOpenChat),
            (this.isReplyable = l.isReplyable));
          var d = new Promise(function (e) {
            t.waitingPromise = { resolver: e };
          });
          this.waitingPromise.promise = d;
          try {
            this.$2(a, s, l);
          } catch (e) {
            var m = r("getErrorSafe")(e);
            (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to create notification",
                  ])),
              )
              .catching(m),
              this.waitingPromise.resolver());
          }
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            return Promise.resolve();
          }),
          (n.waitForClose = function () {
            return this.waitingPromise.promise;
          }),
          (n.detach = function () {
            this.$4();
          }),
          (n.click = function () {
            this.$5();
          }),
          (n.quickReply = async function (t) {
            var e = this.chat;
            (e &&
              e.isReadOnly !== !0 &&
              this.isReplyable &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "quickReply inside WAWebBaseNotificationBanner",
                  ])),
              ),
              await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t)),
              this.$4());
          }),
          (n.$2 = function (n, a, i) {
            var t = i.contextMenuItems,
              l = i.footer,
              s = i.isReplyable,
              u = i.notification,
              c = i.renotify,
              p = i.suppressBanner,
              _ = i.title,
              f = babelHelpers.objectWithoutPropertiesLoose(i, e);
            f.body && f.body.charCodeAt(0) >= 128 && (f.body = " " + f.body);
            var h = babelHelpers.extends(
              {
                tag: a,
                renotify: c != null ? c : !!a,
                dir: "auto",
                lang: r("WAWebL10N").getNormalizedLocale(),
                silent: !0,
              },
              f,
            );
            if (g)
              g({
                key: n,
                tag: a,
                title: _,
                body: h.body,
                icon: h.icon,
                footer: l,
                contextMenuItems: t,
                isReplyable: s,
                suppressBanner: p,
                chat: this.chat,
              });
            else {
              var y, C, b, v;
              ((this.notification = new u(_, h)),
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
          (n.contextMenuClick = function (t) {
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
          (n.$7 = function (t, n) {
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "mute failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              });
          }),
          (n.increaseNotificationEngagement = async function (t) {
            var e,
              n,
              r = t === void 0 ? {} : t,
              a = r.isClick,
              i = a === void 0 ? !1 : a,
              l = r.isShow,
              s = l === void 0 ? !1 : l,
              u = await o("WAWebUserPrefsGeneral").getNotificationEngagement();
            o("WAWebUserPrefsGeneral").setNotificationContentEngagement({
              totalNotifShown:
                ((e = u == null ? void 0 : u.totalNotifShown) != null ? e : 0) +
                (s ? 1 : 0),
              totalNotifTapToOpen:
                ((n = u == null ? void 0 : u.totalNotifTapToOpen) != null
                  ? n
                  : 0) + (i ? 1 : 0),
            });
          }),
          t
        );
      })();
    l.default = h;
  },
  98,
);
