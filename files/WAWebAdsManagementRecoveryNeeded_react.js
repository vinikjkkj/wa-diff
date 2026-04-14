__d(
  "WAWebAdsManagementRecoveryNeeded.react",
  [
    "fbt",
    "WAWebAdCollection",
    "WAWebAdEntryPointsConfigurationModel",
    "WAWebBizGatingUtils",
    "WAWebBox.react",
    "WAWebButton.react",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCatalogCollection",
    "WAWebConfirmPopup.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebQplFlowWrapper",
    "WAWebRequestAdAccountRecoveryCode",
    "WAWebRichTextField.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "qpl",
    "react",
    "useWAWebListener",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = r("qpl")._(1029378759, "1575"),
      _ = {
        firstStepBody: { textAlign: "x2b8uid", $$css: !0 },
        secondStepHeader: { fontSize: "x1aueamr", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        marginTop24: { marginTop: "x9u28bd", $$css: !0 },
        marginBottom24: { marginBottom: "x14mdic9", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop32: { paddingTop: "x1sk1jro", $$css: !0 },
        paddingBottom24: { paddingBottom: "xvg22vi", $$css: !0 },
        paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 },
        paddingBottom16: { paddingBottom: "xvpt6g3", $$css: !0 },
      };
    function f(e) {
      var t = e.Icon,
        n = e.emailMask,
        r = e.handleCodeEntered,
        a = e.headerDescription,
        i = e.headerText,
        l = function () {
          (o(
            "WAWebRequestAdAccountRecoveryCode",
          ).requestAdAccountRecoveryCode(),
            o("WAWebQplFlowWrapper").QPL.markerPoint(
              p,
              "recovery_flow_code_requested",
            ),
            h(n, r));
        };
      return u.jsx(g, {
        Icon: t,
        handleVerifyEmailClick: l,
        headerDescription: a,
        headerText: i,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.Icon,
        n = e.handleVerifyEmailClick,
        a = e.headerDescription,
        i = e.headerText;
      return (
        d(function () {
          (o("WAWebQplFlowWrapper").QPL.markerStart(p),
            o("WAWebQplFlowWrapper").QPL.markerPoint(
              p,
              "recovery_flow_welcome",
            ));
        }, []),
        u.jsxs(r("WAWebBox.react"), {
          align: "center",
          direction: "vertical",
          flex: !0,
          testid: void 0,
          xstyle: [_.paddingHoriz24, _.paddingTop32],
          children: [
            u.jsx(t, {
              iconXstyle: _.secondaryColor,
              directional: !0,
              height: 24,
              width: 24,
              xstyle: _.paddingBottom24,
            }),
            u.jsxs(o("WAWebText.react").WAWebTextTitle, {
              children: [" ", i, " "],
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              xstyle: _.firstStepBody,
              children: a,
            }),
            u.jsx(r("WAWebBox.react"), {
              xstyle: [_.marginTop24, _.marginBottom24],
              children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                onClick: n,
                children: s._(/*BTDS*/ "Verify email"),
              }),
            }),
          ],
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(S, { emailMask: e, handleCodeEntered: t }),
      );
    }
    var y = /^[0-9]{0,6}$/;
    function C(e) {
      return y.test(e);
    }
    var b = function () {
        (o("WAWebQplFlowWrapper").QPL.markerPoint(
          p,
          "recovery_flow_code_verified",
        ),
          o("WAWebQplFlowWrapper").QPL.markerEnd(p, 2),
          o("WAWebModalManager").closeModalManager());
      },
      v = function () {
        (o("WAWebQplFlowWrapper").QPL.markerPoint(
          p,
          "recovery_flow_dialog_dismiss",
        ),
          o("WAWebModalManager").closeModalManager());
      };
    function S(e) {
      var t = e.emailMask,
        n = e.handleCodeEntered,
        a = m(""),
        i = a[0],
        l = a[1],
        c = m(!1),
        d = c[0],
        f = c[1],
        g = m(null),
        h = g[0],
        y = g[1],
        S = m(!1),
        R = S[0],
        L = S[1],
        E = r("useWAWebThrottledCallback")(function () {
          (o("WAWebQplFlowWrapper").QPL.markerPoint(
            p,
            "recovery_flow_code_resend_requested",
          ),
            o(
              "WAWebRequestAdAccountRecoveryCode",
            ).requestAdAccountRecoveryCode());
          var e = s._(/*BTDS*/ "Code sent");
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, { msg: e }),
          );
        }, 2e3),
        k = function (t) {
          (f(!1),
            t === "success"
              ? b()
              : t === "incorrect-nonce"
                ? (o("WAWebQplFlowWrapper").QPL.markerPoint(
                    p,
                    "recovery_flow_incorrect_code",
                  ),
                  y("incorrect-nonce"))
                : y("something-went-wrong"));
        };
      if (
        (o("useWAWebListener").useListener(
          o("WAWebAdCollection").AdCollection,
          "ads-loaded",
          function (e) {
            k(e.result);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebAdEntryPointsConfigurationModel").AdEntryPointsEventBus,
          "loaded",
          function (e) {
            k(e);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCatalogCollection").CatalogCollection,
          "catalog-loaded",
          function (e) {
            k(e.type);
          },
        ),
        R)
      )
        return null;
      var I = function (t) {
          var e = t.text;
          (e.length === 6 &&
            (o("WAWebQplFlowWrapper").QPL.markerPoint(
              p,
              "recovery_flow_code_entered",
            ),
            o("WAWebQplFlowWrapper").QPL.markerAnnotate(p, {
              bool: { validCode: C(e) },
            })),
            l(e),
            h != null && y(null));
        },
        T = function () {
          (o("WAWebQplFlowWrapper").QPL.markerPoint(
            p,
            "recovery_flow_code_submitted",
          ),
            f(!0),
            o("WAWebCTWABizAccessTokenNonceManager").setNonceFromRecoveryCode(
              i,
            ),
            n());
        },
        D;
      h === "incorrect-nonce"
        ? (D = s._(/*BTDS*/ "Invalid code"))
        : h === "something-went-wrong" &&
          (D = s._(/*BTDS*/ "Something went wrong. Please try again later."));
      var x =
          D == null && !C(i) ? s._(/*BTDS*/ "Only numbers are allowed") : null,
        $ = i.length !== 6 || x != null,
        P = s._(/*BTDS*/ "\u2013\u2013\u2013\u2013\u2013\u2013"),
        N = s._(/*BTDS*/ "Continue"),
        M = function () {
          (o("WAWebQplFlowWrapper").QPL.markerPoint(
            p,
            "recovery_flow_opt_out_confirm",
          ),
            L(!0));
        },
        w = o(
          "WAWebBizGatingUtils",
        ).graphQLRecoveryDuringAdAccountRecoveryEnabled()
          ? u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                    className: "x1ypdohk",
                    onClick: M,
                    selectable: !0,
                    children: s._(/*BTDS*/ "Not your email?"),
                  }),
                ),
              ]),
            })
          : null;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okDisabled: $,
        okSpinner: d,
        okText: N,
        onCancel: v,
        onOK: T,
        onOverlayClick: v,
        testid: void 0,
        type: o("WAWebModal.react").ModalTheme.AdAccountRecovery,
        children: u.jsxs(r("WAWebBox.react"), {
          direction: "vertical",
          flex: !0,
          xstyle: [_.paddingHoriz24, _.paddingTop16],
          children: [
            u.jsx(o("WAWebText.react").WAWebTextTitle, {
              alignSelf: "center",
              xstyle: [_.secondStepHeader, _.paddingBottom16],
              children: s._(/*BTDS*/ "Verify your email"),
            }),
            u.jsxs("div", {
              children: [
                u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  as: "span",
                  children: s._(
                    /*BTDS*/ "Enter the 6-digit code we sent to {email-mask}.",
                    [s._param("email-mask", t)],
                  ),
                }),
                w,
              ],
            }),
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              containerXstyle: _.paddingBottom16,
              customStyleThemes: [
                o("WAWebRichTextField.react").TextInputCustomStyleThemes
                  .DigitalCode,
              ],
              error: x || D,
              hideFloatingLabel: !0,
              maxLength: 6,
              onChange: I,
              placeholder: P,
              title: s._(/*BTDS*/ "Code"),
              value: i,
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                    className: "x1ypdohk",
                    onClick: E,
                    selectable: !0,
                    children: s._(/*BTDS*/ "Send a new code"),
                  }),
                ),
              ]),
            }),
          ],
        }),
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
