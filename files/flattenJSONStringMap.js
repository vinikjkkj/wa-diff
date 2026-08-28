__d(
  "flattenJSONStringMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return {};
      try {
        var t = JSON.parse(e);
        return typeof t != "object" || t === null || Array.isArray(t)
          ? {}
          : Object.fromEntries(
              Object.entries(t).map(function (e) {
                var t = e[0],
                  n = e[1];
                return [t, String(n)];
              }),
            );
      } catch (e) {
        return {};
      }
    }
    i.default = e;
  },
  66,
);
