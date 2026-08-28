__d(
  "SequencedEventConversionsContent",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Single or sequenced conversion event"),
      d = s._(/*BTDS*/ "Conversion events"),
      m = s._(/*BTDS*/ "Single event"),
      p = s._(
        /*BTDS*/ "Optimize for one action you want people to take when they see your ads.",
      ),
      _ = s._(/*BTDS*/ "Sequenced events"),
      f = s._(
        /*BTDS*/ "Optimize for a higher-value action that happens after an initial event. Your ad is credited only if both events occur in order.",
      ),
      g = s._(/*BTDS*/ "Select a sequenced conversion event"),
      h = s._(/*BTDS*/ "No sequenced events"),
      y = s._(
        /*BTDS*/ "Create a sequence to optimize for a higher-value action that happens after an initial event.",
      ),
      C = s._(/*BTDS*/ "Select events"),
      b = s._(/*BTDS*/ "Select an event or search by name"),
      v = s._(/*BTDS*/ "Attribution settings"),
      S = s._(
        /*BTDS*/ "Attribution settings determine the period of time and engagement for which conversion sequences can be credited to your ads. This is also used to inform ad delivery. Your ad is credited only if each event occurs in order within the selected time periods.",
      ),
      R = s._(/*BTDS*/ "Initial event"),
      L = s._(
        /*BTDS*/ "Click-through is when someone clicks your ad and converts within the period of time that you select. We'll learn from your click-throughs and show your ads to people likely to click-through within the same period of time as they complete the sequenced events.",
      ),
      E = s._(/*BTDS*/ "Final event"),
      k = s._(
        /*BTDS*/ "28 days is the only available option when you are using sequenced events.",
      ),
      I = s._(/*BTDS*/ "You can't select the same event for {=m1} and {=m3}.", [
        s._implicitParam(
          "=m1",
          u.jsx("b", { children: s._(/*BTDS*/ "Initial event") }),
        ),
        s._implicitParam(
          "=m3",
          u.jsx("b", { children: s._(/*BTDS*/ "Final event") }),
        ),
      ]),
      T = s._(/*BTDS*/ "A sequence with these events already exists.");
    function D(e) {
      return s._(/*BTDS*/ "{click through days} days after initial event", [
        s._param("click through days", e),
      ]);
    }
    D.displayName = D.name + " [from " + i.id + "]";
    var x = s._(
        /*BTDS*/ "Choose one or two actions you want people to take when they see your ads.",
      ),
      $ = s._(/*BTDS*/ "Standard + sequenced-event"),
      P = s._(
        /*BTDS*/ "{=m0} is the only attribution model available when using sequenced events.",
        [
          s._implicitParam(
            "=m0",
            u.jsx("b", {
              children: s._(/*BTDS*/ "Standard + sequenced-event"),
            }),
          ),
        ],
      ),
      N = s._(
        /*BTDS*/ "Your campaign needs time to deliver meaningful results. Letting campaigns run with enough time helps us find your most valuable customers and may drive better results over time.",
      ),
      M = s._(/*BTDS*/ "Your sequenced events"),
      w = s._(
        /*BTDS*/ "Custom conversions are not available for sequenced events.",
      ),
      A = s._(/*BTDS*/ "This event is not eligible as an initial event."),
      F = s._(/*BTDS*/ "A sequence is required."),
      O = s._(
        /*BTDS*/ "{=m0} is the only available option when you are using sequenced events.",
        [
          s._implicitParam(
            "=m0",
            u.jsx("b", { children: s._(/*BTDS*/ "All conversions") }),
          ),
        ],
      ),
      B = s._(
        /*BTDS*/ "Sequenced events are only available when your bid strategy is {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx("b", { children: s._(/*BTDS*/ "highest volume or value") }),
          ),
        ],
      ),
      W = s._(
        /*BTDS*/ "Sequenced events are only available when your bid strategy is {=m2}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx("b", { children: s._(/*BTDS*/ "highest volume") }),
          ),
        ],
      ),
      q = s._(
        /*BTDS*/ "A campaign bid strategy can't be changed if any ad sets were published using sequenced events.",
      );
    ((l.SINGLE_OR_SEQUENCED_CONVERSION_EVENT_SELECTOR_LABEL = c),
      (l.INPUT_GROUP_LABEL = d),
      (l.SINGLE_EVENT_OPTION_LABEL = m),
      (l.SINGLE_EVENT_OPTION_DESCRIPTION = p),
      (l.SEQUENCED_EVENT_OPTION_LABEL = _),
      (l.SEQUENCED_EVENT_OPTION_DESCRIPTION = f),
      (l.SEQUENCED_EVENT_SELECTOR_LABEL = g),
      (l.NO_SEQUENCED_EVENT_HEADER = h),
      (l.NO_SEQUENCED_EVENT_TEXT = y),
      (l.SEQUENCED_EVENT_SELECTOR_PLACEHOLDER_TEXT = C),
      (l.INITIAL_AND_FINAL_EVENT_SELECTOR_PLACEHOLDER = b),
      (l.SEQUENCED_EVENT_ATTRIBUTION_SETTINGS_LABEL = v),
      (l.SEQUENCED_EVENT_ATTRIBUTION_SETTINGS_TOOLTIP_TEXT = S),
      (l.SEQUENCED_EVENT_INITIAL_EVENT_ATTRIBUTION_SETTINGS_LABEL = R),
      (l.SEQUENCED_EVENT_INITIAL_EVENT_CLICK_THROUGH_TOOLTIP = L),
      (l.SEQUENCED_EVENT_FINAL_EVENT_ATTRIBUTION_SETTINGS_LABEL = E),
      (l.SEQUENCED_EVENT_FINAL_EVENT_DISABLED_TOOLTIP_TEXT = k),
      (l.NO_REUSE_DISABLED_EVENT_MESSAGE = I),
      (l.SEQUENCED_EVENT_DUPLICATE_WARNING_MESSAGE = T),
      (l.getClickThroughWindowPreviewText = D),
      (l.CONVERSION_EVENT_SEQUENCED_EVENT_SUBTITLE = x),
      (l.SEQUENCED_EVENT_ATTRIBUTION_MODEL_TEXT = $),
      (l.SEQUENCED_EVENT_ATTRIBUTION_MODEL_TOOLTIP_TEXT = P),
      (l.SEQUENCED_EVENT_OPTIMAL_QUALITY_MESSAGE = N),
      (l.YOUR_SEQUENCED_EVENTS_HEADER = M),
      (l.DISABLED_CUSTOM_CONVERSION_TOOLTIP = w),
      (l.DISABLED_INELIGIBLE_A1_EVENT_TOOLTIP = A),
      (l.REQUIRED_SEQUENCE_ERROR_MESSAGE = F),
      (l.DISABLED_MCO_CONVERSION_TOOLTIP = O),
      (l.DISABLED_SEQUENCED_EVENT_TOOLTIP_WITH_VO = B),
      (l.DISABLED_SEQUENCED_EVENT_TOOLTIP_WITH_NO_VO = W),
      (l.DISABLED_BID_STRATEGY_WHEN_LJO_L2_EXISTS_TOOLTIP = q));
  },
  226,
);
