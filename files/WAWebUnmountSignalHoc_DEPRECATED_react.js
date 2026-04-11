__d(
  "WAWebUnmountSignalHoc_DEPRECATED.react",
  ["WAWebHocComponent_DEPRECATED.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t, n;
      return (
        (t = (function (t) {
          function n() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(r)) || this),
              (e._isUnmounted = !1),
              (e._controller = null),
              (e.getUnmountSignal = function () {
                return (
                  e._controller ||
                    ((e._controller = new AbortController()),
                    e._isUnmounted && e._controller.abort()),
                  e._controller.signal
                );
              }),
              babelHelpers.assertThisInitialized(e) ||
                babelHelpers.assertThisInitialized(e)
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.componentWillUnmount = function () {
              var e;
              ((this._isUnmounted = !0),
                (e = this._controller) == null || e.abort());
            }),
            (r.render = function () {
              return s.jsx(
                e,
                babelHelpers.extends(
                  {
                    ref: this.setComponent,
                    getUnmountSignal: this.getUnmountSignal,
                  },
                  this.props,
                ),
              );
            }),
            n
          );
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent)),
        (t.defaultProps = (n = e.defaultProps) != null ? n : void 0),
        (t.displayName =
          "UnmountSignal(" +
          o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(
            e,
          ) +
          ")"),
        (t.wrappedComponent = null),
        t
      );
    }
    l.default = u;
  },
  98,
);
