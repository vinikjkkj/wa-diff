__d(
  "KF2Loader",
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
    "KeyframesCompatPluginsLoader",
    "KeyframesSchema",
    "Promise",
    "asyncToGeneratorRuntime",
    "flatbuffers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return t;
      };
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = new (o("flatbuffers").ByteBuffer)(e),
            i = r("KeyframesSchema").Document.bufferHasIdentifier(a)
              ? r("KeyframesSchema").Document.getRootAsDocument(a)
              : null;
          N(i);
          var l = yield m(i, t);
          i &&
            (t.addComponent(p(i, t, n, l), o("KFComponentNames").ROOT),
            r("KFLoaderUtils").maybeGenerateTrackMatteIDs(t));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      for (var t = [], n = e.pluginsLength() - 1; n >= 0; n--)
        t.unshift(e.plugins(n));
      return t;
    }
    function m(t, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        if (t == null) return e(null);
        var a = d(t);
        return a.length === 0
          ? e(null)
          : e(r("KeyframesCompatPluginsLoader").fromPluginTable(a, o));
      });
    }
    function p(e, t, n, a) {
      for (
        var i = w(e, n), l = e.subdocumentsLength(), s = [], u = 0;
        u < l;
        u++
      )
        s.push(e.subdocuments(u));
      var c = _(e.rootLayer(), t, n, i, s, a),
        d = t.addComponent(
          c,
          o("KFComponentNames").SCENE,
          [c],
          r("KFLoaderUtils").getDocumentDuration(e),
          e.frameRate(),
          D(e.size()),
        );
      return c;
    }
    function _(e, t, n, r, o, a) {
      var i = t.createEntity();
      return (
        a != null && a.maybeInstantiatePluginsForLayer(e, i),
        g(i, t, e),
        h(i, t, e),
        y(i, t, e),
        R(i, t, e),
        b(i, t, e),
        L(i, t, e, r),
        f(i, t, e, n, r, o, a),
        i
      );
    }
    function f(e, t, n, r, a, i, l) {
      var s = n.sublayersLength(),
        u = n.subdocumentIndex(),
        c;
      if (s) {
        c = t.addComponent(e, o("KFComponentNames").CHILDREN);
        for (var d = 0; d < s; d++)
          c.addChild(_(n.sublayers(d), t, r, a, i, l));
      }
      if (u !== -1) {
        c = c || t.addComponent(e, o("KFComponentNames").CHILDREN);
        var m = i.map(function (e) {
            return p(e, t, r, l);
          }),
          f = t.getComponent(
            e,
            o("KFComponentNames").RANDOM_SUBDOCUMENT_CHILDREN,
          );
        (f == null &&
          (f = t.addComponent(
            e,
            o("KFComponentNames").RANDOM_SUBDOCUMENT_CHILDREN,
          )),
          m.forEach(function (e, t) {
            (t === u && c.addChild(e), f.addSwappableChild(e, t === u));
          }));
      }
    }
    function g(e, t, n) {
      t.addComponent(e, o("KFComponentNames").IDENTIFICATION, n.id());
    }
    function h(e, t, n) {
      t.addComponent(
        e,
        o("KFComponentNames").TIME,
        n.fromProgress(),
        n.toProgress(),
        n.progressOffset(),
      );
    }
    function y(e, t, n) {
      var a = C(n.position()),
        i = new (r("KFPosition"))(
          x(o("KFScalar").KFScalar, n.xPosition(), s, 0),
          x(o("KFScalar").KFScalar, n.yPosition(), s, 0),
          a ? new (r("KFPath2d"))(null, a) : void 0,
        ),
        l = x(o("KFScalar").KFScalar, n.rotation(), s, 0),
        u = x(o("KFPoint").KFPoint, n.scale(), P, [1, 1]),
        c = x(o("KFPoint").KFPoint, n.anchorPoint(), P, [0, 0]);
      t.addComponent(e, o("KFComponentNames").TRANSFORM, i, l, u, c);
    }
    function C(e) {
      if (e) {
        for (
          var t = e.keyframesLength(), n = v(e.value()), r = [], o = [], a = 0;
          a < t;
          a++
        )
          (r.push(e.keyframes(a)), a < t - 1 && o.push(M(e.tweens(a))));
        return { values: n, keyframes: r, tweens: o };
      }
    }
    function b(e, t, n) {
      var a = n.path(),
        i = a ? x(r("KFPath2d"), n.path(), v) : void 0;
      if (i) {
        var l,
          u = x((l = o("KFScalar")).KFScalar, void 0, s, 0),
          c = x(l.KFScalar, void 0, s, 100),
          d = x(l.KFScalar, void 0, s, 0),
          m = x(o("KFColor").KFColor, n.fillColor(), E, [255, 255, 255, 0]),
          p = T(n.gradient()),
          _ = x(l.KFScalar, n.strokeWidth(), s, 0),
          f = x(o("KFColor").KFColor, n.strokeColor(), E, [255, 255, 255, 0]),
          g = x(l.KFScalar, n.miterLimit(), s, 0);
        t.addComponent(
          e,
          o("KFComponentNames").SHAPE,
          i,
          u,
          c,
          d,
          m,
          p,
          f,
          _,
          n.strokeLineCap(),
          n.strokeLineJoin(),
          g,
          n.vectorCompositeOrder(),
        );
      }
    }
    function v(e) {
      for (var t = e.commandsLength(), n = [], r = 0; r < t; r++)
        n.push(S(e.commands(r)));
      return n;
    }
    function S(e) {
      var t = e.control1(),
        n = e.control2();
      return {
        type: e.type(),
        point: P(e.point()),
        c1: t ? P(t) : null,
        c2: n ? P(n) : null,
      };
    }
    function R(e, t, n) {
      var a = x(o("KFScalar").KFScalar, n.opacity(), s, 1),
        i = n.isTrackMatte(),
        l = n.trackMatteType(),
        u = x(r("KFPath2d"), n.clippingPath(), v);
      t.addComponent(
        e,
        o("KFComponentNames").COMPOSITING,
        0,
        a,
        !0,
        i,
        l,
        void 0,
        u,
      );
    }
    function L(e, t, n, r) {
      var a = n.bitmapIndex();
      a !== -1 && t.addComponent(e, o("KFComponentNames").IMAGE, r.bitmaps[a]);
    }
    function E(e) {
      return [e.red(), e.green(), e.blue(), e.alpha()];
    }
    function k(e) {
      for (var t = [], n = e.colorsLength(), r = 0; r < n; r++)
        t.push(E(e.colors(r)));
      return t;
    }
    function I(e) {
      for (var t = [], n = e.valuesLength(), r = 0; r < n; r++)
        t.push(e.values(r));
      return t;
    }
    function T(e) {
      if (e) {
        var t = e.type(),
          n = x(o("KFScalar").KFScalarArray, e.positions(), I),
          a = x(o("KFColor").KFColorArray, e.colors(), k),
          i = x(o("KFPoint").KFPoint, e.rampStart(), P),
          l = x(o("KFPoint").KFPoint, e.rampEnd(), P),
          u = x(o("KFColor").KFColor, e.colorStart(), E),
          c = x(o("KFColor").KFColor, e.colorEnd(), E),
          d,
          m;
        return (
          t === r("KeyframesSchema").GradientType.Radial &&
            ((d = x(o("KFScalar").KFScalar, e.highlightAngle(), s, 0)),
            (m = x(o("KFScalar").KFScalar, e.highlightLength(), s, 0))),
          new (r("KFGradient"))(t, n, a, i, l, d, m, u, c)
        );
      }
    }
    function D(e) {
      return e ? { width: e.width(), height: e.height() } : null;
    }
    function x(e, t, n, r) {
      if ((r === void 0 && (r = 0), t)) {
        var o = $(t, n, r);
        return new e(o.staticValue, o.animation);
      } else return new e(r, void 0);
    }
    function $(e, t, n) {
      n === void 0 && (n = 0);
      var r = { staticValue: void 0, animation: void 0 };
      if (!e) r.staticValue = n;
      else {
        var o = e.value(),
          a = e.valuesLength();
        if ((o !== null && (r.staticValue = t(o)), a != 0)) {
          for (
            var i = e.keyframesLength(), l = [], s = [], u = [], c = 0;
            c < i;
            c++
          )
            (l.push(t(e.values(c), n)),
              s.push(e.keyframes(c)),
              c < i - 1 && u.push(M(e.tweens(c))));
          r.animation = { values: l, keyframes: s, tweens: u };
        }
      }
      return r;
    }
    function P(e, t) {
      return (t === void 0 && (t = [0, 0]), e ? [e.x(), e.y()] : t);
    }
    function N(e, t) {
      r("KFManifest")(e.manifestArray(), t);
    }
    function M(e) {
      var t = e.type(),
        n;
      return (
        t === r("KeyframesSchema").TweenType.Bezier &&
          (n = new (r("CubicBezier"))(P(e.control1()), P(e.control2()))),
        { type: t, bezier: n }
      );
    }
    function w(t, r) {
      var o = { bitmaps: {} },
        a = t.bitmapsLength();
      if (a) {
        for (var i = [], l = r.getImages().length, s = 0; s < a; s++) {
          var u = l + s;
          ((o.bitmaps[s] = u),
            r.addImageAtIndex(null, u),
            i.push(A(t.bitmaps(s), u, r)));
        }
        (e || (e = n("Promise"))).all(i).then(function () {
          F.bind(null, null, r);
        });
      }
      return o;
    }
    function A(o, a, i) {
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
                return O(s, u, c);
              })
              .then(function (e) {
                return (
                  i.addImageAtIndex({ src: e, width: u, height: c }, a),
                  { src: e, width: u, height: c }
                );
              })
          : O(s, u, c);
      }
      return (e || (e = n("Promise"))).reject(
        "Decode: browser does not support bitmap creation",
      );
    }
    function F(e, t, n) {
      if (e != null) {
        for (var r = [], o = 0; o < e.length; o++) {
          var a = e[o].src;
          if (e.width !== a.width || e.height !== a.height) {
            var i = document.createElement("canvas");
            ((i.width = e.width), (i.height = e.heigh));
            var l = i.getContext("2d");
            (l.drawImage(a, 0, 0, e.width, e.height), r.push(i));
          } else r.push(a);
        }
        return r;
      }
    }
    function O(t, r, o) {
      return URL.createObjectURL
        ? B(URL.createObjectURL(t), r, o)
        : (e || (e = n("Promise"))).reject("URL API not supported");
    }
    function B(t, r, o) {
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
    l.default = u;
  },
  98,
);
