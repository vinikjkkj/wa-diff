__d(
  "WASmaxInPreKeysIdentityDigestBundleMixin",
  [
    "WAResultOrError",
    "WASmaxInPreKeysIdentityKeyMixin",
    "WASmaxInPreKeysKeyTypeMixin",
    "WASmaxInPreKeysKeysHashMixin",
    "WASmaxInPreKeysPQLastResortKeyIDMixin",
    "WASmaxInPreKeysPQPreKeyIDListMixin",
    "WASmaxInPreKeysPreKeyIDListMixin",
    "WASmaxInPreKeysRegistrationIDMixin",
    "WASmaxInPreKeysSignedPreKeyMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInPreKeysRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!t.success) return t;
      var n = o("WASmaxInPreKeysIdentityKeyMixin").parseIdentityKeyMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInPreKeysPreKeyIDListMixin").parsePreKeyIDListMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxInPreKeysSignedPreKeyMixin").parseSignedPreKeyMixin(e);
      if (!a.success) return a;
      var i = o("WASmaxInPreKeysPQPreKeyIDListMixin").parsePQPreKeyIDListMixin(
          e,
        ),
        l = o(
          "WASmaxInPreKeysPQLastResortKeyIDMixin",
        ).parsePQLastResortKeyIDMixin(e),
        s = o("WASmaxInPreKeysKeyTypeMixin").parseKeyTypeMixin(e),
        u = o("WASmaxInPreKeysKeysHashMixin").parseKeysHashMixin(e);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {},
              t.value,
              n.value,
              r.value,
              a.value,
              {
                pQPreKeyIDListMixin: i.success ? i.value : null,
                pQLastResortKeyIDMixin: l.success ? l.value : null,
                keyTypeMixin: s.success ? s.value : null,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseIdentityDigestBundleMixin = e;
  },
  98,
);
