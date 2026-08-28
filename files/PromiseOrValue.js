__d(
  "PromiseOrValue",
  ["FBLogger", "isPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return (e || (e = r("isPromise")))(t) && (e || (e = r("isPromise")))(n)
        ? t.then(function (e) {
            return n.then(function (t) {
              return [e, t];
            });
          })
        : (e || (e = r("isPromise")))(t)
          ? t.then(function (e) {
              return [e, n];
            })
          : (e || (e = r("isPromise")))(n)
            ? n.then(function (e) {
                return [t, e];
              })
            : [t, n];
    }
    function u(t) {
      var n = t.find(e || (e = r("isPromise")));
      return n ? Promise.all(t) : t;
    }
    function c(t, n) {
      return (e || (e = r("isPromise")))(t) ? t.then(n) : n(t);
    }
    function d(t, n) {
      for (var o = n; ; ) {
        var a = t(o);
        if ((e || (e = r("isPromise")))(a))
          return a.then(function (e) {
            return e.action === "break" ? e.value : d(t, e.value);
          });
        if (a.action === "break") return a.value;
        o = a.value;
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "wrong loop break in promiseOrValue",
      );
    }
    ((l.all2 = s), (l.all = u), (l.map = c), (l.loop = d));
  },
  98,
);
