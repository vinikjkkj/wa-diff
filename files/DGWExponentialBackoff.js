__d(
  "DGWExponentialBackoff",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = {
        maxRetries: 5,
        baseRetryInterval: 1e3,
        backoffFactor: Math.sqrt(2),
      },
      s = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.errors = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = l);
          try {
            return yield d(e, t);
          } catch (e) {
            throw e.errors[e.errors.length - 1];
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var n = 0, r = [], o = t.baseRetryInterval, a = t.backoffFactor;
            n <= t.maxRetries;
          ) {
            try {
              var i = yield e();
              return i;
            } catch (e) {
              r.push(e);
            }
            (yield p(o * Math.pow(a, n)), ++n);
          }
          throw new s("Max call count exceeded", r);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield new (e || (e = n("Promise")))(function (e) {
            return window.setTimeout(e, t);
          });
        })),
        _.apply(this, arguments)
      );
    }
    i.callWithExponentialBackoff = u;
  },
  66,
);
