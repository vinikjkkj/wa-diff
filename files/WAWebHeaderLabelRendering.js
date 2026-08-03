__d(
  "WAWebHeaderLabelRendering",
  [
    "fbt",
    "WAWebActions",
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
    "WAWebListsLabelGatingUtils",
    "WAWebMenuBar.react",
    "WAWebMobilePlatforms",
    "WAWebTabOrder",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
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
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebChatGetters").getLabels]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n.id, a),
        l = i[0],
        s;
      t[1] !== l
        ? ((s = l != null ? l : []), (t[1] = l), (t[2] = s))
        : (s = t[2]);
      var u;
      t[3] !== s ? ((u = s.map(_)), (t[3] = s), (t[4] = u)) : (u = t[4]);
      var c, d;
      t[5] !== l
        ? ((c = function () {
            return f(l);
          }),
          (d = [l]),
          (t[5] = l),
          (t[6] = c),
          (t[7] = d))
        : ((c = t[6]), (d = t[7]));
      var m = r("useWAWebEventTargetValue")(
          o("WAWebLabelCollection").LabelCollection,
          u,
          c,
          d,
        ),
        p;
      return (
        t[8] !== n || t[9] !== m || t[10] !== l
          ? ((p = g(n, l, m)), (t[8] = n), (t[9] = m), (t[10] = l), (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    function _(e) {
      return "label_updated_" + e;
    }
    function f(e) {
      return (e != null ? e : []).map(function (e) {
        var t = o("WAWebLabelCollection").LabelCollection.get(e);
        return t != null ? o("WAWebLabelGetters").getHexColor(t) : void 0;
      });
    }
    function g(e, t, n) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebListsLabelGatingUtils").isCTWASMBLabelChatHeaderEnabledWeb() ||
        r("WAWebEnvironment").isGuest ||
        !e.canSend ||
        o("WAWebChatGetters").getIsBroadcast(e) ||
        (r("WAWebEnvironment").isWindows && m(e)) ||
        e.id.isAiHub()
      )
        return null;
      var a = o("WAWebListsGatingUtils").isListsEnabled(),
        i =
          r("WAWebEnvironment").isWindows || m(e)
            ? u.jsx("div", {
                className: "x150mmf0",
                children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                  testid: "labels-button",
                  icon: (function () {
                    var i = t != null ? t : e.labels;
                    if (!i || i.length === 0)
                      return a
                        ? u.jsx(
                            o("WAWebListPeopleIcon.react").ListPeopleIcon,
                            {},
                          )
                        : u.jsx(
                            o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                            {},
                          );
                    if (i.length === 1) {
                      if (a) {
                        var l = n == null ? void 0 : n[0];
                        return u.jsx("div", {
                          className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                          children: u.jsx(r("WAWebListIcon.react"), {
                            color: l,
                            size: 16,
                          }),
                        });
                      }
                      return u.jsx(o("WAWebLabels.react").Labels, {
                        iconXstyle: c.singleLabelIcon,
                        labels: [i[0]],
                        showName: !1,
                      });
                    }
                    if (a)
                      return u.jsx("div", {
                        className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                        children: u.jsx(r("WAWebListIconStacked.react"), {
                          labelIds: i,
                          size: 16,
                        }),
                      });
                    var s = o(
                        "WAWebLabelChatHeaderButton.react",
                      ).getLabelStackInfo(i),
                      d = s.primaryLabel,
                      m = s.secondaryLabel;
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
                                (d == null ? void 0 : d.color) != null
                                  ? d.color
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
                              (m == null ? void 0 : m.color) != null
                                ? m.color
                                : void 0,
                          },
                          xstyle: c.labelStackIcon,
                        }),
                      ],
                    });
                  })(),
                  title: a ? s._(/*BTDS*/ "Lists") : s._(/*BTDS*/ "Labels"),
                  dropdownMenu: d(e),
                }),
              })
            : u.jsx(
                o("WAWebLabelChatHeaderButton.react").LabelChatHeaderButton,
                { chat: e },
              );
      return u.jsx(r("WDSTooltip.react"), {
        label: a ? s._(/*BTDS*/ "Add to list") : s._(/*BTDS*/ "Label chat"),
        shortcut: o("WAWebActions").Action.LABEL_CHAT,
        children: i,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.createLabelsDropdownMenu = d),
      (l.isCommunityRelatedChat = m),
      (l.WAWebHeaderLabelButton = p),
      (l.renderLabelChatHeaderIcon = g));
  },
  226,
);
