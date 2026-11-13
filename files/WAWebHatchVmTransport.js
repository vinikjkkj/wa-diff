__d(
  "WAWebHatchVmTransport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e;
    }
    function l(t, n) {
      var r = Object.keys(n).flatMap(function (e) {
        var t = n[e];
        return t == null ? [] : [e + "=" + encodeURIComponent(t)];
      });
      return r.length === 0 ? t : t + "?" + r.join("&");
    }
    function s(t, n) {
      var r = n.query,
        o = n.subpath,
        a = o === "" ? "" : "/" + o;
      return "/spaces/cvm/" + t + a + (r == null ? "" : "?" + r);
    }
    function u(t, n) {
      return (
        "/permissions/active?" +
        t +
        (n == null ? "" : "&cursor=" + encodeURIComponent(n))
      );
    }
    function c(e) {
      return encodeURIComponent(e).replace(/[!*\'()]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function d(e) {
      var t = e.split("/");
      if (
        e === "" ||
        e.startsWith("/") ||
        e.includes("://") ||
        t.includes("..") ||
        m(e)
      )
        return null;
      try {
        return t.map(c).join("/");
      } catch (e) {
        return null;
      }
    }
    function m(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n === 127) return !0;
      }
      return !1;
    }
    function p(e) {
      var t = e.startsWith("/") ? e.slice(1) : e;
      return m(t) ||
        _(t) ||
        t.split("/").some(function (e) {
          return e === "" || e === "." || e === "..";
        })
        ? null
        : t;
    }
    function _(e) {
      try {
        return (encodeURIComponent(e), !1);
      } catch (e) {
        return !0;
      }
    }
    function f(t, n, r) {
      var o = p(n);
      return o == null ? null : "" + t + o.split("/").map(c).join("/") + r;
    }
    var g = ["/api/computer/assets/", "/api/computer/previews/"],
      h = "sandbox://",
      y = /^[A-Za-z0-9\-._~!$&\'()*+,;=:@/?%]*$/;
    function C(t) {
      if (t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n),
        o = n === -1 ? "" : t.slice(n);
      if (!y.test(o.slice(1))) return null;
      if (
        g.some(function (e) {
          return r.startsWith(e);
        })
      )
        return d(r.slice(1)) === r.slice(1) ? t : null;
      if (!r.startsWith(h)) return null;
      var a = d(r.slice(h.length));
      return a == null ? null : "/fs/raw/" + a + o;
    }
    var b = "/fs/raw/",
      v = "/fs/thumbnail/",
      S = "workspace/",
      R = [b, "/home/hatch/", "~/"],
      L = /^[A-Za-z][A-Za-z0-9+.-]*:/,
      E = /^https?:(?:\/\/[^/?#]*)?([^?#]*)([^#]*)/i,
      k = /\/(?:fs\/raw|fs\/thumbnail|media\/raw)\//;
    function I(e) {
      var t = e.trim();
      if (t.slice(0, h.length).toLowerCase() === h) return D(t.slice(h.length));
      if (!L.test(t)) return D(t);
      var n = E.exec(t);
      if (n == null) return null;
      var r = n[1],
        o = n[2],
        a = T(r);
      return a == null ? null : D("" + a + o);
    }
    function T(e) {
      var t = k.exec(e);
      if (t != null) return e.slice(t.index + t[0].length);
      var n = e.indexOf("/" + S);
      return n === -1 ? null : e.slice(n + 1);
    }
    function D(t) {
      var n = t.split("#"),
        r = n[0],
        o = r.indexOf("?"),
        a = o === -1 ? "" : r.slice(o),
        i = x(o === -1 ? r : r.slice(0, o));
      return i == null || !y.test(a.slice(1)) ? null : "" + b + i + a;
    }
    function x(e) {
      var t = $(e);
      for (var n of R) t.startsWith(n) && (t = t.slice(n.length));
      return (
        t.startsWith("/" + S) && (t = t.slice(1)),
        t === "" || t.startsWith("/")
          ? null
          : d(t.startsWith(S) ? t : "" + S + t)
      );
    }
    function $(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    }
    var P = "/api/idea-cards/media/",
      N = /^v=[A-Za-z0-9._~-]+$/,
      M = 1024,
      w = 3;
    function A(t) {
      if (t.length > M || t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n);
      return !r.startsWith(P) ||
        r.length === P.length ||
        d(r.slice(1)) == null ||
        !r.split("/").every(F) ||
        (n !== -1 && !N.test(t.slice(n + 1)))
        ? null
        : t;
    }
    function F(e) {
      for (var t = e, n = 0; n < w; n++) {
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
    var O = /^[A-Za-z0-9\-_~]$/;
    function B(e) {
      var t = "";
      for (var n of new TextEncoder().encode(e)) {
        var r = String.fromCharCode(n);
        t += O.test(r)
          ? r
          : "%" + n.toString(16).toUpperCase().padStart(2, "0");
      }
      return t;
    }
    var W = 1,
      q = 50;
    function U(t) {
      var n = H(t);
      return n == null ? null : "/api/tasks/" + n;
    }
    function V(t, n) {
      var r = H(t);
      return r == null
        ? null
        : "/api/tasks/runs?job_id=" + r + "&limit=" + G(n);
    }
    function H(e) {
      return e === "" || e === "." || e === ".." || _(e) ? null : c(e);
    }
    function G(e) {
      return e >= q ? q : e >= W ? Math.trunc(e) : W;
    }
    var z = Object.freeze({
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
          c(n) +
          "/actions/" +
          c(r) +
          "?report_offset=" +
          o
        );
      },
      ACTIVITY_GOAL_STEPS: function (n, r, o) {
        return (
          "/api/activity/goals/" +
          c(n) +
          "/actions?limit=" +
          r +
          (o == null ? "" : "&cursor=" + c(o))
        );
      },
      ACTIVITY_SUBSCRIBE: "/api/activity/subscribe",
      AGENT_RESET: "/api/bootstrap/reset",
      API_KEY_AUTH_CALLBACK: "/api_key_auth/callback",
      APPROVALS_HISTORY: function (n, r) {
        return (
          "/approvals/history?record_schema=snapshot_v1&limit=" +
          n +
          (r == null || r.trim() === "" ? "" : "&cursor=" + c(r))
        );
      },
      ARTIFACTS_LIST: "/api/artifacts",
      ARTIFACTS_PIN: "/api/artifacts/pin",
      ARTIFACTS_SUBSCRIBE: "/api/artifacts/subscribe",
      BROWSER_TASK: function (n, r) {
        return "/api/browser-task/" + B(n) + "/" + r;
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
      COMPUTER_SCREENSHOT: C,
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
      CONNECTOR_ACCOUNTS_LINK: function (t, n) {
        return l(
          "/api/connectors/" + encodeURIComponent(t) + "/accounts/link",
          { callback_client: n },
        );
      },
      CONNECTOR_CONNECT: function (n) {
        return "/connectors/" + encodeURIComponent(n) + "/connect";
      },
      CONNECTOR_CONNECT_INFO: function (t, n, r) {
        return l("/connectors/" + encodeURIComponent(t) + "/connect/info", {
          session_id: n,
          callback_client: r,
        });
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
      CONNECTORS_HOMEPAGE: function (n) {
        return "/api/connectors/homepage?preview_limit=" + n;
      },
      CONNECTORS_LIST: "/api/connectors",
      CONNECTORS_LIST_CATEGORY: function (n, r, o) {
        return (
          "/api/connectors?limit=" +
          r +
          "&category=" +
          encodeURIComponent(n) +
          (o == null ? "" : "&cursor=" + encodeURIComponent(o))
        );
      },
      CONNECTORS_LIST_CONNECTED: function (n, r) {
        return (
          "/api/connectors?limit=" +
          n +
          "&category=connected" +
          (r == null ? "" : "&cursor=" + encodeURIComponent(r))
        );
      },
      CONNECTORS_LIST_SETTINGS: "/api/connectors?surface=settings",
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
      CUSTOM_CONNECTORS_LIST: "/v1/custom-connectors/list",
      CUSTOM_CONNECTORS_REGISTER: "/v1/custom-connectors/register",
      DATA_EXPORT: "/api/dyi/export",
      FOA_ACCOUNTS: function (n) {
        return "/api/foa/accounts?app=" + encodeURIComponent(n);
      },
      FOA_AUTH_CALLBACK: "/api/foa_auth/callback",
      IDEA_CARD: function (n) {
        return (
          "/api/idea-cards/" + encodeURIComponent(n) + "?iconPalette=color"
        );
      },
      IDEA_CARD_ICON: A,
      IDEA_CARDS: "/api/idea-cards?iconPalette=color",
      IDENTITY: "/api/identity",
      NAVIGATION_SUBSCRIBE: "/api/navigation/subscribe",
      OAUTH_CALLBACK: "/oauth/callback",
      PRODUCT_IMPROVEMENTS: "/api/product-improvements",
      PERMISSIONS: "/permissions",
      PERMISSIONS_ACTIVE: "/permissions/active",
      PERMISSIONS_ACTIVE_BY_SCOPE: function (t) {
        return u("group_by=scope&limit=50", t);
      },
      PERMISSIONS_ACTIVE_WEBSITES: function (t) {
        return u(
          "limit=50&lifetime=durable,today&target_type=network&kind=network_rule,transient_network_grant",
          t,
        );
      },
      PERMISSIONS_INVENTORY: "/api/permissions/inventory",
      PERMISSIONS_RESET: "/permissions/reset",
      PERMISSIONS_REVOKE: "/permissions/revoke",
      PERMISSIONS_SCOPE: function (n, r, o) {
        return (
          "/permissions/scopes/" +
          encodeURIComponent(n) +
          "/" +
          encodeURIComponent(r) +
          (o == null
            ? ""
            : "?connectors=" + o.map(encodeURIComponent).join(","))
        );
      },
      PERMISSIONS_SETTINGS: "/permissions/settings",
      SCHEDULED_TASK: U,
      SCHEDULED_TASK_RUNS: V,
      SCHEDULED_TASKS: "/api/tasks",
      SCHEDULED_TASKS_SUBSCRIBE: "/api/tasks/subscribe",
      SPACE_CVM: s,
      SPACE_DELETE: function (n) {
        return "/spaces/v2/" + n + "?source=space";
      },
      SPACE_EXPORT_HTML: function (n) {
        return "/spaces/" + n + "/export.html";
      },
      SPACE_IMAGE: I,
      SPACE_RENAME: "/api/spaces/rename",
      SPACE_SHARE: function (n) {
        return "/spaces/share/" + n;
      },
      SPACES_CATALOG: "/spaces/v2",
      WORKSPACE_DELETE: "/fs/delete",
      WORKSPACE_LIBRARY: "/fs/library",
      WORKSPACE_RAW: function (t) {
        return f(b, t, "");
      },
      WORKSPACE_READ: "/fs/read",
      WORKSPACE_STAT: "/fs/stat",
      WORKSPACE_THUMBNAIL: function (t, n, r) {
        return f(v, t, "?p=" + r + "&v=" + n);
      },
      WORKSPACE_WRITE: "/fs/write",
    });
    function j(e) {
      return e;
    }
    ((i.confineWorkspaceMediaPath = p),
      (i.JarvisPaths = z),
      (i.serializeJarvisPath = j));
  },
  66,
);
