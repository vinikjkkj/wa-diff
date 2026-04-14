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
      var t = e.ref,
        n = p(!1),
        a = n[0],
        i = n[1],
        l = m(!1),
        c = r("useWAWebNux")(o("WAWebNux").NUX.META_AI_CTA_BANNER),
        _ = c[1],
        f = function () {
          l.current ||
            (o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(
              o("WAWebWamEnumMetaAiUpsellCtaOperationType")
                .META_AI_UPSELL_CTA_OPERATION_TYPE.IMPRESSION,
            ),
            (l.current = !0));
        },
        y = r("useVisibility")({
          onVisible: function () {
            f();
          },
        }),
        C = y[0],
        b = r("useMergeRefs")(t, C),
        v = d(function () {
          return h();
        }, []),
        S = function (t) {
          (o("WAWebStopEvent").stopEvent(t),
            o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(
              o("WAWebWamEnumMetaAiUpsellCtaOperationType")
                .META_AI_UPSELL_CTA_OPERATION_TYPE.BUTTON_CLICK,
            ),
            o("WAWebExternalLink.react").openExternalLink(v));
        },
        R = function () {
          (o("WAWebLogMetaAICtaUpsellOperation").logMetaAICtaUpsellOperation(
            o("WAWebWamEnumMetaAiUpsellCtaOperationType")
              .META_AI_UPSELL_CTA_OPERATION_TYPE.DISMISS,
          ),
            _(),
            o("WAWebMetaAIBannerSessionTracker").markMetaAIBannerDismissed(
              o("WAWebMetaAIBannerSessionTracker").MetaAIBannerTypes
                .META_AI_CTA_BANNER,
            ));
        };
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "MetaAICTABanner>",
        children: u.jsx(r("WAWebConversationBanner.react"), {
          ref: b,
          xstyle: [
            g.paddingHoriz16,
            g.paddingVert8,
            g.banner,
            a &&
              o("WDSHoverStateStyles").WDSHoverStateStyles
                .genericHoverPersistent,
          ],
          onClick: S,
          onHoverChange: i,
          onClose: R,
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.row,
            children: [
              u.jsx(r("WAWebFlexItem.react"), {
                padding: 8,
                shrink: 0,
                children: u.jsx(r("WDSIconIcOpenInNew.react"), {
                  width: 24,
                  height: 24,
                  iconXstyle: g.icon,
                }),
              }),
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
                          href: v,
                          xstyle: a && g.underline,
                          children: s._(/*BTDS*/ "Try it"),
                        }),
                      ),
                    ],
                  ),
                }),
              }),
            ],
          }),
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          e.id,
          [o("WAWebBotProfileGetters").getIsDefault],
        ),
        n = t[0],
        a = r("useWAWebNux")(o("WAWebNux").NUX.META_AI_CTA_BANNER),
        i = a[0];
      return n === !0 && i;
    }
    ((l.MetaAICTABanner = y), (l.useMetaAICTABanner = C));
  },
  226,
);
