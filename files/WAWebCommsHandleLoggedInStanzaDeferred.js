__d(
  "WAWebCommsHandleLoggedInStanzaDeferred",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("WAWebCommsHandleLoggedInStanza").__setRef(
        "WAWebCommsHandleLoggedInStanzaDeferred",
      ),
      s = null,
      u = null;
    async function c() {
      return (
        u == null &&
          (u = e.load().then(function (e) {
            return ((s = e), e);
          })),
        u
      );
    }
    async function d(e, t) {
      if (s != null) return s.handleLoggedInStanza(e, t);
      var n = await c();
      return n.handleLoggedInStanza(e, t);
    }
    l.handleLoggedInStanza = d;
  },
  98,
);
