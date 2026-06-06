__d(
  "WAWebHandleBusinessRemoval",
  [
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebHandleBusinessNameChangeLidHelpers",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = yield r("WAWebLidAwareContactsDB").get(t);
          if (n != null)
            return (
              (n.isBusiness = !1),
              (n.verifiedLevel = 0),
              (n.verifiedName = ""),
              r("WAWebLidAwareContactsDB").merge(t, n)
            );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return e.remove(t.isLid() ? t.toString() : t.user);
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o(
            "WAWebHandleBusinessNameChangeLidHelpers",
          ).removeVerifiedNameFromTableLidAware(e),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "applyBusinessRemoval",
              { wid: o("WAWebWidToJid").widToUserJid(e) },
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type !== "remove_hash")
            throw r("err")("Invalid notification type");
          var t = yield o("WAWebApiContact").getContactRecordByHash(e.hash);
          if (t == null) return !1;
          var n = o("WAWebWidFactory").createUserWidOrThrow(t.id);
          return (yield c(n, e.stanzaId, e.ts), !0);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type !== "remove_jid")
            throw r("err")("Invalid notification type");
          yield c(e.jid, e.stanzaId, e.ts);
        })),
        f.apply(this, arguments)
      );
    }
    ((l.removeBusinessPropsFromContact = e),
      (l.removeVerifiedName = u),
      (l.handleBusinessRemoval = c),
      (l.handleBusinessRemovalNotificationHash = m),
      (l.handleBusinessRemovalNotificationContact = _));
  },
  98,
);
