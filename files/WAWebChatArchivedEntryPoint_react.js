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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(21),
        t = o(
          "useWAWebArchivedChatsActivityIndicator",
        ).useArchivedChatsActivityIndicator(),
        n = t.showUnreadMentionIcon,
        a = t.unreadCount,
        i = a !== 0 && !n,
        l;
      e[0] !== i || e[1] !== a
        ? ((l = i
            ? u.jsx("div", {
                className: "x1rg5ohu xnnr8r",
                children: u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                  count: a,
                  theme: o("WAWebChatUnreadCount.react").UnreadCountTheme
                    .Transparent,
                }),
              })
            : null),
          (e[0] = i),
          (e[1] = a),
          (e[2] = l))
        : (l = e[2]);
      var d = l,
        m;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(
            o("WAWebArchiveRefreshedIcon.react").ArchiveRefreshedIcon,
            {},
          )),
          (e[3] = m))
        : (m = e[3]);
      var p = m,
        _;
      e[4] !== n
        ? ((_ = n
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
            : null),
          (e[4] = n),
          (e[5] = _))
        : (_ = e[5]);
      var f = _,
        g;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Archived")), (e[6] = g))
        : (g = e[6]);
      var h;
      e[7] !== n
        ? ((h = n ? s._(/*BTDS*/ "\u0040 message") : ""),
          (e[7] = n),
          (e[8] = h))
        : (h = e[8]);
      var y;
      e[9] !== h ? ((y = [g, h]), (e[9] = h), (e[10] = y)) : (y = e[10]);
      var C = y.join(" "),
        b;
      e[11] !== d || e[12] !== f
        ? ((b = u.jsxs(u.Fragment, { children: [f, d] })),
          (e[11] = d),
          (e[12] = f),
          (e[13] = b))
        : (b = e[13]);
      var v = b,
        S;
      e[14] !== a
        ? ((S = function () {
            (new (o("WAWebChatFolderOpenWamEvent").ChatFolderOpenWamEvent)({
              activityIndicatorCount: a,
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
          }),
          (e[14] = a),
          (e[15] = S))
        : (S = e[15]);
      var R = S,
        L;
      e[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Archived")), (e[16] = L))
        : (L = e[16]);
      var E;
      return (
        e[17] !== v || e[18] !== C || e[19] !== R
          ? ((E = u.jsx(r("WAWebChatlistPanelDrawerButton.react"), {
              dataTestId: "chatlist-panel-archived-button",
              dataTab: o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT,
              ariaLabel: C,
              onClick: R,
              primary: L,
              icon: p,
              detail: v,
            })),
            (e[17] = v),
            (e[18] = C),
            (e[19] = R),
            (e[20] = E))
          : (E = e[20]),
        E
      );
    }
    l.default = d;
  },
  226,
);
