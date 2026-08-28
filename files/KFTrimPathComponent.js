__d(
  "KFTrimPathComponent",
  ["KFTrimPath", "KeyframesTween"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [0, 0],
      u = function (t) {
        return t.map(function (e) {
          var t,
            n,
            r,
            o,
            a = s,
            i = s;
          return (
            ((t = e.control1) == null ? void 0 : t.x) != null &&
              ((n = e.control1) == null ? void 0 : n.y) != null &&
              (a = [e.control1.x, e.control1.y]),
            ((r = e.control2) == null ? void 0 : r.x) != null &&
              ((o = e.control2) == null ? void 0 : o.y) != null &&
              (i = [e.control2.x, e.control2.y]),
            { type: e.type, point: [e.point.x, e.point.y], c1: a, c2: i }
          );
        });
      },
      c = (function () {
        function t(t, n, r, a, i, l, s, u, c, d) {
          ((this.$1 = t),
            (this.$2 = n),
            (this.$3 = r),
            (this.$4 = a),
            (this.$6 = i),
            (this.$7 = l),
            (this.strokeLineCap = s),
            (this.strokeLineJoin = u),
            (this.$5 = c),
            (this.vectorCompositeOrder = d),
            (this.path = (e || (e = o("KeyframesTween"))).maybeTweenPath(
              0,
              this.$1,
            )),
            this.$8(0, !0));
        }
        var n = t.prototype;
        return (
          (n.$8 = function (n, r) {
            (r !== !0 &&
              (this.path = (e || (e = o("KeyframesTween"))).maybeTweenPath(
                n,
                this.$1,
              )),
              this.$2 != null &&
                (this.trimStart = (
                  e || (e = o("KeyframesTween"))
                ).maybeTweenScalar(n, this.$2)),
              this.$3 != null &&
                (this.trimEnd = (
                  e || (e = o("KeyframesTween"))
                ).maybeTweenScalar(n, this.$3)),
              this.$4 != null &&
                (this.trimOffset = (
                  e || (e = o("KeyframesTween"))
                ).maybeTweenScalar(n, this.$4)),
              this.$5 != null &&
                (this.miterLimit = (
                  e || (e = o("KeyframesTween"))
                ).maybeTweenScalar(n, this.$5)),
              this.$6 != null &&
                (this.strokeColor = (
                  e || (e = o("KeyframesTween"))
                ).maybeTweenColor(n, this.$6)),
              this.$7 != null &&
                (this.strokeWidth = (
                  e || (e = o("KeyframesTween"))
                ).maybeTweenScalar(n, this.$7)));
          }),
          (n.update = function (t) {
            this.$8(t);
          }),
          (n.getPath = function () {
            var e, t, n;
            return o("KFTrimPath").trimPath(
              u(this.path),
              (e = this.trimStart) != null ? e : void 0,
              (t = this.trimEnd) != null ? t : void 0,
              (n = this.trimOffset) != null ? n : void 0,
            );
          }),
          (n.getStrokeData = function () {
            return this.strokeWidth == null || this.strokeColor == null
              ? null
              : {
                  miterLimit: this.miterLimit,
                  strokeWidth: this.strokeWidth,
                  strokeColor: this.strokeColor,
                  strokeLineCap: this.strokeLineCap,
                  strokeLineJoin: this.strokeLineJoin,
                };
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
