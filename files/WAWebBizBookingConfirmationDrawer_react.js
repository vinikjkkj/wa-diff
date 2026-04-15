__d(
  "WAWebBizBookingConfirmationDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFormatEventDateString",
    "WAWebL10N",
    "WAWebLineHeight",
    "WAWebMarkdownLinkFormatMutator",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPhoneUtils",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WDSButton.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCall.react",
    "WDSIconIcLink.react",
    "WDSIconIcLocationOn.react",
    "WDSIconIcMail.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconIcStickyNote2.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
        sectionTitleWrapper: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xcldk2z",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
        listItemContentWrapper: { columnGap: "xiyxwb5", $$css: !0 },
        paddingEnd0: { paddingInlineEnd: "xyri2b", $$css: !0 },
        drawerBlock: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          $$css: !0,
        },
        spacingSingle: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        spacingHalf: { paddingTop: "x1tiyuxx", $$css: !0 },
      },
      g = 3;
    function h(e) {
      var t = encodeURIComponent(e),
        n = r("WAWebL10N").getNormalizedLocale();
      return (
        "https://www.google.com/maps/search/?api=1&query=" + t + "&hl=" + n
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.actionLabel,
        a = e.description,
        i = e.icon,
        l = e.onActionClick,
        s = e.testid,
        u = e.textLimit,
        d;
      t[0] !== a
        ? ((d = a != null ? a.toString() : null), (t[0] = a), (t[1] = d))
        : (d = t[1]);
      var h = d,
        y = p(null),
        C = _(!1),
        b = C[0],
        v = C[1],
        S,
        R;
      (t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            var e = y.current;
            if (e != null) {
              var t = new ResizeObserver(function () {
                var t = o("WAWebLineHeight").getNumberOfLines(e);
                v(t > g);
              });
              return (
                t.observe(e),
                function () {
                  return t.disconnect();
                }
              );
            }
          }),
          (R = []),
          (t[2] = S),
          (t[3] = R))
        : ((S = t[2]), (R = t[3])),
        m(S, R));
      var L = b ? "start" : "center",
        E;
      t[4] !== i
        ? ((E = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            shrink: 0,
            xstyle: f.spacingSingle,
            children: c.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body1",
              children: i,
            }),
          })),
          (t[4] = i),
          (t[5] = E))
        : (E = t[5]);
      var k;
      t[6] !== h || t[7] !== u
        ? ((k =
            h != null &&
            c.jsx(r("WDSText.react"), {
              ref: y,
              colorName: "contentDefault",
              type: "Body1",
              children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
                text: h,
                textLimit: u != null ? u : 1 / 0,
                children: function (t) {
                  var e = t.textLimit;
                  return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    ellipsify: !0,
                    formatters: [
                      [[r("WAWebMarkdownLinkFormatMutator"), {}]],
                    ].concat(
                      o("WAWebFormatConfiguration").UntrustedGroupDesc({
                        expandedFormattingEnabled: !0,
                      }),
                    ),
                    inferLinesDirection: !0,
                    multiline: !0,
                    preserveWhitespace: !0,
                    text: h,
                    textLimit: e,
                  });
                },
              }),
            })),
          (t[6] = h),
          (t[7] = u),
          (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== n || t[10] !== l
        ? ((I =
            n != null &&
            l != null &&
            c.jsx(r("WDSTextualLink.react"), {
              onClick: l,
              textConfig: "Body2",
              children: n,
            })),
          (t[9] = n),
          (t[10] = l),
          (t[11] = I))
        : (I = t[11]);
      var T;
      t[12] !== k || t[13] !== I
        ? ((T = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            children: [k, I],
          })),
          (t[12] = k),
          (t[13] = I),
          (t[14] = T))
        : (T = t[14]);
      var D;
      t[15] !== L || t[16] !== E || t[17] !== T
        ? ((D = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: L,
            xstyle: f.listItemContentWrapper,
            children: [E, T],
          })),
          (t[15] = L),
          (t[16] = E),
          (t[17] = T),
          (t[18] = D))
        : (D = t[18]);
      var x;
      return (
        t[19] !== D || t[20] !== s
          ? ((x = c.jsx(r("WAWebDrawerBlock.react"), {
              blockXstyle: f.paddingEnd0,
              isRefresh: !0,
              multiline: !0,
              separator: !1,
              testid: void 0,
              xstyle: f.drawerBlock,
              children: D,
            })),
            (t[19] = D),
            (t[20] = s),
            (t[21] = x))
          : (x = t[21]),
        x
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.icon,
        a = e.label,
        i = e.onActionClick,
        l = e.testid,
        s;
      t[0] !== n
        ? ((s = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            shrink: 0,
            xstyle: f.spacingSingle,
            children: c.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body1",
              children: n,
            }),
          })),
          (t[0] = n),
          (t[1] = s))
        : (s = t[1]);
      var u;
      t[2] !== a
        ? ((u = c.jsx(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            children: c.jsx(r("WDSTextualLink.react"), {
              textConfig: "Body1",
              children: a,
            }),
          })),
          (t[2] = a),
          (t[3] = u))
        : (u = t[3]);
      var d;
      t[4] !== s || t[5] !== u
        ? ((d = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.listItemContentWrapper,
            children: [s, u],
          })),
          (t[4] = s),
          (t[5] = u),
          (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== i || t[8] !== d || t[9] !== l
          ? ((m = c.jsx(r("WAWebDrawerBlock.react"), {
              blockXstyle: f.paddingEnd0,
              isRefresh: !0,
              multiline: !0,
              onClick: i,
              separator: !1,
              testid: void 0,
              xstyle: f.drawerBlock,
              children: d,
            })),
            (t[7] = i),
            (t[8] = d),
            (t[9] = l),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    function b() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebModal.react").Modal, {
          actions: [
            c.jsx(
              r("WDSButton.react"),
              {
                label: r("WAWebFbtCommon")("OK"),
                onPress: o("WAWebModalManager").closeModalManager,
                testid: void 0,
                variant: "filled",
              },
              "ok",
            ),
          ],
          children: s._(/*BTDS*/ "Something went wrong. Please try again."),
        }),
      );
    }
    function v(t) {
      var a,
        i,
        l,
        u,
        d,
        p,
        g,
        v,
        S,
        R = t.bookingInfo,
        L = t.msg,
        E = t.onClose,
        k = t.phoneExistsPromise,
        I = k === void 0 ? null : k,
        T = _(!1),
        D = T[0],
        x = T[1],
        $ = _(null),
        P = $[0],
        N = $[1],
        M = (a = L.interactiveHeader) == null ? void 0 : a.title;
      m(
        function () {
          I == null ||
            I.then(N).catch(function (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[booking] phone query failed",
                  ])),
              );
            });
        },
        [I],
      );
      var w = Math.floor(Date.parse(R.startDatetime) / 1e3),
        A =
          R.endDatetime != null
            ? Math.floor(Date.parse(R.endDatetime) / 1e3)
            : null,
        F = o("WAWebFormatEventDateString").getEventDateStringFor(w, A),
        O = function () {
          var e,
            t,
            n = new Date(R.startDatetime),
            r =
              R.endDatetime != null
                ? new Date(R.endDatetime)
                : new Date(Date.parse(R.startDatetime) + 3600 * 1e3),
            a = function (t) {
              return t.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
            },
            i = a(n),
            l = a(r),
            s = encodeURIComponent(M != null ? M : ""),
            u = encodeURIComponent((e = R.location) != null ? e : ""),
            c = encodeURIComponent((t = R.description) != null ? t : ""),
            d =
              "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
              s +
              "&dates=" +
              i +
              "/" +
              l +
              "&location=" +
              u +
              "&details=" +
              c;
          o("WAWebExternalLink.react").openExternalLink(d);
        },
        B = function () {
          R.location != null &&
            o("WAWebExternalLink.react").openExternalLink(h(R.location));
        },
        W = function () {
          R.bookingUrl != null &&
            o("WAWebExternalLink.react").openExternalLink(R.bookingUrl);
        },
        q = function () {
          D ||
            P == null ||
            (x(!0),
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                yield o("WAWebVoipStartCall").startWAWebVoipCall(
                  P.wid,
                  !1,
                  o("WAWebWamEnumCallFromUi").CALL_FROM_UI.INTERACTIVE_MESSAGE,
                );
              } catch (e) {
                b();
              } finally {
                x(!1);
              }
            })());
        },
        U = function () {
          R.bookingManagementUrl != null &&
            o("WAWebExternalLink.react").openExternalLink(
              R.bookingManagementUrl,
            );
        },
        V = function () {
          var e = R.email;
          if (e != null) {
            var t = M != null ? encodeURIComponent(M) : "";
            o("WAWebExternalLink.react").openExternalLink(
              "mailto:" + e + "?subject=" + t,
            );
          }
        };
      return c.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "biz-booking-confirmation",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onCancel: E,
            title:
              (i =
                (l = R.displayContent) == null
                  ? void 0
                  : l.displayBottomSheetHeader) != null
                ? i
                : s._(/*BTDS*/ "Booking details"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: f.spacingHalf,
              children: [
                M != null &&
                  c.jsx(o("WAWebFlex.react").FlexColumn, {
                    shrink: 0,
                    xstyle: f.sectionTitleWrapper,
                    children: c.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Headline2",
                      children: M,
                    }),
                  }),
                c.jsx(y, {
                  actionLabel:
                    (u =
                      (d = R.displayContent) == null
                        ? void 0
                        : d.displayAddToCalendarCtaText) != null
                      ? u
                      : s._(/*BTDS*/ "Add to calendar"),
                  description: F,
                  icon: c.jsx(r("WDSIconIcCalendarMonth.react"), {
                    height: 24,
                    width: 24,
                  }),
                  onActionClick: O,
                  testid: void 0,
                }),
                R.location != null &&
                  c.jsx(y, {
                    actionLabel:
                      (p =
                        (g = R.displayContent) == null
                          ? void 0
                          : g.displayViewOnMapsCtaText) != null
                        ? p
                        : s._(/*BTDS*/ "View on maps"),
                    description: R.location,
                    icon: c.jsx(r("WDSIconIcLocationOn.react"), {
                      height: 24,
                      width: 24,
                    }),
                    textLimit: 200,
                    onActionClick: B,
                    testid: void 0,
                  }),
                R.bookingUrl != null &&
                  c.jsx(C, {
                    icon: c.jsx(r("WDSIconIcLink.react"), {
                      testid: void 0,
                      height: 24,
                      width: 24,
                    }),
                    label: R.bookingUrl,
                    onActionClick: W,
                    testid: void 0,
                  }),
                R.description != null &&
                  c.jsx(y, {
                    description: R.description,
                    icon: c.jsx(r("WDSIconIcStickyNote2.react"), {
                      height: 24,
                      width: 24,
                    }),
                    testid: void 0,
                    textLimit: 200,
                  }),
                R.phoneNumber != null &&
                  (P != null
                    ? c.jsx(C, {
                        icon: c.jsx(r("WDSIconIcCall.react"), {
                          height: 24,
                          width: 24,
                        }),
                        label: o("WAWebPhoneUtils").formatPhone(R.phoneNumber),
                        onActionClick: q,
                        testid: void 0,
                      })
                    : c.jsx(y, {
                        description: o("WAWebPhoneUtils").formatPhone(
                          R.phoneNumber,
                        ),
                        icon: c.jsx(r("WDSIconIcCall.react"), {
                          height: 24,
                          width: 24,
                        }),
                        testid: void 0,
                      })),
                R.email != null &&
                  c.jsx(C, {
                    icon: c.jsx(r("WDSIconIcMail.react"), {
                      height: 24,
                      width: 24,
                    }),
                    label: R.email,
                    onActionClick: V,
                    testid: void 0,
                  }),
              ],
            }),
          }),
          R.bookingManagementUrl != null &&
            c.jsx("div", {
              className:
                "x1xrf6ya xde1mab xscbp6u x1iw51ew x178xt8z x13fuv20 xx42vgk x1280gxy",
              children: c.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcOpenInNew.react"),
                label:
                  (v =
                    (S = R.displayContent) == null
                      ? void 0
                      : S.displayManageBookingCtaText) != null
                    ? v
                    : s._(/*BTDS*/ "Manage booking"),
                onPress: U,
                size: "medium",
                testid: void 0,
                variant: "filled",
                widthMode: "flexible",
              }),
            }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
