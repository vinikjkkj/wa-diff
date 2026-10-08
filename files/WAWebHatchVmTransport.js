__d(
  "WAWebHatchVmTransport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e;
    }
    function l(e) {
      return encodeURIComponent(e).replace(/[!*\'()]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function s(e) {
      var t = e.split("/");
      if (
        e === "" ||
        e.startsWith("/") ||
        e.includes("://") ||
        t.includes("..") ||
        u(e)
      )
        return null;
      try {
        return t.map(l).join("/");
      } catch (e) {
        return null;
      }
    }
    function u(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e.charCodeAt(t);
        if (n < 32 || n === 127) return !0;
      }
      return !1;
    }
    var c = ["/api/computer/assets/", "/api/computer/previews/"],
      d = "sandbox://",
      m = /^[A-Za-z0-9\-._~!$&\'()*+,;=:@/?%]*$/;
    function p(t) {
      if (t.includes("#")) return null;
      var n = t.indexOf("?"),
        r = n === -1 ? t : t.slice(0, n),
        o = n === -1 ? "" : t.slice(n);
      if (!m.test(o.slice(1))) return null;
      if (
        c.some(function (e) {
          return r.startsWith(e);
        })
      )
        return s(r.slice(1)) === r.slice(1) ? t : null;
      if (!r.startsWith(d)) return null;
      var a = s(r.slice(d.length));
      return a == null ? null : "/fs/raw/" + a + o;
    }
    var _ = Object.freeze({
      ARTIFACTS_LIST: "/api/artifacts",
      COMPUTER_CONTEXT: "/api/computer/context",
      COMPUTER_SCREENSHOT: p,
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
      CONNECTOR_CONNECT_INFO: function (n) {
        return "/connectors/" + encodeURIComponent(n) + "/connect/info";
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
      OAUTH_CALLBACK: "/oauth/callback",
    });
    function f(e) {
      return e;
    }
    ((i.JarvisPaths = _), (i.serializeJarvisPath = f));
  },
  66,
);
