__d(
  "WAWebGroupSuspensionAppealModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebGroupSuspensionAppealMutation",
    "WAWebLoggerDebugInfo",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSBaseRadio.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = { radioLabel: { paddingInlineStart: "x1g0dm76", $$css: !0 } },
      f = new Map([
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
    function g(t) {
      var a = t.groupJid,
        i = p(""),
        l = i[0],
        u = i[1],
        d = p(!1),
        g = d[0],
        h = d[1],
        y = m(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            h(!0);
            var t;
            try {
              t = yield o(
                "WAWebGroupSuspensionAppealMutation",
              ).submitGroupSuspensionAppeal(
                a,
                l === "FLAGGED_BY_MISTAKE"
                  ? "FLAGGED_BY_MISTAKE"
                  : l === "OTHER_MEMBERS_CAUSED"
                    ? "OTHER_MEMBERS_CAUSED"
                    : l === "ACCIDENTAL_VIOLATION"
                      ? "ACCIDENTAL_VIOLATION"
                      : l === "OTHER"
                        ? "OTHER"
                        : null,
                JSON.stringify(
                  yield o("WAWebLoggerDebugInfo").getDebugInfo({
                    supportTag: "group-suspend-appeal",
                    convertFields: !0,
                    addUserAgentDetails: !0,
                    entityId: a,
                  }),
                ),
              );
            } catch (n) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[GROUP_SUSPEND] Failed to submit group suspension appeal",
                    ])),
                )
                .catching(n instanceof Error ? n : r("err")(String(n)))
                .tags("GROUP_SUSPEND")
                .sendLogs("group-suspend-appeal-error"),
                (t = {
                  success: !1,
                  appealCreationTime: null,
                  errorMessage: String(n),
                }));
            }
            t.success
              ? o("WAWebModalManager").closeModalManager()
              : (h(!1),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Something went wrong. Please try again later.",
                    ),
                  }),
                ));
          }),
          [a, l],
        );
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Small,
        onOK: y,
        okSpinner: g,
        okDisabled: g,
        okText: s._(/*BTDS*/ "Submit"),
        onCancel: o("WAWebModalManager").closeModalManager,
        cancelText: s._(/*BTDS*/ "Cancel"),
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            c.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Add a review reason (optional)"),
            }),
            c.jsx("div", {
              className: "x1y1aw1k x1l90r2v",
              children: c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "You'll be notified of results typically within 24 hours.",
                ),
              }),
            }),
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              children: Array.from(f.entries()).map(function (e) {
                var t = e[0],
                  n = e[1];
                return c.jsxs(
                  "label",
                  {
                    htmlFor: "appeal-reason-" + t,
                    className:
                      "x6s0dn4 x1ypdohk x78zum5 x1y1aw1k xwib8y2 xh8yej3",
                    children: [
                      c.jsx(r("WDSBaseRadio.react"), {
                        id: "appeal-reason-" + t,
                        checked: l === t,
                        name: "appeal-reason",
                        onChange: u,
                        value: t,
                        testid: void 0,
                      }),
                      c.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        xstyle: _.radioLabel,
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
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
