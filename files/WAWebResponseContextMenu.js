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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.question,
        n = e.response,
        a = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReportNewsletterQuestionResponsePopupLoadable")
                  .WAWebReportNewsletterQuestionResponsePopupLoadable,
                { response: n, question: t },
              ),
            );
          },
          [n, t],
        ),
        i = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebBlockNewsletterQuestionResponsePopupLoadable")
                  .WAWebBlockNewsletterQuestionResponsePopupLoadable,
                { response: n, question: t },
              ),
            );
          },
          [n, t],
        ),
        l = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebDeleteNewsletterQuestionResponsePopupLoadable")
                  .WAWebDeleteNewsletterQuestionResponsePopupLoadable,
                { response: n, question: t },
              ),
            );
          },
          [n, t],
        ),
        d = [];
      return (
        d.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              action: a,
              testid: void 0,
              icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
              children: s._(/*BTDS*/ "Report"),
            },
            "newsletter-question-response-report",
          ),
        ),
        d.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              action: i,
              testid: void 0,
              icon: u.jsx(r("WDSIconIcBlock.react"), {}),
              children: s._(/*BTDS*/ "Block responses"),
            },
            "newsletter-question-response-block",
          ),
        ),
        d.push(
          u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              action: l,
              testid: void 0,
              theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                .Negative,
              icon: u.jsx(
                o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                {},
              ),
              children: s._(/*BTDS*/ "Delete"),
            },
            "newsletter-question-response-delete",
          ),
        ),
        o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() &&
          (d.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
          d.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                addSpacing: !0,
                testid: void 0,
                action: function () {
                  o("WAWebCopyToClipboard").copyTextToClipboard(
                    n.id.toString(),
                  );
                },
                children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                  label: "Copy Msg ID",
                }),
              },
              "copy-id",
            ),
          )),
        d
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
