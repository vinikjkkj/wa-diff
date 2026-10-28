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
        n = C(e),
        r = b(n, "connector_default"),
        a = b(n, "network_default");
      if (r == null || a == null) return null;
      var i = o("WAWebHatchJsonReaders").readArray(n, "protocols");
      return {
        connectorDefault: r,
        networkDefault: a,
        protocols:
          (t = i == null ? void 0 : i.map(y).filter(Boolean)) != null
            ? t
            : null,
      };
    }
    function c(e) {
      var t = g(e, "groups");
      if (t == null) return null;
      var n = t.raw.filter(E).map(function (e) {
        var t;
        return {
          permissions: (t = o("WAWebHatchJsonReaders"))
            .readObjects(e, "items")
            .map(h)
            .filter(Boolean),
          scope: {
            displayName: k(t.readObject(e, "scope"), "display_name"),
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
            entries: t.raw.filter(R).map(h).filter(Boolean),
            nextCursor: t.nextCursor,
          };
    }
    function m(t) {
      var n = o("WAWebHatchJsonReaders").readArray(C(t), "sections");
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
        a = I(r, n);
      return o("WAWebHatchJsonReaders").readField(e, "kind") !== "owner" ||
        o("WAWebHatchJsonReaders").readField(r, "scope_type") !== t ||
        a == null ||
        f(e, r)
        ? null
        : {
            displayName: k(r, "display_name"),
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
      var n = C(e),
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
        displayLabel: I(e, "display_label"),
        id: n,
        kind: r,
        label: k(e, "label"),
        lifetime: k(e, "lifetime"),
        mode: v(o("WAWebHatchJsonReaders").readField(e, "mode")),
        modeLabel: I(a, "mode_label"),
        modeOptions: ((t = o("WAWebHatchJsonReaders").readArray(
          e,
          "mode_options",
        )) != null
          ? t
          : []
        ).filter(S),
        revocable: o("WAWebHatchJsonReaders").readBool(e, "revocable") === !0,
        summaryTitle: I(a, "summary_title"),
      };
    }
    function y(e) {
      var t = I(e, "key"),
        n = I(e, "title");
      if (t == null || n == null) return null;
      var r = o("WAWebHatchJsonReaders").readField(e, "mode");
      return {
        description: I(e, "description"),
        iconKey: I(e, "icon_key"),
        key: t,
        mode: r === "ask" || r === "deny" ? r : "unknown",
        title: n,
      };
    }
    function C(e) {
      var t;
      return (t = o("WAWebHatchJsonReaders").readObject(e, "result")) != null
        ? t
        : e;
    }
    function b(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return s.find(function (e) {
        return e === n;
      });
    }
    function v(e) {
      return e === "deny_all" || S(e) ? e : "unknown";
    }
    function S(e) {
      return e === "allow" || e === "ask" || e === "deny";
    }
    function R(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "kind");
      return (
        t !== "connector_override" &&
        t !== "transient_connector_grant" &&
        !L(o("WAWebHatchJsonReaders").readObject(e, "scope"))
      );
    }
    function L(e) {
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
      return t == null || I(e, "session_scope_id") == null
        ? !1
        : t === "" || I(e, t) != null;
    }
    function E(e) {
      return o("WAWebHatchJsonReaders").readObject(e, "scope") != null;
    }
    function k(e, t) {
      var n;
      return (n = I(e, t)) != null ? n : "";
    }
    function I(e, t) {
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
