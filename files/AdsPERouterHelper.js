__d(
  "AdsPERouterHelper",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = !1,
      c = !1,
      d = !1,
      m = null,
      p = (function () {
        function t() {
          ((this.$1 = null), (this.$2 = null));
        }
        var n = t.prototype;
        return (
          (n.setConfig = function (t) {
            m = t;
          }),
          (n.getConfig = function () {
            return m || {};
          }),
          (n.isInitialized = function () {
            return u;
          }),
          (n.markAsInitialized = function () {
            u = !0;
          }),
          (n.isLoadingSettings = function () {
            return c;
          }),
          (n.setLoadingSettings = function (t) {
            c = t;
          }),
          (n.hasLoadingFilters = function () {
            return d;
          }),
          (n.markAsFiltersLoaded = function () {
            d = !0;
          }),
          (n.setInitialParams = function (t) {
            s = t;
          }),
          (n.getInitialParams = function () {
            return s;
          }),
          (n.getInitialStateLogInfo = function () {
            var e = s || {},
              t = e.initial_route;
            return {
              bootloaded_route: e.bootloaded_route,
              selected_pane: e.selected_pane,
              initial_route: t ? t.givenName : null,
              source: e.nav_source,
              event_source: e.nav_entry_point,
            };
          }),
          (n.getEventLogInfo = function () {
            var t = window.location.href,
              n = this.$2;
            if (t === this.$1 && n != null) return n;
            var o = this.getRouter(),
              a =
                o &&
                o
                  .getRoutes()
                  .map(function (e) {
                    var t;
                    return (t = e.constructor) == null ? void 0 : t.routeName;
                  })
                  .filter(Boolean)
                  .toArray(),
              i = {
                client_uri: (e || (e = r("URI"))).normalize(
                  window.location.href,
                ),
                routes: a,
              };
            return ((this.$2 = i), (this.$1 = t), i);
          }),
          (n.getRouter = function () {
            var e = this.getConfig().Router;
            return e && e.get();
          }),
          (n.getRouteBuilder = function () {
            var e = this.getConfig().RouteBuilder;
            return new e(this.getRouter());
          }),
          (n.getIDUtils = function () {
            return this.getConfig().idUtils;
          }),
          (n.getNavUtils = function () {
            return this.getConfig().navUtils;
          }),
          t
        );
      })(),
      _ = new p();
    l.default = _;
  },
  98,
);
