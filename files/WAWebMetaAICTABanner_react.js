__d(
  "WAWebMetaAICTABanner.react",
  [
    "fbt",
    "WAHttpUtils",
    "WAWebBotProfileGetters",
    "WAWebConversationBanner.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLogMetaAICtaUpsellOperation",
    "WAWebMetaAIBannerSessionTracker",
    "WAWebNux",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebWamEnumMetaAiUpsellCtaOperationType",
    "WDSHoverStateStyles",
    "WDSIconIcOpenInNew.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useVisibility",
    "useWAWebNux",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = "https://www.meta.ai",
      f = "ww_maib",
      g = {
        banner: { backgroundColor: "x1h3rtpe", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
        row: { columnGap: "x1vg3z9j", $$css: !0 },
        underline: { textDecoration: "x1bvjpef", $$css: !0 },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
      };
    function h() {
      var e = o("WAHttpUtils").buildUrl(_, "/", { utm_source: f });
      return e;
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.ref,
        a = p(!1),
        i = a[0],
        l = a[1],
        c = m(!1),
        d = r("useWAWebNux")(o("WAWebNux").NUX.META_AI_CTA_BANNER),
        _ = d[1],
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            c.current ||
              (o(
                "WAWebLogMetaAICtaUpsellOperation",
              ).logMetaAICtaUpsellOperation(
                o("WAWebWamEnumMetaAiUpsellCtaOperationType")
                  .META_AI_UPSELL_CTA_OPERATION_TYPE.IMPRESSION,
              ),
              (c.current = !0));
          }),
          (t[0] = f))
        : (f = t[0]);
      var y = f,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = {
            onVisible: function () {
              y();
            },
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = r("useVisibility")(C),
        v = b[0],
        S = r("useMergeRefs")(n, v),
        R;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = h()), (t[2] = R))
        : (R = t[2]);
      var L = R,
        E;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function (t) {
            (o("WAWebStopEvent").stopEvent(t),
              o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(
                o("WAWebWamEnumMetaAiUpsellCtaOperationType")
                  .META_AI_UPSELL_CTA_OPERATION_TYPE.BUTTON_CLICK,
              ),
              o("WAWebExternalLink.react").openExternalLink(L));
          }),
          (t[3] = E))
        : (E = t[3]);
      var k = E,
        I;
      t[4] !== _
        ? ((I = function () {
            (o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(
              o("WAWebWamEnumMetaAiUpsellCtaOperationType")
                .META_AI_UPSELL_CTA_OPERATION_TYPE.DISMISS,
            ),
              _(),
              o("WAWebMetaAIBannerSessionTracker").markMetaAIBannerDismissed(
                o("WAWebMetaAIBannerSessionTracker").MetaAIBannerTypes
                  .META_AI_CTA_BANNER,
              ));
          }),
          (t[4] = _),
          (t[5] = I))
        : (I = t[5]);
      var T = I,
        D =
          i &&
          o("WDSHoverStateStyles").WDSHoverStateStyles.genericHoverPersistent,
        x;
      t[6] !== D
        ? ((x = [g.paddingHoriz16, g.paddingVert8, g.banner, D]),
          (t[6] = D),
          (t[7] = x))
        : (x = t[7]);
      var $;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx(r("WAWebFlexItem.react"), {
            padding: 8,
            shrink: 0,
            children: u.jsx(r("WDSIconIcOpenInNew.react"), {
              width: 24,
              height: 24,
              iconXstyle: g.icon,
            }),
          })),
          (t[8] = $))
        : ($ = t[8]);
      var P;
      t[9] !== i
        ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.row,
            children: [
              $,
              u.jsx(r("WAWebFlexItem.react"), {
                grow: 1,
                children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  color: "wdsContentDeemphasized",
                  children: s._(
                    /*BTDS*/ "On Meta AI web you can organize your Meta AI chats by topic, create AI-powered docs and more. {=m2}",
                    [
                      s._implicitParam(
                        "=m2",
                        u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                          href: L,
                          xstyle: i && g.underline,
                          children: s._(/*BTDS*/ "Try it"),
                        }),
                      ),
                    ],
                  ),
                }),
              }),
            ],
          })),
          (t[9] = i),
          (t[10] = P))
        : (P = t[10]);
      var N;
      return (
        t[11] !== T || t[12] !== S || t[13] !== x || t[14] !== P
          ? ((N = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MetaAICTABanner>",
              children: u.jsx(r("WAWebConversationBanner.react"), {
                ref: S,
                xstyle: x,
                onClick: k,
                onHoverChange: l,
                onClose: T,
                children: P,
              }),
            })),
            (t[11] = T),
            (t[12] = S),
            (t[13] = x),
            (t[14] = P),
            (t[15] = N))
          : (N = t[15]),
        N
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebBotProfileGetters").getIsDefault]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          e.id,
          n,
        ),
        i = a[0],
        l = r("useWAWebNux")(o("WAWebNux").NUX.META_AI_CTA_BANNER),
        s = l[0];
      return i === !0 && s;
    }
    ((l.MetaAICTABanner = y), (l.useMetaAICTABanner = C));
  },
  226,
);
