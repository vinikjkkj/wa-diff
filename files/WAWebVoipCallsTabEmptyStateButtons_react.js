__d(
  "WAWebVoipCallsTabEmptyStateButtons.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebApiParse",
    "WAWebCalendarMonthIcon.react",
    "WAWebDialerPadFlowLoadable",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLink",
    "WAWebVoipCreateCallLinksPopup.react",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSButton.react",
    "WDSColorStyles.stylex",
    "WDSIconIcDialpad.react",
    "WDSIconIcLink.react",
    "WDSIconIcVideoCall.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = {
        button: {
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          width: "x13oubkp",
          height: "xjp8j0k",
          $$css: !0,
        },
        columnContainer: {
          width: "xygnafs",
          textAlign: "x2b8uid",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          $$css: !0,
        },
        gridContainer: { rowGap: "xlxy9ep", columnGap: "xf91ah9", $$css: !0 },
        rowContainer: { rowGap: "xlxy9ep", columnGap: "xf91ah9", $$css: !0 },
        textContainer: {
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.Icon,
        a = e.onClick,
        i = e.text,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            p.button,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceDefault,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var s;
      t[1] !== n || t[2] !== a
        ? ((s = m.jsx(r("WDSButton.react"), {
            Icon: n,
            onPress: a,
            xstyle: l,
            variant: "borderless",
          })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = s))
        : (s = t[3]);
      var u;
      t[4] !== i
        ? ((u = m.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.textContainer,
            align: "center",
            children: m.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDefault",
              maxLines: 1,
              children: i,
            }),
          })),
          (t[4] = i),
          (t[5] = u))
        : (u = t[5]);
      var c;
      return (
        t[6] !== s || t[7] !== u
          ? ((c = m.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: p.columnContainer,
              children: [s, u],
            })),
            (t[6] = s),
            (t[7] = u),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    function f() {
      var t = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              if (o("WAWebVoipStackInterface").getVoipStackInterface == null)
                throw r("err")("not in windows env");
              var t = yield (c || (c = n("Promise"))).all([
                  o("WAWebVoipStackInterface").getVoipStackInterface(),
                  o("WAWebVoipCreateCallLink").createCallLink({
                    callType: "video",
                  }),
                ]),
                a = t[0],
                i = t[1],
                l = o("WAWebApiParse").parseCallLink(i);
              if (l == null) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] start call failed: malformed link ",
                        "",
                      ])),
                    i,
                  )
                  .sendLogs("voip-landing-page-start-call-link-malformed");
                return;
              }
              var d = o("WAWebFrontendContactGetters").getMyUsername(),
                p = l.data.callType === "video";
              yield a == null
                ? void 0
                : a.previewAndJoinCallLink(
                    l.data.token,
                    p,
                    o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                      .START_CALL,
                    d,
                  );
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: landing page: start call failed to create call link: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "voip-landing-page-start-call-call-link-creation-failed",
                ),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Could not start a new call. Try again after waiting for a few minutes.",
                    ),
                  }),
                ));
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        a = function () {
          o(
            "WAWebVoipCallsTabScheduleCallModal.react",
          ).handleScheduleCallForChat();
        },
        i = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            m.jsx(o("WAWebDialerPadFlowLoadable").WAWebDialerPadFlowLoadable, {
              onEnd: function () {
                o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
              },
              entryPoint: "calls_tab",
            }),
          );
        },
        l = o("WAWebABProps").getABPropConfigValue("calling_dialer_enable");
      return l
        ? m.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            align: "center",
            xstyle: p.gridContainer,
            children: [
              m.jsxs(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                xstyle: p.rowContainer,
                children: [
                  m.jsx(_, {
                    Icon: r("WDSIconIcVideoCall.react"),
                    onClick: function () {
                      return void t();
                    },
                    text: s._(/*BTDS*/ "Start call"),
                  }),
                  m.jsx(_, {
                    Icon: r("WDSIconIcLink.react"),
                    onClick: function () {
                      return void o(
                        "WAWebVoipCreateCallLinksPopup.react",
                      ).handleGenerateCallLinkClick();
                    },
                    text: s._(/*BTDS*/ "New call link"),
                  }),
                ],
              }),
              m.jsxs(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                xstyle: p.rowContainer,
                children: [
                  m.jsx(_, {
                    Icon: r("WDSIconIcDialpad.react"),
                    onClick: i,
                    text: s._(/*BTDS*/ "Call a number"),
                  }),
                  m.jsx(_, {
                    Icon: o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
                    onClick: a,
                    text: s._(/*BTDS*/ "Schedule call"),
                  }),
                ],
              }),
            ],
          })
        : m.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: p.rowContainer,
            children: [
              m.jsx(_, {
                Icon: r("WDSIconIcVideoCall.react"),
                onClick: function () {
                  return void t();
                },
                text: s._(/*BTDS*/ "Start call"),
              }),
              m.jsx(_, {
                Icon: r("WDSIconIcLink.react"),
                onClick: function () {
                  return void o(
                    "WAWebVoipCreateCallLinksPopup.react",
                  ).handleGenerateCallLinkClick();
                },
                text: s._(/*BTDS*/ "New call link"),
              }),
              m.jsx(_, {
                Icon: o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
                onClick: a,
                text: s._(/*BTDS*/ "Schedule call"),
              }),
            ],
          });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
