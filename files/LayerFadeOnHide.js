__d(
  "LayerFadeOnHide",
  [
    "invariant",
    "CSSFade",
    "Layer",
    "SubscriptionsHandler",
    "UserAgent_DEPRECATED",
    "clearTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e) {
        ((this.$1 = e),
          (this.$3 = new (r("SubscriptionsHandler"))()),
          (this.$2 = null));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          o("UserAgent_DEPRECATED").ie() < 9 ||
            (this.$2 = this.$1.subscribe("starthide", function () {
              return e.$4();
            }));
        }),
        (t.disable = function () {
          (this.$2 && (this.$2.unsubscribe(), (this.$2 = null)),
            this.$3.release());
        }),
        (t.$5 = function () {
          return 150;
        }),
        (t.$4 = function () {
          var e = this,
            t = !0,
            n = r("Layer").subscribe("show", function () {
              (n.unsubscribe(), (t = !1));
            }),
            o = r("setTimeoutAcrossTransitions")(function () {
              (n.unsubscribe(), (n = null));
              var r = function () {
                e.$1.finishHide();
              };
              t ? e.$6(r) : r();
            }, 0);
          return (
            this.$3.addSubscriptions({
              remove: function () {
                r("clearTimeout")(o);
              },
            }),
            !1
          );
        }),
        (t.$6 = function (t) {
          var e = this.$1.getRoot();
          (e != null || s(0, 70),
            r("CSSFade").hide(e, {
              callback: function () {
                t();
              },
              duration: this.$5(),
            }));
        }),
        (e.forDuration = function (n) {
          return (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (babelHelpers.inheritsLoose(t, e), t);
          })(e);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
