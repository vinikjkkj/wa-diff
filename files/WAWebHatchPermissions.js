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
      c = 100,
      d = {
        facebook_cli: "facebook",
        messenger_read: "messenger",
        stripe_link: "stripe-link",
        whatsapp_companion: "whatsapp",
      },
      m = {
        connector_default:
          "Changed connector approval default from WhatsApp Web settings",
        network_default:
          "Changed web access approval default from WhatsApp Web settings",
      };
    function p() {
      return I(
        "read_settings",
        function (e) {
          return e.permissionSettings({ timeoutMs: s });
        },
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
      );
    }
    function _(e, t) {
      var n;
      return D("set_default", ((n = {}), (n[e] = t), (n.reason = m[e]), n));
    }
    function f(e, t) {
      var n;
      return D("set_protocol", { protocols: ((n = {}), (n[e] = t), n) });
    }
    function g() {
      return k(
        "read_groups",
        o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE_BY_SCOPE,
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionGroupPage,
      );
    }
    function h() {
      return k(
        "read_websites",
        o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE_WEBSITES,
        o("WAWebHatchPermissionsDecoder").decodeHatchAllowedWebsitePage,
      );
    }
    function y() {
      return I(
        "read_inventory",
        function (e) {
          return e.permissionInventory({ timeoutMs: s });
        },
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionInventory,
      );
    }
    function C(e, t) {
      var n = E(e, t);
      return I(
        "read_scoped",
        function (t) {
          return t.scopedPermissions(e.scopeType, e.id, n, { timeoutMs: s });
        },
        function (t) {
          var r = o(
            "WAWebHatchPermissionsDecoder",
          ).decodeHatchScopedPermissions(t, e);
          return r == null
            ? null
            : babelHelpers.extends({}, r, {
                connectors: r.connectors.filter(function (e) {
                  return n.some(function (t) {
                    return L(t, e.id);
                  });
                }),
              });
        },
      );
    }
    function b(e, t, n, r, o) {
      return $("set_scoped_mode", function (a) {
        return a.scopedPermissionSetMode(e.scopeType, e.id, {
          connector: t,
          display_name: e.displayName,
          expected_revision: o,
          method: n,
          mode: r,
        });
      });
    }
    function v(e, t) {
      return $("set_mode", function (n) {
        return n.activePermissionSetMode({
          kind: e.kind,
          mode: t,
          permission_id: e.id,
        });
      });
    }
    function S(e) {
      return $(
        "revoke",
        function (t) {
          return t.permissionRevoke({ kind: e.kind, permission_id: e.id });
        },
        { goneIsDone: !0 },
      );
    }
    function R() {
      return $("reset", function (e) {
        return e.permissionsReset();
      });
    }
    function L(e, t) {
      var n = function (t) {
        var e;
        return ((e = d[t]) != null ? e : t).replace(/-/g, "_");
      };
      return n(e) === n(t);
    }
    function E(e, t) {
      var n = [].concat(t),
        r = function (t) {
          t != null &&
            !n.some(function (e) {
              return L(e, t);
            }) &&
            n.push(t);
        };
      return (
        e.permissions
          .filter(function (e) {
            return e.lifetime === "durable";
          })
          .forEach(function (e) {
            return r(e.connector);
          }),
        e.scopeType === "space" &&
          e.requiredPermissions.forEach(function (e) {
            return r(e.kind === "connector" ? e.connector : null);
          }),
        n.sort().slice(0, c)
      );
    }
    function k(e, t, r) {
      var a = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        i = [],
        l = new Set(),
        c = (function () {
          var d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var d = yield I(
              e,
              function (e) {
                return e.activePermissions(t(n), { timeoutMs: s });
              },
              r,
            );
            if (d.kind !== "ok") return d;
            if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== a)
              return O(e, "account_changed");
            i.push.apply(i, d.value.entries);
            var m = d.value.nextCursor;
            return m == null
              ? { kind: "ok", value: i }
              : l.has(m) || l.size + 1 >= u
                ? O(e, "pagination")
                : (l.add(m), c(m));
          });
          return function (t) {
            return d.apply(this, arguments);
          };
        })();
      return c(null);
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return N(e, yield M(e, t, { retry: !0 }), n);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield M(e, function (e) {
            return e.permissionSetSettings(t);
          });
          return N(
            e,
            n,
            o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield M(e, t, n);
          return r.kind === "ok" ? { kind: "ok", value: null } : r;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      if (t.kind !== "ok") return t;
      var r = n(t.value);
      return r == null ? O(e, "malformed") : { kind: "ok", value: r };
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          try {
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          } catch (t) {
            return O(e, "connect_failed");
          }
          if (a == null) return O(e, "no_session");
          var i = yield A(a, t);
          if (
            (((r = i) == null ? void 0 : r.kind) === "Failure" &&
              (n == null ? void 0 : n.retry) === !0 &&
              (i = yield A(a, t)),
            i == null)
          )
            return O(e, "exchange_failed");
          var l = i.kind === "Rejected" ? i.statusCode : null;
          return l === 409
            ? { kind: "conflict" }
            : l === 404 && (n == null ? void 0 : n.goneIsDone) === !0
              ? { kind: "ok", value: null }
              : i.kind === "Ok"
                ? { kind: "ok", value: i.value }
                : O(e, i.kind.toLowerCase());
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t(e);
          } catch (e) {
            return null;
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(t, n) {
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
    ((l.readHatchPermissionSettings = p),
      (l.updateHatchPermissionDefault = _),
      (l.updateHatchProtocolPermissionMode = f),
      (l.readHatchPermissionGroups = g),
      (l.readHatchAllowedWebsites = h),
      (l.readHatchPermissionInventory = y),
      (l.readHatchScopedPermissions = C),
      (l.updateHatchScopedPermissionMode = b),
      (l.updateHatchActivePermissionMode = v),
      (l.revokeHatchPermission = S),
      (l.resetHatchPermissions = R),
      (l.hatchConnectorIDsMatch = L));
  },
  98,
);
