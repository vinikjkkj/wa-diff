__d(
  "WAWebTrustedContactsUtils",
  ["$InternalEnum", "WABase64", "WATimeUtils", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = 15552e3,
      s = n("$InternalEnum")({ Sender: "sender", Receiver: "receiver" });
    function u(t) {
      var n = t === s.Receiver ? "tctoken_duration" : "tctoken_duration_sender";
      return Math.min(o("WAWebABProps").getABPropConfigValue(n), e);
    }
    function c(e, t) {
      return e < d(t);
    }
    function d(e) {
      var t =
          e === s.Receiver
            ? "tctoken_num_buckets"
            : "tctoken_num_buckets_sender",
        n = o("WAWebABProps").getABPropConfigValue(t),
        r = u(e),
        a = Math.floor(o("WATimeUtils").unixTime() / r),
        i = a - (n - 1);
      return o("WATimeUtils").castToUnixTime(i * r);
    }
    function m(e) {
      if (e == null) return !0;
      var t = o("WAWebABProps").getABPropConfigValue("tctoken_duration_sender"),
        n = Math.floor(o("WATimeUtils").unixTime() / t),
        r = Math.floor(e / t);
      return n > r;
    }
    function p(e) {
      return o("WABase64").encodeB64(e);
    }
    ((l.TcTokenMode = s),
      (l.getTcTokenDuration = u),
      (l.isTokenExpired = c),
      (l.tokenExpirationCutoff = d),
      (l.shouldSendNewToken = m),
      (l.encodeTcTokenForMex = p));
  },
  98,
);
