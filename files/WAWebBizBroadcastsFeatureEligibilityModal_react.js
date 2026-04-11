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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(2),
        n = e.eligibility,
        r;
      return (
        t[0] !== n.status
          ? ((r =
              n.status === "FAIL" || n.status === "PAUSED"
                ? s._(
                    /*BTDS*/ "This account can\u2019t create or send business broadcasts on WhatsApp",
                  )
                : n.status === "WARNING"
                  ? s._(
                      /*BTDS*/ "This account may lose access to business broadcasts",
                    )
                  : null),
            (t[0] = n.status),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.eligibility,
        a = n.expiration,
        i;
      t[0] !== a
        ? ((i =
            a == null
              ? null
              : r("formatDate")(a, r("formatDate").DEFAULT_FORMAT)),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      return (
        t[2] !== n.status || t[3] !== l
          ? ((u =
              n.status === "FAIL"
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
                : n.status === "WARNING"
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
                  : n.status === "PAUSED"
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
                          l != null &&
                            c.jsx(r("WDSText.react"), {
                              type: "Body2",
                              colorName: "contentDeemphasized",
                              children: s._(
                                /*BTDS*/ "You\u2019ll be able to create and send business broadcast messages on WhatsApp after {expiration_date}.",
                                [s._param("expiration_date", l)],
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
                    : null),
            (t[2] = n.status),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.eligibility,
        a = e.onCancel,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "OK")), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l = c.jsx(r("WDSButton.react"), {
            label: i,
            variant: "filled",
            onPress: a,
            testid: void 0,
          })),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var u, d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x78zum5 xdt5ytf x1f0uite xh8yej3" }),
          (d = c.jsx(r("WAWebBizBroadcastsModalWarningIcon.react"), {})),
          (t[3] = u),
          (t[4] = d))
        : ((u = t[3]), (d = t[4]));
      var m;
      t[5] !== n
        ? ((m = c.jsxs(
            "div",
            babelHelpers.extends({}, u, {
              children: [
                d,
                c.jsx(r("WDSText.react"), {
                  type: "Headline2",
                  colorName: "contentDefault",
                  textAlign: "center",
                  children: c.jsx(g, { eligibility: n }),
                }),
                c.jsx(h, { eligibility: n }),
              ],
            }),
          )),
          (t[5] = n),
          (t[6] = m))
        : (m = t[6]);
      var p;
      return (
        t[7] !== a || t[8] !== l || t[9] !== m
          ? ((p = c.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme
                .BusinessBroadcastUploadModal,
              actions: l,
              onOverlayClick: a,
              testid: void 0,
              controlsStyle: _.controlsStyle,
              children: m,
            })),
            (t[7] = a),
            (t[8] = l),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    ((l.useMarketingMessagesEligibility = f),
      (l.WAWebBizBroadcastsFeatureEligibilityModal = y));
  },
  226,
);
