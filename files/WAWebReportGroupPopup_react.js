__d(
  "WAWebReportGroupPopup.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebReportPopupBase.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
        testid: void 0,
        children: r("WAWebFbtCommon")("Learn more"),
      });
      return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
        hasAdditionalAction: !e.chat.isReadOnly,
        reportSubText: s._(
          /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. No one in the group will know about this report. {link to learn more}",
          [s._param("link to learn more", t)],
        ),
        additionalActionLabelText: r("WAWebFbtCommon")("Leave Group"),
        additionalActionSubText: s._(
          /*BTDS*/ "Only admins are notified when you leave a group.",
        ),
        onSendReport: e.onReport,
        onSendReportAndAdditionalAction: e.onReportAndLeave,
        onCancel: d,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
