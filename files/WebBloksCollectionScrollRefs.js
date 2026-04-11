__d(
  "WebBloksCollectionScrollRefs",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e) {
      var t = s();
      return ((e.uiMutableContainer.extraRefs = { containerElementRef: t }), t);
    }
    function c(e) {
      var t,
        n =
          (t = e.uiMutableContainer.extraRefs) == null
            ? void 0
            : t.containerElementRef,
        r = e.uiMutableContainer.domNode;
      return { containerElementRef: n, scrollableElementRef: r };
    }
    ((l.useWebbloksCollectionScrollContainerRef = u),
      (l.findWebbloksCollectionScrollRefs = c));
  },
  98,
);
