__d(
  "WAWebSetUsernameDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCheckUsernameAvailabilityJob",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebSetContactUsernameAction",
    "WAWebStopEvent",
    "WAWebUsernameChangedModal.react",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameCreationSuccessDrawer.react",
    "WAWebUsernameErrorUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyInfoDrawer.react",
    "WAWebUsernameStringUtils",
    "WAWebUsernameTypes",
    "WAWebUsernameValidationUtils",
    "WAWebWamEnumUsernameCreationActionName",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSText.react",
    "WDSTextField.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "useLazyRef",
    "useWAWebFocusOnMount",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        description: {
          width: "xthe8de",
          marginInlineStart: "x1olwjlq",
          $$css: !0,
        },
        marginStart12: { marginInlineStart: "x1uvdrpn", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingAll32: {
          paddingTop: "x1sk1jro",
          paddingInlineEnd: "x1evaxtz",
          paddingBottom: "x1ci70gm",
          paddingInlineStart: "x1m4z3lf",
          $$css: !0,
        },
      };
    function _(e) {
      return e.replace(/[^0-9]/g, "").length;
    }
    function f(e) {
      var t = o("WAWebUsernameGatingUtils").usernameKeyUpsellMode();
      return t === 0
        ? !1
        : t === 2
          ? !0
          : e.length <=
              o("WAWebUsernameGatingUtils").usernameKeyUpsellMaxCharacters() &&
            _(e) <= o("WAWebUsernameGatingUtils").usernameKeyUpsellMaxNumbers();
    }
    function g(e) {
      var t = e.contactId,
        a = e.contactUsername,
        i = e.headerText,
        l = e.onBack,
        c = e.ref,
        _ = m(a),
        g = _[0],
        h = _[1],
        y = m(null),
        C = y[0],
        b = y[1],
        v = m(!1),
        S = v[0],
        R = v[1],
        L = m(!1),
        E = L[0],
        k = L[1],
        I = r("useLazyRef")(function () {
          return new AbortController();
        }),
        T = m(!1),
        D = T[0],
        x = T[1],
        $ = r("useWAWebUnmountSignal")(),
        P = r("useWAWebFocusOnMount")(),
        N = r("isStringNullOrEmpty")(a)
          ? o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION
          : o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT;
      d(
        function () {
          P.current != null && P.current.focus();
        },
        [P],
      );
      var M = function (t) {
          var e = t.isAvailable,
            n = t.isPending;
          (e != null && R(e), n != null && k(n));
        },
        w = function (t) {
          if ((h(t), t === a)) {
            (b(null), M({ isAvailable: !1, isPending: !1 }));
            return;
          }
          if (
            (I.current.abort(),
            (I.current = new AbortController()),
            b(null),
            r("isStringNullOrEmpty")(t))
          )
            k(!1);
          else {
            k(!0);
            var e = I.current.signal;
            window.setTimeout(function () {
              return void A(t, e);
            }, 750);
          }
        },
        A = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (r("isStringNullOrEmpty")(e)) {
                M({ isAvailable: !1, isPending: !1 });
                return;
              }
              var n = o("WAWebUsernameValidationUtils").validateUsernameLocally(
                e,
              );
              if (!n.isValid) {
                M({ isAvailable: !1, isPending: !1 });
                var a =
                  n.errorType ===
                  o("WAWebUsernameTypes").UsernameValidationErrorType
                    .INVALID_CHARACTER
                    ? o(
                        "WAWebUsernameStringUtils",
                      ).getUsernameInvalidCharacterMessage()
                    : n.errorType ===
                        o("WAWebUsernameTypes").UsernameValidationErrorType
                          .INVALID_LENGTH
                      ? o(
                          "WAWebUsernameStringUtils",
                        ).getUsernameInvalidLengthMessage(
                          o("WAWebUsernameTypes").USERNAME_MIN_LENGTH,
                          o("WAWebUsernameTypes").USERNAME_MAX_LENGTH,
                        )
                      : n.errorType ===
                          o("WAWebUsernameTypes").UsernameValidationErrorType
                            .INVALID_NO_LETTERS
                        ? o(
                            "WAWebUsernameStringUtils",
                          ).getUsernameInvalidNoLettersMessage()
                        : n.errorType ===
                            o("WAWebUsernameTypes").UsernameValidationErrorType
                              .INVALID_PERIODS
                          ? o(
                              "WAWebUsernameStringUtils",
                            ).getUsernameInvalidPeriodsMessage()
                          : n.errorType ===
                              o("WAWebUsernameTypes")
                                .UsernameValidationErrorType
                                .INVALID_DOMAIN_SUFFIX
                            ? o(
                                "WAWebUsernameStringUtils",
                              ).getUsernameInvalidDomainSuffixMessage()
                            : n.errorType ===
                                o("WAWebUsernameTypes")
                                  .UsernameValidationErrorType
                                  .INVALID_WWW_PREFIX
                              ? o(
                                  "WAWebUsernameStringUtils",
                                ).getUsernameInvalidWWWPrefixMessage()
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      n.errorType,
                                  );
                                })();
                b(a);
                return;
              }
              if (!t.aborted) {
                var i = function (t) {
                  o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.log({
                    usernameCreationCurrentScreen: N,
                    usernameCreationActionName: t
                      ? o("WAWebWamEnumUsernameCreationActionName")
                          .USERNAME_CREATION_ACTION_NAME
                          .USERNAME_AVAILABILITY_CHECK_SUCCESS
                      : o("WAWebWamEnumUsernameCreationActionName")
                          .USERNAME_CREATION_ACTION_NAME
                          .USERNAME_AVAILABILITY_CHECK_FAILURE,
                    usernameCreationFlowType: o(
                      "WAWebWamEnumUsernameCreationFlowType",
                    ).USERNAME_CREATION_FLOW_TYPE.CREATION,
                  });
                };
                try {
                  var l = yield o(
                      "WAWebCheckUsernameAvailabilityJob",
                    ).getUsernameAvailability(e),
                    s = l.isUsernameAvailable;
                  if (t.aborted) return;
                  (i(s),
                    M({ isAvailable: s }),
                    s ||
                      b(
                        o(
                          "WAWebUsernameStringUtils",
                        ).getUsernameUnavailableMessage(),
                      ));
                } catch (e) {
                  (i(!1),
                    M({ isAvailable: !1 }),
                    b(
                      o(
                        "WAWebUsernameStringUtils",
                      ).getUsernameUnavailableMessage(),
                    ));
                }
                M({ isPending: !1 });
              }
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })(),
        F = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.log({
              usernameCreationCurrentScreen: N,
              usernameCreationActionName: o(
                "WAWebWamEnumUsernameCreationActionName",
              ).USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_USERNAME,
              usernameCreationFlowType: o(
                "WAWebWamEnumUsernameCreationFlowType",
              ).USERNAME_CREATION_FLOW_TYPE.CREATION,
            }),
              x(!0),
              yield o("WAWebSetContactUsernameAction")
                .setMyUsername(g)
                .then(function (e) {
                  if (!$.aborted && e) {
                    if ((k(!1), g == null)) return;
                    a != null
                      ? o("WAWebModalManager").ModalManager.open(
                          u.jsx(r("WAWebUsernameChangedModal.react"), {
                            username: g,
                            contactId: t,
                          }),
                        )
                      : f(g)
                        ? (o(
                            "WAWebUsernameCreationActionLogger",
                          ).UsernameCreationActionLogger.log({
                            usernameCreationCurrentScreen: o(
                              "WAWebWamEnumUsernameCreationCurrentScreen",
                            ).USERNAME_CREATION_CURRENT_SCREEN
                              .USERNAME_PIN_EDUCATION,
                            usernameCreationActionName: o(
                              "WAWebWamEnumUsernameCreationActionName",
                            ).USERNAME_CREATION_ACTION_NAME.VIEW,
                            usernameCreationFlowType: o(
                              "WAWebWamEnumUsernameCreationFlowType",
                            ).USERNAME_CREATION_FLOW_TYPE.CREATION,
                          }),
                          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                            u.jsx(r("WAWebUsernameKeyInfoDrawer.react"), {
                              username: g,
                              contactId: t,
                              fromUsernameCreation: !0,
                            }),
                          ))
                        : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                            u.jsx(
                              r("WAWebUsernameCreationSuccessDrawer.react"),
                              { contactId: t, username: g },
                            ),
                          );
                  }
                })
                .catch(function (e) {
                  $.aborted ||
                    o("WAWebUsernameErrorUtils").handleErrorBasedOnErrorCode(
                      e,
                      F,
                    );
                })
                .finally(function () {
                  $.aborted || x(!1);
                }));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        O = s._(/*BTDS*/ "People will be able to find you with this username."),
        B = s._(
          /*BTDS*/ "People in your conversations will see your new username after you change it.",
        ),
        W = a != null ? B : O,
        q = u.jsx(o("WAWebFlex.react").FlexItem, {
          xstyle: p.marginStart12,
          grow: 1,
          shrink: 1,
          children: u.jsx("div", {
            onCopy: o("WAWebStopEvent").stopPropagation,
            children: u.jsx(r("WDSTextField.react"), {
              label: s._(/*BTDS*/ "Username"),
              testid: void 0,
              StartIcon: r("WDSIconIcAlternateEmail.react"),
              defaultValue: g != null ? g : "",
              onValueChange: w,
              maxCharacterCount: o("WAWebUsernameTypes").USERNAME_MAX_LENGTH,
              error: C != null && E === !1,
              errorText: C != null && E === !1 ? C : null,
              EndIcon:
                S === !0 && E === !1 && g !== a
                  ? r("WDSIconIcCheckCircleFilled.react")
                  : void 0,
              loading: E === !0,
              bottomText:
                S === !0 && E === !1 && g !== a
                  ? o("WAWebUsernameStringUtils").getUsernameAvailableMessage()
                  : "",
              ref: P,
            }),
          }),
        });
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: c,
        tsNavigationData: { surface: "unknown", viewName: "set-username" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: l,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: [
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    margin: 32,
                    align: "center",
                    xstyle: p.description,
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      textAlign: "center",
                      children: W,
                    }),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    xstyle: p.paddingHoriz24,
                    children: q,
                  }),
                ],
              }),
              u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  xstyle: p.paddingAll32,
                  children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                    stretch: !0,
                    onClick: F,
                    spinner: D,
                    disabled:
                      g == null ||
                      (g == null ? void 0 : g.length) === 0 ||
                      S !== !0 ||
                      E === !0 ||
                      g === a ||
                      D,
                    children: s._(/*BTDS*/ "Save"),
                  }),
                }),
              }),
            ],
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
