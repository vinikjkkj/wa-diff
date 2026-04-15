__d(
  "WAWebConversationPanelWrapper.react",
  [
    "cx",
    "fbt",
    "WAWebChatThemeGatingUtils",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebConversationPanel.react",
    "WAWebConversationPreview.react",
    "WAWebErrorBoundary.react",
    "WAWebGetConversationPanelKey",
    "WAWebUim",
    "WAWebUimUie.react",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebWallpaperState",
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
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        s = i.chatEntryPoint,
        d = i.focusCtx,
        p = i.msgCollection,
        y = i.notifyChatRendered,
        C = i.showPreview,
        b = i.threadId,
        v = i.updateOpenedChatInfo,
        S = f(null),
        R = o("useWAWebWallpaperState").useWallpaperState({
          chat: l,
          chatPreference: i.chatPreference,
          showPreview: C,
        }),
        L = R.backgroundWrapperStyle,
        E = R.chatThemeStyle,
        k = R.displayWallpaper,
        I = R.isDarkTheme,
        T = R.showDoodle,
        D = R.showStockWallpaper,
        x = R.stockWallpaperUrl,
        $ = g([]),
        P = $[0],
        N = $[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "show_overlay_animation",
        function (e) {
          (N(function (t) {
            return [].concat(t, [e]);
          }),
            window.setTimeout(function () {
              N(function (t) {
                return t.filter(function (t) {
                  return t !== e;
                });
              });
            }, 5e3));
        },
      );
      var M = function (t) {
        return S.current ? S.current.contains(t) : !1;
      };
      _(a, function () {
        return { containsDOMNode: M };
      });
      var w =
          C != null
            ? m.jsx(r("WAWebConversationPreview.react"), {
                previewType: C,
                title:
                  C === "theme"
                    ? u._(/*BTDS*/ "Theme preview")
                    : u._(/*BTDS*/ "Wallpaper preview"),
                wallpaper: k,
                showDoodle: T,
              })
            : null,
        A =
          l && p
            ? m.jsx(
                r("WAWebConversationPanel.react"),
                {
                  chat: l,
                  chatEntryPoint: s,
                  groupMetadata: l.groupMetadata,
                  focusCtx: d,
                  msgCollection: p,
                  threadId: b,
                  notifyChatRendered: y,
                  updateOpenedChatInfo: v,
                  wallpaper: k,
                  showDoodle: T,
                },
                r("WAWebGetConversationPanelKey")(l, b),
              )
            : null,
        F;
      return (
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? (F = w != null ? w : A)
          : (F = A != null ? A : w),
        m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
          name: "conversation-panel",
          type: "fatal",
          children: m.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ConversationPanel",
            uimState: o("WAWebUim").UIMState.INACTIVE,
            children: m.jsxs("div", {
              id: "main",
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((n = {}),
                (n._ajy0 = i.showPreview != null),
                (n._ajx_ = !0),
                n),
                (c || (c = r("stylex")))(h.pane, E),
              ),
              style: L,
              ref: S,
              "data-testid": void 0,
              children: [
                D &&
                  m.jsxs(m.Fragment, {
                    children: [
                      m.jsx("div", {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x18d0r48 x1xsqp64 x1ja2u2z",
                        style: {
                          backgroundImage: "url(" + (x != null ? x : "") + ")",
                        },
                        "data-testid": void 0,
                      }),
                      I &&
                        m.jsx("div", {
                          className:
                            "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x1ja2u2z",
                          "data-testid": void 0,
                        }),
                    ],
                  }),
                F,
                P,
              ],
            }),
          }),
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
