__d(
  "WASmaxInWaffleGenerateWAEntACUserResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInWaffleIQResultResponseMixin",
    "WASmaxInWaffleRSAEncryptionMetadataMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "wf_notif_id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 64);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "encryption_metadata",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChildWithTag(t, "wf_notif_id", e);
      if (!i.success) return i;
      var l = o(
        "WASmaxInWaffleRSAEncryptionMetadataMixin",
      ).parseRSAEncryptionMetadataMixin(a.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInWaffleIQResultResponseMixin",
      ).parseIQResultResponseMixin(t, n);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { encryptionMetadataRSAEncryptionMetadataMixin: l.value },
              s.value,
              { wfNotifId: i.value },
            ),
          )
        : s;
    }
    ((l.parseGenerateWAEntACUserResponseSuccessWfNotifId = e),
      (l.parseGenerateWAEntACUserResponseSuccess = s));
  },
  98,
);
