__d(
  "KFRenderSystem",
  ["KFCanvasRenderer", "KFComponentNames", "KeyframesTrackMattes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && e !== 0;
    }
    function s(e) {
      var t,
        n = r("KeyframesTrackMattes")[1];
      return e == null ? n : (t = r("KeyframesTrackMattes")[e]) != null ? t : n;
    }
    var u = (function () {
      function t(e, t, n, o) {
        ((this.$1 = o),
          (this.$2 = e),
          (this.$3 = n),
          (this.$4 = t),
          (this.$5 = { canvasRenderer: new (r("KFCanvasRenderer"))(o) }),
          this.$6());
      }
      var n = t.prototype;
      return (
        (n.setContainer = function (t) {
          ((this.$4 = t), this.$6());
        }),
        (n.$6 = function () {
          this.$4.appendChild(this.$5.canvasRenderer.getElement());
        }),
        (n.update = function () {
          var e = this.$2.getEntitiesWithComponent(
              o("KFComponentNames").ROOT,
            )[0],
            t = this.$2.getComponent(e, o("KFComponentNames").SCENE);
          (this.$5.canvasRenderer.prepForFrame(),
            this.$1.wasUpdated &&
              (this.$5.canvasRenderer.resize(), (this.$1.wasUpdated = !1)),
            t != null && this.$7(t));
        }),
        (n.$8 = function (t, n) {
          var e = this.$2.getAllComponentsForEntity(t),
            r = n || this.$5.canvasRenderer.getRootContext(),
            a = this.$5.canvasRenderer.getOffscreenCanvas(),
            i = this.$5.canvasRenderer.getOffscreenCanvas(),
            l = this.$2.getEntity(
              e[o("KFComponentNames").COMPOSITING].trackMatteId,
            ),
            u = r.getTransform();
          (this.$9(t, a.ctx, !0),
            this.$9(l, i.ctx, !0),
            r.setTransform(1, 0, 0, 1, 0, 0),
            a.ctx.setTransform(1, 0, 0, 1, 0, 0),
            i.ctx.setTransform(1, 0, 0, 1, 0, 0),
            this.$5.canvasRenderer.setGlobalCompositeOperation(
              a.ctx,
              s(e[o("KFComponentNames").COMPOSITING].trackMatteType),
            ),
            this.$5.canvasRenderer.drawImage(a.ctx, i.canvas),
            this.$5.canvasRenderer.drawImage(r, a.canvas),
            r.setTransform(u.a, u.b, u.c, u.d, u.e, u.f));
        }),
        (n.$7 = function (t, n) {
          for (var e = t.getEntities(), r = 0; r < e.length; r++)
            this.$10(e[r], n);
        }),
        (n.$9 = function (t, n, r) {
          r === void 0 && (r = !1);
          var e = this.$2.getAllComponentsForEntity(t),
            a = n || this.$5.canvasRenderer.getRootContext(),
            i = r;
          if (
            (this.$5.canvasRenderer.save(a),
            e[o("KFComponentNames").TRANSFORM] &&
              this.$5.canvasRenderer.applyTransform(
                a,
                e[o("KFComponentNames").TRANSFORM].getWorldTransform(),
              ),
            e[o("KFComponentNames").COMPOSITING])
          ) {
            ((i = i || e[o("KFComponentNames").COMPOSITING].isGroup),
              this.$5.canvasRenderer.setOpacity(
                a,
                e[o("KFComponentNames").COMPOSITING].getOpacity() *
                  a.globalAlpha,
              ));
            var l = e[o("KFComponentNames").COMPOSITING].getClippingPath();
            l && this.$5.canvasRenderer.applyClippingPath(a, l);
          }
          if (e[o("KFComponentNames").IMAGE]) {
            var s = this.$3.getImage(e[o("KFComponentNames").IMAGE].imageId);
            s && this.$5.canvasRenderer.drawImage(a, s.src);
          }
          var u = !1;
          (e[o("KFComponentNames").TRIM_PATH] &&
            (u = this.$5.canvasRenderer.drawTrimPath(
              a,
              e[o("KFComponentNames").TRIM_PATH],
            )),
            e[o("KFComponentNames").SHAPE] &&
              !u &&
              this.$5.canvasRenderer.drawShape(
                a,
                e[o("KFComponentNames").SHAPE],
              ));
          var c = e[o("KFComponentNames").CHILDREN]
            ? e[o("KFComponentNames").CHILDREN].getChildren()
            : void 0;
          if (c)
            for (var d = 0; d < c.length; d++) {
              var m = this.$2.getComponent(c[d], o("KFComponentNames").SCENE);
              m ? this.$7(m, a) : i && this.$10(c[d], a, !0);
            }
          this.$5.canvasRenderer.restore(a);
        }),
        (n.$10 = function (n, r, a) {
          var t, i;
          a === void 0 && (a = !1);
          var l = this.$2.getAllComponentsForEntity(n);
          (l[o("KFComponentNames").TIME] &&
            !l[o("KFComponentNames").TIME].isInBounds()) ||
            (((t = l[o("KFComponentNames").COMPOSITING]) == null
              ? void 0
              : t.isTrackMatte) !== !0 &&
              (e(
                (i = l[o("KFComponentNames").COMPOSITING]) == null
                  ? void 0
                  : i.trackMatteId,
              )
                ? this.$8(n, r)
                : this.$9(n, r, a)));
        }),
        (n.toString = function () {
          return "RENDER";
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
