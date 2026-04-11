__d(
  "WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
  [
    "fbt",
    "PixPaymentRequestFeature",
    "PixWamLogger",
    "WAWebAddEditPixDisplayNameInput.react",
    "WAWebAddEditPixKeyInput.react",
    "WAWebAddEditPixKeyModalFooter.react",
    "WAWebAddEditPixKeyModalSubtitle.react",
    "WAWebAddEditPixKeyModalTitle.react",
    "WAWebAddEditPixKeyModalTitleStreamlineVariant.react",
    "WAWebBizPaymentsBrazilAddPixModal.react",
    "WAWebBrazilPixKeyValidationUtils",
    "WAWebConfirmPopup.react",
    "WAWebEditPixKeyModalHeader.react",
    "WAWebFbtCommon",
    "WAWebModal.react",
    "WAWebPaymentsTosJob",
    "WAWebPixKeyTypeSelect.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsPaymentTos",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WaWebPaymentsPixJob",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = "br_pay_privacy_policy";
    function _(e) {
      var t,
        a,
        i = e.chat,
        l = i === void 0 ? null : i,
        c = e.onClose,
        _ = e.onSuccess,
        g = e.pixData,
        h = e.previousScreen,
        y = e.referral,
        C = g != null,
        b = o("PixPaymentRequestFeature").isPixOnboardingNewContentEnabled(),
        v = C
          ? "edit_non_native_p2m_payment_method"
          : "add_non_native_p2m_payment_method";
      d(
        function () {
          o("PixWamLogger").logPixSenderEvent(
            void 0,
            o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
            h,
            y,
            v,
            l,
            g != null ? g : null,
          );
        },
        [l, g, h, y, v],
      );
      var S = m(
          (t = g == null ? void 0 : g.key_type) != null
            ? t
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        ),
        R = S[0],
        L = S[1],
        E = m(null),
        k = E[0],
        I = E[1],
        T = m(function () {
          return (g == null ? void 0 : g.key) == null
            ? ""
            : g.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE &&
                g.key.startsWith(
                  o("WAWebBizPaymentsBrazilAddPixModal.react")
                    .BRAZIL_PHONE_PREFIX,
                )
              ? g.key.slice(
                  o("WAWebBizPaymentsBrazilAddPixModal.react")
                    .BRAZIL_PHONE_PREFIX.length,
                )
              : g.key;
        }),
        D = T[0],
        x = T[1],
        $ = m((a = g == null ? void 0 : g.display_name) != null ? a : ""),
        P = $[0],
        N = $[1],
        M = m(!1),
        w = M[0],
        A = M[1],
        F = function (t) {
          (x(t),
            I(o("WAWebAddEditPixKeyInput.react").getPixKeyInputError(t, R)));
        },
        O = function (t) {
          R !== t && (L(t), x(""), I(null));
        },
        B = function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Failed to save Pix key"),
            }),
          );
        },
        W = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e,
                t,
                n =
                  (e =
                    (t = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null
                      ? void 0
                      : t.accepted) != null
                    ? e
                    : !1;
              if ((A(!0), !n)) {
                var r, a;
                (yield o("WAWebPaymentsTosJob").acceptBRPayTos(p),
                  (n =
                    (r =
                      (a = o("WAWebUserPrefsPaymentTos").getPaymentTos()) ==
                      null
                        ? void 0
                        : a.accepted) != null
                      ? r
                      : !1));
              }
              if (n) {
                var i = yield o("WaWebPaymentsPixJob").addOrUpdatePix({
                  customPaymentMethodUpdate: C ? "true" : "false",
                  pixDisplayName: P,
                  pixKey:
                    R === o("WAWebUserPrefsTypes").PixKeyType.PHONE
                      ? o("WAWebBizPaymentsBrazilAddPixModal.react")
                          .BRAZIL_PHONE_PREFIX + D
                      : D,
                  pixKeyType: R,
                });
                if (i.name === "CreateCustomPaymentMethodResponseSuccess") {
                  (o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Pix key saved"),
                    }),
                  ),
                    _());
                  return;
                }
              }
              B();
            } catch (e) {
              B();
            } finally {
              (o("PixWamLogger").logPixSenderEvent(
                C
                  ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                      .EDIT_BUTTON
                  : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                      .CONFIRM_BUTTON,
                o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                h,
                y,
                v,
                l,
                {
                  country: "",
                  credentialId: "",
                  display_name: "",
                  key: "",
                  key_type: R,
                  time_added: 0,
                  time_last_used: null,
                },
              ),
                A(!1));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "pix-add-refreshed" },
        title: u.jsx(r("WAWebEditPixKeyModalHeader.react"), {
          onClose: c,
          isUpdate: C,
        }),
        okText: s._(/*BTDS*/ "Save"),
        cancelText: r("WAWebFbtCommon")("Cancel"),
        type: o("WAWebModal.react").ModalTheme.PaymentsFlow,
        okSpinner: w,
        onCancel: c,
        onOK: W,
        okButtonType: "primary",
        cancelButtonType: "secondary",
        okDisabled: w || f(D, P, R, g),
        cancelDisabled: w,
        children: [
          !C && !b && u.jsx(r("WAWebAddEditPixKeyModalTitle.react"), {}),
          !C &&
            b &&
            u.jsx(r("WAWebAddEditPixKeyModalTitleStreamlineVariant.react"), {}),
          u.jsx(r("WAWebAddEditPixKeyModalSubtitle.react"), {}),
          u.jsx(r("WAWebPixKeyTypeSelect.react"), {
            pixKeyType: R,
            onSelectChange: O,
          }),
          u.jsx(o("WAWebAddEditPixKeyInput.react").WAWebAddEditPixKeyInput, {
            onValueChange: F,
            pixKey: D,
            pixKeyType: R,
            error: k,
            previousScreenName: h,
            referral: y,
            screen: v,
          }),
          u.jsx(r("WAWebAddEditPixDisplayNameInput.react"), {
            onValueChange: N,
            pixDisplayName: P,
          }),
          u.jsx(r("WAWebAddEditPixKeyModalFooter.react"), {}),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n, r) {
      if (
        !o("WAWebAddEditPixKeyInput.react").validatePixKey(e, n) ||
        !o("WAWebBrazilPixKeyValidationUtils").isPixDisplayNameValid(t)
      )
        return !0;
      if (r != null) {
        var a,
          i,
          l,
          s,
          u = (a = r.key) != null ? a : "";
        r.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE &&
          (i = r.key) != null &&
          i.startsWith(
            o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX,
          ) &&
          (u = r.key.slice(
            o("WAWebBizPaymentsBrazilAddPixModal.react").BRAZIL_PHONE_PREFIX
              .length,
          ));
        var c =
          e !== u ||
          t !== ((l = r.display_name) != null ? l : "") ||
          n !==
            ((s = r.key_type) != null
              ? s
              : o("WAWebUserPrefsTypes").PixKeyType.PHONE);
        if (!c) return !0;
      }
      return !1;
    }
    l.default = _;
  },
  226,
);
