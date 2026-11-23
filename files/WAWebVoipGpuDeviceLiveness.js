__d(
  "WAWebVoipGpuDeviceLiveness",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function u(t, n) {
      t.catch(r("WAWebNoop"));
      var o = null,
        a = new Promise(function (e, t) {
          o = self.setTimeout(function () {
            t(new s(n.label + ": timed out after " + n.timeoutMs + "ms"));
          }, n.timeoutMs);
        }),
        i = [t, a],
        l = n.lostPromise;
      if (l != null) {
        var u = l.then(function () {
          throw new e(n.label + ": device lost");
        });
        (u.catch(r("WAWebNoop")), i.push(u));
      }
      try {
        return await Promise.race(i);
      } finally {
        o != null && self.clearTimeout(o);
      }
    }
    ((l.DeviceLostError = e),
      (l.DeviceLivenessTimeoutError = s),
      (l.withDeviceLiveness = u));
  },
  98,
);
