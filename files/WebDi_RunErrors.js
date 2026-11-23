__d(
  "WebDi.RunErrors",
  ["WebDi.Cause", "WebDi.Errors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "AsyncBoundary",
                t == null
                  ? "WebDI: runSync reached an asynchronous operation. Use run() instead."
                  : "WebDI: runSync reached an asynchronous operation at " +
                      t +
                      ". Use run() instead.",
              ) || this),
            (n.tag = "AsyncBoundary"),
            (n.trace = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((e = o("WebDi.Errors")).TaggedError),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "Interrupted",
                t == null ? "WebDI: interrupted" : "WebDI: interrupted - " + t,
              ) || this),
            (n.tag = "Interrupted"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.TaggedError),
      c = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r =
              e.call(
                this,
                "DuplicateProvider",
                'WebDI: two providers supply "' +
                  t +
                  '" (at index ' +
                  n[0] +
                  " and " +
                  n[1] +
                  "). A service may be provided exactly once; use distinct names for distinct instances.",
              ) || this),
            (r.tag = "DuplicateProvider"),
            (r.service = t),
            (r.indices = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.TaggedError),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "CyclicDependency",
                "WebDI: dependency cycle " + t.join(" -> "),
              ) || this),
            (n.tag = "CyclicDependency"),
            (n.cycle = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.TaggedError),
      m = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r =
              e.call(
                this,
                "MissingProvider",
                n == null
                  ? "WebDI: missing service " + t + " - no provider supplies it"
                  : "WebDI: missing service " +
                      t +
                      " - required by " +
                      n +
                      ", but no provider supplies it",
              ) || this),
            (r.tag = "MissingProvider"),
            (r.service = t),
            (r.requiredBy = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.TaggedError),
      p = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r =
              e.call(
                this,
                "ProviderFailed",
                "WebDI: building service " + t + " failed",
                { cause: n },
              ) || this),
            (r.tag = "ProviderFailed"),
            (r.service = t),
            (r.error = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.TaggedError);
    function _(e) {
      return e instanceof o("WebDi.Cause").Fail
        ? "Fail(" + String(e.error) + ")"
        : e instanceof o("WebDi.Cause").Die
          ? "Die(" + String(e.defect) + ")"
          : e.reason == null
            ? "Interrupt"
            : "Interrupt(" + e.reason + ")";
    }
    ((l.AsyncBoundary = s),
      (l.Interrupted = u),
      (l.DuplicateProvider = c),
      (l.CyclicDependency = d),
      (l.MissingProvider = m),
      (l.ProviderFailed = p),
      (l.pretty = _));
  },
  98,
);
