__d(
  "WebBloksMinsDelByVal",
  ["WebBloksActionContainerUtils", "WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WebBloksActionContainerUtils").assertWebBloksPlainMap(
        e,
        t,
        "del_by_val 1st argument must be a map",
      );
      try {
        delete r[typeof n == "string" ? n : String(n)];
      } catch (t) {
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "modifying immutable container",
          e,
        );
      }
    }
    l.default = e;
  },
  98,
);
