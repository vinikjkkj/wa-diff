__d(
  "WAWebRevokeStatusPsaMsgAction",
  ["WALogger", "WAWebDBMessageDelete", "WAWebStatusCollection"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      n.length > 0 &&
        (t.revokeMsgs(n),
        await o("WAWebDBMessageDelete").removeMessagesFromHistory(n),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "revokeStatusPSA completed",
              ])),
          )
          .tags("revoke-status-psa"));
    }
    function u() {
      var e = o("WAWebStatusCollection").StatusCollection.getPSAStatus();
      if (!e) return Promise.resolve();
      var t = e.msgs.map(function (e) {
        return e.id.toString();
      });
      return s(e, t);
    }
    l.revokeAllStatusPSA = u;
  },
  98,
);
