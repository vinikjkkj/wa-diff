__d(
  "WAWebHatchVmApi",
  ["Promise", "WAWebHatchVmTransport", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e4,
      u = 3e4;
    function c(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function d(e, t, n) {
      return n === void 0
        ? { detail: e, kind: "Rejected", statusCode: t }
        : { detail: e, kind: "Rejected", statusCode: t, value: n };
    }
    var m = (function () {
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n,
                r = yield this.$1.send({
                  method: "GET",
                  path: e,
                  timeoutMs:
                    (n = t == null ? void 0 : t.timeoutMs) != null ? n : s,
                });
              e: {
                var o = r;
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "failure" &&
                  "detail" in o
                ) {
                  var a = o.detail;
                  return { detail: a, kind: "Failure" };
                }
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "rejected" &&
                  "detail" in o
                ) {
                  var i = o.detail;
                  return { detail: i, kind: "Rejected" };
                }
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "unreadable" &&
                  "detail" in o
                ) {
                  var l = o.detail;
                  return { detail: l, kind: "Unreadable" };
                }
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "response" &&
                  "body" in o &&
                  "statusCode" in o
                ) {
                  var u = o.body,
                    c = o.statusCode;
                  return c < 200 || c >= 300
                    ? d("VM returned HTTP " + c, c)
                    : { kind: "Ok", value: u };
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    o,
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.registerCapabilities = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CLIENT_REGISTER_CAPABILITIES,
            { body: p(t), responseShape: "flat-or-envelope" },
          );
        }),
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
            { body: p({ connector: t, methods: n }), service: "sentinel" },
          );
        }),
        (r.connectorResetPermissions = function (t) {
          return this.request(
            "DELETE",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_POLICY(t),
            {
              body: p({ reason: "settings_permissions_connector_reset" }),
              service: "sentinel",
            },
          );
        }),
        (r.connectorScopeLink = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_SCOPE_LINK(t, n),
            { body: p({}) },
          );
        }),
        (r.connectorConnectInfo = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_CONNECT_INFO(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.foaAccounts = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.FOA_ACCOUNTS(t),
            babelHelpers.extends({}, n, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.foaAuthCallback = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.FOA_AUTH_CALLBACK,
            babelHelpers.extends({}, r, {
              body: p({ account_ids: Array.from(new Set(n)), provider: t }),
              service: "authd",
            }),
          );
        }),
        (r.consentAuthCallback = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONSENT_AUTH_CALLBACK,
            babelHelpers.extends({}, r, {
              allowEmptySuccess: !0,
              body: p(
                n == null ? { provider: t } : { provider: t, session_id: n },
              ),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (r.connectorConnect = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_CONNECT(t),
            babelHelpers.extends({}, r, {
              body: p(n == null ? {} : { session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (r.connectorDisconnect = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_DISCONNECT(t),
            { body: p(n == null ? {} : { session_id: n }) },
          );
        }),
        (r.chats = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_LIST,
            t,
          );
        }),
        (r.chatMessage = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_MESSAGE(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.oauthCallback = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.OAUTH_CALLBACK,
            {
              body: p({ auth_intent: "connect", code: t, state: n }),
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
            { body: p(t), service: "authd" },
          );
        }),
        (r.credentialUpdate = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_UPDATE,
            { body: p(t), service: "authd" },
          );
        }),
        (r.credentialDelete = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DELETE,
            {
              body: p({ credential_type: "browser", id: t }),
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
            { body: p({}) },
          );
        }),
        (r.connectorAccountUnlink = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNT_UNLINK(
              t,
              n,
            ),
            { body: p({}) },
          );
        }),
        (r.openEventSubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: p({}),
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
            timeoutMs: u,
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              var r,
                o,
                a = yield this.exchange(e, t, n);
              return _(
                a,
                (r = n == null ? void 0 : n.service) != null ? r : "daemon",
                (o = n == null ? void 0 : n.responseShape) != null
                  ? o
                  : "service-default",
                (n == null ? void 0 : n.allowEmptySuccess) === !0,
              );
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.exchange = function (r, o, a) {
          var t,
            i = (t = a == null ? void 0 : a.timeoutMs) != null ? t : s;
          return !Number.isFinite(i) || i <= 0
            ? (e || (e = n("Promise"))).resolve({
                detail: "VM request timeout is invalid",
                kind: "failure",
                reason: "TRANSPORT",
              })
            : this.$1.send({
                body: a == null ? void 0 : a.body,
                method: r,
                path: o,
                service: a == null ? void 0 : a.service,
                timeoutMs: i,
              });
        }),
        t
      );
    })();
    function p(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    function _(e, t, n, r) {
      e: {
        var o = e;
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "failure" &&
          "detail" in o
        ) {
          var a = o.detail;
          return { detail: a, kind: "Failure" };
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "rejected" &&
          "detail" in o
        ) {
          var i = o.detail;
          return { detail: i, kind: "Rejected" };
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "unreadable" &&
          "detail" in o
        ) {
          var l = o.detail;
          return { detail: l, kind: "Unreadable" };
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "response" &&
          "body" in o &&
          "statusCode" in o
        ) {
          var s = o.body,
            u = o.statusCode;
          return f(s, u, t, n, r);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      }
    }
    function f(e, t, n, r, o) {
      var a = t < 200 || t >= 300,
        i = n !== "daemon";
      if (h(e, a, i, o)) return { kind: "Ok", value: null };
      var l;
      try {
        l = JSON.parse(new TextDecoder().decode(e));
      } catch (e) {
        return a
          ? d("VM returned HTTP " + t, t)
          : { detail: "VM returned malformed JSON", kind: "Unreadable" };
      }
      var s = i || r === "flat-or-envelope",
        u = s ? l : void 0;
      return y(l, i, r) ? C(l, t, u) : g(u, t, a);
    }
    function g(e, t, n) {
      return n
        ? d("VM returned HTTP " + t, t, e)
        : e === void 0
          ? { detail: "VM returned an invalid envelope", kind: "Unreadable" }
          : { kind: "Ok", value: e };
    }
    function h(e, t, n, r) {
      return !t && e.length === 0 && (n || r);
    }
    function y(e, t, n) {
      var r;
      return t || !c(e) || typeof e.ok != "boolean"
        ? !1
        : e.ok === !1 ||
            n === "service-default" ||
            e.result !== void 0 ||
            typeof e.error == "string" ||
            c((r = e.error) != null ? r : null);
    }
    function C(e, t, n) {
      if (e.ok !== !0) {
        var r;
        return d(v((r = e.error) != null ? r : null), t, b(e, n));
      }
      return t < 200 || t >= 300
        ? d("VM returned HTTP " + t, t, e.result)
        : e.result === void 0
          ? { detail: "VM envelope omitted result", kind: "Unreadable" }
          : { kind: "Ok", value: e.result };
    }
    function b(e, t) {
      return e.result === void 0 && e.error === void 0 ? t : e.result;
    }
    function v(e) {
      if (typeof e == "string") return e;
      var t = c(e) ? e.message : null;
      return typeof t == "string" ? t : "VM rejected the request";
    }
    l.WAWebHatchVmApi = m;
  },
  98,
);
