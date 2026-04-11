__d(
  "useFoldingAddressBar",
  [
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = "bk.data.contrib.screen.wrapper.Web";
    function c(e) {
      for (var t of e)
        if (o("WebBloksModel").isWebBloksModel(t) && t.styleId === u) {
          var n = t.get("enable_folding_address_bar");
          return n === !0 || n === 1;
        }
      return !1;
    }
    function d(e) {
      var t, n;
      if (e.length === 0) return null;
      var r = e[0];
      if (r.value.state !== "ready") return null;
      var a = (t = r.options.initialContainer) == null ? void 0 : t.config,
        i = a == null ? void 0 : a.getWrapperContribs();
      if (i != null) return i;
      var l = (n = r.treeManager) == null ? void 0 : n.unboundModel;
      if (
        l == null ||
        (l.styleId !== o("WebBloksConstants").BK_SCREEN_WRAPPER &&
          l.styleId !== o("WebBloksConstants").BK_SCREEN_WRAPPER_LEGACY)
      )
        return null;
      var s = l.get("contribs");
      return s == null || !Array.isArray(s) ? null : s;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        r;
      if (t[0] !== n.allowFoldingAddressBar || t[1] !== e) {
        e: {
          if (!n.allowFoldingAddressBar) {
            r = !1;
            break e;
          }
          var a = d(e);
          if (a == null) {
            r = !1;
            break e;
          }
          r = c(a);
        }
        ((t[0] = n.allowFoldingAddressBar), (t[1] = e), (t[2] = r));
      } else r = t[2];
      var i = r;
      return i;
    }
    l.default = m;
  },
  98,
);
