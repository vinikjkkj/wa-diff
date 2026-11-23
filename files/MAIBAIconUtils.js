__d(
  "MAIBAIconUtils",
  [
    "GeoIcon.react",
    "MAIBAGKUtils",
    "MAIBASurfaceContext",
    "MetaIconsV2CalendarBadgePlusOutline24WGHT700LightIcon.react",
    "MetaIconsV2CalendarOutline24WGHT500LightIcon.react",
    "lazyLoadComponent",
    "meta-brand-agentic-outline-20",
    "meta-brand-arrow-left-horizontal-rectangle-filled-16",
    "meta-brand-arrow-left-horizontal-rectangle-filled-20",
    "meta-brand-arrow-left-horizontal-rectangle-outline-16",
    "meta-brand-arrow-left-horizontal-rectangle-outline-20",
    "meta-brand-checkmark-shield-filled-16",
    "meta-brand-checkmark-shield-outline-16",
    "meta-brand-gear-filled-16",
    "meta-brand-lines-rectangle-square-dashes-right-filled-16",
    "meta-brand-mountain-square-stacked-filled-16",
    "meta-brand-paperclip-filled-16",
    "meta-brand-pencil-square-filled-16",
    "meta-brand-pencil-square-filled-20",
    "meta-brand-pencil-square-outline-16",
    "meta-brand-pencil-square-outline-20",
    "meta-brand-plus-filled-16",
    "meta-brand-speech-bubble-stacked-filled-16",
    "meta-brand-speech-bubble-stacked-outline-16",
    "meta-brand-speech-bubble-stacked-outline-20",
    "meta-brand-thought-bubble-filled-16",
    "meta-brand-thought-bubble-outline-16",
    "meta-brand-three-dots-horizontal-filled-16",
    "meta-brand-three-dots-horizontal-filled-20",
    "meta-brand-three-horizontal-lines-filled-16",
    "meta-brand-three-horizontal-lines-filled-20",
    "meta-brand-x-filled-16",
    "meta-brand-x-filled-20",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusComposeOutline20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      c = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusPlusFilled20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      d = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusMinusFilled20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      m = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusMoreOutline20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      p = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusLeaveOutline20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      _ = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusNavCrossFilled20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      f = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusPaperClipOutline20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      g = r("lazyLoadComponent")(
        r("requireDeferred")(
          "FBNucleusPhotoSquareOutline20Icon.react",
        ).__setRef("MAIBAIconUtils"),
      ),
      h = r("lazyLoadComponent")(
        r("requireDeferred")(
          "FBNucleusThoughtBubbleOutline20Icon.react",
        ).__setRef("MAIBAIconUtils"),
      ),
      y = r("lazyLoadComponent")(
        r("requireDeferred")(
          "FBNucleusShieldCheckmarkOutline20Icon.react",
        ).__setRef("MAIBAIconUtils"),
      ),
      C = r("lazyLoadComponent")(
        r("requireDeferred")("FBNucleusSettingsOutline20Icon.react").__setRef(
          "MAIBAIconUtils",
        ),
      ),
      b = 20,
      v = [r("MetaIconsV2CalendarOutline24WGHT500LightIcon.react"), 16],
      S = [
        r("MetaIconsV2CalendarBadgePlusOutline24WGHT700LightIcon.react"),
        16,
      ];
    function R(e) {
      return (
        e === "MBS" || e === "Business Support" || e === "Business Help Center"
      );
    }
    function L(e, t) {
      var n = o("MAIBASurfaceContext").useMAIBASurfaceContext(),
        r = n.usesFacebookDesignSystem;
      return r ? e : t;
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return L(
        s.jsx(c, { height: b, width: b }),
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-plus-filled-16").metaBrandPlusPlusFilled16,
        }),
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return (
        e === void 0 && (e = !1),
        L(
          e
            ? s.jsx(f, { height: b, width: b })
            : s.jsx(g, { height: b, width: b }),
          e
            ? s.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-paperclip-filled-16")
                  .metaBrandPaperclipFilled16,
              })
            : s.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-mountain-square-stacked-filled-16")
                  .metaBrandMountainSquareStackedPhotoFilled16,
              }),
        )
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return L(
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-speech-bubble-stacked-outline-20")
            .metaBrandSpeechBubbleStackedOutline20,
        }),
        s.jsx(r("GeoIcon.react"), {
          color: "placeholder",
          icon: o("meta-brand-speech-bubble-stacked-filled-16")
            .metaBrandSpeechBubbleStackedMessagesReplyFilled16,
        }),
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s.jsx(r("GeoIcon.react"), {
        color: "placeholder",
        icon: o("meta-brand-speech-bubble-stacked-outline-16")
          .metaBrandSpeechBubbleStackedNucleusMessagesOutline16,
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return L(
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-agentic-outline-20").metaBrandAgenticOutline20,
        }),
        s.jsx(r("GeoIcon.react"), { color: "placeholder", icon: v }),
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = o("MAIBASurfaceContext").useMAIBASurfaceContext(),
        n = t.autoLoggingTool,
        a = !R(n) && o("MAIBAGKUtils").isMAIBADesignFixathonEnabled();
      return L(
        s.jsx(u, { height: b, width: b }),
        s.jsx(r("GeoIcon.react"), {
          color: "default",
          icon: a
            ? o("meta-brand-pencil-square-filled-16")
                .metaBrandPencilSquareFilled16
            : o("meta-brand-pencil-square-outline-16")
                .metaBrandPencilSquareOutline16,
          isDisabled: e,
        }),
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return L(
        s.jsx(h, { height: b, width: b }),
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-thought-bubble-outline-16")
            .metaBrandThoughtBubbleOutline16,
        }),
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return L(
        s.jsx(h, { height: b, width: b }),
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-thought-bubble-filled-16")
            .metaBrandThoughtBubbleFilled16,
        }),
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return L(
        s.jsx(y, { height: b, width: b }),
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-checkmark-shield-outline-16")
            .metaBrandCheckmarkShieldOutline16,
        }),
      );
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return L(
        s.jsx(y, { height: b, width: b }),
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-checkmark-shield-filled-16")
            .metaBrandCheckmarkShieldFilled16,
        }),
      );
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return L(
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-three-dots-horizontal-filled-20")
            .metaBrandThreeDotsHorizontalFilled20,
        }),
        s.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-three-dots-horizontal-filled-16")
            .metaBrandThreeDotsHorizontalFilled16,
        }),
      );
    }
    ((w.displayName = w.name + " [from " + i.id + "]"),
      (l.FBNucleusComposeOutline20Icon = u),
      (l.FBNucleusMinusFilled20Icon = d),
      (l.FBNucleusMoreOutline20Icon = m),
      (l.FBNucleusLeaveOutline20Icon = p),
      (l.FBNucleusNavCrossFilled20Icon = _),
      (l.FBNucleusSettingsOutline20Icon = C),
      (l.NUCLEUS_ICON_SIZE = b),
      (l.composeIconToken = o(
        "meta-brand-pencil-square-outline-16",
      ).metaBrandPencilSquareOutline16),
      (l.composeIconToken20 = o(
        "meta-brand-pencil-square-outline-20",
      ).metaBrandPencilSquareOutline20),
      (l.composeIconFilledToken = o(
        "meta-brand-pencil-square-filled-16",
      ).metaBrandPencilSquareFilled16),
      (l.composeIconFilledToken20 = o(
        "meta-brand-pencil-square-filled-20",
      ).metaBrandPencilSquareFilled20),
      (l.plusIconToken = o(
        "meta-brand-plus-filled-16",
      ).metaBrandPlusPlusFilled16),
      (l.sidebarExpandedIconToken = o(
        "meta-brand-arrow-left-horizontal-rectangle-outline-16",
      ).metaBrandArrowLeftHorizontalRectangleOutline16),
      (l.sidebarExpandedIconToken20 = o(
        "meta-brand-arrow-left-horizontal-rectangle-outline-20",
      ).metaBrandArrowLeftHorizontalRectangleOutline20),
      (l.sidebarExpandedFilledIconToken = o(
        "meta-brand-arrow-left-horizontal-rectangle-filled-16",
      ).metaBrandArrowLeftHorizontalRectangleFilled16),
      (l.sidebarExpandedFilledIconToken20 = o(
        "meta-brand-arrow-left-horizontal-rectangle-filled-20",
      ).metaBrandArrowLeftHorizontalRectangleFilled20),
      (l.sidebarCollapsedIconToken = o(
        "meta-brand-three-horizontal-lines-filled-16",
      ).metaBrandThreeHorizontalLinesMoreFilled16),
      (l.sidebarCollapsedIconToken20 = o(
        "meta-brand-three-horizontal-lines-filled-20",
      ).metaBrandThreeHorizontalLinesMoreFilled20),
      (l.closeIconToken = o("meta-brand-x-filled-16").metaBrandXCrossFilled16),
      (l.closeIconToken20 = o(
        "meta-brand-x-filled-20",
      ).metaBrandXCrossFilled20),
      (l.memoryIconToken = o(
        "meta-brand-thought-bubble-outline-16",
      ).metaBrandThoughtBubbleOutline16),
      (l.memoryIconActiveToken = o(
        "meta-brand-thought-bubble-filled-16",
      ).metaBrandThoughtBubbleFilled16),
      (l.termsAndPoliciesIconToken = o(
        "meta-brand-checkmark-shield-outline-16",
      ).metaBrandCheckmarkShieldOutline16),
      (l.termsAndPoliciesIconActiveToken = o(
        "meta-brand-checkmark-shield-filled-16",
      ).metaBrandCheckmarkShieldFilled16),
      (l.settingsIconToken = o(
        "meta-brand-gear-filled-16",
      ).metaBrandGearSettingsFilled16),
      (l.adAccountIconToken = o(
        "meta-brand-lines-rectangle-square-dashes-right-filled-16",
      ).metaBrandLinesRectangleSquareDashesRightFilled16),
      (l.asyncTaskIconToken = v),
      (l.taskSuggestionIconToken = S),
      (l.isMAIBAOutlineIconSurface = R),
      (l.usePlusIcon = E),
      (l.useMediaIcon = k),
      (l.useSuggestedPromptIcon = I),
      (l.usePillIcon = T),
      (l.useTaskPromptIcon = D),
      (l.useComposeButtonIcon = x),
      (l.useMemoryIcon = $),
      (l.useMemoryIconActive = P),
      (l.useTermsAndPoliciesIcon = N),
      (l.useTermsAndPoliciesIconActive = M),
      (l.useMoreOptionsIcon = w));
  },
  98,
);
