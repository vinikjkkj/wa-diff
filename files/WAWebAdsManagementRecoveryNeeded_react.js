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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        n = e.Icon,
        r = e.emailMask,
        a = e.handleCodeEntered,
        i = e.headerDescription,
        l = e.headerText,
        s;
      t[0] !== r || t[1] !== a
        ? ((s = function () {
            (o(
              "WAWebRequestAdAccountRecoveryCode",
            ).requestAdAccountRecoveryCode(),
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                p,
                "recovery_flow_code_requested",
              ),
              y(r, a));
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = s))
        : (s = t[2]);
      var c = s,
        d;
      return (
        t[3] !== n || t[4] !== c || t[5] !== i || t[6] !== l
          ? ((d = u.jsx(g, {
              Icon: n,
              handleVerifyEmailClick: c,
              headerDescription: i,
              headerText: l,
            })),
            (t[3] = n),
            (t[4] = c),
            (t[5] = i),
            (t[6] = l),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.Icon,
        a = e.handleVerifyEmailClick,
        i = e.headerDescription,
        l = e.headerText,
        c;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = []), (t[0] = c))
        : (c = t[0]),
        d(h, c));
      var m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [_.paddingHoriz24, _.paddingTop32]), (t[1] = m))
        : (m = t[1]);
      var p;
      t[2] !== n
        ? ((p = u.jsx(n, {
            iconXstyle: _.secondaryColor,
            directional: !0,
            height: 24,
            width: 24,
            xstyle: _.paddingBottom24,
          })),
          (t[2] = n),
          (t[3] = p))
        : (p = t[3]);
      var f;
      t[4] !== l
        ? ((f = u.jsxs(o("WAWebText.react").WAWebTextTitle, {
            children: [" ", l, " "],
          })),
          (t[4] = l),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== i
        ? ((g = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            xstyle: _.firstStepBody,
            children: i,
          })),
          (t[6] = i),
          (t[7] = g))
        : (g = t[7]);
      var y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [_.marginTop24, _.marginBottom24]), (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Verify email")), (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] !== a
        ? ((b = u.jsx(r("WAWebBox.react"), {
            xstyle: y,
            children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              onClick: a,
              children: C,
            }),
          })),
          (t[10] = a),
          (t[11] = b))
        : (b = t[11]);
      var v;
      return (
        t[12] !== p || t[13] !== f || t[14] !== g || t[15] !== b
          ? ((v = u.jsxs(r("WAWebBox.react"), {
              align: "center",
              direction: "vertical",
              flex: !0,
              testid: void 0,
              xstyle: m,
              children: [p, f, g, b],
            })),
            (t[12] = p),
            (t[13] = f),
            (t[14] = g),
            (t[15] = b),
            (t[16] = v))
          : (v = t[16]),
        v
      );
    }
    function h() {
      (o("WAWebQplFlowWrapper").QPL.markerStart(p),
        o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_welcome"));
    }
    function y(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(R, { emailMask: e, handleCodeEntered: t }),
      );
    }
    var C = /^[0-9]{0,6}$/;
    function b(e) {
      return C.test(e);
    }
    var v = function () {
        (o("WAWebQplFlowWrapper").QPL.markerPoint(
          p,
          "recovery_flow_code_verified",
        ),
          o("WAWebQplFlowWrapper").QPL.markerEnd(p, 2),
          o("WAWebModalManager").closeModalManager());
      },
      S = function () {
        (o("WAWebQplFlowWrapper").QPL.markerPoint(
          p,
          "recovery_flow_dialog_dismiss",
        ),
          o("WAWebModalManager").closeModalManager());
      };
    function R(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.emailMask,
        a = e.handleCodeEntered,
        i = m(""),
        l = i[0],
        c = i[1],
        d = m(!1),
        f = d[0],
        g = d[1],
        h = m(null),
        y = h[0],
        C = h[1],
        R = m(!1),
        E = R[0],
        k = R[1],
        I = r("useWAWebThrottledCallback")(L, 2e3),
        T;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            (g(!1),
              t === "success"
                ? v()
                : t === "incorrect-nonce"
                  ? (o("WAWebQplFlowWrapper").QPL.markerPoint(
                      p,
                      "recovery_flow_incorrect_code",
                    ),
                    C("incorrect-nonce"))
                  : C("something-went-wrong"));
          }),
          (t[0] = T))
        : (T = t[0]);
      var D = T,
        x;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            D(t.result);
          }),
          (t[1] = x))
        : (x = t[1]),
        o("useWAWebListener").useListener(
          o("WAWebAdCollection").AdCollection,
          "ads-loaded",
          x,
        ));
      var $;
      (t[2] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function (t) {
            D(t);
          }),
          (t[2] = $))
        : ($ = t[2]),
        o("useWAWebListener").useListener(
          o("WAWebAdEntryPointsConfigurationModel").AdEntryPointsEventBus,
          "loaded",
          $,
        ));
      var P;
      if (
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = function (t) {
              D(t.type);
            }),
            (t[3] = P))
          : (P = t[3]),
        o("useWAWebListener").useListener(
          o("WAWebCatalogCollection").CatalogCollection,
          "catalog-loaded",
          P,
        ),
        E)
      )
        return null;
      var N;
      t[4] !== y
        ? ((N = function (t) {
            var e = t.text;
            (e.length === 6 &&
              (o("WAWebQplFlowWrapper").QPL.markerPoint(
                p,
                "recovery_flow_code_entered",
              ),
              o("WAWebQplFlowWrapper").QPL.markerAnnotate(p, {
                bool: { validCode: b(e) },
              })),
              c(e),
              y != null && C(null));
          }),
          (t[4] = y),
          (t[5] = N))
        : (N = t[5]);
      var M = N,
        w;
      t[6] !== l || t[7] !== a
        ? ((w = function () {
            (o("WAWebQplFlowWrapper").QPL.markerPoint(
              p,
              "recovery_flow_code_submitted",
            ),
              g(!0),
              o("WAWebCTWABizAccessTokenNonceManager").setNonceFromRecoveryCode(
                l,
              ),
              a());
          }),
          (t[6] = l),
          (t[7] = a),
          (t[8] = w))
        : (w = t[8]);
      var A = w,
        F;
      if (y === "incorrect-nonce") {
        var O;
        (t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = s._(/*BTDS*/ "Invalid code")), (t[9] = O))
          : (O = t[9]),
          (F = O));
      } else if (y === "something-went-wrong") {
        var B;
        (t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = s._(
              /*BTDS*/ "Something went wrong. Please try again later.",
            )),
            (t[10] = B))
          : (B = t[10]),
          (F = B));
      }
      var W;
      t[11] !== l || t[12] !== F
        ? ((W =
            F == null && !b(l)
              ? s._(/*BTDS*/ "Only numbers are allowed")
              : null),
          (t[11] = l),
          (t[12] = F),
          (t[13] = W))
        : (W = t[13]);
      var q = W,
        U = l.length !== 6 || q != null,
        V;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "\u2013\u2013\u2013\u2013\u2013\u2013")),
          (t[14] = V))
        : (V = t[14]);
      var H = V,
        G;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(/*BTDS*/ "Continue")), (t[15] = G))
        : (G = t[15]);
      var z = G,
        j;
      if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
        var K = function () {
          (o("WAWebQplFlowWrapper").QPL.markerPoint(
            p,
            "recovery_flow_opt_out_confirm",
          ),
            k(!0));
        };
        ((j = o(
          "WAWebBizGatingUtils",
        ).graphQLRecoveryDuringAdAccountRecoveryEnabled()
          ? u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: s._(/*BTDS*/ "{=m0}", [
                s._implicitParam(
                  "=m0",
                  u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                    className: "x1ypdohk",
                    onClick: K,
                    selectable: !0,
                    children: s._(/*BTDS*/ "Not your email?"),
                  }),
                ),
              ]),
            })
          : null),
          (t[16] = j));
      } else j = t[16];
      var Q = j,
        X;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = [_.paddingHoriz24, _.paddingTop16]), (t[17] = X))
        : (X = t[17]);
      var Y;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            alignSelf: "center",
            xstyle: [_.secondStepHeader, _.paddingBottom16],
            children: s._(/*BTDS*/ "Verify your email"),
          })),
          (t[18] = Y))
        : (Y = t[18]);
      var J;
      t[19] !== n
        ? ((J = u.jsxs("div", {
            children: [
              u.jsx(o("WAWebText.react").WAWebTextSmall, {
                as: "span",
                children: s._(
                  /*BTDS*/ "Enter the 6-digit code we sent to {email-mask}.",
                  [s._param("email-mask", n)],
                ),
              }),
              Q,
            ],
          })),
          (t[19] = n),
          (t[20] = J))
        : (J = t[20]);
      var Z;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .DigitalCode,
          ]),
          (t[21] = Z))
        : (Z = t[21]);
      var ee = q || F,
        te;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = s._(/*BTDS*/ "Code")), (t[22] = te))
        : (te = t[22]);
      var ne;
      t[23] !== l || t[24] !== M || t[25] !== ee
        ? ((ne = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            containerXstyle: _.paddingBottom16,
            customStyleThemes: Z,
            error: ee,
            hideFloatingLabel: !0,
            maxLength: 6,
            onChange: M,
            placeholder: H,
            title: te,
            value: l,
          })),
          (t[23] = l),
          (t[24] = M),
          (t[25] = ee),
          (t[26] = ne))
        : (ne = t[26]);
      var re;
      t[27] !== I
        ? ((re = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            children: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                  className: "x1ypdohk",
                  onClick: I,
                  selectable: !0,
                  children: s._(/*BTDS*/ "Send a new code"),
                }),
              ),
            ]),
          })),
          (t[27] = I),
          (t[28] = re))
        : (re = t[28]);
      var oe;
      t[29] !== J || t[30] !== ne || t[31] !== re
        ? ((oe = u.jsxs(r("WAWebBox.react"), {
            direction: "vertical",
            flex: !0,
            xstyle: X,
            children: [Y, J, ne, re],
          })),
          (t[29] = J),
          (t[30] = ne),
          (t[31] = re),
          (t[32] = oe))
        : (oe = t[32]);
      var ae;
      return (
        t[33] !== A || t[34] !== U || t[35] !== f || t[36] !== oe
          ? ((ae = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okDisabled: U,
              okSpinner: f,
              okText: z,
              onCancel: S,
              onOK: A,
              onOverlayClick: S,
              testid: void 0,
              type: o("WAWebModal.react").ModalTheme.AdAccountRecovery,
              children: oe,
            })),
            (t[33] = A),
            (t[34] = U),
            (t[35] = f),
            (t[36] = oe),
            (t[37] = ae))
          : (ae = t[37]),
        ae
      );
    }
    function L() {
      (o("WAWebQplFlowWrapper").QPL.markerPoint(
        p,
        "recovery_flow_code_resend_requested",
      ),
        o("WAWebRequestAdAccountRecoveryCode").requestAdAccountRecoveryCode());
      var e = s._(/*BTDS*/ "Code sent");
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: e }),
      );
    }
    l.default = f;
  },
  226,
);
