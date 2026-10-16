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
      u = 1,
      c = new (r("WAWebEventEmitter"))();
    function d() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
      if (e == null || typeof e != "object") return null;
      var t = e.fetchedAtMs,
        n = e.surfaces,
        r = e.version;
      if (r !== u || typeof t != "number" || !Array.isArray(n)) return null;
      var a = [],
        i = function (t) {
          var e = o("WAWebCoexCanonicalMembership").COEX_PRODUCT_SURFACES.find(
            function (e) {
              return e === t;
            },
          );
          if (e == null) return { v: null };
          a.push(e);
        },
        l;
      for (var c of n) if (((l = i(c)), l)) return l.v;
      return { surfaces: a, fetchedAtMs: t };
    }
    function m(e) {
      var t = d();
      (o("WAWebUserPrefsIndexedDBStorage")
        .userPrefsIdb.set(s, {
          version: u,
          surfaces: [].concat(e.surfaces),
          fetchedAtMs: e.fetchedAtMs,
        })
        .catch(h),
        (t == null || !g(t, e)) && c.trigger("change", e));
    }
    function p() {
      var e = d() != null;
      (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(s).catch(h),
        e && c.trigger("change", null));
    }
    function _(e) {
      c.on("change", e);
    }
    function f(e) {
      c.off("change", e);
    }
    function g(e, t) {
      var n = new Set(t.surfaces);
      return (
        new Set(e.surfaces).size === n.size &&
        e.surfaces.every(function (e) {
          return n.has(e);
        })
      );
    }
    function h(t) {
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
    ((l.getCoexProductState = d),
      (l.saveCoexProductState = m),
      (l.clearCoexProductState = p),
      (l.subscribeToCoexProductStateChanges = _),
      (l.unsubscribeFromCoexProductStateChanges = f));
  },
  98,
);
