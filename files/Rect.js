__d(
  "Rect",
  ["invariant", "$", "FBLogger", "Vector", "react", "vulture"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = (function () {
        function e(t, n, o, a, i) {
          return arguments.length === 1
            ? t instanceof e
              ? t
              : t instanceof r("Vector")
                ? new e(t.y, t.x, t.y, t.x, t.domain)
                : (typeof t == "string" && (t = r("$")(t)),
                  e.getElementBounds(t))
            : ((typeof t == "number" &&
                typeof n == "number" &&
                typeof o == "number" &&
                typeof a == "number" &&
                (!i || typeof i == "string")) ||
                s(0, 1087),
              Object.assign(this, {
                t: t,
                r: n,
                b: o,
                l: a,
                domain: i || "pure",
              }),
              this);
        }
        var t = e.prototype;
        return (
          (t.w = function () {
            return this.r - this.l;
          }),
          (t.h = function () {
            return this.b - this.t;
          }),
          (t.getWidth = function () {
            return this.w();
          }),
          (t.getHeight = function () {
            return this.h();
          }),
          (t.toString = function () {
            return (
              "((" +
              this.l +
              ", " +
              this.t +
              "), (" +
              this.r +
              ", " +
              this.b +
              "))"
            );
          }),
          (t.contains = function (n) {
            n = new e(n).convertTo(this.domain);
            var t = this;
            return t.l <= n.l && t.r >= n.r && t.t <= n.t && t.b >= n.b;
          }),
          (t.intersection = function (n) {
            r("vulture")("-okNV-VjjAXl100qGSihEqDI6Ps=");
            var t = n.convertTo(this.domain),
              o = Math.min(this.b, t.getBottom()),
              a = Math.max(this.l, t.getLeft()),
              i = Math.min(this.r, t.getRight()),
              l = Math.max(this.t, t.getTop());
            return o > l && i > a ? new e(l, i, o, a) : null;
          }),
          (t.isEqualTo = function (t) {
            return (
              this.t === t.t &&
              this.r === t.r &&
              this.b === t.b &&
              this.l === t.l &&
              this.domain === t.domain
            );
          }),
          (t.add = function (n, o) {
            if (arguments.length === 1)
              return (
                n instanceof e &&
                  n.domain != "pure" &&
                  (n = n.convertTo(this.domain)),
                n instanceof r("Vector") ? this.add(n.x, n.y) : this
              );
            var t = parseFloat(n),
              a = parseFloat(o);
            return new e(
              this.t + a,
              this.r + t,
              this.b + a,
              this.l + t,
              this.domain,
            );
          }),
          (t.sub = function (t, n) {
            return arguments.length === 1 && t instanceof r("Vector")
              ? this.add(t.mul(-1))
              : typeof t == "number" && typeof n == "number"
                ? this.add(-t, -n)
                : this;
          }),
          (t.rotateAroundOrigin = function (n) {
            var t = this.getCenter().rotate((n * Math.PI) / 2),
              r = 0,
              o = 0;
            n % 2
              ? ((r = this.h()), (o = this.w()))
              : ((r = this.w()), (o = this.h()));
            var a = t.y - o / 2,
              i = t.x - r / 2,
              l = a + o,
              s = i + r;
            return new e(a, s, l, i, this.domain);
          }),
          (t.boundWithin = function (t) {
            var e = 0,
              n = 0;
            return (
              this.l < t.l
                ? (e = t.l - this.l)
                : this.r > t.r && (e = t.r - this.r),
              this.t < t.t
                ? (n = t.t - this.t)
                : this.b > t.b && (n = t.b - this.b),
              this.add(e, n)
            );
          }),
          (t.getCenter = function () {
            return new (r("Vector"))(
              this.l + this.w() / 2,
              this.t + this.h() / 2,
              this.domain,
            );
          }),
          (t.getTop = function () {
            return this.t;
          }),
          (t.getRight = function () {
            return this.r;
          }),
          (t.getBottom = function () {
            return this.b;
          }),
          (t.getLeft = function () {
            return this.l;
          }),
          (t.getArea = function () {
            return (this.b - this.t) * (this.r - this.l);
          }),
          (t.getPositionVector = function () {
            return new (r("Vector"))(this.l, this.t, this.domain);
          }),
          (t.getDimensionVector = function () {
            return new (r("Vector"))(this.w(), this.h(), "pure");
          }),
          (t.convertTo = function (n) {
            if (this.domain == n) return this;
            if (n == "pure")
              return new e(this.t, this.r, this.b, this.l, "pure");
            if (this.domain == "pure")
              return (
                r("FBLogger")("Rect").mustfix(
                  "Unable to convert a pure rect to %s coordinates.",
                  n,
                ),
                new e(0, 0, 0, 0)
              );
            var t = new (r("Vector"))(this.l, this.t, this.domain).convertTo(n);
            return new e(t.y, t.x + this.w(), t.y + this.h(), t.x, n);
          }),
          (e.deserialize = function (n) {
            var t = n.split(":");
            return new e(
              parseFloat(t[1]),
              parseFloat(t[2]),
              parseFloat(t[3]),
              parseFloat(t[0]),
            );
          }),
          (e.newFromVectors = function (n, r) {
            return new e(n.y, n.x + r.x, n.y + r.y, n.x, n.domain);
          }),
          (e.getElementBounds = function (n) {
            return e.newFromVectors(
              r("Vector").getElementPosition(n),
              r("Vector").getElementDimensions(n),
            );
          }),
          (e.getViewportBounds = function () {
            return e.newFromVectors(
              r("Vector").getScrollPosition(),
              r("Vector").getViewportDimensions(),
            );
          }),
          (e.getViewportWithoutScrollbarsBounds = function () {
            return e.newFromVectors(
              r("Vector").getScrollPosition(),
              r("Vector").getViewportWithoutScrollbarDimensions(),
            );
          }),
          (e.minimumBoundingBox = function (n) {
            for (
              var t = new e(1 / 0, -1 / 0, -1 / 0, 1 / 0), r, o = 0;
              o < n.length;
              o++
            )
              ((r = n[o]),
                (t.t = Math.min(t.t, r.t)),
                (t.r = Math.max(t.r, r.r)),
                (t.b = Math.max(t.b, r.b)),
                (t.l = Math.min(t.l, r.l)));
            return t;
          }),
          e
        );
      })();
    l.default = c;
  },
  98,
);
