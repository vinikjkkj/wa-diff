__d(
  "WAWebContactUsModal.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebABPropsSaga",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLoggerDebugInfo",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "WAWebSendSupportRequestJob",
    "WAWebStopEvent",
    "WAWebSupportChatConfirmationModal.react",
    "WAWebSupportChatStrings",
    "WAWebSupportChatUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = 10,
      g = 5e3,
      h = {
        deviceInfo: {
          marginBottom: "xcytdqz",
          marginTop: "x1anpbxc",
          $$css: !0,
        },
        emailLink: { marginTop: "x1anpbxc", $$css: !0 },
      };
    function y(t) {
      var a = t.entityId,
        i = t.onCancel,
        l = t.onEmail,
        u = t.onFailure,
        d = t.onSend,
        y = t.supportTag,
        b = r("useWAWebUnmountSignal")(),
        v = _(""),
        S = v[0],
        R = v[1],
        L = _(null),
        E = L[0],
        k = L[1],
        I = _(!1),
        T = I[0],
        D = I[1],
        x = _(!1),
        $ = x[0],
        P = x[1],
        N = p(null);
      m(function () {
        var e;
        ((e = N.current) == null || e.restoreFocus(),
          P(o("WAWebABPropsSaga").getIsSagaV1Enabled()));
      }, []);
      var M = function (t) {
          return t.length >= f;
        },
        w = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            D(!0);
            var t = M(S);
            if (t) {
              d == null || d({ description: S });
              var n = o("WAWebABPropsSaga").getIsSagaV1Enabled(),
                a = yield B(n),
                i = JSON.stringify(a);
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "InAppSupport: Sending support request with deviceInfo=",
                    ":",
                    "",
                  ])),
                !0,
                i != null ? i : "n/a",
              ),
                r("WAPromiseRaceAbort")(
                  o("WAWebSendSupportRequestJob").sendSupportRequest(S, i),
                  b,
                )
                  .then(function (e) {
                    if (e.message != null) {
                      o("WAWebModalManager").ModalManager.close();
                      var t = e.groupId;
                      t !== void 0 && t.includes("@s.whatsapp.net")
                        ? o("WAWebSupportChatUtils").openSupportChat(t)
                        : o("WAWebModalManager").ModalManager.open(
                            c.jsx(
                              r("WAWebSupportChatConfirmationModal.react"),
                              {},
                            ),
                          );
                    } else u && (u({ description: S }), D(!1));
                  })
                  .catch(
                    o("WAAbortError").catchAbort(function () {
                      D(!1);
                    }),
                  ));
            } else k(s._(/*BTDS*/ "Please add more to your description"));
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        A = r("useWAWebDebouncedCallback")(function () {
          return w();
        }, 100),
        F = function () {
          (i == null || i(), o("WAWebModalManager").ModalManager.close());
        },
        O = function () {
          l &&
            (o("WAWebModalManager").ModalManager.close(),
            l({ description: S }));
        },
        B = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebLoggerDebugInfo").getDebugInfo({
                supportTag: y,
                convertFields: !0,
                addUserAgentDetails: !0,
                entityId: a,
              }),
              n = "";
            return (
              e && (n = "saga"),
              n && (t.sagaKey = n),
              (t.saga_copy = $),
              t
            );
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        W = function (t) {
          var e = t.text;
          R(e);
        },
        q = { enter: o("WAWebStopEvent").stopPropagation };
      T && (q.esc = o("WAWebStopEvent").stopPropagation);
      var U = s._(/*BTDS*/ "Tell us how we can help");
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "contact-us" },
        title: s._(/*BTDS*/ "Contact us"),
        okDisabled: !M(S) || T,
        okSpinner: T,
        okText: s._(/*BTDS*/ "Send"),
        onOK: A,
        onCancel: T ? void 0 : F,
        children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: q,
          children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              c.jsx(o("WAWebRichTextField.react").RichTextField, {
                error: E,
                maxLength: g,
                onChange: W,
                placeholder: U,
                ariaLabel: U,
                ref: N,
                value: S,
                minVisibleLines: 2,
                multiline: !0,
                enterIsNewLine: !0,
                maxVisibleLines: 7,
                theme: "contact-us",
              }),
              c.jsxs(r("WAWebFlexItem.react"), {
                xstyle: h.deviceInfo,
                grow: 1,
                children: [
                  $
                    ? C()
                    : o(
                        "WAWebSupportChatStrings",
                      ).SupportChatDeviceInfoDisclaimer(),
                  " ",
                  c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getSupportChatFaqUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ],
              }),
              c.jsx(o("WAWebFlex.react").FlexRow, {
                children: c.jsx(r("WAWebFlexItem.react"), {
                  xstyle: h.emailLink,
                  grow: 1,
                  children: c.jsx(r("WAWebClickableLink.react"), {
                    onClick: O,
                    tabIndex: 0,
                    children: s._(/*BTDS*/ "Get support via email"),
                  }),
                }),
              }),
            ],
          }),
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebSupportChatStrings").SupportChatDeviceInfoAISmbDisclaimer()
        : o("WAWebSupportChatStrings").SupportChatDeviceInfoAIDisclaimer();
    }
    l.default = y;
  },
  226,
);
