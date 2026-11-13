__d(
  "WAWebHatchConnectorsEligibility",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["auth"]),
      l = "browser",
      s = new Set(["stripe_link", "shop_pay", "meta_pay"]),
      u = new Set(["stripe_link", "shop_pay"]),
      c = 5,
      d = "local.";
    function m(e, t) {
      return h(p(e, t));
    }
    function p(e, t) {
      return e.filter(function (e) {
        return !S(e) && L(e, t);
      });
    }
    function _(e, t) {
      var n = new Set(
        t.map(function (e) {
          return R(e.id);
        }),
      );
      return e.filter(function (e) {
        return n.has(R(e.id));
      });
    }
    function f(e, t) {
      var n = R(t);
      return e.find(function (e) {
        return R(e.id) === n;
      });
    }
    function g(e, t) {
      return e.map(function (e) {
        var n = f(t, e.id);
        return n == null
          ? e
          : babelHelpers.extends({}, n, {
              needsReauth: e.needsReauth,
              state: e.state,
            });
      });
    }
    function h(e) {
      var t = [],
        n = [];
      for (var r of e) r.state === "connected" ? t.push(r) : n.push(r);
      return { connected: t, available: n };
    }
    function y(e) {
      var t = e.filter(function (e) {
        return S(e) && L(e);
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
    function C(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [R(e.connector), e];
          }),
        ),
        r = [];
      for (var o of e) {
        var a = R(o.id),
          i = n.get(a);
        o.state === "connected" &&
          !a.startsWith(d) &&
          !u.has(a) &&
          b(i) &&
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
    function b(e) {
      var t = e == null ? void 0 : e.settings;
      return t == null || (t.visible && t.managementKind !== "internal");
    }
    function v(e) {
      return e.managementKind === "policy_only" && R(e.id) === l;
    }
    function S(e) {
      return s.has(R(e.id));
    }
    function R(e) {
      return e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function L(t, n) {
      if (k(t, n)) return E(t, n);
      switch (t.state) {
        case "connected":
          return e.has(t.managementKind) || v(t);
        case "disconnected":
          return e.has(t.managementKind);
        default:
          return !1;
      }
    }
    function E(e, t) {
      return k(e, t) && e.state === "connected";
    }
    function k(e, t) {
      return (
        (t == null ? void 0 : t.customConnectorsEnabled) === !0 && e.isCustom
      );
    }
    ((i.HATCH_HOMEPAGE_PREVIEW_LIMIT = c),
      (i.groupEligibleHatchConnectors = m),
      (i.listEligibleHatchConnectors = p),
      (i.listHatchConnectorsInCatalog = _),
      (i.findHatchConnectorInCatalog = f),
      (i.withHatchCatalogEntries = g),
      (i.groupHatchConnectorsByState = h),
      (i.listEligibleHatchWalletConnectors = y),
      (i.listHatchPermissionsConnectors = C),
      (i.isHatchPermissionsOnlyConnector = v),
      (i.isHatchWalletConnector = S),
      (i.isManageableHatchConnector = L),
      (i.isConnectedHatchCustomConnector = E));
  },
  66,
);
