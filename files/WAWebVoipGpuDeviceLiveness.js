__d(
  "WAWebVoipGpuDeviceLiveness",
  ["Promise", "WAWebNoop", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          t.catch(r("WAWebNoop"));
          var a = null,
            i = new (e || (e = n("Promise")))(function (e, t) {
              a = self.setTimeout(function () {
                t(new u(o.label + ": timed out after " + o.timeoutMs + "ms"));
              }, o.timeoutMs);
            }),
            l = [t, i],
            c = o.lostPromise;
          if (c != null) {
            var d = c.then(function () {
              throw new s(o.label + ": device lost");
            });
            (d.catch(r("WAWebNoop")), l.push(d));
          }
          try {
            return yield (e || (e = n("Promise"))).race(l);
          } finally {
            a != null && self.clearTimeout(a);
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.DeviceLostError = s),
      (l.DeviceLivenessTimeoutError = u),
      (l.withDeviceLiveness = c));
  },
  98,
);
