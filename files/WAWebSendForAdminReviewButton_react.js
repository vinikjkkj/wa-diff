__d(
  "WAWebSendForAdminReviewButton.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebReportToAdminEventsLogger",
    "WAWebReportToAdminPopup.react",
    "WAWebWamEnumReportToAdminInteraction",
    "WDSIconIcThumbDown.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg,
        n = function () {
          (o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
            reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction")
              .REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
            groupId: o("WAWebFrontendMsgGetters").getChat(t).id.user,
          }),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportToAdminPopup.react"), { msg: t }),
            ));
        };
      return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: n,
        icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
        children: s._(/*BTDS*/ "Send for admin review"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
