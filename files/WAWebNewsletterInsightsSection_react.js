__d(
  "WAWebNewsletterInsightsSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChevronIcon.react",
    "WAWebCommonNewsletterStrings",
    "WAWebFlex.react",
    "WAWebGlanceInsight.react",
    "WAWebMetricInfoModal.react",
    "WAWebModalManager",
    "WAWebNewsletterAdminInsightsFailedToLoad.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterProducerInsightsLogger",
    "WAWebPopulateNewsletterInsightsAction",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumActionTarget",
    "WAWebWamEnumChannelProducerInsightsActionType",
    "WAWebWamEnumChannelProducerInsightsEntryPoint",
    "WDSIconIcInfo.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "useWAWebAdminInsightsHooks",
    "useWAWebAsyncRetry",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect,
      p = {
        newsletterInsight: { height: "xsdox4t", width: "xh8yej3", $$css: !0 },
        button: { display: "x78zum5", $$css: !0 },
        secondaryLighterColor: { color: "xhslqc4", $$css: !0 },
        tealColor: { color: "x1v5yvga", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        paddingVert16: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
        paddingHoriz20: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(48),
        a = e.chat,
        i = e.newsletterMetadata,
        l = e.onSeeAllClick,
        c = e.xstyle,
        _ =
          (t = o("useWAWebModelValues").useModelValues(i, [
            "adminInsights",
            "showInsightDelta",
          ])) != null
            ? t
            : {},
        f = _.adminInsights,
        g = _.showInsightDelta,
        h = f == null ? void 0 : f.accountsReached,
        y = f == null ? void 0 : f.reachDelta,
        C;
      n[0] !== h || n[1] !== y
        ? ((C = h != null ? { value: h, delta: y } : null),
          (n[0] = h),
          (n[1] = y),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v = f == null ? void 0 : f.netFollows,
        S;
      n[3] !== v
        ? ((S = v != null ? { value: v } : null), (n[3] = v), (n[4] = S))
        : (S = n[4]);
      var R = S,
        L = o("useWAWebAdminInsightsHooks").useAdminInsightPeriod(i),
        E = L.days,
        k = d(
          o("WAWebNewsletterProducerInsightsLogger")
            .NewsletterProducerInsightsLoggerContext,
        ),
        I,
        T;
      (n[5] !== k
        ? ((I = function () {
            k.log({
              actionType: o("WAWebWamEnumChannelProducerInsightsActionType")
                .CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.WIDGET_IMPRESSION,
            });
          }),
          (T = [k]),
          (n[5] = k),
          (n[6] = I),
          (n[7] = T))
        : ((I = n[6]), (T = n[7])),
        m(I, T));
      var D, x;
      n[8] !== a
        ? ((D = function () {
            return o(
              "WAWebPopulateNewsletterInsightsAction",
            ).populateNewsletterTileInsights(a);
          }),
          (x = [a]),
          (n[8] = a),
          (n[9] = D),
          (n[10] = x))
        : ((D = n[9]), (x = n[10]));
      var $ = r("useWAWebAsyncRetry")(D, x),
        P = $.error,
        N = $.loading,
        M = $.retry,
        w;
      n[11] !== i
        ? ((w = o("WAWebNewsletterGatingUtils").canFetchProducerInsights(i)),
          (n[11] = i),
          (n[12] = w))
        : (w = n[12]);
      var A = !w,
        F;
      n[13] !== c
        ? ((F = [c, p.paddingVert16, p.paddingHoriz20]),
          (n[13] = c),
          (n[14] = F))
        : (F = n[14]);
      var O;
      n[15] !== E
        ? ((O = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondary",
            children: s._(
              /*BTDS*/ '_j{"*":"Insights for last {number} days","_1":"Insights for last 1 day"}',
              [s._plural(E, "number", E)],
            ),
          })),
          (n[15] = E),
          (n[16] = O))
        : (O = n[16]);
      var B;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = r("fbs")._(/*BTDS*/ "More info")), (n[17] = B))
        : (B = n[17]);
      var W;
      n[18] !== k
        ? ((W = function () {
            (k.logInfoIconTap(
              o("WAWebWamEnumActionTarget").ACTION_TARGET.WIDGET_INFO_ICON,
            ),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebMetricInfoModal.react"), {
                  logger: k,
                  metrics: [
                    o(
                      "WAWebCommonNewsletterStrings",
                    ).getAccountsReachMetricInfo(),
                    o("WAWebCommonNewsletterStrings").getNetFollowsMetricInfo(),
                  ],
                  metricsThreshold: o(
                    "WAWebCommonNewsletterStrings",
                  ).getReachMetricsThreshold(),
                }),
              ));
          }),
          (n[18] = k),
          (n[19] = W))
        : (W = n[19]);
      var q;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = u.jsx(r("WDSIconIcInfo.react"), {
            iconXstyle: p.secondaryLighterColor,
            height: 18,
            width: 18,
            xstyle: p.marginStart4,
          })),
          (n[20] = q))
        : (q = n[20]);
      var U;
      n[21] !== W
        ? ((U = u.jsx(r("WAWebUnstyledButton.react"), {
            "aria-label": B,
            onClick: W,
            xstyle: p.button,
            children: q,
          })),
          (n[21] = W),
          (n[22] = U))
        : (U = n[22]);
      var V;
      n[23] !== U || n[24] !== O
        ? ((V = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [O, U],
          })),
          (n[23] = U),
          (n[24] = O),
          (n[25] = V))
        : (V = n[25]);
      var H;
      n[26] !== A || n[27] !== l
        ? ((H =
            !A &&
            u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: function () {
                l(
                  "reach",
                  o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                    .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT.PROFILE_SEE_ALL,
                );
              },
              testid: void 0,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                    children: s._(/*BTDS*/ "See all"),
                  }),
                  u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                    iconXstyle: p.tealColor,
                    directional: !0,
                    height: 24,
                    width: 24,
                  }),
                ],
              }),
            })),
          (n[26] = A),
          (n[27] = l),
          (n[28] = H))
        : (H = n[28]);
      var G;
      n[29] !== V || n[30] !== H
        ? ((G = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "all",
            paddingBottom: 16,
            children: [V, H],
          })),
          (n[29] = V),
          (n[30] = H),
          (n[31] = G))
        : (G = n[31]);
      var z;
      n[32] !== b ||
      n[33] !== P ||
      n[34] !== A ||
      n[35] !== N ||
      n[36] !== R ||
      n[37] !== l ||
      n[38] !== M ||
      n[39] !== g
        ? ((z =
            P != null && !N
              ? u.jsx(r("WAWebNewsletterAdminInsightsFailedToLoad.react"), {
                  onClick: M,
                })
              : u.jsxs(o("WAWebFlex.react").FlexRow, {
                  gap: 8,
                  children: [
                    u.jsx(r("WAWebGlanceInsight.react"), {
                      insight: b,
                      label: s._(/*BTDS*/ "Accounts reached"),
                      loading: N,
                      onClick: A
                        ? null
                        : function () {
                            return l(
                              "reach",
                              o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                                .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT
                                .PROFILE_ACCOUNTS_REACHED,
                            );
                          },
                      showDelta:
                        g &&
                        !o(
                          "WAWebNewsletterGatingUtils",
                        ).shouldHideProducerInsightsDeltas(),
                      testid: void 0,
                      xstyle: p.newsletterInsight,
                    }),
                    u.jsx(r("WAWebGlanceInsight.react"), {
                      insight: R,
                      label: s._(/*BTDS*/ "Net follows"),
                      loading: N,
                      onClick: A
                        ? null
                        : function () {
                            return l(
                              "growth",
                              o("WAWebWamEnumChannelProducerInsightsEntryPoint")
                                .CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT
                                .PROFILE_NET_FOLLOWS,
                            );
                          },
                      showDelta: !o(
                        "WAWebNewsletterGatingUtils",
                      ).shouldHideProducerInsightsDeltas(),
                      testid: void 0,
                      xstyle: p.newsletterInsight,
                    }),
                  ],
                })),
          (n[32] = b),
          (n[33] = P),
          (n[34] = A),
          (n[35] = N),
          (n[36] = R),
          (n[37] = l),
          (n[38] = M),
          (n[39] = g),
          (n[40] = z))
        : (z = n[40]);
      var j;
      n[41] !== A
        ? ((j =
            A &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              color: "secondary",
              marginTop: 16,
              children: o(
                "WAWebCommonNewsletterStrings",
              ).getMetricsAvailabilityDisclaimer(),
            })),
          (n[41] = A),
          (n[42] = j))
        : (j = n[42]);
      var K;
      return (
        n[43] !== G || n[44] !== z || n[45] !== j || n[46] !== F
          ? ((K = u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              { testid: void 0, xstyle: F, children: [G, z, j] },
            )),
            (n[43] = G),
            (n[44] = z),
            (n[45] = j),
            (n[46] = F),
            (n[47] = K))
          : (K = n[47]),
        K
      );
    }
    l.default = _;
  },
  226,
);
