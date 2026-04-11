__d(
  "WAWebWindowsFeedbackModal.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLoggerDebugInfo",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebSendSupportRequestJob",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAppRatingSubmitter",
    "useWAWebDebouncedCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = 10,
      h = 5e3,
      y = {
        learnMoreLink: { color: "x1v5yvga", $$css: !0 },
        feedbackField: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderBottomWidth: "xv7zg05",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "xhl97hz x1vtqnfi",
          $$css: !0,
        },
      };
    function C(t) {
      var a = t.entityId,
        i = t.onCancel,
        l = t.onFailure,
        c = t.onSend,
        m = r("useWAWebUnmountSignal")(),
        C = r("useWAWebAppRatingSubmitter")(),
        b = f(""),
        v = b[0],
        S = b[1],
        R = f(null),
        L = R[0],
        E = R[1],
        k = f(!1),
        I = k[0],
        T = k[1],
        D = f(!1),
        x = D[0],
        $ = D[1],
        P = _(null),
        N = o("WAWebABProps").getABPropConfigValue(
          "hybrid_flytrap_feedback_enabled",
        );
      p(function () {
        var e;
        ((e = P.current) == null || e.restoreFocus(),
          $(o("WAWebABPropsSaga").getIsSagaV1Enabled()));
      }, []);
      var M = function (t) {
          return t.length >= g;
        },
        w = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            T(!0);
            var t = M(v),
              n = s
                ._(
                  /*BTDS*/ "Feedback about the new Windows Beta app: {user-feedback}",
                  [s._param("user-feedback", v)],
                )
                .toString();
            if (t) {
              c == null || c({ description: n });
              var a = o("WAWebABPropsSaga").getIsSagaV1Enabled(),
                i = yield O(a),
                p = JSON.stringify(i);
              if (
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Feedback: Sending windows feedback with deviceInfo=",
                      ":",
                      "",
                    ])),
                  !0,
                  p != null ? p : "n/a",
                ),
                N)
              )
                try {
                  yield C(
                    { rating: -1, feedback: v },
                    m,
                    function () {
                      (o("WAWebToastManager").ToastManager.open(
                        d.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Feedback submitted"),
                        }),
                      ),
                        c == null || c({ description: n }));
                    },
                    function () {
                      (o("WAWebToastManager").ToastManager.open(
                        d.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Submission error occurred. Please try again.",
                          ),
                        }),
                      ),
                        l && l({ description: n }),
                        T(!1));
                    },
                    "WhatsApp Windows Hybrid Feedback",
                  );
                } catch (e) {
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Feedback: rating submitter error: ",
                        "",
                      ])),
                    String(e),
                  ),
                    l && l({ description: n }),
                    T(!1));
                }
              else
                r("WAPromiseRaceAbort")(
                  o("WAWebSendSupportRequestJob").sendSupportRequest(n, p),
                  m,
                )
                  .then(function (e) {
                    m.aborted ||
                      (e.message != null
                        ? (o("WAWebModalManager").ModalManager.close(),
                          o("WAWebToastManager").ToastManager.open(
                            d.jsx(o("WAWebToast.react").Toast, {
                              msg: s._(/*BTDS*/ "Feedback submitted to Meta"),
                            }),
                          ))
                        : l && (l({ description: n }), T(!1)));
                  })
                  .catch(
                    o("WAAbortError").catchAbort(function () {
                      m.aborted || T(!1);
                    }),
                  );
            } else E(s._(/*BTDS*/ "Please add more to your description"));
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        A = r("useWAWebDebouncedCallback")(w, 100),
        F = function () {
          (i == null || i(), o("WAWebModalManager").ModalManager.close());
        },
        O = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebLoggerDebugInfo").getDebugInfo({
                supportTag: "wa-windows-hybrid",
                convertFields: !0,
                addUserAgentDetails: !0,
                entityId: a,
              }),
              n = "";
            return (
              e && (n = "saga"),
              n && (t.sagaKey = n),
              (t.saga_copy = x),
              t
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        B = function (t) {
          var e = t.text;
          S(e);
        },
        W = { enter: o("WAWebStopEvent").stopPropagation };
      I && (W.esc = o("WAWebStopEvent").stopPropagation);
      var q = s._(/*BTDS*/ "Tell us about your experience using this app...");
      return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: N
          ? s._(/*BTDS*/ "Send feedback")
          : s._(/*BTDS*/ "Share WhatsApp Beta feedback"),
        okDisabled: !M(v) || I,
        okSpinner: I,
        okText: r("WAWebFbtCommon")("Submit"),
        onOK: A,
        onCancel: I ? void 0 : F,
        children: d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: W,
          children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              d.jsx(o("WAWebRichTextField.react").RichTextField, {
                testid: void 0,
                error: L,
                maxLength: h,
                onChange: B,
                inputPlaceholder: q,
                ariaLabel: q,
                ref: P,
                value: v,
                minVisibleLines: N ? 3 : 2,
                maxVisibleLines: 7,
                multiline: !0,
                enterIsNewLine: !0,
                hideSpacer: !0,
                hideFloatingLabel: !0,
                theme: N ? "gray-background" : "contact-us",
                containerXstyle: N ? y.feedbackField : void 0,
              }),
              d.jsx(r("WAWebFlexItem.react"), {
                grow: 1,
                children: d.jsxs(o("WAWebText.react").WAWebTextSmall, {
                  children: [
                    N
                      ? s._(
                          /*BTDS*/ "Your response is anonymous and will be used to help improve WhatsApp. By continuing, you allow WhatsApp Support to review technical information about your account. Your personal messages and calls remain end-to-end encrypted.",
                        )
                      : s._(
                          /*BTDS*/ "By continuing, you allow WhatsApp Support to review technical information about your account to help improve WhatsApp. Your personal messages and calls remain end-to-end encrypted.",
                        ),
                    " ",
                    d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: N
                        ? o(
                            "WAWebFaqUrl",
                          ).getSupportChatSafetyFaqUrlWithPlatform(
                            "windows-desktop",
                            "platform_switcher",
                          )
                        : o("WAWebFaqUrl").getSupportChatFaqUrl(),
                      xstyle: y.learnMoreLink,
                      children: r("WAWebFbtCommon")("Learn more"),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
