__d(
  "WAWebProductListOwnerValidation",
  [
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      if (!r("justknobx")._("7731")) return !0;
      var a = s(
        (t = e.list) == null || (t = t.productListInfo) == null
          ? void 0
          : t.businessOwnerJid,
      );
      if (a == null) return !1;
      var i = u(e);
      return i == null
        ? !1
        : a.equals(i)
          ? !0
          : a.isLid() !== i.isLid() &&
            ((n = o("WAWebLidMigrationUtils").toUserLid(a)) == null
              ? void 0
              : n.equals(o("WAWebLidMigrationUtils").toUserLid(i))) === !0;
    }
    function s(e) {
      if (
        typeof e != "string" ||
        !/^\d+@(c\.us|s\.whatsapp\.net|lid)$/.test(e) ||
        !o("WAWebWidValidator").validateWid(e)
      )
        return null;
      var t = o("WAWebWidFactory").createUserWidOrThrow(e);
      return t.isRegularUser() ? t : null;
    }
    function u(e) {
      var t,
        n = e.id.remote;
      if (!n.isRegularUser() && !n.isGroup()) return null;
      if (o("WAWebMsgGetters").getIsSentByMe(e))
        return o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      if (n.isGroup()) {
        var r = o("WAWebMsgGetters").getAuthor(e);
        return r == null || !r.isRegularUser()
          ? null
          : o("WAWebWidFactory").asUserWidOrThrow(r);
      }
      return (t = o("WAWebFrontendMsgGetters").getMaybeChat(e)) == null
        ? void 0
        : t.accountLid;
    }
    l.isProductListOwnerValid = e;
  },
  98,
);
