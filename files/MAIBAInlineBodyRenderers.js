__d(
  "MAIBAInlineBodyRenderers",
  [
    "MAIBAExternalUrlEntityRenderer.react",
    "MAIBAInlineEntityRenderer.react",
    "MAIBAMessageAdObjectRenderer.react",
    "MAIBAMessageClientValueRenderer.react",
    "MAIBAMessageHeatBarRenderer.react",
    "MAIBAMessageIconRenderer.react",
    "MAIBAMessageMathBodyRenderer.react",
    "MAIBAMessageTooltipRenderer.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      ExternalUrl: [
        o("MAIBAExternalUrlEntityRenderer.react")
          .MAIBAExternalUrlEntityRenderer,
      ],
      Inline: [r("MAIBAInlineEntityRenderer.react")],
      XFBAdObject: [r("MAIBAMessageAdObjectRenderer.react")],
      XFBHeatBarObject: [r("MAIBAMessageHeatBarRenderer.react")],
      XFBIconObject: [r("MAIBAMessageIconRenderer.react")],
      XFBMAIBAClientValue: [r("MAIBAMessageClientValueRenderer.react")],
      XFBMAIBATooltipObject: [r("MAIBAMessageTooltipRenderer.react")],
      XFBMathObject: [r("MAIBAMessageMathBodyRenderer.react")],
    };
    l.MAIBAInlineBodyRenderers = e;
  },
  98,
);
