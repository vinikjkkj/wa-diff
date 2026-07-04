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
    "WAWebNewsletterToggleStarQuestionResponseAction",
    "WAWebQuestionsAdminGatingUtils",
    "WAWebReportNewsletterQuestionResponsePopupLoadable",
    "WDSIconIcBlock.react",
    "WDSIconIcGrade.react",
    "WDSIconIcThumbDown.react",
    "WDSIconWdsIcGradeSlash.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(44),
        a = e.chat,
        i = e.question,
        l = e.response,
        c;
      t[0] !== i || t[1] !== l
        ? ((c = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReportNewsletterQuestionResponsePopupLoadable")
                  .WAWebReportNewsletterQuestionResponsePopupLoadable,
                { response: l, question: i },
              ),
            );
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] !== i || t[4] !== l
        ? ((m = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBlockNewsletterQuestionResponsePopupLoadable")
                  .WAWebBlockNewsletterQuestionResponsePopupLoadable,
                { response: l, question: i },
              ),
            );
          }),
          (t[3] = i),
          (t[4] = l),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== i || t[7] !== l
        ? ((_ = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebDeleteNewsletterQuestionResponsePopupLoadable")
                  .WAWebDeleteNewsletterQuestionResponsePopupLoadable,
                { response: l, question: i },
              ),
            );
          }),
          (t[6] = i),
          (t[7] = l),
          (t[8] = _))
        : (_ = t[8]);
      var f = _,
        g;
      t[9] !== a || t[10] !== l
        ? ((g = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o(
                "WAWebNewsletterToggleStarQuestionResponseAction",
              ).toggleStarQuestionResponse(a, l);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[9] = a),
          (t[10] = l),
          (t[11] = g))
        : (g = t[11]);
      var h = g,
        y;
      if (
        t[12] !== a ||
        t[13] !== p ||
        t[14] !== f ||
        t[15] !== d ||
        t[16] !== h ||
        t[17] !== l
      ) {
        if (
          ((y = []),
          o(
            "WAWebQuestionsAdminGatingUtils",
          ).isQuestionsM2FeatureEnabledForAdmins(a))
        ) {
          var C;
          t[19] !== l.starred
            ? ((C = l.starred
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
              (t[19] = l.starred),
              (t[20] = C))
            : (C = t[20]);
          var b = C,
            v = b.cta,
            S = b.icon,
            R = b.testid,
            L;
          (t[21] !== v || t[22] !== h || t[23] !== S || t[24] !== R
            ? ((L = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { action: h, testid: R, icon: S, children: v },
                R,
              )),
              (t[21] = v),
              (t[22] = h),
              (t[23] = S),
              (t[24] = R),
              (t[25] = L))
            : (L = t[25]),
            y.push(L));
        }
        var E, k;
        t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = u.jsx(r("WDSIconIcThumbDown.react"), {})),
            (k = s._(/*BTDS*/ "Report")),
            (t[26] = E),
            (t[27] = k))
          : ((E = t[26]), (k = t[27]));
        var I;
        (t[28] !== d
          ? ((I = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: d,
                testid: "newsletter-question-response-report",
                icon: E,
                children: k,
              },
              "newsletter-question-response-report",
            )),
            (t[28] = d),
            (t[29] = I))
          : (I = t[29]),
          y.push(I));
        var T, D;
        t[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = u.jsx(r("WDSIconIcBlock.react"), {})),
            (D = s._(/*BTDS*/ "Block responses")),
            (t[30] = T),
            (t[31] = D))
          : ((T = t[30]), (D = t[31]));
        var x;
        (t[32] !== p
          ? ((x = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: p,
                testid: "newsletter-question-response-block",
                icon: T,
                children: D,
              },
              "newsletter-question-response-block",
            )),
            (t[32] = p),
            (t[33] = x))
          : (x = t[33]),
          y.push(x));
        var $, P;
        t[34] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = u.jsx(
              o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
              {},
            )),
            (P = s._(/*BTDS*/ "Delete")),
            (t[34] = $),
            (t[35] = P))
          : (($ = t[34]), (P = t[35]));
        var N;
        if (
          (t[36] !== f
            ? ((N = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: f,
                  testid: "newsletter-question-response-delete",
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  icon: $,
                  children: P,
                },
                "newsletter-question-response-delete",
              )),
              (t[36] = f),
              (t[37] = N))
            : (N = t[37]),
          y.push(N),
          o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled())
        ) {
          var M;
          (t[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              (t[38] = M))
            : (M = t[38]),
            y.push(M));
          var w;
          t[39] !== l.id
            ? ((w = function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(l.id.toString());
              }),
              (t[39] = l.id),
              (t[40] = w))
            : (w = t[40]);
          var A;
          t[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Copy Msg ID",
              })),
              (t[41] = A))
            : (A = t[41]);
          var F;
          (t[42] !== w
            ? ((F = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  addSpacing: !0,
                  testid: "mi-msg-copy-id",
                  action: w,
                  children: A,
                },
                "copy-id",
              )),
              (t[42] = w),
              (t[43] = F))
            : (F = t[43]),
            y.push(F));
        }
        ((t[12] = a),
          (t[13] = p),
          (t[14] = f),
          (t[15] = d),
          (t[16] = h),
          (t[17] = l),
          (t[18] = y));
      } else y = t[18];
      return y;
    }
    l.default = d;
  },
  226,
);
