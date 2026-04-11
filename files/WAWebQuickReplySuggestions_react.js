__d(
  "WAWebQuickReplySuggestions.react",
  [
    "Lexical",
    "PixWamLogger",
    "WALogger",
    "WATypeUtils",
    "WAWebBizSendOrderAction",
    "WAWebBusinessProfileCollection",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebListSuggestionsPanel.react",
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
    "react",
    "useWAWebForceUpdate",
    "useWAWebLexicalEvent",
    "useWAWebLexicalTypeAhead",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useMemo,
      f = d.useRef,
      g = 52,
      h = "/",
      y = 25;
    function C(e) {
      "use no forget";
      var t = e.ref,
        n = e.editor,
        a = e.kind,
        i = e.onHide,
        l = e.onSelect,
        s = o("useWAWebLexicalTypeAhead").useTypeAhead(n, h, {
          boundary: !0,
          maxQueryLength: y,
        }),
        u = s.clearQuery,
        d = s.omitQuery,
        C = s.query,
        v = s.replaceQuery,
        k = s.setQuery,
        I = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        T = f(!1),
        D = f(),
        x = f(!1);
      (o("useWAWebListener").useListener(
        o("WAWebQuickReplyCollection").QuickReplyCollection,
        "add remove change:shortcut",
        I,
      ),
        m(function () {
          o(
            "WAWebQuickReplyCollection",
          ).QuickReplyCollection.addSmartDefaultsIfNeeded();
        }, []));
      var $ = function (t, n) {
          return c.jsx(
            r("WAWebQuickRepliesPluginResult.react"),
            { quickReply: t.quickReply, query: t.query, selected: n },
            t.quickReply.id.toString(),
          );
        },
        P = function (t) {
          var e = t.quickReply;
          switch (
            ((D.current = e.message), o("WAWebQuickReplyGetters").getType(e))
          ) {
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PROFILE_SMART_DEFAULT:
              (u(), L(e));
              break;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.ADDRESS_SMART_DEFAULT:
              (u(), R(e));
              break;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.HOURS_SMART_DEFAULT:
              (u(), S(e));
              break;
            case o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT:
              (u(), E(e, T.current));
              break;
            default:
              (v(e.message, { select: !0 }), e.useOnce());
          }
          (o("WAWebQuickReplyGetters").getType(e) ===
          o("WAWebQuickReplyEnum").QuickReplyTypes.PIX_KEY_SMART_DEFAULT
            ? o("WAWebQuickRepliesPluginLogEvents").logPixSmartSelectEvent(
                T.current,
              )
            : e.isSmartDefault()
              ? o(
                  "WAWebQuickRepliesPluginLogEvents",
                ).logSmartDefaultSelectEvent(T.current)
              : o("WAWebQuickRepliesPluginLogEvents").logSelectEvent(T.current),
            (x.current = T.current),
            (T.current = !1),
            l == null || l());
        },
        N = function () {
          (d(), (T.current = !1));
        },
        M = _(
          function () {
            if (C == null) return null;
            var e = b(C, T.current);
            return e.length === 0
              ? null
              : e.map(function (e, t) {
                  return {
                    height: g,
                    itemKey: e.id,
                    contentKey: C,
                    index: t,
                    quickReply: e,
                    query: C,
                    selectable: !0,
                  };
                });
          },
          [C],
        );
      return (
        o("useWAWebLexicalEvent").useLexicalKeydownEvent(
          n,
          "Backspace",
          function () {
            var e = D.current;
            e &&
              n.getEditorState().read(function () {
                var t = o("Lexical").$getSelection();
                t &&
                  e === t.getTextContent() &&
                  o("WAWebQuickRepliesPluginLogEvents").logCancelEvent(
                    x.current,
                  );
              });
          },
          !0,
        ),
        p(t, function () {
          return {
            togglePanel: function () {
              C == null ? (k(""), (T.current = !0)) : (u(), (T.current = !1));
            },
          };
        }),
        c.jsx(r("WAWebListSuggestionsPanel.react"), {
          kind: a,
          editor: n,
          items: M,
          renderItem: $,
          onSelect: P,
          onDismiss: N,
          onHide: i,
        })
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      var n = o(
          "WAWebQuickReplyCollection",
        ).QuickReplyCollection.filterShortcuts(e),
        r = o("WAWebChatCollection").ChatCollection.getActive();
      return (
        (n = v(r, n)),
        n.length &&
          o("WAWebQuickRepliesPluginLogEvents").logFilterEvent(n.length, t),
        n
      );
    }
    function v(e, t) {
      return t.filter(function (t) {
        return !t.hideForChat(e);
      });
    }
    function S(t) {
      var n = o("WAWebChatCollection").ChatCollection.getActive();
      n &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendBusinessHours inside WAWebQuickReplySuggestions",
            ])),
        ),
        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(n, t.message),
        t.useOnce());
    }
    function R(e) {
      var t = o("WAWebChatCollection").ChatCollection.getActive(),
        n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        a = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          n,
        ),
        i = o("WAWebContactCollection").ContactCollection.get(n);
      if (!(!t || !a)) {
        var l = a.address,
          u = a.latitude,
          c = a.longitude;
        if (o("WATypeUtils").isNumber(u) && o("WATypeUtils").isNumber(c) && i) {
          var d = o("WAWebFrontendContactGetters").getDisplayName(i);
          (a.address && (d += "\n" + a.address),
            r("WAWebSendLocationChatAction")({
              chat: t,
              lat: u,
              lng: c,
              loc: d,
              meUser: n,
            }),
            e.useOnce());
        } else
          l &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "sendBusinessAddress inside WAWebQuickReplySuggestions",
                ])),
            ),
            o("WAWebSendTextMsgChatAction").sendTextMsgToChat(t, l),
            e.useOnce());
      }
    }
    function L(e) {
      var t = o("WAWebChatCollection").ChatCollection.getActive(),
        n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      if (n != null) {
        var a = o("WAWebContactCollection").ContactCollection.get(n);
        !t || !a || (r("WAWebSendContactsAction")([a], t), e.useOnce());
      }
    }
    function E(e, t) {
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
    l.default = C;
  },
  98,
);
