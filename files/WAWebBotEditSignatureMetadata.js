__d(
  "WAWebBotEditSignatureMetadata",
  ["WACryptoUtils", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.parentMsg,
        r = e.protocolMsg,
        o = e.sameBatchEdits,
        a = (t = s(n, r, o)) != null ? t : n,
        i = r.botSignatureVerificationMetadata,
        l = a.botSignatureVerificationMetadata;
      return c(i) || !c(l)
        ? i
        : d(a.unifiedResponseRawData, r.unifiedResponseRawData)
          ? l
          : i;
    }
    function s(e, t, n) {
      var o;
      if (
        n == null ||
        c(t.botSignatureVerificationMetadata) ||
        t.unifiedResponseRawData == null
      )
        return null;
      var a = e.id.toString(),
        i = (o = e.latestEditSenderTimestampMs) != null ? o : 0,
        l = r("nullthrows")(t.latestEditSenderTimestampMs);
      return n.editsNewestFirst.find(function (e) {
        var r = e.latestEditSenderTimestampMs;
        return (
          e !== t &&
          u(e, a, n.parentMsgsByKey) &&
          r != null &&
          r <= l &&
          r >= i &&
          c(e.botSignatureVerificationMetadata) &&
          d(e.unifiedResponseRawData, t.unifiedResponseRawData)
        );
      });
    }
    function u(e, t, n) {
      var r,
        o = e.protocolMessageKey;
      return (
        o != null &&
        ((r = n.get(o.toString())) == null ? void 0 : r.id.toString()) === t
      );
    }
    function c(e) {
      var t;
      return ((t = e == null ? void 0 : e.proofs.length) != null ? t : 0) > 0;
    }
    function d(e, t) {
      return (
        e != null && t != null && o("WACryptoUtils").uint8ArraysEqual(e, t)
      );
    }
    l.getEditedBotSignatureMetadata = e;
  },
  98,
);
