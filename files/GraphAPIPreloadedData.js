__d(
  "GraphAPIPreloadedData",
  [
    "$InternalEnum",
    "FBLogger",
    "GraphAPIConfig",
    "GraphAPIRequestMatchingUtils",
    "GraphPreloadingTTL",
    "clearTimeout",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["AP_ML", "EP", "AP_CS"]),
      s = new Map(),
      u = new Map(),
      c;
    function d(e, t, n) {
      e.params != null &&
        !(e.params instanceof FormData) &&
        (e.params.__entryPointPreloaded = "1");
      var r = e.go();
      if (!(e.params instanceof FormData)) {
        var o;
        (o = e.params) == null || delete o.__entryPointPreloaded;
      }
      return (
        s.set(e, {
          dataProvider: n,
          response: r,
          timeoutId: v(e, t),
          refCounter: 1,
        }),
        r
      );
    }
    function m(e) {
      return {
        allowIDsSubset:
          e.path === "/" + o("GraphAPIConfig").adsApiVersion + "/",
        allowIgnoreEmptyParams: !0,
        allowSubfieldSuperset: !0,
      };
    }
    function p(e, t) {
      var n = u.get(t);
      n || ((n = []), u.set(t, n));
      var r =
        e.source != null && e.source.length > 0
          ? e.source + "-" + e.name
          : e.name;
      n.push(r);
    }
    function _(e, t) {
      t === void 0 && (t = !0);
      var n = m(e);
      for (var a of s.entries()) {
        var i = a[0],
          l = a[1];
        if (o("GraphAPIRequestMatchingUtils").areRequestsEquivalent(i, e, n))
          return (
            t && (r("clearTimeout")(l.cacheTTLTimeoutID), l.refCounter++),
            i
          );
      }
      return null;
    }
    function f(e, t) {
      var n;
      t === void 0 && (t = !0);
      var r = _(e, !1);
      if (r != null) {
        var o = s.get(r);
        if (o != null)
          return (
            p(e, r),
            { response: o.response, dataProvider: o.dataProvider }
          );
      }
      var a = c;
      return (
        a != null &&
          t === !0 &&
          !(e.params instanceof FormData) &&
          ((n = e.params) == null ? void 0 : n.__entryPointPreloaded) !== "1" &&
          a(Array.from(s.keys()), e, m(e)),
        null
      );
    }
    function g(e) {
      return u.get(e);
    }
    function h(e, t) {
      t === void 0 && (t = !1);
      var n = s.get(e);
      if (n != null && (n.refCounter--, n.refCounter <= 0)) {
        if (n.refCounter < 0) {
          var o;
          r("FBLogger")("ams_frontend").warn(
            "[Graph API Preloading] refCounter < 0 (reqName: %s) (reqSrc: %s)",
            e.name,
            (o = e.source) != null ? o : "",
          );
        }
        (t ? y(e) : C(e), u.delete(e));
      }
    }
    function y(e) {
      var t;
      (r("clearTimeout")((t = s.get(e)) == null ? void 0 : t.timeoutId),
        s.delete(e),
        u.delete(e));
    }
    function C(e) {
      var t = s.get(e);
      t != null &&
        (r("clearTimeout")(t.cacheTTLTimeoutID),
        (t.cacheTTLTimeoutID = r("setTimeout")(function () {
          y(e);
        }, o("GraphPreloadingTTL").DEFAULT_CACHE_TTL)));
    }
    function b(e) {
      c = e;
    }
    function v(e, t) {
      var n = s.get(e);
      return (
        n != null && window.clearTimeout(n.timeoutId),
        window.setTimeout(function () {
          if (s.has(e)) {
            var n;
            r("FBLogger")("ams_frontend").warn(
              "[Graph API Preloading] Cached graphAPI data name:%s source:%s interaction:%s wasn't removed after %s minutes.",
              e.name,
              (n = e.source) != null ? n : "",
              t,
              o("GraphPreloadingTTL").STALE_REQUEST_TIME_LIMIT_MIN,
            );
          }
        }, o("GraphPreloadingTTL").STALE_REQUEST_TIME_LIMIT_MS)
      );
    }
    function S() {
      for (var e of s.keys()) y(e);
    }
    ((l.Provider = e),
      (l.execute = d),
      (l.findEquivalentRequest = _),
      (l.find = f),
      (l.getDataConsumers = g),
      (l.remove = h),
      (l.setLogMismatchCallback = b),
      (l.clearAll = S));
  },
  98,
);
