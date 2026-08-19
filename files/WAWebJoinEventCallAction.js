__d(
  "WAWebJoinEventCallAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebApiParse",
    "WAWebChatGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = 0.01;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebApiParse").parseCallLink(e.callLink);
          if (t != null) {
            var a = t.data,
              i = a.callType,
              l = a.token,
              s = i === "video",
              m = o("WAWebChatGetters").getIsGroup(e.chat)
                ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                    .EVENT_GROUP_CHAT
                : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                    .EVENT_INDIVIDUAL_CHAT,
              p = yield (d || (d = n("Promise"))).all([
                r("JSResourceForInteraction")("WAWebVoipCallBlockedModals")
                  .__setRef("WAWebJoinEventCallAction")
                  .load()
                  .catch(function (e) {
                    return (y(e, "blocked_modals"), null);
                  }),
                r("JSResourceForInteraction")("WAWebVoipPreviewCallLinkAction")
                  .__setRef("WAWebJoinEventCallAction")
                  .load()
                  .catch(function (e) {
                    return (y(e, "preview_action"), null);
                  }),
              ]),
              f = p[0],
              g = p[1];
            if (f == null) {
              h();
              return;
            }
            try {
              if (yield f.showCallBlockedModalIfNeeded()) return;
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: event call blocked check failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-event-call-blocked-check-failed"),
                f.showCouldNotPlaceCallModal());
              return;
            }
            if (g == null) {
              f.showCouldNotPlaceCallModal();
              return;
            }
            try {
              yield g.previewCallLinkWithVoipInit({
                callLinkCode: l,
                isVideo: s,
                lobbyEntryPoint: m,
              });
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: event call-link preview failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-event-call-link-preview-failed", {
                  sampling: _,
                });
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        p.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Couldn't join call. Please try again."),
        }),
      );
    }
    function y(t, n) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: event call-link resource load failed resource=",
              "",
            ])),
          n,
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("voip-event-call-resource-load-failed");
    }
    l.joinEventCall = f;
  },
  226,
);
