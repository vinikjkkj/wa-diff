__d(
  "WAWebPasscodeSetup.react",
  [
    "fbt",
    "$InternalEnum",
    "WAPromiseDelays",
    "WAWebAppLockConfirmationDialog.react",
    "WAWebButton.react",
    "WAWebDialogEventLogger",
    "WAWebEligibilityLogging",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFocusTracer",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPasscodeModalStyles",
    "WAWebPasswordInput.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsInfoStore",
    "WAWebWamEnumDialogNameType",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = {
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        marginEnd4: { marginInlineEnd: "x7g7pl8", $$css: !0 },
      },
      f = 6,
      g = 128,
      h = "^[ -~]{" + f + "," + g + "}$",
      y = n("$InternalEnum")({ CANCEL: "cancel", ENABLE: "enable" });
    function C(e, t) {
      var n = "";
      return e.length < f || e.length > g
        ? ((n = s
            ._(
              /*BTDS*/ "Password must be {minimum_length}-{maximum_length} characters.",
              [
                s._param("minimum_length", String(f)),
                s._param("maximum_length", String(g)),
              ],
            )
            .toString()),
          { valid: !1, errorMessage: n })
        : e.match(h) == null
          ? ((n = s
              ._(
                /*BTDS*/ "Password may only contain letters, numbers, and common punctuation.",
              )
              .toString()),
            { valid: !1, errorMessage: n })
          : t !== ""
            ? b(e, t)
            : { valid: !0, errorMessage: n };
    }
    function b(e, t) {
      var n = "";
      return e !== t
        ? ((n = s._(/*BTDS*/ "Password must match.").toString()),
          { valid: !1, errorMessage: n })
        : { valid: !0, errorMessage: n };
    }
    function v(t) {
      var a = t.onSubmit,
        i = p(""),
        l = i[0],
        u = i[1],
        d = p(""),
        h = d[0],
        v = d[1],
        R = p(""),
        L = R[0],
        E = R[1],
        k = p(!1),
        I = k[0],
        T = k[1],
        D = m(!1),
        x = m(null),
        $ = o("WAWebEligibilityLogging").eligibilityLogger.getValue(
          "wa_web_app_lock_upsell",
        ),
        P = function (t, n) {
          t === "" && n === "" && E("");
        },
        N = function (t) {
          (u(t.currentTarget.value), P(t.currentTarget.value, h));
        },
        M = function (t) {
          (v(t.currentTarget.value), P(t.currentTarget.value, l));
        },
        w = function (t) {
          if (t.currentTarget.value !== "") {
            var e = C(l, h);
            E(e.errorMessage);
          }
        },
        A = function (t) {
          if (t.currentTarget.value !== "") {
            var e = b(l, h);
            L === "" && E(e.errorMessage);
          }
        },
        F = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = C(l, h),
              t = b(l, h);
            if (
              (E(e.errorMessage || t.errorMessage), !(!e.valid || !t.valid))
            ) {
              T(!0);
              var n = yield o(
                "WAWebUserPrefsInfoStore",
              ).waNoiseInfo.lockNoiseInfo(h);
              (yield o("WAPromiseDelays").delayMs(400),
                n &&
                  ((D.current = !0),
                  r("WAWebDialogEventLogger")({
                    dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                      .APP_LOCK_ENABLE,
                    source: y.ENABLE,
                  }),
                  o("WAWebModalManager").ModalManager.close(),
                  a(),
                  $ &&
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx(r("WAWebAppLockConfirmationDialog.react"), {}),
                    )),
                T(!1));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          D.current ||
            r("WAWebDialogEventLogger")({
              dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                .APP_LOCK_ENABLE,
              source: y.CANCEL,
            });
        },
      );
      var O = function (t) {
          t.key === "Enter" && r("WAWebFocusTracer").focus(x.current);
        },
        B = function (t) {
          t.key === "Enter" && F();
        },
        W = $
          ? s._(/*BTDS*/ "Set password")
          : s._(/*BTDS*/ "Set device password"),
        q = s._(
          /*BTDS*/ "Password must be {mininum_passcode_length}-{maximum_passcode_length} characters, and may only contain letters, numbers, and common punctuation",
          [
            s._param("mininum_passcode_length", f),
            s._param("maximum_passcode_length", g),
          ],
        ),
        U = I !== !0 && l !== "" && h !== "" && L === "";
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Flex,
        testid: void 0,
        children: c.jsxs(
          "form",
          babelHelpers.extends(
            { method: "dialog" },
            (e || (e = r("stylex"))).props([
              o("WAWebPasscodeModalStyles").container,
              $ && o("WAWebPasscodeModalStyles").containerUpdated,
            ]),
            {
              onSubmit: F,
              children: [
                $
                  ? c.jsx(r("WDSText.react"), {
                      type: "Headline1",
                      colorName: "contentDefault",
                      xstyle: _.marginBottom16,
                      children: W,
                    })
                  : c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                      size: "20",
                      weight: "medium",
                      xstyle: [
                        o("WAWebPasscodeModalStyles").titleText,
                        _.marginBottom12,
                      ],
                      children: W,
                    }),
                c.jsx(r("WAWebFlexItem.react"), {
                  xstyle: $ ? _.marginBottom16 : _.marginBottom8,
                  children: c.jsx(r("WAWebPasswordInput.react"), {
                    value: l,
                    onChange: N,
                    onBlur: w,
                    required: !0,
                    placeholder: s._(/*BTDS*/ "Enter password").toString(),
                    focusOnMount: !0,
                    testid: void 0,
                    onKeyDown: O,
                    appLockUpsellEnabled: $,
                  }),
                }),
                c.jsx(r("WAWebFlexItem.react"), {
                  xstyle: $ ? _.marginBottom16 : _.marginBottom8,
                  children: c.jsx(r("WAWebPasswordInput.react"), {
                    ref: x,
                    value: h,
                    onChange: M,
                    onBlur: A,
                    title: L,
                    required: !0,
                    placeholder: s._(/*BTDS*/ "Re-enter password").toString(),
                    testid: void 0,
                    onKeyDown: B,
                    appLockUpsellEnabled: $,
                  }),
                }),
                c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                  color: L ? "danger" : "secondary",
                  xstyle: [
                    o("WAWebPasscodeModalStyles").bottomSpacing,
                    o("WAWebPasscodeModalStyles").passcodeMessage,
                    $ && o("WAWebPasscodeModalStyles").passcodeMessageUpdated,
                  ],
                  testid: void 0,
                  extras: L ? { role: "alert" } : {},
                  children: L || q,
                }),
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  justify: "end",
                  children: [
                    c.jsx(r("WAWebFlexItem.react"), {
                      xstyle: $ ? _.marginEnd8 : _.marginEnd4,
                      children: $
                        ? c.jsx(r("WDSButton.react"), {
                            variant: "borderless",
                            onPress: S,
                            testid: void 0,
                            size: "medium",
                            type: "default",
                            label: s._(/*BTDS*/ "Cancel"),
                          })
                        : c.jsx(o("WAWebButton.react").Button, {
                            type: "secondary",
                            onClick: function () {
                              return o(
                                "WAWebModalManager",
                              ).ModalManager.close();
                            },
                            testid: void 0,
                            buttonType: "button",
                            children: s._(/*BTDS*/ "Cancel"),
                          }),
                    }),
                    c.jsx(r("WAWebFlexItem.react"), {
                      children: c.jsx(o("WAWebButton.react").Button, {
                        type: "primary",
                        onClick: F,
                        disabled: !U,
                        spinner: I,
                        testid: void 0,
                        buttonType: "submit",
                        children: r("WAWebFbtCommon")("OK"),
                      }),
                    }),
                  ],
                }),
              ],
            },
          ),
        ),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = v;
  },
  226,
);
