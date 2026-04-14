__d(
  "WAWebHelpItemIcon.react",
  [
    "$InternalEnum",
    "WAWebBugnubRefreshedIcon.react",
    "WAWebContactQuestionIcon.react",
    "WAWebIcRateAppIcon.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebMessageReportRefreshedIcon.react",
    "WDSIconIcDescription.react",
    "WDSIconIcHelp.react",
    "WDSIconIcScience.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "Feedback",
        "Bug",
        "Faq",
        "ContactUs",
        "Rate",
        "Tos",
        "NewsletterReports",
        "Beta",
      ]);
    function c(e) {
      var t = e.iconType;
      return s.jsx("div", {
        className: "xhslqc4",
        children: s.jsx(d, { iconType: t }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.iconType;
      switch (t) {
        case u.Feedback:
          return s.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {});
        case u.Bug:
          return s.jsx(
            o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon,
            {},
          );
        case u.Faq:
          return s.jsx(r("WDSIconIcHelp.react"), {});
        case u.ContactUs:
          return s.jsx(
            o("WAWebContactQuestionIcon.react").ContactQuestionIcon,
            {},
          );
        case u.Rate:
          return s.jsx(o("WAWebIcRateAppIcon.react").IcRateAppIcon, {});
        case u.Tos:
          return s.jsx(r("WDSIconIcDescription.react"), {});
        case u.NewsletterReports:
          return s.jsx(
            o("WAWebMessageReportRefreshedIcon.react")
              .MessageReportRefreshedIcon,
            {},
          );
        case u.Beta:
          return s.jsx(r("WDSIconIcScience.react"), {});
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.HelpItemIconType = u),
      (l.HelpItemIcon = c));
  },
  98,
);
