__d(
  "WAWebStateHoc_DEPRECATED.react",
  [
    "WALogger",
    "WAWebHocComponent_DEPRECATED.react",
    "WAWebStateConcern",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(t, n, a) {
      var i,
        l = o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(
          t,
        );
      !n &&
        !a &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Assertion failed!",
              ])),
          )
          .sendLogs("StateHOC wrapping class with no concerns, check " + l);
      var u = [];
      if (n)
        for (var d in n) u.push(new (r("WAWebStateConcern"))(l, d, n[d], !0));
      if (a)
        for (var m in a)
          (n &&
            Object.prototype.hasOwnProperty.call(n, m) &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs(
                'Component has marked "' +
                  m +
                  '" as both a normal and weak concern, check ' +
                  l,
              ),
            u.push(new (r("WAWebStateConcern"))(l, m, a[m], !1)));
      return (
        (i = (function (e) {
          function n(t) {
            var r;
            ((r = e.call(this, t) || this),
              (r._rr = function (e, t) {
                r.setState(function (n) {
                  var r;
                  return {
                    proxies: babelHelpers.extends(
                      {},
                      n.proxies,
                      ((r = {}), (r[e.name] = e.createProxy(t)), r),
                    ),
                  };
                });
              }));
            for (var o = {}, a = !1, i = 0; i < u.length; i++) {
              var l = u[i],
                s = l.name,
                c = l.getModelAndValidate(n._getModelOrProxy(s, t));
              if (c) {
                var d = l.createProxy(c);
                (l.attachConcern(c, d.proxyBitMask, r._rr), (o[s] = d));
              } else a = !0;
            }
            return ((r.state = { props: t, proxies: o, hasBroken: a }), r);
          }
          (babelHelpers.inheritsLoose(n, e),
            (n._getModelOrProxy = function (t, n) {
              return n[t];
            }),
            (n.getDerivedStateFromProps = function (t, r) {
              var e = t,
                o = babelHelpers.extends({}, r.proxies),
                a = !1;
              if (!r.hasBroken)
                for (var i = r.props, l = 0; l < u.length; l++) {
                  var s = u[l],
                    c = s.name,
                    d = s.getModel(n._getModelOrProxy(c, i)),
                    m = s.getModelAndValidate(n._getModelOrProxy(c, t));
                  d !== m && (m ? (o[c] = s.createProxy(m)) : (a = !0));
                }
              return { props: e, proxies: o, hasBroken: a };
            }));
          var r = n.prototype;
          return (
            (r.componentDidUpdate = function (t) {
              if (!this.state.hasBroken)
                for (var e = 0; e < u.length; e++) {
                  var r = u[e],
                    o = r.name,
                    a = r.getModel(n._getModelOrProxy(o, t)),
                    i = r.getModelAndValidate(
                      n._getModelOrProxy(o, this.props),
                    );
                  if (a !== i && (r.detachConcern(a, this._rr), i)) {
                    var l = this.state.proxies[o];
                    r.attachConcern(i, l.proxyBitMask, this._rr);
                  }
                }
            }),
            (r.componentWillUnmount = function () {
              if (!this.state.hasBroken)
                for (var e = 0; e < u.length; e++) {
                  var t = u[e];
                  t.detachConcern(
                    t.getModel(n._getModelOrProxy(t.name, this.props)),
                    this._rr,
                  );
                }
            }),
            (r.render = function () {
              var e = this.state,
                n = e.hasBroken,
                r = e.proxies;
              return n
                ? null
                : c.jsx(
                    t,
                    babelHelpers.extends(
                      { ref: this.setComponent },
                      this.props,
                      r,
                    ),
                  );
            }),
            n
          );
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent)),
        (i.displayName = "State(" + l + ")"),
        (i.wrappedComponent = null),
        i
      );
    }
    l.default = d;
  },
  98,
);
