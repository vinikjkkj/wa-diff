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
        r = p(e.iconTsMs, t.tsMs),
        a = new Map(),
        i = new Map();
      for (var l of t.chunks.values()) {
        for (var s of l.spaces) a.set(s.itemKey, s);
        for (var u of l.icons) {
          var c = u[0],
            d = u[1];
          i.set(c, d);
        }
      }
      for (var m of n.keys())
        _(a, o("WAWebHatchSpacesLedger").itemKeyOf(m), e.spaces);
      for (var f of r.keys()) _(i, f, e.icons);
      return {
        spaces: a,
        icons: o("WAWebHatchSpacesLedger").referencedBy(i, a, null),
        rowTsMs: n,
        iconTsMs: o("WAWebHatchSpacesLedger").referencedBy(r, a, null),
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
