__d(
  "DGWExponentialBackoff",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        maxRetries: 5,
        baseRetryInterval: 1e3,
        backoffFactor: Math.sqrt(2),
      },
      l = (function (e) {
        function t(t, n) {
          var r;
          return ((r = e.call(this, t) || this), (r.errors = n), r);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function s(t, n) {
      n === void 0 && (n = e);
      try {
        return await u(t, n);
      } catch (e) {
        throw e.errors[e.errors.length - 1];
      }
    }
    async function u(e, t) {
      for (
        var n = 0, r = [], o = t.baseRetryInterval, a = t.backoffFactor;
        n <= t.maxRetries;
      ) {
        try {
          var i = await e();
          return i;
        } catch (e) {
          r.push(e);
        }
        (await c(o * Math.pow(a, n)), ++n);
      }
      throw new l("Max call count exceeded", r);
    }
    async function c(e) {
      await new Promise(function (t) {
        return window.setTimeout(t, e);
      });
    }
    i.callWithExponentialBackoff = s;
  },
  66,
);
