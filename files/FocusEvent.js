__d(
  "FocusEvent",
  ["Event", "Run", "ge", "getOrCreateDOMID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = !1;
    function u(t, n) {
      if (e[t]) {
        var r = e[t].indexOf(n);
        (r >= 0 && e[t].splice(r, 1), e[t].length === 0 && delete e[t]);
      }
    }
    function c(t) {
      var n = t.getTarget();
      if (e[n.id] && e[n.id].length > 0) {
        var r = t.type === "focusin" || t.type === "focus";
        e[n.id].forEach(function (e) {
          e(r);
        });
      }
    }
    function d() {
      s ||
        (r("Event").listen(document.documentElement, "focusout", c),
        r("Event").listen(document.documentElement, "focusin", c),
        (s = !0));
    }
    function m(t, n, a) {
      var i;
      (a === void 0 && (a = { cleanupOnLeave: !0 }), d());
      var l = r("getOrCreateDOMID")(t);
      (e[l] || (e[l] = []), e[l].push(n));
      var s = !1;
      function c() {
        s || (u(l, n), m && (m.remove(), (m = null)), (s = !0));
      }
      var m =
        ((i = a) == null ? void 0 : i.cleanupOnLeave) === !0
          ? o("Run").onLeave(function () {
              r("ge")(l) || c();
            })
          : null;
      return {
        remove: function () {
          c();
        },
      };
    }
    l.listen = m;
  },
  98,
);
