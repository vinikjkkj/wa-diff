__d(
  "AdsLeadGenFormEditorValidateConditionalLogicReducerPlugin",
  [
    "AdsLeadGenFormEditorConditionalLogicAPITransformer",
    "AdsLeadGenFormEditorConstants",
    "AdsLeadGenFormEditorEndPagesAPITransformer",
    "AdsLeadGenFormEditorQuestionAPITransformer",
    "AdsLeadGenFormEditorValidateConditionalLogicRequestCompleteAction",
    "AdsLeadGenFormEditorValidationProviderQuestionsUtils",
    "AdsLeadGenFormEditorValidationProviderThankYouPageUtils",
    "AdsWhatsAppUtils",
    "AsyncTypedRequest",
    "XAdsLeadGenCondtionalLogicValidationController",
    "isFalsey",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.clear(),
            a =
              r("isFalsey")(n.page) ||
              o("AdsWhatsAppUtils").hasWhatsAppNumberConnected(n.page),
            l =
              r("isFalsey")(n.page) ||
              o("AdsWhatsAppUtils").getIsPrimaryNumberBusinessNumber(n.page);
          if (
            ((e = o(
              "AdsLeadGenFormEditorValidationProviderThankYouPageUtils",
            ).validateEndPages(
              o(
                "AdsLeadGenFormEditorValidationProviderQuestionsUtils",
              ).validateQuestionsAndHeadline(e, n.form),
              n.form,
              a,
              l,
            )),
            e.get(
              o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS.QUESTIONS,
            ) == null &&
              e.get(
                o("AdsLeadGenFormEditorConstants").CONTENT_TAB.SECTIONS
                  .END_PAGES,
              ) == null)
          ) {
            var s = {
                questions: o(
                  "AdsLeadGenFormEditorQuestionAPITransformer",
                ).toAPI(n.form),
                end_pages: o(
                  "AdsLeadGenFormEditorEndPagesAPITransformer",
                ).toValidationAPI(n.form),
                conditional_logic: o(
                  "AdsLeadGenFormEditorConditionalLogicAPITransformer",
                ).toValidationAPI(n.form),
              },
              u = r("XAdsLeadGenCondtionalLogicValidationController")
                .getURIBuilder()
                .getURI();
            r("promiseDone")(
              new (r("AsyncTypedRequest"))(u)
                .setMethod("POST")
                .setData(s)
                .setReadOnly(!0)
                .promisePayload()
                .then(function (e) {
                  r(
                    "AdsLeadGenFormEditorValidateConditionalLogicRequestCompleteAction",
                  ).dispatch(
                    { response: e, formID: n.formID, form: n.form },
                    {
                      line: "83",
                      module:
                        "AdsLeadGenFormEditorValidateConditionalLogicReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                })
                .catch(function () {}),
            );
          }
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
