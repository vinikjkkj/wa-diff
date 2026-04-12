__d(
  "WAWebBizAdPreviewContent.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdCreationFBPreview.react",
    "WAWebBizAdCreationIGPreview.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WAWebBizAdPreviewLoggingUtils",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "WAWebTabs.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState,
      g = {
        header: {
          alignItems: "x6s0dn4",
          columnGap: "xs2akgl",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          rowGap: "x1f0uite",
          $$css: !0,
        },
        tabs: { backgroundColor: "x1280gxy", flexShrink: "x2lah0s", $$css: !0 },
      },
      h = { instagram: "instagram", facebook: "facebook" };
    function y(e) {
      var t = e.adAccountID,
        n = e.loggerContext,
        a = e.onClose,
        i = e.previewData,
        l = e.xstyle,
        c = f(h.instagram),
        y = c[0],
        C = c[1],
        b = m(r("WAWebBizAdCreationLoggerContext")),
        v = n != null ? n : b,
        S = _(null);
      p(
        function () {
          if (t != null && v != null) {
            var e,
              n,
              a =
                (e = (n = i.medias) == null ? void 0 : n.length) != null
                  ? e
                  : 0,
              l = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(
                i.medias,
              ),
              s = S.current,
              u = s == null,
              c =
                u ||
                (s == null ? void 0 : s.count) !== a ||
                (s == null ? void 0 : s.type) !== l;
            c &&
              ((S.current = { count: a, type: l }),
              r("WAWebBizAdLogger").logCritical({
                event: "ad_preview_modal_impression",
                loggerContext: v,
                adAccountID: t,
                extra: { media_count: a, media_type: l, initial_load: u },
              }));
          }
        },
        [t, v, i.medias],
      );
      var R = d(
          function () {
            (t != null &&
              v != null &&
              r("WAWebBizAdLogger").log({
                event: "ad_preview_modal_close_click",
                loggerContext: v,
                adAccountID: t,
              }),
              a());
          },
          [t, v, a],
        ),
        L = d(
          function (e) {
            if (t != null && v != null) {
              var n,
                a,
                l = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(
                  i.medias,
                );
              r("WAWebBizAdLogger").log({
                event: "previews_tab_click",
                loggerContext: v,
                adAccountID: t,
                extra: {
                  before: y,
                  after: e,
                  media_count:
                    (n = (a = i.medias) == null ? void 0 : a.length) != null
                      ? n
                      : 0,
                  media_type: l,
                },
              });
            }
            C(e);
          },
          [t, v, i.medias, y],
        ),
        E = u.jsx(r("WAWebTabs.react"), {
          xstyle: g.tabs,
          selectedId: y,
          onSelect: L,
          testIdPrefix: "biz-ad-creation-preview-tab",
          tabConfigs: [
            { id: h.instagram, title: s._(/*BTDS*/ "Instagram") },
            { id: h.facebook, title: s._(/*BTDS*/ "Facebook") },
          ],
        });
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: [g.root, l],
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.header,
            children: [
              u.jsx(r("WDSButton.react"), {
                Icon: o("WAWebBackIcon.react").BackIcon,
                variant: "borderless",
                size: "medium",
                onPress: R,
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Ad preview"),
              }),
            ],
          }),
          E,
          u.jsxs("div", {
            className: "x98rzlu x2lwn1j x1odjw0f",
            children: [
              u.jsx("div", {
                className:
                  "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
                children:
                  y === h.instagram
                    ? u.jsx(
                        r("WAWebBizAdCreationIGPreview.react"),
                        babelHelpers.extends({}, i),
                      )
                    : u.jsx(
                        r("WAWebBizAdCreationFBPreview.react"),
                        babelHelpers.extends({}, i),
                      ),
              }),
              u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
              u.jsx("div", {
                className: "x16ovd2e x12xbjc7 x2b8uid",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children:
                    y === h.instagram
                      ? s._(
                          /*BTDS*/ 'When potential customers tap on "Send WhatsApp Message", they can message you directly on WhatsApp.',
                        )
                      : s._(
                          /*BTDS*/ 'When potential customers tap on "WhatsApp", they can message you directly on WhatsApp.',
                        ),
                }),
              }),
            ],
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
