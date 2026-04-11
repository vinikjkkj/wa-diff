__d(
  "DataStore",
  ["DataStoreConfig", "gkx", "isEmpty"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("DataStoreConfig").expandoKey,
      s = n("DataStoreConfig").useExpando,
      u = n("gkx")("25572") && window.WeakMap ? new window.WeakMap() : null,
      c = {},
      d = 1;
    function m(e) {
      if (typeof e == "string") return "str_" + e;
      var t;
      return (
        "elem_" + ((t = e.__FB_TOKEN) != null ? t : (e.__FB_TOKEN = [d++]))[0]
      );
    }
    function p(e) {
      if (u != null && typeof e == "object")
        return (u.get(e) === void 0 && u.set(e, {}), u.get(e));
      if (s && typeof e == "object") return e[l] || (e[l] = {});
      var t = m(e);
      return c[t] || (c[t] = {});
    }
    var _ = {
      set: function (t, n, r) {
        if (!t)
          throw new TypeError(
            "DataStore.set: namespace is required, got " + typeof t,
          );
        var e = p(t);
        return ((e[n] = r), t);
      },
      get: function (t, n, r) {
        if (!t)
          throw new TypeError(
            "DataStore.get: namespace is required, got " + typeof t,
          );
        var e = p(t),
          o = e[n];
        if (o === void 0 && t.getAttribute != null)
          if (t.hasAttribute != null && !t.hasAttribute("data-" + n))
            o = void 0;
          else {
            var a = t.getAttribute("data-" + n);
            o = a === null ? void 0 : a;
          }
        return (r !== void 0 && o === void 0 && (o = e[n] = r), o);
      },
      remove: function (r, o) {
        if (!r)
          throw new TypeError(
            "DataStore.remove: namespace is required, got " + typeof r,
          );
        var t = p(r),
          a = t[o];
        return (delete t[o], (e || (e = n("isEmpty")))(t) && _.purge(r), a);
      },
      purge: function (t) {
        if (u != null && typeof t == "object") return u.delete(t);
        s && typeof t == "object" ? delete t[l] : delete c[m(t)];
      },
      _storage: c,
    };
    a.exports = _;
  },
  null,
);
