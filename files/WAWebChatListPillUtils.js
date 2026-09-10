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
    function d(e, t, n) {
      var r = m(e),
        o = p(r, n),
        a = o.customLabels,
        i = o.staticLabels,
        l = _(i, a, t),
        s = new Set(
          l.map(function (e) {
            return e.id;
          }),
        ),
        u = [].concat(a).sort(function (e, t) {
          return e.orderIndex - t.orderIndex;
        }),
        c = [].concat(i, u).filter(function (e) {
          return !s.has(e.id);
        });
      return { overflowCount: c.length, overflowedLabels: c, visibleLabels: l };
    }
    function m(e) {
      var t = [];
      for (var n of e) {
        var r = o("WAWebLabelCollection").LabelCollection.get(n);
        r != null && r.name != null && t.push(r);
      }
      return t;
    }
    function p(e, t) {
      var n = [],
        r = [];
      for (var o of e)
        t && o.type != null && u.has(o.type)
          ? n.push(o)
          : o.type != null && c.has(o.type) && r.push(o);
      return { customLabels: r, staticLabels: n };
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
