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
      s = ["always_ask", "auto_allow"];
    function u(e) {
      var t,
        n = S(e),
        r = R(n, "connector_default"),
        a = R(n, "network_default");
      if (r == null || a == null) return null;
      var i = o("WAWebHatchJsonReaders").readArray(n, "protocols");
      return {
        connectorDefault: r,
        defaultContent: C(
          o("WAWebHatchJsonReaders").readObject(n, "default_content"),
        ),
        networkDefault: a,
        protocols:
          (t = i == null ? void 0 : i.map(y).filter(Boolean)) != null
            ? t
            : null,
        protocolsHeading: x(n, "protocols_heading"),
      };
    }
    function c(e) {
      var t = g(e, "groups");
      if (t == null) return null;
      var n = t.raw.filter(T).map(function (e) {
        var t;
        return {
          permissions: (t = o("WAWebHatchJsonReaders"))
            .readObjects(e, "items")
            .map(h)
            .filter(Boolean),
          scope: {
            displayName: D(t.readObject(e, "scope"), "display_name"),
            type: t.readNonEmptyString(t.readObject(e, "scope"), "scope_type"),
          },
        };
      });
      return { entries: n, nextCursor: t.nextCursor };
    }
    function d(e) {
      var t = g(e, "items");
      return t == null
        ? null
        : {
            entries: t.raw.filter(k).map(h).filter(Boolean),
            nextCursor: t.nextCursor,
          };
    }
    function m(t) {
      var n = o("WAWebHatchJsonReaders").readArray(S(t), "sections");
      if (n == null || n.length !== e.length) return null;
      var r = {},
        a = {},
        i = function (n) {
          var t = e.find(function (e) {
              return e === o("WAWebHatchJsonReaders").readField(n, "category");
            }),
            i = p(n, "item_count"),
            l = p(n, "permission_count"),
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
            return _(e, n, r);
          })
          .filter(Boolean);
      };
      return {
        artifacts: u("artifact", "space", "space_slug"),
        counts: r,
        scheduledTasks: u("scheduled_task", "schedule", "schedule_id"),
      };
    }
    function p(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return Number.isSafeInteger(n) && typeof n == "number" && n >= 0
        ? n
        : null;
    }
    function _(e, t, n) {
      var r = o("WAWebHatchJsonReaders").readObject(e, "scope"),
        a = x(r, n);
      return o("WAWebHatchJsonReaders").readField(e, "kind") !== "owner" ||
        o("WAWebHatchJsonReaders").readField(r, "scope_type") !== t ||
        a == null ||
        f(e, r)
        ? null
        : {
            displayName: D(r, "display_name"),
            id: a,
            managePermissionsAvailable:
              o("WAWebHatchJsonReaders").readBool(
                e,
                "manage_permissions_available",
              ) === !0,
            permissions: o("WAWebHatchJsonReaders")
              .readObjects(e, "permissions")
              .map(h)
              .filter(Boolean),
          };
    }
    function f(e, t) {
      return (
        o("WAWebHatchJsonReaders").readBool(e, "is_saved_foreign_share") ===
          !0 ||
        o("WAWebHatchJsonReaders").readBool(t, "is_saved_foreign_share") === !0
      );
    }
    function g(e, t) {
      var n = S(e),
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
    function h(e) {
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
        displayLabel: x(e, "display_label"),
        id: n,
        kind: r,
        label: D(e, "label"),
        lifetime: D(e, "lifetime"),
        mode: L(o("WAWebHatchJsonReaders").readField(e, "mode")),
        modeLabel: x(a, "mode_label"),
        modeOptions: ((t = o("WAWebHatchJsonReaders").readArray(
          e,
          "mode_options",
        )) != null
          ? t
          : []
        ).filter(E),
        revocable: o("WAWebHatchJsonReaders").readBool(e, "revocable") === !0,
        summaryTitle: x(a, "summary_title"),
      };
    }
    function y(e) {
      var t = x(e, "key"),
        n = x(e, "title");
      if (t == null || n == null) return null;
      var r = o("WAWebHatchJsonReaders").readField(e, "mode");
      return {
        description: x(e, "description"),
        iconKey: x(e, "icon_key"),
        key: t,
        mode: r === "ask" || r === "deny" ? r : "unknown",
        title: n,
      };
    }
    function C(e) {
      var t = b(o("WAWebHatchJsonReaders").readObject(e, "connector")),
        n = b(o("WAWebHatchJsonReaders").readObject(e, "network"));
      return t != null && n != null ? { connector: t, network: n } : null;
    }
    function b(e) {
      var t = x(e, "heading"),
        n = o("WAWebHatchJsonReaders").readObject(e, "options"),
        r = v(o("WAWebHatchJsonReaders").readObject(n, "always_ask")),
        a = v(o("WAWebHatchJsonReaders").readObject(n, "auto_allow"));
      return t != null && r != null && a != null
        ? { heading: t, options: { always_ask: r, auto_allow: a } }
        : null;
    }
    function v(e) {
      var t = x(e, "title"),
        n = x(e, "description");
      return t != null && n != null ? { description: n, title: t } : null;
    }
    function S(e) {
      var t;
      return (t = o("WAWebHatchJsonReaders").readObject(e, "result")) != null
        ? t
        : e;
    }
    function R(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return s.find(function (e) {
        return e === n;
      });
    }
    function L(e) {
      return e === "deny_all" || E(e) ? e : "unknown";
    }
    function E(e) {
      return e === "allow" || e === "ask" || e === "deny";
    }
    function k(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "kind");
      return (
        t !== "connector_override" &&
        t !== "transient_connector_grant" &&
        !I(o("WAWebHatchJsonReaders").readObject(e, "scope"))
      );
    }
    function I(e) {
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
      return t == null || x(e, "session_scope_id") == null
        ? !1
        : t === "" || x(e, t) != null;
    }
    function T(e) {
      return o("WAWebHatchJsonReaders").readObject(e, "scope") != null;
    }
    function D(e, t) {
      var n;
      return (n = x(e, t)) != null ? n : "";
    }
    function x(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return typeof n == "string"
        ? o("WAWebHatchJsonReaders").trimToNull(n)
        : null;
    }
    ((l.decodeHatchPermissionSettings = u),
      (l.decodeHatchPermissionGroupPage = c),
      (l.decodeHatchAllowedWebsitePage = d),
      (l.decodeHatchPermissionInventory = m));
  },
  98,
);
