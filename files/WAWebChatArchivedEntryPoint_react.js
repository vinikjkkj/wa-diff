__d(
  "WAWebChatArchivedEntryPoint.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchiveRefreshedIcon.react",
    "WAWebArchivedFlowLoadable",
    "WAWebChatFolderOpenWamEvent",
    "WAWebChatUnreadCount.react",
    "WAWebChatlistPanelDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebTabOrder",
    "react",
    "useWAWebArchivedChatsActivityIndicator",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        iconMentions: {
          display: "x1rg5ohu",
          width: "xw4jnvo",
          height: "x1qx5ct2",
          color: "x1r8hjv8",
          marginInlineEnd: "xnnr8r",
          $$css: !0,
        },
      };
    function d() {
      var e = o(
          "useWAWebArchivedChatsActivityIndicator",
        ).useArchivedChatsActivityIndicator(),
        t = e.showUnreadMentionIcon,
        n = e.unreadCount,
        a = n !== 0 && !t,
        i = a
          ? u.jsx("div", {
              className: "x1rg5ohu xnnr8r",
              children: u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                count: n,
                theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                  .Transparent,
              }),
            })
          : null,
        l = u.jsx(
          o("WAWebArchiveRefreshedIcon.react").ArchiveRefreshedIcon,
          {},
        ),
        d = t
          ? u.jsx(
              "div",
              {
                className: "x1rg5ohu xw4jnvo x1qx5ct2 x1r8hjv8 xnnr8r",
                children: u.jsx(
                  o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
                  { xstyle: c.iconMentions, height: 20 },
                ),
              },
              "icon-mentions",
            )
          : null,
        m = [
          s._(/*BTDS*/ "Archived"),
          t ? s._(/*BTDS*/ "\u0040 message") : "",
        ].join(" "),
        p = u.jsxs(u.Fragment, { children: [d, i] }),
        _ = function () {
          (new (o("WAWebChatFolderOpenWamEvent").ChatFolderOpenWamEvent)({
            activityIndicatorCount: n,
            folderType: "Archive",
          }).commit(),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "archived" }
                : u.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                  }),
              { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            ));
        };
      return u.jsx(r("WAWebChatlistPanelDrawerButton.react"), {
        dataTestId: "chatlist-panel-archived-button",
        dataTab: o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT,
        ariaLabel: m,
        onClick: _,
        primary: s._(/*BTDS*/ "Archived"),
        icon: l,
        detail: p,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
