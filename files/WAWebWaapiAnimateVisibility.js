__d(
  "WAWebWaapiAnimateVisibility",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e = new WeakMap();
    function s(e) {
      var t;
      return (
        ((t = e.ownerDocument) == null ? void 0 : t.visibilityState) ===
        "hidden"
      );
    }
    function u(e, t, n) {
      var r = e.ownerDocument,
        o = d(r),
        a = function () {
          (self.clearTimeout(l), o.delete(i));
        },
        i = function () {
          (a(), n());
        },
        l = self.setTimeout(i, t + c);
      return (o.add(i), a);
    }
    var c = 100;
    function d(t) {
      var n = e.get(t);
      if (n != null) return n;
      var o = new Set();
      return (
        e.set(t, o),
        t.addEventListener("visibilitychange", function () {
          if (t.visibilityState === "hidden")
            for (var e of Array.from(o))
              try {
                e();
              } catch (e) {
                r("WAWebNoop")(e);
              }
        }),
        o
      );
    }
    ((l.isInHiddenDocument = s), (l.settleWhenOverdue = u));
  },
  98,
);
