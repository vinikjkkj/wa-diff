__d(
  "AdsOptimizationStrings",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsBudgetUsabilityGKUtils",
    "AdsDeliveryGrowthDuplicationContentUtils",
    "AdsEventsManagerURIHelper",
    "AdsLearnMore.react",
    "AdsUnificationConversionContent",
    "AdsUniqueMetricsHelpID",
    "AdsUniqueMetricsID",
    "GeoLink.react",
    "GeoText.react",
    "GeoTooltip.react",
    "LeadGenSVConversionLeadsOptimizationSitevarConfig.experimental",
    "geoMargin",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = "235457266642587",
      m = "146070805942156",
      p = "716180208457684",
      _ = "153514848493595",
      f = "1730527393892983",
      g = "417293491972212",
      h = "451202588606868",
      y = "355670007911605",
      C = "742478679120153",
      b = "296463804090290",
      v = "1082085278508457",
      S = "279369167153556",
      R = "1000688343301256",
      L = "Zapier",
      E = "1037425549606837",
      k = "379085200286354";
    function I() {
      return c.jsx(r("AdsLearnMore.react"), { cmsID: f, isStandalone: !0 });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return o(
        "AdsUnificationConversionContent",
      ).getDeliveryTypeTooltipStringOrDefault(
        s._(/*BTDS*/ "{standard delivery}{accelerated delivery}", [
          s._param(
            "standard delivery",
            c.jsx("div", {
              children: s._(
                /*BTDS*/ "Standard delivery uses pacing to control your spend. Pacing keeps you from spending your budget too quickly and is the recommended and preferred option for most advertisers.",
              ),
            }),
          ),
          s._param(
            "accelerated delivery",
            c.jsx("div", {
              className: "x1y1aw1k",
              children: s._(
                /*BTDS*/ "Accelerated delivery can be useful for time-sensitive promotions but is not recommended for live video ads. You need to set a bid cap to use accelerated delivery. {Learn more}",
                [
                  s._param(
                    "Learn more",
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(r("geoMargin").top8),
                        {
                          children: c.jsx(r("AdsLearnMore.react"), {
                            cmsID: R,
                            source: "ads_manager_context_preview_learn_more",
                          }),
                        },
                      ),
                    ),
                  ),
                ],
              ),
            }),
          ),
        ]),
        R,
      );
    }
    var D = s._(/*BTDS*/ "Buying type"),
      x = s._(/*BTDS*/ "Ad destination"),
      $ = s._(/*BTDS*/ "Conversion location"),
      P = s._(/*BTDS*/ "Age"),
      N = s._(/*BTDS*/ "Gender"),
      M = s._(/*BTDS*/ "Specific mobile devices & operating systems"),
      w = s._(/*BTDS*/ "All mobile devices"),
      A = s._(/*BTDS*/ "Ad format"),
      F = s._(/*BTDS*/ "Delivery type"),
      O = s._(/*BTDS*/ "App event");
    function B() {
      return s._(
        /*BTDS*/ "Choose any of the app events received through Facebook SDK. If you don\u2019t see your event, type its name to find it. {learn more}",
        [s._param("learn more", c.jsx(r("AdsLearnMore.react"), { cmsID: d }))],
      );
    }
    B.displayName = B.name + " [from " + i.id + "]";
    var W = s._(/*BTDS*/ "Choose or search for an app event"),
      q = s._(
        /*BTDS*/ "The potential volume for this event is too low. Optimizing ads for this event may lead to poor campaign performance. Choose another event to potentially yield better results.",
      ),
      U = s._(/*BTDS*/ "Please choose an app event"),
      V = s._(/*BTDS*/ "Event type"),
      H = s._(/*BTDS*/ "Please select an event"),
      G = s._(
        /*BTDS*/ "Choose to optimize your ads for retention on day 2 (24-48 hours) or day 7 (144-168 hours) after install.",
      ),
      z = s._(/*BTDS*/ "Optimization for ad delivery");
    function j(e) {
      return s._(/*BTDS*/ "per {result type}", [s._param("result type", e)]);
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K() {
      return s._(/*BTDS*/ "Target cost");
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return s._(/*BTDS*/ "Bid strategy");
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return o(
        "AdsUnificationConversionContent",
      ).getWhenYouGetChargedTooltipStringOrDefault(
        s._(
          /*BTDS*/ "The selected option determines when you pay for your ad. For many optimization goals, you'll pay each time your ad is served (known as an impression). {explanation about valid billing events} {explanation about the recomended billin event}{learn more}",
          [
            s._param(
              "explanation about valid billing events",
              c.jsx("div", {
                className: "x1y1aw1k",
                children: s._(
                  /*BTDS*/ "Some optimization goals also let you choose between impressions and actions (such as link clicks or ThruPlay).",
                ),
              }),
            ),
            s._param(
              "explanation about the recomended billin event",
              c.jsx("div", {
                className: "x1y1aw1k",
                children: s._(
                  /*BTDS*/ "The recommended option shown here balances efficient spending of your budget to achieve your objective with easy understanding of your results.",
                ),
              }),
            ),
            s._param(
              "learn more",
              c.jsx("div", {
                className: "x1y1aw1k",
                children: c.jsx(r("AdsLearnMore.react"), {
                  cmsID: m,
                  isStandalone: !0,
                }),
              }),
            ),
          ],
        ),
        m,
      );
    }
    function Y(e) {
      return e === !0
        ? s._(/*BTDS*/ "When you get charged for ads")
        : s._(/*BTDS*/ "When you get charged");
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J() {
      return s._(
        /*BTDS*/ "You can now find information about when you get charged for ads in the Help Center. {=m1}",
        [
          s._implicitParam(
            "=m1",
            c.jsx(r("AHGHelpTrayLink2.react"), {
              helpCenterID: p,
              children: s._(/*BTDS*/ "How Meta charges for ads"),
            }),
          ),
        ],
      );
    }
    J.displayName = J.name + " [from " + i.id + "]";
    function Z() {
      return s._(
        /*BTDS*/ "Editing isn't available for some or all of these ad sets. {=m2}",
        [
          s._implicitParam(
            "=m2",
            c.jsx(r("AHGHelpTrayLink2.react"), {
              helpCenterID: p,
              children: s._(/*BTDS*/ "How Meta charges for ads"),
            }),
          ),
        ],
      );
    }
    Z.displayName = Z.name + " [from " + i.id + "]";
    function ee() {
      return s._(/*BTDS*/ "Bid cap");
    }
    ee.displayName = ee.name + " [from " + i.id + "]";
    function te() {
      return s._(/*BTDS*/ "Target cost");
    }
    te.displayName = te.name + " [from " + i.id + "]";
    function ne(e) {
      return e === !0 ? s._(/*BTDS*/ "Cost Cap") : s._(/*BTDS*/ "Cost cap");
    }
    function re() {
      return s._(/*BTDS*/ "Lowest cost");
    }
    re.displayName = re.name + " [from " + i.id + "]";
    function oe() {
      return s._(/*BTDS*/ "Highest value");
    }
    oe.displayName = oe.name + " [from " + i.id + "]";
    function ae() {
      return s._(/*BTDS*/ "Maximum bid");
    }
    ae.displayName = ae.name + " [from " + i.id + "]";
    function ie() {
      return s._(/*BTDS*/ "Optimization for ad delivery");
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    function le() {
      return s._(
        /*BTDS*/ "A conversion window is the length of time between someone clicking or viewing your ad and completing a valuable action you've defined as a conversion event. The window you choose here lets us know whether to focus on {one day attribution window} day or {seven days attribution window} days worth of conversion data when determining who should see your ad.",
        [
          s._param("one day attribution window", 1),
          s._param("seven days attribution window", 7),
        ],
      );
    }
    le.displayName = le.name + " [from " + i.id + "]";
    function se() {
      return s._(/*BTDS*/ "{explain what is conversion window}{learn more}", [
        s._param(
          "explain what is conversion window",
          c.jsx("div", {
            children: s._(
              /*BTDS*/ "Select the amount of time it typically takes for someone to complete a valuable action (conversion) after clicking or viewing your ad. We use data generated using this timeframe to optimize ad delivery. For example, if your conversion window is {one day attribution window} day, we'll optimize by using data from conversions that happen within {one day attribution window} day of someone interacting with your ad.",
              [s._param("one day attribution window", 1)],
            ),
          }),
        ),
        s._param("learn more", c.jsx(I, {})),
      ]);
    }
    se.displayName = se.name + " [from " + i.id + "]";
    function ue() {
      return s._(/*BTDS*/ "{explain what is conversion window}{learn more}", [
        s._param(
          "explain what is conversion window",
          c.jsx("div", {
            children: s._(
              /*BTDS*/ "Select the amount of time it typically takes for someone to complete an app event (conversion) after clicking or viewing your ad. We use data generated using this timeframe to optimize ad delivery. For example, if your conversion window is {one day attribution window} day, we'll optimize by using data from conversions that happen within {one day attribution window} day of someone interacting with your ad.",
              [s._param("one day attribution window", 1)],
            ),
          }),
        ),
        s._param("learn more", c.jsx(I, {})),
      ]);
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    function ce() {
      return s._(/*BTDS*/ "{explain what is conversion window}{learn more}", [
        s._param(
          "explain what is conversion window",
          c.jsx("div", {
            children: s._(
              /*BTDS*/ "Select the amount of time it typically takes for someone to complete an app installation (conversion) after clicking or viewing your ad. We use data generated in this timeframe to optimize ad delivery. For example, if your conversion window is {one day attribution window} day, we'll optimize by using data from conversions that happen within {one day attribution window} day of someone interacting with your ad.",
              [s._param("one day attribution window", 1)],
            ),
          }),
        ),
        s._param("learn more", c.jsx(I, {})),
      ]);
    }
    ce.displayName = ce.name + " [from " + i.id + "]";
    function de(e, t) {
      return e === !0 && t === !0
        ? s._(/*BTDS*/ "Campaign scheduling")
        : o(
              "AdsBudgetUsabilityGKUtils",
            ).isEligibleForH12025UsabilityBudgetSchedulingRenamePreTest({
              shouldLogExposure: !0,
            })
          ? s._(/*BTDS*/ "Ad set scheduling")
          : s._(/*BTDS*/ "Ad scheduling");
    }
    function me(t) {
      t === void 0 && (t = !1);
      var n = c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(r("geoMargin").top8),
          {
            children: c.jsx(r("AdsLearnMore.react"), {
              cmsID: E,
              source: "ads_manager_context_preview_learn_more",
            }),
          },
        ),
      );
      return t
        ? s._(
            /*BTDS*/ "You can schedule ads and messages for specific hours and days of the week. {Learn more}",
            [s._param("Learn more", n)],
          )
        : s._(
            /*BTDS*/ "You can schedule your ads to deliver on specific hours and days of the week based on the viewer\u2019s or your ad account\u2019s time zone. {Learn more}",
            [s._param("Learn more", n)],
          );
    }
    function pe() {
      return s._(
        /*BTDS*/ "You can schedule your ads to deliver on specific hours and days of the week based on the viewer\u2019s or your ad account\u2019s time zone. {Learn more}",
        [
          s._param(
            "Learn more",
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").top8),
                {
                  children: c.jsx(r("AdsLearnMore.react"), {
                    cmsID: E,
                    label: s._(/*BTDS*/ "Learn about ad scheduling"),
                    source: "ads_manager_context_preview_learn_more",
                  }),
                },
              ),
            ),
          ),
        ],
      );
    }
    pe.displayName = pe.name + " [from " + i.id + "]";
    var _e = s._(/*BTDS*/ "Ad call to action");
    function fe() {
      return s._(
        /*BTDS*/ "We'll maximize value by adjusting bid so you get the most total purchase value for your budget. You can set a minimum ROAS if you want your business to break even with the amount spent.",
      );
    }
    fe.displayName = fe.name + " [from " + i.id + "]";
    function ge() {
      return s._(/*BTDS*/ "Getting purchases with the highest value");
    }
    ge.displayName = ge.name + " [from " + i.id + "]";
    function he() {
      return s._(
        /*BTDS*/ "Return on ad spend may decrease as fewer opportunities are available. Cost per purchase may increase as budget is spent.",
      );
    }
    he.displayName = he.name + " [from " + i.id + "]";
    function ye() {
      return s._(/*BTDS*/ "Increase website views");
    }
    ye.displayName = ye.name + " [from " + i.id + "]";
    function Ce() {
      return s._(/*BTDS*/ "Optimize for higher-value purchases");
    }
    Ce.displayName = Ce.name + " [from " + i.id + "]";
    function be() {
      return ye();
    }
    function ve() {
      return s._(/*BTDS*/ "Optimize for landing page views");
    }
    ve.displayName = ve.name + " [from " + i.id + "]";
    function Se(e, t, n, r, o) {
      return s._(
        /*BTDS*/ "Optimize {ad set(s)} for landing page views to find more people in your target audiences who'll click on your ad and wait for the landing page to load. This can help get more page views compared to optimizing for link clicks. {reset billing event to impression message} {keep same bid for ad set using manual bid message} {turn on pixel tracking message}",
        [
          s._param("ad set(s)", gt(e, n)),
          s._param("reset billing event to impression message", pt(e, t)),
          s._param(
            "keep same bid for ad set using manual bid message",
            _t(e, r),
          ),
          s._param("turn on pixel tracking message", ft(o)),
        ],
      );
    }
    Se.displayName = Se.name + " [from " + i.id + "]";
    function Re(e, t, n, a, i) {
      return s._(
        /*BTDS*/ "We recommend using landing page views as your optimization event for {ad set(s)} because it'll show your ads to more {=m3} who'll wait for the landing page to load. This can help get more page views compared to optimizing for link clicks. {reset billing event to impression message} {keep same bid for ad set using manual bid message} {turn on pixel tracking message}",
        [
          s._param("ad set(s)", gt(e, n)),
          s._param("reset billing event to impression message", pt(e, t)),
          s._param(
            "keep same bid for ad set using manual bid message",
            _t(e, a),
          ),
          s._param("turn on pixel tracking message", ft(i)),
          s._implicitParam(
            "=m3",
            c.jsx(r("AHGHelpTrayLink2.react"), {
              helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      );
    }
    Re.displayName = Re.name + " [from " + i.id + "]";
    function Le() {
      return s._(/*BTDS*/ "Use a pixel to see more actions");
    }
    Le.displayName = Le.name + " [from " + i.id + "]";
    function Ee() {
      return s._(
        /*BTDS*/ "Get insight into what happens after people click your link by turning on your pixel.",
      );
    }
    Ee.displayName = Ee.name + " [from " + i.id + "]";
    function ke() {
      return s._(/*BTDS*/ "Use pixel");
    }
    ke.displayName = ke.name + " [from " + i.id + "]";
    function Ie() {
      return C;
    }
    function Te() {
      return s._(
        /*BTDS*/ "Since your pixel is tracking the value of purchases on your website, you should start optimizing your ads for higher-value purchases using the Value optimization. It's designed to get you a higher return on your ad spend (ROAS).",
      );
    }
    Te.displayName = Te.name + " [from " + i.id + "]";
    function De() {
      return s._(
        /*BTDS*/ "We recommend changing your optimization to value because it's designed to get you a higher return on your ad spend (ROAS). Value optimizes for higher-value purchases rather than more lower-value purchases.",
      );
    }
    De.displayName = De.name + " [from " + i.id + "]";
    function xe() {
      return s._(/*BTDS*/ "Increase landing page traffic");
    }
    xe.displayName = xe.name + " [from " + i.id + "]";
    function $e(e, t) {
      return s._(
        /*BTDS*/ "Optimize for landing page views in the traffic objective to drive more {=m1} to your ad's destination URL. {keep same bid for ad set using manual bid message}",
        [
          s._param(
            "keep same bid for ad set using manual bid message",
            _t(e, t),
          ),
          s._implicitParam(
            "=m1",
            c.jsx(r("GeoLink.react"), {
              href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
              target: "_blank",
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      );
    }
    $e.displayName = $e.name + " [from " + i.id + "]";
    function Pe() {
      return s._(/*BTDS*/ "Optimize for landing page views");
    }
    Pe.displayName = Pe.name + " [from " + i.id + "]";
    function Ne() {
      return s._(/*BTDS*/ "Get more messages");
    }
    Ne.displayName = Ne.name + " [from " + i.id + "]";
    function Me(e, t, n) {
      return s._(
        /*BTDS*/ "Drive more people to respond to your ad with conversations optimization in the messages objective. {reset billing event to impression message} {keep same bid for ad set using manual bid message}",
        [
          s._param("reset billing event to impression message", pt(e, t)),
          s._param(
            "keep same bid for ad set using manual bid message",
            _t(e, n),
          ),
        ],
      );
    }
    Me.displayName = Me.name + " [from " + i.id + "]";
    function we() {
      return s._(/*BTDS*/ "Optimize for conversations");
    }
    we.displayName = we.name + " [from " + i.id + "]";
    function Ae() {
      return s._(/*BTDS*/ "Optimize for value");
    }
    Ae.displayName = Ae.name + " [from " + i.id + "]";
    function Fe() {
      return s._(/*BTDS*/ "Optimize for conversion events");
    }
    Fe.displayName = Fe.name + " [from " + i.id + "]";
    function Oe() {
      return g;
    }
    function Be() {
      return h;
    }
    function We() {
      return b;
    }
    function qe() {
      return y;
    }
    function Ue() {
      return _;
    }
    function Ve() {
      return v;
    }
    function He() {
      return s._(/*BTDS*/ "Use campaign budget optimization");
    }
    He.displayName = He.name + " [from " + i.id + "]";
    function Ge() {
      return s._(/*BTDS*/ "Maximize your new campaign's results");
    }
    Ge.displayName = Ge.name + " [from " + i.id + "]";
    function ze() {
      return s._(
        /*BTDS*/ "Optimize your top-performing ad sets with campaign budget optimization. It uses a campaign budget to automatically distribute money to your best ad sets based on their real-time performance.",
      );
    }
    ze.displayName = ze.name + " [from " + i.id + "]";
    function je() {
      return s._(/*BTDS*/ "Get more conversions");
    }
    je.displayName = je.name + " [from " + i.id + "]";
    function Ke(e) {
      return s._(/*BTDS*/ "You're eligible to get more {Standard event}", [
        s._param(
          "Standard event",
          o(
            "AdsDeliveryGrowthDuplicationContentUtils",
          ).getEventNameFromPromotedObjects(e),
        ),
      ]);
    }
    Ke.displayName = Ke.name + " [from " + i.id + "]";
    function Qe(e) {
      return s._(
        /*BTDS*/ "You have enough {Standard event} events that we can optimize your ads for more of these actions if you switch to the conversions objective.",
        [
          s._param(
            "Standard event",
            o(
              "AdsDeliveryGrowthDuplicationContentUtils",
            ).getEventNameFromPromotedObjects(e),
          ),
        ],
      );
    }
    Qe.displayName = Qe.name + " [from " + i.id + "]";
    function Xe(e) {
      return s._(
        /*BTDS*/ "You'll get better {Standard event} results if you optimize for conversion events in the catalog sales objective.",
        [
          s._param(
            "Standard event",
            o(
              "AdsDeliveryGrowthDuplicationContentUtils",
            ).getEventNameFromPromotedObjects(e),
          ),
        ],
      );
    }
    Xe.displayName = Xe.name + " [from " + i.id + "]";
    function Ye() {
      return s._(/*BTDS*/ "Use conversions objective");
    }
    Ye.displayName = Ye.name + " [from " + i.id + "]";
    function Je() {
      return s._(/*BTDS*/ "CRM integration");
    }
    Je.displayName = Je.name + " [from " + i.id + "]";
    function Ze(e, t, n) {
      var a = s._(
        /*BTDS*/ "Your ad delivery is being optimized for lead conversion rate.",
      );
      return (
        e
          ? n
            ? (a = s._(
                /*BTDS*/ "You have started HubSpot Qualified Leads integration. You can configure your funnel anytime in Events Manager.",
              ))
            : t !== "" &&
              (a = s._(
                /*BTDS*/ "You have completed {crm name} Qualified Leads integration.",
                [s._param("crm name", t)],
              ))
          : (a = s._(
              /*BTDS*/ "Deliver your ads to {=m1} who are most likely to convert by integrating your CRM with the qualified leads optimization. {learn more link}",
              [
                s._param(
                  "learn more link",
                  c.jsx(r("AdsLearnMore.react"), {
                    cmsID: S,
                    isStandalone: !1,
                  }),
                ),
                s._implicitParam(
                  "=m1",
                  c.jsx(r("AHGHelpTrayLink2.react"), {
                    helpCenterID:
                      o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                    children: s._(/*BTDS*/ "people"),
                  }),
                ),
              ],
            )),
        a
      );
    }
    function et() {
      return s._(
        /*BTDS*/ "Your CRM integration is incomplete. To get the highest quality leads from the qualified leads optimization, finish the setup process.",
      );
    }
    et.displayName = et.name + " [from " + i.id + "]";
    function tt() {
      return s._(
        /*BTDS*/ "This will allow you to optimize your CRM campaign for lead quality and get more tailored results.",
      );
    }
    tt.displayName = tt.name + " [from " + i.id + "]";
    function nt() {
      return s._(
        /*BTDS*/ "Finish connecting your CRM to help lower your cost per quality lead by {number of cost reduction}\u0025",
        [
          s._param(
            "number of cost reduction",
            r("LeadGenSVConversionLeadsOptimizationSitevarConfig.experimental")
              .apps.integrated_cpql_reduction_str_mar_26,
          ),
        ],
      );
    }
    nt.displayName = nt.name + " [from " + i.id + "]";
    function rt() {
      return s._(
        /*BTDS*/ "Connect your CRM to share conversion data with Meta",
      );
    }
    rt.displayName = rt.name + " [from " + i.id + "]";
    function ot() {
      return s._(
        /*BTDS*/ "Leads performance goals use conversion data to help optimize for higher-quality leads. You can share this data by integrating your CRM through Conversions API. {=m2}",
        [
          s._implicitParam(
            "=m2",
            c.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/business/help/571704773472628",
              target: "_blank",
              children: s._(/*BTDS*/ "About Conversions API CRM"),
            }),
          ),
        ],
      );
    }
    ot.displayName = ot.name + " [from " + i.id + "]";
    function at() {
      return s._(
        /*BTDS*/ "Get 100,000 free tasks for 6 months in less than 4 clicks",
      );
    }
    at.displayName = at.name + " [from " + i.id + "]";
    function it(e) {
      return s._(
        /*BTDS*/ "Get 100,000 free Send Funnel Event tasks every month for six months when you connect Zapier with Conversions API for CRM. Conversions API with CRM can lower your cost per quality lead by {cpql reduction}\u0025. Quantities are limited, {=m5}.",
        [
          s._param(
            "cpql reduction",
            r("LeadGenSVConversionLeadsOptimizationSitevarConfig.experimental")
              .apps.integrated_cpql_reduction_str_mar_26,
          ),
          s._implicitParam(
            "=m5",
            c.jsx(r("GeoLink.react"), {
              href: e,
              target: "_blank",
              children: s._(/*BTDS*/ "Zapier's terms apply"),
            }),
          ),
        ],
      );
    }
    it.displayName = it.name + " [from " + i.id + "]";
    function lt(e, t, n, r) {
      return e
        ? n
          ? s._(/*BTDS*/ "Go to Events Manager")
          : s._(/*BTDS*/ "Modify funnel in Events Manager")
        : t
          ? r === !0
            ? s._(/*BTDS*/ "Setup in Events Manager")
            : s._(/*BTDS*/ "Continue setup in Events Manager")
          : st();
    }
    function st() {
      return s._(/*BTDS*/ "Setup CRM in Events Manager");
    }
    st.displayName = st.name + " [from " + i.id + "]";
    function ut() {
      return s._(
        /*BTDS*/ "To complete setup, confirm or customize your AI-generated sales funnel",
      );
    }
    ut.displayName = ut.name + " [from " + i.id + "]";
    function ct() {
      return s._(
        /*BTDS*/ "We generated a funnel for you based on your current CRM setup. For even more personalized results, you can make changes to fit your business needs. On average, users who completed setup saw a {number of cost reduction}\u0025 lower cost per quality lead.",
        [
          s._param(
            "number of cost reduction",
            r("LeadGenSVConversionLeadsOptimizationSitevarConfig.experimental")
              .apps.integrated_cpql_reduction_str_mar_26,
          ),
        ],
      );
    }
    ct.displayName = ct.name + " [from " + i.id + "]";
    function dt(e, t, n, r, a) {
      var i,
        l = r.adAccountID,
        s = r.businessID,
        u = r.dataSourceID,
        c = r.navSource,
        d = r.view;
      if (n && u != null)
        i = o("AdsEventsManagerURIHelper").getLeadGenFunnel2URI(u, s);
      else if ((e || t) && u != null) {
        var m = "crm_get_started";
        i = o("AdsEventsManagerURIHelper").getDataSourceURI(
          "CRM",
          babelHelpers.extends(
            {
              businessID: s,
              dataSourceID: u,
              adAccountID: l,
              view: d,
              dialog: m,
              crm_preselected_partner: a === !0 ? L : void 0,
            },
            c != null ? { nav_source: c } : {},
          ),
        );
      } else {
        var p = "crm_get_started";
        i = o("AdsEventsManagerURIHelper").getBaseURI({
          businessID: s,
          adAccountID: l,
          dialog: p,
          navSource: c,
        });
      }
      return i;
    }
    function mt(e, t, n) {
      if (e && t && t.length > 0) {
        var o = n
          ? "You can modify your stages by going to Events Manager."
          : "";
        return s._(
          /*BTDS*/ "Your ad delivery is being optimized for lead conversion rate for {=m2} events. {link description}",
          [
            s._param("link description", o),
            s._implicitParam(
              "=m2",
              c.jsx(r("GeoTooltip.react"), {
                content: t.join("\r\n"),
                "data-testid": void 0,
                heading: "Optimization Stages",
                position: "below",
                whiteSpace: "pre",
                children: s._(/*BTDS*/ "{=m1}", [
                  s._implicitParam(
                    "=m1",
                    c.jsx(r("GeoText.react"), {
                      "data-testid": void 0,
                      children: s._(/*BTDS*/ "{number of stages}", [
                        s._param(
                          "number of stages",
                          c.jsx("u", { children: t.length }),
                        ),
                      ]),
                    }),
                  ),
                ]),
              }),
            ),
          ],
        );
      }
      return null;
    }
    function pt(e, t) {
      return t
        ? s._(
            /*BTDS*/ "Changing the optimization event could change {ad set(s)} to be charged on impressions.",
            [s._param("ad set(s)", gt(e, !0))],
          )
        : null;
    }
    pt.displayName = pt.name + " [from " + i.id + "]";
    function _t(e, t) {
      if (!t) return null;
      var n = e ? 2 : 1;
      return s._(
        /*BTDS*/ '_j{"*":{"*":"We keep the same bids for the ad sets."},"_1":{"_1":"We keep the same bid for the ad set."}}',
        [s._plural(n), s._plural(n)],
      );
    }
    _t.displayName = _t.name + " [from " + i.id + "]";
    function ft(e) {
      return e ? s._(/*BTDS*/ "This will turn on your pixel.") : null;
    }
    ft.displayName = ft.name + " [from " + i.id + "]";
    function gt(e, t) {
      return e
        ? t
          ? s._(/*BTDS*/ "your ad sets")
          : s._(/*BTDS*/ "some of your ad sets")
        : s._(/*BTDS*/ "your ad set");
    }
    gt.displayName = gt.name + " [from " + i.id + "]";
    function ht() {
      return s._(
        /*BTDS*/ "{=m0} is the only conversion event available when {=m3} is selected.",
        [
          s._implicitParam(
            "=m0",
            c.jsx("b", { children: s._(/*BTDS*/ "Purchase") }),
          ),
          s._implicitParam(
            "=m3",
            c.jsx("b", { children: s._(/*BTDS*/ "Website and in-store") }),
          ),
        ],
      );
    }
    ht.displayName = ht.name + " [from " + i.id + "]";
    function yt() {
      return s._(
        /*BTDS*/ "{=m0} is the only conversion event available when {=m3} is selected.",
        [
          s._implicitParam(
            "=m0",
            c.jsx("b", { children: s._(/*BTDS*/ "Purchase") }),
          ),
          s._implicitParam(
            "=m3",
            c.jsx("b", { children: s._(/*BTDS*/ "Website, app and in-store") }),
          ),
        ],
      );
    }
    yt.displayName = yt.name + " [from " + i.id + "]";
    function Ct() {
      return s._(
        /*BTDS*/ "{=m0} is the only conversion event available when {=m3} is your conversion location.",
        [
          s._implicitParam(
            "=m0",
            c.jsx("b", { children: s._(/*BTDS*/ "Purchase") }),
          ),
          s._implicitParam(
            "=m3",
            c.jsx("b", { children: s._(/*BTDS*/ "In-store") }),
          ),
        ],
      );
    }
    Ct.displayName = Ct.name + " [from " + i.id + "]";
    function bt() {
      return r("LeadGenSVConversionLeadsOptimizationSitevarConfig.experimental")
        .apps.integrated_cpql_reduction_str_mar_26;
    }
    function vt() {
      return r("LeadGenSVConversionLeadsOptimizationSitevarConfig.experimental")
        .apps.non_integrated_cpql_reduction_str;
    }
    ((l.CMS_SCHEDULE = E),
      (l.OBJECTIVE_EDITOR_ODAX_CMS_ID = k),
      (l.adsDeliveryTypeHelpText = T),
      (l.buyingTypeSectionLabel = D),
      (l.destinationLinkSectionLabel = x),
      (l.destinationSectionLabelConversionLocation = $),
      (l.ageSectionLabel = P),
      (l.genderSectionLabel = N),
      (l.deviceTypeSectionLabel = M),
      (l.deviceTypeSectionDefaultValue = w),
      (l.adFormatSectionLabel = A),
      (l.adsDeliveryTypeLabel = F),
      (l.appEventsFieldTitle = O),
      (l.appEventsHelpText = B),
      (l.appEventsPlaceholder = W),
      (l.appEventsTypeaheadWarning = q),
      (l.NO_VALID_EVENT_SELECTED_TYPEAHEAD_ERROR = U),
      (l.customEventsFieldTitle = V),
      (l.customEventsPlaceholder = H),
      (l.DRIVED_EVENTS_TYPEAHEAD_ERROR = G),
      (l.optimizationForAdAndDeliverySectionTitle = z),
      (l.getBidAmountInfoInCampaignBidStrategy = j),
      (l.getAverageCostOptionLabel = K),
      (l.getBidStrategyLabel = Q),
      (l.getBillingEventHelpText = X),
      (l.getBillingEventLabel = Y),
      (l.getEventBasedBillingHelpCenterGuidanceContent = J),
      (l.getEventBasedBillingDisableBulkEditBillingEventTooltip = Z),
      (l.getMaximumBidOptionShortLabel = ee),
      (l.getAverageBidOptionShortLabel = te),
      (l.getCostCapOptionShortLabel = ne),
      (l.getOptimizedCostOptionLabel = re),
      (l.getHighestValueBidStrategyLabel = oe),
      (l.getMaximumBidOptionLabel = ae),
      (l.getOptimizationGoalLabel = ie),
      (l.getConversionWindowHelpText = le),
      (l.getConversionWindowHelpTextForOffsiteConversion = se),
      (l.getConversionWindowHelpTextForMobileAppEvents = ue),
      (l.getConversionWindowHelpTextForMobileAppInstalls = ce),
      (l.getDayPartingLabel = de),
      (l.getDayPartingHelpText = me),
      (l.getDayPartingHelpTextPgd = pe),
      (l.callToActionLabel = _e),
      (l.getHighestValueBidStrategyDescription = fe),
      (l.getHighestValueBidStrategyBestPractice = ge),
      (l.getHighestValueBidStrategyTradeoff = he),
      (l.getReturnOnAdSpendDuplicationOptimizationTipTitle = Ce),
      (l.getLandingPageViewsDuplicationTipTitle = be),
      (l.getLandingPageViewsDuplicationToggleLabel_DEPRECATE = ve),
      (l.getLandingPageViewsDuplicationUpsellDescription = Se),
      (l.getLandingPageViewsDuplicationDefaultOptInDescription = Re),
      (l.getTurnOnPixelTrackingOptimizationTipTitle = Le),
      (l.getTurnOnPixelTrackingOptimizationTipDescription = Ee),
      (l.getTurnOnPixelTrackingOptimizationTipToggleLabel = ke),
      (l.getTurnOnPixelTrackingOptimizationTipCMSID = Ie),
      (l.getReturnOnAdSpendDuplicationUpsellDescription = Te),
      (l.getReturnOnAdSpendDuplicationDefaultOptInDescription = De),
      (l.getPostEngagmentDuplicationOptimizationTipTitle = xe),
      (l.getPostEngagmentDuplicationOptimizationTipDescription = $e),
      (l.getPostEngagmentDuplicationOptimizationTipToggleLabel = Pe),
      (l.getMessagesMessengerOptimizationTipTitle = Ne),
      (l.getMessagesMessengerOptimizationTipDescription = Me),
      (l.getMessagesMessengerOptimizationTipToggleLabel = we),
      (l.getReturnOnAdSpendDuplicationToggleLabel = Ae),
      (l.getPCSLinkClicksToConversionToggleLabel = Fe),
      (l.getLandingPageViewsCMSID = Oe),
      (l.getMessageRepliesCMSID = Be),
      (l.getReturnOnAdSpendCMSID = We),
      (l.getDefaultOptimizationTipCMSID = qe),
      (l.getCampaignGroupBudgetCMSID = Ue),
      (l.getTrafficLinkClicksToConversionCMSID = Ve),
      (l.getCampaignGroupBudgetOptimizationTipToggleLabel = He),
      (l.getCampaignGroupBudgetOptimizationTipTitleComparisonCopy = Ge),
      (l.getCampaignGroupBudgetOptimizationTipDescriptionComparisonCopy = ze),
      (l.getTrafficLinkClicksToConversionTipTitle = je),
      (l.getPCSLinkClicksToConversionTipTitle = Ke),
      (l.getTrafficLinkClicksToConversionTipDescription = Qe),
      (l.getPCSLinkClickToConversionTipDescription = Xe),
      (l.getTrafficLinkClicksToConversionToggleLabel = Ye),
      (l.getCRMDataLabel = Je),
      (l.getCRMDataDescription = Ze),
      (l.getCRMDataIncompleteWarning = et),
      (l.getNewCRMDataIncompleteWarning = tt),
      (l.getCRMDataIncompleteHeader = nt),
      (l.getCRMUpsellHeaderForOffsiteCLO = rt),
      (l.getCRMUpsellContentForOffsiteCLO = ot),
      (l.getZapierIncentiveUpsellHeader = at),
      (l.getZapierIncentiveUpsellContent = it),
      (l.getCRMIntegrationFooterButtonLabel = lt),
      (l.getCRMIntegrationFooterButtonLabelDefault = st),
      (l.getMLGuidanceHeading = ut),
      (l.getMLGuidanceContent = ct),
      (l.getCRMIntegrationButtonRedirectionLink = dt),
      (l.getCRMIntegrationFooterDescription = mt),
      (l.getWebsiteAndInStoreConversionEventTooltip = ht),
      (l.getWebsiteAppAndInStoreConversionEventTooltip = yt),
      (l.getInStoreConversionEventTooltip = Ct),
      (l.getLeadAdOnsiteCloIntegratedCpqlReductionStr = bt),
      (l.getLeadAdOnsiteCloNonIntegratedCpqlReductionStr = vt));
  },
  226,
);
