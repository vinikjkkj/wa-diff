__d(
  "WAWebConversationPanelWrapper.react",
  [
    "cx",
    "fbt",
    "WAWebABProps",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebConversationPanel.react",
    "WAWebConversationPreview.react",
    "WAWebErrorBoundary.react",
    "WAWebGetConversationPanelKey",
    "WAWebThemeContext",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseChatTheme",
    "WAWebWallpaper",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useImperativeHandle,
      f = p.useRef,
      g = p.useState,
      h = { pane: { backgroundColor: "x1q80dvb", $$css: !0 } };
    function y(t) {
      var n,
        a,
        i,
        l,
        s = t.ref,
        d = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p = d.chat,
        y = d.chatEntryPoint,
        C = d.focusCtx,
        b = d.msgCollection,
        v = d.notifyChatRendered,
        S = d.showPreview,
        R = d.threadId,
        L = d.updateOpenedChatInfo,
        E = f(null),
        k = o("useWAWebModelValues").useModelValues(d.chatPreference, [
          "wallpaper",
          "showDoodle",
          "colorSchemeId",
        ]),
        I = o("useWAWebModelValues").useOptionalModelValues(d.chat, [
          "wallpaper",
          "showDoodle",
          "colorSchemeId",
        ]);
      function T() {
        var e;
        return S == null &&
          o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
          (e = I == null ? void 0 : I.wallpaper) != null
          ? e
          : k.wallpaper;
      }
      var D = g(T()),
        x = D[0],
        $ = D[1],
        P = g(T()),
        N = P[0],
        M = P[1],
        w = g([]),
        A = w[0],
        F = w[1];
      (o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        "wallpaper_preview",
        function (e) {
          if (
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper")
          ) {
            var t;
            $(
              (t = e != null ? e : I == null ? void 0 : I.wallpaper) != null
                ? t
                : k.wallpaper,
            );
          } else $(e != null ? e : k.wallpaper);
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "show_overlay_animation",
          function (e) {
            (F(function (t) {
              return [].concat(t, [e]);
            }),
              window.setTimeout(function () {
                F(function (t) {
                  return t.filter(function (t) {
                    return t !== e;
                  });
                });
              }, 5e3));
          },
        ));
      var O = o("WAWebChatThemeGatingUtils").isChatThemesEnabled(),
        B = g(null),
        W = B[0],
        q = B[1];
      o("useWAWebListener").useListener(
        r("WAWebChatPreferenceCollection"),
        "chat_theme_preview",
        function (e) {
          O && q(e);
        },
      );
      var U =
          O &&
          (n =
            (a = W != null ? W : I == null ? void 0 : I.colorSchemeId) != null
              ? a
              : k.colorSchemeId) != null
            ? n
            : null,
        V = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({
          isChatThemeEnabled: O,
        }),
        H = o("WAWebThemeContext").useIsDarkTheme(),
        G =
          U != null && V != null
            ? V.getChatTheme(U, H ? "dark" : "light")
            : null,
        z = T();
      N !== z && ($(z), M(z));
      var j = function (t) {
        return E.current ? E.current.contains(t) : !1;
      };
      _(s, function () {
        return { containsDOMNode: j };
      });
      var K = {};
      x !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
        (K.backgroundColor = x);
      var Q =
          S != null
            ? m.jsx(r("WAWebConversationPreview.react"), {
                previewType: S,
                title:
                  S === "theme"
                    ? u._(/*BTDS*/ "Theme preview")
                    : u._(/*BTDS*/ "Wallpaper preview"),
                wallpaper: x,
                showDoodle: k.showDoodle,
              })
            : null,
        X =
          p && b
            ? m.jsx(
                r("WAWebConversationPanel.react"),
                {
                  chat: p,
                  chatEntryPoint: y,
                  groupMetadata: p.groupMetadata,
                  focusCtx: C,
                  msgCollection: b,
                  threadId: R,
                  notifyChatRendered: v,
                  updateOpenedChatInfo: L,
                  wallpaper: x,
                  showDoodle:
                    o("WAWebABProps").getABPropConfigValue(
                      "use_per_chat_wallpaper",
                    ) && (i = I == null ? void 0 : I.showDoodle) != null
                      ? i
                      : k.showDoodle,
                },
                r("WAWebGetConversationPanelKey")(p, R),
              )
            : null,
        Y;
      return (
        o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper")
          ? (Y = Q != null ? Q : X)
          : (Y = X != null ? X : Q),
        m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "conversation-panel",
          type: "fatal",
          children: m.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ConversationPanel",
            uimState: o("WAWebUim").UIMState.INACTIVE,
            children: m.jsxs("div", {
              id: "main",
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((l = {}),
                (l._ajy0 = d.showPreview != null),
                (l._ajx_ = !0),
                l),
                (c || (c = r("stylex")))(h.pane, G),
              ),
              style: K,
              ref: E,
              "data-testid": void 0,
              children: [Y, A],
            }),
          }),
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
