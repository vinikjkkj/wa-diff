__d(
  "WAWebHatchSpaceImages",
  [
    "WALruCache",
    "WAWebHatchSpaceImageLoader",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 8 * 1024 * 1024,
      u = { kind: "loading" },
      c = { kind: "failed" },
      d = { kind: "failed" },
      m = new Map(),
      p = !1,
      _ = new (o("WALruCache").LruCache)({
        getSize: function (t) {
          return t.bytes;
        },
        onEvict: function (t, n) {
          (m.delete(n.route), M(n), (p = !0));
        },
        onPurge: function () {
          p && ((p = !1), A());
        },
        shouldEvict: function (t, n) {
          return n.refs === 0;
        },
        sizeLimit: s,
      }),
      f = new Set(),
      g = [],
      h = 0,
      y = 0;
    function C(e) {
      var t,
        n = (t = m.get(e)) != null ? t : R(e);
      (n.refs++,
        n.image.kind === "ready" &&
          _.touch(o("WAWebHatchVmTransport").serializeJarvisPath(e)),
        E());
      var r = !1;
      return function () {
        r || ((r = !0), L(n));
      };
    }
    function b(e) {
      var t, n;
      return (t = (n = m.get(e)) == null ? void 0 : n.image) != null ? t : u;
    }
    function v(e) {
      var t = { listener: e };
      return (
        f.add(t),
        function () {
          f.delete(t);
        }
      );
    }
    function S() {
      (y++, (g = []));
      for (var e of m.values()) (e.refs === 0 && M(e), w(e));
      (m.clear(), _.clear(), A());
    }
    function R(e) {
      var t = {
        bytes: 0,
        decodingUrl: null,
        generation: y,
        image: u,
        refs: 0,
        route: e,
      };
      return (m.set(e, t), g.push(t), t);
    }
    function L(e) {
      if ((e.refs--, !(e.refs > 0))) {
        if (e.generation !== y) {
          M(e);
          return;
        }
        (N(e), e.image.kind === "ready" && _.schedulePurge());
      }
    }
    function E() {
      for (
        var t = function () {
            var e = g.shift();
            if (e == null) return { v: void 0 };
            e.refs === 0
              ? m.delete(e.route)
              : (h++,
                k(e)
                  .catch(function () {
                    e.generation === y && P(e, d);
                  })
                  .finally(function () {
                    (h--, E());
                  }));
          },
          n;
        h < e;
      )
        if (((n = t()), n)) return n.v;
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchSpaceImageLoader").loadHatchSpaceImage(
            e.route,
          );
          e.generation === y &&
            (t.kind === "failed"
              ? P(e, t.permanent ? c : d)
              : yield T(e, t.bytes, t.mimetype));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = window.URL.createObjectURL(new Blob([t], { type: n }));
          e.decodingUrl = r;
          var a = yield x(r),
            i = e.decodingUrl === r;
          if (((e.decodingUrl = null), e.generation === y && a)) {
            ((e.bytes = t.byteLength),
              P(e, { kind: "ready", url: r }),
              _.put(
                o("WAWebHatchVmTransport").serializeJarvisPath(e.route),
                e,
              ));
            return;
          }
          (i && window.URL.revokeObjectURL(r), e.generation === y && P(e, c));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Image();
          t.src = e;
          try {
            return (yield t.decode(), !0);
          } catch (e) {
            return !1;
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      ((e.image = t), N(e), A());
    }
    function N(e) {
      e.refs === 0 && e.image === d && m.delete(e.route);
    }
    function M(e) {
      var t = e.image;
      t.kind === "ready" && window.URL.revokeObjectURL(t.url);
    }
    function w(e) {
      e.decodingUrl != null &&
        (window.URL.revokeObjectURL(e.decodingUrl), (e.decodingUrl = null));
    }
    function A() {
      for (var e of Array.from(f)) {
        var t = e.listener;
        t();
      }
    }
    ((l.acquireHatchSpaceImage = C),
      (l.getHatchSpaceImage = b),
      (l.subscribeToHatchSpaceImages = v),
      (l.clearHatchSpaceImages = S));
  },
  98,
);
