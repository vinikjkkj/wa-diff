__d(
  "FluxReduceStore",
  [
    "invariant",
    "AdsTransitionExemptActions",
    "TypedFluxStore",
    "abstractMethod",
    "react",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e || (e = o("react"))).startTransition,
      c = null;
    try {
      r("requireWeak")("AdsEditorTransitionConfig", function (e) {
        c = e;
      });
    } catch (e) {}
    var d = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.$FluxReduceStore$p_1 = n.getInitialState()),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getState = function () {
          return this.$FluxReduceStore$p_1;
        }),
        (n.getInitialState = function () {
          return r("abstractMethod")("FluxReduceStore", "getInitialState");
        }),
        (n.reduce = function (t, n) {
          return r("abstractMethod")("FluxReduceStore", "reduce");
        }),
        (n.areEqual = function (t, n) {
          return t === n;
        }),
        (n.__invokeOnDispatch = function (t, n) {
          var e;
          n === void 0 && (n = !0);
          var o = typeof t == "object" ? t : null,
            a = o == null ? void 0 : o.action,
            i =
              (e =
                typeof a == "object" ? (a == null ? void 0 : a.type) : null) !=
              null
                ? e
                : o == null
                  ? void 0
                  : o.type,
            l = typeof i == "string" ? i : null;
          if (
            c != null &&
            c.shouldUseTransitions() &&
            !r("AdsTransitionExemptActions").shouldSkipTransition(l)
          ) {
            this.__invokeOnDispatchWithTransition(t, n);
            return;
          }
          this.__invokeOnDispatchWithoutTransition(t, n);
        }),
        (n.__invokeOnDispatchWithTransition = function (t, n) {
          var e = this;
          (n === void 0 && (n = !0),
            u(function () {
              e.__invokeOnDispatchWithoutTransition(t, n);
            }));
        }),
        (n.__invokeOnDispatchWithoutTransition = function (t, n) {
          (n === void 0 && (n = !0), (this.__changed = !1));
          var e = this.$FluxReduceStore$p_1,
            r = this.reduce(e, t);
          (r !== void 0 || s(0, 2189, this.constructor.name),
            this.areEqual(e, r) ||
              ((this.$FluxReduceStore$p_1 = r), this.__emitChange()),
            n && this.__inform());
        }),
        (n.__setState = function (t) {
          this.$FluxReduceStore$p_1 = t;
        }),
        t
      );
    })(r("TypedFluxStore"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
