__d(
  "WAWebReportPopupBase.react",
  [
    "fbt",
    "WAWebBlocklistUtils",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return (
        e === void 0 && (e = !1),
        e
          ? s._(/*BTDS*/ "Block AI")
          : s._(/*BTDS*/ "Block {contact}", [s._param("contact", t)])
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.isBizBot3p,
        n = e.isBusiness,
        r = e.isCommunityAnnouncementGroup,
        a = e.isGroup;
      return t
        ? s._(/*BTDS*/ "This AI won't be able to message or call you.")
        : n
          ? s._(/*BTDS*/ "This business won't be able to message or call you.")
          : a && !r && o("WAWebBlocklistUtils").isRBIForGroupsEnabled()
            ? s._(
                /*BTDS*/ "This person won't be able to message or call you. You'll still see each other's messages in groups.",
              )
            : s._(/*BTDS*/ "This person won't be able to message or call you.");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.additionalActionLabelText,
        a = t.additionalActionSubText,
        i = t.hasAdditionalAction,
        l = t.onCancel,
        u = t.onSendReport,
        d = t.onSendReportAndAdditionalAction,
        m = t.reportSubText,
        p = t.type,
        _ = r("useWAWebToggle")(!1),
        f = _[0],
        g = _[1],
        h = function () {
          f ? d() : u();
        },
        y = s._(/*BTDS*/ "Report to WhatsApp");
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: h,
        okText: r("WAWebFbtCommon")("Report"),
        okButtonType: "solid-warning",
        onCancel:
          l != null
            ? l
            : function () {
                return o("WAWebModalManager").ModalManager.close();
              },
        title: y,
        tsNavigationData: { surface: "report", viewName: "report" },
        type: p,
        children: [
          c.jsx(o("WAWebText.react").WAWebTextMuted, { children: m }),
          i &&
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: o("WAWebUISpacing").uiMargin.top20,
              children: [
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.horiz6,
                    o("WAWebUISpacing").uiPadding.top2,
                  ],
                  children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                    onChange: g,
                    checked: f,
                    id: "additional-action-checkbox",
                    tabIndex: 0,
                  }),
                }),
                c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: o("WAWebUISpacing").uiMargin.start12,
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
                      htmlFor: "additional-action-checkbox",
                      weight: "medium",
                      testid: void 0,
                      children: n,
                    }),
                    c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      xstyle: o("WAWebUISpacing").uiMargin.top6,
                      testid: void 0,
                      children: a,
                    }),
                  ],
                }),
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiMargin.vert12,
                    ),
                  ),
                ),
              ],
            }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.getBlockLabelText = d),
      (l.getBlockSubText = m),
      (l.ReportPopupBase = p));
  },
  226,
);
