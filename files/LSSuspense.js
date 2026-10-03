__d(
  "LSSuspense",
  ["PromiseAnnotate", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return { current: { error: e, state: "Error" } };
    }
    function u(e) {
      return { current: { state: "Done", value: e } };
    }
    function c(e) {
      var t = {
        current: {
          promise: e
            .then(function (e) {
              return ((t.current = { state: "Done", value: e }), e);
            })
            .catch(function (e) {
              t.current = { error: r("getErrorSafe")(e), state: "Error" };
            }),
          state: "Loading",
        },
      };
      return t;
    }
    function d() {
      return new WeakMap();
    }
    function m(e) {
      if (e.state === "Loading") throw e.promise;
      if (e.state === "Error") throw e.error;
      return e.value;
    }
    function p(e) {
      return m(e.current);
    }
    function _(t, n, a) {
      var i = t.get(n);
      if (i != null) return m(i);
      var l = a(),
        s = {
          promise: l
            .then(function (e) {
              return (t.set(n, { state: "Done", value: e }), e);
            })
            .catch(function (e) {
              t.set(n, { error: r("getErrorSafe")(e), state: "Error" });
            }),
          state: "Loading",
        },
        u = s.promise;
      if (u) {
        var c;
        (e || (e = o("PromiseAnnotate"))).setDisplayName(
          u,
          (c = (e || (e = o("PromiseAnnotate"))).getDisplayName(l)) != null
            ? c
            : "LSCollection",
        );
      }
      return (t.set(n, s), m(s));
    }
    var f = {
      getFromCollection: _,
      getOrSuspend: p,
      makeCollection: d,
      makeWithError: s,
      makeWithPromise: c,
      makeWithValue: u,
    };
    l.default = f;
  },
  98,
);
