__d(
  "WAWebHatchPermissions",
  [
    "WALogger",
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchPermissionsDecoder",
    "WAWebHatchPermissionsFailureReason",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
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
      return D("set_default", ((n = {}), (n[e] = t), (n.reason = m[e]), n));
    }
    function f(e, t) {
      var n;
      return D("set_protocol", { protocols: ((n = {}), (n[e] = t), n) });
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
      return x("set_scoped_mode", function (a) {
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
      return x("set_mode", function (n) {
        return n.activePermissionSetMode({
          kind: e.kind,
          mode: t,
          permission_id: e.id,
        });
      });
    }
    function S(e) {
      return x(
        "revoke",
        function (t) {
          return t.permissionRevoke({ kind: e.kind, permission_id: e.id });
        },
        { goneIsDone: !0 },
      );
    }
    function R() {
      return x("reset", function (e) {
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
    function I(e, t, n) {
      var r = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        a = [],
        i = new Set(),
        l = async function (d) {
          var c = await T(
            e,
            function (e) {
              return e.activePermissions(t(d), { timeoutMs: s });
            },
            n,
          );
          if (c.kind !== "ok") return c;
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== r)
            return A(e, "account_changed", "generic");
          a.push.apply(a, c.value.entries);
          var m = c.value.nextCursor;
          return m == null
            ? { kind: "ok", value: a }
            : i.has(m) || i.size + 1 >= u
              ? A(e, "pagination", "generic")
              : (i.add(m), l(m));
        };
      return l(null);
    }
    async function T(e, t, n) {
      return $(e, await P(e, t, { retry: !0 }), n);
    }
    async function D(e, t) {
      var n = await P(e, function (e) {
        return e.permissionSetSettings(t);
      });
      return $(
        e,
        n,
        o("WAWebHatchPermissionsDecoder").decodeHatchPermissionSettings,
      );
    }
    async function x(e, t, n) {
      var r = await P(e, t, n);
      return r.kind === "ok" ? { kind: "ok", value: null } : r;
    }
    function $(e, t, n) {
      if (t.kind !== "ok") return t;
      var r = n(t.value);
      return r == null
        ? A(e, "malformed", "generic")
        : { kind: "ok", value: r };
    }
    async function P(e, t, n) {
      var r, a;
      try {
        a = await o("WAWebHatchVmConnection").connectHatchVmApi();
      } catch (t) {
        return A(e, "connect_failed", "offline");
      }
      if (a == null) return A(e, "no_session", "offline");
      var i = await w(a, t);
      if (
        (((r = i) == null ? void 0 : r.kind) === "Failure" &&
          (n == null ? void 0 : n.retry) === !0 &&
          (i = await w(a, t)),
        i == null)
      )
        return A(e, "exchange_failed", "generic");
      var l = i.kind === "Rejected" ? i.statusCode : null;
      return l === 409
        ? { kind: "conflict" }
        : l === 404 && (n == null ? void 0 : n.goneIsDone) === !0
          ? { kind: "ok", value: null }
          : i.kind === "Ok"
            ? { kind: "ok", value: i.value }
            : A(e, i.kind.toLowerCase(), N(i));
    }
    function N(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          if (M(t))
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
    function M(e) {
      return e != null && (e < 200 || e >= 300);
    }
    async function w(e, t) {
      try {
        return await t(e);
      } catch (e) {
        return null;
      }
    }
    function A(t, n, r) {
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
