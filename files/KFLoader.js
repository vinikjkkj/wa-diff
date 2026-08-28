__d(
  "KFLoader",
  [
    "BlobFactory",
    "CubicBezier",
    "KFColor",
    "KFComponentNames",
    "KFGradient",
    "KFLoaderUtils",
    "KFManifest",
    "KFPath2d",
    "KFPoint",
    "KFPosition",
    "KFScalar",
    "KFSchema",
    "Promise",
    "flatbuffers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = t.URL || t.webkitURL || {},
      u = new Map(),
      c;
    function d(e, t, n) {
      ((c = !1), u.clear());
      var a = new (o("flatbuffers").ByteBuffer)(e),
        i = r("KFSchema").Document.bufferHasIdentifier(a)
          ? r("KFSchema").Document.getRootAsDocument(a)
          : null;
      (p(i), V(i, n), _(i, null, !0, t, n), m(t));
    }
    function m(e) {
      c
        ? r("KFLoaderUtils").maybeGenerateTrackMatteIDs(e)
        : r("KFLoaderUtils").traverseEntitiesAndApply(e, function (t) {
            var n,
              r = e.getComponent(t, o("KFComponentNames").COMPOSITING),
              a = r == null ? void 0 : r.trackMatteId;
            if (!(r == null || a == null || a === 0)) {
              var i = u.get(a);
              r.trackMatteId =
                (n = i == null ? void 0 : i.getID()) != null ? n : a;
            }
          });
    }
    function p(e, t) {
      for (var n = [], o = e.manifestLength(), a = 0; a < o; a++)
        n.push(e.manifest(a));
      r("KFManifest")(n, t);
    }
    function _(e, t, n, r, a) {
      t = t || e.defaultScene();
      var i = e.scenes(t),
        l = r.createEntity();
      n && r.addComponent(l, o("KFComponentNames").ROOT);
      var s = r.addComponent(
        l,
        o("KFComponentNames").SCENE,
        [],
        i.duration() * 1e3,
        i.frameRate(),
        F(i.size()),
      );
      return (
        g(e, l, r, i.rootLayer(), s, a),
        s.setEntities(
          s.getEntities().sort(function (e, t) {
            return f(r, e) < f(r, t) ? -1 : 1;
          }),
        ),
        l
      );
    }
    function f(e, t) {
      var n = e.getComponent(t, o("KFComponentNames").COMPOSITING);
      return n ? n.zIndex : -1 / 0;
    }
    function g(e, t, n, r, o, a, i) {
      ((t = t || n.createEntity()),
        i || o.addEntity(t),
        y(t, n, r),
        k(t, n, r),
        b(t, n, r),
        $(t, n, r),
        U(t, n, r, a));
      var l = E(t, n, r);
      return (h(e, t, n, r, o, a, l || i), t);
    }
    function h(e, t, n, r, a, i, l) {
      var s,
        u = r.subLayer(),
        c = r.subLayersLength();
      if (u)
        ((s = n.addComponent(t, o("KFComponentNames").CHILDREN)),
          s.addChild(g(e, void 0, n, r.subLayer(), a, i, l)));
      else if (c) {
        s = n.addComponent(t, o("KFComponentNames").CHILDREN);
        for (var d = 0; d < c; d++)
          s.addChild(g(e, void 0, n, r.subLayers(d), a, i, l));
      }
      var m = r.subScene();
      m !== 0 &&
        ((s = s || n.addComponent(t, o("KFComponentNames").CHILDREN)),
        s.addChild(_(e, m, !1, n, i)));
    }
    function y(e, t, n) {
      var r = n.tagsLength(),
        a;
      if (r) {
        a = [];
        for (var i = 0; i < r; i++) a.push(n.tags(i));
      }
      var l = n.id();
      (u.set(l, e),
        t.addComponent(
          e,
          o("KFComponentNames").IDENTIFICATION,
          l,
          n.name(),
          a,
        ));
    }
    function C(e) {
      if (e) {
        for (
          var t = e.keyframesLength(),
            n = N(e.values(0)),
            r = [],
            o = [],
            a = 0;
          a < t;
          a++
        )
          (r.push(e.keyframes(a)), a < t - 1 && o.push(L(e.tweens(a))));
        return { values: n, keyframes: r, tweens: o };
      }
    }
    function b(e, t, n) {
      var a = new (r("KFPosition"))(
          new (o("KFScalar").KFScalar)(
            n.xPosition() || 0,
            I(n.xPositionAnimation()),
          ),
          new (o("KFScalar").KFScalar)(
            n.yPosition() || 0,
            I(n.yPositionAnimation()),
          ),
          x(r("KFPath2d"), null, C(n.position())),
        ),
        i = new (o("KFScalar").KFScalar)(
          n.rotation() || 0,
          I(n.rotationAnimation()),
        ),
        l = new (o("KFPoint").KFPoint)(
          v(n.scale(), [1, 1]),
          S(n.scaleAnimation(), [1, 1]),
        ),
        s = new (o("KFPoint").KFPoint)(
          v(n.anchorPoint()),
          S(n.anchorPointAnimation()),
        );
      t.addComponent(e, o("KFComponentNames").TRANSFORM, a, i, l, s);
    }
    function v(e, t) {
      return (t === void 0 && (t = [0, 0]), e ? [e.x(), e.y()] : t);
    }
    function S(e, t) {
      return (t === void 0 && (t = [0, 0]), R(e, v, t));
    }
    function R(e, t, n) {
      if (
        (t === void 0 &&
          (t = function (t, n) {
            return t === void 0 ? n : t;
          }),
        n === void 0 && (n = 0),
        !!e)
      ) {
        for (
          var r = e.keyframesLength(), o = [], a = [], i = [], l = 0;
          l < r;
          l++
        )
          (o.push(t(e.values(l), n)),
            a.push(e.keyframes(l)),
            l < r - 1 && i.push(L(e.tweens(l))));
        return { values: o, keyframes: a, tweens: i };
      }
    }
    function L(e) {
      var t = e.type(),
        n;
      return (
        t === r("KFSchema").TweenType.Bezier &&
          (n = new (r("CubicBezier"))(v(e.control1()), v(e.control2()))),
        { type: t, bezier: n }
      );
    }
    function E(e, t, n) {
      var a = n.zIndex(),
        i = new (o("KFScalar").KFScalar)(n.opacity(), I(n.opacityAnimation())),
        l = n.isTrackMatte(),
        s = n.trackMatteType(),
        u = n.trackMatteId();
      l && (u == null || u <= 0) && (c = !0);
      var d = n.isGroup(),
        m = x(r("KFPath2d"), N(n.clippingPath()), A(n.clippingPathAnimation()));
      return (
        t.addComponent(
          e,
          o("KFComponentNames").COMPOSITING,
          a,
          i,
          d,
          l,
          s,
          u,
          m,
        ),
        d
      );
    }
    function k(e, t, n) {
      t.addComponent(
        e,
        o("KFComponentNames").TIME,
        n.fromProgress(),
        n.toProgress(),
        n.progressOffset(),
      );
    }
    function I(e) {
      return R(e);
    }
    function T(e) {
      if (e) {
        for (var t = e.valuesLength(), n = [], r = 0; r < t; r++)
          n.push(e.values(r));
        return n;
      }
    }
    function D(e) {
      return R(e, T);
    }
    function x(e, t, n, r) {
      if (t != null || n !== void 0) return new e(t, n, r);
    }
    function $(e, t, n) {
      var a = x(r("KFPath2d"), N(n.path()), A(n.pathAnimation()), e.id);
      if (a) {
        var i = x(
            o("KFScalar").KFScalar,
            n.trimStart(),
            I(n.trimStartAnimation()),
          ),
          l = x(
            o("KFScalar").KFScalar,
            n.trimStart() === 0 && n.trimEnd() === 0 ? 100 : n.trimEnd(),
            I(n.trimEndAnimation()),
          ),
          s = x(
            o("KFScalar").KFScalar,
            n.trimOffset(),
            I(n.trimOffsetAnimation()),
          ),
          u = x(
            o("KFColor").KFColor,
            B(n.fillColor()),
            O(n.fillColorAnimation()),
          ),
          c = P(n.gradientFill()),
          d = x(
            o("KFScalar").KFScalar,
            n.strokeWidth(),
            I(n.strokeWidthAnimation()),
          ),
          m = x(
            o("KFColor").KFColor,
            B(n.strokeColor()),
            O(n.strokeColorAnimation()),
          ),
          p = x(
            o("KFScalar").KFScalar,
            n.miterLimit(),
            I(n.miterLimitAnimation()),
          );
        t.addComponent(
          e,
          o("KFComponentNames").SHAPE,
          a,
          i,
          l,
          s,
          u,
          c,
          m,
          d,
          n.strokeLineCap(),
          n.strokeLineJoin(),
          p,
          n.vectorCompositeOrder(),
        );
      }
    }
    function P(e) {
      if (e) {
        var t = e.type(),
          n = x(
            o("KFScalar").KFScalarArray,
            e.positionsArray(),
            D(e.positionsAnimation()),
          ),
          a = x(o("KFColor").KFColorArray, W(e), q(e.colorsAnimation())),
          i = x(
            o("KFPoint").KFPoint,
            v(e.rampStart()),
            S(e.rampStartAnimation()),
          ),
          l = x(o("KFPoint").KFPoint, v(e.rampEnd()), S(e.rampEndAnimation())),
          s,
          u;
        return (
          t === r("KFSchema").GradientType.Radial &&
            ((s = x(
              o("KFScalar").KFScalar,
              e.highlightAngle(),
              I(e.highlightAngleAnimation()),
            )),
            (u = x(
              o("KFScalar").KFScalar,
              e.highlightLength(),
              I(e.highlightLengthAnimation()),
            ))),
          new (r("KFGradient"))(t, n, a, i, l, s, u)
        );
      }
    }
    function N(e) {
      if (e) {
        var t = e.commandsArray();
        if (t) {
          for (
            var n = e.pointsArray(),
              o = 0,
              a = [],
              i,
              l = [],
              s = [],
              u = [],
              c = null,
              d = 0;
            d < t.length;
            d++
          ) {
            switch (((c = a.length > 0 ? a[a.length - 1] : null), t[d])) {
              case r("KFSchema").CommandType.MoveTo:
              case r("KFSchema").CommandType.LineTo:
                ((l[0] = n[o++]),
                  (l[1] = n[o++]),
                  a.push({ type: t[d], point: [l[0], l[1]] }));
                break;
              case r("KFSchema").CommandType.QuadTo:
                ((l[0] = n[o++]),
                  (l[1] = n[o++]),
                  (s[0] = n[o++]),
                  (s[1] = n[o++]),
                  a.push({
                    type: t[d],
                    point: [l[0], l[1]],
                    c1: [s[0], s[1]],
                  }));
                break;
              case r("KFSchema").CommandType.CubicTo:
                ((l[0] = n[o++]),
                  (l[1] = n[o++]),
                  (s[0] = n[o++]),
                  (s[1] = n[o++]),
                  (u[0] = n[o++]),
                  (u[1] = n[o++]),
                  a.push({
                    type: t[d],
                    point: [l[0], l[1]],
                    c1: [s[0], s[1]],
                    c2: [u[0], u[1]],
                  }));
                break;
              case r("KFSchema").CommandType.HorizontalLineTo:
                ((l[0] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.LineTo,
                    point: [l[0], l[1]],
                  }));
                break;
              case r("KFSchema").CommandType.VerticalLineTo:
                ((l[1] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.LineTo,
                    point: [l[0], l[1]],
                  }));
                break;
              case r("KFSchema").CommandType.CloseLineTo:
                a.push({
                  type: r("KFSchema").CommandType.LineTo,
                  point: [i[0], i[1]],
                });
                break;
              case r("KFSchema").CommandType.SmoothQuadTo:
                (w(s, c),
                  (l[0] = n[o++]),
                  (l[1] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.QuadTo,
                    point: [l[0], l[1]],
                    c1: [s[0], s[1]],
                  }));
                break;
              case r("KFSchema").CommandType.CloseQuadTo:
                ((s[0] = n[o++]),
                  (s[1] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.QuadTo,
                    point: [i[0], i[1]],
                    c1: [s[0], s[1]],
                  }));
                break;
              case r("KFSchema").CommandType.CloseSmoothQuadTo:
                (w(s, c),
                  a.push({
                    type: r("KFSchema").CommandType.QuadTo,
                    point: [i[0], i[1]],
                    c1: [s[0], s[1]],
                  }));
                break;
              case r("KFSchema").CommandType.SmoothCubicTo:
                (w(s, c),
                  (l[0] = n[o++]),
                  (l[1] = n[o++]),
                  (u[0] = n[o++]),
                  (u[1] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.CubicTo,
                    point: [l[0], l[1]],
                    c1: [s[0], s[1]],
                    c2: [u[0], u[1]],
                  }));
                break;
              case r("KFSchema").CommandType.CloseCubicTo:
                ((s[0] = n[o++]),
                  (s[1] = n[o++]),
                  (u[0] = n[o++]),
                  (u[1] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.CubicTo,
                    point: [i[0], i[1]],
                    c1: [s[0], s[1]],
                    c2: [u[0], u[1]],
                  }));
                break;
              case r("KFSchema").CommandType.CloseSmoothCubicTo:
                (w(s, c),
                  (u[0] = n[o++]),
                  (u[1] = n[o++]),
                  a.push({
                    type: r("KFSchema").CommandType.CubicTo,
                    point: [i[0], i[1]],
                    c1: [s[0], s[1]],
                    c2: [u[0], u[1]],
                  }));
                break;
            }
            i || (i = [l[0], l[1]]);
          }
          return a;
        }
      }
    }
    var M = [0, 0];
    function w(e, t) {
      var n, o;
      if (t != null) {
        var a = t.point,
          i;
        switch (t.type) {
          case r("KFSchema").CommandType.QuadTo:
            i = (n = t.c1) != null ? n : M;
            break;
          case r("KFSchema").CommandType.CubicTo:
            i = (o = t.c2) != null ? o : M;
            break;
          default:
            i = M;
            break;
        }
        ((e[0] = i[0] + 2 * (a[0] - i[0])), (e[1] = i[1] + 2 * (a[1] - i[1])));
      }
    }
    function A(e) {
      return R(e, N);
    }
    function F(e) {
      return e ? { width: e.width(), height: e.height() } : null;
    }
    function O(e) {
      return R(e, B);
    }
    function B(e) {
      return e ? [e.red(), e.green(), e.blue(), e.alpha()] : null;
    }
    function W(e) {
      if (!e) return null;
      for (var t = e.colorsLength(), n = [], r = 0; r < t; r++)
        n.push(B(e.colors(r)));
      return n;
    }
    function q(e) {
      return R(e, W);
    }
    function U(e, t, n, r) {
      var a = n.bitmapIndex();
      a !== -1 && t.addComponent(e, o("KFComponentNames").IMAGE, a);
    }
    function V(e, t) {
      var n = e.assets();
      n && (K(n, t), H(n, t));
    }
    function H(t, r) {
      var o = t.bitmapsLength();
      if (o) {
        for (var a = [], i = 0; i < o; i++) a.push(G(t.bitmaps(i), i, r));
        (e || (e = n("Promise"))).all(a);
      }
    }
    function G(o, a, i) {
      if (r("BlobFactory").isSupported()) {
        var l = o.contentArray();
        if (!l)
          return (e || (e = n("Promise"))).reject(
            "Decode: tried to decode a null bitmap",
          );
        var s = r("BlobFactory").getBlob([l]),
          u = o.size().width(),
          c = o.size().height();
        return t.createImageBitmap
          ? t
              .createImageBitmap(s, 0, 0, u, c)
              .catch(function (e) {
                return z(s, u, c);
              })
              .then(function (e) {
                return (
                  i.addImageAtIndex({ src: e, width: u, height: c }, a),
                  { src: e, width: u, height: c }
                );
              })
          : z(s, u, c);
      }
      return (e || (e = n("Promise"))).reject(
        "Decode: browser does not support bitmap creation",
      );
    }
    function z(t, r, o) {
      return s.createObjectURL
        ? j(s.createObjectURL(t), r, o)
        : (e || (e = n("Promise"))).reject("URL API not supported");
    }
    function j(t, r, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = new Image(t);
        ((a.onload = function () {
          return e({ src: a, width: r, height: o });
        }),
          (a.onerror = function (e) {
            return n("Decode: error requesting image uri " + t);
          }),
          (a.src = t));
      });
    }
    function K(e, t) {
      var n = e.audioLength();
      if (n)
        for (var o = 0; o < n; o++) {
          if (!window.Audio) {
            var a = new Error("Audio playback not supported");
            throw (a.stack, a);
          }
          var i = e.audio(o).contentArray(),
            l = r("BlobFactory").getBlob([i]),
            u = s.createObjectURL(l);
          t.addAudio(u);
        }
    }
    l.default = d;
  },
  98,
);
