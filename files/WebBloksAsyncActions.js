__d(
  "WebBloksAsyncActions",
  ["WebBloksScriptDebuggingUtils", "WebBloksUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WebBloksUtils").nullthrows(
                e.bloksContext.objectSet.environment.appLoader,
              ),
              i = null;
            return (
              (i = yield a.fetchAction(t, n)),
              e.executeActionPayload(i, r)
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            return yield e(t, n, r);
          } catch (e) {
            o("WebBloksScriptDebuggingUtils").logScriptError(
              t.objectSet,
              e,
              null,
              t,
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.executeAsyncAction = e), (l.executeAsyncActionCatch = u));
  },
  98,
);
