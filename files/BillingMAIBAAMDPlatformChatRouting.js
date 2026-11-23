__d(
  "BillingMAIBAAMDPlatformChatRouting",
  ["MAIBAChatElevationState", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Set(),
      c = new Set();
    function d(e, t) {
      var n =
        t &&
        o("MAIBAChatElevationState").getHasMAIBAElevationHost(
          o("MAIBAChatElevationState").MAIBAElevationSource
            .ADS_MANAGER_PLATFORM_CHAT,
        );
      if (u.has(e) !== n) {
        var r = new Set(u);
        (n ? r.add(e) : r.delete(e), (u = r));
        for (var a of c) a();
      }
    }
    function m(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function p() {
      return u;
    }
    function _() {
      return s(m, p, p);
    }
    ((l.setBillingMAIBAAMDPlatformRoute = d),
      (l.useBillingMAIBAAMDPlatformRoutedEntrypoints = _));
  },
  98,
);
