__d(
  "ContextualLayerAutoFlip",
  [
    "ContextualLayerAlignmentEnum",
    "ContextualLayerDimensions",
    "DOMDimensions",
    "Rect",
    "Vector",
    "getDocumentScrollElement",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new (r("Rect"))(t).convertTo(e.domain),
        o = Math.max(e.l, n.l),
        a = Math.min(e.r, n.r);
      return Math.max(a - o, 0);
    }
    var s = (function () {
      function t(e) {
        ((this.$2 = null), (this.$1 = e));
      }
      var n = t.prototype;
      return (
        (n.enable = function () {
          var e = this;
          ((this.$2 = this.$1.subscribe("adjust", function (t, n) {
            return e.$3(t, n);
          })),
            this.$1.isShown() && this.$1.updatePosition());
        }),
        (n.disable = function () {
          (this.$2 && (this.$2.unsubscribe(), (this.$2 = null)),
            this.$1.isShown() && this.$1.updatePosition());
        }),
        (n.$3 = function (n, a) {
          var t = this.getValidPositions(a);
          if (!t.length) {
            a.invalidate();
            return;
          }
          var i = o("ContextualLayerDimensions").getViewportRect(this.$1),
            l = this.$4(a),
            s,
            u,
            c;
          for (s = 0; s < l.length; s++)
            for (a.setAlignment(l[s]), u = 0; u < t.length; u++)
              if (
                (a.setPosition(t[u]),
                (c = o("ContextualLayerDimensions").getLayerRect(this.$1, a)),
                i.contains(c))
              )
                return;
          var d = -1;
          if (a.getPreferMoreContentShownRect()) {
            var m = o("DOMDimensions").getDocumentDimensions(),
              p = new (r("Rect"))(i).convertTo("document"),
              _ = 99999;
            for (u = 0; u < t.length; u++) {
              (a.setPosition(t[u]),
                (c = o("ContextualLayerDimensions").getLayerRect(this.$1, a)));
              var f = new (r("Rect"))(c).convertTo("document");
              if (f.l >= 0 && f.r <= m.width && f.t >= 43 && f.b <= m.height) {
                var g = p.l - f.l,
                  h = f.r - p.r,
                  y = p.t - f.t,
                  C = f.b - p.b,
                  b =
                    (g > 0 ? g : 0) +
                    (h > 0 ? h : 0) +
                    (y > 0 ? y : 0) +
                    (C > 0 ? C : 0);
                b < _ && ((d = u), (_ = b));
              }
            }
          }
          this.__setBestPosition(d, a, t);
          var v,
            S = 0,
            R = 0;
          for (s = 0; s < l.length; s++)
            (a.setAlignment(l[s]),
              (c = o("ContextualLayerDimensions").getLayerRect(this.$1, a)),
              (v = e(i, c)),
              v > R && ((R = v), (S = s)));
          a.setAlignment(l[S]);
        }),
        (n.__setBestPosition = function (t, n, r) {
          t >= 0
            ? n.setPosition(r[t])
            : n.setPosition(r.includes("below") ? "below" : r[0]);
        }),
        (n.getValidPositions = function (t) {
          var e = [t.getPosition(), t.getOppositePosition()],
            n = this.$1.getContextScrollParent();
          if (n === window || n === r("getDocumentScrollElement")()) return e;
          var o = this.$1.getContext(),
            a = r("Vector").getElementPosition(n, "viewport").y,
            i = r("Vector").getElementPosition(o, "viewport").y;
          if (t.isVertical())
            return e.filter(function (e) {
              if (e === "above") return i >= a;
              var t = a + n.offsetHeight,
                r = i + o.offsetHeight;
              return r <= t;
            });
          var l = a + n.offsetHeight;
          return i >= a && i + o.offsetHeight <= l ? e : [];
        }),
        (n.$4 = function (t) {
          var e = Array.from(r("ContextualLayerAlignmentEnum").values),
            n = t.getAlignment(),
            o = e.indexOf(n);
          return (o > 0 && (e.splice(o, 1), e.unshift(n)), e);
        }),
        t
      );
    })();
    l.default = s;
  },
  98,
);
