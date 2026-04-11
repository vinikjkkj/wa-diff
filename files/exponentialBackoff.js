__d(
  "exponentialBackoff",
  ["MqttEnv"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      t === void 0 && (t = null);
      var n = null,
        r = 0;
      function a() {
        for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        var s = function () {
          e.apply(t, i);
        };
        if (n === null) {
          var u = Math.max(
            0,
            Math.pow(2, Math.min(r, 6)) *
              (1e3 + o("MqttEnv").Env.random() * 100) -
              2e3,
          );
          n = o("MqttEnv").Env.setTimeout(function () {
            (s(), (n = null));
          }, u);
        }
        r++;
      }
      return (
        (a.reset = function () {
          ((r = 0),
            n != null && (o("MqttEnv").Env.clearTimeout(n), (n = null)));
        }),
        (a.isPending = function () {
          return n != null;
        }),
        a
      );
    }
    l.default = e;
  },
  98,
);
