__d(
  "WebBloksExtentionUtils",
  [],
  function (t, n, r, o, a, i) {
    var e =
      navigator.userAgent.match(/safari/) != null &&
      !navigator.userAgent.match(/chrom(e|ium)/);
    function l() {
      if (e) {
        var t, n;
        ((t = document.body) == null ||
          t.style.setProperty("-webkit-touch-callout", "none"),
          (n = document.body) == null ||
            n.style.setProperty("-webkit-user-select", "none"));
      }
    }
    function s() {
      if (e) {
        var t, n;
        ((t = document.body) == null ||
          t.style.removeProperty("-webkit-touch-callout"),
          (n = document.body) == null ||
            n.style.removeProperty("-webkit-user-select"));
      }
    }
    ((i.disableLongPressSideEffectsInSafari = l),
      (i.enableLongPressSideEffectsInSafari = s));
  },
  66,
);
