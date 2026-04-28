__d(
  "WAWebHeaderLabelRendering",
  [
    "fbt",
    "WAWebActions",
    "WAWebBizGatingUtils",
    "WAWebChatGetters",
    "WAWebDropdown.react",
    "WAWebEnvironment",
    "WAWebGroupType",
    "WAWebIcLabelFilledIcon.react",
    "WAWebL10N",
    "WAWebLabelChatHeaderButton.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLabelOutlineIcon.react",
    "WAWebLabelStackIcon.react",
    "WAWebLabels.react",
    "WAWebLabelsDropdown.react",
    "WAWebListIcon.react",
    "WAWebListIconStacked.react",
    "WAWebListPeopleIcon.react",
    "WAWebListsGatingUtils",
    "WAWebMenuBar.react",
    "WAWebMobilePlatforms",
    "WAWebTabOrder",
    "WDSTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        singleLabelIcon: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        labelStackIcon: {
          position: "x10l6tqk",
          top: "xnfr1j",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function d(e, t, n) {
      return {
        menu: u.jsx(r("WAWebLabelsDropdown.react"), {
          chat: e,
          onRequestReopen: t,
          pendingNewListId: n,
        }),
        type: o("WAWebDropdown.react").MenuType.DropdownMenu,
        dirX: r("WAWebL10N").isRTL()
          ? o("WAWebDropdown.react").DirX.RIGHT
          : o("WAWebDropdown.react").DirX.LEFT,
        dirY: o("WAWebDropdown.react").DirY.BOTTOM,
        offsetY: 5,
        offsetX: 0,
      };
    }
    function m(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.groupType;
      return (
        n === o("WAWebGroupType").GroupType.COMMUNITY ||
        n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        n === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
        n === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function p(e) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBizGatingUtils").isCTWASMBLabelChatHeaderEnabledWeb() ||
        r("WAWebEnvironment").isGuest ||
        !e.canSend ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        (r("WAWebEnvironment").isWindows && m(e))
      )
        return null;
      var t = o("WAWebListsGatingUtils").isListsEnabled(),
        n =
          r("WAWebEnvironment").isWindows || m(e)
            ? u.jsx("div", {
                className: "x150mmf0",
                children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  testid: "labels-button",
                  icon: (function () {
                    var n = e == null ? void 0 : e.labels;
                    if (!n || n.length === 0)
                      return t
                        ? u.jsx(
                            o("WAWebListPeopleIcon.react").ListPeopleIcon,
                            {},
                          )
                        : u.jsx(
                            o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                            {},
                          );
                    if (n.length === 1) {
                      if (t) {
                        var a = o("WAWebLabelCollection").LabelCollection.get(
                            n[0],
                          ),
                          i =
                            a != null
                              ? o("WAWebLabelGetters").getHexColor(a)
                              : void 0;
                        return u.jsx("div", {
                          className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                          children: u.jsx(r("WAWebListIcon.react"), {
                            color: i,
                            size: 16,
                          }),
                        });
                      }
                      return u.jsx(o("WAWebLabels.react").Labels, {
                        iconXstyle: c.singleLabelIcon,
                        labels: [n[0]],
                        showName: !1,
                      });
                    }
                    if (t)
                      return u.jsx("div", {
                        className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                        children: u.jsx(r("WAWebListIconStacked.react"), {
                          labelIds: n,
                          size: 16,
                        }),
                      });
                    var l = o(
                        "WAWebLabelChatHeaderButton.react",
                      ).getLabelStackInfo(n),
                      s = l.primaryLabel,
                      d = l.secondaryLabel;
                    return u.jsxs("div", {
                      className: "xxk0z11 x1n2onr6 xvy4d1p",
                      children: [
                        u.jsx(
                          o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon,
                          {
                            width: 24,
                            height: 24,
                            style: {
                              color:
                                (s == null ? void 0 : s.color) != null
                                  ? s.color
                                  : void 0,
                            },
                            xstyle: c.labelStackIcon,
                          },
                        ),
                        u.jsx(o("WAWebLabelStackIcon.react").LabelStackIcon, {
                          width: 24,
                          height: 24,
                          style: {
                            color:
                              (d == null ? void 0 : d.color) != null
                                ? d.color
                                : void 0,
                          },
                          xstyle: c.labelStackIcon,
                        }),
                      ],
                    });
                  })(),
                  title: t ? s._(/*BTDS*/ "Lists") : s._(/*BTDS*/ "Labels"),
                  dropdownMenu: d(e),
                }),
              })
            : u.jsx(
                o("WAWebLabelChatHeaderButton.react").LabelChatHeaderButton,
                { chat: e },
              );
      return u.jsx(r("WDSTooltip.react"), {
        label: t ? s._(/*BTDS*/ "Add to list") : s._(/*BTDS*/ "Label chat"),
        shortcut: o("WAWebActions").Action.LABEL_CHAT,
        children: n,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.createLabelsDropdownMenu = d),
      (l.isCommunityRelatedChat = m),
      (l.renderLabelChatHeaderIcon = p));
  },
  226,
);
