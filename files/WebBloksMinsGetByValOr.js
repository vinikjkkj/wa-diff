__d(
  "WebBloksMinsGetByValOr",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    var e = 4294967295;
    function s(t) {
      return typeof t != "number" || !Number.isInteger(t) || t < 0 || t > e
        ? null
        : t;
    }
    function u(e, t, n, r) {
      if (Array.isArray(t)) {
        var a = s(n);
        if (a == null)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "invalid get_by_val_or vector index",
            e,
          );
        return a < t.length ? t[a] : r;
      }
      if (t != null && typeof t == "object") {
        var i = t,
          l = typeof n == "string" ? n : String(n);
        return Object.hasOwn(i, l) ? i[l] : r;
      }
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "get_by_val_or 1st argument must be a container",
        e,
      );
    }
    l.default = u;
  },
  98,
);
