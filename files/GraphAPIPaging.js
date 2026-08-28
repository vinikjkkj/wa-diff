__d(
  "GraphAPIPaging",
  [
    "GraphAPICore",
    "Promise",
    "URI",
    "getByPath",
    "setByPath",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return p.bind(null, null, e, t, [], function (e) {
        return e.next;
      });
    }
    function c(e, t, n) {
      return p.bind(null, e, t, n, [], function (e) {
        return e.next;
      });
    }
    function d(t, o, a, i) {
      return function (l) {
        var u = r("getByPath")(l, t);
        return u
          ? (u.paging &&
              u.paging.next &&
              (u.next = function () {
                var t = new (e || (e = r("URI")))(u.paging.next);
                return r("GraphAPICore").promiseGet(
                  "GraphAPIPaging",
                  t.getPath(),
                  t.getQueryData(),
                  !1,
                );
              }),
            p(
              o,
              a,
              i,
              [],
              function (e) {
                return e.next;
              },
              u,
            ).then(function (e) {
              return (r("setByPath")(l, t, e), l);
            }))
          : (s || (s = n("Promise"))).resolve(l);
      };
    }
    function m(e, t, n) {
      return p.bind(null, e, t, n, [], function (e) {
        return e.previous;
      });
    }
    function p(e, t, o, a, i, l) {
      var u,
        c = r("whitelistObjectKeys")(l, [
          "data",
          "paging",
          "summary",
          "__isCached",
        ]),
        d = !1;
      l.data &&
        l.data.length > 0 &&
        (e && e(c), a.push(l.data), (d = o && o(c)));
      var m = null;
      if (t != null) {
        var _;
        ((m = 0),
          ((_ = l.data) == null ? void 0 : _.length) > 0 &&
            (m = t - l.data.length));
      }
      var f = i(l);
      return !d && f && (m == null || m > 0)
        ? f().then(function (t) {
            return p(e, m, o, a, i, t);
          })
        : (s || (s = n("Promise"))).resolve(
            babelHelpers.extends({}, c, { data: (u = []).concat.apply(u, a) }),
          );
    }
    ((l.allPages = u),
      (l.eachPage = c),
      (l.eachPageOfField = d),
      (l.eachPageReverse = m),
      (l._eachPage = p));
  },
  98,
);
