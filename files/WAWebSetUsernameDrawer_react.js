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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(54),
        a = e.contactId,
        i = e.contactUsername,
        l = e.headerText,
        c = e.onBack,
        _ = e.ref,
        g = m(i),
        y = g[0],
        C = g[1],
        b = m(null),
        v = b[0],
        S = b[1],
        R = m(!1),
        L = R[0],
        E = R[1],
        k = m(!1),
        I = k[0],
        T = k[1],
        D = r("useLazyRef")(h),
        x = m(!1),
        $ = x[0],
        P = x[1],
        N = r("useWAWebUnmountSignal")(),
        M = r("useWAWebFocusOnMount")(),
        w = r("isStringNullOrEmpty")(i)
          ? o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDUCATION
          : o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_EDIT,
        A,
        F;
      (t[0] !== M
        ? ((A = function () {
            M.current != null && M.current.focus();
          }),
          (F = [M]),
          (t[0] = M),
          (t[1] = A),
          (t[2] = F))
        : ((A = t[1]), (F = t[2])),
        d(A, F));
      var O;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function (t) {
            var e = t.isAvailable,
              n = t.isPending;
            (e != null && E(e), n != null && T(n));
          }),
          (t[3] = O))
        : (O = t[3]);
      var B = O,
        W;
      if (t[4] !== i || t[5] !== D || t[6] !== w) {
        W = function (t) {
          if ((C(t), t === i)) {
            (S(null), B({ isAvailable: !1, isPending: !1 }));
            return;
          }
          if (
            (D.current.abort(),
            (D.current = new AbortController()),
            S(null),
            r("isStringNullOrEmpty")(t))
          )
            T(!1);
          else {
            T(!0);
            var e = D.current.signal;
            window.setTimeout(function () {
              return void q(t, e);
            }, 750);
          }
        };
        var q = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (r("isStringNullOrEmpty")(e)) {
                B({ isAvailable: !1, isPending: !1 });
                return;
              }
              var n = o("WAWebUsernameValidationUtils").validateUsernameLocally(
                e,
              );
              if (!n.isValid) {
                B({ isAvailable: !1, isPending: !1 });
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
                S(a);
                return;
              }
              if (!t.aborted) {
                var i = function (t) {
                  o(
                    "WAWebUsernameCreationActionLogger",
                  ).UsernameCreationActionLogger.log({
                    usernameCreationCurrentScreen: w,
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
                    B({ isAvailable: s }),
                    s ||
                      S(
                        o(
                          "WAWebUsernameStringUtils",
                        ).getUsernameUnavailableMessage(),
                      ));
                } catch (e) {
                  (i(!1),
                    B({ isAvailable: !1 }),
                    S(
                      o(
                        "WAWebUsernameStringUtils",
                      ).getUsernameUnavailableMessage(),
                    ));
                }
                B({ isPending: !1 });
              }
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })();
        ((t[4] = i), (t[5] = D), (t[6] = w), (t[7] = W));
      } else W = t[7];
      var U;
      t[8] !== a || t[9] !== i || t[10] !== N || t[11] !== w || t[12] !== y
        ? ((U = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o(
                "WAWebUsernameCreationActionLogger",
              ).UsernameCreationActionLogger.log({
                usernameCreationCurrentScreen: w,
                usernameCreationActionName: o(
                  "WAWebWamEnumUsernameCreationActionName",
                ).USERNAME_CREATION_ACTION_NAME.CLICK_SAVE_USERNAME,
                usernameCreationFlowType: o(
                  "WAWebWamEnumUsernameCreationFlowType",
                ).USERNAME_CREATION_FLOW_TYPE.CREATION,
              }),
                P(!0),
                yield o("WAWebSetContactUsernameAction")
                  .setMyUsername(y)
                  .then(function (e) {
                    if (!N.aborted && e) {
                      if ((T(!1), y == null)) return;
                      i != null
                        ? o("WAWebModalManager").ModalManager.open(
                            u.jsx(r("WAWebUsernameChangedModal.react"), {
                              username: y,
                              contactId: a,
                            }),
                          )
                        : f(y)
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
                            o(
                              "WAWebDrawerManager",
                            ).DrawerManager.openDrawerLeft(
                              u.jsx(r("WAWebUsernameKeyInfoDrawer.react"), {
                                username: y,
                                contactId: a,
                                fromUsernameCreation: !0,
                              }),
                            ))
                          : o(
                              "WAWebDrawerManager",
                            ).DrawerManager.openDrawerLeft(
                              u.jsx(
                                r("WAWebUsernameCreationSuccessDrawer.react"),
                                { contactId: a, username: y },
                              ),
                            );
                    }
                  })
                  .catch(function (e) {
                    N.aborted ||
                      o("WAWebUsernameErrorUtils").handleErrorBasedOnErrorCode(
                        e,
                        U,
                      );
                  })
                  .finally(function () {
                    N.aborted || P(!1);
                  }));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[8] = a),
          (t[9] = i),
          (t[10] = N),
          (t[11] = w),
          (t[12] = y),
          (t[13] = U))
        : (U = t[13]);
      var V;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(
            /*BTDS*/ "People will be able to find you with this username.",
          )),
          (t[14] = V))
        : (V = t[14]);
      var H = V,
        G;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(
            /*BTDS*/ "People in your conversations will see your new username after you change it.",
          )),
          (t[15] = G))
        : (G = t[15]);
      var z = G,
        j = i != null ? z : H,
        K;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Username")), (t[16] = K))
        : (K = t[16]);
      var Q = y != null ? y : "",
        X = v != null && I === !1,
        Y = v != null && I === !1 ? v : null,
        J =
          L === !0 && I === !1 && y !== i
            ? r("WDSIconIcCheckCircleFilled.react")
            : void 0,
        Z = I === !0,
        ee;
      t[17] !== i || t[18] !== L || t[19] !== I || t[20] !== y
        ? ((ee =
            L === !0 && I === !1 && y !== i
              ? o("WAWebUsernameStringUtils").getUsernameAvailableMessage()
              : ""),
          (t[17] = i),
          (t[18] = L),
          (t[19] = I),
          (t[20] = y),
          (t[21] = ee))
        : (ee = t[21]);
      var te;
      t[22] !== W ||
      t[23] !== M ||
      t[24] !== J ||
      t[25] !== Z ||
      t[26] !== ee ||
      t[27] !== Q ||
      t[28] !== X ||
      t[29] !== Y
        ? ((te = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.marginStart12,
            grow: 1,
            shrink: 1,
            children: u.jsx("div", {
              onCopy: o("WAWebStopEvent").stopPropagation,
              children: u.jsx(r("WDSTextField.react"), {
                label: K,
                testid: void 0,
                StartIcon: r("WDSIconIcAlternateEmail.react"),
                defaultValue: Q,
                onValueChange: W,
                maxCharacterCount: o("WAWebUsernameTypes").USERNAME_MAX_LENGTH,
                error: X,
                errorText: Y,
                EndIcon: J,
                loading: Z,
                bottomText: ee,
                ref: M,
              }),
            }),
          })),
          (t[22] = W),
          (t[23] = M),
          (t[24] = J),
          (t[25] = Z),
          (t[26] = ee),
          (t[27] = Q),
          (t[28] = X),
          (t[29] = Y),
          (t[30] = te))
        : (te = t[30]);
      var ne = te,
        re;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = { surface: "unknown", viewName: "set-username" }),
          (t[31] = re))
        : (re = t[31]);
      var oe;
      t[32] !== l || t[33] !== c
        ? ((oe = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: c,
          })),
          (t[32] = l),
          (t[33] = c),
          (t[34] = oe))
        : (oe = t[34]);
      var ae;
      t[35] !== j
        ? ((ae = u.jsx(o("WAWebFlex.react").FlexItem, {
            margin: 32,
            align: "center",
            xstyle: p.description,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: j,
            }),
          })),
          (t[35] = j),
          (t[36] = ae))
        : (ae = t[36]);
      var ie;
      t[37] !== ne
        ? ((ie = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: p.paddingHoriz24,
            children: ne,
          })),
          (t[37] = ne),
          (t[38] = ie))
        : (ie = t[38]);
      var le;
      t[39] !== ae || t[40] !== ie
        ? ((le = u.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            theme: "full-height",
            children: [ae, ie],
          })),
          (t[39] = ae),
          (t[40] = ie),
          (t[41] = le))
        : (le = t[41]);
      var se =
          y == null ||
          (y == null ? void 0 : y.length) === 0 ||
          L !== !0 ||
          I === !0 ||
          y === i ||
          $,
        ue;
      t[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = s._(/*BTDS*/ "Save")), (t[42] = ue))
        : (ue = t[42]);
      var ce;
      t[43] !== U || t[44] !== $ || t[45] !== se
        ? ((ce = u.jsx(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              xstyle: p.paddingAll32,
              children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                stretch: !0,
                onClick: U,
                spinner: $,
                disabled: se,
                children: ue,
              }),
            }),
          })),
          (t[43] = U),
          (t[44] = $),
          (t[45] = se),
          (t[46] = ce))
        : (ce = t[46]);
      var de;
      t[47] !== le || t[48] !== ce
        ? ((de = u.jsxs(r("WAWebDrawerBody.react"), { children: [le, ce] })),
          (t[47] = le),
          (t[48] = ce),
          (t[49] = de))
        : (de = t[49]);
      var me;
      return (
        t[50] !== _ || t[51] !== oe || t[52] !== de
          ? ((me = u.jsxs(r("WAWebDrawer.react"), {
              ref: _,
              tsNavigationData: re,
              children: [oe, de],
            })),
            (t[50] = _),
            (t[51] = oe),
            (t[52] = de),
            (t[53] = me))
          : (me = t[53]),
        me
      );
    }
    function h() {
      return new AbortController();
    }
    l.default = g;
  },
  226,
);
