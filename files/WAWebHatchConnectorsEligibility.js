__d(
  "WAWebHatchConnectorsEligibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["auth"]),
      l = "browser",
      s = new Set(["stripe_link", "shop_pay", "meta_pay"]);
    function u(e) {
      var t = [],
        n = [];
      for (var r of e)
        m(r) || !_(r) || (r.state === "connected" ? t.push(r) : n.push(r));
      return { connected: t, available: n };
    }
    function c(e) {
      var t = e.filter(function (e) {
        return m(e) && _(e);
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
    function d(e) {
      return e.managementKind === "policy_only" && p(e.id) === l;
    }
    function m(e) {
      return s.has(p(e.id));
    }
    function p(e) {
      return e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function _(t) {
      switch (t.state) {
        case "connected":
          return e.has(t.managementKind) || d(t);
        case "disconnected":
          return e.has(t.managementKind);
        default:
          return !1;
      }
    }
    ((i.groupEligibleHatchConnectors = u),
      (i.listEligibleHatchWalletConnectors = c),
      (i.isHatchPermissionsOnlyConnector = d),
      (i.isManageableHatchConnector = _));
  },
  66,
);
