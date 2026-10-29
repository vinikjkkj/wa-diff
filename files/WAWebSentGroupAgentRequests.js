__d(
  "WAWebSentGroupAgentRequests",
  [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WASentGroupAgentRequests",
      u = new Set();
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = S(n);
          if (i.length === 0) return null;
          var l = null;
          try {
            var u, c;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
            var d =
              (u = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
              null
                ? u
                : {};
            return (
              (l =
                a +
                ":" +
                t.toString() +
                ":" +
                r("WAWebPonyfillsCryptoRandomUUID")()),
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                s,
                babelHelpers.extends({}, d, ((c = {}), (c[l] = i), c)),
              ),
              l
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "recordSentGroupAgentRequests failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sent-group-agent-request-record-failed"),
              l
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (S(t).length === 0) return [];
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var a =
              (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
              null
                ? r
                : {},
            i = new Set(
              Object.keys(a)
                .filter(function (t) {
                  return b(t, e, n);
                })
                .flatMap(function (e) {
                  return a[e];
                }),
            ),
            l = t.filter(function (t) {
              return t.isFbidBot() && i.has(t.toString()) && !u.has(v(e, t));
            });
          return (
            l.forEach(function (t) {
              return u.add(v(e, t));
            }),
            l
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      t.forEach(function (t) {
        return u.delete(v(e, t));
      });
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = new Set(S(t));
          if (a.size !== 0) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
            var i =
                (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
                null
                  ? r
                  : {},
              l = !1,
              u = {};
            (Object.keys(i).forEach(function (t) {
              var r = i[t],
                o = b(t, e, n)
                  ? r.filter(function (e) {
                      return !a.has(e);
                    })
                  : r;
              ((l = l || o.length !== r.length), o.length > 0 && (u[t] = o));
            }),
              l &&
                (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                  s,
                  u,
                )));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var t =
              (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
              null
                ? e
                : {},
            n = new Set(Object.keys(t).map(C));
          return Array.from(n, function (e) {
            return o("WAWebWidFactory").createWid(e);
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e.split(":")[1];
    }
    function b(e, t, n) {
      return n != null ? e === n : C(e) === t.toString();
    }
    function v(e, t) {
      return e.toString() + " " + t.toString();
    }
    function S(e) {
      return e
        .filter(function (e) {
          return e.isFbidBot();
        })
        .map(String);
    }
    ((l.recordSentGroupAgentRequests = c),
      (l.claimSentGroupAgentRequests = m),
      (l.unclaimSentGroupAgentRequests = _),
      (l.removeSentGroupAgentRequests = f),
      (l.getSentGroupAgentRequestGroupWids = h));
  },
  98,
);
