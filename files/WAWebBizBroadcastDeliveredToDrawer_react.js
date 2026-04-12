__d(
  "WAWebBizBroadcastDeliveredToDrawer.react",
  [
    "WALogger",
    "WAWebBizBroadcastInsightsContactListHandler",
    "WAWebBizBroadcastInsightsPeerOps",
    "WAWebBizBroadcastsHomeStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebMeasure",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useRef,
      g = d.useState,
      h = 15e3,
      y = 56,
      C = 5,
      b = { position: "x1n2onr6", width: "xh8yej3", $$css: !0 },
      v = {
        insetInlineStart: "x1o0tod",
        left: "",
        right: "",
        position: "x10l6tqk",
        width: "xh8yej3",
        $$css: !0,
      },
      S = {
        circleIconRefreshed: {
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        contactRow: {
          boxSizing: "x9f619",
          columnGap: "x1aj3ljl",
          flexShrink: "x2lah0s",
          height: "xnnlda6",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          width: "xh8yej3",
          $$css: !0,
        },
        container: {
          backgroundColor: "x1280gxy",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          width: "xh8yej3",
          $$css: !0,
        },
        dynamicSize: function (t) {
          return [
            {
              height: t != null ? "x16ye13r" : t,
              width: t != null ? "x5lhr3w" : t,
              $$css: !0,
            },
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        emptyState: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flex: "x98rzlu",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        headerRow: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          rowGap: "x129bwdz",
          $$css: !0,
        },
        profilePictureOutlineRefreshed: {
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
        svgSize: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        virtualizedInner: function (t) {
          return [
            b,
            { height: t != null ? "x16ye13r" : t, $$css: !0 },
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        virtualizedRow: function (t) {
          return [
            v,
            { top: t != null ? "xjbys53" : t, $$css: !0 },
            {
              "--x-top": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
      };
    function R(e) {
      var t,
        n = e.contact,
        a =
          (t = o("WAWebDetailImage.react").getSize(
            o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
          )) != null
            ? t
            : 40,
        i = n.contactJid,
        l = _(
          function () {
            var e = null;
            try {
              e = o("WAWebWidFactory").createWid(i);
            } catch (e) {}
            var t =
                e != null
                  ? o("WAWebContactCollection").ContactCollection.get(e)
                  : null,
              n =
                t != null
                  ? o("WAWebFrontendContactGetters").getDisplayName(t)
                  : i;
            return { contactModel: t, displayName: n };
          },
          [i],
        ),
        u = l.contactModel,
        d = l.displayName;
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: S.contactRow,
        children: [
          c.jsx("div", {
            className: "x2lah0s",
            children:
              u != null
                ? c.jsx(r("WAWebContactImage.react"), { contact: u, size: a })
                : c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (s || (s = r("stylex"))).props(S.dynamicSize(a)),
                      {
                        children: c.jsx(
                          o("WAWebDefaultContactRefreshedIcon.react")
                            .DefaultContactRefreshedIcon,
                          {
                            iconXstyle: [
                              S.svgSize,
                              S.circleIconRefreshed,
                              S.profilePictureOutlineRefreshed,
                            ],
                            "aria-hidden": !0,
                          },
                        ),
                      },
                    ),
                  ),
          }),
          c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            maxLines: 1,
            children: d,
          }),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(t) {
      var n,
        a = t.campaignId,
        i = t.entryPoint,
        l = t.onClose;
      p(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.deliveredToDrawerViewed(i, a);
        },
        [i, a],
      );
      var u = g("loading"),
        d = u[0],
        _ = u[1],
        b = g([]),
        v = b[0],
        L = b[1],
        E = g(0),
        k = E[0],
        I = E[1],
        T = f(null),
        D = f(null),
        x = r("useWAWebMeasure")(),
        $ = x[0],
        P = x[1],
        N = (n = P == null ? void 0 : P.height) != null ? n : 0,
        M = o("useWAWebTimeout").useTimeout(function () {
          _(function (e) {
            return e === "loading"
              ? (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.deliveredToDrawerFetchFailed(
                  i,
                  a,
                  "timeout",
                ),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getPrimaryOfflineInsightsToast(),
                  }),
                ),
                "error")
              : e;
          });
        }, h),
        w = M[0],
        A = M[1],
        F = m(
          function (e) {
            ((D.current = e), $(e));
          },
          [$],
        ),
        O = m(function () {
          T.current == null &&
            (T.current = window.requestAnimationFrame(function () {
              T.current = null;
              var e = D.current;
              e != null && I(e.scrollTop);
            }));
        }, []);
      p(function () {
        return function () {
          T.current != null && window.cancelAnimationFrame(T.current);
        };
      }, []);
      var B = m(
        function (t) {
          t.campaignId === a &&
            (A(),
            L(t.contacts),
            _("loaded"),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[DeliveredToDrawer] Received ",
                  " contacts",
                ])),
              t.contacts.length,
            ));
        },
        [a, A],
      );
      p(
        function () {
          return (
            o("WAWebCmd").Cmd.on(
              o("WAWebBizBroadcastInsightsContactListHandler")
                .BIZ_BROADCAST_INSIGHTS_CONTACT_LIST_RECEIVED,
              B,
            ),
            o("WAWebBizBroadcastInsightsPeerOps")
              .requestInsightsContactList(a)
              .then(function (e) {
                e ||
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.deliveredToDrawerFetchFailed(
                    i,
                    a,
                    "request_failed",
                  ),
                  _("error"),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getPrimaryOfflineInsightsToast(),
                    }),
                  ));
              })
              .catch(r("WAWebNoop")),
            w(),
            function () {
              (o("WAWebCmd").Cmd.off(
                o("WAWebBizBroadcastInsightsContactListHandler")
                  .BIZ_BROADCAST_INSIGHTS_CONTACT_LIST_RECEIVED,
                B,
              ),
                A());
            }
          );
        },
        [a, A, i, B, w],
      );
      var W = v.length * y,
        q = Math.max(0, Math.floor(k / y) - C),
        U = Math.min(v.length, Math.ceil((k + N) / y) + C);
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: S.container,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: "small",
            title: o("WAWebBizBroadcastsHomeStrings").getDeliveredLabel(),
            onBack: l,
          }),
          d === "loading"
            ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                xstyle: S.emptyState,
                children: [
                  c.jsx(r("WDSSpinner.react"), { size: 24 }),
                  c.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getDeliveredToLoadingLabel(),
                  }),
                ],
              })
            : d === "error"
              ? c.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  xstyle: S.emptyState,
                  children: c.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDeemphasized",
                    children: o(
                      "WAWebBizBroadcastsHomeStrings",
                    ).getDeliveredToErrorLabel(),
                  }),
                })
              : d === "loaded" && v.length === 0
                ? c.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: S.emptyState,
                    children: c.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDeemphasized",
                      children: o(
                        "WAWebBizBroadcastsHomeStrings",
                      ).getDeliveredToEmptyLabel(),
                    }),
                  })
                : d === "loaded"
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs(o("WAWebFlex.react").FlexColumn, {
                          xstyle: S.headerRow,
                          children: [
                            c.jsx(r("WDSText.react"), {
                              type: "Body1Emphasized",
                              colorName: "contentDefault",
                              children: o(
                                "WAWebBizBroadcastsHomeStrings",
                              ).getDeliveredToCountLabel(v.length),
                            }),
                            c.jsx(r("WDSText.react"), {
                              type: "Body2",
                              colorName: "contentDeemphasized",
                              children: o(
                                "WAWebBizBroadcastsHomeStrings",
                              ).getRecipientsDisclaimerLabel(),
                            }),
                          ],
                        }),
                        c.jsx("div", {
                          ref: F,
                          onScroll: O,
                          className: "x98rzlu x2lwn1j x6ikm8r x1odjw0f xh8yej3",
                          children: c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (s || (s = r("stylex"))).props(
                                S.virtualizedInner(W),
                              ),
                              {
                                children: Array.from(
                                  { length: U - q },
                                  function (e, t) {
                                    var n = q + t,
                                      o = v[n];
                                    return c.jsx(
                                      "div",
                                      babelHelpers.extends(
                                        {},
                                        (s || (s = r("stylex"))).props(
                                          S.virtualizedRow(n * y),
                                        ),
                                        { children: c.jsx(R, { contact: o }) },
                                      ),
                                      o.contactJid,
                                    );
                                  },
                                ),
                              },
                            ),
                          ),
                        }),
                      ],
                    })
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          d,
                      );
                    })(),
        ],
      });
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  98,
);
