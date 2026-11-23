__d(
  "WAWebHatchSpaceImages",
  ["WALruCache", "WAWebHatchSpaceImageLoader", "WAWebHatchVmTransport"],
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
          (m.delete(n.route), $(n), (p = !0));
        },
        onPurge: function () {
          p && ((p = !1), N());
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
      for (var e of m.values()) (e.refs === 0 && $(e), P(e));
      (m.clear(), _.clear(), N());
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
          $(e);
          return;
        }
        (x(e), e.image.kind === "ready" && _.schedulePurge());
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
                    e.generation === y && D(e, d);
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
    async function k(e) {
      var t = await o("WAWebHatchSpaceImageLoader").loadHatchSpaceImage(
        e.route,
      );
      e.generation === y &&
        (t.kind === "failed"
          ? D(e, t.permanent ? c : d)
          : await I(e, t.bytes, t.mimetype));
    }
    async function I(e, t, n) {
      var r = window.URL.createObjectURL(new Blob([t], { type: n }));
      e.decodingUrl = r;
      var a = await T(r),
        i = e.decodingUrl === r;
      if (((e.decodingUrl = null), e.generation === y && a)) {
        ((e.bytes = t.byteLength),
          D(e, { kind: "ready", url: r }),
          _.put(o("WAWebHatchVmTransport").serializeJarvisPath(e.route), e));
        return;
      }
      (i && window.URL.revokeObjectURL(r), e.generation === y && D(e, c));
    }
    async function T(e) {
      var t = new Image();
      t.src = e;
      try {
        return (await t.decode(), !0);
      } catch (e) {
        return !1;
      }
    }
    function D(e, t) {
      ((e.image = t), x(e), N());
    }
    function x(e) {
      e.refs === 0 && e.image === d && m.delete(e.route);
    }
    function $(e) {
      var t = e.image;
      t.kind === "ready" && window.URL.revokeObjectURL(t.url);
    }
    function P(e) {
      e.decodingUrl != null &&
        (window.URL.revokeObjectURL(e.decodingUrl), (e.decodingUrl = null));
    }
    function N() {
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
