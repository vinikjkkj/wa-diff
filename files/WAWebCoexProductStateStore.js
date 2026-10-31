__d(
  "WAWebCoexProductStateStore",
  [
    "WALogger",
    "WAWebCoexCanonicalMembership",
    "WAWebEventEmitter",
    "WAWebUserPrefsIndexedDBStorage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WACoexProductState",
      u = 2,
      c = 1,
      d = new (r("WAWebEventEmitter"))();
    function m() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
      if (e == null || typeof e != "object") return null;
      var t = e.fetchedAtMs,
        n = e.isBspHosted,
        r = e.surfaces,
        a = e.version;
      if (typeof t != "number" || !Array.isArray(r)) return null;
      var i = [],
        l = function (t) {
          var e = o("WAWebCoexCanonicalMembership").COEX_PRODUCT_SURFACES.find(
            function (e) {
              return e === t;
            },
          );
          if (e == null) return { v: null };
          i.push(e);
        },
        d;
      for (var m of r) if (((d = l(m)), d)) return d.v;
      return a === c
        ? { surfaces: i, isBspHosted: !1, fetchedAtMs: 0 }
        : a !== u || typeof n != "boolean"
          ? null
          : { surfaces: i, isBspHosted: n, fetchedAtMs: t };
    }
    function p(e) {
      var t = m();
      o("WAWebUserPrefsIndexedDBStorage")
        .userPrefsIdb.set(s, {
          version: u,
          surfaces: [].concat(e.surfaces),
          isBspHosted: e.isBspHosted,
          fetchedAtMs: e.fetchedAtMs,
        })
        .catch(y);
      var n = t == null || t.isBspHosted !== e.isBspHosted || !h(t, e);
      return (n && d.trigger("change", e), n);
    }
    function _() {
      var e = m() != null;
      (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s).catch(y),
        e && d.trigger("change", null));
    }
    function f(e) {
      d.on("change", e);
    }
    function g(e) {
      d.off("change", e);
    }
    function h(e, t) {
      var n = new Set(t.surfaces);
      return (
        new Set(e.surfaces).size === n.size &&
        e.surfaces.every(function (e) {
          return n.has(e);
        })
      );
    }
    function y(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "coexProductStateStore: write failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("coex-product-state-write-failed");
    }
    ((l.getCoexProductState = m),
      (l.saveCoexProductState = p),
      (l.clearCoexProductState = _),
      (l.subscribeToCoexProductStateChanges = f),
      (l.unsubscribeFromCoexProductStateChanges = g));
  },
  98,
);
