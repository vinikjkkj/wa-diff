__d(
  "WAWebHatchAvatarVideo",
  [],
  function (t, n, r, o, a, i) {
    var e = 1500,
      l = 250;
    function s(e) {
      return (function (e) {
        return e === "responding" ||
          e === "composing" ||
          e === "working" ||
          e === "compacting" ||
          e === "waiting_for_subagents"
          ? "working"
          : e === "making_something"
            ? "making_something"
            : e === "needs_approval" || e === "out_of_credits"
              ? null
              : "idle";
      })(e == null ? void 0 : e.toLowerCase());
    }
    var u = (function () {
      function t() {
        ((this.shown = "idle"),
          (this.$1 = null),
          (this.$2 = !1),
          (this.$3 = 0));
      }
      var n = t.prototype;
      return (
        (n.update = function (n, r) {
          if (n === this.shown) return ((this.$2 = !1), null);
          (!this.$2 || n !== this.$1) &&
            ((this.$1 = n), (this.$2 = !0), (this.$3 = r));
          var t = n === "idle" ? l : e,
            o = this.$3 + t - r;
          return o > 0 ? o : ((this.shown = n), (this.$2 = !1), null);
        }),
        t
      );
    })();
    ((i.getHatchAvatarVideoVariant = s), (i.HatchAvatarVideoDebounce = u));
  },
  66,
);
