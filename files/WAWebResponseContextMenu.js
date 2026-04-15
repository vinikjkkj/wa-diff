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
    "WAWebReportNewsletterQuestionResponsePopupLoadable",
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
      var t = o("react-compiler-runtime").c(32),
        n = e.question,
        a = e.response,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReportNewsletterQuestionResponsePopupLoadable")
                  .WAWebReportNewsletterQuestionResponsePopupLoadable,
                { response: a, question: n },
              ),
            );
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] !== n || t[4] !== a
        ? ((c = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBlockNewsletterQuestionResponsePopupLoadable")
                  .WAWebBlockNewsletterQuestionResponsePopupLoadable,
                { response: a, question: n },
              ),
            );
          }),
          (t[3] = n),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m;
      t[6] !== n || t[7] !== a
        ? ((m = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebDeleteNewsletterQuestionResponsePopupLoadable")
                  .WAWebDeleteNewsletterQuestionResponsePopupLoadable,
                { response: a, question: n },
              ),
            );
          }),
          (t[6] = n),
          (t[7] = a),
          (t[8] = m))
        : (m = t[8]);
      var p = m,
        _;
      if (t[9] !== d || t[10] !== p || t[11] !== l || t[12] !== a) {
        _ = [];
        var f, g;
        t[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsx(r("WDSIconIcThumbDown.react"), {})),
            (g = s._(/*BTDS*/ "Report")),
            (t[14] = f),
            (t[15] = g))
          : ((f = t[14]), (g = t[15]));
        var h;
        (t[16] !== l
          ? ((h = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { action: l, testid: void 0, icon: f, children: g },
              "newsletter-question-response-report",
            )),
            (t[16] = l),
            (t[17] = h))
          : (h = t[17]),
          _.push(h));
        var y, C;
        t[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = u.jsx(r("WDSIconIcBlock.react"), {})),
            (C = s._(/*BTDS*/ "Block responses")),
            (t[18] = y),
            (t[19] = C))
          : ((y = t[18]), (C = t[19]));
        var b;
        (t[20] !== d
          ? ((b = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { action: d, testid: void 0, icon: y, children: C },
              "newsletter-question-response-block",
            )),
            (t[20] = d),
            (t[21] = b))
          : (b = t[21]),
          _.push(b));
        var v, S;
        t[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = u.jsx(
              o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
              {},
            )),
            (S = s._(/*BTDS*/ "Delete")),
            (t[22] = v),
            (t[23] = S))
          : ((v = t[22]), (S = t[23]));
        var R;
        if (
          (t[24] !== p
            ? ((R = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: p,
                  testid: void 0,
                  theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                    .Negative,
                  icon: v,
                  children: S,
                },
                "newsletter-question-response-delete",
              )),
              (t[24] = p),
              (t[25] = R))
            : (R = t[25]),
          _.push(R),
          o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled())
        ) {
          var L;
          (t[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
              (t[26] = L))
            : (L = t[26]),
            _.push(L));
          var E;
          t[27] !== a.id
            ? ((E = function () {
                o("WAWebCopyToClipboard").copyTextToClipboard(a.id.toString());
              }),
              (t[27] = a.id),
              (t[28] = E))
            : (E = t[28]);
          var k;
          t[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Copy Msg ID",
              })),
              (t[29] = k))
            : (k = t[29]);
          var I;
          (t[30] !== E
            ? ((I = u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                { addSpacing: !0, testid: void 0, action: E, children: k },
                "copy-id",
              )),
              (t[30] = E),
              (t[31] = I))
            : (I = t[31]),
            _.push(I));
        }
        ((t[9] = d), (t[10] = p), (t[11] = l), (t[12] = a), (t[13] = _));
      } else _ = t[13];
      return _;
    }
    l.default = d;
  },
  226,
);
