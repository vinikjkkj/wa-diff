__d(
  "WAWebAppRatingModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebAccessibility.react",
    "WAWebAppRatingActiveUsageDays",
    "WAWebAppRatingCommonFbt",
    "WAWebAppRatingStarButton.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebNuxSync",
    "WAWebRichTextField.react",
    "WAWebStopEvent",
    "WAWebStreamModel",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTooltip.react",
    "WAWebUserPrefsNuxPreferences",
    "WDSFocusStateStyles",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "stylex",
    "useVisibility",
    "useWAWebAppRatingSubmitter",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useCallback,
      h = f.useEffectEvent,
      y = f.useRef,
      C = f.useState,
      b = [1, 2, 3, 4, 5],
      v = 5e3,
      S = {
        container: { rowGap: "xgpatz3", $$css: !0 },
        starContainer: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          whiteSpace: "xuxw1ft",
          alignSelf: "xqcrz7y",
          outline: "x1a2a7pz",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          marginInlineStart: "x1a5kqlc",
          $$css: !0,
        },
        feedbackField: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderBottomWidth: "xv7zg05",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "xhl97hz x1vtqnfi",
          $$css: !0,
        },
      };
    function R(t, n) {
      var r = "app_rating_modal_" + n + "_error",
        a = t.message || "Unknown error",
        i = t.stack || "No stack trace available";
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["", ": ", " ", ""])),
          r,
          a,
          i,
        )
        .sendLogs(r, {
          sampling: 1,
          sendLogsType: o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION_SAD,
        });
    }
    function L(e) {
      var t,
        a = e.onCancel,
        i = e.onSubmit,
        l = r("useWAWebUnmountSignal")(),
        p = r("useWAWebAppRatingSubmitter")(),
        f = C(0),
        L = f[0],
        E = f[1],
        k = C(0),
        I = k[0],
        T = k[1],
        D = C(0),
        x = D[0],
        $ = D[1],
        P = C(!1),
        N = P[0],
        M = P[1],
        w = C(""),
        A = w[0],
        F = w[1],
        O = C(null),
        B = O[0],
        W = O[1],
        q = C(!1),
        U = q[0],
        V = q[1],
        H = C(!1),
        G = H[0],
        z = H[1],
        j = y(null),
        K = y(null),
        Q = h(function () {
          var e = o("WAWebUserPrefsNuxPreferences").getNuxAcknowledgedTimestamp(
              o("WAWebNux").NuxSyncKey.LAST_DATE_DIALOG_OPENED,
            ),
            t = e != null ? new Date(e).toLocaleString() : "never";
          o(
            "WAWebAppRatingActiveUsageDays",
          ).updateActiveUsageDaysSinceDialogOpened();
          var n = o(
            "WAWebAppRatingActiveUsageDays",
          ).getActiveUsageDaysSinceDialogOpened();
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "App Rating Dialog - Last time window opened: ",
                "",
              ])),
            t,
          ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "App Rating Dialog - Active usage days since dialog opened: ",
                  "",
                ])),
              n,
            ),
            r("WAWebNuxSync")
              .acknowledgeNux(o("WAWebNux").NuxSyncKey.LAST_DATE_DIALOG_OPENED)
              .then(function (e) {
                var t = new Date(e).toLocaleString();
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "App Rating Dialog - Updated timestamp: ",
                      "",
                    ])),
                  t,
                );
              })
              .catch(function (e) {
                R(
                  e instanceof Error ? e : r("err")(String(e)),
                  "record_dialog_opened",
                );
              }));
        }),
        X = r("useVisibility")({ onVisible: Q }),
        Y = X[0],
        J = g(
          function () {
            return L > 0;
          },
          [L],
        ),
        Z = [
          {
            isValid: J,
            errorMessage: s._(/*BTDS*/ "Please select a star rating"),
            onError: function () {
              V(!0);
            },
          },
        ],
        ee = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!G)
              try {
                var e = Z.find(function (e) {
                  return !e.isValid();
                });
                if (e) {
                  e.onError();
                  return;
                }
                z(!0);
                var t = A.trim() === "" ? " " : A,
                  n = { rating: L, feedback: t };
                (i == null || i(n),
                  yield p(
                    n,
                    l,
                    function () {
                      o("WAWebToastManager").ToastManager.open(
                        _.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Rating submitted"),
                        }),
                      );
                    },
                    function () {
                      (o("WAWebToastManager").ToastManager.open(
                        _.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Submission error occurred. Please try again.",
                          ),
                        }),
                      ),
                        R(
                          r("err")(
                            "Unknown error during app rating submission",
                          ),
                          "on_failure",
                        ),
                        z(!1));
                    },
                  ));
              } catch (e) {
                (z(!1),
                  R(
                    e instanceof Error ? e : r("err")(String(e)),
                    "submit_handler",
                  ));
              }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        te = function () {
          (a == null || a(), o("WAWebModalManager").ModalManager.close());
        },
        ne = function (t) {
          var e = t.text;
          (F(e), B != null && W(null));
        },
        re = function (t) {
          (E(t), U && V(!1));
        },
        oe = function (t) {
          var e = t.key;
          if (e === "ArrowRight" || e === "ArrowLeft") {
            t.preventDefault();
            var n = x;
            if (e === "ArrowRight") n = Math.min(5, x + 1);
            else if (e === "ArrowLeft") {
              var r = L > 0 ? 1 : 0;
              n = Math.max(r, x - 1);
            }
            ($(n), T(n));
          }
          (e === "Enter" || e === " ") && (t.preventDefault(), x > 0 && re(x));
        },
        ae = function (t) {
          if (t.target === t.currentTarget) {
            var e = L > 0 ? L : 0;
            ($(e), T(e), M(!0));
          }
        },
        ie = function () {
          ($(0), T(0), M(!1));
        },
        le = { enter: o("WAWebStopEvent").stopPropagation },
        se = s._(/*BTDS*/ "Share feedback about your experience."),
        ue = b.map(function (e) {
          return s._(/*BTDS*/ '_j{"*":"{number} stars","_1":"1 star"}', [
            s._plural(e, "number"),
          ]);
        }),
        ce = C(
          (t = o("WAWebStreamModel")).Stream.displayInfo !==
            t.StreamInfo.NORMAL,
        ),
        de = ce[0],
        me = ce[1],
        pe = y(null),
        _e = t.Stream.displayInfo !== t.StreamInfo.NORMAL;
      o("useWAWebListener").useListener(
        t.Stream,
        "change:displayInfo",
        function () {
          var e =
            o("WAWebStreamModel").Stream.displayInfo !==
            o("WAWebStreamModel").StreamInfo.NORMAL;
          me(function (t) {
            return e && !t ? !0 : !e && t ? !1 : t;
          });
        },
      );
      var fe = _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        ref: function (t) {
          ((pe.current = t), Y(t));
        },
        title: o("WAWebAppRatingCommonFbt").getModalTitle(),
        okDisabled: _e || G,
        okText: r("WAWebFbtCommon")("Submit"),
        cancelText: r("WAWebFbtCommon")("Close"),
        onOK: ee,
        onCancel: te,
        testid: void 0,
        children: _.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: le,
          children: [
            _.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
              text: s._(/*BTDS*/ "Rating has changed to {Rating}", [
                s._param("Rating", x),
              ]),
            }),
            _.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: S.container,
              children: [
                _.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "stretch",
                  children: [
                    _.jsx("div", {
                      tabIndex: 0,
                      role: "radiogroup",
                      "aria-label": s._(/*BTDS*/ "Star rating selection"),
                      onKeyDown: oe,
                      onFocus: ae,
                      onBlur: ie,
                      onMouseDown: o("WAWebStopEvent").preventDefault,
                      ref: K,
                      className: (m || (m = r("stylex")))([
                        S.starContainer,
                        N &&
                          o("WDSFocusStateStyles").WDSFocusStateStyles
                            .genericFocus,
                      ]),
                      children: b.map(function (e) {
                        return _.jsx(
                          r("WAWebAppRatingStarButton.react"),
                          {
                            value: e,
                            currentRating: L,
                            hoveredRating: I,
                            onClick: re,
                            onHover: T,
                            onHoverEnd: function () {
                              return T(0);
                            },
                            ariaLabel: ue[e - 1],
                            testid: void 0,
                          },
                          e,
                        );
                      }),
                    }),
                    U &&
                      _.jsx(o("WAWebText.react").WAWebTextSmall, {
                        children: s._(/*BTDS*/ "Please select a star rating"),
                      }),
                  ],
                }),
                _.jsx(o("WAWebText.react").WAWebTextSmall, {
                  children: s._(/*BTDS*/ "Feedback (optional)"),
                }),
                _.jsx(o("WAWebRichTextField.react").RichTextField, {
                  testid: void 0,
                  error: B,
                  maxLength: v,
                  onChange: ne,
                  inputPlaceholder: se,
                  ariaLabel: se,
                  ref: j,
                  value: A,
                  minVisibleLines: 3,
                  maxVisibleLines: 7,
                  multiline: !0,
                  enterIsNewLine: !0,
                  hideSpacer: !0,
                  hideFloatingLabel: !0,
                  theme: "gray-background",
                  containerXstyle: S.feedbackField,
                }),
                _.jsx(r("WAWebFlexItem.react"), {
                  grow: 1,
                  children: _.jsx(o("WAWebText.react").WAWebTextSmall, {
                    children: s._(
                      /*BTDS*/ "Your response is anonymous and will be used to help improve WhatsApp.",
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
      return de
        ? _.jsxs(_.Fragment, {
            children: [
              fe,
              _.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                targetRef: pe,
                position: o("WAWebTooltip.react").PopoverPosition.Top,
                alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
                buffer: 8,
                children: s._(
                  /*BTDS*/ "Connect to the internet to submit your rating",
                ),
              }),
            ],
          })
        : fe;
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  226,
);
