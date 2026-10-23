__d(
  "WAWebNewsletterContextMenu",
  [
    "fbt",
    "WALogger",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebGetMaybeChatById",
    "WAWebMuteMenuItem.react",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataGetters",
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
    "useWAWebChatValues",
    "useWAWebNewsletterInviteLink",
    "useWAWebNewsletterMetadataValues",
    "useWAWebNewsletterMuteState",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t) {
      var n, a, i, l, s, u;
      t === void 0 && (t = !1);
      var c = o("WAWebStateUtils").unproxy(e),
        d =
          (n = (a = c.newsletterMetadata) == null ? void 0 : a.adminCount) !=
          null
            ? n
            : 0,
        p =
          (i =
            (l = c.newsletterMetadata) == null ? void 0 : l.iAmSubscriber()) !=
          null
            ? i
            : !1,
        R = [m.jsx(g, { chatId: c.id }, "Info")];
      (_(c, t) &&
        R.push(
          m.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chatId: c.id },
            "Archive",
          ),
        ),
        R.push(m.jsx(f, { chatId: c.id }, "Pin")),
        (p ||
          d > 1 ||
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterAdminNotificationsEnabled(c.newsletterMetadata)) &&
          (R.push(m.jsx(h, { chatId: c.id }, "Mute")),
          R.push(m.jsx(y, { chatId: c.id }, "MarkAsRead"))),
        R.push(m.jsx(C, { chatId: c.id }, "CopyLink")),
        R.push(m.jsx(b, { chatId: c.id }, "EmbedChannel")));
      var L = m.jsx(
        r("WDSMenuItem.react"),
        { type: "separator" },
        "newsletter-context-menu-separator",
      );
      return (
        R.push(L),
        p && R.push(m.jsx(v, { chatId: c.id }, "Unfollow")),
        (s = (u = c.newsletterMetadata) == null ? void 0 : u.iAmOwner()) !=
          null &&
          s &&
          R.push(m.jsx(S, { chatId: c.id }, "Delete")),
        R[R.length - 1] === L && R.pop(),
        R
      );
    }
    function _(e, t) {
      return (
        !t &&
        o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() &&
        o("WAWebNewsletterChatListUtils").isUnlockedSubscribedOrOwnedChannel(e)
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.chatId,
        a;
      return (
        t[0] !== n
          ? ((a = m.jsx(
              r("WAWebChatContextMenuItemPin.react"),
              { chatId: n },
              "pin",
            )),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function g(t) {
      var a = o("react-compiler-runtime").c(5),
        i = t.chatId,
        l;
      a[0] !== i
        ? ((l = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = o("WAWebGetMaybeChatById").getMaybeChatById(i);
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-context-menu] action skipped, chat left the collection",
                    ])),
                );
                return;
              }
              (yield o("WAWebCmd").Cmd.openChatBottom({
                chat: t,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterChatlist,
              }),
                o("WAWebCmd").Cmd.chatInfoDrawer(t));
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[0] = i),
          (a[1] = l))
        : (l = a[1]);
      var u = l,
        c;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Channel info")), (a[2] = c))
        : (c = a[2]);
      var d = c,
        p;
      return (
        a[3] !== u
          ? ((p = m.jsx(
              r("WDSMenuItem.react"),
              {
                testid: "mi-info",
                onPress: function () {
                  return void u();
                },
                Icon: r("WDSIconIcInfo.react"),
                title: d,
              },
              "Info",
            )),
            (a[3] = u),
            (a[4] = p))
          : (p = a[4]),
        p
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chatId,
        a = o("useWAWebNewsletterMuteState").useNewsletterMuteState(n),
        i = a.isMuted,
        l = a.toggleMuteState,
        u;
      t[0] !== i || t[1] !== l
        ? ((u = function () {
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
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        d;
      return (
        t[3] !== n || t[4] !== c || t[5] !== i
          ? ((d = m.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: c, isMuted: i, chatId: n },
              "mute",
            )),
            (t[3] = n),
            (t[4] = c),
            (t[5] = i),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.chatId,
        a;
      return (
        t[0] !== n
          ? ((a = m.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
              chatId: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function C(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        a = e.chatId,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebFrontendChatGetters").getNewsletterMetadata]),
          (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebChatValues").useChatValues(a, i),
        u = l[0],
        c =
          (t = o(
            "useWAWebNewsletterMetadataValues",
          ).useOptionalNewsletterMetadataValues(u == null ? void 0 : u.id, [
            o("WAWebNewsletterMetadataGetters").getInviteCode,
          ])) != null
            ? t
            : [null],
        d = c[0];
      if (d == null) return null;
      var p;
      n[1] !== d
        ? ((p = function () {
            return o("useWAWebNewsletterInviteLink").copyInviteLink(
              o("useWAWebNewsletterInviteLink").getInviteLink(d),
            );
          }),
          (n[1] = d),
          (n[2] = p))
        : (p = n[2]);
      var _ = p,
        f;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Copy link")), (n[3] = f))
        : (f = n[3]);
      var g = f,
        h;
      return (
        n[4] !== _
          ? ((h = m.jsx(
              r("WDSMenuItem.react"),
              {
                testid: "mi-copy-link",
                onPress: _,
                Icon: r("WDSIconIcLink.react"),
                title: g,
              },
              "HandleCopy",
            )),
            (n[4] = _),
            (n[5] = h))
          : (h = n[5]),
        h
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chatId,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendChatGetters").getNewsletterMetadata]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n, a),
        l = i[0];
      if (!o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(l))
        return null;
      var c;
      t[1] !== n
        ? ((c = function () {
            var e = o("WAWebGetMaybeChatById").getMaybeChatById(n);
            if (e == null) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-context-menu] action skipped, chat left the collection",
                  ])),
              );
              return;
            }
            o("WAWebNewsletterMsgLinkUtils").handleNewsletterChannelEmbedClick(
              e,
            );
          }),
          (t[1] = n),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Embed channel")), (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      return (
        t[4] !== d
          ? ((f = m.jsx(
              r("WDSMenuItem.react"),
              {
                testid: "mi-embed-channel",
                onPress: d,
                Icon: r("WDSIconIcCode.react"),
                title: _,
              },
              "EmbedChannel",
            )),
            (t[4] = d),
            (t[5] = f))
          : (f = t[5]),
        f
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(5),
        a = e.chatId,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WDSDialogBridge").openWDSDialog(
                m.jsx(
                  o("WAWebUnfollowNewsletterConfirmationModal.react")
                    .UnfollowNewsletterConfirmationModal,
                  {
                    chatId: a,
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
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Unfollow")), (t[2] = u))
        : (u = t[2]);
      var c = u,
        d;
      return (
        t[3] !== l
          ? ((d = m.jsx(
              r("WDSMenuItem.react"),
              {
                testid: "mi-unfollow-newsletter",
                onPress: function () {
                  return void l();
                },
                Icon: r("WDSIconIcLogout.react"),
                title: c,
                destructive: !0,
              },
              "HandleUnfollow",
            )),
            (t[3] = l),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(5),
        a = e.chatId,
        i;
      t[0] !== a
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WAWebGetMaybeChatById").getMaybeChatById(a);
              if (e == null) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter-context-menu] action skipped, chat left the collection",
                    ])),
                );
                return;
              }
              (yield o("WAWebCmd").Cmd.openChatBottom({
                chat: e,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterChatlist,
              }),
                o("WAWebCmd").Cmd.newsletterDeleteDrawer(e));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Delete channel")), (t[2] = u))
        : (u = t[2]);
      var d = u,
        p;
      return (
        t[3] !== l
          ? ((p = m.jsx(
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
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.getNewsletterContextMenuItems = p;
  },
  226,
);
