__d(
  "WAWebOrgAdminGroupChatAction",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebOrgAdminGroupParticipantsAction",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebOrgAdminGroupParticipantsAction").getOrgAdminGroupJid(e),
      );
      return t == null || t.isLocked ? null : t;
    }
    function c(t) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
        o("WAWebCmd")
          .Cmd.openChatFromUnread({
            chat: t,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer,
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] opening a managed group chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("org-admin-open-group-chat-failed");
          }));
    }
    function d(e, t) {
      var n,
        r,
        a,
        i =
          e == null || (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (i == null || t == null) return null;
      var l;
      try {
        l = o("WAWebWidFactory").createUserLidOrThrow(t, "lid");
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] managed group member has an invalid LID",
              ])),
          ),
          null
        );
      }
      var u = o("WAWebApiContact").getPnIfLidIsLatestMapping(l),
        c = (r = i.get(l)) != null ? r : u == null ? null : i.get(u);
      return c == null || !i.canVerifyIdentity(c)
        ? null
        : c.id.isLid()
          ? c.contact
          : (a = o("WAWebContactCollection").ContactCollection.get(l)) != null
            ? a
            : null;
    }
    ((l.getOrgAdminGroupChat = u),
      (l.openOrgAdminGroupChat = c),
      (l.getOrgAdminGroupVerifyContact = d));
  },
  98,
);
