__d(
  "getContextualParent",
  ["ge"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = !1,
        o = e;
      do {
        var a;
        if (o instanceof Element) {
          var i = o.getAttribute("data-ownerid");
          if (i != null && i !== "") {
            ((o = r("ge")(i)), (n = !0));
            continue;
          }
        }
        o = (a = o) == null ? void 0 : a.parentNode;
      } while (t && o && !n);
      return o;
    }
    l.default = e;
  },
  98,
);
