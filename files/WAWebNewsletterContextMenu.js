__d(
  "WAWebNewsletterContextMenu",
  [
    "fbt",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebMuteMenuItem.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebRunWithInternetCheck",
    "WAWebStateUtils",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSIconIcDelete.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "WDSIconIcLogout.react",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebNewsletterInviteLink",
    "useWAWebNewsletterMuteState",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = o("WAWebStateUtils").unproxy(e),
        i =
          (t = (n = a.newsletterMetadata) == null ? void 0 : n.adminCount) !=
          null
            ? t
            : 0,
        l = o("WAWebNewsletterMembershipUtil").iAmSubscriber(
          a.newsletterMetadata,
        ),
        s = [u.jsx(m, { chat: a }, "Info"), u.jsx(d, { chat: a }, "Pin")];
      return (
        o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() &&
          s.splice(
            1,
            0,
            u.jsx(
              r("WAWebChatContextMenuItemArchive.react"),
              { chat: a },
              "Archive",
            ),
          ),
        (l ||
          i > 1 ||
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(a.newsletterMetadata)) &&
          (s.push(u.jsx(p, { chat: a }, "Mute")),
          s.push(u.jsx(_, { chat: a }, "MarkAsRead"))),
        s.push(u.jsx(f, { chat: a }, "CopyLink")),
        s.push(
          u.jsx(
            r("WDSMenuItem.react"),
            { type: "separator" },
            "newsletter-context-menu-separator",
          ),
        ),
        l && s.push(u.jsx(g, { chat: a }, "Unfollow")),
        o("WAWebNewsletterMembershipUtil").iAmOwner(a.newsletterMetadata) &&
          s.push(u.jsx(h, { chat: a }, "Delete")),
        s
      );
    }
    function d(e) {
      var t = e.chat;
      return u.jsx(r("WAWebChatContextMenuItemPin.react"), { chat: t }, "pin");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.chat,
        a = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebCmd").Cmd.openChatBottom({ chat: t }),
              o("WAWebCmd").Cmd.chatInfoDrawer(t));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        i = s._(/*BTDS*/ "Channel info");
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: function () {
            return void a();
          },
          Icon: r("WDSIconIcInfo.react"),
          title: i,
        },
        "Info",
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.chat,
        n = o("useWAWebNewsletterMuteState").useNewsletterMuteState(t),
        a = n.isMuted,
        i = n.toggleMuteState,
        l = function () {
          var e = a
            ? s._(
                /*BTDS*/ "Could not unmute channel. Check your connection and try again.",
              )
            : s._(
                /*BTDS*/ "Could not mute channel. Check your connection and try again.",
              );
          o("WAWebRunWithInternetCheck").runWithInternetCheck(function () {
            return i();
          }, e);
        };
      return u.jsx(
        r("WAWebMuteMenuItem.react"),
        { onMute: l, isMuted: a, chat: t },
        "mute",
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.chat;
      return u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chat: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        n = e.chat,
        a = (t = n.newsletterMetadata) == null ? void 0 : t.inviteCode;
      if (a == null) return null;
      var i = function () {
          return o("useWAWebNewsletterInviteLink").copyInviteLink(
            o("useWAWebNewsletterInviteLink").getInviteLink(a),
          );
        },
        l = s._(/*BTDS*/ "Copy link");
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: i,
          Icon: r("WDSIconIcLink.react"),
          title: l,
        },
        "HandleCopy",
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chat,
        a = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: t,
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_UPDATES_HOME,
                  },
                },
              ),
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        i = s._(/*BTDS*/ "Unfollow");
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: function () {
            return void a();
          },
          Icon: r("WDSIconIcLogout.react"),
          title: i,
          destructive: !0,
        },
        "HandleUnfollow",
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        a = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebCmd").Cmd.openChatBottom({ chat: t }),
              o("WAWebCmd").Cmd.newsletterDeleteDrawer(t));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        i = s._(/*BTDS*/ "Delete channel");
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: function () {
            return void a();
          },
          Icon: r("WDSIconIcDelete.react"),
          title: i,
          destructive: !0,
        },
        "DeleteNewsletter",
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.getNewsletterContextMenuItems = c));
  },
  226,
);
