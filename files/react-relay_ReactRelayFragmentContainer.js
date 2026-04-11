__d(
  "react-relay/ReactRelayFragmentContainer",
  [
    "areEqual",
    "react",
    "react-relay/ReactRelayContainerUtils",
    "react-relay/RelayContext",
    "react-relay/buildReactRelayContainer",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
      l,
      s,
      u = n("react-relay/ReactRelayContainerUtils").getContainerName,
      c = n("react-relay/RelayContext").assertRelayContext,
      d = l || (l = n("react")),
      m = n("relay-runtime").createFragmentSpecResolver,
      p = n("relay-runtime").getDataIDsFromObject,
      _ = n("relay-runtime").isScalarAndEqual;
    function f(t, r) {
      var o,
        a = u(t);
      return (
        (o = (function (o) {
          function i(e) {
            var t, n;
            ((n = o.call(this, e) || this),
              (n.$3 = function () {
                var e = n.state.resolver;
                n.setState(function (t) {
                  return e === t.resolver
                    ? {
                        data: t.resolver.resolve(),
                        relayProp: g(t.relayProp.environment),
                      }
                    : null;
                });
              }));
            var i = c(e.__relayContext),
              l = (t = e.__rootIsQueryRenderer) != null ? t : !1,
              s = m(i, a, r, e, l);
            return (
              (n.state = {
                data: s.resolve(),
                prevProps: e,
                prevPropsContext: i,
                relayProp: g(i.environment),
                resolver: s,
              }),
              n
            );
          }
          (babelHelpers.inheritsLoose(i, o),
            (i.getDerivedStateFromProps = function (t, o) {
              var e,
                i = o.prevProps,
                l = c(t.__relayContext),
                u = (e = t.__rootIsQueryRenderer) != null ? e : !1,
                d = p(r, i),
                _ = p(r, t),
                f = o.resolver;
              if (
                o.prevPropsContext.environment !== l.environment ||
                !(s || (s = n("areEqual")))(d, _)
              )
                return (
                  (f = m(l, a, r, t, u)),
                  {
                    data: f.resolve(),
                    prevProps: t,
                    prevPropsContext: l,
                    relayProp: g(l.environment),
                    resolver: f,
                  }
                );
              f.setProps(t);
              var h = f.resolve();
              return h !== o.data
                ? {
                    data: h,
                    prevProps: t,
                    prevPropsContext: l,
                    relayProp: g(l.environment),
                  }
                : null;
            }));
          var l = i.prototype;
          return (
            (l.componentDidMount = function () {
              this.$1();
            }),
            (l.componentDidUpdate = function (t, n) {
              this.state.resolver !== n.resolver
                ? (n.resolver.dispose(), this.$1())
                : this.$2();
            }),
            (l.componentWillUnmount = function () {
              this.state.resolver.dispose();
            }),
            (l.shouldComponentUpdate = function (t, n) {
              if (n.data !== this.state.data) return !0;
              for (var e = Object.keys(t), o = 0; o < e.length; o++) {
                var a = e[o];
                if (a === "__relayContext") {
                  if (
                    n.prevPropsContext.environment !==
                    this.state.prevPropsContext.environment
                  )
                    return !0;
                } else if (
                  !Object.prototype.hasOwnProperty.call(r, a) &&
                  !_(t[a], this.props[a])
                )
                  return !0;
              }
              return !1;
            }),
            (l.$2 = function () {
              var e = this.state,
                t = e.data,
                n = e.resolver,
                r = n.resolve();
              t !== r && this.setState({ data: r });
            }),
            (l.$1 = function () {
              var e = this.state,
                t = e.data,
                n = e.resolver,
                r = n.resolve();
              (n.setCallback(this.props, this.$3),
                t !== r && this.setState({ data: r }));
            }),
            (l.render = function () {
              var n = this.props,
                r = n.componentRef,
                o = n.__relayContext,
                a = n.__rootIsQueryRenderer,
                i = babelHelpers.objectWithoutPropertiesLoose(n, e);
              return d.jsx(
                t,
                babelHelpers.extends({}, i, this.state.data, {
                  ref: r,
                  relay: this.state.relayProp,
                }),
              );
            }),
            i
          );
        })(d.Component)),
        (o.displayName = a),
        o
      );
    }
    function g(e) {
      return { environment: e };
    }
    function h(e, t) {
      return n("react-relay/buildReactRelayContainer")(e, t, f);
    }
    a.exports = { createContainer: h };
  },
  null,
);
