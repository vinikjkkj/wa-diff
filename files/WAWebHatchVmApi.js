__d(
  "WAWebHatchVmApi",
  ["WAWebHatchVmTransport", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = 3e4;
    function u(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function c(e, t, n) {
      return n === void 0
        ? { detail: e, kind: "Rejected", statusCode: t }
        : { detail: e, kind: "Rejected", statusCode: t, value: n };
    }
    var d = (function () {
      function t(e) {
        this.$1 = e;
      }
      var r = t.prototype;
      return (
        (r.artifacts = function () {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_LIST,
          );
        }),
        (r.computerContext = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.COMPUTER_CONTEXT,
            t,
          );
        }),
        (r.computerScreenshot = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              var r,
                o = yield this.$1.send({
                  method: "GET",
                  path: t,
                  timeoutMs:
                    (r = n == null ? void 0 : n.timeoutMs) != null ? r : e,
                });
              e: {
                var a = o;
                if (
                  ((typeof a == "object" && a !== null) ||
                    typeof a == "function") &&
                  a.kind === "failure" &&
                  "detail" in a
                ) {
                  var i = a.detail;
                  return { detail: i, kind: "Failure" };
                }
                if (
                  ((typeof a == "object" && a !== null) ||
                    typeof a == "function") &&
                  a.kind === "rejected" &&
                  "detail" in a
                ) {
                  var l = a.detail;
                  return { detail: l, kind: "Rejected" };
                }
                if (
                  ((typeof a == "object" && a !== null) ||
                    typeof a == "function") &&
                  a.kind === "unreadable" &&
                  "detail" in a
                ) {
                  var s = a.detail;
                  return { detail: s, kind: "Unreadable" };
                }
                if (
                  ((typeof a == "object" && a !== null) ||
                    typeof a == "function") &&
                  a.kind === "response" &&
                  "body" in a &&
                  "statusCode" in a
                ) {
                  var u = a.body,
                    d = a.statusCode;
                  return d < 200 || d >= 300
                    ? c("VM returned HTTP " + d, d)
                    : { kind: "Ok", value: u };
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    a,
                );
              }
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (r.connectors = function (t, n) {
          return (
            t === void 0 && (t = []),
            this.request(
              "GET",
              o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_LIST_SUPPORTING(
                t,
              ),
              n,
            )
          );
        }),
        (r.connector = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_GET(t),
            n,
          );
        }),
        (r.connectorPermissions = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_PERMISSIONS(t),
            n,
          );
        }),
        (r.connectorSetPermissions = function (t, n) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_POLICY(t),
            { body: m({ connector: t, methods: n }), service: "sentinel" },
          );
        }),
        (r.connectorResetPermissions = function (t) {
          return this.request(
            "DELETE",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_POLICY(t),
            {
              body: m({ reason: "settings_permissions_connector_reset" }),
              service: "sentinel",
            },
          );
        }),
        (r.connectorScopeLink = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_SCOPE_LINK(t, n),
            { body: m({}) },
          );
        }),
        (r.connectorConnectInfo = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_CONNECT_INFO(t, n),
          );
        }),
        (r.connectorDisconnect = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_DISCONNECT(t),
            { body: m(n == null ? {} : { session_id: n }) },
          );
        }),
        (r.chats = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_LIST,
            t,
          );
        }),
        (r.oauthCallback = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.OAUTH_CALLBACK,
            {
              body: m({ auth_intent: "connect", code: t, state: n }),
              service: "authd",
            },
          );
        }),
        (r.credentialCatalog = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG(t),
            { service: "authd" },
          );
        }),
        (r.credentialDetails = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DETAILS(
              t,
            ),
            { service: "authd" },
          );
        }),
        (r.credentialCapture = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CAPTURE,
            { body: m(t), service: "authd" },
          );
        }),
        (r.credentialUpdate = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_UPDATE,
            { body: m(t), service: "authd" },
          );
        }),
        (r.credentialDelete = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DELETE,
            {
              body: m({ credential_type: "browser", id: t }),
              service: "authd",
            },
          );
        }),
        (r.connectorAccounts = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNTS(t),
            n,
          );
        }),
        (r.connectorAccountsLink = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNTS_LINK(t),
            { body: m({}) },
          );
        }),
        (r.connectorAccountUnlink = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNT_UNLINK(
              t,
              n,
            ),
            { body: m({}) },
          );
        }),
        (r.openEventSubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: m({}),
              method: "POST",
              path: t,
            },
            n,
          );
        }),
        (r.browserTaskPost = function (t, n) {
          return this.$1.send({
            method: "POST",
            path: o("WAWebHatchVmTransport").JarvisPaths.BROWSER_TASK(t, n),
            timeoutMs: s,
          });
        }),
        (r.openBrowserTaskAttach = function (t, n) {
          return this.$1.openStream(
            {
              method: "POST",
              path: o("WAWebHatchVmTransport").JarvisPaths.BROWSER_TASK(
                t,
                "websockify?mode=attach",
              ),
            },
            n,
          );
        }),
        (r.request = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r) {
              var o,
                a,
                i = (o = r == null ? void 0 : r.timeoutMs) != null ? o : e;
              if (!Number.isFinite(i) || i <= 0)
                return {
                  detail: "VM request timeout is invalid",
                  kind: "Failure",
                };
              var l = yield this.$1.send({
                body: r == null ? void 0 : r.body,
                method: t,
                path: n,
                service: r == null ? void 0 : r.service,
                timeoutMs: i,
              });
              return p(
                l,
                (a = r == null ? void 0 : r.service) != null ? a : "daemon",
              );
            },
          );
          function r(e, n, r) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        t
      );
    })();
    function m(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    function p(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "failure" &&
          "detail" in n
        ) {
          var r = n.detail;
          return { detail: r, kind: "Failure" };
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "rejected" &&
          "detail" in n
        ) {
          var o = n.detail;
          return { detail: o, kind: "Rejected" };
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "unreadable" &&
          "detail" in n
        ) {
          var a = n.detail;
          return { detail: a, kind: "Unreadable" };
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.kind === "response" &&
          "body" in n &&
          "statusCode" in n
        ) {
          var i = n.body,
            l = n.statusCode;
          return _(i, l, t);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function _(e, t, n) {
      var r = t < 200 || t >= 300,
        o = n !== "daemon";
      if (o && !r && e.length === 0) return { kind: "Ok", value: null };
      var a;
      try {
        a = JSON.parse(new TextDecoder().decode(e));
      } catch (e) {
        return r
          ? c("VM returned HTTP " + t, t)
          : { detail: "VM returned malformed JSON", kind: "Unreadable" };
      }
      return !o && u(a) && typeof a.ok == "boolean"
        ? f(a, t)
        : r
          ? c("VM returned HTTP " + t, t)
          : o
            ? { kind: "Ok", value: a }
            : { detail: "VM returned an invalid envelope", kind: "Unreadable" };
    }
    function f(e, t) {
      return e.ok !== !0
        ? c(
            typeof e.error == "string" ? e.error : "VM rejected the request",
            t,
            e.result,
          )
        : t < 200 || t >= 300
          ? c("VM returned HTTP " + t, t, e.result)
          : e.result === void 0
            ? { detail: "VM envelope omitted result", kind: "Unreadable" }
            : { kind: "Ok", value: e.result };
    }
    l.WAWebHatchVmApi = d;
  },
  98,
);
