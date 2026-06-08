__d(
  "WAWebNewsletterContextMenu",
  [
    "fbt",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebMuteMenuItem.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
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
        a,
        i,
        l,
        s,
        c = o("WAWebStateUtils").unproxy(e),
        y =
          (t = (n = c.newsletterMetadata) == null ? void 0 : n.adminCount) !=
          null
            ? t
            : 0,
        C =
          (a =
            (i = c.newsletterMetadata) == null ? void 0 : i.iAmSubscriber()) !=
          null
            ? a
            : !1,
        b = [u.jsx(m, { chat: c }, "Info"), u.jsx(d, { chat: c }, "Pin")];
      (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() &&
        b.splice(
          1,
          0,
          u.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chat: c },
            "Archive",
          ),
        ),
        (C ||
          y > 1 ||
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(c.newsletterMetadata)) &&
          (b.push(u.jsx(p, { chat: c }, "Mute")),
          b.push(u.jsx(_, { chat: c }, "MarkAsRead"))),
        b.push(u.jsx(f, { chat: c }, "CopyLink")));
      var v = u.jsx(
        r("WDSMenuItem.react"),
        { type: "separator" },
        "newsletter-context-menu-separator",
      );
      return (
        b.push(v),
        C && b.push(u.jsx(g, { chat: c }, "Unfollow")),
        (l = (s = c.newsletterMetadata) == null ? void 0 : s.iAmOwner()) !=
          null &&
          l &&
          b.push(u.jsx(h, { chat: c }, "Delete")),
        b[b.length - 1] === v && b.pop(),
        b
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
              (yield o("WAWebCmd").Cmd.openChatBottom({
                chat: a,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterChatlist,
              }),
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
                testid: "mi-info",
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
                testid: "mi-copy-link",
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
                testid: "mi-unfollow-newsletter",
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
              (yield o("WAWebCmd").Cmd.openChatBottom({
                chat: a,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterChatlist,
              }),
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
                testid: "mi-delete-newsletter",
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
