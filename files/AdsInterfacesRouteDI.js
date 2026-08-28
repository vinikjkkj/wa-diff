__d(
  "AdsInterfacesRouteDI",
  ["invariant", "ICEDI"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "app_route_handler",
      u = "browser",
      c = "controller",
      d = "event_manager",
      m = "is_route_load_time_enabled",
      p = "loader",
      _ = "navigation_manager",
      f = "public_dispatcher",
      g = "public_logger",
      h = "private_dispatcher",
      y = "private_logger",
      C = "resolver",
      b = "router",
      v = "store",
      S = "time_spent_logging_options",
      R = "uri_helper",
      L = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getAppHandler = function () {
            return this.getOrNull(e);
          }),
          (r.setAppHandler = function (n) {
            return (this.set(e, n), this);
          }),
          (r.getBrowser = function () {
            var e = this.get(u);
            return (e || s(0, 2308), e);
          }),
          (r.setBrowser = function (t) {
            return (this.set(u, t), this);
          }),
          (r.getController = function () {
            var e = this.get(c);
            return (e || s(0, 2309), e);
          }),
          (r.setController = function (t) {
            return (this.set(c, t), this);
          }),
          (r.getEventManager = function () {
            var e = this.get(d);
            return (e || s(0, 2310), e);
          }),
          (r.getEventManagerOrNull = function () {
            return this.getOrNull(d);
          }),
          (r.setEventManager = function (t) {
            return (this.set(d, t), this);
          }),
          (r.getIsRouteLoadTimeEnabled = function () {
            return this.get(m);
          }),
          (r.setIsRouteLoadTimeEnabled = function (t) {
            return (this.set(m, t), this);
          }),
          (r.getTimeSpentLoggingOptions = function () {
            var e,
              t = (e = this.getOrNull(S)) != null ? e : {};
            return typeof t == "function" ? t() : t;
          }),
          (r.setTimeSpentLoggingOptions = function (t) {
            return (this.set(S, t), this);
          }),
          (r.getLoader = function () {
            var e = this.get(p);
            return (e || s(0, 2311), e);
          }),
          (r.setLoader = function (t) {
            return (this.set(p, t), this);
          }),
          (r.getNavigationManager = function () {
            var e = this.get(_);
            return (e || s(0, 2312), e);
          }),
          (r.setNavigationManager = function (t) {
            return (this.set(_, t), this);
          }),
          (r.getOnPrivateDispatch = function () {
            var e = this.get(h);
            return (e || s(0, 2317), e);
          }),
          (r.setOnPrivateDispatch = function (t) {
            return (this.set(h, t), this);
          }),
          (r.getOnPrivateLog = function () {
            var e = this.get(y);
            return (e || s(0, 2313), e);
          }),
          (r.setOnPrivateLog = function (t) {
            return (this.set(y, t), this);
          }),
          (r.getOnPublicDispatch = function () {
            return this.getOrNull(f);
          }),
          (r.setOnPublicDispatch = function (t) {
            return (this.set(f, t), this);
          }),
          (r.getOnPublicLog = function () {
            return this.getOrNull(g);
          }),
          (r.setOnPublicLog = function (t) {
            return (this.set(g, t), this);
          }),
          (r.getResolver = function () {
            var e = this.get(C);
            return (e || s(0, 2314), e);
          }),
          (r.setResolver = function (t) {
            return (this.set(C, t), this);
          }),
          (r.getRouter = function () {
            var e = this.get(b);
            return (e || s(0, 2315), e);
          }),
          (r.getRouterOrNull = function () {
            return this.getOrNull(b);
          }),
          (r.setRouter = function (t) {
            return (this.set(b, t), this);
          }),
          (r.getStore = function () {
            var e = this.get(v);
            return (e || s(0, 2316), e);
          }),
          (r.setStore = function (t) {
            return (this.set(v, t), this);
          }),
          (r.getURIHelper = function () {
            return this.get(R);
          }),
          (r.getURIHelperOrNull = function () {
            return this.getOrNull(R);
          }),
          (r.setURIHelper = function (t) {
            return (this.set(R, t), this);
          }),
          n
        );
      })(r("ICEDI")),
      E = new L();
    l.default = E;
  },
  98,
);
