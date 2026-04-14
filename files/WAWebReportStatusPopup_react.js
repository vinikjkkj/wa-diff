__d(
  "WAWebReportStatusPopup.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebModal.react",
    "WAWebName.react",
    "WAWebReportPopupBase.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
        testid: void 0,
        children: r("WAWebFbtCommon")("Learn more"),
      });
    function d(e) {
      var t = e.contact,
        r = e.onCancel,
        a = e.onReport,
        i = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        l = i[0],
        d = u.jsx(o("WAWebName.react").Name, { contact: t }),
        m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            a(!1);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            a(!0);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        _ = function () {
          return t.isBusiness
            ? s._(
                /*BTDS*/ "This status will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}",
                [s._param("link to learn more", c)],
              )
            : s._(
                /*BTDS*/ "This status will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}",
                [s._param("link to learn more", c)],
              );
        };
      return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
        hasAdditionalAction: !l,
        reportSubText: _(),
        additionalActionLabelText: o(
          "WAWebReportPopupBase.react",
        ).getBlockLabelText(!1, d),
        additionalActionSubText: o(
          "WAWebReportPopupBase.react",
        ).getBlockSubText({
          isBizBot3p: !1,
          isBusiness: t.isBusiness,
          isGroup: !1,
          isCommunityAnnouncementGroup: !1,
        }),
        onSendReport: m,
        onSendReportAndAdditionalAction: p,
        onCancel: r,
        type: o("WAWebModal.react").ModalTheme.StatusReport,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
