__d(
  "WAWebHatchVmApi",
  [
    "Promise",
    "WAWebHatchOAuthCallbackClient",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e4,
      u = 3e4,
      c = 3e4,
      d = 400,
      m = "already exists; set replace_existing=true",
      p = "custom_connector_name_taken",
      _ = {
        detail: "Scheduled task ID is invalid",
        kind: "Failure",
        reason: "TRANSPORT",
      },
      f = { detail: "Approval ID is invalid", kind: "Failure" },
      g = {
        detail: "Peer image ID is invalid",
        kind: "Failure",
        reason: "TRANSPORT",
      };
    function h(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function y(e, t, n, r) {
      var o = r === void 0 ? {} : { errorCode: r };
      return n === void 0
        ? babelHelpers.extends({}, o, {
            detail: e,
            kind: "Rejected",
            statusCode: t,
          })
        : babelHelpers.extends({}, o, {
            detail: e,
            kind: "Rejected",
            statusCode: t,
            value: n,
          });
    }
    var C = (function () {
      function t(e) {
        this.$1 = e;
      }
      var r = t.prototype;
      return (
        (r.activityPage = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_PAGE(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.activityGoalSteps = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_GOAL_STEPS(t, n, r),
            babelHelpers.extends({}, a, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.activityGoalStepReport = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_GOAL_STEP_REPORT(
              t,
              n,
              r,
            ),
            babelHelpers.extends({}, a, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.openActivitySubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: v({ capabilities: [].concat(t) }),
              method: "POST",
              path: o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_SUBSCRIBE,
            },
            n,
          );
        }),
        (r.openDataExport = function (t) {
          return this.$1.openStream(
            {
              accept: "application/zip",
              body: new Uint8Array(0),
              method: "POST",
              path: o("WAWebHatchVmTransport").JarvisPaths.DATA_EXPORT,
            },
            t,
          );
        }),
        (r.scheduledTasks = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASKS,
            babelHelpers.extends({}, t, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.deleteScheduledTask = function (r, a) {
          var t = o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASK(r);
          return t == null
            ? (e || (e = n("Promise"))).resolve(_)
            : this.request(
                "DELETE",
                t,
                babelHelpers.extends({}, a, {
                  allowEmptySuccess: !0,
                  responseShape: "flat-or-envelope",
                }),
              );
        }),
        (r.scheduledTaskRuns = function (r, a, i) {
          var t = o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASK_RUNS(
            r,
            a,
          );
          return t == null
            ? (e || (e = n("Promise"))).resolve(_)
            : this.request(
                "GET",
                t,
                babelHelpers.extends({}, i, {
                  responseShape: "flat-or-envelope",
                }),
              );
        }),
        (r.approvalDetail = function (r, a) {
          var t = o("WAWebHatchVmTransport").JarvisPaths.APPROVAL_DETAIL(r);
          return t == null
            ? (e || (e = n("Promise"))).resolve(f)
            : this.request(
                "GET",
                t,
                babelHelpers.extends({}, a, { service: "sentinel" }),
              );
        }),
        (r.approvalHistory = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.APPROVALS_HISTORY(t, n),
            babelHelpers.extends({}, r, { service: "sentinel" }),
          );
        }),
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
                  "detail" in o &&
                  "reason" in o
                ) {
                  var a = o.detail,
                    i = o.reason;
                  return { detail: a, kind: "Failure", reason: i };
                }
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "rejected" &&
                  "detail" in o
                ) {
                  var l = o.detail;
                  return { detail: l, kind: "Rejected" };
                }
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "unreadable" &&
                  "detail" in o
                ) {
                  var u = o.detail;
                  return { detail: u, kind: "Unreadable" };
                }
                if (
                  ((typeof o == "object" && o !== null) ||
                    typeof o == "function") &&
                  o.kind === "response" &&
                  "body" in o &&
                  "statusCode" in o
                ) {
                  var c = o.body,
                    d = o.statusCode;
                  return d < 200 || d >= 300
                    ? y("VM returned HTTP " + d, d)
                    : { kind: "Ok", value: c };
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
        (r.peerImage = function (r, a, i, l) {
          var t = o("WAWebHatchVmTransport").JarvisPaths.PEERS_IMAGE(r, a, i);
          return t == null
            ? (e || (e = n("Promise"))).resolve(g)
            : this.computerScreenshot(t, l);
        }),
        (r.peerConnectIntroImage = function (t, n) {
          return this.computerScreenshot(
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECT_INTRO_IMAGE(t),
            n,
          );
        }),
        (r.registerCapabilities = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CLIENT_REGISTER_CAPABILITIES,
            { body: v(t), responseShape: "flat-or-envelope" },
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
        (r.connectorsHomepage = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_HOMEPAGE(t),
            n,
          );
        }),
        (r.categoryConnectors = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_LIST_CATEGORY(
              t,
              n,
              r,
            ),
            a,
          );
        }),
        (r.connectedConnectors = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_LIST_CONNECTED(
              t,
              n,
            ),
            r,
          );
        }),
        (r.settingsConnectors = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_LIST_SETTINGS,
            t,
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
            { body: v({ connector: t, methods: n }), service: "sentinel" },
          );
        }),
        (r.connectorResetPermissions = function (t) {
          return this.request(
            "DELETE",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_POLICY(t),
            {
              body: v({ reason: "settings_permissions_connector_reset" }),
              service: "sentinel",
            },
          );
        }),
        (r.permissions = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS,
            babelHelpers.extends({}, t, { service: "sentinel" }),
          );
        }),
        (r.permissionSettings = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SETTINGS,
            babelHelpers.extends({}, t, { service: "sentinel" }),
          );
        }),
        (r.permissionSetSettings = function (t) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SETTINGS,
            { body: v(t), service: "sentinel" },
          );
        }),
        (r.activePermissions = function (t, n) {
          return this.request(
            "GET",
            t,
            babelHelpers.extends({}, n, { service: "sentinel" }),
          );
        }),
        (r.permissionInventory = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_INVENTORY,
            babelHelpers.extends({}, t, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.scopedPermissions = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SCOPE(t, n, r),
            babelHelpers.extends({}, a, { service: "sentinel" }),
          );
        }),
        (r.scopedPermissionSetMode = function (t, n, r) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SCOPE(t, n),
            { body: v(r), service: "sentinel" },
          );
        }),
        (r.activePermissionSetMode = function (t) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE,
            { body: v(t), service: "sentinel" },
          );
        }),
        (r.permissionRevoke = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_REVOKE,
            {
              body: v(
                babelHelpers.extends({}, t, {
                  actor: "web",
                  reason: "manage_approvals_revoke",
                }),
              ),
              service: "sentinel",
            },
          );
        }),
        (r.permissionsReset = function () {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_RESET,
            {
              body: v({ reason: "settings_permissions_reset" }),
              service: "sentinel",
            },
          );
        }),
        (r.connectorScopeLink = function (t, n) {
          var e = o(
            "WAWebHatchOAuthCallbackClient",
          ).getHatchOAuthCallbackClient();
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_SCOPE_LINK(t, n),
            { body: v(e == null ? {} : { callback_client: e }) },
          );
        }),
        (r.connectorConnectInfo = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_CONNECT_INFO(
              t,
              n,
              o("WAWebHatchOAuthCallbackClient").getHatchOAuthCallbackClient(),
            ),
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
              body: v({ account_ids: Array.from(new Set(n)), provider: t }),
              service: "authd",
            }),
          );
        }),
        (r.apiKeyAuthCallback = function (t, n, r, a) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.API_KEY_AUTH_CALLBACK,
            babelHelpers.extends({}, a, {
              body: v(
                r == null
                  ? { key: n, provider: t }
                  : { key: n, provider: t, session_id: r },
              ),
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
              body: v(
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
              body: v(n == null ? {} : { session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (r.connectorDisconnect = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_DISCONNECT(t),
            { body: v(n == null ? {} : { session_id: n }) },
          );
        }),
        (r.peerInviteOpen = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPEN,
            babelHelpers.extends({}, r, {
              body: v({ invitation_url: t, session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (r.peerInviteAccept = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_ACCEPT,
            babelHelpers.extends({}, r, {
              body: v({ fragment: t, session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (r.peerContacts = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONTACTS(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
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
        (r.chatHistory = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_HISTORY(t, n, r),
            babelHelpers.extends({}, a, { responseShape: "flat-or-envelope" }),
          );
        }),
        (r.openChatSubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: v({ chat_id: t }),
              method: "POST",
              path: o("WAWebHatchVmTransport").JarvisPaths.CHATS_SUBSCRIBE,
            },
            n,
          );
        }),
        (r.oauthCallback = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.OAUTH_CALLBACK,
            {
              body: v(babelHelpers.extends({ auth_intent: "connect" }, t)),
              responseShape: "flat-or-envelope",
              service: "authd",
            },
          );
        }),
        (r.credentialCatalog = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG(t),
            { service: "authd", timeoutMs: c },
          );
        }),
        (r.credentialDetails = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DETAILS(
              t,
            ),
            { service: "authd", timeoutMs: c },
          );
        }),
        (r.credentialCapture = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CAPTURE,
            { body: v(t), service: "authd", timeoutMs: c },
          );
        }),
        (r.credentialUpdate = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_UPDATE,
            { body: v(t), service: "authd", timeoutMs: c },
          );
        }),
        (r.credentialDelete = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DELETE,
            {
              body: v({ credential_type: "browser", id: t }),
              service: "authd",
              timeoutMs: c,
            },
          );
        }),
        (r.customConnectorRegister = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield this.exchange(
              "POST",
              o("WAWebHatchVmTransport").JarvisPaths.CUSTOM_CONNECTORS_REGISTER,
              { body: v(e), service: "authd", timeoutMs: c },
            );
            return b(t)
              ? y("custom connector name already registered", d, void 0, p)
              : S(t, "authd", "service-default", !1);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.customConnectorList = function () {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CUSTOM_CONNECTORS_LIST,
            { body: v({}), service: "authd", timeoutMs: c },
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
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNTS_LINK(
              t,
              o("WAWebHatchOAuthCallbackClient").getHatchOAuthCallbackClient(),
            ),
            { body: v({}) },
          );
        }),
        (r.connectorAccountUnlink = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNT_UNLINK(
              t,
              n,
            ),
            { body: v({}) },
          );
        }),
        (r.openEventSubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: v({}),
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
              return S(
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
    function b(e) {
      return (
        e.kind === "response" &&
        e.statusCode === d &&
        new TextDecoder().decode(e.body).includes(m)
      );
    }
    function v(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    function S(e, t, n, r) {
      e: {
        var o = e;
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "failure" &&
          "detail" in o &&
          "reason" in o
        ) {
          var a = o.detail,
            i = o.reason;
          return { detail: a, kind: "Failure", reason: i };
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "rejected" &&
          "detail" in o
        ) {
          var l = o.detail;
          return { detail: l, kind: "Rejected" };
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "unreadable" &&
          "detail" in o
        ) {
          var s = o.detail;
          return { detail: s, kind: "Unreadable" };
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.kind === "response" &&
          "body" in o &&
          "statusCode" in o
        ) {
          var u = o.body,
            c = o.statusCode;
          return R(u, c, t, n, r);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      }
    }
    function R(e, t, n, r, o) {
      var a = t < 200 || t >= 300,
        i = n !== "daemon";
      if (E(e, a, i, o)) return { kind: "Ok", value: null };
      var l;
      try {
        l = JSON.parse(new TextDecoder().decode(e));
      } catch (e) {
        return a
          ? y("VM returned HTTP " + t, t)
          : { detail: "VM returned malformed JSON", kind: "Unreadable" };
      }
      var s = i || r === "flat-or-envelope",
        u = s ? l : void 0;
      return k(l, i, r) ? I(l, t, u) : L(u, t, a);
    }
    function L(e, t, n) {
      return n
        ? y("VM returned HTTP " + t, t, e, x(e != null ? e : null))
        : e === void 0
          ? { detail: "VM returned an invalid envelope", kind: "Unreadable" }
          : { kind: "Ok", value: e };
    }
    function E(e, t, n, r) {
      return !t && e.length === 0 && (n || r);
    }
    function k(e, t, n) {
      var r;
      return (t && n !== "flat-or-envelope") ||
        !h(e) ||
        typeof e.ok != "boolean"
        ? !1
        : e.ok === !1 ||
            n === "service-default" ||
            e.result !== void 0 ||
            typeof e.error == "string" ||
            h((r = e.error) != null ? r : null);
    }
    function I(e, t, n) {
      if (e.ok !== !0) {
        var r;
        return y(D((r = e.error) != null ? r : null), t, T(e, n), x(e));
      }
      return t < 200 || t >= 300
        ? y("VM returned HTTP " + t, t, e.result)
        : e.result === void 0
          ? { detail: "VM envelope omitted result", kind: "Unreadable" }
          : { kind: "Ok", value: e.result };
    }
    function T(e, t) {
      return e.result === void 0 && e.error === void 0 ? t : e.result;
    }
    function D(e) {
      if (typeof e == "string") return e;
      var t = h(e) ? e.message : null;
      return typeof t == "string" ? t : "VM rejected the request";
    }
    function x(e) {
      var t;
      if (h(e)) {
        var n = (t = e.error) != null ? t : null,
          r = h(n) ? n.code : null,
          o = typeof r == "string" && r !== "" ? r : e.code;
        return typeof o == "string" && o !== "" ? o : void 0;
      }
    }
    ((l.CUSTOM_CONNECTOR_NAME_TAKEN = p), (l.WAWebHatchVmApi = C));
  },
  98,
);
