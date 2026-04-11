__d(
  "WAWebApiPeerMessageStore",
  ["WAWebMsgKey", "WAWebSchemaPeerMessage", "WAWebUserPrefsMeUser"],
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
    function u(e) {
      var t = o("WAWebSchemaPeerMessage").getPeerMessageTable(),
        n = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          id: e,
        });
      return t.remove(n.toString());
    }
    ((l.storePeerMessages = s), (l.deletePeerMessage = u));
  },
  98,
);
