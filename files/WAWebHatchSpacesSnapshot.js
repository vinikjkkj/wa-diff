__d(
  "WAWebHatchSpacesSnapshot",
  ["WAWebHatchSpacesLedger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t.tsMs !== 0 && t.tsMs <= e.snapshotTsMs) return e;
      var n = s(e.pendingSnapshot, t);
      if (n == null) return e;
      var r = new Map(n.chunks);
      r.set(t.chunkNumber, t);
      var o = babelHelpers.extends({}, n, { chunks: r });
      return o.chunks.size < o.chunkCount
        ? babelHelpers.extends({}, e, { pendingSnapshot: o })
        : m(e, o);
    }
    function s(e, t) {
      return e == null
        ? u(t)
        : c(e, t)
          ? t.tsMs === 0 && e.chunks.has(t.chunkNumber)
            ? u(t)
            : e
          : d(e, t)
            ? null
            : u(t);
    }
    function u(e) {
      return { chunkCount: e.chunkCount, tsMs: e.tsMs, chunks: new Map() };
    }
    function c(e, t) {
      return e.chunkCount === t.chunkCount && e.tsMs === t.tsMs;
    }
    function d(e, t) {
      return e.tsMs !== 0 && t.tsMs !== 0 && t.tsMs <= e.tsMs;
    }
    function m(e, t) {
      var n = p(e.rowTsMs, t.tsMs),
        r = p(e.serverActionsTsMs, t.tsMs),
        a = p(e.iconTsMs, t.tsMs),
        i = new Map(),
        l = new Map(),
        s = new Map();
      for (var u of t.chunks.values()) {
        for (var c of u.spaces)
          (i.set(c.itemKey, c), l.set(c.itemKey, c.hasServerActions));
        for (var d of u.icons) {
          var m = d[0],
            f = d[1];
          s.set(m, f);
        }
      }
      for (var g of n.keys()) {
        var h = o("WAWebHatchSpacesLedger").itemKeyOf(g);
        _(i, h, e.spaces);
        var y = i.get(h);
        y != null &&
          !r.has(h) &&
          i.set(h, babelHelpers.extends({}, y, { hasServerActions: l.get(h) }));
      }
      for (var C of a.keys()) _(s, C, e.icons);
      return {
        spaces: i,
        icons: o("WAWebHatchSpacesLedger").referencedBy(s, i, null),
        rowTsMs: n,
        serverActionsTsMs: r,
        iconTsMs: o("WAWebHatchSpacesLedger").referencedBy(a, i, null),
        pendingSnapshot: null,
        snapshotTsMs: t.tsMs !== 0 ? t.tsMs : e.snapshotTsMs,
        snapshotsApplied: e.snapshotsApplied + 1,
      };
    }
    function p(e, t) {
      var n = new Map();
      if (t === 0) return n;
      for (var r of e) {
        var o = r[0],
          a = r[1];
        a > t && n.set(o, a);
      }
      return n;
    }
    function _(e, t, n) {
      var r = n.get(t);
      r == null ? e.delete(t) : e.set(t, r);
    }
    l.reduceHatchSpacesSnapshotChunk = e;
  },
  98,
);
