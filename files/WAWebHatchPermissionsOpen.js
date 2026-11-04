__d(
  "WAWebHatchPermissionsOpen",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = new WeakSet();
    function s() {
      e = {};
    }
    function u() {
      return e;
    }
    function c(e) {
      return e == null ? !0 : l.has(e) ? !1 : (l.add(e), !0);
    }
    ((i.startHatchPermissionsOpen = s),
      (i.currentHatchPermissionsOpen = u),
      (i.claimHatchPermissionsImpression = c));
  },
  66,
);
