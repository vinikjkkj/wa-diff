__d(
  "useHeroTracingDOMTracking",
  [
    "HeroTracingCoreDependencies",
    "mergeRefs",
    "react",
    "react-compiler-runtime",
    "usePageletVCTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo;
    function c(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.alwaysMarkMutationRootAsVisualChange,
        i = t.interactionUUID,
        l = t.isMutationRoot,
        s = t.name,
        u = t.observeTextMutation,
        c = t.pageletName,
        d = t.pageletType,
        m = t.position,
        p = t.trackTailLoad,
        _ = t.vcCallback,
        f;
      n[0] !== a ||
      n[1] !== i ||
      n[2] !== l ||
      n[3] !== s ||
      n[4] !== u ||
      n[5] !== d ||
      n[6] !== _
        ? ((f = {
            interactionUUID: i,
            isMutationRoot: l,
            observeTextMutation: u,
            pageletName: s,
            pageletType: d,
            vcCallback: _,
            alwaysMarkMutationRootAsVisualChange: a,
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s),
          (n[4] = u),
          (n[5] = d),
          (n[6] = _),
          (n[7] = f))
        : (f = n[7]);
      var g = r("usePageletVCTracker")(f),
        h = (
          e || (e = r("HeroTracingCoreDependencies"))
        ).useTailLoadPageletTracker(c, m, p),
        y;
      return (
        n[8] !== g || n[9] !== h
          ? ((y = r("mergeRefs")(g, h)), (n[8] = g), (n[9] = h), (n[10] = y))
          : (y = n[10]),
        y
      );
    }
    var d = c;
    l.default = d;
  },
  98,
);
