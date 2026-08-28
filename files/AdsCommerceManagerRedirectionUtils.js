__d(
  "AdsCommerceManagerRedirectionUtils",
  [
    "URI",
    "XCommerceManagerItemsPageControllerRouteBuilder",
    "XCommerceManagerLaunchpadPageControllerRouteBuilder",
    "goUriOnNewWindow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, o) {
      if (n == null || t == null) {
        var a = r(
          "XCommerceManagerLaunchpadPageControllerRouteBuilder",
        ).buildUri({});
        (e || (e = r("URI"))).goURIOnNewWindow(a);
        return;
      }
      var i = r("XCommerceManagerItemsPageControllerRouteBuilder").buildUri({
        catalog_id: n,
        filterOption: t,
        ref: "ads_commerce_manager_redirect" + (o != null ? "_" + o : ""),
      });
      (e || (e = r("URI"))).goURIOnNewWindow(i);
    }
    function u(e, t, n) {
      if (e == null || t == null) {
        var o = r("XCommerceManagerLaunchpadPageControllerRouteBuilder")
          .buildUri({})
          .setSubDomain("business");
        o != null && r("goUriOnNewWindow")(o);
        return;
      }
      var a = t,
        i = r("XCommerceManagerItemsPageControllerRouteBuilder")
          .buildUri({
            catalog_id: e,
            filterOption: a,
            ref: "ads_commerce_manager_redirect" + (n != null ? "_" + n : ""),
          })
          .setSubDomain("business");
      i != null && r("goUriOnNewWindow")(i);
    }
    ((l.openCommerceManagerItemsTab = s),
      (l.openCommerceManagerItemsTabInNewWindowFilteredForProductSet = u));
  },
  98,
);
