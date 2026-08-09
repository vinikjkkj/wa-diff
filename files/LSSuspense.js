__d(
  "LSSuspense",
  ["PromiseAnnotate"],
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
              t.current = { error: e, state: "Error" };
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
    function _(t, n, r) {
      var a = t.get(n);
      if (a != null) return m(a);
      var i = r(),
        l = {
          promise: i
            .then(function (e) {
              return (t.set(n, { state: "Done", value: e }), e);
            })
            .catch(function (e) {
              t.set(n, { error: e, state: "Error" });
            }),
          state: "Loading",
        },
        s = l.promise;
      if (s) {
        var u;
        (e || (e = o("PromiseAnnotate"))).setDisplayName(
          s,
          (u = (e || (e = o("PromiseAnnotate"))).getDisplayName(i)) != null
            ? u
            : "LSCollection",
        );
      }
      return (t.set(n, l), m(l));
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
