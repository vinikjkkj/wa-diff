__d(
  "WAWebRequestReviewSection.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebNewsletterAlertsRowComponent.react",
    "WDSIconWdsIcChatSupport.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.appealState,
        a = e.onClickRequestReview,
        i = e.onClickSeeReviewDetails,
        l;
      t[0] !== a
        ? ((l = function (t) {
            (t.preventDefault(), t.stopPropagation(), a());
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] !== i
        ? ((m = function (t) {
            (t.preventDefault(), t.stopPropagation(), i());
          }),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p = m;
      if (n == null) return null;
      var _;
      e: switch (n) {
        case "SUCCESS":
        case "REJECT":
        case "CONTENT_UNAVAILABLE":
        case "PENDING": {
          var f, g, h;
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = u.jsx(r("WDSIconWdsIcChatSupport.react"), {
                xstyle: c.icon,
              })),
              (g = o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getSeeReviewDetailsText()),
              (h = s._(/*BTDS*/ "Check the outcome of your review.")),
              (t[4] = f),
              (t[5] = g),
              (t[6] = h))
            : ((f = t[4]), (g = t[5]), (h = t[6]));
          var y;
          (t[7] !== p
            ? ((y = {
                icon: f,
                title: g,
                subtitle: h,
                onClick: p,
                showDetailRight: !1,
                showBottomBorder: !1,
              }),
              (t[7] = p),
              (t[8] = y))
            : (y = t[8]),
            (_ = y));
          break e;
        }
        case "NOT_APPEALED": {
          var C, b, v;
          t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = u.jsx(r("WDSIconWdsIcChatSupport.react"), {
                xstyle: c.icon,
              })),
              (b = o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getRequestAppealRemediationOptionsRowText()),
              (v = s._(
                /*BTDS*/ "Ask WhatsApp to take another look if you think there has been a mistake.",
              )),
              (t[9] = C),
              (t[10] = b),
              (t[11] = v))
            : ((C = t[9]), (b = t[10]), (v = t[11]));
          var S;
          (t[12] !== d
            ? ((S = {
                icon: C,
                title: b,
                subtitle: v,
                onClick: d,
                showDetailRight: !1,
                showBottomBorder: !1,
              }),
              (t[12] = d),
              (t[13] = S))
            : (S = t[13]),
            (_ = S));
          break e;
        }
        case "NON_APPEALABLE":
        default:
          return null;
      }
      var R;
      return (
        t[14] !== _
          ? ((R =
              _ != null && _.icon != null
                ? u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
                    icon: _.icon,
                    testId:
                      "newsletter-remediation-options-drawer-appeal-section",
                    title: _.title,
                    subtitle: _.subtitle,
                    onClick: _.onClick,
                    showDetailRight: _.showDetailRight,
                    showBottomBorder: _.showBottomBorder,
                  })
                : u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                    testid: void 0,
                    stretch: !1,
                    shadowOnHover: !1,
                    onClick: _.onClick,
                    children: _.title,
                  })),
            (t[14] = _),
            (t[15] = R))
          : (R = t[15]),
        R
      );
    }
    l.default = d;
  },
  226,
);
