__d(
  "WebBloksMinsInByVal",
  ["WebBloksActionContainerUtils", "WebBloksErrors", "WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (Array.isArray(t)) {
        var r = o("WebBloksMinsUtils").toVectorIndex(n);
        if (r == null)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "invalid get_by_val vector index",
            e,
          );
        return r < t.length;
      }
      var a = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
          e,
          t,
          "in_by_val 2nd argument must be a container",
        ),
        i = typeof n == "string" ? n : String(n);
      return Object.hasOwnProperty.call(a, i);
    }
    l.default = e;
  },
  98,
);
