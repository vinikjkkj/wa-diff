__d(
  "WAWebHatchVmTransport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e;
    }
    function l(t, n) {
      var r = n.query,
        o = n.subpath,
        a = o === "" ? "" : "/" + o;
      return "/spaces/cvm/" + t + a + (r == null ? "" : "?" + r);
    }
    function s(t, n) {
      return (
        "/permissions/active?" +
        t +
        (n == null ? "" : "&cursor=" + encodeURIComponent(n))
      );
    }
    function u(e) {
      return encodeURIComponent(e).replace(/[!*\'()]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function c(e) {
      var t = e.split("/");
      if (
        e === "" ||
        e.startsWith("/") ||
        e.includes("://") ||
        t.includes("..") ||
        d(e)
      )
        return null;
      try {
        return t.map(u).join("/");
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n === 127) return !0;
      }
      return !1;
    }
    function m(e) {
      var t = e.startsWith("/") ? e.slice(1) : e;
      return d(t) ||
        p(t) ||
        t.split("/").some(function (e) {
          return e === "" || e === "." || e === "..";
        })
        ? null
        : t;
    }
    function p(e) {
      try {
        return (encodeURIComponent(e), !1);
      } catch (e) {
        return !0;
      }
    }
    function _(t, n, r) {
      var o = m(n);
      return o == null ? null : "" + t + o.split("/").map(u).join("/") + r;
    }
    var f = ["/api/computer/assets/", "/api/computer/previews/"],
      g = "sandbox://",
      h = /^[A-Za-z0-9\-._~!$&\'()*+,;=:@/?%]*$/;
    function y(t) {
      if (t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n),
        o = n === -1 ? "" : t.slice(n);
      if (!h.test(o.slice(1))) return null;
      if (
        f.some(function (e) {
          return r.startsWith(e);
        })
      )
        return c(r.slice(1)) === r.slice(1) ? t : null;
      if (!r.startsWith(g)) return null;
      var a = c(r.slice(g.length));
      return a == null ? null : "/fs/raw/" + a + o;
    }
    var C = "/fs/raw/",
      b = "/fs/thumbnail/",
      v = "workspace/",
      S = [C, "/home/hatch/", "~/"],
      R = /^[A-Za-z][A-Za-z0-9+.-]*:/,
      L = /^https?:(?:\/\/[^/?#]*)?([^?#]*)([^#]*)/i,
      E = /\/(?:fs\/raw|fs\/thumbnail|media\/raw)\//;
    function k(e) {
      var t = e.trim();
      if (t.slice(0, g.length).toLowerCase() === g) return T(t.slice(g.length));
      if (!R.test(t)) return T(t);
      var n = L.exec(t);
      if (n == null) return null;
      var r = n[1],
        o = n[2],
        a = I(r);
      return a == null ? null : T("" + a + o);
    }
    function I(e) {
      var t = E.exec(e);
      if (t != null) return e.slice(t.index + t[0].length);
      var n = e.indexOf("/" + v);
      return n === -1 ? null : e.slice(n + 1);
    }
    function T(t) {
      var n = t.split("#"),
        r = n[0],
        o = r.indexOf("?"),
        a = o === -1 ? "" : r.slice(o),
        i = D(o === -1 ? r : r.slice(0, o));
      return i == null || !h.test(a.slice(1)) ? null : "" + C + i + a;
    }
    function D(e) {
      var t = x(e);
      for (var n of S) t.startsWith(n) && (t = t.slice(n.length));
      return (
        t.startsWith("/" + v) && (t = t.slice(1)),
        t === "" || t.startsWith("/")
          ? null
          : c(t.startsWith(v) ? t : "" + v + t)
      );
    }
    function x(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    }
    var $ = "/api/idea-cards/media/",
      P = /^v=[A-Za-z0-9._~-]+$/,
      N = 1024,
      M = 3;
    function w(t) {
      if (t.length > N || t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n);
      return !r.startsWith($) ||
        r.length === $.length ||
        c(r.slice(1)) == null ||
        !r.split("/").every(A) ||
        (n !== -1 && !P.test(t.slice(n + 1)))
        ? null
        : t;
    }
    function A(e) {
      for (var t = e, n = 0; n < M; n++) {
        var r = void 0;
        try {
          r = decodeURIComponent(t);
        } catch (e) {
          return !1;
        }
        if (r === t)
          return (
            t !== "." && t !== ".." && !t.includes("/") && !t.includes("\\")
          );
        t = r;
      }
      return !1;
    }
    var F = /^[A-Za-z0-9\-_~]$/;
    function O(e) {
      var t = "";
      for (var n of new TextEncoder().encode(e)) {
        var r = String.fromCharCode(n);
        t += F.test(r)
          ? r
          : "%" + n.toString(16).toUpperCase().padStart(2, "0");
      }
      return t;
    }
    function B(t) {
      return t === "" || t === "." || t === ".." || p(t)
        ? null
        : "/api/tasks/" + u(t);
    }
    var W = Object.freeze({
      ACTIVITY_PAGE: function (n, r) {
        return (
          "/api/activity?limit=" +
          n +
          r
            .map(function (e) {
              return "&capabilities=" + encodeURIComponent(e);
            })
            .join("")
        );
      },
      ACTIVITY_GOAL_STEP_REPORT: function (n, r, o) {
        return (
          "/api/activity/goals/" +
          u(n) +
          "/actions/" +
          u(r) +
          "?report_offset=" +
          o
        );
      },
      ACTIVITY_GOAL_STEPS: function (n, r, o) {
        return (
          "/api/activity/goals/" +
          u(n) +
          "/actions?limit=" +
          r +
          (o == null ? "" : "&cursor=" + u(o))
        );
      },
      ACTIVITY_SUBSCRIBE: "/api/activity/subscribe",
      APPROVALS_HISTORY: function (n, r) {
        return (
          "/approvals/history?record_schema=snapshot_v1&limit=" +
          n +
          (r == null || r.trim() === "" ? "" : "&cursor=" + u(r))
        );
      },
      ARTIFACTS_LIST: "/api/artifacts",
      ARTIFACTS_PIN: "/api/artifacts/pin",
      ARTIFACTS_SUBSCRIBE: "/api/artifacts/subscribe",
      BROWSER_TASK: function (n, r) {
        return "/api/browser-task/" + O(n) + "/" + r;
      },
      CHATS_LIST: "/api/chats/list?limit=100",
      CHATS_MESSAGE: function (n, r) {
        return (
          "/api/chats/message?chat_id=" +
          encodeURIComponent(n) +
          "&message_id=" +
          encodeURIComponent(r)
        );
      },
      CLIENT_REGISTER_CAPABILITIES: "/api/client/register-capabilities",
      COMPUTER_CONTEXT: "/api/computer/context",
      COMPUTER_SCREENSHOT: y,
      COMPUTER_SUBSCRIBE: "/api/computer/subscribe",
      CONNECTOR_ACCOUNT_UNLINK: function (n, r) {
        return (
          "/api/connectors/" +
          encodeURIComponent(n) +
          "/accounts/" +
          encodeURIComponent(r) +
          "/unlink"
        );
      },
      CONNECTOR_ACCOUNTS: function (n) {
        return "/api/connectors/" + encodeURIComponent(n) + "/accounts";
      },
      CONNECTOR_ACCOUNTS_LINK: function (n) {
        return "/api/connectors/" + encodeURIComponent(n) + "/accounts/link";
      },
      CONNECTOR_CONNECT: function (n) {
        return "/connectors/" + encodeURIComponent(n) + "/connect";
      },
      CONNECTOR_CONNECT_INFO: function (n, r) {
        return (
          "/connectors/" +
          encodeURIComponent(n) +
          "/connect/info" +
          (r == null ? "" : "?session_id=" + encodeURIComponent(r))
        );
      },
      CONNECTOR_DISCONNECT: function (n) {
        return "/api/connectors/" + encodeURIComponent(n) + "/disconnect";
      },
      CONNECTOR_GET: function (n) {
        return "/connectors/" + encodeURIComponent(n);
      },
      CONNECTOR_PERMISSIONS: function (n) {
        return "/connectors/" + encodeURIComponent(n) + "/permissions";
      },
      CONNECTOR_POLICY: function (n) {
        return "/permissions/connectors/" + encodeURIComponent(n);
      },
      CONNECTOR_SCOPE_LINK: function (n, r) {
        return (
          "/connectors/" +
          encodeURIComponent(n) +
          "/scopes/" +
          encodeURIComponent(r) +
          "/link"
        );
      },
      CONNECTORS_LIST: "/api/connectors",
      CONNECTORS_LIST_SUPPORTING: function (n) {
        return n.length === 0
          ? "/api/connectors"
          : "/api/connectors?supports=" + n.map(encodeURIComponent).join(",");
      },
      CONSENT_AUTH_CALLBACK: "/consent_auth/callback",
      CREDENTIALS_CAPTURE: "/v1/credentials/capture",
      CREDENTIALS_CATALOG: function (n) {
        return (
          "/v1/credentials/catalog?credential_type=browser&limit=200" +
          (n == null ? "" : "&cursor=" + encodeURIComponent(n))
        );
      },
      CREDENTIALS_CATALOG_DELETE: "/v1/credentials/catalog/delete",
      CREDENTIALS_CATALOG_DETAILS: function (n) {
        return (
          "/v1/credentials/catalog/details?credential_type=browser&id=" +
          encodeURIComponent(n)
        );
      },
      CREDENTIALS_CATALOG_UPDATE: "/v1/credentials/catalog/update",
      FOA_ACCOUNTS: function (n) {
        return "/api/foa/accounts?app=" + encodeURIComponent(n);
      },
      FOA_AUTH_CALLBACK: "/api/foa_auth/callback",
      IDEA_CARD: function (n) {
        return (
          "/api/idea-cards/" + encodeURIComponent(n) + "?iconPalette=color"
        );
      },
      IDEA_CARD_ICON: w,
      IDEA_CARDS: "/api/idea-cards?iconPalette=color",
      IDENTITY: "/api/identity",
      NAVIGATION_SUBSCRIBE: "/api/navigation/subscribe",
      OAUTH_CALLBACK: "/oauth/callback",
      PRODUCT_IMPROVEMENTS: "/api/product-improvements",
      PERMISSIONS_ACTIVE: "/permissions/active",
      PERMISSIONS_ACTIVE_BY_SCOPE: function (t) {
        return s("group_by=scope&limit=50", t);
      },
      PERMISSIONS_ACTIVE_WEBSITES: function (t) {
        return s(
          "limit=50&lifetime=durable,today&target_type=network&kind=network_rule,transient_network_grant",
          t,
        );
      },
      PERMISSIONS_INVENTORY: "/api/permissions/inventory",
      PERMISSIONS_RESET: "/permissions/reset",
      PERMISSIONS_REVOKE: "/permissions/revoke",
      PERMISSIONS_SETTINGS: "/permissions/settings",
      SCHEDULED_TASK: B,
      SCHEDULED_TASKS: "/api/tasks",
      SCHEDULED_TASKS_SUBSCRIBE: "/api/tasks/subscribe",
      SPACE_CVM: l,
      SPACE_DELETE: function (n) {
        return "/spaces/v2/" + n + "?source=space";
      },
      SPACE_EXPORT_HTML: function (n) {
        return "/spaces/" + n + "/export.html";
      },
      SPACE_IMAGE: k,
      SPACE_RENAME: "/api/spaces/rename",
      SPACE_SHARE: function (n) {
        return "/spaces/share/" + n;
      },
      SPACES_CATALOG: "/spaces/v2",
      WORKSPACE_DELETE: "/fs/delete",
      WORKSPACE_LIBRARY: "/fs/library",
      WORKSPACE_RAW: function (t) {
        return _(C, t, "");
      },
      WORKSPACE_READ: "/fs/read",
      WORKSPACE_STAT: "/fs/stat",
      WORKSPACE_THUMBNAIL: function (t, n, r) {
        return _(b, t, "?p=" + r + "&v=" + n);
      },
      WORKSPACE_WRITE: "/fs/write",
    });
    function q(e) {
      return e;
    }
    ((i.confineWorkspaceMediaPath = m),
      (i.JarvisPaths = W),
      (i.serializeJarvisPath = q));
  },
  66,
);
