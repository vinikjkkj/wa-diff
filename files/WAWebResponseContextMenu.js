__d(
  "WAWebResponseContextMenu",
  [
    "fbt",
    "WAWebBlockNewsletterQuestionResponsePopupLoadable",
    "WAWebCopyToClipboard",
    "WAWebDeleteNewsletterQuestionResponsePopupLoadable",
    "WAWebDevOnlyBadge.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebModalManager",
    "WAWebReportNewsletterQuestionResponsePopupLoadable",
    "WDSIconIcBlock.react",
    "WDSIconIcDelete.react",
    "WDSIconIcThumbDown.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t,
        n = e.question,
        a = e.response,
        i = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReportNewsletterQuestionResponsePopupLoadable")
                  .WAWebReportNewsletterQuestionResponsePopupLoadable,
                { response: a, question: n },
              ),
            );
          },
          [a, n],
        ),
        l = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBlockNewsletterQuestionResponsePopupLoadable")
                  .WAWebBlockNewsletterQuestionResponsePopupLoadable,
                { response: a, question: n },
              ),
            );
          },
          [a, n],
        ),
        d = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebDeleteNewsletterQuestionResponsePopupLoadable")
                  .WAWebDeleteNewsletterQuestionResponsePopupLoadable,
                { response: a, question: n },
              ),
            );
          },
          [a, n],
        ),
        m = [];
      return (
        m.push(
          u.jsx(
            (t = o("WAWebDropdownItem.react")).DropdownItem,
            {
              action: i,
              testid: "newsletter-question-response-report",
              icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
              children: s._(/*BTDS*/ ""),
            },
            "newsletter-question-response-report",
          ),
        ),
        m.push(
          u.jsx(
            t.DropdownItem,
            {
              action: l,
              testid: "newsletter-question-response-block",
              icon: u.jsx(r("WDSIconIcBlock.react"), {}),
              children: s._(/*BTDS*/ ""),
            },
            "newsletter-question-response-block",
          ),
        ),
        m.push(
          u.jsx(
            t.DropdownItem,
            {
              action: d,
              testid: "newsletter-question-response-delete",
              theme: t.DropdownItemThemeType.Negative,
              icon: u.jsx(r("WDSIconIcDelete.react"), {}),
              children: s._(/*BTDS*/ ""),
            },
            "newsletter-question-response-delete",
          ),
        ),
        r("gkx")("16539") &&
          (m.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
          m.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                addSpacing: !0,
                testid: "mi-msg-copy-id",
                action: function () {
                  o("WAWebCopyToClipboard").copyTextToClipboard(
                    a.id.toString(),
                  );
                },
                children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                  label: "Copy Msg ID",
                }),
              },
              "copy-id",
            ),
          )),
        m
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
