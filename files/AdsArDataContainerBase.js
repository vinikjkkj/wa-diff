__d(
  "AdsArDataContainerBase",
  ["immutable"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("immutable").List,
      l = n("immutable").Record({
        cameraFacing: null,
        cameraMode: 0,
        ctaType: "NO_BUTTON",
        dynamicEffect: null,
        effectAttachments: e.of(),
        feedUnitOverlayTextType: 1,
        isPublished: !1,
      }),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(l),
      u = s;
    i.default = u;
  },
  66,
);
