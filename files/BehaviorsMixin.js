__d(
  "BehaviorsMixin",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e(e) {
          ((this.$1 = e), (this.$2 = !1));
        }
        var t = e.prototype;
        return (
          (t.enable = function () {
            this.$2 || ((this.$2 = !0), this.$1.enable());
          }),
          (t.disable = function () {
            this.$2 && ((this.$2 = !1), this.$1.disable());
          }),
          e
        );
      })(),
      l = 1;
    function s(e) {
      return (e.__BEHAVIOR_ID || (e.__BEHAVIOR_ID = l++), e.__BEHAVIOR_ID);
    }
    var u = {
        enableBehavior: function (n) {
          this._behaviors || (this._behaviors = {});
          var t = s(n);
          return (
            this._behaviors[t] || (this._behaviors[t] = new e(new n(this))),
            this._behaviors[t].enable(),
            this
          );
        },
        disableBehavior: function (t) {
          if (this._behaviors) {
            var e = s(t);
            this._behaviors[e] && this._behaviors[e].disable();
          }
          return this;
        },
        enableBehaviors: function (t) {
          return (t.forEach(this.enableBehavior, this), this);
        },
        destroyBehaviors: function () {
          if (this._behaviors) {
            for (var e in this._behaviors) this._behaviors[e].disable();
            this._behaviors = {};
          }
        },
        hasBehavior: function (t) {
          return this._behaviors && s(t) in this._behaviors;
        },
      },
      c = u;
    i.default = c;
  },
  66,
);
