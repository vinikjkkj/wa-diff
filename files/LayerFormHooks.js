__d(
  "LayerFormHooks",
  ["Event"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      "use strict";
      function e(e) {
        ((this.$2 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this.$1.getRoot();
          this.$2 = [
            n("Event").listen(e, "submit", this.$3.bind(this)),
            n("Event").listen(e, "success", this.$4.bind(this)),
            n("Event").listen(e, "error", this.$5.bind(this)),
          ];
        }),
        (t.disable = function () {
          (this.$2.forEach(function (e) {
            e.remove();
          }),
            (this.$2 = null));
        }),
        (t.$3 = function (t) {
          this.$1.inform("submit", t) === !1 && t.kill();
        }),
        (t.$4 = function (t) {
          this.$1.inform("success", t) === !1 && t.kill();
        }),
        (t.$5 = function (t) {
          var e = t.getData();
          this.$1.inform("error", { response: e.response }) === !1 && t.kill();
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
