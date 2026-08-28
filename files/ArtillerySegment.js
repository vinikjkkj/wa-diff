__d(
  "ArtillerySegment",
  ["invariant", "cr:9985"],
  function (t, n, r, o, a, i, l, s) {
    var e = 0,
      u = (function () {
        function t(t) {
          (t || s(0, 1496),
            ("category" in t && "description" in t) ||
              s(0, 3138, JSON.stringify(t)),
            (this.$1 = !1),
            (this.$2 = babelHelpers.extends({}, t, { id: (e++).toString(36) })),
            (this.$3 = []));
        }
        var r = t.prototype;
        return (
          (r.getID = function () {
            return this.$2.id;
          }),
          (r.begin = function () {
            return ((this.$2.begin = n("cr:9985")()), this);
          }),
          (r.end = function () {
            return ((this.$2.end = n("cr:9985")()), this);
          }),
          (r.appendChild = function () {
            var e = this;
            !this.$1 || s(0, 37302, this.$2.description);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              n.forEach(function (t) {
                e.$3.push(t.getID());
              }),
              this
            );
          }),
          (r.setPosted = function () {
            return ((this.$1 = !0), this);
          }),
          (r.getPostData = function () {
            return babelHelpers.extends({}, this.$2, {
              id: this.$2.id,
              children: this.$3.slice(),
            });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
