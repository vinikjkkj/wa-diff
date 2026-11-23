__d(
  "AdsBulkEditCampaignStructureUtils",
  [
    "AdsBulkEditGKQEUtil",
    "AdsBulkEditUpdateCampaignStructureSelectionAction",
    "StrSet",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
      return n.indexOf(t);
    };
    function s(e, t, n) {
      n === void 0 && (n = t);
      var r = n < t ? [n, t] : [t, n],
        o = r[0],
        a = r[1],
        i = e.filter(function (e) {
          return o > e || e > a;
        });
      return e.includes(t)
        ? i.concat([t])
        : i.concat(
            Array.from(Array(a - o + 1).keys()).map(function (e) {
              return e + o;
            }),
          );
    }
    function u(t, n, o, a) {
      var i = [],
        l = [],
        u = (a != null && e(a, n)) || 0,
        c = e(o, n) || 0,
        d = s(
          t.map(function (t) {
            return e(t, n) || 0;
          }),
          c,
          u,
        );
      return (
        (i = d
          .map(function (e) {
            return n[e];
          })
          .filter(Boolean)),
        i.length > t.length
          ? (l = new (r("StrSet"))(i).removeAll(t).toArray())
          : (l = new (r("StrSet"))(t).removeAll(i).toArray()),
        { updatedSelectedIDs: i, updatedIDsDiff: l }
      );
    }
    function c(e) {
      var t = new Map();
      function n(e) {
        for (var r of e) (t.set(r.id, r), r.hasChildren && n(r.children));
      }
      return (n(e), t);
    }
    function d(e, t) {
      var n = new Map(),
        r = t.get(e);
      return (r == null || m(r.children, n), n);
    }
    function m(e, t) {
      for (var n of e) {
        var r,
          o = (r = t.get(n.objectType)) != null ? r : [];
        (o.push(n.id),
          t.set(n.objectType, o),
          n.hasChildren && m(n.children, t));
      }
    }
    function p(e) {
      var t = new Map();
      return (m(e, t), t);
    }
    function _(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          e.forEach(function (e) {
            t.add(e);
          });
        }),
        t
      );
    }
    function f(e, t) {
      var n = [];
      return (g(e, t, n), n);
    }
    function g(e, t, n) {
      for (var r of e)
        (r.objectType === t && n.push(r), r.hasChildren && g(r.children, t, n));
    }
    function h(e, t, n, o) {
      r("AdsBulkEditUpdateCampaignStructureSelectionAction").dispatch(
        {
          isCascade: !0,
          level: e,
          selectedIDs: r("immutable").List(t),
          updatedIDs: r("immutable").List(n),
          isSelected: o,
        },
        {
          line: "224",
          module: "AdsBulkEditCampaignStructureUtils.js",
          moduleID: i.id,
        },
      );
    }
    function y(e, t, n, r, a) {
      var i;
      if (
        o("AdsBulkEditGKQEUtil").isPassingBulkEditModalCascadingSelectionGK(
          !0,
        ) &&
        e.length !== 0
      ) {
        var l = c(n),
          s = new Map();
        r.forEach(function (e, t) {
          s.set(t, new Set(e.toArray()));
        });
        var u = (i = s.get(t)) != null ? i : new Set();
        for (var d of e) a ? u.delete(d) : u.add(d);
        s.set(t, u);
        var m = new Map();
        (C(e, t, l, s, m),
          m.forEach(function (e, t) {
            h(t, e.selectedIDs, e.updatedIDs, !1);
          }));
      }
    }
    function C(e, t, n, r, o) {
      for (
        var a = e,
          i = t,
          l = function () {
            var e,
              t,
              l = new Map();
            for (var s of a) {
              var u,
                c = (u = n.get(s)) == null ? void 0 : u.parentID,
                d = c != null ? n.get(c) : null;
              d != null && l.set(d.id, d);
            }
            var m = l.values().next().value;
            if (m == null) return { v: void 0 };
            var p = m.objectType,
              _ = (e = r.get(i)) != null ? e : new Set(),
              f = (t = r.get(p)) != null ? t : new Set(),
              g = [];
            for (var h of l.values())
              if (h.hasChildren) {
                var y = h.children.map(function (e) {
                    return e.id;
                  }),
                  C = y.every(function (e) {
                    return _.has(e);
                  }),
                  b = f.has(h.id);
                C && !b
                  ? (f.add(h.id), g.push(h.id))
                  : !C && b && (f.delete(h.id), g.push(h.id));
              }
            if ((r.set(p, f), g.length === 0)) return { v: void 0 };
            (o.set(p, { selectedIDs: Array.from(f), updatedIDs: g }),
              (a = Array.from(l.keys())),
              (i = p));
          },
          s;
        a.length > 0;
      )
        if (((s = l()), s)) return s.v;
    }
    function b(e, t, n, a) {
      if (
        o("AdsBulkEditGKQEUtil").isPassingBulkEditModalCascadingSelectionGK(!0)
      ) {
        var i = c(t),
          l = new Map();
        for (var s of e) {
          var u = d(s, i);
          u.forEach(function (e, t) {
            var n,
              r = (n = l.get(t)) != null ? n : [];
            l.set(t, r.concat(e));
          });
        }
        l.forEach(function (e, t) {
          var o,
            i = ((o = n.get(t)) != null ? o : r("immutable").List()).toArray(),
            l = a
              ? i.filter(function (t) {
                  return !e.includes(t);
                })
              : Array.from(new Set(i.concat(e)));
          h(t, l, e, a);
        });
      }
    }
    ((l.onMultiSelection = u),
      (l.getDescendantIDsByLevel = d),
      (l.getAllIDsByLevel = p),
      (l.getAllSelectedIDs = _),
      (l.getNodesByLevel = f),
      (l.dispatchUpwardCascade = y),
      (l.dispatchDownwardCascade = b));
  },
  98,
);
