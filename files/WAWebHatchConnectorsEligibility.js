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
      return g(m(e, t));
    }
    function m(e, t) {
      return e.filter(function (e) {
        return !v(e) && R(e, t);
      });
    }
    function p(e, t) {
      var n = new Set(
        t.map(function (e) {
          return S(e.id);
        }),
      );
      return e.filter(function (e) {
        return n.has(S(e.id));
      });
    }
    function _(e, t) {
      var n = S(t);
      return e.find(function (e) {
        return S(e.id) === n;
      });
    }
    function f(e, t) {
      return e.map(function (e) {
        var n = _(t, e.id);
        return n == null
          ? e
          : babelHelpers.extends({}, n, {
              needsReauth: e.needsReauth,
              state: e.state,
            });
      });
    }
    function g(e) {
      var t = [],
        n = [];
      for (var r of e) r.state === "connected" ? t.push(r) : n.push(r);
      return { connected: t, available: n };
    }
    function h(e) {
      var t = e.filter(function (e) {
        return v(e) && R(e);
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
    function y(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [S(e.connector), e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = S(o.id),
          i = n.get(a);
        o.state === "connected" &&
          !a.startsWith(c) &&
          !u.has(a) &&
          C(i) &&
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
    function C(e) {
      var t = e == null ? void 0 : e.settings;
      return t == null || (t.visible && t.managementKind !== "internal");
    }
    function b(e) {
      return e.managementKind === "policy_only" && S(e.id) === l;
    }
    function v(e) {
      return s.has(S(e.id));
    }
    function S(e) {
      return e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function R(t, n) {
      if (E(t, n)) return L(t, n);
      switch (t.state) {
        case "connected":
          return e.has(t.managementKind) || b(t);
        case "disconnected":
          return e.has(t.managementKind);
        default:
          return !1;
      }
    }
    function L(e, t) {
      return E(e, t) && e.state === "connected";
    }
    function E(e, t) {
      return (
        (t == null ? void 0 : t.customConnectorsEnabled) === !0 && e.isCustom
      );
    }
    ((i.groupEligibleHatchConnectors = d),
      (i.listEligibleHatchConnectors = m),
      (i.listHatchConnectorsInCatalog = p),
      (i.findHatchConnectorInCatalog = _),
      (i.withHatchCatalogEntries = f),
      (i.groupHatchConnectorsByState = g),
      (i.listEligibleHatchWalletConnectors = h),
      (i.listHatchPermissionsConnectors = y),
      (i.isHatchPermissionsOnlyConnector = b),
      (i.isHatchWalletConnector = v),
      (i.isManageableHatchConnector = R),
      (i.isConnectedHatchCustomConnector = L));
  },
  66,
);
