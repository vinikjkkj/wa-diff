__d(
  "WAWebResponseContextMenu",
  [
    "fbt",
    "WAWebBlockNewsletterQuestionResponsePopupLoadable",
    "WAWebCopyToClipboard",
    "WAWebDebugGatingUtils",
    "WAWebDeleteNewsletterQuestionResponsePopupLoadable",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebReportNewsletterQuestionResponsePopupLoadable",
    "WDSIconIcBlock.react",
    "WDSIconIcGrade.react",
    "WDSIconIcThumbDown.react",
    "WDSIconWdsIcGradeSlash.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.chat,
        a = e.question,
        i = e.response,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReportNewsletterQuestionResponsePopupLoadable")
                  .WAWebReportNewsletterQuestionResponsePopupLoadable,
                { response: i, question: a },
              ),
            );
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      t[3] !== a || t[4] !== i
        ? ((d = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBlockNewsletterQuestionResponsePopupLoadable")
                  .WAWebBlockNewsletterQuestionResponsePopupLoadable,
                { response: i, question: a },
              ),
            );
          }),
          (t[3] = a),
          (t[4] = i),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      t[6] !== a || t[7] !== i
        ? ((p = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebDeleteNewsletterQuestionResponsePopupLoadable")
                  .WAWebDeleteNewsletterQuestionResponsePopupLoadable,
                { response: i, question: a },
              ),
            );
          }),
          (t[6] = a),
          (t[7] = i),
          (t[8] = p))
        : (p = t[8]);
      var _ = p,
        f;
      if (
        t[9] !== n ||
        t[10] !== m ||
        t[11] !== _ ||
        t[12] !== c ||
        t[13] !== i
      ) {
        if (
          ((f = []),
          o(
            "WAWebQuestionsAdminGatingUtils",
          ).isQuestionsM2FeatureEnabledForAdmins(n))
        ) {
          var g;
          t[15] !== i.starred
            ? ((g = i.starred
                ? {
                    icon: u.jsx(r("WDSIconWdsIcGradeSlash.react"), {}),
                    testid: "newsletter-question-response-unstar",
                    cta: s._(/*BTDS*/ "Unstar"),
                  }
                : {
                    icon: u.jsx(r("WDSIconIcGrade.react"), {}),
                    testid: "newsletter-question-response-star",
                    cta: s._(/*BTDS*/ "Star"),
                  }),
              (t[15] = i.starred),
              (t[16] = g))
            : (g = t[16]);
          var h = g,
            y = h.cta,
            C = h.icon,
            b = h.testid,
            v;
          (t[17] !== y || t[18] !== C || t[19] !== b
            ? ((v = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { action: r("WAWebNoop"), testid: b, icon: C, children: y },
                b,
              )),
              (t[17] = y),
              (t[18] = C),
              (t[19] = b),
              (t[20] = v))
            : (v = t[20]),
            f.push(v));
        }
        var S, R;
        t[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = u.jsx(r("WDSIconIcThumbDown.react"), {})),
            (R = s._(/*BTDS*/ "Report")),
            (t[21] = S),
            (t[22] = R))
          : ((S = t[21]), (R = t[22]));
        var L;
        (t[23] !== c
          ? ((L = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: c,
                testid: "newsletter-question-response-report",
                icon: S,
                children: R,
              },
              "newsletter-question-response-report",
            )),
            (t[23] = c),
            (t[24] = L))
          : (L = t[24]),
          f.push(L));
        var E, k;
        t[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = u.jsx(r("WDSIconIcBlock.react"), {})),
            (k = s._(/*BTDS*/ "Block responses")),
            (t[25] = E),
            (t[26] = k))
          : ((E = t[25]), (k = t[26]));
        var I;
        (t[27] !== m
          ? ((I = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: m,
                testid: "newsletter-question-response-block",
                icon: E,
                children: k,
              },
              "newsletter-question-response-block",
            )),
            (t[27] = m),
            (t[28] = I))
          : (I = t[28]),
          f.push(I));
        var T, D;
        t[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = u.jsx(
              o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
              {},
            )),
            (D = s._(/*BTDS*/ "Delete")),
            (t[29] = T),
            (t[30] = D))
          : ((T = t[29]), (D = t[30]));
        var x;
        if (
          (t[31] !== _
            ? ((x = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: _,
                  testid: "newsletter-question-response-delete",
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  icon: T,
                  children: D,
                },
                "newsletter-question-response-delete",
              )),
              (t[31] = _),
              (t[32] = x))
            : (x = t[32]),
          f.push(x),
          o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled())
        ) {
          var $;
          (t[33] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              (t[33] = $))
            : ($ = t[33]),
            f.push($));
          var P;
          t[34] !== i.id
            ? ((P = function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(i.id.toString());
              }),
              (t[34] = i.id),
              (t[35] = P))
            : (P = t[35]);
          var N;
          t[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Copy Msg ID",
              })),
              (t[36] = N))
            : (N = t[36]);
          var M;
          (t[37] !== P
            ? ((M = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  addSpacing: !0,
                  testid: "mi-msg-copy-id",
                  action: P,
                  children: N,
                },
                "copy-id",
              )),
              (t[37] = P),
              (t[38] = M))
            : (M = t[38]),
            f.push(M));
        }
        ((t[9] = n),
          (t[10] = m),
          (t[11] = _),
          (t[12] = c),
          (t[13] = i),
          (t[14] = f));
      } else f = t[14];
      return f;
    }
    l.default = d;
  },
  226,
);
