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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(2),
        n = e.chat,
        a;
      return (
        t[0] !== n
          ? ((a = u.jsx(
              r("WAWebChatContextMenuItemPin.react"),
              { chat: n },
              "pin",
            )),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        a = e.chat,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAWebCmd").Cmd.openChatBottom({ chat: a }),
                o("WAWebCmd").Cmd.chatInfoDrawer(a));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Channel info")), (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      return (
        t[3] !== l
          ? ((m = u.jsx(
              r("WDSMenuItem.react"),
              {
                testid: void 0,
                onPress: function () {
                  return void l();
                },
                Icon: r("WDSIconIcInfo.react"),
                title: d,
              },
              "Info",
            )),
            (t[3] = l),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a = o("useWAWebNewsletterMuteState").useNewsletterMuteState(n),
        i = a.isMuted,
        l = a.toggleMuteState,
        c;
      t[0] !== i || t[1] !== l
        ? ((c = function () {
            var e = i
              ? s._(
                  /*BTDS*/ "Could not unmute channel. Check your connection and try again.",
                )
              : s._(
                  /*BTDS*/ "Could not mute channel. Check your connection and try again.",
                );
            o("WAWebRunWithInternetCheck").runWithInternetCheck(function () {
              return l();
            }, e);
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      return (
        t[3] !== n || t[4] !== d || t[5] !== i
          ? ((m = u.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: d, isMuted: i, chat: n },
              "mute",
            )),
            (t[3] = n),
            (t[4] = d),
            (t[5] = i),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.chat,
        a;
      return (
        t[0] !== n
          ? ((a = u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
              chat: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function f(e) {
      var t,
        n = o("react-compiler-runtime").c(5),
        a = e.chat,
        i = (t = a.newsletterMetadata) == null ? void 0 : t.inviteCode;
      if (i == null) return null;
      var l;
      n[0] !== i
        ? ((l = function () {
            return o("useWAWebNewsletterInviteLink").copyInviteLink(
              o("useWAWebNewsletterInviteLink").getInviteLink(i),
            );
          }),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var c = l,
        d;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Copy link")), (n[2] = d))
        : (d = n[2]);
      var m = d,
        p;
      return (
        n[3] !== c
          ? ((p = u.jsx(
              r("WDSMenuItem.react"),
              {
                testid: void 0,
                onPress: c,
                Icon: r("WDSIconIcLink.react"),
                title: m,
              },
              "HandleCopy",
            )),
            (n[3] = c),
            (n[4] = p))
          : (p = n[4]),
        p
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(5),
        a = e.chat,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebUnfollowNewsletterConfirmationModal.react")
                    .UnfollowNewsletterConfirmationModal,
                  {
                    chat: a,
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
          })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Unfollow")), (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      return (
        t[3] !== l
          ? ((m = u.jsx(
              r("WDSMenuItem.react"),
              {
                testid: void 0,
                onPress: function () {
                  return void l();
                },
                Icon: r("WDSIconIcLogout.react"),
                title: d,
                destructive: !0,
              },
              "HandleUnfollow",
            )),
            (t[3] = l),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(5),
        a = e.chat,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAWebCmd").Cmd.openChatBottom({ chat: a }),
                o("WAWebCmd").Cmd.newsletterDeleteDrawer(a));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Delete channel")), (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      return (
        t[3] !== l
          ? ((m = u.jsx(
              r("WDSMenuItem.react"),
              {
                testid: void 0,
                onPress: function () {
                  return void l();
                },
                Icon: r("WDSIconIcDelete.react"),
                title: d,
                destructive: !0,
              },
              "DeleteNewsletter",
            )),
            (t[3] = l),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    l.getNewsletterContextMenuItems = c;
  },
  226,
);
