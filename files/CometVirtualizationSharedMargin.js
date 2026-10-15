__d(
  "CometVirtualizationSharedMargin",
  [
    "CometDebounce",
    "VirtualizationConfig",
    "cometVirtualizationMarginBounds",
    "cometVirtualizationMarginStep",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("VirtualizationConfig").getScrollHandlingDebounceMs(),
      s = new Map();
    function u(e, t) {
      return JSON.stringify([
        e,
        t.initialTopBottomMargin,
        t.initialLeftRightMargin,
        t.isInfiniteScrollUp,
        t.readAheadMarginMax,
      ]);
    }
    function c(e) {
      var t, n;
      return (t = (n = s.get(e)) == null ? void 0 : n.margin) != null
        ? t
        : null;
    }
    function d(e, t) {
      ((e.margin = t),
        Array.from(e.listeners).forEach(function (e) {
          return e();
        }));
    }
    function m(e, t, n) {
      var r = s.get(e);
      if (r != null) {
        var a = r.config,
          i = o("cometVirtualizationMarginStep").computeNextMargin(
            r.margin,
            t,
            n,
            o("cometVirtualizationMarginBounds").computeMarginBounds(
              a.initialTopBottomMargin,
              window.innerHeight,
              a.isInfiniteScrollUp,
              a.readAheadMarginMax,
            ),
          );
        i !== r.margin && d(r, i);
      }
    }
    function p(e) {
      return e instanceof Element ? e.scrollTop : e.scrollY;
    }
    function _(t, n, o) {
      var a = r("CometDebounce")(
          function () {
            var e = p(n),
              r = e > l.lastScrollTop;
            ((l.lastScrollTop = e), m(t, r, l.scrollSpeed.weightedSpeed));
          },
          { wait: e },
        ),
        i = function () {
          return a();
        },
        l = {
          detach: function () {
            (n.removeEventListener("scroll", i), a.reset());
          },
          lastScrollTop: p(n),
          scrollSpeed: o,
          subscribers: 0,
        };
      return (n.addEventListener("scroll", i, { passive: !0 }), l);
    }
    function f(e, t, n, r, o, a) {
      var i,
        l = s.get(e);
      l == null &&
        ((l = {
          attachments: new Map(),
          config: babelHelpers.extends({}, t),
          listeners: new Set(),
          margin: n,
        }),
        s.set(e, l));
      var u = l,
        c = (i = u.attachments.get(r)) != null ? i : _(e, r, o);
      (u.attachments.set(r, c),
        c.subscribers++,
        (c.scrollSpeed = o),
        u.listeners.add(a));
      var d = !0;
      return function () {
        d &&
          ((d = !1),
          u.listeners.delete(a),
          --c.subscribers === 0 && (c.detach(), u.attachments.delete(r)));
      };
    }
    ((l.getSharedMarginKey = u),
      (l.readSharedMargin = c),
      (l.stepSharedMargin = m),
      (l.subscribeToSharedMargin = f));
  },
  98,
);
