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
    "WAWebQuestionsAdminGatingUtils",
    "WAWebReportNewsletterQuestionResponsePopupLoadable",
    "WAWebResponseStarActionItem.react",
    "WDSIconIcBlock.react",
    "WDSIconIcThumbDown.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(36),
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
          (t[15] !== n || t[16] !== i
            ? ((g = u.jsx(
                r("WAWebResponseStarActionItem.react"),
                { chat: n, response: i },
                "newsletter-question-response-toggle",
              )),
              (t[15] = n),
              (t[16] = i),
              (t[17] = g))
            : (g = t[17]),
            f.push(g));
        }
        var h, y;
        t[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = u.jsx(r("WDSIconIcThumbDown.react"), {})),
            (y = s._(/*BTDS*/ "Report")),
            (t[18] = h),
            (t[19] = y))
          : ((h = t[18]), (y = t[19]));
        var C;
        (t[20] !== c
          ? ((C = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: c,
                testid: "newsletter-question-response-report",
                icon: h,
                children: y,
              },
              "newsletter-question-response-report",
            )),
            (t[20] = c),
            (t[21] = C))
          : (C = t[21]),
          f.push(C));
        var b, v;
        t[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = u.jsx(r("WDSIconIcBlock.react"), {})),
            (v = s._(/*BTDS*/ "Block responses")),
            (t[22] = b),
            (t[23] = v))
          : ((b = t[22]), (v = t[23]));
        var S;
        (t[24] !== m
          ? ((S = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: m,
                testid: "newsletter-question-response-block",
                icon: b,
                children: v,
              },
              "newsletter-question-response-block",
            )),
            (t[24] = m),
            (t[25] = S))
          : (S = t[25]),
          f.push(S));
        var R, L;
        t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = u.jsx(
              o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
              {},
            )),
            (L = s._(/*BTDS*/ "Delete")),
            (t[26] = R),
            (t[27] = L))
          : ((R = t[26]), (L = t[27]));
        var E;
        if (
          (t[28] !== _
            ? ((E = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: _,
                  testid: "newsletter-question-response-delete",
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  icon: R,
                  children: L,
                },
                "newsletter-question-response-delete",
              )),
              (t[28] = _),
              (t[29] = E))
            : (E = t[29]),
          f.push(E),
          o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled())
        ) {
          var k;
          (t[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              (t[30] = k))
            : (k = t[30]),
            f.push(k));
          var I;
          t[31] !== i.id
            ? ((I = function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(i.id.toString());
              }),
              (t[31] = i.id),
              (t[32] = I))
            : (I = t[32]);
          var T;
          t[33] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Copy Msg ID",
              })),
              (t[33] = T))
            : (T = t[33]);
          var D;
          (t[34] !== I
            ? ((D = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  addSpacing: !0,
                  testid: "mi-msg-copy-id",
                  action: I,
                  children: T,
                },
                "copy-id",
              )),
              (t[34] = I),
              (t[35] = D))
            : (D = t[35]),
            f.push(D));
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
