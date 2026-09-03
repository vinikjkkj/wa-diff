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
    "WAWebListPeopleIcon.react",
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
      u = e || (e = o("react"));
    function c(e, t, n) {
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
    function d(e) {
      var t = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
        e.groupMetadata,
      );
      return (
        t === o("WAWebGroupType").GroupType.COMMUNITY ||
        t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
        t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
        t === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
      );
    }
    function m(e) {
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
      t[3] !== s ? ((u = s.map(p)), (t[3] = s), (t[4] = u)) : (u = t[4]);
      var c, d;
      t[5] !== l
        ? ((c = function () {
            return _(l);
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
        g;
      return (
        t[8] !== n || t[9] !== m || t[10] !== l
          ? ((g = f(n, l, m)), (t[8] = n), (t[9] = m), (t[10] = l), (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    function p(e) {
      return "label_updated_" + e;
    }
    function _(e) {
      return (e != null ? e : []).map(function (e) {
        var t = o("WAWebLabelCollection").LabelCollection.get(e);
        return t != null ? o("WAWebLabelGetters").getHexColor(t) : void 0;
      });
    }
    function f(e, t, n) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebListsLabelGatingUtils").isCTWASMBLabelChatHeaderEnabledWeb() ||
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
                  var a = t != null ? t : e.labels;
                  if (!a || a.length === 0)
                    return u.jsx(
                      o("WAWebListPeopleIcon.react").ListPeopleIcon,
                      {},
                    );
                  if (a.length === 1) {
                    var i = n == null ? void 0 : n[0];
                    return u.jsx("div", {
                      className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                      children: u.jsx(r("WAWebListIcon.react"), {
                        color: i,
                        size: 16,
                      }),
                    });
                  }
                  return u.jsx("div", {
                    className: "x6s0dn4 x78zum5 xxk0z11 xl56j7k xvy4d1p",
                    children: u.jsx(r("WAWebListIconStacked.react"), {
                      labelIds: a,
                      size: 16,
                    }),
                  });
                })(),
                title: s._(/*BTDS*/ "Lists"),
                dropdownMenu: c(e),
              }),
            })
          : u.jsx(o("WAWebLabelChatHeaderButton.react").LabelChatHeaderButton, {
              chat: e,
            });
      return u.jsx(r("WDSTooltip.react"), {
        label: s._(/*BTDS*/ "Add to list"),
        shortcut: o("WAWebActions").Action.LABEL_CHAT,
        children: a,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.createLabelsDropdownMenu = c),
      (l.isCommunityRelatedChat = d),
      (l.WAWebHeaderLabelButton = m));
  },
  226,
);
