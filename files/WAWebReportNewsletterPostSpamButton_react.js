__d(
  "WAWebReportNewsletterPostSpamButton.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebReportNewsletterPostPopup.react",
    "WAWebSpamConstants",
    "WDSIconIcThumbDown.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getChat(t),
        a = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebReportNewsletterPostPopup.react"), {
              chat: n,
              msg: t,
              spamFlow: o("WAWebSpamConstants").SpamFlow.MediaViewer,
            }),
          );
        };
      return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: a,
        icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
        children: s._(/*BTDS*/ "Report"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
