__d(
  "ArtillerySequence",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    var e = 0,
      u = (function () {
        function t(t) {
          (t || s(0, 1496),
            "description" in t || s(0, 1497, JSON.stringify(t)),
            (this.$1 = !1),
            (this.$2 = babelHelpers.extends({}, t, { id: (e++).toString(36) })),
            (this.$3 = []));
        }
        var n = t.prototype;
        return (
          (n.getID = function () {
            return this.$2.id;
          }),
          (n.addSegment = function () {
            var e = this;
            !this.$1 || s(0, 37342, this.$2.description);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              n.forEach(function (t) {
                e.$3.push(t.getID());
              }),
              this
            );
          }),
          (n.setPosted = function () {
            return ((this.$1 = !0), this);
          }),
          (n.getPostData = function () {
            return babelHelpers.extends({}, this.$2, {
              id: this.$2.id,
              segments: this.$3.slice(),
            });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
