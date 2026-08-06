__d(
  "safeStringify",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e != null && typeof e == "object")
        try {
          var t, n;
          return typeof e.toString == "function" &&
            e.toString() !== Object.prototype.toString()
            ? "[object toString='" + e.toString() + "']"
            : "[object " +
                ((t = (n = e.constructor) == null ? void 0 : n.name) != null
                  ? t
                  : "Unknown") +
                "]";
        } catch (e) {
          return "Failed to stringify object";
        }
      return "Value is not an object";
    }
    function l(t) {
      if (t == null || typeof t != "object")
        return "Data is not valid to stringify";
      var n = new Set();
      try {
        var r = JSON.stringify(t, function (t, r) {
          return typeof r == "function"
            ? "[function]"
            : typeof r == "object" && r != null
              ? r.constructor === Array
                ? r
                : r.constructor === Object ||
                    r.constructor === Set ||
                    r.constructor === Map
                  ? n.has(r)
                    ? "[circular reference toString='" + e(r) + "']"
                    : (n.add(r),
                      r instanceof Map || r instanceof Set ? Array.from(r) : r)
                  : e(r)
              : r;
        });
        return r;
      } catch (e) {
        return "Data is not valid to stringify";
      }
    }
    i.default = l;
  },
  66,
);
