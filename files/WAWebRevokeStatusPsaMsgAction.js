__d(
  "WAWebRevokeStatusPsaMsgAction",
  [
    "Promise",
    "WALogger",
    "WAWebDBMessageDelete",
    "WAWebStatusCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n.length > 0 &&
            (t.revokeMsgs(n),
            yield o("WAWebDBMessageDelete").removeMessagesFromHistory(n),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "revokeStatusPSA completed",
                  ])),
              )
              .tags("revoke-status-psa"));
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      var e = o("WAWebStatusCollection").StatusCollection.getPSAStatus();
      if (!e) return (s || (s = n("Promise"))).resolve();
      var t = e.msgs.map(function (e) {
        return e.id.toString();
      });
      return u(e, t);
    }
    l.revokeAllStatusPSA = d;
  },
  98,
);
