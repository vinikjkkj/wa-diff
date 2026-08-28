__d(
  "AdsICMessage",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        id: "",
        visiblePlacements: r("immutable").Set(),
        isMounted: !1,
        isLoaded: !1,
        isClosed: !1,
        passValidateCondition: !0,
        isMatchingContext: !0,
        adObjectID: null,
        format: null,
        componentName: "",
        messageGroup: void 0,
        messageType: null,
        messageTypeID: null,
        aymtData: null,
        mustShow: !1,
        fbJoinerKey: null,
        score: 1,
        experiments: {},
        qeState: !1,
        opResult: null,
        isInjected: void 0,
        bpID: void 0,
        messageContentCategory: void 0,
      },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getID = function () {
            return this.get("id");
          }),
          (n.getVisiblePlacements = function () {
            return this.get("visiblePlacements");
          }),
          (n.getIsVisibleForPlacement = function (t) {
            return this.getVisiblePlacements().has(t);
          }),
          (n.getIsMounted = function () {
            return this.get("isMounted");
          }),
          (n.getIsLoaded = function () {
            return this.get("isLoaded");
          }),
          (n.getIsClosed = function () {
            return this.get("isClosed");
          }),
          (n.getPassValidateCondition = function () {
            return this.get("passValidateCondition");
          }),
          (n.getIsMatchingContext = function () {
            return this.get("isMatchingContext");
          }),
          (n.getAdObjectID = function () {
            return this.get("adObjectID");
          }),
          (n.getFormat = function () {
            return this.get("format");
          }),
          (n.getComponentName = function () {
            return this.get("componentName");
          }),
          (n.getMessageGroup = function () {
            return this.get("messageGroup");
          }),
          (n.getMessageType = function () {
            return this.get("messageType");
          }),
          (n.getMessageTypeID = function () {
            return this.get("messageTypeID");
          }),
          (n.getAYMTData = function () {
            return this.get("aymtData");
          }),
          (n.getMustShow = function () {
            return this.get("mustShow");
          }),
          (n.getFBJoinerKey = function () {
            return this.get("fbJoinerKey");
          }),
          (n.getScore = function () {
            return this.get("score");
          }),
          (n.getExperiments = function () {
            return this.get("experiments");
          }),
          (n.getQEState = function () {
            return this.get("qeState");
          }),
          (n.getOPResult = function () {
            return this.get("opResult");
          }),
          (n.getIsInjected = function () {
            return this.get("isInjected");
          }),
          (n.getBPID = function () {
            return this.get("bpID");
          }),
          (n.getMessageContentCategory = function () {
            return this.get("messageContentCategory");
          }),
          (n.addVisiblePlacement = function (t) {
            return this.setVisiblePlacements(
              this.getVisiblePlacements().add(t),
            );
          }),
          (n.setVisiblePlacements = function (t) {
            return this.set("visiblePlacements", t);
          }),
          (n.setIsMounted = function (t) {
            return this.set("isMounted", t);
          }),
          (n.setIsLoaded = function (t) {
            return this.set("isLoaded", t);
          }),
          (n.setIsClosed = function (t) {
            return this.set("isClosed", t);
          }),
          (n.setPassValidateCondition = function (t) {
            return this.set("passValidateCondition", t);
          }),
          (n.setIsMatchingContext = function (t) {
            return this.set("isMatchingContext", t);
          }),
          (n.setMessageContentCategory = function (t) {
            return this.set("messageContentCategory", t);
          }),
          t
        );
      })(r("immutable").Record(e));
    l.default = s;
  },
  98,
);
