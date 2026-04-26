__d(
  "WAWebOpaqueDataEncryption",
  [
    "WAWebProtobufsMdStorageAccountLinkingOpaqueData.pb",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["accesstoken", "fbid", "nonce", "encryptedPassword"]);
    function s(t) {
      var n = {};
      Object.keys(t).forEach(function (r) {
        e.has(r) && ((n[r] = t[r]), delete t[r]);
      });
      var r = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsMdStorageAccountLinkingOpaqueData.pb")
          .AccountLinkingOpaqueDataSpec,
        n,
      );
      return r.readBuffer();
    }
    function u(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsMdStorageAccountLinkingOpaqueData.pb")
          .AccountLinkingOpaqueDataSpec,
        e,
      );
      return t;
    }
    ((l.moveEncFieldToOpaqueData = s), (l.moveOpaqueDataToEncField = u));
  },
  98,
);
