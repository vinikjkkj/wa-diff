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
      g = m.useState,
      h = 52,
      y = "/",
      C = 25,
      b = 30;
    function v(e) {
      var t = e.editor,
        n = t,
        a = o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
        i = o("useWAWebLexicalTypeAhead").useTypeAhead(n, y, {
          boundary: !0,
          maxQueryLength: C,
        }),
        l = i.leadOffset,
        u = i.omitQuery,
        c = i.query,
        m = i.replaceQuery,
        v = f(!1),
        R = f(),
        T = f(!1),
        D = g(!1),
        x = D[0],
        $ = D[1];
      (p(function () {
        o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.addSmartDefaultsIfNeeded();
      }, []),
        p(
          function () {
            $(v.current);
          },
          [c],
        ));
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
                    Icon: a,
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
                ((R.current = e.message),
                o("WAWebQuickReplyGetters").getType(e))
              ) {
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .PROFILE_SMART_DEFAULT:
                  (u(), k(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .ADDRESS_SMART_DEFAULT:
                  (u(), E(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .HOURS_SMART_DEFAULT:
                  (u(), L(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .PIX_KEY_SMART_DEFAULT:
                  (u(), I(e, x));
                  break;
                default:
                  (m(e.message, { select: !0 }), e.useOnce());
              }
              (o("WAWebQuickReplyGetters").getType(e) ===
              o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT
                ? o("WAWebQuickRepliesPluginLogEvents").logPixSmartSelectEvent(
                    v.current,
                  )
                : e.isSmartDefault()
                  ? o(
                      "WAWebQuickRepliesPluginLogEvents",
                    ).logSmartDefaultSelectEvent(v.current)
                  : o("WAWebQuickRepliesPluginLogEvents").logSelectEvent(
                      v.current,
                    ),
                (T.current = v.current),
                (v.current = !1));
            }
          }
        },
        M = function () {
          (u(), (v.current = !1));
        },
        w = _(
          function () {
            if (c == null) return null;
            var e = S(c, x);
            if (e.length === 0) return null;
            var t = {
                height: b,
                itemKey: "quick-replies-header",
                contentKey: "header",
                index: 0,
                quickReply: null,
                query: "",
                selectable: !1,
              },
              n = e.map(function (e, t) {
                return {
                  height: h,
                  itemKey: e.id,
                  contentKey: c,
                  index: t + 1,
                  quickReply: e,
                  query: c,
                  selectable: !0,
                };
              });
            return [t].concat(n);
          },
          [c, x],
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
            height: (t = e.height) != null ? t : h,
            skipKeyboardNav: e.itemKey === "quick-replies-header",
          };
        }),
        O = F.findIndex(function (e) {
          return e.skipKeyboardNav === !1;
        });
      return d.jsx(r("WAWebLexicalTypeAheadList.react"), {
        leadOffset: l,
        items: F,
        onCancel: M,
        startingIndex: O,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      var n = o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.filterShortcuts(e),
        r = o("WAWebChatCollection").ChatCollection.getActive();
      return (
        (n = R(r, n)),
        n.length &&
          o("WAWebQuickRepliesPluginLogEvents").logFilterEvent(n.length, t),
        n
      );
    }
    function R(e, t) {
      return t.filter(function (t) {
        return !t.hideForChat(e);
      });
    }
    function L(t) {
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
    function E(e) {
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
    function k(e) {
      var t = o("WAWebChatCollection").ChatCollection.getActive(),
        n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      if (n != null) {
        var a = o("WAWebContactCollection").ContactCollection.get(n);
        !t || !a || (r("WAWebSendContactsAction")([a], t), e.useOnce());
      }
    }
    function I(e, t) {
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
    l.default = v;
  },
  226,
);
