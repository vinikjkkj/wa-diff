__d(
  "PECatalogStickyOptOutWriter",
  [
    "PECatalogStickyOptOutGating",
    "PECatalogStickyOptOutKeys",
    "PECatalogStickyOptOutOverflow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l) {
      return (
        l === void 0 && (l = ""),
        o("PECatalogStickyOptOutGating").shouldWriteGranularOptOut()
          ? u(e, t, n, r, a, i, l)
          : (e.set(o("PECatalogStickyOptOutKeys").accountKey(t, l), i), e)
      );
    }
    function s(e, t, n, r, a, i) {
      return (
        i === void 0 && (i = ""),
        o("PECatalogStickyOptOutGating").shouldWriteGranularOptOut()
          ? c(e, t, n, r, a, i)
          : (e.delete(o("PECatalogStickyOptOutKeys").accountKey(t, i)), e)
      );
    }
    function u(e, t, n, r, a, i, l) {
      l === void 0 && (l = "");
      var s = o("PECatalogStickyOptOutKeys").accountKey(t, l);
      if (o("PECatalogStickyOptOutOverflow").isLatched(e))
        return (e.set(s, i), e);
      var u = o("PECatalogStickyOptOutKeys").writeKeys(t, n, r, a, l);
      if (o("PECatalogStickyOptOutOverflow").wouldOverflow(e, u))
        return (
          e.set(o("PECatalogStickyOptOutKeys").OVERFLOW_SENTINEL, i),
          e.set(s, i),
          e
        );
      for (var c of u) e.set(c, i);
      return e;
    }
    function c(e, t, n, r, a, i) {
      i === void 0 && (i = "");
      for (var l of o("PECatalogStickyOptOutKeys").writeKeys(t, n, r, a, i))
        e.delete(l);
      return e;
    }
    ((l.applyOptOut = e),
      (l.applyOptIn = s),
      (l.applyOptOutGranular = u),
      (l.applyOptInGranular = c));
  },
  98,
);
