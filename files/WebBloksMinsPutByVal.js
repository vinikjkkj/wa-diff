__d(
  "WebBloksMinsPutByVal",
  [
    "WebBloksActionContainerUtils",
    "WebBloksErrors",
    "WebBloksMinsUtils",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      if (Array.isArray(t)) {
        var a = o("WebBloksUtils").cast(t),
          i = o("WebBloksMinsUtils").toVectorIndex(n);
        if (i == null)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "invalid put_by_val vector index",
            e,
          );
        if (i > a.length)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "vector index out of range",
            e,
          );
        i === a.length ? a.push(r) : (a[i] = r);
        return;
      }
      if (t == null || typeof t != "object")
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "put_by_val 1st argument must be a container",
          e,
        );
      var l = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
          e,
          t,
          "put_by_val 1st argument must be a container",
        ),
        s = typeof n == "string" ? n : String(n);
      o("WebBloksActionContainerUtils").writeWebBloksPlainMapValue(l, s, r);
    }
    l.default = e;
  },
  98,
);
