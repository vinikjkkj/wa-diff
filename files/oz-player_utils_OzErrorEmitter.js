__d(
  "oz-player/utils/OzErrorEmitter",
  ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          t === void 0 && (t = !1),
          (n = e.call(this) || this),
          (n.$OzErrorEmitter$p_1 = !1),
          (n.$OzErrorEmitter$p_2 = !1),
          (n.$OzErrorEmitter$p_3 = []),
          (n.emitError = function (e) {
            n.$OzErrorEmitter$p_1
              ? n.emit("error", e)
              : n.$OzErrorEmitter$p_2
                ? n.$OzErrorEmitter$p_3.push(e)
                : n.$OzErrorEmitter$p_1 ||
                  r("oz-player/shims/ozvariant")(0, 14038);
          }),
          (n.$OzErrorEmitter$p_2 = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.onError = function (t) {
          this.$OzErrorEmitter$p_1 = !0;
          var e = this.addListener("error", t);
          return (
            this.$OzErrorEmitter$p_2 &&
              this.$OzErrorEmitter$p_3.length > 0 &&
              this.$OzErrorEmitter$p_3.forEach(this.emitError),
            e
          );
        }),
        t
      );
    })(r("oz-player/shims/OzEventEmitter"));
    l.default = e;
  },
  98,
);
