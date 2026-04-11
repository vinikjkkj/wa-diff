__d(
  "WAWebBizAdCreationSACSection.react",
  [
    "fbt",
    "WAWebBizAdCard.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSACInfoModal.react",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebBizAdLogger",
    "WAWebBizCheckbox.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WDSBanner.react",
    "react",
    "useWAWebInfoButtonUtil",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = "https://www.facebook.com/business/help/298000447747885";
    function g() {
      var e = _(!1),
        t = e[0],
        n = e[1],
        a = d(r("WAWebBizAdCreationValidateSpecContext")),
        i = a == null ? void 0 : a.setSpecElementClientSideNotices,
        l = d(r("WAWebBizAdCreationLoggerContext")),
        c = p(!1);
      m(
        function () {
          l != null &&
            !c.current &&
            ((c.current = !0),
            r("WAWebBizAdLogger").logCritical({
              event: "update_special_ad_category_countries",
              loggerContext: l,
              extra: { is_checked: t },
            }));
        },
        [l, t],
      );
      var g = function () {
          var e = !t;
          (n(e),
            l != null &&
              r("WAWebBizAdLogger").logCritical({
                event: "update_regulated_category",
                loggerContext: l,
                extra: { is_checked: e },
              }));
        },
        h = r("useWAWebInfoButtonUtil")(
          r("WAWebBizAdCreationSACInfoModal.react"),
        ),
        y = function () {
          o("WAWebExternalLink.react").openExternalLink(f);
        };
      return (
        m(
          function () {
            i != null &&
              (t
                ? i("POLITICAL", [
                    {
                      severity: "BLOCKING_TIP",
                      title: s._(/*BTDS*/ "Can't create ad"),
                    },
                  ])
                : i("POLITICAL", []));
          },
          [t, i],
        ),
        u.jsxs(r("WAWebBizAdCard.react"), {
          header: s._(/*BTDS*/ "Special requirements"),
          titleAccessory: h,
          children: [
            u.jsx(r("WAWebBizCheckbox.react"), {
              label: s._(
                /*BTDS*/ "Is your ad about credit, employment, housing, social issues, elections or politics?",
              ),
              onChange: g,
              value: t,
            }),
            t &&
              u.jsx(r("WDSBanner.react"), {
                type: "warning",
                title: s._(/*BTDS*/ "Can't create ad"),
                body: s._(
                  /*BTDS*/ "You can't create ads about these issues on WhatsApp. To create this type of ad, visit Meta ads manager.",
                ),
                actionText: r("WAWebFbtCommon")("Learn more"),
                onAction: y,
              }),
          ],
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
