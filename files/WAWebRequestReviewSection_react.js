__d(
  "WAWebRequestReviewSection.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebNewsletterAlertsRowComponent.react",
    "WDSIconWdsIcChatSupport.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.appealState,
        n = e.onClickRequestReview,
        a = e.onClickSeeReviewDetails,
        i = function (t) {
          (t.preventDefault(), t.stopPropagation(), n());
        },
        l = function (t) {
          (t.preventDefault(), t.stopPropagation(), a());
        };
      if (t == null) return null;
      var d;
      switch (t) {
        case "SUCCESS":
        case "REJECT":
        case "CONTENT_UNAVAILABLE":
        case "PENDING": {
          d = {
            icon: u.jsx(r("WDSIconWdsIcChatSupport.react"), { xstyle: c.icon }),
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getSeeReviewDetailsText(),
            subtitle: s._(/*BTDS*/ "Check the outcome of your review."),
            onClick: l,
            showDetailRight: !1,
            showBottomBorder: !1,
          };
          break;
        }
        case "NOT_APPEALED": {
          d = {
            icon: u.jsx(r("WDSIconWdsIcChatSupport.react"), { xstyle: c.icon }),
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getRequestAppealRemediationOptionsRowText(),
            subtitle: s._(
              /*BTDS*/ "Ask WhatsApp to take another look if you think there has been a mistake.",
            ),
            onClick: i,
            showDetailRight: !1,
            showBottomBorder: !1,
          };
          break;
        }
        case "NON_APPEALABLE":
        default:
          return null;
      }
      return d != null && d.icon != null
        ? u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
            icon: d.icon,
            testId: "newsletter-remediation-options-drawer-appeal-section",
            title: d.title,
            subtitle: d.subtitle,
            onClick: d.onClick,
            showDetailRight: d.showDetailRight,
            showBottomBorder: d.showBottomBorder,
          })
        : u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
            testid: void 0,
            stretch: !1,
            shadowOnHover: !1,
            onClick: d.onClick,
            children: d.title,
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
