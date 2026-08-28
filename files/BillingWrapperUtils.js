__d(
  "BillingWrapperUtils",
  [
    "BillingError",
    "BillingErrorResolution",
    "BillingErrorUtils",
    "BillingHubHelpTrayActions",
    "BillingRootDialogErrorConstants",
    "BillingWizardRootUPLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "buildBillingErrorMessageforRecovery",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a, i, l, s, u, c, d, m) {
      var p,
        _ = a == null ? void 0 : a.action,
        f = i == null ? void 0 : i.action,
        g = l == null ? void 0 : l.action,
        h = s == null || (p = s.link) == null ? void 0 : p.onClick;
      switch (t) {
        case "primary":
          return function () {
            return _ != null ? _() : (e || (e = n("Promise"))).resolve();
          };
        case "secondary":
          return function () {
            if (f != null) return f();
            if ((i == null ? void 0 : i.href) != null)
              return (e || (e = n("Promise"))).resolve();
            throw new (r("BillingError"))(
              "Error on secondary button click",
              "client side unknown error",
              { event_action: "click", event_side: "user_action" },
              { action: "click", document_name: "secondary_button" },
              "error",
            );
          };
        case "tertiary":
          return function () {
            if (g != null) return g();
            if ((l == null ? void 0 : l.href) != null)
              return (e || (e = n("Promise"))).resolve();
            throw new (r("BillingError"))(
              "Error on tertiary button click",
              "client side unknown error",
              { event_action: "click", event_side: "user_action" },
              { action: "click", document_name: "tertiary_button" },
              "error",
            );
          };
        case "back":
          return d != null
            ? function () {
                return d();
              }
            : function () {
                return m("onBack");
              };
        case "other":
          return function () {
            if (u != null) return (e || (e = n("Promise"))).resolve(u());
            throw new (r("BillingError"))(
              "Error on other button click",
              "client side unknown error",
              { event_action: "click", event_side: "user_action" },
              { action: "click", document_name: "other_button" },
              "error",
            );
          };
        case "footer":
          return function () {
            return h != null
              ? (e || (e = n("Promise"))).resolve(h())
              : (e || (e = n("Promise"))).resolve();
          };
        default:
          return c != null
            ? c
            : function () {
                return m("onClose").then(
                  o("BillingHubHelpTrayActions").closeHelpTray,
                );
              };
      }
    }
    function u(e, t, a, i, l, u, c, d, m, p, _, f, g, h, y) {
      var C = s(m, t, a, i, l, p, _, y, e);
      (c(!0),
        C()
          .then(function () {
            c(!1);
          })
          .catch(function (t) {
            var a,
              i,
              l,
              s = o("BillingErrorUtils").buildBillingErrorFromError(
                "client side unknown error",
                { event_action: "unknown", event_side: "client_side" },
                { action: "unknown", document_name: "billing_wrapper" },
                t,
                "critical_error",
              );
            c(!1);
            var u = null;
            if (
              h !== !0 &&
              (t == null ? void 0 : t.sourceState) ===
                "save_credit_card_state_decision"
            ) {
              var m;
              u = r("buildBillingErrorMessageforRecovery")(
                t == null || (m = t.errorPayload) == null
                  ? void 0
                  : m.exception_code,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n;
                  (r("BillingWizardRootUPLogger").logClickEvent(
                    "error_recovery_via_link",
                    {
                      error_code:
                        t == null || (n = t.errorPayload) == null
                          ? void 0
                          : n.exception_code,
                    },
                  ),
                    yield e("onBack"));
                }),
              );
            }
            var p =
              (t == null || (a = t.errorPayload) == null
                ? void 0
                : a.exception_code) === 1675030;
            if (u != null && !p) {
              var _ = !1;
              if ((t == null ? void 0 : t.paymentIntent) === "ADD_PM") {
                var y;
                _ =
                  g == null || (y = g.guidedexperience) == null
                    ? void 0
                    : y.enable_error_recovery.read();
              } else {
                var C;
                _ =
                  g == null ||
                  (C = g.guidedexperience_error_optimization_catch_all) == null
                    ? void 0
                    : C.enable_error_recovery.read();
              }
              u = _ ? u : null;
            }
            u != null &&
              p &&
              f.UAA_MFT_2026_LAUNCH.getOrDefaultIfPromise() !== !0 &&
              (u = null);
            var b = r(
                "BillingErrorResolution",
              ).parseErrorCodesAndReplaceWithLinks(t),
              v =
                u != null
                  ? u.body
                  : (i = s.description) != null
                    ? i
                    : r("BillingRootDialogErrorConstants").defaultBody,
              S =
                u != null && u.title != null
                  ? u.title
                  : (l = s.summary) != null
                    ? l
                    : r("BillingRootDialogErrorConstants").defaultTitle;
            if (b != null) {
              var R = b.every(function (e) {
                return typeof e == "string";
              });
              R && (v = b.join(""));
            }
            var L =
              u != null
                ? "recovery_message"
                : b != null
                  ? "error_resolution"
                  : s.description != null
                    ? "server_description"
                    : "global_default";
            if (
              (d({
                body: v,
                helpLink:
                  s.helpCenterID != null ? "/help/" + s.helpCenterID : void 0,
                title: S,
              }),
              !s.logged)
            ) {
              var E, k;
              (r("BillingWizardRootUPLogger").logBillingPayloadError(
                s.type,
                s.errorPayload,
                {
                  content_source: L,
                  displayed_body: String(v),
                  displayed_headline: String(S),
                  error_code: String(
                    (E = s.errorPayload.exception_code) != null ? E : "",
                  ),
                  source_state: (k = s.sourceState) != null ? k : "",
                },
                s.errorCategory,
              ),
                (s.logged = !0));
            }
          }));
    }
    l.default = u;
  },
  98,
);
