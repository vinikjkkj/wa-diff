__d(
  "AdsLeadGenFormEditorConditionalLogicAddThankYouPageReducerPlugin",
  [
    "AdsLeadGenFormConditionalLogicEndPages",
    "AdsLeadGenFormEditorProviderUtils",
    "AdsLeadGenFormThankYouPage",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return o("AdsLeadGenFormEditorProviderUtils").updateForm(
            t,
            n.formID,
            function (e) {
              var t,
                a,
                i,
                l,
                s = e,
                u =
                  (t = e.get("end_pages")) != null
                    ? t
                    : new (r("AdsLeadGenFormConditionalLogicEndPages"))(),
                c =
                  (a = u.get("thankYouPages")) != null
                    ? a
                    : r("immutable").OrderedMap(),
                d =
                  (i =
                    (l = c.first()) == null
                      ? void 0
                      : l.should_link_to_catalog) != null
                    ? i
                    : !1,
                m = o(
                  "AdsLeadGenFormEditorProviderUtils",
                ).generateConditionalLogicThankYouPageID(),
                p = c.set(
                  m,
                  new (r("AdsLeadGenFormThankYouPage"))({
                    name: n.pageName || "",
                    button_type: "VIEW_WEBSITE",
                    should_link_to_catalog: d,
                  }),
                ),
                _ = u.set("thankYouPages", p);
              if (
                ((s = s.set("end_pages", _)),
                n.answerIndex != null && n.previousQuestionLink != null)
              ) {
                var f = o(
                  "AdsLeadGenFormEditorProviderUtils",
                ).linkQuestionToDestination(
                  s,
                  n.answerIndex,
                  m,
                  "THANK_YOU_PAGE",
                  n.previousQuestionLink,
                );
                s = s
                  .set("conditional_logic", f)
                  .set("is_conditional_question_preview_ready", !1);
              }
              return s;
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
