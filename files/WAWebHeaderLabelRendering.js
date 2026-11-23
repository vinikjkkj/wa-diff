__d(
  "WAWebHeaderLabelRendering",
  [
    "fbt",
    "WAWebActions",
    "WAWebChatGetters",
    "WAWebDropdown.react",
    "WAWebEnvironment",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLabelChatHeaderButton.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLabelsDropdown.react",
    "WAWebListIcon.react",
    "WAWebListIconStacked.react",
    "WAWebMenuBar.react",
    "WAWebMobilePlatforms",
    "WAWebTabOrder",
    "WDSIconIcSwitchAccount.react",
    "WDSTooltip.react",
    "react",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      return {
        menu: u.jsx(r("WAWebLabelsDropdown.react"), {
          chat: e,
          onRequestReopen: t,
          pendingNewListId: n,
        }),
        type: o("WAWebDropdown.react").MenuType.DropdownMenu,
        role: "menu",
        ariaLabel: s._(/*BTDS*/ ""),
        autoFocus: !0,
        findFirstItem: !0,
        dirX: r("WAWebL10N").isRTL()
          ? o("WAWebDropdown.react").DirX.RIGHT
          : o("WAWebDropdown.react").DirX.LEFT,
        dirY: o("WAWebDropdown.react").DirY.BOTTOM,
        offsetY: 5,
        offsetX: 0,
      };
    }
    function d(e) {
      return m(e.groupMetadata);
    }
    function m(e) {
      var t = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e);
      return (
        t === o("WAWebGroupType").GroupType.COMMUNITY ||
        t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
        t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function p(e) {
      var t = e.chat,
        n = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getLabels,
        ]),
        a = n[0],
        i = r("useWAWebEventTargetValue")(
          o("WAWebLabelCollection").LabelCollection,
          (a != null ? a : []).map(function (e) {
            return "label_updated_" + e;
          }),
          function () {
            return _(a);
          },
          [a],
        );
      return f(t, a, i);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return (e != null ? e : []).map(function (e) {
        var t = o("WAWebLabelCollection").LabelCollection.get(e);
        return t != null ? o("WAWebLabelGetters").getHexColor(t) : void 0;
      });
    }
    function f(e, t, n) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        r("WAWebEnvironment").isGuest ||
        !e.canSend ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        (r("WAWebEnvironment").isWindows && d(e)) ||
        e.id.isAiHub()
      )
        return null;
      var a =
        r("WAWebEnvironment").isWindows || d(e)
          ? u.jsx("div", {
              className: "x150mmf0",
              children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                testid: "labels-button",
                icon: (function () {
                  var o = t != null ? t : e.labels;
                  if (!o || o.length === 0)
                    return u.jsx(r("WDSIconIcSwitchAccount.react"), {
                      testid: "list-people",
                    });
                  if (o.length === 1) {
                    var a = n == null ? void 0 : n[0];
                    return u.jsx("div", {
                      className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                      children: u.jsx(r("WAWebListIcon.react"), {
                        color: a,
                        size: 16,
                      }),
                    });
                  }
                  return u.jsx("div", {
                    className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                    children: u.jsx(r("WAWebListIconStacked.react"), {
                      labelIds: o,
                      size: 16,
                    }),
                  });
                })(),
                title: s._(/*BTDS*/ ""),
                dropdownMenu: c(e),
              }),
            })
          : u.jsx(o("WAWebLabelChatHeaderButton.react").LabelChatHeaderButton, {
              chat: e,
            });
      return u.jsx(r("WDSTooltip.react"), {
        label: s._(/*BTDS*/ ""),
        shortcut: o("WAWebActions").Action.LABEL_CHAT,
        children: a,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.createLabelsDropdownMenu = c),
      (l.isCommunityRelatedChat = d),
      (l.isCommunityRelatedChatFor = m),
      (l.WAWebHeaderLabelButton = p));
  },
  226,
);
