__d(
  "WAWebHatchPermissions",
  [
    "WALogger",
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchPermissionsDecoder",
    "WAWebHatchPermissionsFailureReason",
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
      return T(
        "read_settings",
        function (e) {
          return e.permissionSettings({ timeoutMs: s });
        },
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
      );
    }
    function _(e, t) {
      var n;
      return x("set_default", ((n = {}), (n[e] = t), (n.reason = m[e]), n));
    }
    function f(e, t) {
      var n;
      return x("set_protocol", { protocols: ((n = {}), (n[e] = t), n) });
    }
    function g() {
      return I(
        "read_groups",
        o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE_BY_SCOPE,
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionGroupPage,
      );
    }
    function h() {
      return I(
        "read_websites",
        o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE_WEBSITES,
        o("WAWebHatchPermissionsDecoder").decodeHatchAllowedWebsitePage,
      );
    }
    function y() {
      return T(
        "read_inventory",
        function (e) {
          return e.permissionInventory({ timeoutMs: s });
        },
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionInventory,
      );
    }
    function C(e, t, n) {
      n === void 0 && (n = []);
      var r = E(e, t, n);
      return T(
        "read_scoped",
        function (t) {
          return t.scopedPermissions(e.scopeType, e.id, r, { timeoutMs: s });
        },
        function (t) {
          var n = o(
            "WAWebHatchPermissionsDecoder",
          ).decodeHatchScopedPermissions(t, e);
          return n == null
            ? null
            : babelHelpers.extends({}, n, {
                connectors: n.connectors.filter(function (e) {
                  return r.some(function (t) {
                    return L(t, e.id);
                  });
                }),
              });
        },
      );
    }
    function b(e, t, n, r, o) {
      return P("set_scoped_mode", function (a) {
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
      return P("set_mode", function (n) {
        return n.activePermissionSetMode({
          kind: e.kind,
          mode: t,
          permission_id: e.id,
        });
      });
    }
    function S(e) {
      return P(
        "revoke",
        function (t) {
          return t.permissionRevoke({ kind: e.kind, permission_id: e.id });
        },
        { goneIsDone: !0 },
      );
    }
    function R() {
      return P("reset", function (e) {
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
    function E(e, t, n) {
      var r = [].concat(t),
        o = function (t) {
          t != null &&
            !r.some(function (e) {
              return L(e, t);
            }) &&
            r.push(t);
        };
      return (
        e.permissions
          .filter(function (e) {
            return e.lifetime === "durable";
          })
          .forEach(function (e) {
            return o(e.connector);
          }),
        e.scopeType === "space" &&
          e.requiredPermissions.forEach(function (e) {
            return o(e.kind === "connector" ? e.connector : null);
          }),
        r
          .filter(function (e) {
            return !k(e, n);
          })
          .sort()
          .slice(0, c)
      );
    }
    function k(e, t) {
      return (
        e.startsWith(
          o("WAWebHatchCustomConnectorRequest")
            .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX,
        ) ||
        t.some(function (t) {
          return L(t, e);
        })
      );
    }
    function I(e, t, r) {
      var a = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        i = [],
        l = new Set(),
        c = (function () {
          var d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var d = yield T(
              e,
              function (e) {
                return e.activePermissions(t(n), { timeoutMs: s });
              },
              r,
            );
            if (d.kind !== "ok") return d;
            if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== a)
              return q(e, "account_changed", "generic");
            i.push.apply(i, d.value.entries);
            var m = d.value.nextCursor;
            return m == null
              ? { kind: "ok", value: i }
              : l.has(m) || l.size + 1 >= u
                ? q(e, "pagination", "generic")
                : (l.add(m), c(m));
          });
          return function (t) {
            return d.apply(this, arguments);
          };
        })();
      return c(null);
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return M(e, yield w(e, t, { retry: !0 }), n);
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
          var n = yield w(e, function (e) {
            return e.permissionSetSettings(t);
          });
          return M(
            e,
            n,
            o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield w(e, t, n);
          return r.kind === "ok" ? { kind: "ok", value: null } : r;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      if (t.kind !== "ok") return t;
      var r = n(t.value);
      return r == null
        ? q(e, "malformed", "generic")
        : { kind: "ok", value: r };
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          try {
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          } catch (t) {
            return q(e, "connect_failed", "offline");
          }
          if (a == null) return q(e, "no_session", "offline");
          var i = yield B(a, t);
          if (
            (((r = i) == null ? void 0 : r.kind) === "Failure" &&
              (n == null ? void 0 : n.retry) === !0 &&
              (i = yield B(a, t)),
            i == null)
          )
            return q(e, "exchange_failed", "generic");
          var l = i.kind === "Rejected" ? i.statusCode : null;
          return l === 409
            ? { kind: "conflict" }
            : l === 404 && (n == null ? void 0 : n.goneIsDone) === !0
              ? { kind: "ok", value: null }
              : i.kind === "Ok"
                ? { kind: "ok", value: i.value }
                : q(e, i.kind.toLowerCase(), F(i));
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          if (O(t))
            return o(
              "WAWebHatchPermissionsFailureReason",
            ).hatchPermissionsHttpFailureReason(t);
        }
        return ((typeof e == "object" && e !== null) ||
          typeof e == "function") &&
          e.kind === "Failure" &&
          e.reason === "TIMEOUT"
          ? "timeout"
          : ((typeof e == "object" && e !== null) || typeof e == "function") &&
              e.kind === "Failure" &&
              (e.reason === "NO_CHANNEL" || e.reason === "TRANSPORT")
            ? "offline"
            : "generic";
      })(e);
    }
    function O(e) {
      return e != null && (e < 200 || e >= 300);
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t(e);
          } catch (e) {
            return null;
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(t, n, r) {
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
        { failureReason: r, kind: "unavailable", reason: n }
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
