__d(
  "WAWebHatchConnectorsEligibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["auth"]),
      l = new Set(["stripe_link", "shop_pay", "meta_pay"]);
    function s(e) {
      var t = [],
        n = [];
      for (var r of e)
        c(r) || !d(r) || (r.state === "connected" ? t.push(r) : n.push(r));
      return { connected: t, available: n };
    }
    function u(e) {
      var t = e.filter(function (e) {
        return c(e) && d(e);
      });
      return [].concat(
        t.filter(function (e) {
          return e.state === "connected";
        }),
        t.filter(function (e) {
          return e.state !== "connected";
        }),
      );
    }
    function c(e) {
      var t = e.id.trim().toLowerCase().replace(/[- ]/g, "_");
      return l.has(t);
    }
    function d(t) {
      return (
        (t.state === "connected" || t.state === "disconnected") &&
        e.has(t.managementKind)
      );
    }
    ((i.groupEligibleHatchConnectors = s),
      (i.listEligibleHatchWalletConnectors = u));
  },
  66,
);
