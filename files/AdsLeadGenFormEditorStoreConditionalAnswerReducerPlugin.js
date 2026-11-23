__d(
  "AdsLeadGenFormEditorStoreConditionalAnswerReducerPlugin",
  [
    "AdsLeadGenFormEditorConditionalInteractionRequestCompleteAction",
    "AsyncTypedRequest",
    "XAdsLeadGenFormCondtionalPreviewController",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t,
            o = e.get(n.formID);
          if (o != null) {
            var a = o.displayPrimitives,
              l = o.serverCookie,
              s = o.targetCode,
              u = 0,
              c = new Map();
            n.form.questions.forEach(function (e, t) {
              e.questionTypeKey !== "prefill" && c.set(t, "customized_" + u++);
            });
            var d = c.get(n.questionID),
              m = o.questionAnswers;
            if (
              (m != null
                ? (m = m.set(d || "", n.value))
                : (m = r("immutable").Map([[d || "", n.value]])),
              s != null)
            ) {
              var p = { target_code: s, server_cookie: l, inputs: m.toJS() },
                _ = r("XAdsLeadGenFormCondtionalPreviewController")
                  .getURIBuilder()
                  .getURI();
              r("promiseDone")(
                new (r("AsyncTypedRequest"))(_)
                  .setMethod("POST")
                  .setData(p)
                  .setReadOnly(!0)
                  .promisePayload()
                  .then(function (e) {
                    r(
                      "AdsLeadGenFormEditorConditionalInteractionRequestCompleteAction",
                    ).dispatch(
                      { formID: n.formID, response: e },
                      {
                        line: "69",
                        module:
                          "AdsLeadGenFormEditorStoreConditionalAnswerReducerPlugin.js",
                        moduleID: i.id,
                      },
                    );
                  })
                  .catch(function () {}),
              );
            }
            e = e.set(n.formID, {
              targetCode: s,
              questionAnswers: m,
              serverCookie: l,
              displayPrimitives: a,
            });
          }
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
