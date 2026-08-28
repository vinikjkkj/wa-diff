__d(
  "signalsLoggingDefineSessionByComponentLifetime",
  ["SignalsLoggingSessionErrors", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      var r;
      return (
        n === void 0 && (n = []),
        (r = (function (r) {
          function a() {
            return r.apply(this, arguments) || this;
          }
          babelHelpers.inheritsLoose(a, r);
          var i = a.prototype;
          return (
            (i.componentDidMount = function () {
              var t = this;
              try {
                var r = n.reduce(function (e, n) {
                  return e.scope(typeof n == "string" ? n : n(t.props));
                }, e);
                this.$1 = r.startSession();
              } catch (t) {
                if (
                  t instanceof
                  o("SignalsLoggingSessionErrors").DuplicateSessionNameError
                )
                  e.logError(t, u.ERROR_ACTION);
                else throw t;
              }
            }),
            (i.componentWillUnmount = function () {
              this.$1 != null && this.$1();
            }),
            (i.render = function () {
              return s.jsx(t, babelHelpers.extends({}, this.props));
            }),
            a
          );
        })(s.PureComponent)),
        (r.__className = "Sessionized_" + (t.name || "")),
        r
      );
    }
    ((u.ERROR_ACTION = "DEFINE_SESSION_BY_COMPONENT"), (l.default = u));
  },
  98,
);
