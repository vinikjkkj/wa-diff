__d(
  "AdsUnificationConversionContent",
  [
    "fbt",
    "AHGLink.react",
    "AdCampaignConversionMultiEventProducts",
    "AdsLearnMore.react",
    "AdsModeBasedBiddingStrings",
    "AdsUnificationContentUtils",
    "AdsVolumeROASUtils",
    "SequencedEventConversionsContent",
    "geoMargin",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = "272336376749096";
    function m(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(/*BTDS*/ "Choose where you want to drive sales."),
        e,
      );
    }
    function p(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(/*BTDS*/ "Choose where you want to generate leads."),
        e,
      );
    }
    function _(t, n) {
      return (
        n === void 0 && (n = !1),
        n
          ? o("AdsUnificationContentUtils").getStringOrDefault(
              s._(
                /*BTDS*/ "Choose where you want to drive traffic. {learn more}",
                [
                  s._param(
                    "learn more",
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(r("geoMargin").top8),
                        {
                          children: c.jsx(r("AdsLearnMore.react"), {
                            cmsID: "2035196646663270",
                            label: g(),
                          }),
                        },
                      ),
                    ),
                  ),
                ],
              ),
              t,
            )
          : o("AdsUnificationContentUtils").getStringOrDefault(
              s._(/*BTDS*/ "Choose where you want to drive traffic."),
              t,
            )
      );
    }
    function f(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(/*BTDS*/ "Choose where you want to drive engagement."),
        e,
      );
    }
    function g() {
      return s._(/*BTDS*/ "About conversion locations");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      return (
        e === void 0 && (e = !1),
        t === void 0 && (t = !0),
        e
          ? s._(
              /*BTDS*/ "How you measure success for ads and marketing messages. {link to help center for performance goals}",
              [
                s._param(
                  "link to help center for performance goals",
                  c.jsx(r("AdsLearnMore.react"), {
                    cmsID: "355670007911605",
                    label: s._(/*BTDS*/ "About performance goals"),
                  }),
                ),
              ],
            )
          : t
            ? s._(
                /*BTDS*/ "Set your goal, such as maximizing conversions or conversion value. {link to help center for performance goals}",
                [
                  s._param(
                    "link to help center for performance goals",
                    c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "355670007911605",
                      label: s._(/*BTDS*/ "About performance goals"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "How you measure success for your ads. {link to help center for performance goals}",
                [
                  s._param(
                    "link to help center for performance goals",
                    c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "355670007911605",
                      label: s._(/*BTDS*/ "About performance goals"),
                    }),
                  ),
                ],
              )
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(
        /*BTDS*/ "Tell Meta how to balance getting more leads against getting higher-quality leads.",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Track actions that people take on your website.");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t, n) {
      return (
        n === void 0 && (n = !1),
        e &&
        t ===
          r("AdCampaignConversionMultiEventProducts").BANKING_AND_CREDIT_CARDS
          ? o("SequencedEventConversionsContent")
              .CONVERSION_EVENT_SEQUENCED_EVENT_SUBTITLE
          : n
            ? s._(
                /*BTDS*/ "The action you want people to take when they see ads and marketing messages. {link to Meta pixel help center}",
                [
                  s._param(
                    "link to Meta pixel help center",
                    c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "964258670337005",
                      label: s._(/*BTDS*/ "About conversion events"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "The action you want people to take when they see your ads. {link to Meta pixel help center}",
                [
                  s._param(
                    "link to Meta pixel help center",
                    c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "964258670337005",
                      label: s._(/*BTDS*/ "About conversion events"),
                    }),
                  ),
                ],
              )
      );
    }
    function v(t) {
      return o("AdsVolumeROASUtils").isVolumeROASEnabled()
        ? o("AdsModeBasedBiddingStrings").getBiddingGoalsHelpText()
        : o("AdsUnificationContentUtils").getStringOrDefault(
            s._(
              /*BTDS*/ "A cost per result goal tells Meta how to bid in ad auctions. This option is helpful when you want to keep the average cost per result a certain amount during your campaign. {learn more}",
              [
                s._param(
                  "learn more",
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(r("geoMargin").top8),
                      {
                        children: c.jsx(r("AdsLearnMore.react"), {
                          cmsID: d,
                          label: S(),
                        }),
                      },
                    ),
                  ),
                ),
              ],
            ),
            t,
          );
    }
    function S() {
      return s._(/*BTDS*/ "About cost per result goal");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "Click-through is when someone clicks your ad and converts within the period of time that you select. We\u2019ll learn from your click-through conversions, and show your ads to people likely to click-through within the same period of time. {learn more}",
          [
            s._param(
              "learn more",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "1055388958765938",
                      label: E(),
                    }),
                  },
                ),
              ),
            ),
          ],
        ),
        t,
      );
    }
    function L(t) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "Click-through is when someone clicks your ad or marketing message and converts within the period of time that you select. We\u2019ll learn from your click-through conversions, and show your ads to people likely to click-through within the same period of time. {learn more}",
          [
            s._param(
              "learn more",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: c.jsx(r("AdsLearnMore.react"), {
                      cmsID: "1055388958765938",
                      label: E(),
                    }),
                  },
                ),
              ),
            ),
          ],
        ),
        t,
      );
    }
    function E() {
      return s._(/*BTDS*/ "About click-through");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "View-through is when someone sees your ad, doesn't click it, but still takes an action within the period of time you select. We\u2019ll learn from your view-through conversions and show your ads to people likely to convert within the same period of time.",
        ),
        e,
      );
    }
    function I(t, n) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "Determines when you pay for your ad. {explanation about conversion goal payments by impression} {explanation about conversion goal payments by action} {learn more}",
          [
            s._param(
              "explanation about conversion goal payments by impression",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: s._(
                      /*BTDS*/ "For many conversion goals, you'll pay per impression (each time your ad is served).",
                    ),
                  },
                ),
              ),
            ),
            s._param(
              "explanation about conversion goal payments by action",
              c.jsx(
                "div",
                babelHelpers.extends({}, e.props(r("geoMargin").top8), {
                  children: s._(
                    /*BTDS*/ "For some conversion goals, you can pay per impression or per specific action (such as link clicks or ThruPlay).",
                  ),
                }),
              ),
            ),
            s._param(
              "learn more",
              c.jsx(
                "div",
                babelHelpers.extends({}, e.props(r("geoMargin").top8), {
                  children: c.jsx(r("AdsLearnMore.react"), {
                    cmsID: n,
                    label: T(),
                  }),
                }),
              ),
            ),
          ],
        ),
        t,
      );
    }
    function T() {
      return s._(/*BTDS*/ "About when you get charged");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(t, n) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "Standard delivery uses pacing to control your spend. {explanation about pacing} {explanation about accelerated delivery} {learn more}",
          [
            s._param(
              "explanation about pacing",
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(r("geoMargin").top8),
                  {
                    children: s._(
                      /*BTDS*/ "Pacing keeps you from spending your budget too quickly and is the recommended option for most advertisers.",
                    ),
                  },
                ),
              ),
            ),
            s._param(
              "explanation about accelerated delivery",
              c.jsx(
                "div",
                babelHelpers.extends({}, e.props(r("geoMargin").top8), {
                  children: s._(
                    /*BTDS*/ "Accelerated delivery can be useful for time-sensitive promotions. You need to set a bid cap to use accelerated delivery.",
                  ),
                }),
              ),
            ),
            s._param(
              "learn more",
              c.jsx(
                "div",
                babelHelpers.extends({}, e.props(r("geoMargin").top8), {
                  children: c.jsx(r("AdsLearnMore.react"), {
                    cmsID: n,
                    label: x(),
                  }),
                }),
              ),
            ),
          ],
        ),
        t,
      );
    }
    function x() {
      return s._(/*BTDS*/ "About delivery type");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "Choose the app you want to advertise.");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e, t) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "You can advertise any app registered on Meta\u2019s developer site. {=Learn more}",
          [s._param("=Learn more", c.jsx(r("AHGLink.react"), { href: t }))],
        ),
        e,
      );
    }
    function N() {
      return s._(/*BTDS*/ "About app events");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "This page will represent your business in your ad and conversation.",
        ),
        e,
      );
    }
    function w() {
      return s._(
        /*BTDS*/ "Messaging apps linked to this Page can be selected as destinations to chat with people that respond to this ad. You can use any linked Pages managed by this ad account.",
      );
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(
        /*BTDS*/ "You can receive both Messenger and Instagram messages to your Page\u2019s inbox, but WhatsApp messages will only go to your WhatsApp Business account.",
      );
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ '_j["Message destinations","95e0ba2631cfcfa472b29b93beb85167",1]',
        ),
        e,
      );
    }
    function O(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "Choose where you want to receive messages. Selecting multiple apps will send people to the app where they\u2019re most likely to engage.",
        ),
        e,
      );
    }
    function B() {
      return s._(
        /*BTDS*/ "These apps are where you\u2019ll chat with people that respond to your ad. Your budget will be shared across these apps. {learn more}",
        [
          s._param(
            "learn more",
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").top8),
                {
                  children: c.jsx(r("AdsLearnMore.react"), {
                    cmsID: "1816962591668838",
                    label: W(),
                  }),
                },
              ),
            ),
          ),
        ],
      );
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "About ads that click to message");
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "Choose the Page you want to promote.");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U(e) {
      return o("AdsUnificationContentUtils").getStringOrDefault(
        s._(
          /*BTDS*/ "If the Page you want isn\u2019t listed, contact the Page admin.",
        ),
        e,
      );
    }
    ((l.COST_PER_RESULT_GOAL_CMS_ID = d),
      (l.getConversionLocationSalesDescriptionStringOrDefault = m),
      (l.getConversionLocationLeadsDescriptionStringOrDefault = p),
      (l.getConversionLocationTrafficDescriptionStringOrDefault = _),
      (l.getConversionLocationEngagementDescriptionStringOrDefault = f),
      (l.getConversionLocationLearnMoreString = g),
      (l.getPerformanceGoalDescriptionString = h),
      (l.getLeadSearchPerformanceGoalDescriptionString = y),
      (l.getPixelDescriptionString = C),
      (l.getConversionEventDescriptionString = b),
      (l.getCostPerResultTooltipStringOrDefault = v),
      (l.getClickThroughTooltipStringOrDefault = R),
      (l.getClickThroughTooltipStringOrDefaultWithMM = L),
      (l.getClickThroughTooltipLearnMoreString = E),
      (l.getViewThroughTooltipStringOrDefault = k),
      (l.getWhenYouGetChargedTooltipStringOrDefault = I),
      (l.getDeliveryTypeTooltipStringOrDefault = D),
      (l.getAppDescriptionString = $),
      (l.getAppTooltipStringOrDefault = P),
      (l.getAppEventTooltipLearnMoreString = N),
      (l.getMessagingAppsFacebookDescriptionStringOrDefault = M),
      (l.getMessagingAppsFacebookPageTooltipPart1String = w),
      (l.getMessagingAppsFacebookPageTooltipPart2String = A),
      (l.getMessagingAppsMessageDestinationTitleStringOrDefault = F),
      (l.getMessagingAppsMessageDestinationDescriptionStringOrDefault = O),
      (l.getMessagingAppsDestinationTooltipString = B),
      (l.getCallsFacebookPageDescriptionString = q),
      (l.getCallsFacebookPageTooltipStringOrDefault = U));
  },
  226,
);
