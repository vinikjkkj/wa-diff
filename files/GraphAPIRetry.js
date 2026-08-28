__d(
  "GraphAPIRetry",
  ["invariant", "FBLogger", "Promise", "URI"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 5,
      d = 500,
      m = 1;
    function p(e, t, o) {
      return (
        t === void 0 && (t = c),
        o === void 0 &&
          (o = function () {
            return !0;
          }),
        e().catch(function (a) {
          return new (u || (u = n("Promise")))(function (n, i) {
            (t && --t,
              r("FBLogger")("ads").warn(
                "GraphAPIRetry.retryGraphAPI: %s more retries",
                t,
              ),
              t === 0 || o(a) === !1
                ? i(a)
                : window.setTimeout(function () {
                    n(p(e, t, o));
                  }, d));
          });
        })
      );
    }
    function _(e, t, n, r) {
      var o = function () {
        return e.post(t);
      };
      return p(o, n, r);
    }
    function f(e, t, n) {
      var r = function () {
        return e.get(t);
      };
      return p(r, n);
    }
    function g(e, t, o, a, i) {
      return (
        o === void 0 && (o = c),
        a === void 0 && (a = d),
        i === void 0 && (i = m),
        e.get(t).catch(function (l) {
          return new (u || (u = n("Promise")))(function (n, s) {
            (o && --o,
              r("FBLogger")("ads").warn(
                "GraphAPIRetry.getWithCustomRetries: %s more retries, % ms delay",
                o,
                a,
              ),
              o === 0
                ? s(l)
                : window.setTimeout(function () {
                    n(g(e, t, o, a * i, i));
                  }, a));
          });
        })
      );
    }
    function h(t, n, o, a) {
      (o === void 0 && (o = c), n.limit || s(0, 5213));
      var i = 0,
        l = function () {
          if ((i++, i > 1)) n.limit = Math.max(1, Math.floor(n.limit / 2));
          else if (a != null)
            return t.clone().preloadedBy(a.asyncData, a.config);
          return t;
        },
        u = function () {
          return l().get(n);
        };
      return p(u, o).then(function (n) {
        var a;
        return (
          (a = n.paging) != null &&
            a.next &&
            (n.next = function () {
              var a = new (e || (e = r("URI")))(n.paging.next);
              return h(t, a.getQueryData(), o);
            }),
          n
        );
      });
    }
    ((l.postWithRetries_UNSAFE_IDEMPOTENT_ONLY = _),
      (l.getWithRetries = f),
      (l.getWithCustomRetries = g),
      (l.getPageWithRetries = h));
  },
  98,
);
