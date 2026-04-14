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
        i = t.chat,
        l = o("useWAWebChatValues").useChatValues(i.id, [
          o("WAWebChatGetters").getIsUser,
        ]),
        u = l[0],
        _ = i.contact;
      if (!u || _ == null) return null;
      var f = _.id,
        g = o("WAWebContactGetters").getIsMe(_),
        h = !!(
          o("WAWebContactGetters").getIsUser(_) &&
          (((a = o("WAWebContactGetters").getName(_)) != null && a.length) ||
            _.isUsernameContact)
        );
      if (
        !f.isRegularUser() ||
        g ||
        f.isIAS() ||
        f.isCAPISupportAccount() ||
        f.isSupportAccount() ||
        h ||
        !o("WAWebContactManagementGating").contactManagementEnabled() ||
        !o("WAWebContactManagementGating").addContactChatListEnabled()
      )
        return null;
      var y = s._(/*BTDS*/ "Add contact"),
        C = function () {
          (e || (e = n("Promise")))
            .all([d.load(), m.load(), p.load()])
            .then(function (e) {
              var t = e[0].openContactEditDrawer,
                n = e[1].ContactSourceType,
                r = e[2].getContactDataFromContactModel;
              t(r(_), n.ChatListMenu);
            });
        };
      return c.jsx(
        r("WDSMenuItem.react"),
        {
          Icon: r("WDSIconIcPersonAdd.react"),
          title: y,
          onPress: C,
          testid: void 0,
        },
        "AddContact",
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
