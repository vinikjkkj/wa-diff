__d(
  "WAWebConversationPanelBanner.react",
  [
    "$InternalEnum",
    "WAWebCagEventsAwarenessBanner.react",
    "WAWebChangeNumberNotificationBanner.react",
    "WAWebChatGetters",
    "WAWebConversationPanelStyleUtils",
    "WAWebGroupDescriptionBanner.react",
    "WAWebMembershipApprovalRequestsBanner.react",
    "WAWebMetaAICTABanner.react",
    "WAWebNewsletterChannelAlertsBanner.react",
    "WAWebNewsletterNotificationSettingsBanner.react",
    "WAWebPinnedMessagesBanner.react",
    "WAWebReportToAdminNewReportBanner.react",
    "WAWebSimilarNewslettersUnitsLoadable.react",
    "WAWebSubgroupSuggestionsBanner.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebCagEventsAwarenessBanner.react",
    "useWAWebConversationPanelGroupDescription",
    "useWAWebNewsletterNotificationSettingsBanner",
    "useWAWebSimilarNewslettersConversationBanner",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        topBorder: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          backgroundColor: "x1h3rtpe",
          $$css: !0,
        },
        banner: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        absoluteBanner: {
          position: "x10l6tqk",
          top: "x1imwcls",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          borderInlineStartColor: "x1vb5itz",
          borderInlineStartStyle: "x1t7ytsu",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        material: { borderBottomWidth: "x1qhh985", $$css: !0 },
      },
      d = n("$InternalEnum")({
        CagEventsAwareness: 1,
        MembershipApprovalRequests: 2,
        ReportToAdminNewReport: 3,
        SubgroupSuggestions: 4,
        GroupDescription: 5,
        PinnedMessages: 6,
        NewsletterChannelAlerts: 7,
        MetaAICTABanner: 8,
        NewsletterNotificationSettings: 9,
      });
    function m(t) {
      var n = o("react-compiler-runtime").c(34),
        a = t.chat,
        i = t.groupMetadata,
        l = r("useWAWebConversationPanelGroupDescription")(a),
        s = l[0],
        m = l[1],
        f = o(
          "WAWebMembershipApprovalRequestsBanner.react",
        ).useMembershipApprovalRequestsBanner(a),
        g = f[0],
        h = f[1],
        y = o(
          "WAWebReportToAdminNewReportBanner.react",
        ).useReportToAdminNewReportBanner(a),
        C = y[0],
        b = y[1],
        v = o("WAWebPinnedMessagesBanner.react").useWAWebPinnedMessagesBanner(
          a,
        ),
        S = o(
          "WAWebNewsletterChannelAlertsBanner.react",
        ).useNewsletterChannelAlertsBanner(a),
        R = S[0],
        L = S[1],
        E = o(
          "WAWebSubgroupSuggestionsBanner.react",
        ).useSubgroupSuggestionsBanner(a),
        k = E[0],
        I = E[1],
        T = E[2],
        D = r("useWAWebCagEventsAwarenessBanner.react")(a),
        x = D[0],
        $ = D[1],
        P = o("WAWebMetaAICTABanner.react").useMetaAICTABanner(a),
        N = o(
          "WAWebChangeNumberNotificationBanner.react",
        ).useChangeNumberNotificationBanner(a),
        M = o(
          "useWAWebSimilarNewslettersConversationBanner",
        ).useSimilarNewslettersConversationBanner(a),
        w = o(
          "useWAWebNewsletterNotificationSettingsBanner",
        ).useNewsletterNotificationSettingsBanner(a),
        A = w[0],
        F = w[1],
        O;
      n[0] !== $
        ? ((O = u.jsx(r("WAWebCagEventsAwarenessBanner.react"), {
            onClose: $,
          })),
          (n[0] = $),
          (n[1] = O))
        : (O = n[1]);
      var B;
      if (
        n[2] !== a ||
        n[3] !== m ||
        n[4] !== h ||
        n[5] !== L ||
        n[6] !== b ||
        n[7] !== I ||
        n[8] !== F ||
        n[9] !== i ||
        n[10] !== x ||
        n[11] !== s ||
        n[12] !== g ||
        n[13] !== P ||
        n[14] !== R ||
        n[15] !== A ||
        n[16] !== v ||
        n[17] !== C ||
        n[18] !== k ||
        n[19] !== T ||
        n[20] !== O
      ) {
        var W,
          q = [
            { condition: x, component: O, priority: d.CagEventsAwareness },
            {
              condition: g,
              component: u.jsx(
                o("WAWebMembershipApprovalRequestsBanner.react")
                  .MembershipApprovalRequestsBanner,
                { onClose: h, chat: a },
              ),
              priority: d.MembershipApprovalRequests,
            },
            {
              condition: C,
              component: u.jsx(
                o("WAWebReportToAdminNewReportBanner.react")
                  .ReportToAdminNewReportBanner,
                { onClose: b, chat: a },
              ),
              priority: d.ReportToAdminNewReport,
            },
            {
              condition: k,
              component: u.jsx(
                o("WAWebSubgroupSuggestionsBanner.react")
                  .SubgroupSuggestionsBanner,
                { onClose: I, chat: a, subgroupSuggestionsCount: T },
              ),
              priority: d.SubgroupSuggestions,
            },
            {
              condition: !!(s && i != null && i.displayedDesc),
              component: u.jsx(r("WAWebGroupDescriptionBanner.react"), {
                onClose: m,
                chat: a,
                groupMetadata: i,
              }),
              priority: d.GroupDescription,
            },
            {
              condition: v,
              component: u.jsx(
                o("WAWebPinnedMessagesBanner.react").PinnedMessagesBanner,
                { chat: a },
              ),
              priority: d.PinnedMessages,
            },
            {
              condition: o("WAWebChatGetters").getIsNewsletter(a) && R,
              component: u.jsx(
                o("WAWebNewsletterChannelAlertsBanner.react")
                  .NewsletterChannelAlertsBanner,
                { newsletter: a, onClose: L },
              ),
              priority: d.NewsletterChannelAlerts,
            },
            {
              condition: P,
              component: u.jsx(
                o("WAWebMetaAICTABanner.react").MetaAICTABanner,
                {},
              ),
              priority: d.MetaAICTABanner,
            },
            {
              condition: A,
              component: u.jsx(
                r("WAWebNewsletterNotificationSettingsBanner.react"),
                { chat: a, onClose: F },
              ),
              priority: d.NewsletterNotificationSettings,
            },
          ];
        ((B = (W = q.filter(_).sort(p)[0]) == null ? void 0 : W.component),
          (n[2] = a),
          (n[3] = m),
          (n[4] = h),
          (n[5] = L),
          (n[6] = b),
          (n[7] = I),
          (n[8] = F),
          (n[9] = i),
          (n[10] = x),
          (n[11] = s),
          (n[12] = g),
          (n[13] = P),
          (n[14] = R),
          (n[15] = A),
          (n[16] = v),
          (n[17] = C),
          (n[18] = k),
          (n[19] = T),
          (n[20] = O),
          (n[21] = B));
      } else B = n[21];
      var U = B,
        V;
      n[22] !== U || n[23] !== a || n[24] !== N
        ? ((V = N
            ? u.jsx(
                o("WAWebChangeNumberNotificationBanner.react")
                  .ChangeNumberNotificationBanner,
                { chat: a, xstyle: U != null && c.topBorder },
              )
            : null),
          (n[22] = U),
          (n[23] = a),
          (n[24] = N),
          (n[25] = V))
        : (V = n[25]);
      var H = V,
        G;
      n[26] !== a || n[27] !== M
        ? ((G =
            o("WAWebChatGetters").getIsNewsletter(a) && M
              ? u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      c.banner,
                      r("WAWebConversationPanelStyleUtils").sharedLayer,
                      c.topBorder,
                      c.absoluteBanner,
                      c.material,
                    ),
                    {
                      children: u.jsx(
                        o("WAWebSimilarNewslettersUnitsLoadable.react")
                          .SimilarNewslettersConversationBannerLoadable,
                        { chat: a },
                      ),
                    },
                  ),
                )
              : null),
          (n[26] = a),
          (n[27] = M),
          (n[28] = G))
        : (G = n[28]);
      var z = G;
      if (U == null && H == null && z == null) return null;
      var j;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = [
            c.banner,
            r("WAWebConversationPanelStyleUtils").sharedLayer,
            c.topBorder,
            c.material,
          ]),
          (n[29] = j))
        : (j = n[29]);
      var K;
      return (
        n[30] !== U || n[31] !== H || n[32] !== z
          ? ((K = u.jsxs(r("WAWebVelocityTransitionGroup"), {
              transitionName: "butterbar",
              xstyle: j,
              children: [U, H, z],
            })),
            (n[30] = U),
            (n[31] = H),
            (n[32] = z),
            (n[33] = K))
          : (K = n[33]),
        K
      );
    }
    function p(e, t) {
      return e.priority - t.priority;
    }
    function _(e) {
      return e.condition;
    }
    l.default = m;
  },
  98,
);
