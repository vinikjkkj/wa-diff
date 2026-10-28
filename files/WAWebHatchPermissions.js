__d(
  "WAWebHatchPermissions",
  [
    "WALogger",
    "WAWebHatchPermissionsDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 100,
      c = {
        connector_default:
          "Changed connector approval default from WhatsApp Web settings",
        network_default:
          "Changed web access approval default from WhatsApp Web settings",
      };
    function d() {
      return v(
        "read_settings",
        function (e) {
          return e.permissionSettings({ timeoutMs: s });
        },
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
      );
    }
    function m(e, t) {
      var n;
      return R("set_default", ((n = {}), (n[e] = t), (n.reason = c[e]), n));
    }
    function p(e, t) {
      var n;
      return R("set_protocol", { protocols: ((n = {}), (n[e] = t), n) });
    }
    function _() {
      return b(
        "read_groups",
        o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE_BY_SCOPE,
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionGroupPage,
      );
    }
    function f() {
      return b(
        "read_websites",
        o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE_WEBSITES,
        o("WAWebHatchPermissionsDecoder").decodeHatchAllowedWebsitePage,
      );
    }
    function g() {
      return v(
        "read_inventory",
        function (e) {
          return e.permissionInventory({ timeoutMs: s });
        },
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionInventory,
      );
    }
    function h(e, t) {
      return E("set_mode", function (n) {
        return n.activePermissionSetMode({
          kind: e.kind,
          mode: t,
          permission_id: e.id,
        });
      });
    }
    function y(e) {
      return E(
        "revoke",
        function (t) {
          return t.permissionRevoke({ kind: e.kind, permission_id: e.id });
        },
        { goneIsDone: !0 },
      );
    }
    function C() {
      return E("reset", function (e) {
        return e.permissionsReset();
      });
    }
    function b(e, t, r) {
      var a = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        i = [],
        l = new Set(),
        c = (function () {
          var d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var d = yield v(
              e,
              function (e) {
                return e.activePermissions(t(n), { timeoutMs: s });
              },
              r,
            );
            if (d.kind !== "ok") return d;
            if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== a)
              return P(e, "account_changed");
            i.push.apply(i, d.value.entries);
            var m = d.value.nextCursor;
            return m == null
              ? { kind: "ok", value: i }
              : l.has(m) || l.size + 1 >= u
                ? P(e, "pagination")
                : (l.add(m), c(m));
          });
          return function (t) {
            return d.apply(this, arguments);
          };
        })();
      return c(null);
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return I(e, yield T(e, t, { retry: !0 }), n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield T(e, function (e) {
            return e.permissionSetSettings(t);
          });
          return I(
            e,
            n,
            o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield T(e, t, n);
          return r.kind === "ok" ? { kind: "ok", value: null } : r;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      if (t.kind !== "ok") return t;
      var r = n(t.value);
      return r == null ? P(e, "malformed") : { kind: "ok", value: r };
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          try {
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          } catch (t) {
            return P(e, "connect_failed");
          }
          if (a == null) return P(e, "no_session");
          var i = yield x(a, t);
          if (
            (((r = i) == null ? void 0 : r.kind) === "Failure" &&
              (n == null ? void 0 : n.retry) === !0 &&
              (i = yield x(a, t)),
            i == null)
          )
            return P(e, "exchange_failed");
          var l = i.kind === "Rejected" ? i.statusCode : null;
          return l === 409
            ? { kind: "conflict" }
            : l === 404 && (n == null ? void 0 : n.goneIsDone) === !0
              ? { kind: "ok", value: null }
              : i.kind === "Ok"
                ? { kind: "ok", value: i.value }
                : P(e, i.kind.toLowerCase());
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t(e);
          } catch (e) {
            return null;
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-permissions: ",
                " failed reason=",
                "",
              ])),
            t,
            n,
          )
          .sendLogs("hatch-permissions-failed"),
        { kind: "unavailable", reason: n }
      );
    }
    ((l.readHatchPermissionSettings = d),
      (l.updateHatchPermissionDefault = m),
      (l.updateHatchProtocolPermissionMode = p),
      (l.readHatchPermissionGroups = _),
      (l.readHatchAllowedWebsites = f),
      (l.readHatchPermissionInventory = g),
      (l.updateHatchActivePermissionMode = h),
      (l.revokeHatchPermission = y),
      (l.resetHatchPermissions = C));
  },
  98,
);
