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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = function () {
            (o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
              reportToAdminInteraction: o(
                "WAWebWamEnumReportToAdminInteraction",
              ).REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
              groupId: o("WAWebFrontendMsgGetters").getChat(n).id.user,
            }),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebReportToAdminPopup.react"), { msg: n }),
              ));
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSIconIcThumbDown.react"), {})),
          (c = s._(/*BTDS*/ "Send for admin review")),
          (t[2] = l),
          (t[3] = c))
        : ((l = t[2]), (c = t[3]));
      var d;
      return (
        t[4] !== i
          ? ((d = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: i,
              icon: l,
              children: c,
            })),
            (t[4] = i),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = c;
  },
  226,
);
