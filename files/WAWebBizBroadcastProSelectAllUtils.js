__d(
  "WAWebBizBroadcastProSelectAllUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = [],
        o = [];
      for (var a of e) {
        var i = t(a);
        i == null ||
          i === "" ||
          (r.push(i), !a.isContactBlocked && n(a) && o.push(i));
      }
      return { listedIds: r, selectableIds: o };
    }
    function l(e, t) {
      var n = e.selectableIds;
      return (
        n.length > 0 &&
        n.every(function (e) {
          return t.has(e);
        })
      );
    }
    function s(e, t, n) {
      return l(e, t) ? !1 : e.selectableIds.length === 0 || t.size >= n;
    }
    function u(e, t, n) {
      return l(e, t) ? d(t, e.listedIds) : c(t, e.selectableIds, n);
    }
    function c(e, t, n) {
      var r = new Set(e);
      for (var o of t) {
        if (r.size >= n) break;
        r.add(o);
      }
      return r;
    }
    function d(e, t) {
      var n = new Set(e);
      for (var r of t) n.delete(r);
      return n;
    }
    ((i.getSelectAllScope = e),
      (i.isAllSelected = l),
      (i.isSelectAllDisabled = s),
      (i.toggleSelectAll = u));
  },
  66,
);
