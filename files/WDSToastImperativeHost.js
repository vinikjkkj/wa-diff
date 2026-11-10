__d(
  "WDSToastImperativeHost",
  ["WDSToastPresentationContexts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = [],
      u = 0;
    function c(t) {
      var n = babelHelpers.extends({}, t);
      if (
        (o("WDSToastPresentationContexts").rememberToastPresentationContext(n),
        e == null)
      ) {
        s = p(s, n);
        return;
      }
      e.showToast(n);
    }
    function d(t, n) {
      (n === void 0 && (n = []), (e = t));
      var r = _(s, n);
      ((s = []),
        r.forEach(function (e) {
          var n = e.item;
          return t.showToast(n);
        }));
    }
    function m(t) {
      e === t && (e = null);
    }
    function p(e, t) {
      var n = u++,
        r =
          t.dedupId == null
            ? -1
            : e.findIndex(function (e) {
                return e.item.dedupId === t.dedupId;
              }),
        a = {
          firstSequence: r === -1 ? n : e[r].firstSequence,
          item: t,
          sequence: n,
        };
      return r === -1
        ? [].concat(e, [a])
        : (o("WDSToastPresentationContexts").carryToastPresentationContext(
            e[r].item,
            t,
          ),
          e.map(function (e, t) {
            return t === r ? a : e;
          }));
    }
    function _(e, t) {
      var n = [],
        r = new Map();
      for (var a of [].concat(e, t)) {
        var i = a.item.dedupId;
        if (i == null) {
          n.push(a);
          continue;
        }
        var l = r.get(i);
        if (l == null) {
          r.set(i, a);
          continue;
        }
        var s = l.sequence > a.sequence ? l : a;
        (o("WDSToastPresentationContexts").carryToastPresentationContext(
          s === a ? l.item : a.item,
          s.item,
        ),
          r.set(
            i,
            babelHelpers.extends({}, s, {
              firstSequence: Math.min(l.firstSequence, a.firstSequence),
            }),
          ));
      }
      return [].concat(n, Array.from(r.values())).sort(function (e, t) {
        return e.firstSequence - t.firstSequence;
      });
    }
    ((l.showWDSToast = c),
      (l.registerImperativeHost = d),
      (l.unregisterImperativeHost = m),
      (l.enqueuePendingToast = p));
  },
  98,
);
