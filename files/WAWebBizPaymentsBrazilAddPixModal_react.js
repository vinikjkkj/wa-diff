__d(
  "WAWebBizPaymentsBrazilAddPixModal.react",
  [
    "fbt",
    "PixWamLogger",
    "WALogger",
    "WAWebBrazilPixKeyValidationUtils",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebMenuItems.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPaymentsTosJob",
    "WAWebRichTextField.react",
    "WAWebSelect.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsCustomPaymentMethods",
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
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = "+55";
    function g(e) {
      switch (e) {
        case o("WAWebUserPrefsTypes").PixKeyType.PHONE:
          return s._(/*BTDS*/ "Phone");
        case o("WAWebUserPrefsTypes").PixKeyType.EMAIL:
          return s._(/*BTDS*/ "Email");
        case o("WAWebUserPrefsTypes").PixKeyType.CPF:
          return s._(/*BTDS*/ "CPF");
        case o("WAWebUserPrefsTypes").PixKeyType.EVP:
          return s._(/*BTDS*/ "EVP");
        case o("WAWebUserPrefsTypes").PixKeyType.CNPJ:
          return s._(/*BTDS*/ "CNPJ");
      }
    }
    function h(t) {
      var a,
        i,
        l,
        u,
        d,
        h,
        y = t.chat,
        C = y === void 0 ? null : y,
        b = t.onCancel,
        v = t.onOK,
        S = t.previousScreen,
        R = t.referral,
        L = o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null,
        E = L
          ? "edit_non_native_p2m_payment_method"
          : "add_non_native_p2m_payment_method",
        k = o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()
          ? o("WAWebUserPrefsCustomPaymentMethods").getPIX()
          : null;
      m(
        function () {
          o("PixWamLogger").logPixSenderEvent(
            void 0,
            o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
            S,
            R,
            E,
            C,
            k,
          );
        },
        [C, k, S, R, E],
      );
      var I = 25,
        T = "br_pay_privacy_policy",
        D = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: "https://faq.whatsapp.com/1201270817206354",
          testid: void 0,
          children: s._(/*BTDS*/ "Learn more."),
        }),
        x = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: "https://fburl.com/5ugqajuy",
          testid: void 0,
          children: s._(/*BTDS*/ "Meta"),
        }),
        $ = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: "https://fburl.com/mo0hnzrw",
          testid: void 0,
          children: s._(/*BTDS*/ "WhatsApp"),
        }),
        P = s._(
          /*BTDS*/ "By continuing, you accept the terms of {meta-tos-link} and {wa-tos-link}. Learn how your data is processed for these services by visiting the privacy policies of Meta and WhatsApp Payments. Your Pix key and name will be securely stored and encrypted. {learn-more-link}",
          [
            s._param("meta-tos-link", x),
            s._param("wa-tos-link", $),
            s._param("learn-more-link", D),
          ],
        ),
        N = s._(
          /*BTDS*/ "Your Pix key and name will be securely stored and encrypted. {learn-more-link}",
          [s._param("learn-more-link", D)],
        ),
        M =
          (a =
            (i = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null
              ? void 0
              : i.accepted) != null
            ? a
            : !1,
        w = k == null ? void 0 : k.key_type,
        A = _(w != null ? w : o("WAWebUserPrefsTypes").PixKeyType.PHONE),
        F = A[0],
        O = A[1],
        B = _((l = k == null ? void 0 : k.display_name) != null ? l : ""),
        W = B[0],
        q = B[1],
        U = _(function () {
          var e;
          return k
            ? k.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE &&
              (e = k.key) != null &&
              e.startsWith(f)
              ? k.key.substring(3)
              : k.key
            : "";
        }),
        V = U[0],
        H = U[1],
        G = _(!1),
        z = G[0],
        j = G[1],
        K = _(null),
        Q = K[0],
        X = K[1],
        Y = _(null),
        J = Y[0],
        Z = Y[1],
        ee = p(
          function () {
            var e;
            return k
              ? k.key_type === o("WAWebUserPrefsTypes").PixKeyType.PHONE &&
                (e = k.key) != null &&
                e.startsWith(f)
                ? k.key.substring(3)
                : k.key
              : "";
          },
          [k],
        ),
        te =
          !L ||
          V !== ee ||
          W !== ((u = k == null ? void 0 : k.display_name) != null ? u : "") ||
          F !==
            ((d = k == null ? void 0 : k.key_type) != null
              ? d
              : o("WAWebUserPrefsTypes").PixKeyType.PHONE),
        ne = function () {
          var e = W.trim() !== "",
            t = Q == null && J == null;
          return e && t;
        };
      function re(e) {
        var t = ae(e);
        (q(e), X(t));
      }
      function oe(e) {
        var t = "";
        F === o("WAWebUserPrefsTypes").PixKeyType.PHONE && !e.text.startsWith(f)
          ? (t = f + e.text)
          : (t = e.text);
        var n =
          o("WAWebBrazilPixKeyValidationUtils").validatePixKey(F, t) &&
          t !== "";
        H(e.text);
        var r = null;
        (n || (r = s._(/*BTDS*/ "Invalid pix key")), Z(r));
      }
      var ae = function (t) {
          return t.trim() === "" ? " " : null;
        },
        ie = function (t) {
          var e,
            n =
              (e = o("WAWebUserPrefsTypes").PixKeyType.cast(t)) != null
                ? e
                : o("WAWebUserPrefsTypes").PixKeyType.PHONE;
          (H(""),
            O(n),
            o("WAWebBrazilPixKeyValidationUtils").validatePixKey(n, V));
        },
        le = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            j(!0);
            var t = !!k;
            try {
              M || (yield o("WAWebPaymentsTosJob").acceptBRPayTos(T));
              var n = F === o("WAWebUserPrefsTypes").PixKeyType.PHONE;
              yield o("WaWebPaymentsPixJob").addOrUpdatePix({
                customPaymentMethodUpdate: t ? "true" : "false",
                pixDisplayName: W,
                pixKey: n ? "" + f + V : V,
                pixKeyType: F,
              });
              var r = s._(/*BTDS*/ "edited"),
                a = s._(/*BTDS*/ "added");
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Pix Key successfully {add or edit}", [
                    s._param("add or edit", t ? r : a),
                  ]),
                }),
              );
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error updating Pix Key",
                  ])),
              );
            } finally {
              (j(!1),
                o("PixWamLogger").logPixSenderEvent(
                  t
                    ? o("WAWebWamEnumPaymentActionTargets")
                        .PAYMENT_ACTION_TARGETS.EDIT_BUTTON
                    : o("WAWebWamEnumPaymentActionTargets")
                        .PAYMENT_ACTION_TARGETS.ADD_BUTTON,
                  o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES
                    .CLICK,
                  S,
                  R,
                  E,
                  C,
                  {
                    country: "",
                    credentialId: "",
                    display_name: "",
                    key: "",
                    key_type: F,
                    time_added: 0,
                    time_last_used: null,
                  },
                ),
                v ? v() : o("WAWebModalManager").ModalManager.close());
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "pix-add" },
        title: c.jsx("div", {
          children: s._(/*BTDS*/ "{add or edit} Pix", [
            s._param("add or edit", k ? "Edit" : r("WAWebFbtCommon")("Add")),
          ]),
        }),
        okText: L ? s._(/*BTDS*/ "Edit") : r("WAWebFbtCommon")("Add"),
        cancelText: s._(/*BTDS*/ "Not now"),
        okSpinner: z,
        onCancel: b != null ? b : o("WAWebModalManager").closeModalManager,
        onOK: le,
        okButtonType: "primary",
        cancelButtonType: "secondary",
        type: o("WAWebModal.react").ModalTheme.AddOrUpdatePix,
        okDisabled: z || !te || !ne(),
        children: c.jsxs("div", {
          className: "x1ty9z65 x193iq5w xh8yej3",
          children: [
            s._(
              /*BTDS*/ "Customers will see your Pix key and name when they pay with Pix. You can update this info at any time.",
            ),
            c.jsx("br", {}),
            c.jsx("br", {}),
            c.jsxs("div", {
              children: [
                c.jsx("label", {
                  className: "xhslqc4 x1ibc7va x135pmgq",
                  htmlFor: "pixKeyTypeSelect",
                  children: s._(/*BTDS*/ "Type"),
                }),
                c.jsx("div", {
                  className: "x1anpbxc",
                  children: c.jsx(o("WAWebSelect.react").Select, {
                    testid: void 0,
                    ariaRoleDescription: "Pix Key Type Selection",
                    initialSelection:
                      o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() &&
                      w != null
                        ? String(
                            (h = o(
                              "WAWebUserPrefsCustomPaymentMethods",
                            ).getPIX()) == null
                              ? void 0
                              : h.key_type,
                          )
                        : String(o("WAWebUserPrefsTypes").PixKeyType.PHONE),
                    onChange: ie,
                    width: 150,
                    children: Array.from(
                      o("WAWebUserPrefsTypes").PixKeyType.members(),
                      function (e) {
                        return c.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          { optionId: String(e), primary: g(e) },
                          String(e),
                        );
                      },
                    ),
                  }),
                }),
              ],
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "stretch",
              className: "xdqhqc9",
              children: [
                F === o("WAWebUserPrefsTypes").PixKeyType.PHONE &&
                  c.jsx("div", {
                    className:
                      "x6s0dn4 xhslqc4 x78zum5 x1c3i2sq xqf2s3x x1k70j0n",
                    children: f,
                  }),
                c.jsx("div", {
                  className: "x98rzlu xeuugli",
                  children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: V,
                    placeholder: s._(/*BTDS*/ "Key"),
                    managed: !0,
                    error: J,
                    onChange: oe,
                  }),
                }),
              ],
            }),
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              className: "xdqhqc9",
              children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
                testid: void 0,
                value: W,
                placeholder: s._(/*BTDS*/ "Name"),
                error: Q,
                maxLength: I,
                showRemaining: !0,
                focusOnMount: !1,
                onChange: function (t) {
                  var e = t.text;
                  re(e);
                },
              }),
            }),
            c.jsx("div", {
              className: "xhslqc4 x1ibc7va x135pmgq",
              children: s._(
                /*BTDS*/ "Enter the name you use on your Pix account.",
              ),
            }),
            c.jsx("br", {}),
            c.jsx("div", {
              className: "xhslqc4 x1ibc7va x135pmgq",
              children: c.jsx("h2", { children: M ? N : P }),
            }),
          ],
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.BRAZIL_PHONE_PREFIX = f),
      (l.getPixKeyType = g),
      (l.WAWebBizPaymentsBrazilAddPixModal = h));
  },
  226,
);
