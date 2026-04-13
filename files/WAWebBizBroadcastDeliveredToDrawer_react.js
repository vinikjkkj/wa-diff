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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(25),
        n = e.contact,
        a,
        i,
        l,
        u,
        d,
        m;
      if (t[0] !== n.contactJid) {
        var p,
          _ =
            (p = o("WAWebDetailImage.react").getSize(
              o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
            )) != null
              ? p
              : 40,
          f = n.contactJid,
          g,
          h;
        if (t[7] !== f) {
          var y = null;
          try {
            y = o("WAWebWidFactory").createWid(f);
          } catch (e) {}
          ((g =
            y != null
              ? o("WAWebContactCollection").ContactCollection.get(y)
              : null),
            (h =
              g != null
                ? o("WAWebFrontendContactGetters").getDisplayName(g)
                : f),
            (t[7] = f),
            (t[8] = g),
            (t[9] = h));
        } else ((g = t[8]), (h = t[9]));
        var C = h,
          b;
        t[10] !== g || t[11] !== C
          ? ((b = { contactModel: g, displayName: C }),
            (t[10] = g),
            (t[11] = C),
            (t[12] = b))
          : (b = t[12]);
        var v = b,
          R = v.contactModel,
          L = v.displayName;
        ((i = L),
          (a = o("WAWebFlex.react").FlexRow),
          (d = "center"),
          (m = S.contactRow),
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = { className: "x2lah0s" }), (t[13] = l))
            : (l = t[13]),
          (u =
            R != null
              ? c.jsx(r("WAWebContactImage.react"), { contact: R, size: _ })
              : c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (s || (s = r("stylex"))).props(S.dynamicSize(_)),
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
                )),
          (t[0] = n.contactJid),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u),
          (t[5] = d),
          (t[6] = m));
      } else
        ((a = t[1]),
          (i = t[2]),
          (l = t[3]),
          (u = t[4]),
          (d = t[5]),
          (m = t[6]));
      var E;
      t[14] !== l || t[15] !== u
        ? ((E = c.jsx("div", babelHelpers.extends({}, l, { children: u }))),
          (t[14] = l),
          (t[15] = u),
          (t[16] = E))
        : (E = t[16]);
      var k;
      t[17] !== i
        ? ((k = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            maxLines: 1,
            children: i,
          })),
          (t[17] = i),
          (t[18] = k))
        : (k = t[18]);
      var I;
      return (
        t[19] !== a || t[20] !== d || t[21] !== m || t[22] !== E || t[23] !== k
          ? ((I = c.jsxs(a, { align: d, xstyle: m, children: [E, k] })),
            (t[19] = a),
            (t[20] = d),
            (t[21] = m),
            (t[22] = E),
            (t[23] = k),
            (t[24] = I))
          : (I = t[24]),
        I
      );
    }
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
