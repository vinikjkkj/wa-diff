__d(
  "WAWebPasscodeRemoval.react",
  [
    "fbt",
    "$InternalEnum",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebButton.react",
    "WAWebDialogEventLogger",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPasscodeModalStyles",
    "WAWebPasswordInput.react",
    "WAWebScreenLockErrorMessages",
    "WAWebSocketModel",
    "WAWebText_DONOTUSE.react",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumDialogNameType",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebPersistentCounterAsync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = n("$InternalEnum")({ CANCEL: "cancel", DISABLE: "disable" }),
      f = {
        description: { lineHeight: "x1xet1wb", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        marginBottom20: { marginBottom: "xdqhqc9", $$css: !0 },
        marginTop4: { marginTop: "xav9cv8", $$css: !0 },
        marginEnd4: { marginInlineEnd: "x7g7pl8", $$css: !0 },
      };
    function g(t) {
      var a = t.onSubmit,
        i = p(""),
        l = i[0],
        u = i[1],
        d = p(null),
        g = d[0],
        y = d[1],
        C = p(!1),
        b = C[0],
        v = C[1],
        S = p(!1),
        R = S[0],
        L = S[1],
        E = m(!1),
        k = r("useWAWebPersistentCounterAsync")(
          o("WAWebUserPrefsScreenLock").getScreenUnlockTryCount,
          o("WAWebUserPrefsScreenLock").setScreenUnlockTryCount,
        ),
        I = k[0],
        T = I.count,
        D = I.error,
        x = I.loading,
        $ = k[1],
        P = k[2],
        N = T != null ? T : 0,
        M =
          N >=
          o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
      M && o("WAWebSocketModel").Socket.logout();
      var w =
          N + 1 ===
          o("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries"),
        A = function (t) {
          u(t.currentTarget.value);
        },
        F = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if ((L(!0), l === "")) {
              (y(!0), L(!1));
              return;
            }
            y(!1);
            var e = yield o(
              "WAWebUserPrefsInfoStore",
            ).waNoiseInfo.removeLockOnNoiseInfo(l);
            (yield o("WAPromiseDelays").delayMs(400),
              e
                ? ((E.current = !0),
                  r("WAWebDialogEventLogger")({
                    dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                      .APP_LOCK_DISABLE,
                    source: _.DISABLE,
                  }),
                  P(),
                  o("WAWebModalManager").ModalManager.close(),
                  a())
                : ($(), v(!0)),
              L(!1));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        O = function (t) {
          t.key === "Enter" && F();
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebModalManager").ModalManager,
          "close_modal",
          function () {
            E.current ||
              r("WAWebDialogEventLogger")({
                dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE
                  .APP_LOCK_DISABLE,
                source: _.CANCEL,
              });
          },
        ),
        c.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Flex,
          testid: void 0,
          children: c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebPasscodeModalStyles").container,
              ),
              {
                children: [
                  c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                    size: "20",
                    weight: "medium",
                    xstyle: [
                      o("WAWebPasscodeModalStyles").titleText,
                      f.marginBottom12,
                    ],
                    children: s._(/*BTDS*/ "Enter existing password"),
                  }),
                  c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                    size: "16",
                    xstyle: [f.description, f.marginBottom20],
                    children: s._(
                      /*BTDS*/ "To turn off App lock, enter your existing password.",
                    ),
                  }),
                  c.jsxs(r("WAWebFlexItem.react"), {
                    xstyle: o("WAWebPasscodeModalStyles").bottomSpacing,
                    children: [
                      c.jsx(r("WAWebPasswordInput.react"), {
                        value: l,
                        onChange: A,
                        onKeyDown: O,
                        placeholder: s._(/*BTDS*/ "Enter password").toString(),
                        focusOnMount: !0,
                        enableShowPassword: !0,
                        testid: void 0,
                      }),
                      c.jsx(o("WAWebText_DONOTUSE.react").Text, {
                        as: "div",
                        size: "13",
                        color: "danger",
                        xstyle: [
                          o("WAWebPasscodeModalStyles").errorText,
                          f.marginTop4,
                        ],
                        extras: { role: "alert" },
                        children: o(
                          "WAWebScreenLockErrorMessages",
                        ).getErrorMessage({
                          emptyInputEntered: g,
                          incorrectPasscode: b,
                          onlyOneTryRemaining: w,
                          triesExceeded: M,
                        }),
                      }),
                    ],
                  }),
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    justify: "end",
                    children: [
                      c.jsx(r("WAWebFlexItem.react"), {
                        xstyle: f.marginEnd4,
                        children: c.jsx(o("WAWebButton.react").Button, {
                          type: "secondary",
                          onClick: h,
                          testid: void 0,
                          buttonType: "button",
                          children: s._(/*BTDS*/ "Cancel"),
                        }),
                      }),
                      c.jsx(r("WAWebFlexItem.react"), {
                        children: c.jsx(o("WAWebButton.react").Button, {
                          type: "primary",
                          onClick: function () {
                            F();
                          },
                          disabled: R || M || x || D != null,
                          spinner: R,
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
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = g;
  },
  226,
);
