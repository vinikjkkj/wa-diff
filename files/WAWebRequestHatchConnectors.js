__d(
  "WAWebRequestHatchConnectors",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3e4,
      d = 3e3,
      m = 50,
      p = 5,
      _ = 0;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ++_,
            n = J(),
            r = o("WAWebHatchApiKeyGating").getHatchDeclaredConnectActions(),
            a = yield H(
              function (e) {
                return e.connectors(r, { timeoutMs: c });
              },
              "catalog",
              e,
            ),
            i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              a,
            );
          if (i == null) throw X("malformed_catalog", a);
          var l =
            r.length === 0 &&
            o("WAWebHatchGating").getHatchSupportedConnectActions().length > 0
              ? i.filter(function (e) {
                  return e.state === "connected";
                })
              : i;
          return (Y(t, n, l), l);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (u || (u = n("Promise"))).all([
              H(
                function (e) {
                  return e.connectorsHomepage(
                    o("WAWebHatchConnectorsEligibility")
                      .HATCH_HOMEPAGE_PREVIEW_LIMIT,
                    { timeoutMs: c },
                  );
                },
                "homepage",
                e,
              ),
              t != null ? t : f(e),
            ]),
            a = r[0],
            i = r[1],
            l = o(
              "WAWebHatchConnectorsHomepageDecoder",
            ).decodeHatchConnectorsHomepage(a);
          if (l == null) throw X("malformed_homepage", a);
          return babelHelpers.extends({}, l, {
            featured: o(
              "WAWebHatchConnectorsEligibility",
            ).listHatchConnectorsInCatalog(l.featured, i),
            categories: l.categories.map(function (e) {
              return babelHelpers.extends({}, e, {
                connectors: o(
                  "WAWebHatchConnectorsEligibility",
                ).listHatchConnectorsInCatalog(e.connectors, i),
              });
            }),
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return R(
            function (e, t) {
              return e.connectedConnectors(m, t, { timeoutMs: c });
            },
            "connected_catalog",
            e,
            t,
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return R(
            function (t, n) {
              return t.categoryConnectors(e, m, n, { timeoutMs: c });
            },
            "category_catalog",
            t,
            n,
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = yield (u || (u = n("Promise"))).all([
                E(e, t, null, [], p, r),
                a != null ? a : f(r),
              ]),
              l = i[0],
              s = i[1];
            return o(
              "WAWebHatchConnectorsEligibility",
            ).listHatchConnectorsInCatalog(l, s);
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r, o, a) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield H(
                function (t) {
                  return e(t, n);
                },
                t,
                i,
              ),
              s = o(
                "WAWebHatchConnectorsListDecoder",
              ).decodeHatchConnectorsPage(l);
            if (s == null) throw X("malformed_" + t, l);
            var u = n == null ? r : [].concat(r, [n]),
              c = s.nextCursor;
            return c == null || a <= 1 || u.includes(c)
              ? s.connectors
              : [].concat(s.connectors, yield E(e, t, c, u, a - 1, i));
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ++_,
            r = J(),
            a = yield (u || (u = n("Promise"))).allSettled([
              H(
                function (e) {
                  return e.settingsConnectors({ timeoutMs: c });
                },
                "settings_catalog",
                e,
              ),
              H(
                function (e) {
                  return e.permissions({ timeoutMs: c });
                },
                "sentinel_permissions",
                e,
              ),
            ]),
            i = a[0],
            l = a[1];
          if (i.status === "rejected") throw i.reason;
          var s = o(
            "WAWebHatchConnectorsListDecoder",
          ).decodeHatchConnectorsList(i.value);
          if (s == null) throw X("malformed_settings_catalog", i.value);
          if ((Y(t, r, s), l.status === "rejected")) throw l.reason;
          return o(
            "WAWebHatchConnectorsEligibility",
          ).listHatchPermissionsConnectors(
            s,
            o(
              "WAWebHatchPermissionConnectorsDecoder",
            ).decodeHatchPermissionConnectors(l.value),
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield H(
              function (t) {
                return t.connectorPermissions(e, { timeoutMs: c });
              },
              "permissions",
              t,
            ),
            r = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(n);
          if (r == null) throw X("malformed_permissions", n);
          return r;
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield K("connect_info", t),
            r = yield B(n),
            a = yield z(
              n,
              function (t) {
                return t.connectorConnectInfo(e, r, { timeoutMs: c });
              },
              "connect_info",
            ),
            i = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectInfo(a);
          if (i == null) throw X("malformed_connect_info", null);
          return babelHelpers.extends({}, i, { action: Z(i.action) });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield $(e, t)).action;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield H(
              function (t) {
                return t.foaAccounts(e, { timeoutMs: c });
              },
              "foa_accounts",
              t,
            ),
            r = o("WAWebHatchFoaAccountsDecoder").decodeHatchFoaAccounts(n, e);
          if (r == null) throw X("malformed_foa_accounts", null);
          return r;
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield K("chats", e);
          } catch (e) {
            return V(e);
          }
          return B(t);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield z(
                e,
                function (e) {
                  return e.chats({ timeoutMs: d });
                },
                "chats",
              ),
              n = o("WAWebHatchBoundChatDecoder").decodeHatchBoundChat(
                t,
                "whatsapp",
              );
            if (n == null) throw X("malformed_chats", null);
            return n.chatId;
          } catch (e) {
            return V(e);
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield H(
              function (t) {
                return t.connectorAccounts(e, { timeoutMs: c });
              },
              "accounts",
              t,
            ),
            r = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(n);
          if (r == null) throw X("malformed_accounts", null);
          return r;
        })),
        U.apply(this, arguments)
      );
    }
    function V(t) {
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
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return z(yield K(t, n), e, t);
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t, n) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield t(e);
          if ((r.kind === "Failure" && (r = yield t(e)), r.kind !== "Ok"))
            throw X(n + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : new AbortController().signal,
          );
          if ((t == null ? void 0 : t.aborted) === !0)
            throw new (o("WAAbortError").AbortError)();
          if (n.kind === "ready") return n.api;
          throw X(e + "_no_session", n);
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
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
    function Y(e, t, n) {
      e === _ && t === J() && r("WAWebHatchConnectorsSnapshot").replace(n);
    }
    function J() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    function Z(e) {
      if (e.kind === "unsupported") return e;
      var t = o("WAWebHatchApiKeyGating").getHatchDeclaredConnectActions();
      return o("WAWebHatchGating").getHatchSupportedConnectActions().length ===
        0 || t.includes(e.kind)
        ? e
        : { kind: "unsupported", wireType: e.kind };
    }
    ((l.CONNECTORS_TIMEOUT_MS = c),
      (l.requestHatchConnectors = f),
      (l.requestHatchConnectorsHomepage = h),
      (l.requestHatchConnectedConnectors = C),
      (l.requestHatchCategoryConnectors = v),
      (l.requestHatchPermissionsConnectors = I),
      (l.requestHatchConnectorPermissions = D),
      (l.requestHatchConnectInfo = $),
      (l.requestHatchConnectAction = N),
      (l.requestHatchFoaAccounts = w),
      (l.requestHatchWhatsAppSessionId = F),
      (l.readHatchWhatsAppSessionId = B),
      (l.requestHatchConnectorAccounts = q));
  },
  98,
);
