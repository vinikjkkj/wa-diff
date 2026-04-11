__d(
  "useWebBloksCollectionScrollHandlers",
  [
    "WebBloksCollectionChildSizesLayoutReady",
    "WebBloksCollectionScrollTo",
    "WebBloksComponentContext",
    "react",
    "react-compiler-runtime",
    "useOnScrollSnap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useLayoutEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(25),
        n;
      t[0] !== e
        ? ((n = e.getExpression("on_scroll_snap")), (t[0] = e), (t[1] = n))
        : (n = t[1]);
      var a = n,
        i;
      t[2] !== e
        ? ((i = e.getExpression("on_scroll_callback")), (t[2] = e), (t[3] = i))
        : (i = t[3]);
      var l = i,
        s;
      t[4] !== e
        ? ((s = e.getExpression("on_page_scroll")), (t[4] = e), (t[5] = s))
        : (s = t[5]);
      var u = s,
        c = o("WebBloksComponentContext").useWebBloksContext(),
        d = c.bloksContext,
        p = c.executeCatch,
        _;
      t[6] !== d || t[7] !== p || t[8] !== e || t[9] !== a
        ? ((_ = function (n) {
            n != null && a != null && p(e, a, [n, d]);
          }),
          (t[6] = d),
          (t[7] = p),
          (t[8] = e),
          (t[9] = a),
          (t[10] = _))
        : (_ = t[10]);
      var f = _,
        g;
      t[11] !== d || t[12] !== p || t[13] !== e || t[14] !== u
        ? ((g = function (n, r, o) {
            u != null && p(e, u, [d, n, o, r]);
          }),
          (t[11] = d),
          (t[12] = p),
          (t[13] = e),
          (t[14] = u),
          (t[15] = g))
        : (g = t[15]);
      var h = g,
        y;
      t[16] !== d || t[17] !== p || t[18] !== e || t[19] !== l
        ? ((y = function () {
            l != null && p(e, l, [d]);
          }),
          (t[16] = d),
          (t[17] = p),
          (t[18] = e),
          (t[19] = l),
          (t[20] = y))
        : (y = t[20]);
      var C = y,
        b = a != null ? f : void 0,
        v = l != null ? C : void 0,
        S = u != null ? h : void 0,
        R;
      (t[21] !== b || t[22] !== v || t[23] !== S
        ? ((R = { onScrollSnap: b, onScroll: v, onPageScroll: S }),
          (t[21] = b),
          (t[22] = v),
          (t[23] = S),
          (t[24] = R))
        : (R = t[24]),
        r("useOnScrollSnap")(e, R),
        m(e));
    }
    function m(e) {
      var t = e.getValues(),
        n = t.stack_from_end,
        r = t.starting_index;
      c(
        function () {
          var t,
            a = r,
            i = function () {
              a != null && a > 0
                ? o(
                    "WebBloksCollectionScrollTo",
                  ).scrollWebBloksCollectionToIndex(e, {
                    index: a,
                    isAnimated: !1,
                  })
                : n === !0 &&
                  o("WebBloksCollectionScrollTo").scrollWebBloksCollectionToEnd(
                    e,
                    { isAnimated: !1 },
                  );
            };
          (i(),
            (t = e.uiMutableContainer) == null ||
              (t = t.domNode) == null ||
              (t = t.current) == null ||
              t.addEventListener(
                o("WebBloksCollectionChildSizesLayoutReady")
                  .LAYOUT_READY_EVENT_NAME,
                function () {
                  i();
                },
                { once: !0 },
              ));
        },
        [r, n, e.clientId],
      );
    }
    l.default = d;
  },
  98,
);
