__d(
  "WAFlowsGlobalContext",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    window.wae = {};
    function e(e, t) {
      var n,
        r =
          ((n = {}),
          (n["_" + e + "_"] = { value: "string", writable: !0 }),
          (n[e] = {
            get: function () {
              return this["_" + e];
            },
            set: function (r) {
              ((this["_" + e] = r),
                t.forEach(function (e) {
                  return e(r);
                }));
            },
          }),
          n);
      Object.defineProperties(window.wae, r);
    }
    i.observe = e;
  },
  66,
);
