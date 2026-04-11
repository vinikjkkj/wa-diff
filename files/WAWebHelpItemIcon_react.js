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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.iconType,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "xhslqc4" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx(
              "div",
              babelHelpers.extends({}, r, {
                children: s.jsx(d, { iconType: n }),
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.iconType;
      switch (n) {
        case u.Feedback: {
          var a;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = s.jsx(
                  o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                  {},
                )),
                (t[0] = a))
              : (a = t[0]),
            a
          );
        }
        case u.Bug: {
          var i;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = s.jsx(
                  o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon,
                  {},
                )),
                (t[1] = i))
              : (i = t[1]),
            i
          );
        }
        case u.Faq: {
          var l;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = s.jsx(r("WDSIconIcHelp.react"), {})), (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        case u.ContactUs: {
          var c;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = s.jsx(
                  o("WAWebContactQuestionIcon.react").ContactQuestionIcon,
                  {},
                )),
                (t[3] = c))
              : (c = t[3]),
            c
          );
        }
        case u.Rate: {
          var d;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = s.jsx(o("WAWebIcRateAppIcon.react").IcRateAppIcon, {})),
                (t[4] = d))
              : (d = t[4]),
            d
          );
        }
        case u.Tos: {
          var m;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = s.jsx(r("WDSIconIcDescription.react"), {})), (t[5] = m))
              : (m = t[5]),
            m
          );
        }
        case u.NewsletterReports: {
          var p;
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = s.jsx(
                  o("WAWebMessageReportRefreshedIcon.react")
                    .MessageReportRefreshedIcon,
                  {},
                )),
                (t[6] = p))
              : (p = t[6]),
            p
          );
        }
        case u.Beta: {
          var _;
          return (
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = s.jsx(r("WDSIconIcScience.react"), {})), (t[7] = _))
              : (_ = t[7]),
            _
          );
        }
      }
    }
    ((l.HelpItemIconType = u), (l.HelpItemIcon = c));
  },
  98,
);
