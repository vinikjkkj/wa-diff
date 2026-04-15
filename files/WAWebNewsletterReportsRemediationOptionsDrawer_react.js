__d(
  "WAWebNewsletterReportsRemediationOptionsDrawer.react",
  [
    "WAJids",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebNewsletterRemediationOptionChannelGuidelines.react",
    "WAWebNewsletterRemediationOptionContactDSB.react",
    "WAWebNoop",
    "WAWebRequestReviewSection.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.onBack,
        c = l.onClickDSBFlow,
        d = l.onClickRequestReview,
        m = l.selectedReport,
        p;
      n[3] !== d || n[4] !== m.appeal.state || n[5] !== m.newsletterId
        ? ((p =
            m.appeal.state === "NOT_APPEALED"
              ? u.jsx(r("WAWebRequestReviewSection.react"), {
                  appealState: m.appeal.state,
                  chatId: o("WAJids").toNewsletterJid(m.newsletterId.toJid()),
                  onClickRequestReview: d,
                  onClickSeeReviewDetails: r("WAWebNoop"),
                })
              : null),
          (n[3] = d),
          (n[4] = m.appeal.state),
          (n[5] = m.newsletterId),
          (n[6] = p))
        : (p = n[6]);
      var _ = p,
        f;
      n[7] !== c
        ? ((f = u.jsx(r("WAWebNewsletterRemediationOptionContactDSB.react"), {
            onClickDSBFlow: c,
            enforcementSource: null,
          })),
          (n[7] = c),
          (n[8] = f))
        : (f = n[8]);
      var g = f,
        h;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(
            r("WAWebNewsletterRemediationOptionChannelGuidelines.react"),
            {},
          )),
          (n[9] = h))
        : (h = n[9]);
      var y = h,
        C;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = {
            surface: "unknown",
            viewName: "newsletter-reports-remediation",
          }),
          (n[10] = C))
        : (C = n[10]);
      var b;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterRemediationOptionsDrawerTitle()),
          (n[11] = b))
        : (b = n[11]);
      var v;
      n[12] !== s
        ? ((v = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: b,
            onBack: s,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[12] = s),
          (n[13] = v))
        : (v = n[13]);
      var S;
      n[14] !== _ || n[15] !== g
        ? ((S = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [_, g, y],
            }),
          })),
          (n[14] = _),
          (n[15] = g),
          (n[16] = S))
        : (S = n[16]);
      var R;
      return (
        n[17] !== i || n[18] !== v || n[19] !== S
          ? ((R = u.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: C,
              children: [v, S],
            })),
            (n[17] = i),
            (n[18] = v),
            (n[19] = S),
            (n[20] = R))
          : (R = n[20]),
        R
      );
    }
    l.default = c;
  },
  98,
);
