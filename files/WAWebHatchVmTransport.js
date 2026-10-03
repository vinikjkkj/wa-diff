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
      CONNECTORS_LIST: "/api/connectors",
      OAUTH_CALLBACK: "/oauth/callback",
    });
    function s(e) {
      return e;
    }
    ((i.JarvisPaths = l), (i.serializeJarvisPath = s));
  },
  66,
);
