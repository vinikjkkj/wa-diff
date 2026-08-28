__d(
  "PrimerInlineHandlers",
  ["Bootloader", "Parent", "cr:6108", "nullthrows", "uniqueID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = new Map();
    function u(t, o) {
      var a = r("nullthrows")(t.id);
      (a in e || (e[a] = 0),
        e[a] === 0 && n("cr:6108").addClass(t, "bootloading"),
        (e[a] += o));
    }
    function c(t) {
      var o = r("nullthrows")(t.id);
      (e[o]--, e[o] === 0 && n("cr:6108").removeClass(t, "bootloading"));
    }
    function d(e, t, n, r) {
      var o = r !== void 0 ? n[r] : n,
        a;
      if (Array.isArray(o)) for (a = 0; a < o.length; a++) d(e, t, o, a);
      else if (o && typeof o == "object")
        if (o.__elem) n[r] = e;
        else if (o.__event) n[r] = t;
        else for (var i in o) d(e, t, o, i);
    }
    function m(e, t, n) {
      var a = o("Parent").byClass(e, "stat_elem") || e;
      a.id || a.setAttribute("id", r("uniqueID")());
      var i = JSON.parse(e.getAttribute(n));
      (u(a, i.length),
        i.forEach(function (n) {
          var o = Array.isArray(n) ? p(n) : _(n),
            i = o.args,
            l = o.logicalKey,
            u = o.methodName,
            m = o.moduleName;
          d(e, t, i);
          var f = r("Bootloader").loadModules.call(
            r("Bootloader"),
            [m],
            function (e) {
              (c(a), e[u].apply(e, i));
            },
            "Primer: addEventHandler",
          );
          if (l != null) {
            var g = s.get(l);
            (g !== void 0 && g(),
              s.set(l, function () {
                (f.remove(), c(e));
              }));
          }
        }));
    }
    function p(e) {
      var t = e[0],
        n = e[1],
        r = babelHelpers.arrayLikeToArray(e).slice(2);
      return { moduleName: t, methodName: n, args: r };
    }
    function _(e) {
      var t = e.a,
        n = e.k,
        r = e.meth,
        o = e.mod;
      return { logicalKey: n, moduleName: o, methodName: r, args: t };
    }
    function f(e, t, n) {
      var r = o("Parent").byAttribute(e, n);
      if (!r) return null;
      do m(r, t, n);
      while ((r = o("Parent").byAttribute(r.parentNode, n)));
      return !1;
    }
    l.run = f;
  },
  98,
);
