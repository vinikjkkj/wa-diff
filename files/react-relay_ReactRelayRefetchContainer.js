__d(
  "react-relay/ReactRelayRefetchContainer",
  [
    "areEqual",
    "react",
    "react-relay/ReactRelayContainerUtils",
    "react-relay/ReactRelayContext",
    "react-relay/ReactRelayQueryFetcher",
    "react-relay/RelayContext",
    "react-relay/buildReactRelayContainer",
    "react-relay/getRootVariablesForFragments",
    "relay-runtime",
    "warning",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
      l,
      s,
      u = n("react-relay/ReactRelayContainerUtils").getContainerName,
      c = n("react-relay/RelayContext").assertRelayContext,
      d = l || (l = n("react")),
      m = n("relay-runtime").Observable,
      p = n("relay-runtime").createFragmentSpecResolver,
      _ = n("relay-runtime").createOperationDescriptor,
      f = n("relay-runtime").getDataIDsFromObject,
      g = n("relay-runtime").getRequest,
      h = n("relay-runtime").getVariablesFromObject,
      y = n("relay-runtime").isScalarAndEqual;
    function C(t, r, o) {
      var a,
        i = u(t);
      return (
        (a = (function (a) {
          function l(e) {
            var t, l;
            ((l = a.call(this, e) || this),
              (l.$7 = function () {
                var e = l.state.resolver;
                l.setState(function (t) {
                  return e === t.resolver
                    ? { data: t.resolver.resolve() }
                    : null;
                });
              }),
              (l.$4 = function (e, t, a, s) {
                if (l.$3)
                  return (
                    n("warning")(
                      !1,
                      "ReactRelayRefetchContainer: Unexpected call of `refetch` on unmounted container `%s`. It looks like some instances of your container still trying to refetch the data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger `refetch`.",
                      i,
                    ),
                    { dispose: function () {} }
                  );
                var u = c(l.props.__relayContext),
                  d = u.environment,
                  p = n("react-relay/getRootVariablesForFragments")(r, l.props),
                  f = typeof e == "function" ? e(l.$8()) : e;
                f = babelHelpers.extends({}, p, f);
                var h = t ? babelHelpers.extends({}, f, t) : f,
                  y = s ? { force: !!s.force } : void 0;
                y != null &&
                  (s == null ? void 0 : s.metadata) != null &&
                  (y.metadata = s == null ? void 0 : s.metadata);
                var C =
                    typeof a == "function" ? { error: a, next: a } : a || {},
                  b = g(o),
                  v = _(b, f, y);
                ((l.state.localVariables = f), l.$1 && l.$1.unsubscribe());
                var S,
                  R = l
                    .$9()
                    .lookupInStore(d, v, s == null ? void 0 : s.fetchPolicy);
                return R != null
                  ? (l.state.resolver.setVariables(h, v.request.node),
                    l.setState(
                      function (e) {
                        return {
                          contextForChildren: {
                            environment: l.props.__relayContext.environment,
                          },
                          data: e.resolver.resolve(),
                        };
                      },
                      function () {
                        (C.next && C.next(), C.complete && C.complete());
                      },
                    ),
                    { dispose: function () {} })
                  : (l
                      .$9()
                      .execute({
                        environment: d,
                        operation: v,
                        preservePreviousReferences: !0,
                      })
                      .mergeMap(function (e) {
                        return (
                          l.state.resolver.setVariables(h, v.request.node),
                          m.create(function (e) {
                            return l.setState(
                              function (e) {
                                return {
                                  contextForChildren: {
                                    environment:
                                      l.props.__relayContext.environment,
                                  },
                                  data: e.resolver.resolve(),
                                };
                              },
                              function () {
                                (e.next(), e.complete());
                              },
                            );
                          })
                        );
                      })
                      .finally(function () {
                        l.$1 === S && (l.$1 = null);
                      })
                      .subscribe(
                        babelHelpers.extends({}, C, {
                          start: function (t) {
                            ((l.$1 = S = t), C.start && C.start(t));
                          },
                        }),
                      ),
                    {
                      dispose: function () {
                        S && S.unsubscribe();
                      },
                    });
              }));
            var s = c(e.__relayContext),
              u = (t = e.__rootIsQueryRenderer) != null ? t : !1;
            l.$1 = null;
            var d = p(s, i, r, e, u);
            return (
              (l.state = {
                contextForChildren: s,
                data: d.resolve(),
                localVariables: null,
                prevProps: e,
                prevPropsContext: s,
                relayProp: b(s.environment, l.$4),
                resolver: d,
              }),
              (l.$3 = !1),
              l
            );
          }
          babelHelpers.inheritsLoose(l, a);
          var u = l.prototype;
          return (
            (u.componentDidMount = function () {
              ((this.$3 = !1), this.$5());
            }),
            (u.componentDidUpdate = function (t, n) {
              this.state.resolver !== n.resolver
                ? (n.resolver.dispose(),
                  this.$2 && this.$2.dispose(),
                  this.$1 && this.$1.unsubscribe(),
                  this.$5())
                : this.$6();
            }),
            (l.getDerivedStateFromProps = function (t, o) {
              var e,
                a = o.prevProps,
                l = c(t.__relayContext),
                u = (e = t.__rootIsQueryRenderer) != null ? e : !1,
                d = f(r, a),
                m = f(r, t),
                _ = n("react-relay/getRootVariablesForFragments")(r, a),
                g = n("react-relay/getRootVariablesForFragments")(r, t),
                h = o.resolver;
              if (
                o.prevPropsContext.environment !== l.environment ||
                !(s || (s = n("areEqual")))(_, g) ||
                !(s || (s = n("areEqual")))(d, m)
              )
                return (
                  (h = p(l, i, r, t, u)),
                  {
                    contextForChildren: l,
                    data: h.resolve(),
                    localVariables: null,
                    prevProps: t,
                    prevPropsContext: l,
                    relayProp: b(l.environment, o.relayProp.refetch),
                    resolver: h,
                  }
                );
              o.localVariables || h.setProps(t);
              var y = h.resolve();
              return y !== o.data ? { data: y, prevProps: t } : null;
            }),
            (u.componentWillUnmount = function () {
              ((this.$3 = !0),
                this.state.resolver.dispose(),
                this.$2 && this.$2.dispose(),
                this.$1 && this.$1.unsubscribe());
            }),
            (u.shouldComponentUpdate = function (t, n) {
              if (
                n.data !== this.state.data ||
                n.relayProp !== this.state.relayProp
              )
                return !0;
              for (var e = Object.keys(t), o = 0; o < e.length; o++) {
                var a = e[o];
                if (a === "__relayContext") {
                  if (
                    this.state.prevPropsContext.environment !==
                    n.prevPropsContext.environment
                  )
                    return !0;
                } else if (
                  !Object.prototype.hasOwnProperty.call(r, a) &&
                  !y(t[a], this.props[a])
                )
                  return !0;
              }
              return !1;
            }),
            (u.$6 = function () {
              var e = this.state,
                t = e.data,
                n = e.resolver,
                r = n.resolve();
              t !== r && this.setState({ data: r });
            }),
            (u.$5 = function () {
              var e = this.state,
                t = e.data,
                n = e.resolver,
                r = n.resolve();
              (n.setCallback(this.props, this.$7),
                t !== r && this.setState({ data: r }));
            }),
            (u.$8 = function () {
              return h(r, this.props);
            }),
            (u.$9 = function () {
              return (
                this.$2 ||
                  (this.$2 = new (n("react-relay/ReactRelayQueryFetcher"))()),
                this.$2
              );
            }),
            (u.render = function () {
              var r = this.props,
                o = r.componentRef,
                a = r.__relayContext,
                i = r.__rootIsQueryRenderer,
                l = babelHelpers.objectWithoutPropertiesLoose(r, e),
                s = this.state,
                u = s.relayProp,
                c = s.contextForChildren;
              return d.jsx(n("react-relay/ReactRelayContext").Provider, {
                value: c,
                children: d.jsx(
                  t,
                  babelHelpers.extends({}, l, this.state.data, {
                    ref: o,
                    relay: u,
                  }),
                ),
              });
            }),
            l
          );
        })(d.Component)),
        (a.displayName = i),
        a
      );
    }
    function b(e, t) {
      return { environment: e, refetch: t };
    }
    function v(e, t, r) {
      return n("react-relay/buildReactRelayContainer")(e, t, function (e, t) {
        return C(e, t, r);
      });
    }
    a.exports = { createContainer: v };
  },
  null,
);
