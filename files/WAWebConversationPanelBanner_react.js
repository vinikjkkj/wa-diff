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
      var n,
        a = t.chat,
        i = t.groupMetadata,
        l = r("useWAWebConversationPanelGroupDescription")(a),
        s = l[0],
        m = l[1],
        p = o(
          "WAWebMembershipApprovalRequestsBanner.react",
        ).useMembershipApprovalRequestsBanner(a),
        _ = p[0],
        f = p[1],
        g = o(
          "WAWebReportToAdminNewReportBanner.react",
        ).useReportToAdminNewReportBanner(a),
        h = g[0],
        y = g[1],
        C = o("WAWebPinnedMessagesBanner.react").useWAWebPinnedMessagesBanner(
          a,
        ),
        b = o(
          "WAWebNewsletterChannelAlertsBanner.react",
        ).useNewsletterChannelAlertsBanner(a),
        v = b[0],
        S = b[1],
        R = o(
          "WAWebSubgroupSuggestionsBanner.react",
        ).useSubgroupSuggestionsBanner(a),
        L = R[0],
        E = R[1],
        k = R[2],
        I = r("useWAWebCagEventsAwarenessBanner.react")(a),
        T = I[0],
        D = I[1],
        x = o("WAWebMetaAICTABanner.react").useMetaAICTABanner(a),
        $ = o(
          "WAWebChangeNumberNotificationBanner.react",
        ).useChangeNumberNotificationBanner(a),
        P = o(
          "useWAWebSimilarNewslettersConversationBanner",
        ).useSimilarNewslettersConversationBanner(a),
        N = o(
          "useWAWebNewsletterNotificationSettingsBanner",
        ).useNewsletterNotificationSettingsBanner(a),
        M = N[0],
        w = N[1],
        A = [
          {
            condition: T,
            component: u.jsx(r("WAWebCagEventsAwarenessBanner.react"), {
              onClose: D,
            }),
            priority: d.CagEventsAwareness,
          },
          {
            condition: _,
            component: u.jsx(
              o("WAWebMembershipApprovalRequestsBanner.react")
                .MembershipApprovalRequestsBanner,
              { onClose: f, chat: a },
            ),
            priority: d.MembershipApprovalRequests,
          },
          {
            condition: h,
            component: u.jsx(
              o("WAWebReportToAdminNewReportBanner.react")
                .ReportToAdminNewReportBanner,
              { onClose: y, chat: a },
            ),
            priority: d.ReportToAdminNewReport,
          },
          {
            condition: L,
            component: u.jsx(
              o("WAWebSubgroupSuggestionsBanner.react")
                .SubgroupSuggestionsBanner,
              { onClose: E, chat: a, subgroupSuggestionsCount: k },
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
            condition: C,
            component: u.jsx(
              o("WAWebPinnedMessagesBanner.react").PinnedMessagesBanner,
              { chat: a },
            ),
            priority: d.PinnedMessages,
          },
          {
            condition: o("WAWebChatGetters").getIsNewsletter(a) && v,
            component: u.jsx(
              o("WAWebNewsletterChannelAlertsBanner.react")
                .NewsletterChannelAlertsBanner,
              { newsletter: a, onClose: S },
            ),
            priority: d.NewsletterChannelAlerts,
          },
          {
            condition: x,
            component: u.jsx(
              o("WAWebMetaAICTABanner.react").MetaAICTABanner,
              {},
            ),
            priority: d.MetaAICTABanner,
          },
          {
            condition: M,
            component: u.jsx(
              r("WAWebNewsletterNotificationSettingsBanner.react"),
              { chat: a, onClose: w },
            ),
            priority: d.NewsletterNotificationSettings,
          },
        ],
        F =
          (n = A.filter(function (e) {
            return e.condition;
          }).sort(function (e, t) {
            return e.priority - t.priority;
          })[0]) == null
            ? void 0
            : n.component,
        O = $
          ? u.jsx(
              o("WAWebChangeNumberNotificationBanner.react")
                .ChangeNumberNotificationBanner,
              { chat: a, xstyle: F != null && c.topBorder },
            )
          : null,
        B =
          o("WAWebChatGetters").getIsNewsletter(a) && P
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
            : null;
      return F == null && O == null && B == null
        ? null
        : u.jsxs(r("WAWebVelocityTransitionGroup"), {
            transitionName: "butterbar",
            xstyle: [
              c.banner,
              r("WAWebConversationPanelStyleUtils").sharedLayer,
              c.topBorder,
              c.material,
            ],
            children: [F, O, B],
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
