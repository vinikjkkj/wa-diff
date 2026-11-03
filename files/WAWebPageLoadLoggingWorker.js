__d(
  "WAWebPageLoadLoggingWorker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "0";
    function l(t) {
      return {
        PAGE_LOAD_ID: e,
        endPageLoadQpl: function (n, r, o) {
          return t.fireAndForget("mainthread_pageloadqpl", "endPageLoadQpl", {
            qrScreen: n,
            qrScreenExperience: r,
            locale: o,
          });
        },
        startPageLoadQplMeasure: function (n) {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "startPageLoadQplMeasure",
            { measure: n },
          );
        },
        endPageLoadQplMeasure: function (n) {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "endPageLoadQplMeasure",
            { measure: n },
          );
        },
        addPageLoadQplPoint: function (n) {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "addPageLoadQplPoint",
            { point: n },
          );
        },
        addPageLoadQplAnnotation: function (n) {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "addPageLoadQplAnnotation",
            { annotations: n },
          );
        },
        addPageLoadQplAnnotationNow: function (n) {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "addPageLoadQplAnnotationNow",
            { annotations: n },
          );
        },
        incrementPageLoadQplSocketError: function () {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "incrementPageLoadQplSocketError",
            void 0,
          );
        },
        addPageLoadValidationData: function (n, r) {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "addPageLoadValidationData",
            { point: n, data: r },
          );
        },
        setWamCompleteForValidation: function () {
          return t.fireAndForget(
            "mainthread_pageloadqpl",
            "setWamCompleteForValidation",
            void 0,
          );
        },
      };
    }
    i.createPageLoadLoggingWorker = l;
  },
  66,
);
