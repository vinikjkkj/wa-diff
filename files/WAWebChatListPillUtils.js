__d(
  "WAWebChatListPillUtils",
  ["WAWebLabelCollection", "WAWebSchemaLabel"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 5,
      u = new Set([
        (e = o("WAWebSchemaLabel")).ListType.AI_HANDOFF,
        e.ListType.AI_RESPONDING,
      ]),
      c = new Set([e.ListType.CUSTOM, e.ListType.PREDEFINED]);
    function d(e, t) {
      var n = m(e),
        r = p(n),
        o = r.customLabels,
        a = r.staticLabels,
        i = _(a, o, t),
        l = new Set(
          i.map(function (e) {
            return e.id;
          }),
        ),
        s = [].concat(o).sort(function (e, t) {
          return e.orderIndex - t.orderIndex;
        }),
        u = [].concat(a, s).filter(function (e) {
          return !l.has(e.id);
        });
      return { overflowCount: u.length, overflowedLabels: u, visibleLabels: i };
    }
    function m(e) {
      var t = [];
      for (var n of e) {
        var r = o("WAWebLabelCollection").LabelCollection.get(n);
        r != null && r.name != null && t.push(r);
      }
      return t;
    }
    function p(e) {
      var t = [],
        n = [];
      for (var r of e)
        r.type != null && u.has(r.type)
          ? t.push(r)
          : r.type != null && c.has(r.type) && n.push(r);
      return { customLabels: n, staticLabels: t };
    }
    function _(e, t, n) {
      var r = [];
      for (var o of e) {
        if (r.length >= s) break;
        r.push(o);
      }
      if (n != null && r.length < s) {
        var a = t.find(function (e) {
          return e.id === n;
        });
        a != null && r.push(a);
      }
      var i = new Set(
          r.map(function (e) {
            return e.id;
          }),
        ),
        l = t
          .filter(function (e) {
            return !i.has(e.id);
          })
          .sort(function (e, t) {
            return e.orderIndex - t.orderIndex;
          });
      for (var u of l) {
        if (r.length >= s) break;
        r.push(u);
      }
      return r;
    }
    l.selectVisiblePills = d;
  },
  98,
);
