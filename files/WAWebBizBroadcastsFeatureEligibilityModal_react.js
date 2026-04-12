__d(
  "WAWebBizBroadcastsFeatureEligibilityModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastsModalWarningIcon.react",
    "WAWebGetBusinessEligibilityJob",
    "WAWebModal.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "formatDate",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        controlsStyle: {
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1c1uobl",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
      };
    function f() {
      var t = p(null),
        r = t[0],
        a = t[1];
      return (
        m(function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t,
                n = yield o(
                  "WAWebGetBusinessEligibilityJob",
                ).fetchAndCacheBusinessEligibility();
              a((t = n.marketingMessages) != null ? t : null);
            } catch (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to check marketing messages eligibility: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("marketing-messages-eligibility-error"),
                a({ status: "FAIL" }));
            }
          })();
        }, []),
        r
      );
    }
    function g(e) {
      var t = e.eligibility;
      return t.status === "FAIL" || t.status === "PAUSED"
        ? s._(
            /*BTDS*/ "This account can\u2019t create or send business broadcasts on WhatsApp",
          )
        : t.status === "WARNING"
          ? s._(/*BTDS*/ "This account may lose access to business broadcasts")
          : null;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.eligibility,
        n = t.expiration,
        o =
          n == null ? null : r("formatDate")(n, r("formatDate").DEFAULT_FORMAT);
      return t.status === "FAIL"
        ? c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Activity on this account does not follow {=m1} against spam.",
              [
                s._implicitParam(
                  "=m1",
                  c.jsx(r("WDSTextualLink.react"), {
                    href: "https://www.facebook.com/legal/business-broadcasts",
                    children: s._(
                      /*BTDS*/ "Meta Terms for WhatsApp Business broadcasts Feature Terms",
                    ),
                  }),
                ),
              ],
            ),
          })
        : t.status === "WARNING"
          ? c.jsxs(c.Fragment, {
              children: [
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "Activity on this account does not follow {=m1} against spam.",
                    [
                      s._implicitParam(
                        "=m1",
                        c.jsx(r("WDSTextualLink.react"), {
                          href: "https://www.facebook.com/legal/business-broadcasts",
                          children: s._(
                            /*BTDS*/ "Meta Terms for WhatsApp Business broadcasts Feature Terms",
                          ),
                        }),
                      ),
                    ],
                  ),
                }),
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "If this continues, you may not be able to create and send business broadcasts on WhatsApp.",
                  ),
                }),
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "To avoid this, follow our best practices for {=m1}",
                    [
                      s._implicitParam(
                        "=m1",
                        c.jsx(r("WDSTextualLink.react"), {
                          href: "https://business.whatsapp.com/policy",
                          children: s._(
                            /*BTDS*/ "creating a quality experience",
                          ),
                        }),
                      ),
                    ],
                  ),
                }),
              ],
            })
          : t.status === "PAUSED"
            ? c.jsxs(c.Fragment, {
                children: [
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(
                      /*BTDS*/ "Activity on this account does not follow {=m1} against spam.",
                      [
                        s._implicitParam(
                          "=m1",
                          c.jsx(r("WDSTextualLink.react"), {
                            href: "https://www.facebook.com/legal/business-broadcasts",
                            children: s._(
                              /*BTDS*/ "Meta Terms for WhatsApp Business broadcasts Feature Terms",
                            ),
                          }),
                        ),
                      ],
                    ),
                  }),
                  o != null &&
                    c.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      children: s._(
                        /*BTDS*/ "You\u2019ll be able to create and send business broadcast messages on WhatsApp after {expiration_date}.",
                        [s._param("expiration_date", o)],
                      ),
                    }),
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(
                      /*BTDS*/ "To avoid this happening again, follow our best practices for {=m1}",
                      [
                        s._implicitParam(
                          "=m1",
                          c.jsx(r("WDSTextualLink.react"), {
                            href: "https://business.whatsapp.com/policy",
                            children: s._(
                              /*BTDS*/ "creating a quality experience",
                            ),
                          }),
                        ),
                      ],
                    ),
                  }),
                ],
              })
            : null;
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.eligibility,
        n = e.onCancel;
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal,
        actions: c.jsx(r("WDSButton.react"), {
          label: s._(/*BTDS*/ "OK"),
          variant: "filled",
          onPress: n,
          testid: void 0,
        }),
        onOverlayClick: n,
        testid: void 0,
        controlsStyle: _.controlsStyle,
        children: c.jsxs("div", {
          className: "x78zum5 xdt5ytf x1f0uite xh8yej3",
          children: [
            c.jsx(r("WAWebBizBroadcastsModalWarningIcon.react"), {}),
            c.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              textAlign: "center",
              children: c.jsx(g, { eligibility: t }),
            }),
            c.jsx(h, { eligibility: t }),
          ],
        }),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.useMarketingMessagesEligibility = f),
      (l.WAWebBizBroadcastsFeatureEligibilityModal = y));
  },
  226,
);
