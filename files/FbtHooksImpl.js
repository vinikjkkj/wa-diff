__d(
  "FbtHooksImpl",
  [],
  function (t, n, r, o, a, i) {
    var e = {},
      l = {
        getErrorListener: function (n) {
          return e.errorListener == null ? void 0 : e.errorListener(n);
        },
        logImpression: function (n, r) {
          e.logImpression == null || e.logImpression(n, r);
        },
        onTranslationOverride: function (n) {
          e.onTranslationOverride == null || e.onTranslationOverride(n);
        },
        getFbsResult: function (n) {
          return e.getFbsResult(n);
        },
        getFbtResult: function (n) {
          return e.getFbtResult(n);
        },
        getTranslatedInput: function (n) {
          var t;
          return (t =
            e.getTranslatedInput == null ? void 0 : e.getTranslatedInput(n)) !=
            null
            ? t
            : n;
        },
        getViewerContext: function () {
          return e.getViewerContext();
        },
        register: function (n) {
          Object.assign(e, n);
        },
      };
    a.exports = l;
  },
  null,
);
