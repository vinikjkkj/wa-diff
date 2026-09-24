__d(
  "WAWebCoexV2RepresentedIdentity",
  ["WAWebCoexV2GatingUtils", "WAWebUserPrefsMeUser", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.author,
        n = e.metaFrom,
        r = e.peerRecipientLid,
        a = e.peerRecipientPn,
        i = e.peerRecipientUsername,
        l = e.senderPn,
        c = e.senderUsername,
        d = e.targetChatJid,
        p = s(t, n, d);
      return p == null
        ? null
        : o("WAWebUserPrefsMeUser").isMeAccount(p.metaFrom)
          ? u(p.targetUser, r, a, i)
          : m(p.metaFrom, p.targetUser, l, c);
    }
    function s(e, t, n) {
      return t == null ||
        n == null ||
        !t.isLid() ||
        !n.isRegularUser() ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e, t) ||
        o("WAWebUserPrefsMeUser").isMeAccount(n)
        ? null
        : {
            metaFrom: o("WAWebWidFactory").asUserLidOrThrow(t),
            targetUser: o("WAWebWidFactory").asUserWidOrThrow(n),
          };
    }
    function u(e, t, n, r) {
      var a = p(n, r);
      return a == null
        ? null
        : e.isLid()
          ? c(o("WAWebWidFactory").asUserLidOrThrow(e), t, a)
          : d(e, t, a);
    }
    function c(e, t, n) {
      return t != null && !e.equals(t)
        ? null
        : babelHelpers.extends({}, n, {
            identitySource: "peer-recipient",
            representedLid: e,
            representedUser: e,
          });
    }
    function d(e, t, n) {
      return (n.phoneNumber != null && !e.equals(n.phoneNumber)) ||
        (t != null && o("WAWebUserPrefsMeUser").isMeAccount(t))
        ? null
        : babelHelpers.extends({}, n, {
            identitySource: "peer-recipient",
            phoneNumber: _(e),
            representedLid: t,
            representedUser: t != null ? t : e,
          });
    }
    function m(e, t, n, r) {
      if (!t.equals(e) || (n != null && r != null && r !== "")) return null;
      var o = p(n, r);
      return o == null
        ? null
        : babelHelpers.extends({}, o, {
            identitySource: "sender",
            representedLid: e,
            representedUser: e,
          });
    }
    function p(e, t) {
      var n = t === "" ? null : t;
      if (e == null) return { phoneNumber: null, username: n };
      var r = _(e);
      return r == null || o("WAWebUserPrefsMeUser").isMeAccount(r)
        ? null
        : { phoneNumber: r, username: n };
    }
    function _(e) {
      return e.isRegularUserPn() && !e.isHostedLid()
        ? o("WAWebWidFactory").asUserWidOrThrow(e)
        : null;
    }
    l.getCoexV2RepresentedIdentity = e;
  },
  98,
);
