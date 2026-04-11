__d(
  "react-relay/ReactRelayQueryRenderer",
  [
    "areEqual",
    "react",
    "react-relay/ReactRelayContext",
    "react-relay/ReactRelayQueryFetcher",
    "react-relay/ReactRelayQueryRendererContext",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = e || (e = n("react")),
      u = n("relay-runtime").createOperationDescriptor,
      c = n("relay-runtime").deepFreeze,
      d = n("relay-runtime").getRequest,
      m = {},
      p = { rootIsQueryRenderer: !0 },
      _ = (function (e) {
        function t(t) {
          var r;
          ((r = e.call(this, t) || this),
            (r.$2 = function (e) {
              var t = e.error == null ? null : e.error,
                n = e.snapshot == null ? null : e.snapshot;
              r.setState(function (e) {
                var r = e.requestCacheKey;
                return (
                  r && delete m[r],
                  n === e.snapshot && t === e.error
                    ? null
                    : {
                        renderProps: h(t, n, e.queryFetcher, e.retryCallbacks),
                        snapshot: n,
                        requestCacheKey: null,
                      }
                );
              });
            }));
          var o = { handleDataChange: null, handleRetryAfterError: null },
            a,
            i;
          if (t.query) {
            var l = t.query,
              s = d(l);
            ((i = y(s.params, t.variables)),
              (a = m[i]
                ? m[i].queryFetcher
                : new (n("react-relay/ReactRelayQueryFetcher"))()));
          } else a = new (n("react-relay/ReactRelayQueryFetcher"))();
          return (
            (r.$1 = !1),
            (r.state = babelHelpers.extends(
              {
                prevPropsEnvironment: t.environment,
                prevPropsVariables: t.variables,
                prevQuery: t.query,
                queryFetcher: a,
                retryCallbacks: o,
              },
              b(t, a, o, i),
            )),
            r
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.getDerivedStateFromProps = function (t, r) {
            return r.prevQuery !== t.query ||
              r.prevPropsEnvironment !== t.environment ||
              !(l || (l = n("areEqual")))(r.prevPropsVariables, t.variables)
              ? C(t, r)
              : null;
          }));
        var r = t.prototype;
        return (
          (r.componentDidMount = function () {
            var e = this;
            if (this.$1 === !0) {
              ((this.$1 = !1),
                this.setState(function (t) {
                  var n = C(e.props, t),
                    r = n.requestCacheKey,
                    o = n.queryFetcher;
                  return (
                    r != null && m[r] != null && o.setOnDataChange(e.$2),
                    n
                  );
                }));
              return;
            }
            var t = this.state,
              n = t.retryCallbacks,
              r = t.queryFetcher,
              o = t.requestCacheKey;
            (o && delete m[o],
              (n.handleDataChange = this.$2),
              (n.handleRetryAfterError = function (t) {
                return e.setState(function (e) {
                  var t = e.requestCacheKey;
                  return (
                    t && delete m[t],
                    { renderProps: f(), requestCacheKey: null }
                  );
                });
              }),
              this.props.query && r.setOnDataChange(this.$2));
          }),
          (r.componentDidUpdate = function (t, n) {
            var e = this.state,
              r = e.queryFetcher,
              o = e.requestCacheKey;
            (o && (delete m[o], delete this.state.requestCacheKey),
              this.props.query &&
                r !== n.queryFetcher &&
                r.setOnDataChange(this.$2));
          }),
          (r.componentWillUnmount = function () {
            (this.state.queryFetcher.dispose(), (this.$1 = !0));
          }),
          (r.shouldComponentUpdate = function (t, n) {
            return (
              t.render !== this.props.render ||
              n.renderProps !== this.state.renderProps
            );
          }),
          (r.render = function () {
            var e = this.state,
              t = e.renderProps,
              r = e.relayContext;
            return s.jsx(n("react-relay/ReactRelayContext").Provider, {
              value: r,
              children: s.jsx(
                n("react-relay/ReactRelayQueryRendererContext").Provider,
                { value: p, children: this.props.render(t) },
              ),
            });
          }),
          t
        );
      })(s.Component);
    function f() {
      return { error: null, props: null, retry: null };
    }
    function g() {
      return { error: null, props: {}, retry: null };
    }
    function h(e, t, n, r) {
      return {
        error: e || null,
        props: t ? t.data : null,
        retry: function (o) {
          var t = n.retry(o);
          t && typeof r.handleDataChange == "function"
            ? r.handleDataChange({ snapshot: t })
            : e &&
              typeof r.handleRetryAfterError == "function" &&
              r.handleRetryAfterError(e);
        },
      };
    }
    function y(e, t) {
      return JSON.stringify({ id: e.cacheID ? e.cacheID : e.id, variables: t });
    }
    function C(e, t) {
      var r = e.query,
        o = t.queryFetcher.getSelectionReferences();
      t.queryFetcher.disposeRequest();
      var a;
      if (r) {
        var i = d(r),
          l = y(i.params, e.variables);
        a = m[l]
          ? m[l].queryFetcher
          : new (n("react-relay/ReactRelayQueryFetcher"))(o);
      } else a = new (n("react-relay/ReactRelayQueryFetcher"))(o);
      return babelHelpers.extends(
        {
          prevQuery: e.query,
          prevPropsEnvironment: e.environment,
          prevPropsVariables: e.variables,
          queryFetcher: a,
        },
        b(e, a, t.retryCallbacks),
      );
    }
    function b(e, t, n, r) {
      var o = e.environment,
        a = e.query,
        i = e.variables,
        l = e.cacheConfig,
        s = o;
      if (a) {
        var c = d(a),
          p = u(c, i, l),
          _ = { environment: s };
        if (typeof r == "string" && m[r]) {
          var C = m[r].snapshot;
          return C
            ? {
                error: null,
                relayContext: _,
                renderProps: h(null, C, t, n),
                snapshot: C,
                requestCacheKey: r,
              }
            : {
                error: null,
                relayContext: _,
                renderProps: f(),
                snapshot: null,
                requestCacheKey: r,
              };
        }
        try {
          var b = t.lookupInStore(s, p, e.fetchPolicy),
            v = t.fetch({ environment: s, onDataChange: null, operation: p }),
            S = v || b;
          return (
            (r = r || y(c.params, e.variables)),
            (m[r] = { queryFetcher: t, snapshot: S }),
            S
              ? {
                  error: null,
                  relayContext: _,
                  renderProps: h(null, S, t, n),
                  snapshot: S,
                  requestCacheKey: r,
                }
              : {
                  error: null,
                  relayContext: _,
                  renderProps: f(),
                  snapshot: null,
                  requestCacheKey: r,
                }
          );
        } catch (e) {
          return {
            error: e,
            relayContext: _,
            renderProps: h(e, null, t, n),
            snapshot: null,
            requestCacheKey: r,
          };
        }
      } else {
        t.dispose();
        var R = { environment: s };
        return {
          error: null,
          relayContext: R,
          renderProps: g(),
          requestCacheKey: null,
        };
      }
    }
    a.exports = _;
  },
  null,
);
