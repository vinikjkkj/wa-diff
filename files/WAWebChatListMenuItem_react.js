__d(
  "WAWebChatListMenuItem.react",
  [
    "WAWebChatCellV2.react",
    "WAWebCommunityGatingUtils",
    "WAWebMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["chat", "chatCellRef", "onSelect", "optionId", "ref"],
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t;
      return (
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        ) &&
        ((t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat()) !=
          null
      );
    }
    function d(e, t) {
      var n = t || {},
        r = n.showCommunityInfo,
        o = r === void 0 ? !1 : r;
      return { itemKey: e.id.toString(), height: o && c(e) ? 88 : 72, chat: e };
    }
    function m(t) {
      var n = t.chat,
        a = t.chatCellRef,
        i = t.onSelect,
        l = t.optionId,
        s = t.ref,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = o("WAWebMenuItem.react").useMenuItem(l),
        m = d.border,
        p = d.colorScheme,
        _ = d.isActive,
        f = d.material,
        g = d.size;
      return u.jsx(o("WAWebMenuItem.react").WAWebMenuItem, {
        ref: s,
        onSelect: i,
        optionId: l,
        type: "action",
        children: u.jsx(
          r("WAWebChatCellV2.react"),
          babelHelpers.extends(
            {
              ref: a,
              chat: n,
              colorScheme: p,
              size: g,
              material: f,
              border: m,
              active: _,
            },
            c,
          ),
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.getFlatListConfigFromChat = d),
      (l.ChatMenuItem = m));
  },
  98,
);
