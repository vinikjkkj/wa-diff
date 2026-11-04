__d(
  "WAWebBrResolvePaymentAccountLinkQuery",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBrAddPixKeyDeepLinkPrefill",
    "WAWebBrAddPixKeyPartnerDirectory",
    "WAWebBrResolvePaymentAccountLinkQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 15e3,
      c = 100,
      d = { kind: "rejected" },
      m = { kind: "unavailable" },
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBrResolvePaymentAccountLinkQuery.graphql"));
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n, a;
          try {
            a = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebRelayClient").fetchQuery(
                p,
                { request: { code: { sensitive_string_value: e } } },
                { environmentType: "whatsapp_web" },
              ),
              u,
              "payment account link resolve timed out",
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "br_add_pix_key_code: resolve failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).name,
                )
                .sendLogs("br-add-pix-key-code-resolve-failed"),
              m
            );
          }
          var i = (t = a) == null ? void 0 : t.xwa_resolve_payment_account_link;
          return i == null ? d : (n = g(i)) != null ? n : d;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = e.payment_account,
        n = o("WAWebUserPrefsTypes").PixKeyType.cast(
          t == null ? void 0 : t.identifier_type,
        ),
        r = t == null ? void 0 : t.identifier_value,
        a = e.business_jid;
      if (
        (t == null ? void 0 : t.account_type) !== "PIX" ||
        n == null ||
        r == null ||
        !o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptablePixKeyValue(r, n) ||
        a == null ||
        a === ""
      )
        return null;
      var i = t.holder_name,
        l = e.verified_name;
      return {
        businessWid: h(a),
        kind: "offered",
        prefill: {
          keyType: n,
          name:
            i != null &&
            o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptableCappedText(
              i,
              o("WAWebBrAddPixKeyDeepLinkPrefill").MAX_NAME_LENGTH,
            )
              ? i
              : void 0,
          value: r,
        },
        verifiedName:
          l != null &&
          o("WAWebBrAddPixKeyDeepLinkPrefill").isAcceptableCappedText(l, c)
            ? l
            : "",
      };
    }
    function h(e) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(
          o("WAWebBrAddPixKeyPartnerDirectory").toWebJid(e),
        );
      } catch (e) {
        return null;
      }
    }
    ((l.RESOLVE_TIMEOUT_MS = u), (l.resolvePaymentAccountLink = _));
  },
  98,
);
