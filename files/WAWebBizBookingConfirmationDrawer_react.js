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
      var t = e.actionLabel,
        n = e.description,
        a = e.icon,
        i = e.onActionClick,
        l = e.testid,
        s = e.textLimit,
        u = n != null ? n.toString() : null,
        d = p(null),
        h = _(!1),
        y = h[0],
        C = h[1];
      return (
        m(function () {
          var e = d.current;
          if (e != null) {
            var t = new ResizeObserver(function () {
              var t = o("WAWebLineHeight").getNumberOfLines(e);
              C(t > g);
            });
            return (
              t.observe(e),
              function () {
                return t.disconnect();
              }
            );
          }
        }, []),
        c.jsx(r("WAWebDrawerBlock.react"), {
          blockXstyle: f.paddingEnd0,
          isRefresh: !0,
          multiline: !0,
          separator: !1,
          testid: void 0,
          xstyle: f.drawerBlock,
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: y ? "start" : "center",
            xstyle: f.listItemContentWrapper,
            children: [
              c.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                shrink: 0,
                xstyle: f.spacingSingle,
                children: c.jsx(r("WDSText.react"), {
                  colorName: "contentDeemphasized",
                  type: "Body1",
                  children: a,
                }),
              }),
              c.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                children: [
                  u != null &&
                    c.jsx(r("WDSText.react"), {
                      ref: d,
                      colorName: "contentDefault",
                      type: "Body1",
                      children: c.jsx(
                        o("WAWebExpandableText.react").ExpandableText,
                        {
                          text: u,
                          textLimit: s != null ? s : 1 / 0,
                          children: function (t) {
                            var e = t.textLimit;
                            return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                              ellipsify: !0,
                              formatters: [
                                [[r("WAWebMarkdownLinkFormatMutator"), {}]],
                              ].concat(
                                o(
                                  "WAWebFormatConfiguration",
                                ).UntrustedGroupDesc({
                                  expandedFormattingEnabled: !0,
                                }),
                              ),
                              inferLinesDirection: !0,
                              multiline: !0,
                              preserveWhitespace: !0,
                              text: u,
                              textLimit: e,
                            });
                          },
                        },
                      ),
                    }),
                  t != null &&
                    i != null &&
                    c.jsx(r("WDSTextualLink.react"), {
                      onClick: i,
                      textConfig: "Body2",
                      children: t,
                    }),
                ],
              }),
            ],
          }),
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.icon,
        n = e.label,
        a = e.onActionClick,
        i = e.testid;
      return c.jsx(r("WAWebDrawerBlock.react"), {
        blockXstyle: f.paddingEnd0,
        isRefresh: !0,
        multiline: !0,
        onClick: a,
        separator: !1,
        testid: void 0,
        xstyle: f.drawerBlock,
        children: c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: f.listItemContentWrapper,
          children: [
            c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              shrink: 0,
              xstyle: f.spacingSingle,
              children: c.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body1",
                children: t,
              }),
            }),
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              grow: 1,
              children: c.jsx(r("WDSTextualLink.react"), {
                textConfig: "Body1",
                children: n,
              }),
            }),
          ],
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
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
