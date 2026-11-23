__d(
  "WAWebMuseInitiatorNotice",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebMuseInitiatorNoticeModal.react",
        )
          .__setRef("WAWebMuseInitiatorNotice")
          .load();
      }, "MuseInitiatorNoticeModal");
    async function m() {
      var t = o("WAWebBotTosIds").getMuseGroupInitiatorNoticeId();
      if (t == null) return !1;
      try {
        if ((await p(), o("WAWebBotTos").hasAcceptedMuseGroupTos())) return !0;
        var n = await d();
        return (await o("WAWebModalManager").ModalManager.existsAsync())
          ? await new Promise(function (e) {
              o("WAWebModalManager").ModalManager.openSupportModal(
                c.jsx(n, { noticeId: Number(t), onClosed: e }),
              );
            })
          : !1;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[MuseInitiatorNotice] failed to confirm the notice",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("muse-initiator-notice-confirm-failed"),
          !1
        );
      }
    }
    async function p() {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebBotTos").refreshMuseGroupTosNotices(),
          o("WAWebBotTos").GROUP_NOTICE_CONFIRMATION_TIMEOUT_MS,
          "Muse group notice refresh timed out",
        );
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[MuseInitiatorNotice] notice stage refresh failed: ",
              "",
            ])),
          String(e),
        );
      }
    }
    l.confirmMuseInitiatorNotice = m;
  },
  98,
);
