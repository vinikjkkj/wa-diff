__d(
  "WAWebHatchIdeaSelection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return new Set(
        e.items
          .filter(function (t) {
            return t.selectable && (!e.isBuilt || t.isSelected);
          })
          .map(function (e) {
            return e.id;
          }),
      );
    }
    function l(e, t) {
      return t.selectable && !e.isBuilt;
    }
    function s(e, t, n) {
      if (!l(e, n)) return t;
      var r = new Set(t);
      return (r.has(n.id) ? r.delete(n.id) : r.add(n.id), r);
    }
    function u(e, t) {
      if (e.isBuilt) return null;
      var n = e.items
          .filter(function (e) {
            return e.selectable;
          })
          .map(function (e) {
            return e.id;
          }),
        r = n.filter(function (e) {
          return t.has(e);
        });
      return r.length === n.length
        ? { mode: "full" }
        : r.length === 0
          ? null
          : { mode: "selectedItems", itemIds: r };
    }
    function c(t, n, r, o) {
      var a = e(t);
      if (!o || t.isBuilt) return a;
      var i = new Set(
          t.items
            .filter(function (e) {
              return e.selectable;
            })
            .map(function (e) {
              return e.id;
            }),
        ),
        l = new Set(
          Array.from(n).filter(function (e) {
            return i.has(e);
          }),
        );
      for (var s of a) r.has(s) || l.add(s);
      return l;
    }
    ((i.getDefaultHatchIdeaSelection = e),
      (i.isHatchIdeaItemToggleable = l),
      (i.toggleHatchIdeaItem = s),
      (i.getHatchIdeaRunScope = u),
      (i.reconcileHatchIdeaSelection = c));
  },
  66,
);
