__d(
  "WALoggerUtils",
  ["WAHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (typeof e == "string") return "'" + e + "'";
      if (e == null || typeof e != "object") return String(e);
      if (Array.isArray(e)) return "[" + e.join(",") + "]";
      if (e instanceof Uint8Array) {
        if (e.length < 64) return "<<" + s(e) + ">>";
        var t = e.subarray(0, 32);
        return "<<" + s(t) + ", " + (e.length - t.length) + " more bytes>>";
      } else
        return e instanceof Error
          ? e.name
            ? "(" + e.name + ")"
            : ""
          : e.toString === Object.prototype.toString
            ? JSON.stringify(e, function (e, t) {
                return e ? String(t) : t;
              })
            : String(e);
    }
    function s(e) {
      for (var t = !0, n = e.length; t && n; ) {
        var r = e[--n];
        t = 32 <= r && r < 127;
      }
      return t
        ? JSON.stringify(String.fromCharCode.apply(String, e))
        : o("WAHex").toHex(e);
    }
    function u(t, n) {
      var r = [t[0]];
      return (
        n.forEach(function (n, o) {
          r.push(e(n), t[o + 1]);
        }),
        r.join("")
      );
    }
    function c(e) {
      return e;
    }
    function d(e) {
      return e * 100 + "%";
    }
    ((l.debugStr = e),
      (l.rebuildTemplate = u),
      (l.dynamicLoggingSampling = c),
      (l.loggingSamplingAsString = d));
  },
  98,
);
