__d(
  "KFCanvasRenderer",
  [
    "KFCanvasPool",
    "KFColorUtils",
    "KFMat2d",
    "KFSchema",
    "KeyframesCanvasUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e), (this.$2 = new (r("KFCanvasPool"))(this.$1)));
        var t = this.$2.createPermanantCanvas();
        ((this.$3 = t.canvas),
          (this.$4 = t.ctx),
          (this.$5 = o("KFMat2d").createMat2d()));
      }
      var t = e.prototype;
      return (
        (t.resize = function () {
          ((this.$3.width = this.$1.width.physical),
            (this.$3.height = this.$1.height.physical),
            (this.$3.style.width = this.$1.width.logical + "px"),
            (this.$3.style.height = this.$1.height.logical + "px"),
            this.$4.setTransform(1, 0, 0, 1, 0, 0));
          var e = [
            this.$1.width.getPhysicalChangeRatio(),
            this.$1.height.getPhysicalChangeRatio(),
          ];
          (o("KFMat2d").scale(this.$5, this.$5, e), this.$2.resizeAll());
        }),
        (t.getRootContext = function () {
          return this.$4;
        }),
        (t.getSize = function () {
          return this.$1;
        }),
        (t.getOffscreenCanvas = function () {
          var e = this.$2.getCanvas();
          return (this.setGlobalCompositeOperation(e.ctx, "source-over"), e);
        }),
        (t.setGlobalCompositeOperation = function (t, n) {
          t.globalCompositeOperation = n;
        }),
        (t.getElement = function () {
          return this.$3;
        }),
        (t.setOpacity = function (t, n) {
          var e = t || this.$4;
          e.globalAlpha = n;
        }),
        (t.applyTransform = function (t, n) {
          o("KFMat2d").multiply(n, this.$5, n);
          var e = t || this.$4;
          e.setTransform(n[0], n[1], n[2], n[3], n[4], n[5]);
        }),
        (t.drawShape = function (t, n) {
          var e = t || this.$4;
          this.drawPath(e, n.getPath());
          var r = !1,
            a = !0;
          n.gradientFill
            ? (e.fillStyle = s(e, n.gradientFill))
            : n.fillColor
              ? (e.fillStyle = o("KFColorUtils").getRGBAString(
                  n.fillColor.get(),
                ))
              : (a = !1);
          var i = n.strokeWidth != null ? n.strokeWidth.get() : void 0;
          (i !== 0 &&
            i !== void 0 &&
            ((r = !0),
            n.strokeColor &&
              (e.strokeStyle = o("KFColorUtils").getRGBAString(
                n.strokeColor.get(),
              )),
            (e.lineCap = u(n.strokeLineCap)),
            (e.lineWidth = i)),
            n.vectorCompositeOrder !== 0
              ? (r && e.stroke(), a && e.fill())
              : (a && e.fill(), r && e.stroke()));
        }),
        (t.drawTrimPath = function (t, n) {
          var e = t || this.$4;
          this.drawPath(e, n.getPath());
          var r = n.getStrokeData();
          if (!r) return !1;
          var a = r.miterLimit,
            i = r.strokeColor,
            l = r.strokeLineCap,
            s = r.strokeLineJoin,
            c = r.strokeWidth;
          return c == null || c <= 0
            ? !1
            : ((e.strokeStyle = o("KFColorUtils").getRGBAString(
                o("KFColorUtils").kf2ColorToKF3Color(i),
              )),
              (e.lineJoin = o("KeyframesCanvasUtils").LINE_JOINS[s]),
              s === 0 && a != null && (e.miterLimit = a),
              (e.lineCap = u(l)),
              (e.lineWidth = c),
              e.stroke(),
              !0);
        }),
        (t.drawPath = function (t, n) {
          var e = t || this.$4;
          e.beginPath();
          for (var r = n.length, o = 0; o < r; o++)
            n[o].type === 0
              ? e.moveTo(n[o].point[0], n[o].point[1])
              : n[o].type === 1
                ? e.lineTo(n[o].point[0], n[o].point[1])
                : n[o].type === 2
                  ? e.quadraticCurveTo(
                      n[o].c1[0],
                      n[o].c1[1],
                      n[o].point[0],
                      n[o].point[1],
                    )
                  : n[o].type === 3 &&
                    e.bezierCurveTo(
                      n[o].c1[0],
                      n[o].c1[1],
                      n[o].c2[0],
                      n[o].c2[1],
                      n[o].point[0],
                      n[o].point[1],
                    );
        }),
        (t.save = function (t) {
          var e = t || this.$4;
          e.save();
        }),
        (t.restore = function (t) {
          var e = t || this.$4;
          e.restore();
        }),
        (t.applyClippingPath = function (t, n) {
          var e = t || this.$4;
          (this.drawPath(e, n), e.clip());
        }),
        (t.drawImage = function (t, n) {
          var e = t || this.$4;
          e.drawImage(n, 0, 0);
        }),
        (t.prepForFrame = function () {
          (this.$2.clearAllPermanant(),
            this.$2.clearAllAllocated(),
            this.$2.freeAll());
        }),
        e
      );
    })();
    function s(e, t) {
      var n,
        a,
        i,
        l = t.positions.get(),
        s = t.colors.get(),
        u = (n = t.colorStart) == null ? void 0 : n.get(),
        d = (a = t.colorEnd) == null ? void 0 : a.get(),
        m = t.rampStart.get(),
        p = t.rampEnd.get();
      if (t.type === r("KFSchema").GradientType.Radial) {
        var _ = t.highlightLength ? t.highlightLength.get() : 0,
          f = t.highlightAngle ? t.highlightAngle.get() : 0,
          g = m[0],
          h = m[1],
          y = Math.sqrt(Math.pow(m[0] - p[0], 2) + Math.pow(m[1] - p[1], 2)),
          C = Math.acos((p[0] - g) / y),
          b = g + y * _ * Math.cos(C - f),
          v = h - y * _ * Math.sin(C - f),
          S = 0;
        (_ !== 0 &&
          (e.clip(),
          (e.fillStyle = o("KFColorUtils").getRGBAString(s[s.length - 1])),
          e.fill(),
          c(e, g, h, y)),
          (i = e.createRadialGradient(b, v, S, g, h, y)));
      } else i = e.createLinearGradient(m[0], m[1], p[0], p[1]);
      if (
        (u &&
          d &&
          (i.addColorStop(0, o("KFColorUtils").getRGBAString(u)),
          i.addColorStop(1, o("KFColorUtils").getRGBAString(d))),
        s)
      )
        for (var R = 0, L = s.length; R < L; R++)
          i.addColorStop(l[R], o("KFColorUtils").getRGBAString(s[R]));
      return i;
    }
    function u(e) {
      var t = r("KFSchema").StrokeLineCap,
        n = t.Butt,
        o = t.Round,
        a = t.Square;
      switch (e) {
        case a:
          return "square";
        case o:
          return "round";
        case n:
        default:
          return "butt";
      }
    }
    function c(e, t, n, r) {
      (e.save(),
        e.beginPath(),
        e.arc(t, n, r, 0, 2 * Math.PI, !0),
        e.closePath(),
        e.clip(),
        e.clearRect(t - r, n - r, r * 2, r * 2),
        e.restore());
    }
    l.default = e;
  },
  98,
);
