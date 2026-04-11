__d(
  "react-relay/ReactRelayPaginationContainer",
  [
    "invariant",
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
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["componentRef"],
      s = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
      u = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
      c,
      d,
      m = n("react-relay/ReactRelayContainerUtils").getComponentName,
      p = n("react-relay/ReactRelayContainerUtils").getContainerName,
      _ = n("react-relay/RelayContext").assertRelayContext,
      f = c || (c = n("react")),
      g = n("relay-runtime").ConnectionInterface,
      h = n("relay-runtime").Observable,
      y = n("relay-runtime").RelayFeatureFlags,
      C = n("relay-runtime").createFragmentSpecResolver,
      b = n("relay-runtime").createOperationDescriptor,
      v = n("relay-runtime").getDataIDsFromObject,
      S = n("relay-runtime").getRequest,
      R = n("relay-runtime").getVariablesFromObject,
      L = n("relay-runtime").isScalarAndEqual,
      E = "forward";
    function k(e) {
      var t = e.path;
      return (
        t || l(0, 1219),
        function (n) {
          for (var r = n[e.fragmentName], o = 0; o < t.length; o++) {
            if (!r || typeof r != "object") return null;
            r = r[t[o]];
          }
          return r;
        }
      );
    }
    function I(e) {
      var t = e.count;
      return (
        t || l(0, 1220),
        function (e, n) {
          var r;
          return babelHelpers.extends({}, e, ((r = {}), (r[t] = n), r));
        }
      );
    }
    function T(e) {
      var t = null,
        n = !1;
      for (var r in e) {
        var o = e[r],
          a = o.metadata && o.metadata.connection;
        (o.metadata !== void 0 && (n = !0),
          a &&
            (a.length === 1 || l(0, 1221, r, a.length),
            !t || l(0, 1222),
            (t = babelHelpers.extends({}, a[0], { fragmentName: r }))));
      }
      return (!n || t !== null || l(0, 1223), t || {});
    }
    function D(e) {
      return typeof e == "function"
        ? {
            complete: e,
            error: e,
            unsubscribe: function (n) {
              typeof e == "function" && e();
            },
          }
        : e || {};
    }
    function x(t, r, o) {
      var a,
        i = m(t),
        c = p(t),
        x = T(r),
        $ = o.getConnectionFromProps || k(x),
        P = o.direction || x.direction;
      P || l(0, 1224);
      var N = o.getFragmentVariables || I(x);
      return (
        (a = (function (a) {
          function m(e) {
            var t, o;
            ((o = a.call(this, e) || this),
              (o.$8 = function () {
                o.setState({ data: o.$4.resolve() });
              }),
              (o.$13 = function () {
                var e = o.$17();
                return !!(e && e.hasMore && e.cursor);
              }),
              (o.$14 = function () {
                return !!o.$2;
              }),
              (o.$16 = function (e, t, n) {
                if (!o.$18("refetchConnection"))
                  return { dispose: function () {} };
                o.$3 = n;
                var r = { count: e, cursor: null, totalCount: e },
                  a = o.$19(r, D(t), { force: !0 });
                return { dispose: a.unsubscribe };
              }),
              (o.$15 = function (e, t, r) {
                if (!o.$18("loadMore")) return { dispose: function () {} };
                var a = D(t),
                  i = o.$17();
                if (!i)
                  return (
                    h
                      .create(function (e) {
                        return e.complete();
                      })
                      .subscribe(a),
                    null
                  );
                var l = i.edgeCount + e;
                if (r && r.force) return o.$16(l, t);
                var s = g.get(),
                  u = s.END_CURSOR,
                  c = s.START_CURSOR,
                  d = i.cursor;
                n("warning")(
                  d != null && d !== "",
                  "ReactRelayPaginationContainer: Cannot `loadMore` without valid `%s` (got `%s`)",
                  P === E ? u : c,
                  d,
                );
                var m = { count: e, cursor: d, totalCount: l },
                  p = o.$19(m, a, r);
                return { dispose: p.unsubscribe };
              }));
            var i = _(e.__relayContext),
              l = (t = e.__rootIsQueryRenderer) != null ? t : !1;
            return (
              (o.$1 = !1),
              (o.$2 = null),
              (o.$3 = null),
              y.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0
                ? (o.$4 = C(i, c, r, e, l))
                : (o.$4 = C(i, c, r, e, l, o.$8)),
              (o.state = {
                contextForChildren: i,
                data: o.$4.resolve(),
                prevContext: i,
                relayProp: o.$9(i),
                resolverGeneration: 0,
              }),
              (o.$6 = !1),
              (o.$7 = !1),
              o
            );
          }
          babelHelpers.inheritsLoose(m, a);
          var p = m.prototype;
          return (
            (p.componentDidMount = function () {
              ((this.$6 = !1),
                y.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0 && this.$10());
            }),
            (p.componentDidUpdate = function (t, n) {
              y.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0 &&
                (n.resolverGeneration !== this.state.resolverGeneration
                  ? this.$10()
                  : this.$11());
            }),
            (p.UNSAFE_componentWillReceiveProps = function (t) {
              var e,
                o = this,
                a = _(t.__relayContext),
                i = (e = t.__rootIsQueryRenderer) != null ? e : !1,
                l = v(r, this.props),
                s = v(r, t),
                u = n("react-relay/getRootVariablesForFragments")(
                  r,
                  this.props,
                ),
                m = n("react-relay/getRootVariablesForFragments")(r, t);
              a.environment !== this.state.prevContext.environment ||
              !(d || (d = n("areEqual")))(u, m) ||
              !(d || (d = n("areEqual")))(l, s)
                ? (this.$12(),
                  y.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0
                    ? (this.$4 = C(a, c, r, t, i))
                    : (this.$4 = C(a, c, r, t, i, this.$8)),
                  this.setState(function (e) {
                    return {
                      contextForChildren: a,
                      prevContext: a,
                      relayProp: o.$9(a),
                      resolverGeneration: e.resolverGeneration + 1,
                    };
                  }))
                : this.$7 || this.$4.setProps(t);
              var p = this.$4.resolve();
              p !== this.state.data && this.setState({ data: p });
            }),
            (p.componentWillUnmount = function () {
              ((this.$6 = !0), this.$12());
            }),
            (p.shouldComponentUpdate = function (t, n) {
              if (
                n.data !== this.state.data ||
                n.relayProp !== this.state.relayProp ||
                n.resolverGeneration !== this.state.resolverGeneration
              )
                return !0;
              for (var e = Object.keys(t), o = 0; o < e.length; o++) {
                var a = e[o];
                if (a === "__relayContext") {
                  if (
                    n.prevContext.environment !==
                    this.state.prevContext.environment
                  )
                    return !0;
                } else if (
                  !Object.prototype.hasOwnProperty.call(r, a) &&
                  !L(t[a], this.props[a])
                )
                  return !0;
              }
              return !1;
            }),
            (p.$9 = function (t) {
              return {
                environment: t.environment,
                hasMore: this.$13,
                isLoading: this.$14,
                loadMore: this.$15,
                refetchConnection: this.$16,
              };
            }),
            (p.$11 = function () {
              var e = this.state.data,
                t = this.$4.resolve();
              e !== t && this.setState({ data: t });
            }),
            (p.$10 = function () {
              var e = this.state.data,
                t = this.$4.resolve();
              (this.$4.setCallback(this.props, this.$8),
                e !== t && this.setState({ data: t }));
            }),
            (p.$17 = function () {
              var t = this.props,
                r = t.componentRef,
                o = babelHelpers.objectWithoutPropertiesLoose(t, e),
                a = babelHelpers.extends({}, o, this.state.data),
                s = $(a);
              if (s == null) return null;
              var u = g.get(),
                c = u.EDGES,
                d = u.PAGE_INFO,
                m = u.HAS_NEXT_PAGE,
                p = u.HAS_PREV_PAGE,
                _ = u.END_CURSOR,
                f = u.START_CURSOR;
              typeof s == "object" || l(0, 1225, i, c, d, s);
              var h = s[c],
                y = s[d];
              if (h == null || y == null) return null;
              (Array.isArray(h) || l(0, 1226, i, c, h),
                typeof y == "object" || l(0, 1227, i, d, y));
              var C = P === E ? y[m] : y[p],
                b = P === E ? y[_] : y[f];
              return typeof C != "boolean" ||
                (h.length !== 0 && typeof b == "undefined")
                ? (n("warning")(
                    !1,
                    "ReactRelayPaginationContainer: Cannot paginate without %s fields in `%s`. Be sure to fetch %s (got `%s`) and %s (got `%s`).",
                    d,
                    i,
                    P === E ? m : p,
                    C,
                    P === E ? _ : f,
                    b,
                  ),
                  null)
                : { cursor: b, edgeCount: h.length, hasMore: C };
            }),
            (p.$20 = function () {
              return (
                this.$5 ||
                  (this.$5 = new (n("react-relay/ReactRelayQueryFetcher"))()),
                this.$5
              );
            }),
            (p.$18 = function (t) {
              return this.$6
                ? (n("warning")(
                    !1,
                    "ReactRelayPaginationContainer: Unexpected call of `%s` on unmounted container `%s`. It looks like some instances of your container still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger `%s` call.",
                    t,
                    c,
                    t,
                  ),
                  !1)
                : !0;
            }),
            (p.$19 = function (t, a, u) {
              var e = this,
                c = _(this.props.__relayContext),
                m = c.environment,
                p = this.props,
                f = p.componentRef,
                g = p.__relayContext,
                y = p.__rootIsQueryRenderer,
                C = babelHelpers.objectWithoutPropertiesLoose(p, s),
                v = babelHelpers.extends({}, C, this.state.data),
                L,
                E = n("react-relay/getRootVariablesForFragments")(r, C);
              ((L = R(r, C)), (L = babelHelpers.extends({}, E, L, this.$3)));
              var k = o.getVariables(
                v,
                { count: t.count, cursor: t.cursor },
                L,
              );
              ((typeof k == "object" && k !== null) || l(0, 1228, k, i),
                (k = babelHelpers.extends({}, k, this.$3)),
                (L = babelHelpers.extends({}, k, L)));
              var I = u ? { force: !!u.force } : void 0;
              I != null &&
                (u == null ? void 0 : u.metadata) != null &&
                (I.metadata = u == null ? void 0 : u.metadata);
              var T = S(o.query),
                D = b(T, k, I),
                x = null;
              (this.$2 && this.$2.unsubscribe(), (this.$7 = !0));
              var $ = function (o, a) {
                  var r = e.$4.resolve();
                  e.$4.setVariables(N(L, t.totalCount), D.request.node);
                  var i = e.$4.resolve();
                  (d || (d = n("areEqual")))(r, i)
                    ? a()
                    : e.setState(
                        {
                          contextForChildren: {
                            environment: e.props.__relayContext.environment,
                          },
                          data: i,
                        },
                        a,
                      );
                },
                P = function () {
                  e.$2 === x && ((e.$2 = null), (e.$1 = !1));
                };
              return (
                (this.$1 = !0),
                (x = this.$20()
                  .execute({
                    environment: m,
                    operation: D,
                    preservePreviousReferences: !0,
                  })
                  .mergeMap(function (e) {
                    return h.create(function (t) {
                      $(e, function () {
                        (t.next(), t.complete());
                      });
                    });
                  })
                  .do({ complete: P, error: P, unsubscribe: P })
                  .subscribe(a || {})),
                (this.$2 = this.$1 ? x : null),
                x
              );
            }),
            (p.$12 = function () {
              (this.$4.dispose(),
                (this.$3 = null),
                (this.$7 = !1),
                this.$2 &&
                  (this.$2.unsubscribe(), (this.$2 = null), (this.$1 = !1)),
                this.$5 && this.$5.dispose());
            }),
            (p.render = function () {
              var e = this.props,
                r = e.componentRef,
                o = e.__relayContext,
                a = e.__rootIsQueryRenderer,
                i = babelHelpers.objectWithoutPropertiesLoose(e, u);
              return f.jsx(n("react-relay/ReactRelayContext").Provider, {
                value: this.state.contextForChildren,
                children: f.jsx(
                  t,
                  babelHelpers.extends({}, i, this.state.data, {
                    ref: r,
                    relay: this.state.relayProp,
                  }),
                ),
              });
            }),
            m
          );
        })(f.Component)),
        (a.displayName = c),
        a
      );
    }
    function $(e, t, r) {
      return n("react-relay/buildReactRelayContainer")(e, t, function (e, t) {
        return x(e, t, r);
      });
    }
    a.exports = { createContainer: $ };
  },
  null,
);
