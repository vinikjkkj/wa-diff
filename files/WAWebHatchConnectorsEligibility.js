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
    function d(e, t) {
      return f(m(e, t));
    }
    function m(e, t) {
      return e.filter(function (e) {
        return !b(e) && S(e, t);
      });
    }
    function p(e, t) {
      var n = new Set(
        t.map(function (e) {
          return v(e.id);
        }),
      );
      return e.filter(function (e) {
        return n.has(v(e.id));
      });
    }
    function _(e, t) {
      var n = v(t);
      return e.find(function (e) {
        return v(e.id) === n;
      });
    }
    function f(e) {
      var t = [],
        n = [];
      for (var r of e) r.state === "connected" ? t.push(r) : n.push(r);
      return { connected: t, available: n };
    }
    function g(e) {
      var t = e.filter(function (e) {
        return b(e) && S(e);
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
    function h(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [v(e.connector), e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = v(o.id),
          i = n.get(a);
        o.state === "connected" &&
          !a.startsWith(c) &&
          !u.has(a) &&
          y(i) &&
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
    function y(e) {
      var t = e == null ? void 0 : e.settings;
      return t == null || (t.visible && t.managementKind !== "internal");
    }
    function C(e) {
      return e.managementKind === "policy_only" && v(e.id) === l;
    }
    function b(e) {
      return s.has(v(e.id));
    }
    function v(e) {
      return e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function S(t, n) {
      if (L(t, n)) return R(t, n);
      switch (t.state) {
        case "connected":
          return e.has(t.managementKind) || C(t);
        case "disconnected":
          return e.has(t.managementKind);
        default:
          return !1;
      }
    }
    function R(e, t) {
      return L(e, t) && e.state === "connected";
    }
    function L(e, t) {
      return (
        (t == null ? void 0 : t.customConnectorsEnabled) === !0 && e.isCustom
      );
    }
    ((i.groupEligibleHatchConnectors = d),
      (i.listEligibleHatchConnectors = m),
      (i.listHatchConnectorsInCatalog = p),
      (i.findHatchConnectorInCatalog = _),
      (i.groupHatchConnectorsByState = f),
      (i.listEligibleHatchWalletConnectors = g),
      (i.listHatchPermissionsConnectors = h),
      (i.isHatchPermissionsOnlyConnector = C),
      (i.isHatchWalletConnector = b),
      (i.isManageableHatchConnector = S),
      (i.isConnectedHatchCustomConnector = R));
  },
  66,
);
