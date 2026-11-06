__d(
  "WAWebSharableEventListNavBarOpen",
  [],
  function (t, n, r, o, a, i) {
    var e = !1;
    function l() {
      e = !0;
    }
    function s() {
      e = !1;
    }
    function u() {
      var t = e;
      return ((e = !1), t);
    }
    ((i.noteSharableEventListOpeningFromNavBar = l),
      (i.clearSharableEventListOpeningFromNavBar = s),
      (i.consumeSharableEventListOpeningFromNavBar = u));
  },
  66,
);
