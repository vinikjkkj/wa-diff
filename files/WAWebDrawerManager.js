__d(
  "WAWebDrawerManager",
  ["Promise", "WAWebDrawerManagerGlobalContext", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.openDrawerRight = function (t, n) {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "right",
            )) == null || e.openDrawer(t, n);
          }),
          (a.openDrawerMid = function (t, n) {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "mid",
            )) == null || e.openDrawer(t, n);
          }),
          (a.openDrawerLeft = function (t, n) {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null || e.openDrawer(t, n);
          }),
          (a.openDrawerFullscreen = function (t, n) {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "fullscreen",
            )) == null || e.openDrawer(t, n);
          }),
          (a.openDrawerLeftAsync = function (r, a) {
            var t, i;
            return (t =
              (i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
                "left",
              )) == null
                ? void 0
                : i.openDrawer(r, a)) != null
              ? t
              : (e || (e = n("Promise"))).resolve(!0);
          }),
          (a.closeDrawerRight = function () {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "right",
            )) == null || e.closeDrawer();
          }),
          (a.closeDrawerMid = function () {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "mid",
            )) == null || e.closeDrawer();
          }),
          (a.closeDrawerLeft = function (t) {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "left",
            )) == null || e.closeDrawer(null, t);
          }),
          (a.closeDrawerFullscreen = function () {
            var e;
            (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
              "fullscreen",
            )) == null || e.closeDrawer();
          }),
          (a.closeDrawerLeftAsync = function (r) {
            var t, a;
            return (t =
              (a = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
                "left",
              )) == null
                ? void 0
                : a.closeDrawer(null, r)) != null
              ? t
              : (e || (e = n("Promise"))).resolve(!0);
          }),
          (a.registerCloseGuardLeft = function (t) {
            var e, n;
            return (e =
              (n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
                "left",
              )) == null
                ? void 0
                : n.registerCloseGuard(t)) != null
              ? e
              : r("WAWebNoop");
          }),
          (a.hasCloseGuardLeft = function () {
            var e, t;
            return (e =
              (t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
                "left",
              )) == null
                ? void 0
                : t.hasCloseGuard()) != null
              ? e
              : !1;
          }),
          t
        );
      })(),
      u = new s();
    function c() {
      u.closeDrawerRight();
    }
    function d() {
      u.closeDrawerLeft();
    }
    ((l.DrawerManager = u), (l.closeDrawerRight = c), (l.closeDrawerLeft = d));
  },
  98,
);
