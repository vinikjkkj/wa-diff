__d(
  "AdsPERouterHelper",
  ["ExecutionEnvironment", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null,
      c = !1,
      d = !1,
      m = !1,
      p = null,
      _ = (function () {
        function t() {
          ((this.$1 = null), (this.$2 = null));
        }
        var n = t.prototype;
        return (
          (n.setConfig = function (t) {
            p = t;
          }),
          (n.getConfig = function () {
            return p || {};
          }),
          (n.isInitialized = function () {
            return c;
          }),
          (n.markAsInitialized = function () {
            c = !0;
          }),
          (n.isLoadingSettings = function () {
            return d;
          }),
          (n.setLoadingSettings = function (t) {
            d = t;
          }),
          (n.hasLoadingFilters = function () {
            return m;
          }),
          (n.markAsFiltersLoaded = function () {
            m = !0;
          }),
          (n.setInitialParams = function (t) {
            u = t;
          }),
          (n.getInitialParams = function () {
            return u;
          }),
          (n.getInitialStateLogInfo = function () {
            var e = u || {},
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
            var t;
            (e || (e = r("ExecutionEnvironment"))).canUseDOM
              ? (t = window.location.href)
              : (t = (s || (s = r("URI"))).getRequestURI().toString());
            var n = this.$2;
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
              i = { client_uri: (s || (s = r("URI"))).normalize(t), routes: a };
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
      f = new _();
    l.default = f;
  },
  98,
);
