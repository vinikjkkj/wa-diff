__d(
  "WAWebRequestHatchConnectors",
  [
    "WAAbortError",
    "WALogger",
    "WAWebHatchApiKeyGating",
    "WAWebHatchBoundChatDecoder",
    "WAWebHatchConnectInfoDecoder",
    "WAWebHatchConnectorAccountsDecoder",
    "WAWebHatchConnectorPermissionsDecoder",
    "WAWebHatchConnectorsEligibility",
    "WAWebHatchConnectorsHomepageDecoder",
    "WAWebHatchConnectorsListDecoder",
    "WAWebHatchConnectorsSnapshot",
    "WAWebHatchFoaAccountsDecoder",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchPermissionConnectorsDecoder",
    "WAWebHatchVmConnection",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = 3e3,
      d = 50,
      m = 5,
      p = 0;
    async function _(e) {
      var t = ++p,
        n = M(),
        r = o("WAWebHatchApiKeyGating").getHatchDeclaredConnectActions(),
        a = await D(
          function (e) {
            return e.connectors(r, { timeoutMs: u });
          },
          "catalog",
          e,
        ),
        i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(a);
      if (i == null) throw P("malformed_catalog", a);
      var l =
        r.length === 0 &&
        o("WAWebHatchGating").getHatchSupportedConnectActions().length > 0
          ? i.filter(function (e) {
              return e.state === "connected";
            })
          : i;
      return (N(t, n, l), l);
    }
    async function f(e, t) {
      var n = await Promise.all([
          D(
            function (e) {
              return e.connectorsHomepage(
                o("WAWebHatchConnectorsEligibility")
                  .HATCH_HOMEPAGE_PREVIEW_LIMIT,
                { timeoutMs: u },
              );
            },
            "homepage",
            e,
          ),
          t != null ? t : _(e),
        ]),
        r = n[0],
        a = n[1],
        i = o(
          "WAWebHatchConnectorsHomepageDecoder",
        ).decodeHatchConnectorsHomepage(r);
      if (i == null) throw P("malformed_homepage", r);
      return babelHelpers.extends({}, i, {
        featured: o(
          "WAWebHatchConnectorsEligibility",
        ).listHatchConnectorsInCatalog(i.featured, a),
        categories: i.categories.map(function (e) {
          return babelHelpers.extends({}, e, {
            connectors: o(
              "WAWebHatchConnectorsEligibility",
            ).listHatchConnectorsInCatalog(e.connectors, a),
          });
        }),
      });
    }
    async function g(e, t) {
      return y(
        function (e, t) {
          return e.connectedConnectors(d, t, { timeoutMs: u });
        },
        "connected_catalog",
        e,
        t,
      );
    }
    async function h(e, t, n) {
      return y(
        function (t, n) {
          return t.categoryConnectors(e, d, n, { timeoutMs: u });
        },
        "category_catalog",
        t,
        n,
      );
    }
    async function y(e, t, n, r) {
      var a = await Promise.all([
          C(e, t, null, [], m, n),
          r != null ? r : _(n),
        ]),
        i = a[0],
        l = a[1];
      return o("WAWebHatchConnectorsEligibility").listHatchConnectorsInCatalog(
        i,
        l,
      );
    }
    async function C(e, t, n, r, a, i) {
      var l = await D(
          function (t) {
            return e(t, n);
          },
          t,
          i,
        ),
        s = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsPage(l);
      if (s == null) throw P("malformed_" + t, l);
      var u = n == null ? r : [].concat(r, [n]),
        c = s.nextCursor;
      return c == null || a <= 1 || u.includes(c)
        ? s.connectors
        : [].concat(s.connectors, await C(e, t, c, u, a - 1, i));
    }
    async function b(e) {
      var t = ++p,
        n = M(),
        r = await Promise.allSettled([
          D(
            function (e) {
              return e.settingsConnectors({ timeoutMs: u });
            },
            "settings_catalog",
            e,
          ),
          D(
            function (e) {
              return e.permissions({ timeoutMs: u });
            },
            "sentinel_permissions",
            e,
          ),
        ]),
        a = r[0],
        i = r[1];
      if (a.status === "rejected") throw a.reason;
      var l = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
        a.value,
      );
      if (l == null) throw P("malformed_settings_catalog", a.value);
      if ((N(t, n, l), i.status === "rejected")) throw i.reason;
      return o(
        "WAWebHatchConnectorsEligibility",
      ).listHatchPermissionsConnectors(
        l,
        o(
          "WAWebHatchPermissionConnectorsDecoder",
        ).decodeHatchPermissionConnectors(i.value),
      );
    }
    async function v(e, t) {
      var n = await D(
          function (t) {
            return t.connectorPermissions(e, { timeoutMs: u });
          },
          "permissions",
          t,
        ),
        r = o(
          "WAWebHatchConnectorPermissionsDecoder",
        ).decodeHatchConnectorPermissions(n);
      if (r == null) throw P("malformed_permissions", n);
      return r;
    }
    async function S(e, t) {
      var n = await $("connect_info", t),
        r = await k(n),
        a = await x(
          n,
          function (t) {
            return t.connectorConnectInfo(e, r, { timeoutMs: u });
          },
          "connect_info",
        ),
        i = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectInfo(a);
      if (i == null) throw P("malformed_connect_info", null);
      return babelHelpers.extends({}, i, { action: w(i.action) });
    }
    async function R(e, t) {
      return (await S(e, t)).action;
    }
    async function L(e, t) {
      var n = await D(
          function (t) {
            return t.foaAccounts(e, { timeoutMs: u });
          },
          "foa_accounts",
          t,
        ),
        r = o("WAWebHatchFoaAccountsDecoder").decodeHatchFoaAccounts(n, e);
      if (r == null) throw P("malformed_foa_accounts", null);
      return r;
    }
    async function E(e) {
      var t;
      try {
        t = await $("chats", e);
      } catch (e) {
        return T(e);
      }
      return k(t);
    }
    async function k(e) {
      try {
        var t = await x(
            e,
            function (e) {
              return e.chats({ timeoutMs: c });
            },
            "chats",
          ),
          n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
            t,
            "whatsapp",
          );
        if (n == null) throw P("malformed_chats", null);
        return n.chatId;
      } catch (e) {
        return T(e);
      }
    }
    async function I(e, t) {
      var n = await D(
          function (t) {
            return t.connectorAccounts(e, { timeoutMs: u });
          },
          "accounts",
          t,
        ),
        r = o(
          "WAWebHatchConnectorAccountsDecoder",
        ).decodeHatchConnectorAccounts(n);
      if (r == null) throw P("malformed_accounts", null);
      return r;
    }
    function T(t) {
      if (t instanceof o("WAAbortError").AbortError) throw t;
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: session lookup failed, confirmation goes to the primary chat",
              ])),
          )
          .sendLogs("hatch-connectors-session-lookup-failed"),
        null
      );
    }
    async function D(e, t, n) {
      return x(await $(t, n), e, t);
    }
    async function x(e, t, n) {
      var r = await t(e);
      if ((r.kind === "Failure" && (r = await t(e)), r.kind !== "Ok"))
        throw P(n + "_" + r.kind.toLowerCase(), r);
      return r.value;
    }
    async function $(e, t) {
      var n = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
        t != null ? t : new AbortController().signal,
      );
      if ((t == null ? void 0 : t.aborted) === !0)
        throw new (o("WAAbortError").AbortError)();
      if (n.kind === "ready") return n.api;
      throw P(e + "_no_session", n);
    }
    function P(e, t) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-connectors: VM read failed reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-connectors-read-failed"),
        r("err")("hatch connectors read failed: %s", e)
      );
    }
    function N(e, t, n) {
      e === p && t === M() && r("WAWebHatchConnectorsSnapshot").replace(n);
    }
    function M() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    function w(e) {
      if (e.kind === "unsupported") return e;
      var t = o("WAWebHatchApiKeyGating").getHatchDeclaredConnectActions();
      return o("WAWebHatchGating").getHatchSupportedConnectActions().length ===
        0 || t.includes(e.kind)
        ? e
        : { kind: "unsupported", wireType: e.kind };
    }
    ((l.CONNECTORS_TIMEOUT_MS = u),
      (l.requestHatchConnectors = _),
      (l.requestHatchConnectorsHomepage = f),
      (l.requestHatchConnectedConnectors = g),
      (l.requestHatchCategoryConnectors = h),
      (l.requestHatchPermissionsConnectors = b),
      (l.requestHatchConnectorPermissions = v),
      (l.requestHatchConnectInfo = S),
      (l.requestHatchConnectAction = R),
      (l.requestHatchFoaAccounts = L),
      (l.requestHatchWhatsAppSessionId = E),
      (l.readHatchWhatsAppSessionId = k),
      (l.requestHatchConnectorAccounts = I));
  },
  98,
);
