__d(
  "WAWebMetricInfoModal.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebClock",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWamEnumActionTarget",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.metric,
        n = t.description,
        r = t.name;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        children: [
          u.jsx(o("WAWebText.react").WAWebTextLarge, { children: r }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, { children: n }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.lastUpdated,
        n = e.logger,
        a = e.metrics,
        i = e.metricsThreshold,
        l = u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
          testid: void 0,
          onClick: o("WAWebModalManager").closeModalManager,
          children: r("WAWebFbtCommon")("OK"),
        });
      return u.jsx(o("WAWebModal.react").Modal, {
        actions: l,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          rowGap: 16,
          children: [
            a.map(function (e) {
              return u.jsx(c, { metric: e }, e.key);
            }),
            u.jsxs(o("WAWebText.react").WAWebTextMuted, {
              children: [
                u.jsxs("p", {
                  children: [
                    t != null &&
                      u.jsxs(u.Fragment, {
                        children: [
                          s._(/*BTDS*/ "Number last refreshed on {date}.", [
                            s._param(
                              "date",
                              o("WAWebClock").Clock.lastUpdatedDateStr(t),
                            ),
                          ]),
                          " ",
                        ],
                      }),
                    s._(
                      /*BTDS*/ "Reported numbers are in {=m2} and may be delayed by about a week.",
                      [
                        s._implicitParam(
                          "=m2",
                          u.jsx(o("WAWebText.react").WAWebClickableText, {
                            weight: "normal",
                            onClick: function () {
                              (n.logHelpCentreClick(
                                o("WAWebWamEnumActionTarget").ACTION_TARGET
                                  .HELP_CENTER_CHANNEL_METRICS_ARTICLE,
                              ),
                                o("WAWebExternalLink.react").openExternalLink(
                                  o(
                                    "WAWebFaqUrl",
                                  ).getNewsletterMetricsEstimatedFaqUrl(),
                                ));
                            },
                            children: s._(/*BTDS*/ "development"),
                          }),
                        ),
                      ],
                    ),
                  ],
                }),
                i != null && u.jsx("p", { className: "x98l61r", children: i }),
              ],
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
