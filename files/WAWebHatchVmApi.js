__d(
  "WAWebHatchVmApi",
  ["WAWebHatchOAuthCallbackClient", "WAWebHatchVmTransport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = 3e4,
      u = 3e4,
      c = 400,
      d = "already exists; set replace_existing=true",
      m = "custom_connector_name_taken",
      p = {
        detail: "Scheduled task ID is invalid",
        kind: "Failure",
        reason: "TRANSPORT",
      },
      _ = { detail: "Approval ID is invalid", kind: "Failure" },
      f = {
        detail: "Peer image ID is invalid",
        kind: "Failure",
        reason: "TRANSPORT",
      };
    function g(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function h(e, t, n, r) {
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
    var y = (function () {
      function t(e) {
        this.$1 = e;
      }
      var n = t.prototype;
      return (
        (n.activityPage = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_PAGE(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.activityGoalSteps = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_GOAL_STEPS(t, n, r),
            babelHelpers.extends({}, a, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.activityGoalStepReport = function (t, n, r, a) {
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
        (n.openActivitySubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: b({ capabilities: [].concat(t) }),
              method: "POST",
              path: o("WAWebHatchVmTransport").JarvisPaths.ACTIVITY_SUBSCRIBE,
            },
            n,
          );
        }),
        (n.openDataExport = function (t) {
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
        (n.scheduledTasks = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASKS,
            babelHelpers.extends({}, t, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.deleteScheduledTask = function (t, n) {
          var e = o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASK(t);
          return e == null
            ? Promise.resolve(p)
            : this.request(
                "DELETE",
                e,
                babelHelpers.extends({}, n, {
                  allowEmptySuccess: !0,
                  responseShape: "flat-or-envelope",
                }),
              );
        }),
        (n.scheduledTaskRuns = function (t, n, r) {
          var e = o("WAWebHatchVmTransport").JarvisPaths.SCHEDULED_TASK_RUNS(
            t,
            n,
          );
          return e == null
            ? Promise.resolve(p)
            : this.request(
                "GET",
                e,
                babelHelpers.extends({}, r, {
                  responseShape: "flat-or-envelope",
                }),
              );
        }),
        (n.approvalDetail = function (t, n) {
          var e = o("WAWebHatchVmTransport").JarvisPaths.APPROVAL_DETAIL(t);
          return e == null
            ? Promise.resolve(_)
            : this.request(
                "GET",
                e,
                babelHelpers.extends({}, n, { service: "sentinel" }),
              );
        }),
        (n.approvalHistory = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.APPROVALS_HISTORY(t, n),
            babelHelpers.extends({}, r, { service: "sentinel" }),
          );
        }),
        (n.artifacts = function () {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_LIST,
          );
        }),
        (n.computerContext = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.COMPUTER_CONTEXT,
            t,
          );
        }),
        (n.computerScreenshot = async function (n, r) {
          var t,
            o = await this.$1.send({
              method: "GET",
              path: n,
              timeoutMs: (t = r == null ? void 0 : r.timeoutMs) != null ? t : e,
            });
          e: {
            var a = o;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "failure" &&
              "detail" in a &&
              "reason" in a
            ) {
              var i = a.detail,
                l = a.reason;
              return { detail: i, kind: "Failure", reason: l };
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "rejected" &&
              "detail" in a
            ) {
              var s = a.detail;
              return { detail: s, kind: "Rejected" };
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "unreadable" &&
              "detail" in a
            ) {
              var u = a.detail;
              return { detail: u, kind: "Unreadable" };
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "response" &&
              "body" in a &&
              "statusCode" in a
            ) {
              var c = a.body,
                d = a.statusCode;
              return d < 200 || d >= 300
                ? h("VM returned HTTP " + d, d)
                : { kind: "Ok", value: c };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a,
            );
          }
        }),
        (n.peerImage = function (t, n, r, a) {
          var e = o("WAWebHatchVmTransport").JarvisPaths.PEERS_IMAGE(t, n, r);
          return e == null ? Promise.resolve(f) : this.computerScreenshot(e, a);
        }),
        (n.peerConnectIntroImage = function (t, n) {
          return this.computerScreenshot(
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECT_INTRO_IMAGE(t),
            n,
          );
        }),
        (n.registerCapabilities = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CLIENT_REGISTER_CAPABILITIES,
            { body: b(t), responseShape: "flat-or-envelope" },
          );
        }),
        (n.connectors = function (t, n) {
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
        (n.connectorsHomepage = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_HOMEPAGE(t),
            n,
          );
        }),
        (n.categoryConnectors = function (t, n, r, a) {
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
        (n.connectedConnectors = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_LIST_CONNECTED(
              t,
              n,
            ),
            r,
          );
        }),
        (n.settingsConnectors = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTORS_LIST_SETTINGS,
            t,
          );
        }),
        (n.connector = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_GET(t),
            n,
          );
        }),
        (n.connectorPermissions = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_PERMISSIONS(t),
            n,
          );
        }),
        (n.connectorSetPermissions = function (t, n) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_POLICY(t),
            { body: b({ connector: t, methods: n }), service: "sentinel" },
          );
        }),
        (n.connectorResetPermissions = function (t) {
          return this.request(
            "DELETE",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_POLICY(t),
            {
              body: b({ reason: "settings_permissions_connector_reset" }),
              service: "sentinel",
            },
          );
        }),
        (n.permissions = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS,
            babelHelpers.extends({}, t, { service: "sentinel" }),
          );
        }),
        (n.permissionSettings = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SETTINGS,
            babelHelpers.extends({}, t, { service: "sentinel" }),
          );
        }),
        (n.permissionSetSettings = function (t) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SETTINGS,
            { body: b(t), service: "sentinel" },
          );
        }),
        (n.activePermissions = function (t, n) {
          return this.request(
            "GET",
            t,
            babelHelpers.extends({}, n, { service: "sentinel" }),
          );
        }),
        (n.permissionInventory = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_INVENTORY,
            babelHelpers.extends({}, t, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.scopedPermissions = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SCOPE(t, n, r),
            babelHelpers.extends({}, a, { service: "sentinel" }),
          );
        }),
        (n.scopedPermissionSetMode = function (t, n, r) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_SCOPE(t, n),
            { body: b(r), service: "sentinel" },
          );
        }),
        (n.activePermissionSetMode = function (t) {
          return this.request(
            "PATCH",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_ACTIVE,
            { body: b(t), service: "sentinel" },
          );
        }),
        (n.permissionRevoke = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_REVOKE,
            {
              body: b(
                babelHelpers.extends({}, t, {
                  actor: "web",
                  reason: "manage_approvals_revoke",
                }),
              ),
              service: "sentinel",
            },
          );
        }),
        (n.permissionsReset = function () {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PERMISSIONS_RESET,
            {
              body: b({ reason: "settings_permissions_reset" }),
              service: "sentinel",
            },
          );
        }),
        (n.connectorScopeLink = function (t, n) {
          var e = o(
            "WAWebHatchOAuthCallbackClient",
          ).getHatchOAuthCallbackClient();
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_SCOPE_LINK(t, n),
            { body: b(e == null ? {} : { callback_client: e }) },
          );
        }),
        (n.connectorConnectInfo = function (t, n, r) {
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
        (n.foaAccounts = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.FOA_ACCOUNTS(t),
            babelHelpers.extends({}, n, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.foaAuthCallback = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.FOA_AUTH_CALLBACK,
            babelHelpers.extends({}, r, {
              body: b({ account_ids: Array.from(new Set(n)), provider: t }),
              service: "authd",
            }),
          );
        }),
        (n.apiKeyAuthCallback = function (t, n, r, a) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.API_KEY_AUTH_CALLBACK,
            babelHelpers.extends({}, a, {
              body: b(
                r == null
                  ? { key: n, provider: t }
                  : { key: n, provider: t, session_id: r },
              ),
              service: "authd",
            }),
          );
        }),
        (n.consentAuthCallback = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONSENT_AUTH_CALLBACK,
            babelHelpers.extends({}, r, {
              allowEmptySuccess: !0,
              body: b(
                n == null ? { provider: t } : { provider: t, session_id: n },
              ),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (n.connectorConnect = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_CONNECT(t),
            babelHelpers.extends({}, r, {
              body: b(n == null ? {} : { session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (n.connectorDisconnect = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_DISCONNECT(t),
            { body: b(n == null ? {} : { session_id: n }) },
          );
        }),
        (n.peerInviteOpen = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPEN,
            babelHelpers.extends({}, r, {
              body: b({ invitation_url: t, session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (n.peerInviteAccept = function (t, n, r) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_ACCEPT,
            babelHelpers.extends({}, r, {
              body: b({ fragment: t, session_id: n }),
              responseShape: "flat-or-envelope",
            }),
          );
        }),
        (n.peerContacts = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONTACTS(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.chats = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_LIST,
            t,
          );
        }),
        (n.chatMessage = function (t, n, r) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_MESSAGE(t, n),
            babelHelpers.extends({}, r, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.chatHistory = function (t, n, r, a) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CHATS_HISTORY(t, n, r),
            babelHelpers.extends({}, a, { responseShape: "flat-or-envelope" }),
          );
        }),
        (n.openChatSubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: b({ chat_id: t }),
              method: "POST",
              path: o("WAWebHatchVmTransport").JarvisPaths.CHATS_SUBSCRIBE,
            },
            n,
          );
        }),
        (n.oauthCallback = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.OAUTH_CALLBACK,
            {
              body: b(babelHelpers.extends({ auth_intent: "connect" }, t)),
              responseShape: "flat-or-envelope",
              service: "authd",
            },
          );
        }),
        (n.credentialCatalog = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG(t),
            { service: "authd", timeoutMs: u },
          );
        }),
        (n.credentialDetails = function (t) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DETAILS(
              t,
            ),
            { service: "authd", timeoutMs: u },
          );
        }),
        (n.credentialCapture = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CAPTURE,
            { body: b(t), service: "authd", timeoutMs: u },
          );
        }),
        (n.credentialUpdate = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_UPDATE,
            { body: b(t), service: "authd", timeoutMs: u },
          );
        }),
        (n.credentialDelete = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CREDENTIALS_CATALOG_DELETE,
            {
              body: b({ credential_type: "browser", id: t }),
              service: "authd",
              timeoutMs: u,
            },
          );
        }),
        (n.customConnectorRegister = async function (t) {
          var e = await this.exchange(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CUSTOM_CONNECTORS_REGISTER,
            { body: b(t), service: "authd", timeoutMs: u },
          );
          return C(e)
            ? h("custom connector name already registered", c, void 0, m)
            : v(e, "authd", "service-default", !1);
        }),
        (n.customConnectorList = function () {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CUSTOM_CONNECTORS_LIST,
            { body: b({}), service: "authd", timeoutMs: u },
          );
        }),
        (n.connectorAccounts = function (t, n) {
          return this.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNTS(t),
            n,
          );
        }),
        (n.connectorAccountsLink = function (t) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNTS_LINK(
              t,
              o("WAWebHatchOAuthCallbackClient").getHatchOAuthCallbackClient(),
            ),
            { body: b({}) },
          );
        }),
        (n.connectorAccountUnlink = function (t, n) {
          return this.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.CONNECTOR_ACCOUNT_UNLINK(
              t,
              n,
            ),
            { body: b({}) },
          );
        }),
        (n.openEventSubscription = function (t, n) {
          return this.$1.openStream(
            {
              accept: "application/x-ndjson",
              body: b({}),
              method: "POST",
              path: t,
            },
            n,
          );
        }),
        (n.browserTaskPost = function (t, n) {
          return this.$1.send({
            method: "POST",
            path: o("WAWebHatchVmTransport").JarvisPaths.BROWSER_TASK(t, n),
            timeoutMs: s,
          });
        }),
        (n.openBrowserTaskAttach = function (t, n) {
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
        (n.request = async function (t, n, r) {
          var e,
            o,
            a = await this.exchange(t, n, r);
          return v(
            a,
            (e = r == null ? void 0 : r.service) != null ? e : "daemon",
            (o = r == null ? void 0 : r.responseShape) != null
              ? o
              : "service-default",
            (r == null ? void 0 : r.allowEmptySuccess) === !0,
          );
        }),
        (n.exchange = function (n, r, o) {
          var t,
            a = (t = o == null ? void 0 : o.timeoutMs) != null ? t : e;
          return !Number.isFinite(a) || a <= 0
            ? Promise.resolve({
                detail: "VM request timeout is invalid",
                kind: "failure",
                reason: "TRANSPORT",
              })
            : this.$1.send({
                body: o == null ? void 0 : o.body,
                method: n,
                path: r,
                service: o == null ? void 0 : o.service,
                timeoutMs: a,
              });
        }),
        t
      );
    })();
    function C(e) {
      return (
        e.kind === "response" &&
        e.statusCode === c &&
        new TextDecoder().decode(e.body).includes(d)
      );
    }
    function b(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    function v(e, t, n, r) {
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
          return S(u, c, t, n, r);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      }
    }
    function S(e, t, n, r, o) {
      var a = t < 200 || t >= 300,
        i = n !== "daemon";
      if (L(e, a, i, o)) return { kind: "Ok", value: null };
      var l;
      try {
        l = JSON.parse(new TextDecoder().decode(e));
      } catch (e) {
        return a
          ? h("VM returned HTTP " + t, t)
          : { detail: "VM returned malformed JSON", kind: "Unreadable" };
      }
      var s = i || r === "flat-or-envelope",
        u = s ? l : void 0;
      return E(l, i, r) ? k(l, t, u) : R(u, t, a);
    }
    function R(e, t, n) {
      return n
        ? h("VM returned HTTP " + t, t, e, D(e != null ? e : null))
        : e === void 0
          ? { detail: "VM returned an invalid envelope", kind: "Unreadable" }
          : { kind: "Ok", value: e };
    }
    function L(e, t, n, r) {
      return !t && e.length === 0 && (n || r);
    }
    function E(e, t, n) {
      var r;
      return (t && n !== "flat-or-envelope") ||
        !g(e) ||
        typeof e.ok != "boolean"
        ? !1
        : e.ok === !1 ||
            n === "service-default" ||
            e.result !== void 0 ||
            typeof e.error == "string" ||
            g((r = e.error) != null ? r : null);
    }
    function k(e, t, n) {
      if (e.ok !== !0) {
        var r;
        return h(T((r = e.error) != null ? r : null), t, I(e, n), D(e));
      }
      return t < 200 || t >= 300
        ? h("VM returned HTTP " + t, t, e.result)
        : e.result === void 0
          ? { detail: "VM envelope omitted result", kind: "Unreadable" }
          : { kind: "Ok", value: e.result };
    }
    function I(e, t) {
      return e.result === void 0 && e.error === void 0 ? t : e.result;
    }
    function T(e) {
      if (typeof e == "string") return e;
      var t = g(e) ? e.message : null;
      return typeof t == "string" ? t : "VM rejected the request";
    }
    function D(e) {
      var t;
      if (g(e)) {
        var n = (t = e.error) != null ? t : null,
          r = g(n) ? n.code : null,
          o = typeof r == "string" && r !== "" ? r : e.code;
        return typeof o == "string" && o !== "" ? o : void 0;
      }
    }
    ((l.CUSTOM_CONNECTOR_NAME_TAKEN = m), (l.WAWebHatchVmApi = y));
  },
  98,
);
