__d(
  "WASmaxInPrivacyPrivacyContactListIdentifierMixin",
  ["WAResultOrError", "WASmaxInPrivacyContactListIds"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInPrivacyContactListIds").parseContactListIds(e);
      return t.success
        ? o("WAResultOrError").makeResult({ contactListIds: t.value })
        : t;
    }
    l.parsePrivacyContactListIdentifierMixin = e;
  },
  98,
);
