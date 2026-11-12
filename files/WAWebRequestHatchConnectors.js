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
      m = 5,
      p = 50,
      _ = 5,
      f = 0;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ++f,
            n = Z(),
            r = o("WAWebHatchApiKeyGating").getHatchDeclaredConnectActions(),
            a = yield G(
              function (e) {
                return e.connectors(r, { timeoutMs: c });
              },
              "catalog",
              e,
            ),
            i = o("WAWebHatchConnectorsListDecoder").decodeHatchConnectorsList(
              a,
            );
          if (i == null) throw Y("malformed_catalog", a);
          var l =
            r.length === 0 &&
            o("WAWebHatchGating").getHatchSupportedConnectActions().length > 0
              ? i.filter(function (e) {
                  return e.state === "connected";
                })
              : i;
          return (J(t, n, l), l);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (u || (u = n("Promise"))).all([
              G(
                function (e) {
                  return e.connectorsHomepage(m, { timeoutMs: c });
                },
                "homepage",
                e,
              ),
              t != null ? t : g(e),
            ]),
            a = r[0],
            i = r[1],
            l = o(
              "WAWebHatchConnectorsHomepageDecoder",
            ).decodeHatchConnectorsHomepage(a);
          if (l == null) throw Y("malformed_homepage", a);
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
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return L(
            function (e, t) {
              return e.connectedConnectors(p, t, { timeoutMs: c });
            },
            "connected_catalog",
            e,
            t,
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return L(
            function (t, n) {
              return t.categoryConnectors(e, p, n, { timeoutMs: c });
            },
            "category_catalog",
            t,
            n,
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = yield (u || (u = n("Promise"))).all([
                k(e, t, null, [], _, r),
                a != null ? a : g(r),
              ]),
              l = i[0],
              s = i[1];
            return o(
              "WAWebHatchConnectorsEligibility",
            ).listHatchConnectorsInCatalog(l, s);
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r, o, a) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield G(
                function (t) {
                  return e(t, n);
                },
                t,
                i,
              ),
              s = o(
                "WAWebHatchConnectorsListDecoder",
              ).decodeHatchConnectorsPage(l);
            if (s == null) throw Y("malformed_" + t, l);
            var u = n == null ? r : [].concat(r, [n]),
              c = s.nextCursor;
            return c == null || a <= 1 || u.includes(c)
              ? s.connectors
              : [].concat(s.connectors, yield k(e, t, c, u, a - 1, i));
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ++f,
            r = Z(),
            a = yield (u || (u = n("Promise"))).allSettled([
              G(
                function (e) {
                  return e.settingsConnectors({ timeoutMs: c });
                },
                "settings_catalog",
                e,
              ),
              G(
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
          if (s == null) throw Y("malformed_settings_catalog", i.value);
          if ((J(t, r, s), l.status === "rejected")) throw l.reason;
          return o(
            "WAWebHatchConnectorsEligibility",
          ).listHatchPermissionsConnectors(
            s,
            o(
              "WAWebHatchPermissionConnectorsDecoder",
            ).decodeHatchPermissionConnectors(l.value),
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield G(
              function (t) {
                return t.connectorPermissions(e, { timeoutMs: c });
              },
              "permissions",
              t,
            ),
            r = o(
              "WAWebHatchConnectorPermissionsDecoder",
            ).decodeHatchConnectorPermissions(n);
          if (r == null) throw Y("malformed_permissions", n);
          return r;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield Q("connect_info", t),
            r = yield W(n),
            a = yield j(
              n,
              function (t) {
                return t.connectorConnectInfo(e, r, { timeoutMs: c });
              },
              "connect_info",
            ),
            i = o("WAWebHatchConnectInfoDecoder").decodeHatchConnectInfo(a);
          if (i == null) throw Y("malformed_connect_info", null);
          return babelHelpers.extends({}, i, { action: ee(i.action) });
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (yield P(e, t)).action;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield G(
              function (t) {
                return t.foaAccounts(e, { timeoutMs: c });
              },
              "foa_accounts",
              t,
            ),
            r = o("WAWebHatchFoaAccountsDecoder").decodeHatchFoaAccounts(n, e);
          if (r == null) throw Y("malformed_foa_accounts", null);
          return r;
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield Q("chats", e);
          } catch (e) {
            return H(e);
          }
          return W(t);
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield j(
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
            if (n == null) throw Y("malformed_chats", null);
            return n.chatId;
          } catch (e) {
            return H(e);
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield G(
              function (t) {
                return t.connectorAccounts(e, { timeoutMs: c });
              },
              "accounts",
              t,
            ),
            r = o(
              "WAWebHatchConnectorAccountsDecoder",
            ).decodeHatchConnectorAccounts(n);
          if (r == null) throw Y("malformed_accounts", null);
          return r;
        })),
        V.apply(this, arguments)
      );
    }
    function H(t) {
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
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return j(yield Q(t, n), e, t);
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield t(e);
          if ((r.kind === "Failure" && (r = yield t(e)), r.kind !== "Ok"))
            throw Y(n + "_" + r.kind.toLowerCase(), r);
          return r.value;
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            t != null ? t : new AbortController().signal,
          );
          if ((t == null ? void 0 : t.aborted) === !0)
            throw new (o("WAAbortError").AbortError)();
          if (n.kind === "ready") return n.api;
          throw Y(e + "_no_session", n);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
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
    function J(e, t, n) {
      e === f && t === Z() && r("WAWebHatchConnectorsSnapshot").replace(n);
    }
    function Z() {
      var e, t;
      return (e =
        (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : t.channelFbid) != null
        ? e
        : null;
    }
    function ee(e) {
      if (e.kind === "unsupported") return e;
      var t = o("WAWebHatchApiKeyGating").getHatchDeclaredConnectActions();
      return o("WAWebHatchGating").getHatchSupportedConnectActions().length ===
        0 || t.includes(e.kind)
        ? e
        : { kind: "unsupported", wireType: e.kind };
    }
    ((l.CONNECTORS_TIMEOUT_MS = c),
      (l.requestHatchConnectors = g),
      (l.requestHatchConnectorsHomepage = y),
      (l.requestHatchConnectedConnectors = b),
      (l.requestHatchCategoryConnectors = S),
      (l.requestHatchPermissionsConnectors = T),
      (l.requestHatchConnectorPermissions = x),
      (l.requestHatchConnectInfo = P),
      (l.requestHatchConnectAction = M),
      (l.requestHatchFoaAccounts = A),
      (l.requestHatchWhatsAppSessionId = O),
      (l.readHatchWhatsAppSessionId = W),
      (l.requestHatchConnectorAccounts = U));
  },
  98,
);
