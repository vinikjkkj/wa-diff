__d(
  "WAWebApiPeerMessageStore",
  ["WAWebOutgoingPeerMsgKey", "WAWebSchemaPeerMessage"],
  function (t, n, r, o, a, i, l) {
    var e = ["kind"];
    function s(t) {
      var n = t.map(function (t) {
        var n = t.kind,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, r, {
          id: String(t.id),
          to: String(t.to),
          subtype: String(t.subtype),
        });
      });
      return o("WAWebSchemaPeerMessage").getPeerMessageTable().bulkCreate(n);
    }
    async function u(e) {
      var t = await o("WAWebSchemaPeerMessage")
        .getPeerMessageTable()
        .get(
          o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(e).toString(),
        );
      return t != null;
    }
    function c(e) {
      return o("WAWebSchemaPeerMessage")
        .getPeerMessageTable()
        .remove(
          o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(e).toString(),
        );
    }
    ((l.storePeerMessages = s),
      (l.hasPeerMessage = u),
      (l.deletePeerMessage = c));
  },
  98,
);
