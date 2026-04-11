__d(
  "WAWebMexTextStatusUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactTextStatusBridge",
    "WAWebMexFetchTextStatusListJob",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.xwa2_notify_text_status_on_update,
            i = a.jid;
          if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            if (i == null)
              throw r("err")(
                "unexpected null id in xwa2_notify_text_status_on_update",
              );
            var l = o(
              "WAWebMexFetchTextStatusListJob",
            ).parseTextStatusServerResponse(a);
            try {
              yield o(
                "WAWebUpdateTextStatusForContact",
              ).updateTextStatusForContact(
                o("WAWebWidFactory").createWid(i),
                l.textStatusString,
                l.textStatusEmoji,
                l.textStatusEphemeralDuration,
                l.textStatusLastUpdateTime,
              );
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][textStatus] update notification failed",
                    ])),
                )
                .tags("mex")
                .sendLogs("mex-text-status-notification-update-fail");
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.xwa2_notify_text_status_on_update_side_sub,
            r = yield o("WAWebApiContact").getContactRecordByHash(n.hash);
          if (r == null)
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][textStatus] side-sub: contact hash not found",
                ])),
            );
          else {
            var a = o("WAWebWidFactory").createWid(r.id),
              i = r.textStatusLastUpdateTime;
            return o("WAWebContactTextStatusBridge")
              .getTextStatus(a, i)
              .then(function (e) {
                var t = e.emoji,
                  n = e.ephemeralDurationSeconds,
                  r = e.id,
                  a = e.lastUpdateTime,
                  i = e.text;
                return o(
                  "WAWebUpdateTextStatusForContact",
                ).updateTextStatusForContact(r, i, t, n, a);
              });
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.mexHandleTextStatusUpdate = u),
      (l.mexHandleTextStatusUpdateSideSub = d));
  },
  98,
);
