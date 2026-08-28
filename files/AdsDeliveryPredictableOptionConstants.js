__d(
  "AdsDeliveryPredictableOptionConstants",
  ["fbt", "AdsUniqueMetricsHelpID", "DateConsts", "GeoLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [2, 1, 7],
      d = {
        AUTOMATIC: s._(/*BTDS*/ "Automatic"),
        BALANCED: s._(/*BTDS*/ "Balanced"),
        DEFAULT: s._(/*BTDS*/ "Standard"),
        STANDARD: s._(/*BTDS*/ "Balanced (recommended)"),
        HIGH_REACH: s._(/*BTDS*/ "Higher reach"),
        HIGH_FREQUENCY: s._(/*BTDS*/ "Higher frequency"),
      },
      m = {
        DEFAULT: s._(/*BTDS*/ "We recommend default to the specific objective"),
        STANDARD: s._(
          /*BTDS*/ "We recommend standard as it is a great balance of reach and frequency",
        ),
        HIGH_REACH: s._(
          /*BTDS*/ "Reach more {=m2} but show ads less frequently",
          [
            s._implicitParam(
              "=m2",
              u.jsx(r("GeoLink.react"), {
                href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                target: "_blank",
                children: s._(/*BTDS*/ "people"),
              }),
            ),
          ],
        ),
        HIGH_FREQUENCY: s._(
          /*BTDS*/ "Show ads more frequently but reach fewer {=m2}",
          [
            s._implicitParam(
              "=m2",
              u.jsx(r("GeoLink.react"), {
                href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                target: "_blank",
                children: s._(/*BTDS*/ "people"),
              }),
            ),
          ],
        ),
      },
      p = {
        interval: o("DateConsts").DAYS_PER_WEEK,
        frequency: c[0],
        label: d.STANDARD,
        tooltip: m.STANDARD,
        isDisabled: !1,
      },
      _ = {
        interval: o("DateConsts").DAYS_PER_WEEK,
        frequency: c[1],
        label: d.HIGH_REACH,
        tooltip: m.HIGH_REACH,
        isDisabled: !1,
      },
      f = {
        interval: o("DateConsts").DAYS_PER_WEEK,
        frequency: c[2],
        label: d.HIGH_FREQUENCY,
        tooltip: m.HIGH_FREQUENCY,
        isDisabled: !1,
      },
      g = [
        babelHelpers.extends({}, p, {
          description: s._(
            /*BTDS*/ "- Show ads no more than 2 times every 7 days",
          ),
        }),
        babelHelpers.extends({}, _, {
          description: s._(
            /*BTDS*/ "- Show ads no more than 1 time every 7 days",
          ),
        }),
        babelHelpers.extends({}, f, {
          description: s._(
            /*BTDS*/ "- Show ads no more than 7 times every 7 days",
          ),
        }),
      ],
      h = [
        babelHelpers.extends({}, p, {
          description: s._(
            /*BTDS*/ "- Show ads to get no more than 2 views every 7 days",
          ),
        }),
        babelHelpers.extends({}, _, {
          description: s._(
            /*BTDS*/ "- Show ads to get no more than 1 view every 7 days",
          ),
        }),
        babelHelpers.extends({}, f, {
          description: s._(
            /*BTDS*/ "- Show ads to get no more than 7 views every 7 days",
          ),
        }),
      ],
      y = [
        babelHelpers.extends({}, p, {
          description: s._(
            /*BTDS*/ "Show ads no more than 2 times every 7 days",
          ),
        }),
        babelHelpers.extends({}, _, {
          description: s._(
            /*BTDS*/ "Show ads no more than 1 time every 7 days",
          ),
        }),
        babelHelpers.extends({}, f, {
          description: s._(
            /*BTDS*/ "Show ads no more than 7 times every 7 days",
          ),
        }),
      ],
      C = [
        {
          interval: o("DateConsts").DAYS_PER_WEEK,
          frequency: c[1],
          label: d.HIGH_REACH,
          description: s._(
            /*BTDS*/ "- Show ads no more than 1 time every 7 days",
          ),
          tooltip: m.HIGH_REACH,
          isDisabled: !1,
        },
        {
          interval: o("DateConsts").DAYS_PER_WEEK,
          frequency: c[2],
          label: d.HIGH_FREQUENCY,
          description: s._(
            /*BTDS*/ "- Show ads no more than 7 times every 7 days",
          ),
          tooltip: m.HIGH_FREQUENCY,
          isDisabled: !1,
        },
        {
          interval: o("DateConsts").DAYS_PER_WEEK,
          frequency: c[0],
          label: d.BALANCED,
          description: s._(
            /*BTDS*/ "- Show ads no more than 2 times every 7 days",
          ),
          tooltip: m.STANDARD,
          isDisabled: !1,
        },
      ];
    ((l.OPTION_LABEL_DEPRECATED = d),
      (l.OPTION_TOOLTIP_DEPRECATED = m),
      (l.DEFAULT_OPTIONS_LIST_DEPRECATED = g),
      (l.DEFAULT_OPTIONS_LIST_VIDEO_VIEWS_DEPRECATED = h),
      (l.DEFAULT_OPTIONS_LIST_PLANNER = y),
      (l.DEFAULT_OPTIONS_LIST_FOR_AUCTION = C));
  },
  226,
);
