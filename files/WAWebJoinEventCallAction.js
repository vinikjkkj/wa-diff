__d(
  "WAWebJoinEventCallAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebApiParse",
    "WAWebChatGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLobbyEntryPointType",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = 0.01;
    async function _(t) {
      var n = o("WAWebApiParse").parseCallLink(t.callLink);
      if (n != null) {
        var a = n.data,
          i = a.callType,
          l = a.token,
          s = i === "video",
          c = f(t.chat),
          d = await Promise.all([
            r("JSResourceForInteraction")("WAWebVoipCallBlockedModals")
              .__setRef("WAWebJoinEventCallAction")
              .load()
              .catch(function (e) {
                return (h(e, "blocked_modals"), null);
              }),
            r("JSResourceForInteraction")("WAWebVoipPreviewCallLinkAction")
              .__setRef("WAWebJoinEventCallAction")
              .load()
              .catch(function (e) {
                return (h(e, "preview_action"), null);
              }),
          ]),
          m = d[0],
          _ = d[1];
        if (m == null) {
          g();
          return;
        }
        try {
          if (await m.showCallBlockedModalIfNeeded()) return;
        } catch (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: event call blocked check failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-event-call-blocked-check-failed"),
            m.showCouldNotPlaceCallModal());
          return;
        }
        if (_ == null) {
          m.showCouldNotPlaceCallModal();
          return;
        }
        try {
          await _.previewCallLinkWithVoipInit({
            callLinkCode: l,
            isVideo: s,
            lobbyEntryPoint: c,
          });
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: event call-link preview failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-event-call-link-preview-failed", { sampling: p });
        }
      }
    }
    function f(e) {
      return e == null
        ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .EVENT_MESSAGE
        : o("WAWebChatGetters").getIsGroup(e)
          ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .EVENT_GROUP_CHAT
          : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .EVENT_INDIVIDUAL_CHAT;
    }
    function g() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    function h(e, t) {
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: event call-link resource load failed resource=",
              "",
            ])),
          t,
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("voip-event-call-resource-load-failed");
    }
    l.joinEventCall = _;
  },
  226,
);
