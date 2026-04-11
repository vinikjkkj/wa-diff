__d(
  "CPUPressure",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "PressureObserver" in window,
      l = new Set(),
      s = !1,
      u = "nominal";
    function c() {
      return u;
    }
    function d() {
      if (!s) {
        if (e)
          try {
            var t = new window.PressureObserver(function (e) {
              e.forEach(function (e) {
                ((u = e.state),
                  l.forEach(function (t) {
                    t(e);
                  }));
              });
            });
            t.observe("cpu", { sampleInterval: 1e3 });
          } catch (e) {}
        s = !0;
      }
    }
    function m(t) {
      return e
        ? (l.add(t),
          function () {
            l.delete(t);
          })
        : function () {};
    }
    ((i.canUseCPUPressureAPI = e),
      (i.getCurrentState = c),
      (i.init = d),
      (i.subscribe = m));
  },
  66,
);
