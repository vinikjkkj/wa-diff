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
        if (!t) {
          var e = new TypeError(
            "DataStore.set: namespace is required, got " + typeof t,
          );
          throw (e.stack, e);
        }
        var o = p(t);
        return ((o[n] = r), t);
      },
      get: function (t, n, r) {
        if (!t) {
          var e = new TypeError(
            "DataStore.get: namespace is required, got " + typeof t,
          );
          throw (e.stack, e);
        }
        var o = p(t),
          a = o[n];
        if (a === void 0 && t.getAttribute != null)
          if (t.hasAttribute != null && !t.hasAttribute("data-" + n))
            a = void 0;
          else {
            var i = t.getAttribute("data-" + n);
            a = i === null ? void 0 : i;
          }
        return (r !== void 0 && a === void 0 && (a = o[n] = r), a);
      },
      remove: function (r, o) {
        if (!r) {
          var t = new TypeError(
            "DataStore.remove: namespace is required, got " + typeof r,
          );
          throw (t.stack, t);
        }
        var a = p(r),
          i = a[o];
        return (delete a[o], (e || (e = n("isEmpty")))(a) && _.purge(r), i);
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
