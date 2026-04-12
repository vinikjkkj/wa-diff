__d(
  "WAWebReportToAdminNewReportBanner.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardTabUtils",
    "WAWebMessageReportRefreshedIcon.react",
    "WAWebRevokeMsgConstants",
    "WAWebSendForAdminReviewUtils",
    "WAWebSentForAdminReviewFlow.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "react",
    "useWAWebModelValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        banner: { backgroundColor: "x1280gxy", $$css: !0 },
        iconRefreshed: { color: "xhslqc4", $$css: !0 },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.onClose,
        u = r("useWAWebUIM")(),
        m = function () {
          (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            c.jsx(
              r("WAWebSentForAdminReviewFlow.react"),
              {
                chat: o("WAWebStateUtils").unproxy(i),
                ref: n,
                onClose: o("WAWebDrawerManager").closeDrawerRight,
              },
              "rta-" + i.id.toString(),
            ),
            {
              transition: "slide-left",
              uim: u,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          ),
            l());
        };
      return c.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "ReportToAdminNewReportBanner",
        escapable: !0,
        children: c.jsx(r("WAWebConversationBanner.react"), {
          ref: n,
          xstyle: d.banner,
          onClick: m,
          onClose: l,
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.top6,
            align: "center",
            children: [
              c.jsx(r("WAWebFlexItem.react"), {
                xstyle: o("WAWebUISpacing").uiPadding.end20,
                children: c.jsx(
                  o("WAWebMessageReportRefreshedIcon.react")
                    .MessageReportRefreshedIcon,
                  { iconXstyle: d.iconRefreshed },
                ),
              }),
              c.jsx(r("WAWebFlexItem.react"), {
                xstyle: o("WAWebUISpacing").uiMargin.bottom6,
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children: s._(/*BTDS*/ "{=m0} sent for admin review", [
                    s._implicitParam(
                      "=m0",
                      c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "accent",
                        weight: "semibold",
                        children: s._(/*BTDS*/ "New Messages"),
                      }),
                    ),
                  ]),
                }),
              }),
            ],
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("useWAWebModelValues").useModelValues(e, ["groupMetadata"]),
        n = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, [
          "lastReportToAdminTimestamp",
        ]),
        r = n == null ? void 0 : n.lastReportToAdminTimestamp;
      if (r == null) return !1;
      var a =
          o("WAWebRevokeMsgConstants").REVOKE_WINDOW +
          o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN,
        i = o("WATimeUtils").unixTime() - r <= a;
      return i;
    }
    function _(e) {
      var t = o("useWAWebModelValues").useOptionalModelValues(e.groupMetadata, [
        "reportToAdminMode",
      ]);
      return (
        o("WAWebABProps").getABPropConfigValue("report_to_admin_kill_switch") &&
        (t == null ? void 0 : t.reportToAdminMode) === !0
      );
    }
    function f(e) {
      var t = o("useWAWebModelValues").useModelValues(e, [
          "id",
          "groupMetadata",
        ]),
        n = p(t),
        r = _(t) && n;
      return [
        r,
        function () {
          o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(t);
        },
      ];
    }
    ((l.ReportToAdminNewReportBanner = m),
      (l.useReportToAdminNewReportBanner = f));
  },
  226,
);
