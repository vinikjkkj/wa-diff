__d(
  "AdsDraftFragmentValidateDataManager",
  [
    "AdsAbstractDataManager",
    "AdsDraftDraftFragmentValidateErrorDataAction",
    "AdsDraftDraftFragmentValidatedDataAction",
    "AdsGraphAPI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.forceValidationFor = function (t) {
            var e = this;
            return o("AdsGraphAPI")
              .get(i.id)
              .object("addraft_fragment", t.id)
              .edge("validate")
              .batched()
              .post()
              .then(
                function (n) {
                  e.__handleSuccess(
                    ["update"],
                    t.id,
                    null,
                    babelHelpers.extends({}, t, n),
                  );
                },
                function (n) {
                  e.__handleError(
                    ["update"],
                    t.id,
                    null,
                    babelHelpers.extends({}, t, {
                      validation_request_error: n,
                    }),
                  );
                },
              );
          }),
          (n.__onBatchUpdated = function (t) {
            r("AdsDraftDraftFragmentValidatedDataAction").dispatch(
              { fragments: t },
              {
                line: "45",
                module: "AdsDraftFragmentValidateDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (n.__onBatchUpdateError = function (t) {
            r("AdsDraftDraftFragmentValidateErrorDataAction").dispatch(
              { fragments: t },
              {
                line: "52",
                module: "AdsDraftFragmentValidateDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          t
        );
      })(r("AdsAbstractDataManager")),
      s = new e();
    l.default = s;
  },
  98,
);
