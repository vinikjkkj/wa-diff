__d(
  "WAWebActiveAccountInfoContext.react",
  [
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebLinkedAccountsAction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useSyncExternalStore,
      p,
      _ = new Set();
    function f(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function g() {
      _.forEach(function (e) {
        return e();
      });
    }
    function h(e) {
      ((p = e), g());
    }
    function y() {
      return p;
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        r;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = []), (t[0] = r))
          : (r = t[0]),
        d(b, r),
        n
      );
    }
    function b() {
      if (o("WAWebBizGatingUtils").shouldFetchLinkedAccounts()) {
        var e = new AbortController();
        return (
          o("WAWebLinkedAccountsAction")
            .getActiveLinkedAccountInfo(e.signal)
            .then(function (t) {
              e.signal.aborted || h(t);
            })
            .catch(v),
          function () {
            return e.abort();
          }
        );
      }
    }
    function v() {
      o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "WAWebActiveAccountInfoContext: linked accounts fetch failed",
          ])),
      );
    }
    function S() {
      return m(f, y);
    }
    ((l.setActiveAccountInfo = h),
      (l.getActiveAccountInfo = y),
      (l.ActiveAccountInfoProvider = C),
      (l.useActiveAccountInfo = S));
  },
  98,
);
