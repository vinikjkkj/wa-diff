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
    "react",
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
      var t = e.chatId;
      return m.jsx(
        r("WAWebChatContextMenuItemPin.react"),
        { chatId: t },
        "pin",
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(t) {
      var n = t.chatId,
        a = async function () {
          var t = o("WAWebGetMaybeChatById").getMaybeChatById(n);
          if (t == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-context-menu] action skipped, chat left the collection",
                ])),
            );
            return;
          }
          (await o("WAWebCmd").Cmd.openChatBottom({
            chat: t,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterChatlist,
          }),
            o("WAWebCmd").Cmd.chatInfoDrawer(t));
        },
        i = s._(/*BTDS*/ "");
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-info",
          onPress: function () {
            return void a();
          },
          Icon: r("WDSIconIcInfo.react"),
          title: i,
        },
        "Info",
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chatId,
        n = o("useWAWebNewsletterMuteState").useNewsletterMuteState(t),
        a = n.isMuted,
        i = n.toggleMuteState,
        l = function () {
          var e = a ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
          o("WAWebRunWithInternetCheck").runWithInternetCheck(function () {
            return i();
          }, e);
        };
      return m.jsx(
        r("WAWebMuteMenuItem.react"),
        { onMute: l, isMuted: a, chatId: t },
        "mute",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.chatId;
      return m.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
        chatId: t,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n = e.chatId,
        a = o("useWAWebChatValues").useChatValues(n, [
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
        ]),
        i = a[0],
        l =
          (t = o(
            "useWAWebNewsletterMetadataValues",
          ).useOptionalNewsletterMetadataValues(i == null ? void 0 : i.id, [
            o("WAWebNewsletterMetadataGetters").getInviteCode,
          ])) != null
            ? t
            : [null],
        u = l[0];
      if (u == null) return null;
      var c = function () {
          return o("useWAWebNewsletterInviteLink").copyInviteLink(
            o("useWAWebNewsletterInviteLink").getInviteLink(u),
          );
        },
        d = s._(/*BTDS*/ "");
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-copy-link",
          onPress: c,
          Icon: r("WDSIconIcLink.react"),
          title: d,
        },
        "HandleCopy",
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.chatId,
        n = o("useWAWebChatValues").useChatValues(t, [
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
        ]),
        a = n[0];
      if (!o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(a))
        return null;
      var i = function () {
          var e = o("WAWebGetMaybeChatById").getMaybeChatById(t);
          if (e == null) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-context-menu] action skipped, chat left the collection",
                ])),
            );
            return;
          }
          o("WAWebNewsletterMsgLinkUtils").handleNewsletterChannelEmbedClick(e);
        },
        l = s._(/*BTDS*/ "");
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-embed-channel",
          onPress: i,
          Icon: r("WDSIconIcCode.react"),
          title: l,
        },
        "EmbedChannel",
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.chatId,
        n = async function () {
          o("WDSDialogBridge").openWDSDialog(
            m.jsx(
              o("WAWebUnfollowNewsletterConfirmationModal.react")
                .UnfollowNewsletterConfirmationModal,
              {
                chatId: t,
                loggingOptions: {
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHANNEL_UPDATES_HOME,
                },
              },
            ),
          );
        },
        a = s._(/*BTDS*/ "");
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-unfollow-newsletter",
          onPress: function () {
            return void n();
          },
          Icon: r("WDSIconIcLogout.react"),
          title: a,
          destructive: !0,
        },
        "HandleUnfollow",
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.chatId,
        n = async function () {
          var e = o("WAWebGetMaybeChatById").getMaybeChatById(t);
          if (e == null) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-context-menu] action skipped, chat left the collection",
                ])),
            );
            return;
          }
          (await o("WAWebCmd").Cmd.openChatBottom({
            chat: e,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterChatlist,
          }),
            o("WAWebCmd").Cmd.newsletterDeleteDrawer(e));
        },
        a = s._(/*BTDS*/ "");
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-delete-newsletter",
          onPress: function () {
            return void n();
          },
          Icon: r("WDSIconIcDelete.react"),
          title: a,
          destructive: !0,
        },
        "DeleteNewsletter",
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.getNewsletterContextMenuItems = p));
  },
  226,
);
