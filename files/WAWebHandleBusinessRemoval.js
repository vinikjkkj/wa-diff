__d(
  "WAWebHandleBusinessRemoval",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebHandleBusinessNameChangeLidHelpers",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.toString(),
        n = await r("WAWebLidAwareContactsDB").get(t);
      if (n != null)
        return (
          (n.isBusiness = !1),
          (n.verifiedLevel = 0),
          (n.verifiedName = ""),
          r("WAWebLidAwareContactsDB").merge(t, n)
        );
    }
    function s(e, t) {
      return e.remove(t.isLid() ? t.toString() : t.user);
    }
    async function u(e, t, n) {
      (await o(
        "WAWebHandleBusinessNameChangeLidHelpers",
      ).removeVerifiedNameFromTableLidAware(e),
        await o("WAWebBackendApi").frontendSendAndReceive(
          "applyBusinessRemoval",
          { wid: o("WAWebWidToJid").widToUserJid(e) },
        ));
    }
    async function c(e) {
      if (e.type !== "remove_hash") throw r("err")("Invalid notification type");
      var t = await o("WAWebApiContact").getContactRecordByHash(e.hash);
      if (t == null) return !1;
      var n = o("WAWebWidFactory").createUserWidOrThrow(t.id);
      return (await u(n, e.stanzaId, e.ts), !0);
    }
    async function d(e) {
      if (e.type !== "remove_jid") throw r("err")("Invalid notification type");
      await u(e.jid, e.stanzaId, e.ts);
    }
    ((l.removeBusinessPropsFromContact = e),
      (l.removeVerifiedName = s),
      (l.handleBusinessRemoval = u),
      (l.handleBusinessRemovalNotificationHash = c),
      (l.handleBusinessRemovalNotificationContact = d));
  },
  98,
);
