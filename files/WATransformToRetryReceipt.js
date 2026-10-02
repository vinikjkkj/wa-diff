__d(
  "WATransformToRetryReceipt",
  ["WAParseKeyBundleMixing", "WASignalOther", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.aggregate,
        n = t.offline,
        r = t.recipient,
        a = t.retryMixin,
        i = a.keyBundleMixin,
        l = a.registrationElementValue,
        s = a.retryCount,
        u = a.retryId,
        c = a.retryT,
        d = a.retryV,
        m = a.type,
        p = o("WASignalOther").castRegistrationIdFromBytes(l);
      return {
        stanzaId: e.stanzaId,
        retryStanzaId: u,
        receiptSender: e.receiptSender,
        retryCount: s,
        regId: p,
        offline: n,
        timestamp: o("WATimeUtils").castToUnixTime(c),
        keys: i ? o("WAParseKeyBundleMixing").parseKeyBundleMixin(p, i) : null,
        recipient: r,
      };
    };
    l.transformToRetryReceipt = e;
  },
  98,
);
