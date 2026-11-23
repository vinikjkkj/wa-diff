__d(
  "WebBloksPortal",
  ["ReactDOM", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.target,
        r = n === void 0 ? document.body : n;
      if (r != null) return o("ReactDOM").createPortal(t, r);
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
