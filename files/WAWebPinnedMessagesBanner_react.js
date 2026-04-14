__d(
  "WAWebPinnedMessagesBanner.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebConversationBanner.react",
    "WAWebDashes.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebMsgCollection",
    "WAWebPinInChatCollection",
    "WAWebPinInChatMetricUtils",
    "WAWebPinMsgGatingUtils",
    "WAWebPinnedMessagesBannerBody.react",
    "WAWebPinnedMessagesUserJourneyLogger",
    "WAWebProtobufsE2E.pb",
    "WAWebSendPinMessageAction",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WDSHoverStateStyles",
    "WDSIconIcArrowForward.react",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebPinnedMessages",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useMemo,
      f = p.useState,
      g = {
        banner: { minHeight: "xuwdbiy", $$css: !0 },
        bannerUiRefresh: { backgroundColor: "x1h3rtpe", $$css: !0 },
        iconWrapper: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        icon: { display: "x1rg5ohu", color: "xhslqc4", $$css: !0 },
        bannerBody: { height: "xsdox4t", width: "xh8yej3", $$css: !0 },
        clearMinWidth: { minWidth: "xaaagfd", $$css: !0 },
        dashContainer: { width: "xfo62xy", $$css: !0 },
      };
    function h() {
      var e = r("WDSIconIcPushPin.react");
      return m.jsx(
        "div",
        babelHelpers.extends(
          {},
          (c || (c = r("stylex"))).props(
            g.iconWrapper,
            o("WAWebUISpacing").uiPadding.start6,
            o("WAWebUISpacing").uiPadding.end8,
          ),
          {
            children: m.jsx(e, {
              xstyle: g.icon,
              "aria-hidden": !0,
              testid: void 0,
            }),
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, u),
        i = a.chat,
        l = r("useWAWebPinnedMessages")(i),
        c = f(function () {
          return l.length > 0 ? l.length - 1 : null;
        }),
        d = c[0],
        p = c[1],
        y = f(!1),
        C = y[0],
        b = y[1];
      d != null && d > l.length - 1 && l.length > 0 && p(l.length - 1);
      var v = d == null ? null : l[d];
      o("useWAWebListener").useListener(
        o("WAWebPinInChatCollection").PinInChatCollection,
        ["add", "remove", "change"],
        function () {
          l.length > 0 && p(l.length - 1);
        },
      );
      var S = _(
          function () {
            if (l.length > 0 && v != null) {
              var e = v == null ? void 0 : v.parentMsgKey;
              if (e) return o("WAWebMsgCollection").MsgCollection.get(e);
            }
          },
          [l, v],
        ),
        R = function () {
          var e = l.length,
            t = e - 1 - (d != null ? d : 0);
          o("WAWebPinInChatMetricUtils").logPinInChatTapOnBanner({
            msg: S,
            chat: i,
            pin: v,
            pinCount: e,
            pinIndex: t,
          });
        },
        L = function () {
          l.length > 0 &&
            p(function (e) {
              return e == null ? l.length - 1 : (e + 1) % l.length;
            });
        },
        E = function () {
          if (v != null) {
            var e,
              t = v.parentMsgKey,
              n = o("WAWebChatMessageSearch").getSearchContext({
                chat: i,
                msgKey: (e = S == null ? void 0 : S.id) != null ? e : t,
                rootMsg: null,
              });
            (n && (n.slideToMsg = !0),
              o("WAWebCmd").Cmd.openChatAt({
                chat: i,
                msgContext: n,
                onSuccess: { mediaMsgToOpenInMediaViewer: S },
              }));
          }
        },
        k = function () {
          if ((L(), v != null)) {
            var t = o("WAWebMsgCollection").MsgCollection.get(v.parentMsgKey);
            t &&
              (new (o(
                "WAWebPinnedMessagesUserJourneyLogger",
              ).PinnedMessagesUserJourneyLogger)(i).pinBannerClickUnpin(t, v),
              o("WAWebSendPinMessageAction")
                .sendPinInChatMsg(
                  t,
                  o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                    .UNPIN_FOR_ALL,
                )
                .catch(function (t) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while unpinning a message: ",
                        "",
                      ])),
                    t,
                  );
                }));
          }
        },
        I = m.jsxs(r("WDSMenu.react"), {
          children: [
            m.jsx(r("WDSMenuItem.react"), {
              testid: void 0,
              Icon: r("WDSIconWdsIcPushPinSlash.react"),
              title: s._(/*BTDS*/ "Unpin"),
              onPress: k,
            }),
            m.jsx(r("WDSMenuItem.react"), {
              testid: void 0,
              Icon: r("WDSIconIcArrowForward.react"),
              title: s._(/*BTDS*/ "Go to message"),
              onPress: E,
            }),
          ],
        }),
        T = function (t) {
          (t.stopPropagation(), E(), L(), R());
        },
        D =
          o("WAWebPinMsgGatingUtils").isPinnedMessagesM2Enabled() &&
          l.length > 1,
        x = m.jsx(r("WAWebFlexItem.react"), {
          xstyle: g.dashContainer,
          children: D
            ? m.jsx(r("WAWebDashes.react"), {
                count: l.length,
                activeIndex: d != null ? d : 0,
              })
            : null,
        });
      return v == null
        ? null
        : m.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "PinnedMessagesBanner",
            children: m.jsx(r("WAWebConversationBanner.react"), {
              ref: n,
              xstyle: [
                g.banner,
                g.bannerUiRefresh,
                o("WAWebUISpacing").uiPadding.start16,
                o("WAWebUISpacing").uiPadding.vert0,
                o("WAWebUISpacing").uiPadding.end0,
                C &&
                  o("WDSHoverStateStyles").WDSHoverStateStyles
                    .genericHoverPersistent,
              ],
              onClick: T,
              onHoverChange: b,
              wdsMenuContent: I,
              children: m.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                grow: 1,
                children: [
                  m.jsx(r("WAWebFlexItem.react"), {
                    "aria-label": s._(/*BTDS*/ "Pinned message"),
                  }),
                  x,
                  m.jsx(r("WAWebFlexItem.react"), {
                    xstyle: g.clearMinWidth,
                    align: "center",
                    justify: "center",
                    children: m.jsx(h, {}),
                  }),
                  m.jsx(r("WAWebFlexItem.react"), {
                    xstyle: [
                      o("WAWebUISpacing").uiPadding.start14,
                      g.bannerBody,
                    ],
                    children: m.jsx(r("WAWebPinnedMessagesBannerBody.react"), {
                      pinInChat: v,
                    }),
                  }),
                ],
              }),
            }),
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = r("useWAWebPinnedMessages")(e);
      return t.length > 0;
    }
    ((l.PinnedMessagesBanner = y), (l.useWAWebPinnedMessagesBanner = C));
  },
  226,
);
