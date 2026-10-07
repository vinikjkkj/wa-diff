__d(
  "WAWebHatchVmTransport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e;
    }
    var l = Object.freeze({
      ARTIFACTS_LIST: "/api/artifacts",
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
    function s(e) {
      return e;
    }
    ((i.JarvisPaths = l), (i.serializeJarvisPath = s));
  },
  66,
);
