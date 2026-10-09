__d(
  "WAWebHatchSpacesState",
  ["WAWebHatchSpacesLedger", "WAWebHatchSpacesSnapshot"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      spaces: new Map(),
      icons: new Map(),
      rowTsMs: new Map(),
      iconTsMs: new Map(),
      pendingSnapshot: null,
      snapshotTsMs: 0,
      snapshotsApplied: 0,
    };
    function s(e, t) {
      return t.kind === "snapshot_chunk"
        ? o("WAWebHatchSpacesSnapshot").reduceHatchSpacesSnapshotChunk(e, t)
        : t.kind === "updated"
          ? u(e, t)
          : c(e, t);
    }
    function u(e, t) {
      var n = d(e, t);
      if (!o("WAWebHatchSpacesLedger").admitRow(e, t.space.itemKey, !1, t.tsMs))
        return m(e, e.spaces, n);
      var r = new Map(e.spaces);
      return (
        r.set(t.space.itemKey, t.space),
        babelHelpers.extends({}, e, {
          spaces: r,
          icons: o("WAWebHatchSpacesLedger").referencedBy(
            n.icons,
            r,
            e.pendingSnapshot,
          ),
          iconTsMs: o("WAWebHatchSpacesLedger").referencedBy(
            n.iconTsMs,
            r,
            e.pendingSnapshot,
          ),
          rowTsMs: o("WAWebHatchSpacesLedger").recorded(
            e.rowTsMs,
            o("WAWebHatchSpacesLedger").rowKey(t.space.itemKey, !1),
            t.tsMs,
          ),
        })
      );
    }
    function c(e, t) {
      if (!o("WAWebHatchSpacesLedger").admitRow(e, t.itemKey, !0, t.tsMs))
        return e;
      var n = new Map(e.spaces);
      return (
        n.delete(t.itemKey),
        babelHelpers.extends({}, e, {
          spaces: n,
          icons: o("WAWebHatchSpacesLedger").referencedBy(
            e.icons,
            n,
            e.pendingSnapshot,
          ),
          iconTsMs: o("WAWebHatchSpacesLedger").referencedBy(
            e.iconTsMs,
            n,
            e.pendingSnapshot,
          ),
          rowTsMs: o("WAWebHatchSpacesLedger").recorded(
            e.rowTsMs,
            o("WAWebHatchSpacesLedger").rowKey(t.itemKey, !0),
            t.tsMs,
          ),
        })
      );
    }
    function d(e, t) {
      var n = new Set(t.invalidIconUrls);
      for (var r of t.icons.keys()) n.add(r);
      var a = Array.from(n).filter(function (n) {
        return o("WAWebHatchSpacesLedger").admit(
          t.tsMs,
          e.snapshotTsMs,
          e.iconTsMs.get(n),
        );
      });
      if (a.length === 0) return { iconTsMs: e.iconTsMs, icons: e.icons };
      var i = new Map(e.icons),
        l = new Map(e.iconTsMs);
      for (var s of a) {
        t.tsMs !== 0 && l.set(s, t.tsMs);
        var u = t.invalidIconUrls.has(s) ? null : t.icons.get(s);
        u == null ? i.delete(s) : i.set(s, u);
      }
      return { iconTsMs: l, icons: i };
    }
    function m(e, t, n) {
      var r = o("WAWebHatchSpacesLedger").referencedBy(
          n.icons,
          t,
          e.pendingSnapshot,
        ),
        a = o("WAWebHatchSpacesLedger").referencedBy(
          n.iconTsMs,
          t,
          e.pendingSnapshot,
        );
      return p(r, e.icons) && p(a, e.iconTsMs)
        ? e
        : babelHelpers.extends({}, e, { icons: r, iconTsMs: a });
    }
    function p(e, t) {
      if (e === t) return !0;
      if (e.size !== t.size) return !1;
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (!t.has(r) || t.get(r) !== o) return !1;
      }
      return !0;
    }
    ((l.EMPTY_HATCH_SPACES_STATE = e), (l.reduceHatchSpacesEvent = s));
  },
  98,
);
