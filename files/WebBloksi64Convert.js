__d(
  "WebBloksi64Convert",
  ["WebBloksErrors", "WebBloksInt64"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = /^(-?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/.exec(e);
      if (r == null) return e;
      var o = r[1],
        a = (t = r[2]) != null ? t : "",
        i = (n = r[3]) != null ? n : "",
        l = a + i;
      if (l === "") return e;
      var s = r[4] != null ? parseInt(r[4], 10) : 0,
        u = a.length + s,
        c;
      return (
        u <= 0
          ? (c = "0")
          : u >= l.length
            ? (c = l + "0".repeat(u - l.length))
            : (c = l.substring(0, u)),
        (c = c.replace(/^0+(?=\d)/, "")),
        c === "0" ? "0" : o + c
      );
    }
    function s(t, n) {
      try {
        var a = r("WebBloksInt64").fromString(e(String(n)));
        return a.toString();
      } catch (e) {
        var i = e instanceof Error ? e.message : "Failed to convert to i64";
        throw new (o("WebBloksErrors").WebBloksScriptError)(i, t);
      }
    }
    l.default = s;
  },
  98,
);
