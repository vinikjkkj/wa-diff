__d(
  "WAWebListenerHoc_DEPRECATED",
  [
    "WAAbortError",
    "WAWebDocumentFlushed",
    "WAWebHocComponent_DEPRECATED.react",
    "WAWebUIListener",
    "WAWebUiIdleEventBus",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = (function () {
        function e() {
          var e = this;
          ((this._mounted = !1),
            (this._unmounted = !1),
            (this._listeners = new Set()),
            (this._remove = function (t) {
              (t.disengage(), e._listeners.delete(t));
            }));
        }
        var t = e.prototype;
        return (
          (t._add = function (t) {
            (this._listeners.add(t), this._mounted && t.engage());
          }),
          (t.internalUseOnlyMarkMounted = function () {
            ((this._mounted = !0),
              (this._unmounted = !1),
              this._listeners.forEach(function (e) {
                e.engage();
              }));
          }),
          (t.internalUseOnlyMarkUnmounted = function () {
            ((this._unmounted = !0),
              (this._mounted = !1),
              this._listeners.forEach(this._remove),
              this._abortController && this._abortController.abort());
          }),
          (t.add = function (t, n, r, a) {
            var e = this,
              i = new (o("WAWebUIListener").Listener)(
                t,
                n,
                function () {
                  e._unmounted || r.apply(this, arguments);
                },
                a,
                r,
              );
            this._add(i);
          }),
          (t.addOnce = function (t, n, r, a) {
            var e = this,
              i = new (o("WAWebUIListener").Listener)(
                t,
                n,
                function () {
                  (e._remove(i), e._unmounted || r.apply(this, arguments));
                },
                a,
                r,
              );
            this._add(i);
          }),
          (t.remove = function (t, n, r, o) {
            var e = this;
            this._listeners.forEach(function (a) {
              a.represents(t, n, r, o) && e._remove(a);
            });
          }),
          (t.uiIdle = function (t) {
            if (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy) {
              this.addOnce(
                o("WAWebUiIdleEventBus").UiIdleEventBus,
                "ui_idle",
                t,
              );
              return;
            }
            ((this._abortController =
              this._abortController || new AbortController()),
              o("WAWebDocumentFlushed")
                .documentFlushed({ signal: this._abortController.signal })
                .then(
                  function () {
                    t();
                  },
                  function (e) {
                    if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
                  },
                ));
          }),
          (t.testsOnlyGetListeners = function () {
            return this._listeners;
          }),
          e
        );
      })();
    function c(e) {
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
              (e.listeners = new u()),
              babelHelpers.assertThisInitialized(e) ||
                babelHelpers.assertThisInitialized(e)
            );
          }
          babelHelpers.inheritsLoose(n, t);
          var r = n.prototype;
          return (
            (r.componentDidMount = function () {
              this.listeners.internalUseOnlyMarkMounted();
            }),
            (r.componentWillUnmount = function () {
              this.listeners.internalUseOnlyMarkUnmounted();
            }),
            (r.render = function () {
              return s.jsx(
                e,
                babelHelpers.extends({ ref: this.setComponent }, this.props, {
                  listeners: this.listeners,
                }),
              );
            }),
            n
          );
        })(o("WAWebHocComponent_DEPRECATED.react").WrappedComponent)),
        (t.defaultProps = (n = e.defaultProps) != null ? n : void 0),
        (t.displayName =
          "Listener(" +
          o("WAWebHocComponent_DEPRECATED.react").getHocComponentDisplayName(
            e,
          ) +
          ")"),
        (t.wrappedComponent = null),
        t
      );
    }
    ((l.Listeners = u), (l.ListenerHOC = c));
  },
  98,
);
