__d(
  "DataStore",
  ["DataStoreConfig", "gkx", "isEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("gkx")("25572") && window.WeakMap ? new window.WeakMap() : null,
      u = {},
      c = 1;
    function d(e) {
      if (typeof e == "string") return "str_" + e;
      var t;
      return (
        "elem_" + ((t = e.__FB_TOKEN) != null ? t : (e.__FB_TOKEN = [c++]))[0]
      );
    }
    function m(e) {
      if (s != null && typeof e == "object") {
        var t = s.get(e);
        return (t === void 0 && ((t = {}), s.set(e, t)), t);
      } else if (r("DataStoreConfig").useExpando && typeof e == "object")
        return (
          e[r("DataStoreConfig").expandoKey] ||
          (e[r("DataStoreConfig").expandoKey] = {})
        );
      var n = d(e);
      return u[n] || (u[n] = {});
    }
    var p = {
      set: function (t, n, r) {
        if (!t) {
          var e = new TypeError(
            "DataStore.set: namespace is required, got " + typeof t,
          );
          throw (e.stack, e);
        }
        var o = m(t);
        return ((o[n] = r), t);
      },
      get: function (t, n, r) {
        if (!t) {
          var e = new TypeError(
            "DataStore.get: namespace is required, got " + typeof t,
          );
          throw (e.stack, e);
        }
        var o = m(t),
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
      remove: function (n, o) {
        if (!n) {
          var t = new TypeError(
            "DataStore.remove: namespace is required, got " + typeof n,
          );
          throw (t.stack, t);
        }
        var a = m(n),
          i = a[o];
        return (delete a[o], (e || (e = r("isEmpty")))(a) && p.purge(n), i);
      },
      purge: function (t) {
        if (s != null && typeof t == "object") return s.delete(t);
        r("DataStoreConfig").useExpando && typeof t == "object"
          ? delete t[r("DataStoreConfig").expandoKey]
          : delete u[d(t)];
      },
      _storage: u,
    };
    i.exports = p;
  },
  34,
);
