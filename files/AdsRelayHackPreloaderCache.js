__d(
  "AdsRelayHackPreloaderCache",
  [
    "AdsMgmtPreloadingUtils",
    "RelayAPIConfig",
    "RelayPrefetchedStreamCache",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(t, n, a, i) {
      var l = i != null ? i : r("RelayAPIConfig").actorID;
      ((e[n] = { actorID: l, preloaderID: t, variables: a }),
        o("RelayPrefetchedStreamCache").registerPreloader(t, n, a, l));
    }
    function u(t, n, a) {
      r("promiseDone")(
        o("AdsMgmtPreloadingUtils")
          .onPreloadingDone()
          .then(function () {
            if (
              o(
                "AdsMgmtPreloadingUtils",
              ).isInPostVCPreloadingEligibilityWindow()
            )
              return o("AdsMgmtPreloadingUtils")
                .onPreloadingEligibilityDone()
                .then(function () {
                  (delete e[n], o("RelayPrefetchedStreamCache").clear(t, n, a));
                });
            (delete e[n], o("RelayPrefetchedStreamCache").clear(t, n, a));
          }),
      );
    }
    function c(t, n, r, a, i, l) {
      var s,
        u,
        c,
        p,
        _,
        f = !1,
        g = {
          unsubscribe: function () {
            f = !0;
          },
        };
      if (!i.isScenarioOngoing()) return (a.start(g), f || a.complete(), g);
      (d(n), m(n));
      var h =
        i.getCustomSubscription == null
          ? void 0
          : i.getCustomSubscription(t, r, a, !1);
      if (h != null) return h;
      var y = null,
        C = e[n];
      return (
        ((s = i.subsetMatching) == null
          ? void 0
          : s.matchesRegisteredPreloader) != null &&
          C != null &&
          i.subsetMatching.matchesRegisteredPreloader(t, r, C) &&
          (y = C),
        o("RelayPrefetchedStreamCache").subscribe(
          (u = (c = y) == null ? void 0 : c.actorID) != null ? u : t,
          n,
          (p = (_ = y) == null ? void 0 : _.variables) != null ? p : r,
          a,
          l,
          !1,
        )
      );
    }
    function d(e) {
      var t = _();
      if (t[e] != null) {
        var n = t[e],
          r = n[0],
          o = n[1],
          a = n[2],
          i = a !== "" ? a : null;
        (s(r, e, o, i), delete t[e]);
      }
    }
    function m(e) {
      var t = f();
      if (t[e] != null) {
        var n = t[e],
          r = n[0],
          a = n[1],
          i = n[2];
        if (a != null) o("RelayPrefetchedStreamCache").next(r, a);
        else {
          var l = i != null ? i : {};
          o("RelayPrefetchedStreamCache").error(r, l);
        }
        delete t[e];
      }
    }
    function p(e) {
      var t = !1,
        n = _();
      n[e] != null && ((t = !0), delete n[e]);
      var r = f();
      return (r[e] != null && ((t = !0), delete r[e]), t);
    }
    function _() {
      var e;
      return (e = t.__rhpsr) != null ? e : (t.__rhpsr = {});
    }
    function f() {
      var e,
        n = (e = t.__rhprr) != null ? e : (t.__rhprr = {});
      return ((n.__onAdd = m), n);
    }
    ((l.registerPreloader = s),
      (l.scheduleClearAfterPreloadingDone = u),
      (l.subscribe = c),
      (l.registerPreloaderIfNeeded = d),
      (l.loadPreloaderResultsIfNeeded = m),
      (l.clearRegistryForQueryID = p));
  },
  98,
);
