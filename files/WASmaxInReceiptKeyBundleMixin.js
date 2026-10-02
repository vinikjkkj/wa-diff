__d(
  "WASmaxInReceiptKeyBundleMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptBotIdentityKeyAuthMixin",
    "WASmaxInReceiptDeviceIdentityMixin",
    "WASmaxInReceiptIdentityKeyMixin",
    "WASmaxInReceiptKeyTypeMixin",
    "WASmaxInReceiptPQPreKeyMixin",
    "WASmaxInReceiptPaddingMixin",
    "WASmaxInReceiptPreKeyMixin",
    "WASmaxInReceiptSignedPreKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "keys");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptKeyTypeMixin").parseKeyTypeMixin(n.value);
      if (!r.success) return r;
      var a = o("WASmaxInReceiptIdentityKeyMixin").parseIdentityKeyMixin(
        n.value,
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInReceiptBotIdentityKeyAuthMixin",
        ).parseBotIdentityKeyAuthMixin(n.value),
        l = o("WASmaxInReceiptSignedPreKeyMixin").parseSignedPreKeyMixin(
          n.value,
        );
      if (!l.success) return l;
      var s = o("WASmaxInReceiptPreKeyMixin").parsePreKeyMixin(n.value),
        u = o("WASmaxInReceiptPQPreKeyMixin").parsePQPreKeyMixin(n.value),
        c = o("WASmaxInReceiptDeviceIdentityMixin").parseDeviceIdentityMixin(
          n.value,
        ),
        d = o("WASmaxInReceiptPaddingMixin").parsePaddingMixin(e);
      return o("WAResultOrError").makeResult({
        keysKeyTypeMixin: r.value,
        keysIdentityKeyMixin: a.value,
        keysBotIdentityKeyAuthMixin: i.success ? i.value : null,
        keysSignedPreKeyMixin: l.value,
        keysPreKeyMixin: s.success ? s.value : null,
        keysPQPreKeyMixin: u.success ? u.value : null,
        keysDeviceIdentityMixin: c.success ? c.value : null,
        paddingMixin: d.success ? d.value : null,
      });
    }
    l.parseKeyBundleMixin = e;
  },
  98,
);
