__d(
  "WAWebAddonEncryptAddonMsgData",
  [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessRevokeDataUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
      if (e.type !== t)
        return e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke
          ? o("WAWebAddonProcessRevokeDataUtils").protocolRevokeToRevokeMsgData(
              e,
            )
          : e;
    }
    function s(t, n) {
      var r = e(t);
      if (r == null) {
        var a = o("WAWebAddonPluginProcessor").getAddonProcessor(t),
          i = a.convert,
          l = i.toDualDecryptedMsgData,
          s = i.toDualEncryptedMsgData;
        if (!(s == null || l == null))
          return {
            decrypt: function () {
              return l(t, n);
            },
            encrypt: function () {
              return s(t, n);
            },
          };
      }
    }
    l.createDualEncryptionHelper = s;
  },
  98,
);
