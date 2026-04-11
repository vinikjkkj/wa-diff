__d(
  "getSafeQplErrorMessage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return "<null>";
      if (
        e.messageFormat != null &&
        typeof e.messageFormat == "string" &&
        e.messageParams != null &&
        Array.isArray(e.messageParams)
      )
        try {
          return l.apply(void 0, [e.messageFormat].concat(e.messageParams));
        } catch (e) {}
      return e instanceof Error || typeof e == "string"
        ? e.toString()
        : "<unknown>";
    }
    function l(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      var o = 0;
      return e.replace(/%s/g, function () {
        return String(n[o++]);
      });
    }
    i.getSafeQPLErrorMessage = e;
  },
  66,
);
