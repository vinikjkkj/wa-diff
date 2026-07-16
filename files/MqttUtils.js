__d(
  "MqttUtils",
  ["MqttEnv", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return u(e, "sid", t.toString());
    }
    function s(e, t) {
      var n = e;
      return (
        t.forEach(function (e, t) {
          n = u(n, t, e);
        }),
        n
      );
    }
    function u(e, t, n) {
      return e.indexOf("?") > 0 ? e + "&" + t + "=" + n : e + "?" + t + "=" + n;
    }
    function c() {
      return Math.floor(o("MqttEnv").Env.random() * Number.MAX_SAFE_INTEGER);
    }
    function d(e, t, n) {
      var r = arguments.length > 1 ? e.then(t, n) : e;
      r.then(null, function (e) {
        o("MqttEnv").Env.setTimeout(function () {
          if (e instanceof Error) throw e;
          var t = new Error("promiseDone");
          throw (t.stack, t);
        }, 0);
      });
    }
    function m(e, t, n, a) {
      var i = !1;
      (o("MqttEnv").Env.setTimeout(function () {
        if (!i) {
          i = !0;
          var e = r("err")("promise timeout");
          (e.stack, n(e));
        }
      }, a),
        d(
          e,
          function (e) {
            i || ((i = !0), t(e));
          },
          function (e) {
            i || ((i = !0), n(e));
          },
        ));
    }
    function p(e) {
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
    ((l.endpointWithSessionId = e),
      (l.endpointWithExtraParameters = s),
      (l.endpointWithExtraParameter = u),
      (l.generateSessionId = c),
      (l.promiseDone = d),
      (l.promiseDoneWithTimeout = m),
      (l.sprintf = p));
  },
  98,
);
