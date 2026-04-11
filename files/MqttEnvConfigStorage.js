__d(
  "MqttEnvConfigStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "mqtt:";
    function u(t, n) {
      var o = (e || (e = r("WebStorage"))).getLocalStorage();
      if (o) {
        var a = o.getItem(s + t);
        if (a != null) return a;
      }
      return n;
    }
    function c(t, n) {
      var o = (e || (e = r("WebStorage"))).getLocalStorage();
      if (o)
        if (n == null) o.removeItem(s + t);
        else var a = (e || (e = r("WebStorage"))).setItemGuarded(o, s + t, n);
    }
    ((l.configRead = u), (l.configWrite = c));
  },
  98,
);
