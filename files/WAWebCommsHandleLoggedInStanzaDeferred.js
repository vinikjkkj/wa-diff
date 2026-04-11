__d(
  "WAWebCommsHandleLoggedInStanzaDeferred",
  ["asyncToGeneratorRuntime", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("WAWebCommsHandleLoggedInStanza").__setRef(
        "WAWebCommsHandleLoggedInStanzaDeferred",
      ),
      s = null,
      u = null;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            u == null &&
              (u = e.load().then(function (e) {
                return ((s = e), e);
              })),
            u
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (s != null) return s.handleLoggedInStanza(e, t);
          var n = yield c();
          return n.handleLoggedInStanza(e, t);
        })),
        p.apply(this, arguments)
      );
    }
    l.handleLoggedInStanza = m;
  },
  98,
);
