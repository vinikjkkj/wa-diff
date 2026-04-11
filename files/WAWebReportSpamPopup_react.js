__d(
  "WAWebReportSpamPopup.react",
  [
    "fbt",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebReportGatingUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        section: {
          display: "x78zum5",
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          $$css: !0,
        },
        border: {
          paddingBottom: "x1ehvx8p",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        control: {
          display: "x1rg5ohu",
          flex: "x1okw0bk",
          verticalAlign: "x1uuroth",
          transitionProperty: "x19991ni",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
        mdMetaText: { paddingTop: "x1qbkcu5", $$css: !0 },
      },
      p = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
        testid: void 0,
        children: r("WAWebFbtCommon")("Learn more"),
      });
    function _(t) {
      var n = t.isCommunityAnnouncementGroup,
        a = n === void 0 ? !1 : n,
        i = t.onReport,
        l = t.showAdditionalActionCheckbox,
        u = l === void 0 ? !0 : l,
        _ = d(t.isMessage !== !0 && t.isCommunity !== !0),
        f = _[0],
        g = _[1],
        h = function () {
          g(!f);
        },
        y = function () {
          if (!u || !f) {
            i();
            return;
          }
          if (t.isMessage === !0) {
            t.onReportBlock();
            return;
          }
          t.isCommunity === !0 || t.isGroupChat === !0
            ? t.onReportExitClear()
            : t.onReportBlockClear();
        },
        C,
        b,
        v,
        S;
      t.isMessage === !0
        ? ((C = s._(/*BTDS*/ "Report {message-sender}?", [
            s._param("message-sender", t.sender),
          ])),
          (b = t.isBizBot3p
            ? s._(/*BTDS*/ "Block AI")
            : s._(/*BTDS*/ "Block contact")),
          o("WAWebReportGatingUtils").isUKOSAReportingEnabled()
            ? (v = t.isBizBot3p
                ? s._(
                    /*BTDS*/ "This message will be forwarded to WhatsApp. This AI will not be notified. {link to learn more}",
                    [s._param("link to learn more", p)],
                  )
                : s._(
                    /*BTDS*/ "This message will be forwarded to WhatsApp. This contact will not be notified. {link to learn more}",
                    [s._param("link to learn more", p)],
                  ))
            : (v = t.isBizBot3p
                ? s._(
                    /*BTDS*/ "This message will be forwarded to WhatsApp. This AI will not be notified.",
                  )
                : s._(
                    /*BTDS*/ "This message will be forwarded to WhatsApp. This contact will not be notified.",
                  )))
        : t.isCommunity
          ? ((C = s._(/*BTDS*/ "Report this community to WhatsApp?")),
            (b = r("WAWebFbtCommon")("Exit Community")),
            (v = s._(/*BTDS*/ "No one in this community will be notified.")))
          : t.isGroupChat === !0
            ? ((C = s._(/*BTDS*/ "Report this group to WhatsApp?")),
              (b = a
                ? r("WAWebFbtCommon")("Exit Community")
                : s._(/*BTDS*/ "Exit group and clear chat")),
              (S = s._(/*BTDS*/ "No one in this group will be notified.")),
              (v = s._(
                /*BTDS*/ "The last 5 messages in this group will be forwarded to WhatsApp.",
              )))
            : t.isBusiness === !0
              ? ((C = s._(/*BTDS*/ "Report this business to WhatsApp?")),
                (b = s._(/*BTDS*/ "Block business")),
                (S = s._(/*BTDS*/ "This business will not be notified.")),
                (v = s._(
                  /*BTDS*/ "The last 5 messages from this business will be forwarded to WhatsApp.",
                )))
              : t.isBizBot3p === !0
                ? ((C = s._(/*BTDS*/ "Report this AI to WhatsApp?")),
                  (b = s._(/*BTDS*/ "Block AI")),
                  (S = s._(/*BTDS*/ "This AI will not be notified.")),
                  (v = o("WAWebReportGatingUtils").isUKOSAReportingEnabled()
                    ? s._(
                        /*BTDS*/ "The last 5 messages from this AI will be forwarded to WhatsApp. {link to learn more}",
                        [s._param("link to learn more", p)],
                      )
                    : s._(
                        /*BTDS*/ "The last 5 messages from this AI will be forwarded to WhatsApp.",
                      )))
                : ((C = s._(/*BTDS*/ "Report this contact to WhatsApp?")),
                  (b = s._(/*BTDS*/ "Block contact")),
                  (S = s._(/*BTDS*/ "This contact will not be notified.")),
                  (v = s._(
                    /*BTDS*/ "The last 5 messages from this contact will be forwarded to WhatsApp.",
                  )));
      var R = c.jsx(
          "div",
          babelHelpers.extends(
            { "data-testid": void 0 },
            (e || (e = r("stylex"))).props(
              m.control,
              o("WAWebUISpacing").uiMargin.end10,
            ),
            {
              children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                onChange: h,
                checked: f,
                id: "menu-icon-report-spam",
              }),
            },
          ),
        ),
        L = c.jsx("label", {
          htmlFor: "menu-icon-report-spam",
          className: "x98rzlu x19991ni x1d8287x xwji4o3",
          children: b,
        }),
        E = u && b != null;
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "report-spam" },
        title: C,
        onOK: y,
        okText: s._(/*BTDS*/ "Report"),
        okButtonType: "solid-warning",
        onCancel: t.onCancel,
        children: [
          E &&
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  m.section,
                  o("WAWebUISpacing").uiMargin.top12,
                  o("WAWebUISpacing").uiMargin.end0,
                  m.border,
                ),
                { children: [R, L] },
              ),
            ),
          c.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: m.mdMetaText,
            children: v,
          }),
          c.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: m.mdMetaText,
            children: S,
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
