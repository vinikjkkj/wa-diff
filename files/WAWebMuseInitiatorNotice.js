__d(
  "WAWebMuseInitiatorNotice",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebMuseInitiatorNoticeModal.react",
        )
          .__setRef("WAWebMuseInitiatorNotice")
          .load();
      }, "MuseInitiatorNoticeModal");
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebBotTosIds").getMuseGroupInitiatorNoticeId();
          if (t == null) return !1;
          try {
            if ((yield f(), o("WAWebBotTos").hasAcceptedMuseGroupTos()))
              return !0;
            var a = yield m();
            return (yield o("WAWebModalManager").ModalManager.existsAsync())
              ? yield new (u || (u = n("Promise")))(function (e) {
                  o("WAWebModalManager").ModalManager.openSupportModal(
                    d.jsx(a, { noticeId: Number(t), onClosed: e }),
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
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
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
        })),
        g.apply(this, arguments)
      );
    }
    l.confirmMuseInitiatorNotice = p;
  },
  98,
);
