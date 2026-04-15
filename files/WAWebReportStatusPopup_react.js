__d(
  "WAWebReportStatusPopup.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebModal.react",
    "WAWebName.react",
    "WAWebReportPopupBase.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
        testid: void 0,
        children: r("WAWebFbtCommon")("Learn more"),
      });
    function d(e) {
      var t = o("react-compiler-runtime").c(23),
        r = e.contact,
        a = e.onCancel,
        i = e.onReport,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebFrontendContactGetters").getIsContactBlocked]),
          (t[0] = l))
        : (l = t[0]);
      var d = o("useWAWebContactValues").useContactValues(r.id, l),
        m = d[0],
        p;
      t[1] !== r
        ? ((p = u.jsx(o("WAWebName.react").Name, { contact: r })),
          (t[1] = r),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== i
        ? ((f = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              i(!1);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[3] = i),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h;
      t[5] !== i
        ? ((h = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              i(!0);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[5] = i),
          (t[6] = h))
        : (h = t[6]);
      var y = h,
        C;
      t[7] !== r.isBusiness
        ? ((C = function () {
            return r.isBusiness
              ? s._(
                  /*BTDS*/ "This status will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}",
                  [s._param("link to learn more", c)],
                )
              : s._(
                  /*BTDS*/ "This status will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}",
                  [s._param("link to learn more", c)],
                );
          }),
          (t[7] = r.isBusiness),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v = !m,
        S;
      t[9] !== b ? ((S = b()), (t[9] = b), (t[10] = S)) : (S = t[10]);
      var R;
      t[11] !== _
        ? ((R = o("WAWebReportPopupBase.react").getBlockLabelText(!1, _)),
          (t[11] = _),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] !== r.isBusiness
        ? ((L = o("WAWebReportPopupBase.react").getBlockSubText({
            isBizBot3p: !1,
            isBusiness: r.isBusiness,
            isGroup: !1,
            isCommunityAnnouncementGroup: !1,
          })),
          (t[13] = r.isBusiness),
          (t[14] = L))
        : (L = t[14]);
      var E;
      return (
        t[15] !== g ||
        t[16] !== y ||
        t[17] !== a ||
        t[18] !== v ||
        t[19] !== S ||
        t[20] !== R ||
        t[21] !== L
          ? ((E = u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
              hasAdditionalAction: v,
              reportSubText: S,
              additionalActionLabelText: R,
              additionalActionSubText: L,
              onSendReport: g,
              onSendReportAndAdditionalAction: y,
              onCancel: a,
              type: o("WAWebModal.react").ModalTheme.StatusReport,
            })),
            (t[15] = g),
            (t[16] = y),
            (t[17] = a),
            (t[18] = v),
            (t[19] = S),
            (t[20] = R),
            (t[21] = L),
            (t[22] = E))
          : (E = t[22]),
        E
      );
    }
    l.default = d;
  },
  226,
);
