__d(
  "WAWebNuxQuickPromotionChatListBanner.react",
  [
    "WALogger",
    "WAWebButterbar.react",
    "WAWebDomSanitize",
    "WAWebNuxBanner",
    "WAWebNuxBannerText.react",
    "WAWebQuickPromotionCollection",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.createRef,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$QuickPromotionChatListBanner$p_1 = d()),
            (e.$QuickPromotionChatListBanner$p_2 = !1),
            (e.getElement = function () {
              return e.$QuickPromotionChatListBanner$p_1.current;
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.render = function () {
            var t = this,
              n,
              a;
            if (this.$QuickPromotionChatListBanner$p_2) return null;
            var i = this.props,
              l = i.onInteract,
              u = i.promotion,
              d = u.data,
              m = d.image,
              p = d.primaryAction,
              _ = d.textElementValue,
              f = d.titleElementValue;
            if (p == null)
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "QuickPromotionChatListBanner: missing primary action",
                      ])),
                  )
                  .sendLogs("quick-promotion-missing-banner-action"),
                null
              );
            var g = p.deepLink,
              h = p.text,
              y = p.universalLink,
              C = g != null ? g : y;
            if (C == null || C === "")
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "QuickPromotionChatListBanner: missing link",
                      ])),
                  )
                  .sendLogs("quick-promotion-missing-action-link"),
                null
              );
            var b = function (n) {
                (n.preventDefault(),
                  n.stopPropagation(),
                  (t.$QuickPromotionChatListBanner$p_2 = !0),
                  t.forceUpdate(),
                  l == null || l(),
                  o(
                    "WAWebQuickPromotionCollection",
                  ).QuickPromotionCollection.promotionDismissed(u.id));
              },
              v = o("WAWebDomSanitize").sanitizeQuickPromotionText(_),
              S = o("WAWebDomSanitize").doesQuickPromotionTextHaveTags(_),
              R = c.jsx("div", { dangerouslySetInnerHTML: { __html: v } }),
              L = c.jsx(r("WAWebNuxBannerText.react"), {
                subtitle: R,
                actionText: h,
              }),
              E =
                m != null
                  ? {
                      description: m.description,
                      iconLight:
                        (n = m.light) == null ? void 0 : n.elementValue,
                      iconDark: (a = m.dark) == null ? void 0 : a.elementValue,
                    }
                  : null;
            return (
              o(
                "WAWebQuickPromotionCollection",
              ).QuickPromotionCollection.promotionShown(u.id),
              c.jsx(r("WAWebButterbar.react"), {
                type: "quickPromotion",
                title: f,
                text: L,
                onDismiss: b,
                action: function () {
                  (l == null || l(),
                    o(
                      "WAWebQuickPromotionCollection",
                    ).QuickPromotionCollection.promotionPrimaryActionClicked(
                      u.id,
                    ));
                },
                customIcons: E,
                subtitleText: S ? void 0 : v,
                actionText: S ? void 0 : h,
              })
            );
          }),
          (n.shouldShow = function () {
            throw r("err")(
              "QuickPromotionChatListBanner#shouldShow should not be called",
            );
          }),
          n
        );
      })(o("WAWebNuxBanner").ExtendableNuxBanner);
    l.QuickPromotionChatListBanner = m;
  },
  98,
);
