__d(
  "WAWebGroupSuspensionAppealModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSuspendedGroupUtils",
    "WDSBaseRadio.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = { radioLabel: { paddingInlineStart: "x1g0dm76", $$css: !0 } },
      _ = new Map([
        [
          "FLAGGED_BY_MISTAKE",
          s._(/*BTDS*/ "This group was flagged by mistake."),
        ],
        [
          "OTHER_MEMBERS_CAUSED",
          s._(/*BTDS*/ "Other group admins or members did something wrong."),
        ],
        [
          "ACCIDENTAL_VIOLATION",
          s._(
            /*BTDS*/ "I broke the rules by accident and have reviewed the Terms of Service.",
          ),
        ],
        ["OTHER", s._(/*BTDS*/ "Something else")],
      ]);
    function f(e) {
      var t = e.chatId,
        a = m(""),
        i = a[0],
        l = a[1],
        c = m(!1),
        f = c[0],
        g = c[1],
        h = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            g(!0);
            var e = yield o("WAWebSuspendedGroupUtils").submitGroupAppeal(t);
            e.success ? o("WAWebModalManager").closeModalManager() : g(!1);
          }),
          [t],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Small,
        onOK: h,
        okSpinner: f,
        okDisabled: f,
        okText: s._(/*BTDS*/ "Submit"),
        onCancel: o("WAWebModalManager").closeModalManager,
        cancelText: s._(/*BTDS*/ "Cancel"),
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Add a review reason (optional)"),
            }),
            u.jsx("div", {
              className: "x1y1aw1k x1l90r2v",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "You'll be notified of results typically within 24 hours.",
                ),
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              children: Array.from(_.entries()).map(function (e) {
                var t = e[0],
                  n = e[1];
                return u.jsxs(
                  "label",
                  {
                    htmlFor: "appeal-reason-" + t,
                    className:
                      "x6s0dn4 x1ypdohk x78zum5 x1y1aw1k xwib8y2 xh8yej3",
                    children: [
                      u.jsx(r("WDSBaseRadio.react"), {
                        id: "appeal-reason-" + t,
                        checked: i === t,
                        name: "appeal-reason",
                        onChange: l,
                        value: t,
                        testid: void 0,
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        xstyle: p.radioLabel,
                        children: n,
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
