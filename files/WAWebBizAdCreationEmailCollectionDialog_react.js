__d(
  "WAWebBizAdCreationEmailCollectionDialog.react",
  [
    "fbt",
    "FBLogger",
    "Promise",
    "WAWebBizAdLogger",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextField.react",
    "getErrorSafe",
    "react",
    "useWAWebBizAdCreationSendEmailVerificationCode",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        container: { rowGap: "x1f0uite", alignItems: "x1qjc9v5", $$css: !0 },
        title: {
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        bodyText: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        input: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          alignItems: "x1qjc9v5",
          $$css: !0,
        },
        buttonContainer: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          justifyContent: "x7v6yn8",
          marginTop: "xr1yuqi",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
      },
      g = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function h(e) {
      return g.test(e);
    }
    function y(e) {
      return e === "EMAIL_ALREADY_EXISTS"
        ? s._(/*BTDS*/ "Email already registered to another account")
        : e === "INVALID_EMAIL"
          ? s._(/*BTDS*/ "Email format incorrect")
          : e === "TOO_MANY_ATTEMPTS"
            ? s._(/*BTDS*/ "Incorrect code. Try again in 1 hour")
            : e === "EMAIL_NONCE_MISMATCH" ||
                e === "INVALID_OR_EXPIRED_NONCE" ||
                e === "INVALID_USER" ||
                e === "GENERIC_ERROR"
              ? s._(/*BTDS*/ "Something went wrong. Please try again later.")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function C(t) {
      var a,
        i = t.adAccountID,
        l = t.loggerContext,
        u = t.onCancelClick,
        d = t.onSuccess,
        g = _(""),
        C = g[0],
        b = g[1],
        v = _(!1),
        S = v[0],
        R = v[1],
        L = _(null),
        E = L[0],
        k = L[1],
        I = p(!1),
        T = r("useWAWebBizAdCreationSendEmailVerificationCode")(),
        D = T[0],
        x = T[1];
      m(
        function () {
          l != null &&
            !I.current &&
            ((I.current = !0),
            r("WAWebBizAdLogger").log({
              event: "email_verification_modal_impression",
              loggerContext: l,
              adAccountID: i,
            }));
        },
        [i, l],
      );
      var $ = function () {
          (l != null &&
            r("WAWebBizAdLogger").log({
              event: "email_verification_cancel_click",
              loggerContext: l,
              adAccountID: i,
            }),
            u());
        },
        P = function (t) {
          (b(t), k(null));
        },
        N = function () {
          var t = C.trim();
          if (!h(t)) {
            k(s._(/*BTDS*/ "Email format incorrect"));
            return;
          }
          (l != null &&
            r("WAWebBizAdLogger").log({
              event: "email_verification_continue_click",
              loggerContext: l,
              adAccountID: i,
            }),
            R(!0),
            k(null),
            (e || (e = n("Promise")))
              .all([
                D(t),
                o("WAWebCTWABizAccessTokenNonceManager").fetchNonce(!0),
              ])
              .then(function (e) {
                var n = e[0],
                  r = e[1];
                if (!n.success) {
                  (R(!1), k(y(n.error)));
                  return;
                }
                if (r.type !== "success") {
                  (R(!1),
                    k(
                      s._(
                        /*BTDS*/ "Something went wrong. Please try again later.",
                      ),
                    ));
                  return;
                }
                d(t, r.nonce);
              })
              .catch(function (e) {
                (r("FBLogger")("wa_ctwa_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Email collection send verification code failed"),
                  R(!1),
                  k(
                    s._(
                      /*BTDS*/ "Something went wrong. Please try again later.",
                    ),
                  ));
              }));
        },
        M = C.trim().length === 0;
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme
          .BizToolsAdCreationEmailOnboarding,
        onOverlayClick: u,
        children: c.jsxs((a = o("WAWebFlex.react")).FlexColumn, {
          xstyle: f.container,
          children: [
            c.jsx(a.FlexItem, {
              xstyle: f.title,
              children: c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Confirm your details"),
              }),
            }),
            c.jsx(a.FlexItem, {
              xstyle: f.bodyText,
              children: c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "This will be used to keep your payments secure. You only need to do this once.",
                ),
              }),
            }),
            c.jsx(a.FlexColumn, {
              xstyle: f.input,
              children: c.jsx(r("WDSTextField.react"), {
                label: s._(/*BTDS*/ "Email"),
                value: C,
                onValueChange: P,
                error: E != null,
                errorText: E,
                testid: void 0,
              }),
            }),
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: f.buttonContainer,
              children: [
                c.jsx(r("WDSButton.react"), {
                  label: r("WAWebFbtCommon")("Cancel"),
                  variant: "borderless",
                  onPress: $,
                  testid: void 0,
                }),
                c.jsx(r("WDSButton.react"), {
                  label: s._(/*BTDS*/ "Send code"),
                  variant: "filled",
                  onPress: N,
                  disabled: M,
                  loading: S || x,
                  testid: void 0,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
