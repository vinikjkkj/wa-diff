__d(
  "WAWebLinkDevicePhoneNumberCodeScreen.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebAlternateDeviceLinkingLink.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebLinkDeviceAction",
    "WAWebLinkDeviceCodeView.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceEvents",
    "WAWebLinkDevicePhoneNumberCodeCells.react",
    "WAWebPhoneUtils",
    "WAWebRefreshLargeIcon.react",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
    "useWAWebTimeout",
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
      g = f.useEffect,
      h = f.useState,
      y = 5,
      C = "link-device-phone-number-code-screen-instructions",
      b = {
        phoneCodeWarning: {
          backgroundColor: "x1l6jbk0",
          color: "xbkck4w",
          borderStartStartRadius: "x1rgw4pv",
          borderStartEndRadius: "x1vjm0to",
          borderEndEndRadius: "xnqoqkk",
          borderEndStartRadius: "x16lu3ki",
          height: "xng8ra",
          width: "xdzyupr",
          marginTop: "x1rdy4ex",
          $$css: !0,
        },
        phoneCodeWarningIcon: { color: "xbkck4w", $$css: !0 },
        errorTitle: { lineHeight: "x1u7k74", $$css: !0 },
        errorAction: {
          fontWeight: "x1ny7uwr",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
      };
    function v(t) {
      var n = t.code,
        a = h(0),
        i = a[0],
        l = a[1],
        p = h(!0),
        f = p[0],
        b = p[1],
        v = h(!1),
        R = v[0],
        L = v[1];
      g(function () {
        (b(!1), o("WAWebCmd").Cmd.onInitialLoadReadyFromBridge());
      }, []);
      var E = n == null || i > y,
        k = h(!1),
        I = k[0],
        T = k[1],
        D = r("useWAWebStableCallback")(function (t) {
          var n = i + 1;
          (t != null && t.resetRefreshCount ? (n = 0) : (n = i + 1),
            l(n),
            L(!1),
            T(!1),
            n <= y &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: regenerating link code...",
                  ])),
              ),
              o("WAWebLinkDeviceAction").refreshAltLinkingCode()));
        }),
        x = o("useWAWebTimeout").useTimeout(
          function () {
            (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "primary_hello_expire",
            ),
              D());
          },
          1 * o("WATimeUtils").MINUTE_MILLISECONDS,
        ),
        $ = x[0],
        P = x[1];
      (o("useWAWebListener").useListener(
        o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents,
        "link_device_events:primary_hello_received",
        function () {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: primary hello rcvd, 1min code regen timer",
              ])),
          ),
            $());
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents,
          "link_device_events:force_manual_refresh",
          function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: force manual refresh received",
                ])),
            ),
              o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "force_manual_refresh",
              ),
              L(!0),
              o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking());
          },
        ));
      var N = o("useWAWebTimeout").useTimeout(
          function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: regen code, 6min TTL expired",
                ])),
            ),
              o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "code_ttl_expire",
              ),
              D());
          },
          3.25 * o("WATimeUtils").MINUTE_MILLISECONDS,
        ),
        M = N[0],
        w = N[1];
      g(
        function () {
          E || M();
        },
        [M, E],
      );
      var A = r("useWAWebStableCallback")(function () {
        (P(), w());
      });
      (g(
        function () {
          if (i > y || R) {
            (A(), T(!0));
            return;
          }
        },
        [i, R, D, A],
      ),
        r("useWAWebOnUnmount")(function () {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: canceling link code timers",
              ])),
          ),
            A());
        }));
      var F;
      f || E
        ? (F = _.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k x10wjd1d",
            children: _.jsx(o("WAWebSpinner.react").Spinner, {}),
          }))
        : I
          ? (F = _.jsx(S, {
              onClick: function () {
                D({ resetRefreshCount: !0 });
              },
            }))
          : (F = _.jsx(r("WAWebLinkDevicePhoneNumberCodeCells.react"), {
              code: r("WANullthrows")(t.code),
              "aria-details": C,
            }));
      var O = o("WAWebPhoneUtils").formatPhone(t.phoneNumber);
      return _.jsx(o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView, {
        codeType: o("WAWebLinkDeviceCodeViewCodeType")
          .LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
        testid: void 0,
        apiCmd: t.apiCmd,
        title: s._(/*BTDS*/ "Enter code on phone"),
        subtitle: s._(/*BTDS*/ "Linking WhatsApp account {=m2} ({=m5})", [
          s._implicitParam(
            "=m2",
            _.jsx("strong", {
              children: s._(/*BTDS*/ "{phone-number}", [
                s._param(
                  "phone-number",
                  _.jsx("span", { dir: "ltr", children: O }),
                ),
              ]),
            }),
          ),
          s._implicitParam(
            "=m5",
            _.jsx(r("WAWebClickableLink.react"), {
              className: "x1v5yvga",
              onClick: t.onClickEditPhoneNumber,
              children: s._(/*BTDS*/ "edit"),
            }),
          ),
        ]),
        alternativeLinkDeviceMethodHint: _.jsx(
          r("WAWebAlternateDeviceLinkingLink.react"),
          {
            codeType: o("WAWebLinkDeviceCodeViewCodeType")
              .LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
            onClick: t.onClickLinkWithQr,
          },
        ),
        children: _.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k" },
              1: {
                className: "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x14atkfc",
              },
            }[!E << 0],
            {
              dir: "ltr",
              "aria-live": "polite",
              "aria-atomic": "true",
              "aria-label": s._(/*BTDS*/ "Enter code on phone:"),
              children: F,
            },
          ),
        ),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            b.phoneCodeWarning,
            o("WAWebUISpacing").uiMargin.horizAuto,
            o("WAWebUISpacing").uiPadding.horiz20,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = _.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.end10,
            children: _.jsx(o("WAWebRefreshLargeIcon.react").RefreshLargeIcon, {
              width: 32,
              height: 32,
              iconXstyle: b.phoneCodeWarningIcon,
            }),
          })),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = _.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: b.errorTitle,
            children: s._(/*BTDS*/ "Code expired"),
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = _.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              a,
              _.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "start",
                justify: "start",
                children: [
                  i,
                  _.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: b.errorAction,
                    children: s._(/*BTDS*/ "Click to generate new code"),
                  }),
                ],
              }),
            ],
          })),
          (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== e.onClick
          ? ((u = _.jsx(
              r("WAWebUnstyledButton.react"),
              { xstyle: n, onClick: e.onClick, children: l },
              "expiry",
            )),
            (t[4] = e.onClick),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    l.default = v;
  },
  226,
);
