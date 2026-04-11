__d(
  "WebBloksCollectionScrollTo",
  ["WebBloksCollectionScrollRefs", "WebDriverConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return t === "column";
    };
    function s(e) {
      return r("WebDriverConfig").isJestE2ETestRun
        ? "auto"
        : e === !0
          ? "smooth"
          : "auto";
    }
    function u(t, n) {
      var r = n.index,
        a = n.isAnimated,
        i = o("WebBloksCollectionScrollRefs").findWebbloksCollectionScrollRefs(
          t,
        ),
        l = i.containerElementRef,
        u = i.scrollableElementRef,
        c = t.getValues(),
        d = c.direction,
        m = e(d),
        p = l == null ? void 0 : l.current,
        _ = u == null ? void 0 : u.current;
      if (!(p == null || _ == null)) {
        var f = p.children.item(r),
          g = m
            ? { top: f == null ? void 0 : f.offsetTop }
            : { left: f == null ? void 0 : f.offsetLeft };
        _.scrollTo(babelHelpers.extends({}, g, { behavior: s(a) }));
      }
    }
    function c(t, n) {
      var r = n.isAnimated,
        a = o("WebBloksCollectionScrollRefs").findWebbloksCollectionScrollRefs(
          t,
        ),
        i = a.scrollableElementRef,
        l = t.getValues(),
        u = l.direction,
        c = e(u);
      if ((i == null ? void 0 : i.current) != null) {
        var d = c
          ? { top: i.current.scrollHeight }
          : { left: i.current.scrollWidth };
        i.current.scrollTo(babelHelpers.extends({}, d, { behavior: s(r) }));
      }
    }
    ((l.scrollWebBloksCollectionToIndex = u),
      (l.scrollWebBloksCollectionToEnd = c));
  },
  98,
);
