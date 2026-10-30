__d(
  "WDSToastImperativeHost",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = [],
      s = 0;
    function u(t) {
      if (e == null) {
        l = m(l, t);
        return;
      }
      e.showToast(t);
    }
    function c(t, n) {
      (n === void 0 && (n = []), (e = t));
      var r = p(l, n);
      ((l = []),
        r.forEach(function (e) {
          var n = e.item;
          return t.showToast(n);
        }));
    }
    function d(t) {
      e === t && (e = null);
    }
    function m(e, t) {
      var n = s++,
        r =
          t.dedupId == null
            ? -1
            : e.findIndex(function (e) {
                return e.item.dedupId === t.dedupId;
              }),
        o = {
          firstSequence: r === -1 ? n : e[r].firstSequence,
          item: t,
          sequence: n,
        };
      return r === -1
        ? [].concat(e, [o])
        : e.map(function (e, t) {
            return t === r ? o : e;
          });
    }
    function p(e, t) {
      var n = [],
        r = new Map();
      for (var o of [].concat(e, t)) {
        var a = o.item.dedupId;
        if (a == null) {
          n.push(o);
          continue;
        }
        var i = r.get(a);
        if (i == null) {
          r.set(a, o);
          continue;
        }
        var l = i.sequence > o.sequence ? i : o;
        r.set(
          a,
          babelHelpers.extends({}, l, {
            firstSequence: Math.min(i.firstSequence, o.firstSequence),
          }),
        );
      }
      return [].concat(n, Array.from(r.values())).sort(function (e, t) {
        return e.firstSequence - t.firstSequence;
      });
    }
    ((i.showWDSToast = u),
      (i.registerImperativeHost = c),
      (i.unregisterImperativeHost = d),
      (i.enqueuePendingToast = m));
  },
  66,
);
