__d(
  "createNodesFromMarkup",
  [
    "invariant",
    "ExecutionEnvironment",
    "TrustedTypesNoOpPolicy_DO_NOT_USE",
    "getMarkupWrap",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.createElement("div")
        : null,
      c = /^\s*<(\w+)/;
    function d(e) {
      var t = e.match(c);
      return t && t[1].toLowerCase();
    }
    function m(e, t) {
      var n = u;
      u || s(0, 5001);
      var o = d(e),
        a = o && r("getMarkupWrap")(o);
      if (a) {
        n.innerHTML = a[1] + e + a[2];
        for (var i = a[0]; i--; ) n = n.lastChild;
      } else n.innerHTML = r("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(e);
      var l = n.getElementsByTagName("script");
      l.length && (t || s(0, 5002), Array.from(l).forEach(t));
      for (var c = Array.from(n.childNodes); n.lastChild; )
        n.removeChild(n.lastChild);
      return c;
    }
    l.default = m;
  },
  98,
);
