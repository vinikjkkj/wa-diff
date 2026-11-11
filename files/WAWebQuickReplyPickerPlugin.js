__d(
  "WAWebQuickReplyPickerPlugin",
  [
    "fbt",
    "WALogger",
    "WATypeUtils",
    "WAWebBizQuickRepliesDrawerLoadable",
    "WAWebBizSendOrderAction",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebFrontendContactGetters",
    "WAWebLexicalTypeAheadList.react",
    "WAWebPixWamLogger",
    "WAWebQuickRepliesPluginLogEvents",
    "WAWebQuickRepliesPluginResult.react",
    "WAWebQuickReplyBusinessProfileUtils",
    "WAWebQuickReplyCollection",
    "WAWebQuickReplyEnum",
    "WAWebQuickReplyGetters",
    "WAWebSendContactsAction",
    "WAWebSendLocationChatAction",
    "WAWebSendTextMsgChatAction",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebWamEnumPaymentActionTypes",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "react",
    "useWAWebLexicalTypeAhead",
    "useWAWebSourceSnapshot",
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
        i = e.onQuickReplySelect,
        l = e.openedFromMenu,
        u = n,
        c = r("useWAWebSourceSnapshot")(
          o("WAWebQuickReplyCollection").QuickReplyCollection,
          "add remove change:shortcut",
          function (e) {
            return e.toArray();
          },
        ),
        m = r("WDSIconIcEdit.react"),
        b = o("useWAWebLexicalTypeAhead").useTypeAhead(u, h, {
          boundary: !0,
          maxQueryLength: y,
        }),
        S = b.leadOffset,
        I = b.omitQuery,
        T = b.query,
        D = b.replaceQuery,
        x = f(),
        $ = f(!1);
      p(function () {
        o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.addSmartDefaultsIfNeeded();
      }, []);
      var P = T != null && l === !0,
        N = f(T);
      p(
        function () {
          var e = N.current != null;
          ((N.current = T), e && T == null && (a == null || a()));
        },
        [T, a],
      );
      var M = function (t, n) {
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
                    Icon: m,
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
        w = function (t) {
          if (t.itemKey !== "quick-replies-header") {
            var e = t.quickReply;
            if (e) {
              switch (
                (i == null || i(),
                (x.current = e.message),
                o("WAWebQuickReplyGetters").getType(e))
              ) {
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .PROFILE_SMART_DEFAULT:
                  (I(), E(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .ADDRESS_SMART_DEFAULT:
                  (I(), L(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .HOURS_SMART_DEFAULT:
                  (I(), R(e));
                  break;
                case o("WAWebQuickReplyEnum").QuickReplyTypes
                  .PIX_KEY_SMART_DEFAULT:
                  (I(), k(e, P));
                  break;
                default:
                  (D(e.message, { select: !0 }), e.useOnce());
              }
              (o("WAWebQuickReplyGetters").getType(e) ===
              o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT
                ? o("WAWebQuickRepliesPluginLogEvents").logPixSmartSelectEvent(
                    P,
                  )
                : e.isSmartDefault()
                  ? o(
                      "WAWebQuickRepliesPluginLogEvents",
                    ).logSmartDefaultSelectEvent(P)
                  : o("WAWebQuickRepliesPluginLogEvents").logSelectEvent(P),
                ($.current = P));
            }
          }
        },
        A = function () {
          I();
        },
        F = _(
          function () {
            if (T == null) return null;
            var e = v(T, P, c);
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
                  contentKey: T,
                  index: t + 1,
                  quickReply: e,
                  query: T,
                  selectable: !0,
                };
              });
            return [t].concat(n);
          },
          [T, P, c],
        ),
        O = 600,
        B = (F != null ? F : []).map(function (e) {
          var t;
          return {
            renderFn: function (n) {
              return M(e, n);
            },
            onSelect: function () {
              return w(e);
            },
            width: O,
            height: (t = e.height) != null ? t : g,
            skipKeyboardNav: e.itemKey === "quick-replies-header",
          };
        }),
        W = B.findIndex(function (e) {
          return e.skipKeyboardNav === !1;
        });
      return d.jsx(r("WAWebLexicalTypeAheadList.react"), {
        leadOffset: S,
        items: B,
        onCancel: A,
        startingIndex: W,
        anchorElRef: P ? t : void 0,
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t, n) {
      var r = o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.filterShortcuts(e, n),
        a = o("WAWebChatCollection").ChatCollection.getActive();
      return (
        (r = S(a, r)),
        r.length &&
          o("WAWebQuickRepliesPluginLogEvents").logFilterEvent(r.length, t),
        r
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
      var t,
        n = o("WAWebChatCollection").ChatCollection.getActive(),
        a =
          (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
            ? t
            : o("WAWebUserUtils").getMeUserOrThrow(),
        i = o(
          "WAWebQuickReplyBusinessProfileUtils",
        ).getOwnQuickReplyBusinessProfile(),
        l = o("WAWebContactCollection").ContactCollection.get(a);
      if (!(!n || !i)) {
        var s = i.address,
          c = i.latitude,
          d = i.longitude;
        if (o("WATypeUtils").isNumber(c) && o("WATypeUtils").isNumber(d) && l) {
          var m = o("WAWebFrontendContactGetters").getDisplayName(l);
          (i.address != null && i.address !== "" && (m += "\n" + i.address),
            r("WAWebSendLocationChatAction")({
              chat: n,
              lat: c,
              lng: d,
              loc: m,
              meUser: a,
            }),
            e.useOnce());
        } else
          s != null &&
            s !== "" &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendBusinessAddress inside WAWebQuickReplyPickerPlugin",
                ])),
            ),
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, s),
            e.useOnce());
      }
    }
    function E(e) {
      var t,
        n = o("WAWebChatCollection").ChatCollection.getActive(),
        a =
          (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
            ? t
            : o("WAWebUserUtils").getMeUserOrThrow(),
        i = o("WAWebContactCollection").ContactCollection.get(a);
      !n ||
        !i ||
        (r("WAWebSendContactsAction")({
          chat: n,
          contacts: [i],
          options: [{ includePhoneNumber: !0, includeUsername: !0 }],
        }),
        e.useOnce());
    }
    function k(e, t) {
      var n = o("WAWebChatCollection").ChatCollection.getActive();
      n &&
        (o(
          "WAWebBizSendOrderAction",
        ).sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(n),
        e.useOnce(),
        o("WAWebPixWamLogger").logPixSenderEvent({
          actionTarget: void 0,
          chat: n,
          paymentActionType: o("WAWebWamEnumPaymentActionTypes")
            .PAYMENT_ACTION_TYPES.CLICK,
          pixData: o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
          previousScreenName: t ? "chat_attachment" : "chat",
          referral: "quick_reply",
          screen: "quick_reply",
        }));
    }
    l.default = b;
  },
  226,
);
