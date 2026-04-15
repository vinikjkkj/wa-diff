__d(
  "WAWebChatContextMenuItemAddContact.react",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WDSIconIcPersonAdd.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = r("JSResourceForInteraction")("WAWebContactEditUtils").__setRef(
        "WAWebChatContextMenuItemAddContact.react",
      ),
      m = r("JSResourceForInteraction")("WAWebContactLogging").__setRef(
        "WAWebChatContextMenuItemAddContact.react",
      ),
      p = r("JSResourceForInteraction")("WAWebContactUtils").__setRef(
        "WAWebChatContextMenuItemAddContact.react",
      );
    function _(t) {
      var a,
        i = o("react-compiler-runtime").c(4),
        l = t.chat,
        u;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [o("WAWebChatGetters").getIsUser]), (i[0] = u))
        : (u = i[0]);
      var _ = o("useWAWebChatValues").useChatValues(l.id, u),
        f = _[0],
        g = l.contact;
      if (!f || g == null) return null;
      var h = g.id,
        y = o("WAWebContactGetters").getIsMe(g),
        C = !!(
          o("WAWebContactGetters").getIsUser(g) &&
          (((a = o("WAWebContactGetters").getName(g)) != null && a.length) ||
            g.isUsernameContact)
        );
      if (
        !h.isRegularUser() ||
        y ||
        h.isIAS() ||
        h.isCAPISupportAccount() ||
        h.isSupportAccount() ||
        C ||
        !o("WAWebContactManagementGating").contactManagementEnabled() ||
        !o("WAWebContactManagementGating").addContactChatListEnabled()
      )
        return null;
      var b;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Add contact")), (i[1] = b))
        : (b = i[1]);
      var v = b,
        S;
      if (i[2] !== g) {
        var R = function () {
          (e || (e = n("Promise")))
            .all([d.load(), m.load(), p.load()])
            .then(function (e) {
              var t = e[0],
                n = e[1],
                r = e[2],
                o = t.openContactEditDrawer,
                a = n.ContactSourceType,
                i = r.getContactDataFromContactModel;
              o(i(g), a.ChatListMenu);
            });
        };
        ((S = c.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: r("WDSIconIcPersonAdd.react"),
            title: v,
            onPress: R,
            testid: void 0,
          },
          "AddContact",
        )),
          (i[2] = g),
          (i[3] = S));
      } else S = i[3];
      return S;
    }
    l.default = _;
  },
  226,
);
