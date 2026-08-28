__d(
  "FluxContainer",
  [
    "FluxContainerNameUtils",
    "FluxContainerSubscriptions",
    "react",
    "shallowEqual",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.Component,
      c = s.PureComponent,
      d = {
        pure: !0,
        pureProps: !1,
        withProps: !1,
        withContext: !1,
        withCallback: !1,
      };
    function m(e, t, n, r) {
      return {
        props: e.withProps ? t : void 0,
        context: e.withContext ? n : void 0,
        callback: e.withCallback ? r : void 0,
      };
    }
    function p(e, t) {
      var n = babelHelpers.extends({}, d, t || {}),
        a,
        i,
        l = function (r, o, a, i, l) {
          var t = m(n, a, i, l),
            s = t.callback,
            u = t.context,
            c = t.props,
            d = e.calculateState(o, c, u, s);
          return d;
        },
        s = function (r, o) {
          var t = m(n, r, o),
            a = t.context,
            i = t.props;
          return e.getStores(i, a);
        };
      return (
        (a = (function (e) {
          function t(t, n) {
            var o;
            ((o = e.call(this, t, n) || this),
              i || (i = o.constructor),
              (o.$BasicContainer$p_1 = new (r("FluxContainerSubscriptions"))(
                i.displayName || i.name,
              )),
              (o.$BasicContainer$p_3 = function () {
                o.setState(function (e, t) {
                  var n = l(o, e, t, o.context, o.$BasicContainer$p_4);
                  return r("shallowEqual")(e, n) ? null : n;
                });
              }));
            var a = o.$BasicContainer$p_3;
            ((o.$BasicContainer$p_4 = function () {
              return a == null ? void 0 : a();
            }),
              (o.$BasicContainer$p_4.isRevoked = !1),
              (o.$BasicContainer$p_4.revoke = function () {
                ((o.$BasicContainer$p_4.isRevoked = !0), (a = null));
              }),
              o.$BasicContainer$p_4.revoke(),
              (o.$BasicContainer$p_2 = !1));
            var s = l(o, void 0, t, n, o.$BasicContainer$p_4);
            return ((o.state = babelHelpers.extends({}, o.state || {}, s)), o);
          }
          babelHelpers.inheritsLoose(t, e);
          var o = t.prototype;
          return (
            (o.UNSAFE_componentWillMount = function () {
              e.prototype.UNSAFE_componentWillMount &&
                (e.prototype.UNSAFE_componentWillMount.call(this),
                this.$BasicContainer$p_3());
            }),
            (o.UNSAFE_componentWillReceiveProps = function (o, a) {
              var t = this;
              e.prototype.UNSAFE_componentWillReceiveProps &&
                e.prototype.UNSAFE_componentWillReceiveProps.call(this, o, a);
              var i =
                  !n.withProps ||
                  (n.pureProps && r("shallowEqual")(o, this.props)),
                u =
                  !n.withContext ||
                  (n.pureProps && r("shallowEqual")(a, this.context));
              if (!(u && i)) {
                var c = s(o, a);
                (c.length > 0 && this.$BasicContainer$p_1.setStores(c),
                  this.setState(function (e) {
                    return l(t, e, o, a, t.$BasicContainer$p_4);
                  }));
              }
            }),
            (o.componentDidMount = function () {
              var t = this;
              if (
                (e.prototype.componentDidMount &&
                  e.prototype.componentDidMount.call(this),
                this.$BasicContainer$p_4.isRevoked === !0)
              ) {
                var n = this.$BasicContainer$p_3;
                ((this.$BasicContainer$p_4 = function () {
                  return n == null ? void 0 : n();
                }),
                  (this.$BasicContainer$p_4.isRevoked = !1),
                  (this.$BasicContainer$p_4.revoke = function () {
                    ((t.$BasicContainer$p_4.isRevoked = !0), (n = null));
                  }));
              }
              this.$BasicContainer$p_2 ||
                (this.$BasicContainer$p_5(this.props, this.context),
                this.$BasicContainer$p_3(),
                (this.$BasicContainer$p_2 = !0));
            }),
            (o.componentWillUnmount = function () {
              (e.prototype.componentWillUnmount &&
                e.prototype.componentWillUnmount.call(this),
                this.$BasicContainer$p_1.reset(),
                (this.$BasicContainer$p_2 = !1),
                this.$BasicContainer$p_4.revoke());
            }),
            (o.$BasicContainer$p_5 = function (t, n) {
              var e = this,
                r = s(t, n);
              r.length > 0 &&
                (this.$BasicContainer$p_1.setStores(r),
                this.$BasicContainer$p_1.addListener(function () {
                  e.setState(function (t, r) {
                    return l(e, t, r, n);
                  });
                }));
            }),
            t
          );
        })(e)),
        (a = n.pure && !(e.prototype instanceof c) ? _(a) : a),
        o("FluxContainerNameUtils").nameContainer(
          a,
          n.name != null && n.name !== "" ? n.name : e.displayName || e.name,
        ),
        a
      );
    }
    function _(e) {
      var t = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.isPureFluxContainer = !0),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.shouldComponentUpdate = function (t, n) {
            return (
              !r("shallowEqual")(this.props, t) ||
              !r("shallowEqual")(this.state, n)
            );
          }),
          t
        );
      })(e);
      return t;
    }
    function f(e, t, n, r) {
      var o = (function (r) {
        function o() {
          return r.apply(this, arguments) || this;
        }
        (babelHelpers.inheritsLoose(o, r),
          (o.getStores = function (e, n) {
            return t(e, n);
          }),
          (o.calculateState = function (e, t, r, o) {
            return n(e, t, r, o);
          }));
        var a = o.prototype;
        return (
          (a.render = function () {
            return e(this.state);
          }),
          o
        );
      })(u);
      return p(o, r);
    }
    var g = { create: p, createFunctional: f };
    l.default = g;
  },
  98,
);
