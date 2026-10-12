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
    var d = ["/api/computer/assets/", "/api/computer/previews/"],
      m = "sandbox://",
      p = /^[A-Za-z0-9\-._~!$&\'()*+,;=:@/?%]*$/;
    function _(t) {
      if (t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n),
        o = n === -1 ? "" : t.slice(n);
      if (!p.test(o.slice(1))) return null;
      if (
        d.some(function (e) {
          return r.startsWith(e);
        })
      )
        return u(r.slice(1)) === r.slice(1) ? t : null;
      if (!r.startsWith(m)) return null;
      var a = u(r.slice(m.length));
      return a == null ? null : "/fs/raw/" + a + o;
    }
    var f = "/fs/raw/",
      g = "workspace/",
      h = [f, "/home/hatch/", "~/"],
      y = /^[A-Za-z][A-Za-z0-9+.-]*:/,
      C = /^https?:(?:\/\/[^/?#]*)?([^?#]*)([^#]*)/i,
      b = /\/(?:fs\/raw|fs\/thumbnail|media\/raw)\//;
    function v(e) {
      var t = e.trim();
      if (t.slice(0, m.length).toLowerCase() === m) return R(t.slice(m.length));
      if (!y.test(t)) return R(t);
      var n = C.exec(t);
      if (n == null) return null;
      var r = n[1],
        o = n[2],
        a = S(r);
      return a == null ? null : R("" + a + o);
    }
    function S(e) {
      var t = b.exec(e);
      if (t != null) return e.slice(t.index + t[0].length);
      var n = e.indexOf("/" + g);
      return n === -1 ? null : e.slice(n + 1);
    }
    function R(t) {
      var n = t.split("#"),
        r = n[0],
        o = r.indexOf("?"),
        a = o === -1 ? "" : r.slice(o),
        i = L(o === -1 ? r : r.slice(0, o));
      return i == null || !p.test(a.slice(1)) ? null : "" + f + i + a;
    }
    function L(e) {
      var t = E(e);
      for (var n of h) t.startsWith(n) && (t = t.slice(n.length));
      return (
        t.startsWith("/" + g) && (t = t.slice(1)),
        t === "" || t.startsWith("/")
          ? null
          : u(t.startsWith(g) ? t : "" + g + t)
      );
    }
    function E(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    }
    var k = /^[A-Za-z0-9\-_~]$/;
    function I(e) {
      var t = "";
      for (var n of new TextEncoder().encode(e)) {
        var r = String.fromCharCode(n);
        t += k.test(r)
          ? r
          : "%" + n.toString(16).toUpperCase().padStart(2, "0");
      }
      return t;
    }
    var T = Object.freeze({
      ARTIFACTS_LIST: "/api/artifacts",
      ARTIFACTS_PIN: "/api/artifacts/pin",
      BROWSER_TASK: function (n, r) {
        return "/api/browser-task/" + I(n) + "/" + r;
      },
      CHATS_LIST: "/api/chats/list?limit=100",
      COMPUTER_CONTEXT: "/api/computer/context",
      COMPUTER_SCREENSHOT: _,
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
      SPACE_IMAGE: v,
      SPACES_CATALOG: "/spaces/v2",
    });
    function D(e) {
      return e;
    }
    ((i.JarvisPaths = T), (i.serializeJarvisPath = D));
  },
  66,
);
