__d(
  "CometResourceScheduler",
  ["Bootloader", "ErrorGuard"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = new Set(),
      c = [],
      d = {
        executedDeferredCallback: 0,
        getPendingCallbacks: function () {
          return c;
        },
        queuedDeferredCallback: 0,
      };
    function m(e) {
      var t = [];
      for (var n of e) u.has(n) || (u.add(n), t.push(n));
      t.length && _(t);
    }
    function p(e) {
      (c.push(e), s.size === 0 && f());
    }
    function _(e) {
      (e.forEach(function (e) {
        return s.add(e);
      }),
        r("Bootloader").loadResources(e, {
          onAll: function () {
            (e.forEach(function (e) {
              return s.delete(e);
            }),
              !s.size && f());
          },
        }));
    }
    function f() {
      var t = c;
      ((c = []),
        t.forEach(function (t) {
          return (e || (e = r("ErrorGuard"))).applyWithGuard(t, null, []);
        }));
    }
    ((l.__debug = d), (l.registerHighPriHashes = m), (l.onHighPriComplete = p));
  },
  98,
);
