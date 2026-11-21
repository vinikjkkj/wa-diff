__d(
  "WAWebInboundMsgQueueLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebInboundMsgQueueGating",
    "WAWebInboundMsgQueueODS",
    "WAWebLazyLoadedRetriable",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e4,
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebInboundMsgQueueRegistration")
          .__setRef("WAWebInboundMsgQueueLoader")
          .load();
      }, "WAWebInboundMsgQueueRegistration");
    function m() {
      var t = o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled();
      (!t &&
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.InboundMsgQueueMayHaveRows,
        ) !== !0) ||
        (t &&
          (o(
            "WAWebInboundMsgPersistedQueueAdapter",
          ).armInboundMsgQueueRegistration(),
          o("WAPromiseTimeout")
            .promiseTimeout(
              o(
                "WAWebInboundMsgPersistedQueueAdapter",
              ).whenInboundMsgQueueRegistered(),
              c,
            )
            .catch(p)),
        d()
          .then(function (e) {
            var t = e.registerInboundMsgQueue;
            return t().catch(_);
          })
          .catch(function (t) {
            (f(),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[inbound-msg-queue] failed to load",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("messaging")
                .sendLogs("inbound-msg-queue-load-failed"),
              o(
                "WAWebInboundMsgPersistedQueueAdapter",
              ).settleInboundMsgQueueRegistration({ timedOut: !0 }));
          }));
    }
    function p() {
      o(
        "WAWebInboundMsgPersistedQueueAdapter",
      ).isInboundMsgQueueRegistrationPending() &&
        (o("WAWebInboundMsgQueueODS").logInboundMsgQueueRegistrationTimeout(),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] registration timed out",
              ])),
          )
          .tags("messaging")
          .sendLogs("inbound-msg-queue-registration-timeout"),
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).settleInboundMsgQueueRegistration({ timedOut: !0 }));
    }
    function _(e) {
      (f(),
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] registration failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("messaging")
          .sendLogs("inbound-msg-queue-registration-failed"),
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).settleInboundMsgQueueRegistration({ timedOut: !0 }));
    }
    function f() {
      o(
        "WAWebInboundMsgPersistedQueueAdapter",
      ).isInboundMsgQueueRegistrationPending() &&
        o("WAWebInboundMsgQueueODS").logInboundMsgQueueRegistrationFailed();
    }
    l.maybeRegisterInboundMsgQueue = m;
  },
  98,
);
