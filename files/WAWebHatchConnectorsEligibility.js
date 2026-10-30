__d(
  "WAWebHatchConnectorsEligibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["auth"]),
      l = "browser",
      s = new Set(["stripe_link", "shop_pay", "meta_pay"]),
      u = new Set(["stripe_link", "shop_pay"]),
      c = "local.";
    function d(e) {
      var t = [],
        n = [];
      for (var r of e)
        g(r) || !y(r) || (r.state === "connected" ? t.push(r) : n.push(r));
      return { connected: t, available: n };
    }
    function m(e) {
      var t = e.filter(function (e) {
        return g(e) && y(e);
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
    function p(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [h(e.connector), e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = h(o.id),
          i = n.get(a);
        o.state === "connected" &&
          !a.startsWith(c) &&
          !u.has(a) &&
          _(i) &&
          r.push(
            babelHelpers.extends({}, o, {
              hasCustomPermissions:
                (i == null ? void 0 : i.hasCustomPermissions) === !0,
            }),
          );
      }
      return r.sort(function (e, t) {
        return e.name.localeCompare(t.name);
      });
    }
    function _(e) {
      var t = e == null ? void 0 : e.settings;
      return t == null || (t.visible && t.managementKind !== "internal");
    }
    function f(e) {
      return e.managementKind === "policy_only" && h(e.id) === l;
    }
    function g(e) {
      return s.has(h(e.id));
    }
    function h(e) {
      return e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function y(t) {
      switch (t.state) {
        case "connected":
          return e.has(t.managementKind) || f(t);
        case "disconnected":
          return e.has(t.managementKind);
        default:
          return !1;
      }
    }
    ((i.groupEligibleHatchConnectors = d),
      (i.listEligibleHatchWalletConnectors = m),
      (i.listHatchPermissionsConnectors = p),
      (i.isHatchPermissionsOnlyConnector = f),
      (i.isHatchWalletConnector = g),
      (i.isManageableHatchConnector = y));
  },
  66,
);
