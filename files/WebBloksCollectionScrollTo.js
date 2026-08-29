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
        c = t.get("direction"),
        d = e(c),
        m = l == null ? void 0 : l.current,
        p = u == null ? void 0 : u.current;
      if (!(m == null || p == null)) {
        var _ = m.children.item(r),
          f = d
            ? { top: _ == null ? void 0 : _.offsetTop }
            : { left: _ == null ? void 0 : _.offsetLeft };
        p.scrollTo(babelHelpers.extends({}, f, { behavior: s(a) }));
      }
    }
    function c(t, n) {
      var r = n.isAnimated,
        a = o("WebBloksCollectionScrollRefs").findWebbloksCollectionScrollRefs(
          t,
        ),
        i = a.scrollableElementRef,
        l = t.get("direction"),
        u = e(l);
      if ((i == null ? void 0 : i.current) != null) {
        var c = u
          ? { top: i.current.scrollHeight }
          : { left: i.current.scrollWidth };
        i.current.scrollTo(babelHelpers.extends({}, c, { behavior: s(r) }));
      }
    }
    ((l.scrollWebBloksCollectionToIndex = u),
      (l.scrollWebBloksCollectionToEnd = c));
  },
  98,
);
