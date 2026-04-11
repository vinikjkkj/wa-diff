__d(
  "ErrorBoundary.react",
  [
    "ErrorPubSub",
    "ErrorSerializer",
    "cr:1645510",
    "getErrorSafe",
    "getReactElementDisplayName",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = (function (t) {
        function o() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.state = { error: null, moduleName: d(e.props.children) }),
            (e.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix =
              !0),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        (babelHelpers.inheritsLoose(o, t),
          (o.getDerivedStateFromError = function (t) {
            return { error: r("getErrorSafe")(t) };
          }));
        var a = o.prototype;
        return (
          (a.componentDidUpdate = function (t) {
            if (
              this.state.error &&
              this.props.forceResetErrorCount != null &&
              this.props.forceResetErrorCount !== t.forceResetErrorCount
            ) {
              this.setState({ error: null });
              return;
            }
          }),
          (a.componentDidCatch = function (n, o) {
            var t = o.componentStack,
              a = this.props,
              i = a.augmentError,
              l = a.context,
              s = l === void 0 ? {} : l,
              u = a.description,
              c = u === void 0 ? "base" : u,
              d = a.onError,
              m = a.tags;
            s.messageFormat == null &&
              ((s.messageFormat = "caught error in module %s (%s)"),
              (s.messageParams = [this.state.moduleName, c]));
            var p = this.state,
              _ = p.error,
              f = p.moduleName;
            _ != null &&
              (r("ErrorSerializer").aggregateError(_, {
                componentStack: t,
                loggingSource: "ERROR_BOUNDARY",
              }),
              r("ErrorSerializer").aggregateError(_, s),
              typeof i == "function" && i(_),
              (_.tags = Array.from(m != null ? m : [])),
              (e || (e = r("ErrorPubSub"))).reportError(_),
              typeof d == "function" && d(_, f));
          }),
          (a.render = function () {
            var e,
              t = this.state,
              r = t.error,
              o = t.moduleName;
            if (r) {
              var a = this.props.fallback;
              return a != null ? a(r, o) : null;
            }
            if (n("cr:1645510") != null) {
              var i = u.jsxs(u.Fragment, {
                children: [u.jsx(n("cr:1645510"), {}), this.props.children],
              });
              return i;
            }
            return (e = this.props.children) != null ? e : null;
          }),
          o
        );
      })(u.PureComponent);
    c.defaultProps = { forceResetErrorCount: 0 };
    function d(e) {
      var t = u.Children.count(e) > 1 ? u.Children.toArray(e)[0] : e;
      return r("getReactElementDisplayName")(t);
    }
    var m = c;
    l.default = m;
  },
  98,
);
