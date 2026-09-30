__d(
  "WebBloksMinsGetByValOr",
  ["WebBloksActionContainerUtils", "WebBloksErrors", "WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      if (Array.isArray(t)) {
        var a = o("WebBloksMinsUtils").toVectorIndex(n);
        if (a == null)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "invalid get_by_val_or vector index",
            e,
          );
        return a < t.length ? t[a] : r;
      }
      var i = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
          e,
          t,
          "get_by_val_or 1st argument must be a container",
        ),
        l = typeof n == "string" ? n : String(n);
      return Object.hasOwnProperty.call(i, l) ? i[l] : r;
    }
    l.default = e;
  },
  98,
);
