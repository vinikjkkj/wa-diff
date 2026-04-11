__d(
  "TimerStorage",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT",
      },
      l = {};
    Object.keys(e).forEach(function (e) {
      return (l[e] = {});
    });
    var s = babelHelpers.extends({}, e, {
        set: function (t, n) {
          l[t][n] = !0;
        },
        unset: function (t, n) {
          delete l[t][n];
        },
        clearAll: function (t, n) {
          (Object.keys(l[t]).forEach(n), (l[t] = {}));
        },
        getStorages: function () {
          return {};
        },
      }),
      u = s;
    i.default = u;
  },
  66,
);
