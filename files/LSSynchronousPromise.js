__d(
  "LSSynchronousPromise",
  ["FBLogger", "isPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return new m(e, t);
    }
    function u(e) {
      if (!(e instanceof m)) return e;
      if (e.maybeErr != null) throw e.maybeErr.err;
      return e.val;
    }
    function c(e) {
      return e instanceof m;
    }
    function d(t) {
      return (e || (e = r("isPromise")))(t) ? t : s(t);
    }
    var m = (function () {
      function e(e, t) {
        ((this.val = e), (this.maybeErr = t));
      }
      var t = e.prototype;
      return (
        (t.catch = function (t) {
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "unexpected 'catch' call on LS synchronous promise - this is not a full promise impl!",
          );
        }),
        (t.finally = function (t, n) {
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "unexpected 'finally' call on LS synchronous promise - this is not a full promise impl!",
          );
        }),
        (t.then = function (t, n) {
          if (this.maybeErr != null) {
            if (n) return d(n(this.maybeErr.err));
            throw this.maybeErr.err;
          }
          try {
            return d(t(this.val));
          } catch (e) {
            return s(void 0, { err: e });
          }
        }),
        e
      );
    })();
    ((l.makeSynchronousPromise = s),
      (l.maybeExtractValueIfSynchronousPromise = u),
      (l.isSynchronousPromise = c),
      (l.wrapInSyncPromiseIfNotPromise = d));
  },
  98,
);
