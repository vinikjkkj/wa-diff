__d(
  "AdsNUXTourStepConfig",
  ["AdsNUXTourStepConfigBase", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = function (t) {},
      c = function (t) {
        return !0;
      },
      d = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.$AdsNUXTourStepConfig$p_1 = null),
            (t.$AdsNUXTourStepConfig$p_2 = null),
            (t.$AdsNUXTourStepConfig$p_3 = null),
            (t.$AdsNUXTourStepConfig$p_5 = {}),
            (t.$AdsNUXTourStepConfig$p_6 = 0),
            (t.$AdsNUXTourStepConfig$p_7 = 0),
            (t.$AdsNUXTourStepConfig$p_8 = !1),
            (t.$AdsNUXTourStepConfig$p_9 = !1),
            (t.$AdsNUXTourStepConfig$p_10 = null),
            (t.$AdsNUXTourStepConfig$p_11 = !1),
            (t.$AdsNUXTourStepConfig$p_12 = null),
            (t.$AdsNUXTourStepConfig$p_13 = null),
            (t.$AdsNUXTourStepConfig$p_14 = !1),
            (t.$AdsNUXTourStepConfig$p_15 = null),
            (t.$AdsNUXTourStepConfig$p_16 = {}),
            (t.$AdsNUXTourStepConfig$p_17 = null),
            (t.$AdsNUXTourStepConfig$p_18 = !1),
            (t.__verifyUIState = c),
            (t.__setupAction = u),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.setContent = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_2 = t), this);
          }),
          (n.getContent = function () {
            return this.$AdsNUXTourStepConfig$p_2;
          }),
          (n.setHeading = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_10 = t), this);
          }),
          (n.getHeading = function () {
            return this.$AdsNUXTourStepConfig$p_10;
          }),
          (n.setClassName = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_4 = t), this);
          }),
          (n.getClassName = function () {
            return this.$AdsNUXTourStepConfig$p_4;
          }),
          (n.setContextSelector = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_3 = t), this);
          }),
          (n.getContextSelector = function () {
            return this.$AdsNUXTourStepConfig$p_3;
          }),
          (n.setCustomLayerBehaviors = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_5 = t), this);
          }),
          (n.getCustomLayerBehaviors = function () {
            return this.$AdsNUXTourStepConfig$p_5;
          }),
          (n.setDialogOffsetX = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_6 = t), this);
          }),
          (n.getDialogOffsetX = function () {
            return this.$AdsNUXTourStepConfig$p_6;
          }),
          (n.setDialogOffsetY = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_7 = t), this);
          }),
          (n.getDialogOffsetY = function () {
            return this.$AdsNUXTourStepConfig$p_7;
          }),
          (n.setAlignment = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_1 = t), this);
          }),
          (n.getAlignment = function () {
            return this.$AdsNUXTourStepConfig$p_1;
          }),
          (n.setHasBackwardButton = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_8 = t), this);
          }),
          (n.hasBackwardButton = function () {
            return this.$AdsNUXTourStepConfig$p_8;
          }),
          (n.setHasNextButton = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_9 = t), this);
          }),
          (n.hasNextButton = function () {
            return this.$AdsNUXTourStepConfig$p_9;
          }),
          (n.setIsModal = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_14 = t), this);
          }),
          (n.isModal = function () {
            return this.$AdsNUXTourStepConfig$p_14;
          }),
          (n.setInsertParent = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_12 = t), this);
          }),
          (n.getInsertParent = function () {
            return this.$AdsNUXTourStepConfig$p_12;
          }),
          (n.setIsCaretAligned = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_13 = t), this);
          }),
          (n.getIsCaretAligned = function () {
            return this.$AdsNUXTourStepConfig$p_13;
          }),
          (n.setBlindPadding = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_16 = t), this);
          }),
          (n.getBlindPadding = function () {
            return this.$AdsNUXTourStepConfig$p_16;
          }),
          (n.setPosition = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_17 = t), this);
          }),
          (n.getPosition = function () {
            return this.$AdsNUXTourStepConfig$p_17;
          }),
          (n.setCompleteAction = function (t) {
            return (this.__setCompleteAction(t), this);
          }),
          (n.setShouldHighlightContext = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_18 = t), this);
          }),
          (n.shouldHighlightContext = function () {
            return this.$AdsNUXTourStepConfig$p_18;
          }),
          (n.setOnViewCallback = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_15 = t), this);
          }),
          (n.getOnViewCallback = function () {
            return this.$AdsNUXTourStepConfig$p_15;
          }),
          (n.setIsCounted = function (t) {
            return (this.__setIsCounted(t), this);
          }),
          (n.setSetupAction = function (t) {
            return (this.__setSetupAction(t), this);
          }),
          (n.setVerifyUIState = function (t) {
            return (this.__setVerifyUIState(t), this);
          }),
          (n.setHideOnBlur = function (t) {
            return ((this.$AdsNUXTourStepConfig$p_11 = t), this);
          }),
          (n.isHideOnBlur = function () {
            return this.$AdsNUXTourStepConfig$p_11;
          }),
          t
        );
      })(r("AdsNUXTourStepConfigBase"));
    l.default = d;
  },
  98,
);
