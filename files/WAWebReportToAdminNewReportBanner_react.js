__d(
  "WAWebReportToAdminNewReportBanner.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardTabUtils",
    "WAWebMessageReportRefreshedIcon.react",
    "WAWebRevokeMsgConstants",
    "WAWebSendForAdminReviewUtils",
    "WAWebSentForAdminReviewFlow.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        banner: { backgroundColor: "x1280gxy", $$css: !0 },
        iconRefreshed: { color: "xhslqc4", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(14),
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
        u = l.chat,
        m = l.onClose,
        p = r("useWAWebUIM")(),
        _;
      n[3] !== u || n[4] !== m || n[5] !== i || n[6] !== p
        ? ((_ = function () {
            (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                r("WAWebSentForAdminReviewFlow.react"),
                {
                  chat: o("WAWebStateUtils").unproxy(u),
                  ref: i,
                  onClose: o("WAWebDrawerManager").closeDrawerRight,
                },
                "rta-" + u.id.toString(),
              ),
              {
                transition: "slide-left",
                uim: p,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ),
              m());
          }),
          (n[3] = u),
          (n[4] = m),
          (n[5] = i),
          (n[6] = p),
          (n[7] = _))
        : (_ = n[7]);
      var f = _,
        g;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(r("WAWebFlexItem.react"), {
            xstyle: o("WAWebUISpacing").uiPadding.end20,
            children: c.jsx(
              o("WAWebMessageReportRefreshedIcon.react")
                .MessageReportRefreshedIcon,
              { iconXstyle: d.iconRefreshed },
            ),
          })),
          (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.top6,
            align: "center",
            children: [
              g,
              c.jsx(r("WAWebFlexItem.react"), {
                xstyle: o("WAWebUISpacing").uiMargin.bottom6,
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children: s._(/*BTDS*/ "{=m0} sent for admin review", [
                    s._implicitParam(
                      "=m0",
                      c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                        color: "accent",
                        weight: "semibold",
                        children: s._(/*BTDS*/ "New Messages"),
                      }),
                    ),
                  ]),
                }),
              }),
            ],
          })),
          (n[9] = h))
        : (h = n[9]);
      var y;
      return (
        n[10] !== f || n[11] !== m || n[12] !== i
          ? ((y = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ReportToAdminNewReportBanner",
              escapable: !0,
              children: c.jsx(r("WAWebConversationBanner.react"), {
                ref: i,
                xstyle: d.banner,
                onClick: f,
                onClose: m,
                children: h,
              }),
            })),
            (n[10] = f),
            (n[11] = m),
            (n[12] = i),
            (n[13] = y))
          : (y = n[13]),
        y
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["groupMetadata"]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebModelValues").useModelValues(e, n),
        a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["lastReportToAdminTimestamp"]), (t[1] = a))
        : (a = t[1]);
      var i = o("useWAWebModelValues").useOptionalModelValues(
          r.groupMetadata,
          a,
        ),
        l = i == null ? void 0 : i.lastReportToAdminTimestamp;
      if (l == null) return !1;
      var s =
          o("WAWebRevokeMsgConstants").REVOKE_WINDOW +
          o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN,
        u = o("WATimeUtils").unixTime() - l <= s;
      return u;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["reportToAdminMode"]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebModelValues").useOptionalModelValues(
          e.groupMetadata,
          n,
        ),
        a;
      return (
        t[1] !== (r == null ? void 0 : r.reportToAdminMode)
          ? ((a =
              o("WAWebABProps").getABPropConfigValue(
                "report_to_admin_kill_switch",
              ) && (r == null ? void 0 : r.reportToAdminMode) === !0),
            (t[1] = r == null ? void 0 : r.reportToAdminMode),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["id", "groupMetadata"]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebModelValues").useModelValues(e, n),
        a = p(r),
        i = _(r) && a,
        l;
      t[1] !== r
        ? ((l = function () {
            o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(r);
          }),
          (t[1] = r),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== i || t[4] !== l
          ? ((s = [i, l]), (t[3] = i), (t[4] = l), (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    ((l.ReportToAdminNewReportBanner = m),
      (l.useReportToAdminNewReportBanner = f));
  },
  226,
);
