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
    function s(e) {
      return encodeURIComponent(e).replace(/[!*\'()]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function u(e) {
      var t = e.split("/");
      if (
        e === "" ||
        e.startsWith("/") ||
        e.includes("://") ||
        t.includes("..") ||
        c(e)
      )
        return null;
      try {
        return t.map(s).join("/");
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n === 127) return !0;
      }
      return !1;
    }
    function d(e) {
      var t = e.startsWith("/") ? e.slice(1) : e;
      return c(t) ||
        m(t) ||
        t.split("/").some(function (e) {
          return e === "" || e === "." || e === "..";
        })
        ? null
        : t;
    }
    function m(e) {
      try {
        return (encodeURIComponent(e), !1);
      } catch (e) {
        return !0;
      }
    }
    function p(t, n, r) {
      var o = d(n);
      return o == null ? null : "" + t + o.split("/").map(s).join("/") + r;
    }
    var _ = ["/api/computer/assets/", "/api/computer/previews/"],
      f = "sandbox://",
      g = /^[A-Za-z0-9\-._~!$&\'()*+,;=:@/?%]*$/;
    function h(t) {
      if (t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n),
        o = n === -1 ? "" : t.slice(n);
      if (!g.test(o.slice(1))) return null;
      if (
        _.some(function (e) {
          return r.startsWith(e);
        })
      )
        return u(r.slice(1)) === r.slice(1) ? t : null;
      if (!r.startsWith(f)) return null;
      var a = u(r.slice(f.length));
      return a == null ? null : "/fs/raw/" + a + o;
    }
    var y = "/fs/raw/",
      C = "/fs/thumbnail/",
      b = "workspace/",
      v = [y, "/home/hatch/", "~/"],
      S = /^[A-Za-z][A-Za-z0-9+.-]*:/,
      R = /^https?:(?:\/\/[^/?#]*)?([^?#]*)([^#]*)/i,
      L = /\/(?:fs\/raw|fs\/thumbnail|media\/raw)\//;
    function E(e) {
      var t = e.trim();
      if (t.slice(0, f.length).toLowerCase() === f) return I(t.slice(f.length));
      if (!S.test(t)) return I(t);
      var n = R.exec(t);
      if (n == null) return null;
      var r = n[1],
        o = n[2],
        a = k(r);
      return a == null ? null : I("" + a + o);
    }
    function k(e) {
      var t = L.exec(e);
      if (t != null) return e.slice(t.index + t[0].length);
      var n = e.indexOf("/" + b);
      return n === -1 ? null : e.slice(n + 1);
    }
    function I(t) {
      var n = t.split("#"),
        r = n[0],
        o = r.indexOf("?"),
        a = o === -1 ? "" : r.slice(o),
        i = T(o === -1 ? r : r.slice(0, o));
      return i == null || !g.test(a.slice(1)) ? null : "" + y + i + a;
    }
    function T(e) {
      var t = D(e);
      for (var n of v) t.startsWith(n) && (t = t.slice(n.length));
      return (
        t.startsWith("/" + b) && (t = t.slice(1)),
        t === "" || t.startsWith("/")
          ? null
          : u(t.startsWith(b) ? t : "" + b + t)
      );
    }
    function D(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    }
    var x = /^[A-Za-z0-9\-_~]$/;
    function $(e) {
      var t = "";
      for (var n of new TextEncoder().encode(e)) {
        var r = String.fromCharCode(n);
        t += x.test(r)
          ? r
          : "%" + n.toString(16).toUpperCase().padStart(2, "0");
      }
      return t;
    }
    var P = Object.freeze({
      ARTIFACTS_LIST: "/api/artifacts",
      ARTIFACTS_PIN: "/api/artifacts/pin",
      ARTIFACTS_SUBSCRIBE: "/api/artifacts/subscribe",
      BROWSER_TASK: function (n, r) {
        return "/api/browser-task/" + $(n) + "/" + r;
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
      COMPUTER_SCREENSHOT: h,
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
      MESSENGER_PIN_STATUS: "/api/messenger_companion/pin-status",
      MESSENGER_UNLOCK: "/api/messenger_companion/unlock",
      NAVIGATION_SUBSCRIBE: "/api/navigation/subscribe",
      OAUTH_CALLBACK: "/oauth/callback",
      SPACE_CVM: l,
      SPACE_DELETE: function (n) {
        return "/spaces/v2/" + n + "?source=space";
      },
      SPACE_IMAGE: E,
      SPACES_CATALOG: "/spaces/v2",
      WORKSPACE_DELETE: "/fs/delete",
      WORKSPACE_LIBRARY: "/fs/library",
      WORKSPACE_RAW: function (t) {
        return p(y, t, "");
      },
      WORKSPACE_THUMBNAIL: function (t, n, r) {
        return p(C, t, "?p=" + r + "&v=" + n);
      },
    });
    function N(e) {
      return e;
    }
    ((i.confineWorkspaceMediaPath = d),
      (i.JarvisPaths = P),
      (i.serializeJarvisPath = N));
  },
  66,
);
