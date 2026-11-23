__d(
  "MAIBASupportChatHostState",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = [],
      c = new Set();
    function d() {
      for (var e of c) e();
    }
    function m(e) {
      var t = { openSupportChat: e };
      return (
        u.push(t),
        d(),
        function () {
          var e = u.indexOf(t);
          e !== -1 && (u.splice(e, 1), d());
        }
      );
    }
    function p(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function _() {
      return u.length > 0 ? u[u.length - 1].openSupportChat : null;
    }
    function f() {
      return null;
    }
    function g() {
      return s(p, _, f);
    }
    ((l.claimMAIBASupportChatHost = m),
      (l.getMAIBASupportChatHost = _),
      (l.useMAIBASupportChatHost = g));
  },
  98,
);
