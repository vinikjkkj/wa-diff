__d(
  "WAWebQuickReplyPickerPlugin",
  [
    "fbt",
    "PixWamLogger",
    "WALogger",
    "WATypeUtils",
    "WAWebBizQuickRepliesDrawerLoadable",
    "WAWebBizSendOrderAction",
    "WAWebBusinessProfileCollection",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebFrontendContactGetters",
    "WAWebLexicalTypeAheadList.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebQuickRepliesPluginLogEvents",
    "WAWebQuickRepliesPluginResult.react",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyGetters",
    "WAWebSendContactsAction",
    "WAWebSendLocationChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPaymentActionTypes",
    "WDSButton.react",
    "react",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useRef,
      g = 52,
      h = "/",
      y = 25,
      C = 30;
    function b(e) {
      var t = e.composerAnchorRef,
        n = e.editor,
        a = e.onPickerClose,
        i = e.openedFromMenu,
        l = n,
        u = o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
        c = o("useWAWebLexicalTypeAhead").useTypeAhead(l, h, {
          boundary: !0,
          maxQueryLength: y,
        }),
        m = c.leadOffset,
        b = c.omitQuery,
        S = c.query,
        I = c.replaceQuery,
        T = f(),
        D = f(!1);
      p(function () {
        o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.addSmartDefaultsIfNeeded();
      }, []);
      var x = S != null && i === !0,
        $ = f(S);
      p(
        function () {
          var e = $.current != null;
          (($.current = S), e && S == null && (a == null || a()));
        },
        [S, a],
      );
      var P = function (t, n) {
          if (t.itemKey === "quick-replies-header")
            return d.jsxs(
              "div",
              {
                className:
                  "x889kno xf159sx x1a8lsjc xmzvs34 x6prxxf xhslqc4 x1yc453h x78zum5 x1qughib x6s0dn4",
                children: [
                  d.jsx("span", { children: s._(/*BTDS*/ "Quick replies") }),
                  d.jsx(r("WDSButton.react"), {
                    variant: "borderless",
                    type: "default",
                    size: "small",
                    Icon: u,
                    onPress: function () {
                      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                        d.jsx(
                          o("WAWebBizQuickRepliesDrawerLoadable")
                            .WAWebBizQuickRepliesDrawerLoadable,
                          {
                            onBack: o("WAWebDrawerManager").closeDrawerRight,
                            isInitialStep: !1,
                          },
                        ),
                      );
                    },
                    "aria-label": s._(/*BTDS*/ "Edit Quick Replies"),
                  }),
                ],
              },
              "quick-replies-header",
            );
          if (!t.quickReply) return d.jsx("div", {});
          var e = t.quickReply;
          return d.jsx(
            r("WAWebQuickRepliesPluginResult.react"),
            { quickReply: e, query: t.query, selected: n },
            e.id.toString(),
          );
        },
        N = function (t) {
          if (t.itemKey !== "quick-replies-header") {
            var e = t.quickReply;
            if (e) {
              switch (
                ((T.current = e.message),
                o("WAWebQuickReplyGetters").getType(e))
              ) {
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .PROFILE_SMART_DEFAULT:
                  (b(), E(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .ADDRESS_SMART_DEFAULT:
                  (b(), L(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .HOURS_SMART_DEFAULT:
                  (b(), R(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .PIX_KEY_SMART_DEFAULT:
                  (b(), k(e, x));
                  break;
                default:
                  (I(e.message, { select: !0 }), e.useOnce());
              }
              (o("WAWebQuickReplyGetters").getType(e) ===
              o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT
                ? o("WAWebQuickRepliesPluginLogEvents").logPixSmartSelectEvent(
                    x,
                  )
                : e.isSmartDefault()
                  ? o(
                      "WAWebQuickRepliesPluginLogEvents",
                    ).logSmartDefaultSelectEvent(x)
                  : o("WAWebQuickRepliesPluginLogEvents").logSelectEvent(x),
                (D.current = x));
            }
          }
        },
        M = function () {
          b();
        },
        w = _(
          function () {
            if (S == null) return null;
            var e = v(S, x);
            if (e.length === 0) return null;
            var t = {
                height: C,
                itemKey: "quick-replies-header",
                contentKey: "header",
                index: 0,
                quickReply: null,
                query: "",
                selectable: !1,
              },
              n = e.map(function (e, t) {
                return {
                  height: g,
                  itemKey: e.id,
                  contentKey: S,
                  index: t + 1,
                  quickReply: e,
                  query: S,
                  selectable: !0,
                };
              });
            return [t].concat(n);
          },
          [S, x],
        ),
        A = 600,
        F = (w != null ? w : []).map(function (e) {
          var t;
          return {
            renderFn: function (n) {
              return P(e, n);
            },
            onSelect: function () {
              return N(e);
            },
            width: A,
            height: (t = e.height) != null ? t : g,
            skipKeyboardNav: e.itemKey === "quick-replies-header",
          };
        }),
        O = F.findIndex(function (e) {
          return e.skipKeyboardNav === !1;
        });
      return d.jsx(r("WAWebLexicalTypeAheadList.react"), {
        leadOffset: m,
        items: F,
        onCancel: M,
        startingIndex: O,
        anchorElRef: x ? t : void 0,
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      var n = o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.filterShortcuts(e),
        r = o("WAWebChatCollection").ChatCollection.getActive();
      return (
        (n = S(r, n)),
        n.length &&
          o("WAWebQuickRepliesPluginLogEvents").logFilterEvent(n.length, t),
        n
      );
    }
    function S(e, t) {
      return t.filter(function (t) {
        return !t.hideForChat(e);
      });
    }
    function R(t) {
      var n = o("WAWebChatCollection").ChatCollection.getActive();
      n &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendBusinessHours inside WAWebQuickReplyPickerPlugin",
            ])),
        ),
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, t.message),
        t.useOnce());
    }
    function L(e) {
      var t = o("WAWebChatCollection").ChatCollection.getActive(),
        n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        a = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          n,
        ),
        i = o("WAWebContactCollection").ContactCollection.get(n);
      if (!(!t || !a)) {
        var l = a.address,
          s = a.latitude,
          c = a.longitude;
        if (o("WATypeUtils").isNumber(s) && o("WATypeUtils").isNumber(c) && i) {
          var d = o("WAWebFrontendContactGetters").getDisplayName(i);
          (a.address && (d += "\n" + a.address),
            r("WAWebSendLocationChatAction")({
              chat: t,
              lat: s,
              lng: c,
              loc: d,
              meUser: n,
            }),
            e.useOnce());
        } else
          l &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendBusinessAddress inside WAWebQuickReplyPickerPlugin",
                ])),
            ),
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, l),
            e.useOnce());
      }
    }
    function E(e) {
      var t = o("WAWebChatCollection").ChatCollection.getActive(),
        n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      if (n != null) {
        var a = o("WAWebContactCollection").ContactCollection.get(n);
        !t ||
          !a ||
          (r("WAWebSendContactsAction")({ chat: t, contacts: [a] }),
          e.useOnce());
      }
    }
    function k(e, t) {
      var n = o("WAWebChatCollection").ChatCollection.getActive();
      n &&
        (o(
          "WAWebBizSendOrderAction",
        ).sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(n),
        e.useOnce(),
        o("PixWamLogger").logPixSenderEvent(
          void 0,
          o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
          t ? "chat_attachment" : "chat",
          "quick_reply",
          "quick_reply",
          n,
          o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
        ));
    }
    l.default = b;
  },
  226,
);
