__d(
  "WAWebSentGroupAgentRequests",
  [
    "WALogger",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WASentGroupAgentRequests",
      u = new Set();
    async function c(t, n, a) {
      var i = y(n);
      if (i.length === 0) return null;
      var l = null;
      try {
        var u, c;
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
        var d =
          (u = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) != null
            ? u
            : {};
        return (
          (l =
            a +
            ":" +
            t.toString() +
            ":" +
            r("WAWebPonyfillsCryptoRandomUUID")()),
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
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
    }
    async function d(e, t, n) {
      var r;
      if (y(t).length === 0) return [];
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
      var a =
          (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) != null
            ? r
            : {},
        i = new Set(
          Object.keys(a)
            .filter(function (t) {
              return g(t, e, n);
            })
            .flatMap(function (e) {
              return a[e];
            }),
        ),
        l = t.filter(function (t) {
          return t.isFbidBot() && i.has(t.toString()) && !u.has(h(e, t));
        });
      return (
        l.forEach(function (t) {
          return u.add(h(e, t));
        }),
        l
      );
    }
    function m(e, t) {
      t.forEach(function (t) {
        return u.delete(h(e, t));
      });
    }
    async function p(e, t, n) {
      var r,
        a = new Set(y(t));
      if (a.size !== 0) {
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
        var i =
            (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) !=
            null
              ? r
              : {},
          l = !1,
          u = {};
        (Object.keys(i).forEach(function (t) {
          var r = i[t],
            o = g(t, e, n)
              ? r.filter(function (e) {
                  return !a.has(e);
                })
              : r;
          ((l = l || o.length !== r.length), o.length > 0 && (u[t] = o));
        }),
          l &&
            (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(s, u)));
      }
    }
    async function _() {
      var e;
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
      var t =
          (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s)) != null
            ? e
            : {},
        n = new Set(Object.keys(t).map(f));
      return Array.from(n, function (e) {
        return o("WAWebWidFactory").createWid(e);
      });
    }
    function f(e) {
      return e.split(":")[1];
    }
    function g(e, t, n) {
      return n != null ? e === n : f(e) === t.toString();
    }
    function h(e, t) {
      return e.toString() + " " + t.toString();
    }
    function y(e) {
      return e
        .filter(function (e) {
          return e.isFbidBot();
        })
        .map(String);
    }
    ((l.recordSentGroupAgentRequests = c),
      (l.claimSentGroupAgentRequests = d),
      (l.unclaimSentGroupAgentRequests = m),
      (l.removeSentGroupAgentRequests = p),
      (l.getSentGroupAgentRequestGroupWids = _));
  },
  98,
);
