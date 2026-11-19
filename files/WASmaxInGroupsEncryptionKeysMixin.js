__d(
  "WASmaxInGroupsEncryptionKeysMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "membership_form_key");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "key_id", 0, 2147483647);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "key_update_time",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(e, 1, 65536);
      return a.success
        ? o("WAResultOrError").makeResult({
            keyId: n.value,
            keyUpdateTime: r.value,
            elementValue: a.value,
          })
        : a;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "encryption_keys");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "group_encryption_key",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "membership_form_key",
        e,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        r.value,
        "key_id",
        0,
        2147483647,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrIntRange(
        r.value,
        "key_update_time",
        0,
        void 0,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 65536);
      return s.success
        ? o("WAResultOrError").makeResult({
            groupEncryptionKeyKeyId: i.value,
            groupEncryptionKeyKeyUpdateTime: l.value,
            groupEncryptionKeyElementValue: s.value,
            membershipFormKey: a.value,
          })
        : s;
    }
    ((l.parseEncryptionKeysMembershipFormKey = e),
      (l.parseEncryptionKeysMixin = s));
  },
  98,
);
