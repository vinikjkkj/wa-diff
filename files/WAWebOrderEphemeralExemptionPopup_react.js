__d(
  "WAWebOrderEphemeralExemptionPopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(t) {
      var n = t.chat,
        a = t.onSubmit,
        i = o("WAWebFrontendContactGetters").getFormattedUser(n.contact),
        l = d(!1),
        u = l[0],
        m = l[1],
        p = function () {
          m(!u);
        },
        _ = function () {
          (u &&
            r("WAWebUserPrefsStore").set(
              o("WAWebUserPrefsKeys").KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED,
              !0,
            ),
            o("WAWebModalManager").ModalManager.close(),
            a());
        };
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-ephemeral-exemption",
        },
        testid: void 0,
        title: s._(/*BTDS*/ "Disappearing messages are turned on"),
        onOK: _,
        onCancel: o("WAWebModalManager").closeModalManager,
        children: [
          c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
            children: o(
              "WAWebBizGatingUtils",
            ).isOrderContentOptimizationEnabled()
              ? s._(
                  /*BTDS*/ "Disappearing messages are turned on in your chat with {contact-name}, but this charge will not disappear.",
                  [s._param("contact-name", i)],
                )
              : s._(
                  /*BTDS*/ "Disappearing messages are turned on in your chat with {contact-name}, but this order will not disappear.",
                  [s._param("contact-name", i)],
                ),
          }),
          c.jsx("div", {
            children: c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.vert6,
                ),
                {
                  children: [
                    c.jsx(o("WAWebCheckBox.react").CheckBox, {
                      testid: void 0,
                      id: "order-ephemeral-exemption-popup-skip-checkbox-id",
                      checked: u,
                      onChange: p,
                    }),
                    c.jsx(
                      "label",
                      babelHelpers.extends(
                        {
                          htmlFor:
                            "order-ephemeral-exemption-popup-skip-checkbox-id",
                        },
                        e.props(o("WAWebUISpacing").uiMargin.start8),
                        { children: s._(/*BTDS*/ "Don't show me this again") },
                      ),
                    ),
                  ],
                },
              ),
            ),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
