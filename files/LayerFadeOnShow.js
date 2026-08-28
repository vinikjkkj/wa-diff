__d(
  "LayerFadeOnShow",
  ["Bootloader", "Run", "emptyFunction", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this._layer = e),
          o("Run").onAfterLoad(function () {
            r("Bootloader").loadModules(
              ["CSSFade"],
              r("emptyFunction"),
              "LayerFadeOnShow",
            );
          }));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          this._subscriptions = [
            this._layer.subscribe("show", function () {
              return e._animate();
            }),
          ];
        }),
        (t.disable = function () {
          if (this._subscriptions) {
            for (; this._subscriptions.length; )
              this._subscriptions.pop().unsubscribe();
            this._subscriptions = null;
          }
        }),
        (t._getDuration = function () {
          return 100;
        }),
        (t._animate = function () {
          var e = this,
            t = this._layer.getRoot();
          r("ifRequired")(
            "CSSFade",
            function (n) {
              n.show(t, { duration: e._getDuration() });
            },
            function () {},
          );
        }),
        (e.forDuration = function (n) {
          var t = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (babelHelpers.inheritsLoose(t, e), t);
          })(e);
          return (
            (t.prototype._getDuration = r("emptyFunction").thatReturns(n)),
            t
          );
        }),
        e
      );
    })();
    ((e.prototype._subscriptions = null), (l.default = e));
  },
  98,
);
