__d(
  "WebBloksArrayLength",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (Array.isArray(t) || typeof t == "string") return t.length;
      if (t != null && typeof t == "object") return Object.keys(t).length;
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "bk.action.array.Length expects an array, string or map",
        e,
      );
    }
    l.default = e;
  },
  98,
);
