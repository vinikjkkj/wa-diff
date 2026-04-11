__d(
  "promiseDone",
  ["ErrorPubSub", "PromiseAnnotate", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = r("getErrorSafe")(e);
      ((t.loggingSource = "PROMISE_DONE"),
        (s || (s = r("ErrorPubSub"))).reportError(t));
    }
    function c(e) {
      return (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield e(t);
            return n;
          } catch (e) {
            u(e);
          }
        });
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    }
    function d(t, n, r) {
      var a = r != null ? c(r) : null,
        i = arguments.length > 1 ? t.then(n, a) : t;
      r == null && i.then(null, u);
      var l = (e || (e = o("PromiseAnnotate"))).getDisplayName(t);
      l != null && (e || (e = o("PromiseAnnotate"))).setDisplayName(i, l);
    }
    l.default = d;
  },
  98,
);
