__d(
  "MAIBABusinessSetupDeferredAssetsCache",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = {
        adAccounts: [],
        availablePages: [],
        availablePagesHasMore: !1,
        availablePagesNextCursor: null,
        instagramProfiles: [],
        offlineThreadingID: null,
        reviewVisualSnapshot: null,
        selectedProfiles: null,
      },
      c = new Map(),
      d = new Set();
    function m(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function p() {
      for (var e of d) e();
    }
    function _(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          var r = t[n];
          return (
            r != null &&
            e.id === r.id &&
            e.name === r.name &&
            e.statusCode === r.statusCode &&
            e.statusLabel === r.statusLabel
          );
        })
      );
    }
    function f(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          var r = t[n];
          return (
            r != null &&
            e.avatarURI === r.avatarURI &&
            e.connected === r.connected &&
            e.id === r.id &&
            e.name === r.name &&
            e.type === r.type
          );
        })
      );
    }
    function g(e) {
      var t;
      return e == null || e === "" ? u : (t = c.get(e)) != null ? t : u;
    }
    function h(e, t, n) {
      return e === "" || t == null || t === ""
        ? ""
        : e + ":" + (t != null ? t : "") + ":" + (n != null ? n : 0);
    }
    function y(e, t) {
      if (!(e == null || e === "")) {
        var n = g(e);
        _(n.adAccounts, t) ||
          (c.set(e, babelHelpers.extends({}, n, { adAccounts: t })), p());
      }
    }
    function C(e, t, n, r) {
      if (!(e == null || e === "")) {
        var o = g(e);
        (f(o.availablePages, t) &&
          o.availablePagesHasMore === n &&
          o.availablePagesNextCursor === r) ||
          (c.set(
            e,
            babelHelpers.extends({}, o, {
              availablePages: t,
              availablePagesHasMore: n,
              availablePagesNextCursor: r,
            }),
          ),
          p());
      }
    }
    function b(e, t) {
      if (!(e == null || e === "")) {
        var n = g(e);
        f(n.instagramProfiles, t) ||
          (c.set(e, babelHelpers.extends({}, n, { instagramProfiles: t })),
          p());
      }
    }
    function v(e, t) {
      if (!(e == null || e === "" || t == null || t === "")) {
        var n = g(e);
        n.offlineThreadingID !== t &&
          (c.set(e, babelHelpers.extends({}, n, { offlineThreadingID: t })),
          p());
      }
    }
    function S(e, t) {
      if (!(e == null || e === "")) {
        var n = g(e);
        (n.selectedProfiles != null && f(n.selectedProfiles, t)) ||
          (c.set(e, babelHelpers.extends({}, n, { selectedProfiles: t })), p());
      }
    }
    function R(e, t) {
      if (!(e == null || e === "")) {
        var n = g(e);
        (c.set(e, babelHelpers.extends({}, n, { reviewVisualSnapshot: t })),
          p());
      }
    }
    function L(e) {
      e != null && e !== "" && c.delete(e) && p();
    }
    function E(e) {
      return s(m, function () {
        return g(e);
      });
    }
    ((l.getBusinessSetupDeferredAssetsCacheKey = h),
      (l.publishDeferredAdAccounts = y),
      (l.publishDeferredPages = C),
      (l.publishDeferredInstagramProfiles = b),
      (l.publishDeferredOfflineThreadingID = v),
      (l.publishSelectedProfiles = S),
      (l.publishReviewVisualSnapshot = R),
      (l.clearDeferredAssets = L),
      (l.useMAIBABusinessSetupDeferredAssets = E));
  },
  98,
);
