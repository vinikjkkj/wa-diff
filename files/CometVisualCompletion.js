__d(
  "CometVisualCompletion",
  ["performanceNow", "vc-tracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        addAnnotation: function (t, n) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && e.addAnnotation(t, n);
        },
        addAnnotationDouble: function (t, n) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && e.addAnnotationDouble(t, n);
        },
        addAnnotationInt: function (t, n) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && e.addAnnotationInt(t, n);
        },
        addFirstMarkerPoint: function (n, o, a) {
          (o === void 0 && (o = (e || (e = r("performanceNow")))()),
            a === void 0 && (a = {}));
          var t = r("vc-tracker").getCurrentNavigationVCTrace();
          t != null && o != null && o > 0 && t.addFirstMarkerPoint(n, o, a);
        },
        addMarkerPoint: function (n, o, a) {
          (o === void 0 && (o = (e || (e = r("performanceNow")))()),
            a === void 0 && (a = {}));
          var t = r("vc-tracker").getCurrentNavigationVCTrace();
          t != null && o != null && o > 0 && t.addMarkerPoint(n, o, a);
        },
        addTag: function (t, n) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && e.addTag(t, n);
        },
        addVisualElement: function (n, o, a) {
          a === void 0 && (a = (e || (e = r("performanceNow")))());
          var t = r("vc-tracker").getCurrentNavigationVCTrace();
          t != null &&
            n != null &&
            (t.mutationSeq++, t.addVisualElement(t.mutationSeq, n, o, a, a));
        },
        dumpLocks: function () {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          if (e != null) return e.dumpLocks();
        },
        excludeElement: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null &&
            r("vc-tracker").getLastNavigationVCReport() == null &&
            e.excludeElement(t);
        },
        getCurrentNavigationTrace: function () {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          return e;
        },
        getReport: function () {
          return r("vc-tracker").getLastNavigationVCReport();
        },
        holdTrigger: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          return e != null ? e.lock(t) : function () {};
        },
        resumeTrigger: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && e.unlock(t);
        },
        setInitialScrollY: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && e.setInitialScrollY(t);
        },
        setRoute: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          e != null && t != null && e.setTracePolicy(t);
        },
        setupNavigationMutationRoot: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          if (e != null) {
            var n = e;
            (n.observeMutation(t), n.registerNavigationMutationRoot(t));
          }
        },
        trackLoadingState: function (t) {
          var e = r("vc-tracker").getCurrentNavigationVCTrace();
          return e != null ? e.waitLoadingState(t) : function () {};
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
