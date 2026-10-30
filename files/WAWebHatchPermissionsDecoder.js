__d(
  "WAWebHatchPermissionsDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "artifact",
        "connector",
        "direct_network_protocol",
        "scheduled_task",
        "website",
      ],
      s = ["observed", "pending", "predicted"],
      u = ["always_ask", "auto_allow"];
    function c(e) {
      var t,
        n = I(e),
        r = T(n, "connector_default"),
        a = T(n, "network_default");
      if (r == null || a == null) return null;
      var i = o("WAWebHatchJsonReaders").readArray(n, "protocols");
      return {
        connectorDefault: r,
        defaultContent: L(
          o("WAWebHatchJsonReaders").readObject(n, "default_content"),
        ),
        networkDefault: a,
        protocols:
          (t = i == null ? void 0 : i.map(R).filter(Boolean)) != null
            ? t
            : null,
        protocolsHeading: w(n, "protocols_heading"),
      };
    }
    function d(e) {
      var t = C(e, "groups");
      if (t == null) return null;
      var n = t.raw.filter(N).map(function (e) {
        var t;
        return {
          permissions: (t = o("WAWebHatchJsonReaders"))
            .readObjects(e, "items")
            .map(b)
            .filter(Boolean),
          scope: {
            displayName: M(t.readObject(e, "scope"), "display_name"),
            type: t.readNonEmptyString(t.readObject(e, "scope"), "scope_type"),
          },
        };
      });
      return { entries: n, nextCursor: t.nextCursor };
    }
    function m(e) {
      var t = C(e, "items");
      return t == null
        ? null
        : {
            entries: t.raw.filter($).map(b).filter(Boolean),
            nextCursor: t.nextCursor,
          };
    }
    function p(t) {
      var n = o("WAWebHatchJsonReaders").readArray(I(t), "sections");
      if (n == null || n.length !== e.length) return null;
      var r = {},
        a = {},
        i = function (n) {
          var t = e.find(function (e) {
              return e === o("WAWebHatchJsonReaders").readField(n, "category");
            }),
            i = f(n, "item_count"),
            l = f(n, "permission_count"),
            s = o("WAWebHatchJsonReaders").readArray(n, "entries");
          if (t == null || r[t] != null || i == null || l == null || s == null)
            return { v: null };
          ((r[t] = { itemCount: i, permissionCount: l }), (a[t] = s));
        },
        l;
      for (var s of n) if (((l = i(s)), l)) return l.v;
      var u = function (t, n, r) {
        return a[t]
          .map(function (e) {
            return g(e, n, r);
          })
          .filter(Boolean);
      };
      return {
        artifacts: u("artifact", "space", "space_slug"),
        counts: r,
        scheduledTasks: u("scheduled_task", "schedule", "schedule_id"),
      };
    }
    function _(e, t) {
      var n = I(e),
        r = o("WAWebHatchJsonReaders").readObject(n, "scope"),
        a = o("WAWebHatchJsonReaders").readNonEmptyString(n, "revision"),
        i = o("WAWebHatchJsonReaders").readArray(n, "connectors");
      return o("WAWebHatchJsonReaders").readField(r, "scope_type") !==
        t.scopeType ||
        o("WAWebHatchJsonReaders").readField(r, "scope_id") !== t.id ||
        a == null ||
        i == null
        ? null
        : {
            connectors: i.map(v).filter(Boolean),
            revision: a,
            scopeID: t.id,
            scopeType: t.scopeType,
            websites: o("WAWebHatchJsonReaders")
              .readObjects(n, "websites")
              .map(b)
              .filter(Boolean),
          };
    }
    function f(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return Number.isSafeInteger(n) && typeof n == "number" && n >= 0
        ? n
        : null;
    }
    function g(e, t, n) {
      var r = o("WAWebHatchJsonReaders").readObject(e, "scope"),
        a = w(r, n);
      return o("WAWebHatchJsonReaders").readField(e, "kind") !== "owner" ||
        o("WAWebHatchJsonReaders").readField(r, "scope_type") !== t ||
        a == null ||
        y(e, r)
        ? null
        : {
            displayName: M(r, "display_name"),
            id: a,
            managePermissionsAvailable:
              o("WAWebHatchJsonReaders").readBool(
                e,
                "manage_permissions_available",
              ) === !0,
            permissions: o("WAWebHatchJsonReaders")
              .readObjects(e, "permissions")
              .map(b)
              .filter(Boolean),
            requiredPermissions: o("WAWebHatchJsonReaders")
              .readObjects(e, "required_permissions")
              .map(h)
              .filter(Boolean),
            scopeType: t,
          };
    }
    function h(e) {
      var t = s.find(function (t) {
          return t === o("WAWebHatchJsonReaders").readField(e, "state");
        }),
        n = w(e, "method"),
        r = o("WAWebHatchJsonReaders").readField(e, "kind"),
        a = w(e, r === "website" ? "destination" : "connector");
      return t == null ||
        a == null ||
        (n == null && o("WAWebHatchJsonReaders").readField(e, "method") != null)
        ? null
        : r === "connector"
          ? { connector: a, kind: "connector", method: n, state: t }
          : r === "website"
            ? { destination: a, kind: "website", method: n, state: t }
            : null;
    }
    function y(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "is_saved_foreign_share") ===
          !0 ||
        o("WAWebHatchJsonReaders").readBool(t, "is_saved_foreign_share") === !0
      );
    }
    function C(e, t) {
      var n = I(e),
        r = Array.isArray(o("WAWebHatchJsonReaders").readField(n, t))
          ? n
          : o("WAWebHatchJsonReaders").readObject(n, "active_permissions"),
        a = o("WAWebHatchJsonReaders").readArray(r, t),
        i = o("WAWebHatchJsonReaders").readField(r, "next_cursor");
      return a == null || (i != null && typeof i != "string")
        ? null
        : {
            nextCursor:
              i == null ? null : o("WAWebHatchJsonReaders").trimToNull(i),
            raw: a,
          };
    }
    function b(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "permission_id"),
        r = o("WAWebHatchJsonReaders").readNonEmptyString(e, "kind");
      if (n == null || r == null) return null;
      var a = o("WAWebHatchJsonReaders").readObject(e, "display");
      return {
        connector: o("WAWebHatchJsonReaders").readNonEmptyString(
          e,
          "connector",
        ),
        destination: o("WAWebHatchJsonReaders").readNonEmptyString(
          e,
          "destination",
        ),
        displayLabel: w(e, "display_label"),
        id: n,
        kind: r,
        label: M(e, "label"),
        lifetime: M(e, "lifetime"),
        mode: D(o("WAWebHatchJsonReaders").readField(e, "mode")),
        modeLabel: w(a, "mode_label"),
        modeOptions: ((t = o("WAWebHatchJsonReaders").readArray(
          e,
          "mode_options",
        )) != null
          ? t
          : []
        ).filter(x),
        revocable: o("WAWebHatchJsonReaders").readBool(e, "revocable") === !0,
        summaryTitle: w(a, "summary_title"),
      };
    }
    function v(e) {
      var t = w(e, "connector"),
        n = o("WAWebHatchJsonReaders").readObject(e, "methods");
      return t == null || typeof n != "object" || n == null
        ? null
        : {
            id: t,
            methods: Object.keys(n)
              .map(function (e) {
                return S(e, o("WAWebHatchJsonReaders").readObject(n, e));
              })
              .filter(Boolean),
          };
    }
    function S(e, t) {
      var n = w(t, "label"),
        r = o("WAWebHatchJsonReaders").readField(t, "mode");
      if (n == null || !x(r)) return null;
      var a = o("WAWebHatchJsonReaders").readField(t, "override_mode");
      return {
        expiresAtMs: o("WAWebHatchJsonReaders").readInteger(t, "expires_at_ms"),
        key: e,
        label: n,
        mode: r,
        modeOptions: Array.from(
          new Set(o("WAWebHatchJsonReaders").readArray(t, "mode_options")),
        ).filter(x),
        overrideMode: x(a) ? a : null,
        source: w(t, "source"),
        sourceLabel: w(t, "source_label"),
      };
    }
    function R(e) {
      var t = w(e, "key"),
        n = w(e, "title");
      if (t == null || n == null) return null;
      var r = o("WAWebHatchJsonReaders").readField(e, "mode");
      return {
        description: w(e, "description"),
        iconKey: w(e, "icon_key"),
        key: t,
        mode: r === "ask" || r === "deny" ? r : "unknown",
        title: n,
      };
    }
    function L(e) {
      var t = E(o("WAWebHatchJsonReaders").readObject(e, "connector")),
        n = E(o("WAWebHatchJsonReaders").readObject(e, "network"));
      return t != null && n != null ? { connector: t, network: n } : null;
    }
    function E(e) {
      var t = w(e, "heading"),
        n = o("WAWebHatchJsonReaders").readObject(e, "options"),
        r = k(o("WAWebHatchJsonReaders").readObject(n, "always_ask")),
        a = k(o("WAWebHatchJsonReaders").readObject(n, "auto_allow"));
      return t != null && r != null && a != null
        ? { heading: t, options: { always_ask: r, auto_allow: a } }
        : null;
    }
    function k(e) {
      var t = w(e, "title"),
        n = w(e, "description");
      return t != null && n != null ? { description: n, title: t } : null;
    }
    function I(e) {
      var t;
      return (t = o("WAWebHatchJsonReaders").readObject(e, "result")) != null
        ? t
        : e;
    }
    function T(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return u.find(function (e) {
        return e === n;
      });
    }
    function D(e) {
      return e === "deny_all" || x(e) ? e : "unknown";
    }
    function x(e) {
      return e === "allow" || e === "ask" || e === "deny";
    }
    function $(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "kind");
      return (
        t !== "connector_override" &&
        t !== "transient_connector_grant" &&
        !P(o("WAWebHatchJsonReaders").readObject(e, "scope"))
      );
    }
    function P(e) {
      var t = (function (e) {
        return e === "feed"
          ? ""
          : e === "idea"
            ? "idea_scope_id"
            : e === "schedule"
              ? "schedule_id"
              : e === "space"
                ? "space_slug"
                : null;
      })(o("WAWebHatchJsonReaders").readField(e, "scope_type"));
      return t == null || w(e, "session_scope_id") == null
        ? !1
        : t === "" || w(e, t) != null;
    }
    function N(e) {
      return o("WAWebHatchJsonReaders").readObject(e, "scope") != null;
    }
    function M(e, t) {
      var n;
      return (n = w(e, t)) != null ? n : "";
    }
    function w(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return typeof n == "string"
        ? o("WAWebHatchJsonReaders").trimToNull(n)
        : null;
    }
    ((l.decodeHatchPermissionSettings = c),
      (l.decodeHatchPermissionGroupPage = d),
      (l.decodeHatchAllowedWebsitePage = m),
      (l.decodeHatchPermissionInventory = p),
      (l.decodeHatchScopedPermissions = _));
  },
  98,
);
