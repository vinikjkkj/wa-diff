__d(
  "WAWebNewsletterChatCell.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChat.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenNewsletterChat",
    "WAWebWamEnumTsSurface",
    "react",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.active,
        n = e.chatEntryPoint,
        a = e.firstCellInList,
        i = e.newsletter,
        l = e.onSelect,
        c = e.searchQuery,
        d = r("useWAWebActiveSelection")(
          t,
          "newsletter-local-" + i.id.toString(),
        ),
        m = d[0],
        p = d[1],
        _ = r("useWAWebFocusState")(),
        f = _[0],
        g = _[1],
        h = r("useMergeRefs")(m, f),
        y = s._(/*BTDS*/ "{newsletter-name} Channel", [
          s._param("newsletter-name", i.formattedTitle),
        ]),
        C = function (t) {
          (t.preventDefault(),
            o("WAWebOpenNewsletterChat").openNewsletterChat({
              newsletter: i,
              onSelect: l,
              chatEntryPoint: n,
              discoverySurface:
                c.trimmed() === ""
                  ? o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME
                  : o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_UPDATES_HOME_SEARCH,
            }));
        },
        b = { enter: C, space: C },
        v = !o("WAWebABProps").getABPropConfigValue(
          "channels_verified_badge_in_compact_inbox_enabled",
        );
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: h,
        handlers: b,
        "aria-label": y.toString(),
        role: "button",
        "aria-current": p,
        "data-testid": void 0,
        children: u.jsx(o("WAWebChat.react").Chat, {
          focused: g,
          onClick: C,
          chat: i,
          searchQuery: c,
          forceActive: p,
          theme: "newsletter-cell",
          firstCellInList: a,
          noContext: !o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterContextMenuEnabled(i),
          hideArchivedIcon: !0,
          skipCheckMark: v,
          showStatusRingAroundProfilePhoto: o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterStatusReceiverEnabled(),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
