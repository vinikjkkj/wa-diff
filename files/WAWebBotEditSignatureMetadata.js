__d(
  "WAWebBotEditSignatureMetadata",
  ["WACryptoUtils", "WAWebBotTypes", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.parentMsg,
        r = e.protocolMsg,
        o = e.sameBatchEdits,
        a = (t = d(n, r, o)) != null ? t : n,
        i = r.botSignatureVerificationMetadata,
        l = a.botSignatureVerificationMetadata;
      return p(i) || !p(l)
        ? i
        : _(a.unifiedResponseRawData, r.unifiedResponseRawData)
          ? l
          : i;
    }
    async function s(e) {
      var t = e.messageEdits,
        n = e.readStoredMsgs,
        r = t.filter(function (e) {
          var t = e.isLatest;
          return t;
        }),
        o = await u({ latestEdits: r, readStoredMsgs: n });
      for (var a of r) {
        var i = o.get(a.protocolMsg.id.toString()),
          l = a.editedMsgData;
        i != null &&
          l.unifiedResponseRawData &&
          (a.editedMsgData = babelHelpers.extends({}, l, {
            botSignatureVerificationMetadata: i,
          }));
      }
    }
    async function u(e) {
      var t = e.latestEdits,
        n = e.readStoredMsgs,
        r = new Map(),
        o = t.filter(function (e) {
          var t = e.parentMsg,
            n = e.protocolMsg;
          return c(t, n);
        });
      if (o.length === 0) return r;
      var a = await n(
        o.map(function (e) {
          var t = e.parentMsg;
          return t.id.toString();
        }),
      );
      return (
        o.forEach(function (e, t) {
          var n,
            o,
            i = e.protocolMsg,
            l =
              (n = a[t]) == null ? void 0 : n.botSignatureVerificationMetadata;
          l != null &&
            p(l) &&
            _(
              (o = a[t]) == null ? void 0 : o.unifiedResponseRawData,
              i.unifiedResponseRawData,
            ) &&
            r.set(i.id.toString(), l);
        }),
        r
      );
    }
    function c(e, t) {
      var n = t.botEditType,
        r = t.unifiedResponseRawData;
      return (
        r != null &&
        n !== o("WAWebBotTypes").BotMsgEditType.FIRST &&
        n !== o("WAWebBotTypes").BotMsgEditType.INNER &&
        !p(t.botSignatureVerificationMetadata) &&
        !(
          p(e.botSignatureVerificationMetadata) &&
          _(e.unifiedResponseRawData, r)
        )
      );
    }
    function d(e, t, n) {
      var o;
      if (
        n == null ||
        p(t.botSignatureVerificationMetadata) ||
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
          m(e, a, n.parentMsgsByKey) &&
          r != null &&
          r <= l &&
          r >= i &&
          p(e.botSignatureVerificationMetadata) &&
          _(e.unifiedResponseRawData, t.unifiedResponseRawData)
        );
      });
    }
    function m(e, t, n) {
      var r,
        o = e.protocolMessageKey;
      return (
        o != null &&
        ((r = n.get(o.toString())) == null ? void 0 : r.id.toString()) === t
      );
    }
    function p(e) {
      var t;
      return ((t = e == null ? void 0 : e.proofs.length) != null ? t : 0) > 0;
    }
    function _(e, t) {
      return (
        e != null && t != null && o("WACryptoUtils").uint8ArraysEqual(e, t)
      );
    }
    ((l.getEditedBotSignatureMetadata = e),
      (l.keepStoredBotSignatures = s),
      (l.findStoredBotSignatures = u));
  },
  98,
);
