__d(
  "WAWebNewsletterContextMenu",
  [
    "fbt",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebMuteMenuItem.react",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgLinkUtils",
    "WAWebRunWithInternetCheck",
    "WAWebStateUtils",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSDialogBridge",
    "WDSIconIcCode.react",
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
    function c(e, t) {
      var n, a, i, l, s, c;
      t === void 0 && (t = !1);
      var b = o("WAWebStateUtils").unproxy(e),
        v =
          (n = (a = b.newsletterMetadata) == null ? void 0 : a.adminCount) !=
          null
            ? n
            : 0,
        S =
          (i =
            (l = b.newsletterMetadata) == null ? void 0 : l.iAmSubscriber()) !=
          null
            ? i
            : !1,
        R = [u.jsx(p, { chat: b }, "Info")];
      (d(b, t) &&
        R.push(
          u.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chatId: b.id },
            "Archive",
          ),
        ),
        R.push(u.jsx(m, { chat: b }, "Pin")),
        (S ||
          v > 1 ||
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(b.newsletterMetadata)) &&
          (R.push(u.jsx(_, { chat: b }, "Mute")),
          R.push(u.jsx(f, { chat: b }, "MarkAsRead"))),
        R.push(u.jsx(g, { chat: b }, "CopyLink")),
        R.push(u.jsx(h, { chat: b }, "EmbedChannel")));
      var L = u.jsx(
        r("WDSMenuItem.react"),
        { type: "separator" },
        "newsletter-context-menu-separator",
      );
      return (
        R.push(L),
        S && R.push(u.jsx(y, { chat: b }, "Unfollow")),
        (s = (c = b.newsletterMetadata) == null ? void 0 : c.iAmOwner()) !=
          null &&
          s &&
          R.push(u.jsx(C, { chat: b }, "Delete")),
        R[R.length - 1] === L && R.pop(),
        R
      );
    }
    function d(e, t) {
      return (
        !t &&
        o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() &&
        o("WAWebNewsletterChatListUtils").isUnlockedSubscribedOrOwnedChannel(e)
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.chat,
        a;
      return (
        t[0] !== n.id
          ? ((a = u.jsx(
              r("WAWebChatContextMenuItemPin.react"),
              { chatId: n.id },
              "pin",
            )),
            (t[0] = n.id),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function p(e) {
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
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a = o("useWAWebNewsletterMuteState").useNewsletterMuteState(n.id),
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
        t[3] !== n.id || t[4] !== d || t[5] !== i
          ? ((m = u.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: d, isMuted: i, chatId: n.id },
              "mute",
            )),
            (t[3] = n.id),
            (t[4] = d),
            (t[5] = i),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.chat,
        a;
      return (
        t[0] !== n.id
          ? ((a = u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
              chatId: n.id,
            })),
            (t[0] = n.id),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function g(e) {
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
    function h(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat;
      if (
        !o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(
          n.newsletterMetadata,
        )
      )
        return null;
      var a;
      t[0] !== n
        ? ((a = function () {
            return o(
              "WAWebNewsletterMsgLinkUtils",
            ).handleNewsletterChannelEmbedClick(n);
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Embed channel")), (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      return (
        t[3] !== i
          ? ((d = u.jsx(
              r("WDSMenuItem.react"),
              {
                testid: "mi-embed-channel",
                onPress: i,
                Icon: r("WDSIconIcCode.react"),
                title: c,
              },
              "EmbedChannel",
            )),
            (t[3] = i),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(5),
        a = e.chat,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WDSDialogBridge").openWDSDialog(
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
    function C(e) {
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
