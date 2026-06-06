__d(
  "WAWebMexTextStatusUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebContactTextStatusBridge",
    "WAWebMexFetchTextStatusListJob",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
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
          await o("WAWebUpdateTextStatusForContact").updateTextStatusForContact(
            {
              contactId: o("WAWebWidFactory").createWid(i),
              textString: l.textStatusString,
              emoji: l.textStatusEmoji,
              ephemeralDuration: l.textStatusEphemeralDuration,
              newUpdateTime: l.textStatusLastUpdateTime,
              source: "mex-notification",
            },
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
    }
    async function c(e, t) {
      var n = t.xwa2_notify_text_status_on_update_side_sub,
        r = await o("WAWebApiContact").getContactRecordByHash(n.hash);
      if (r == null) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][textStatus] side-sub: contact hash not found",
              ])),
          )
          .sendLogs("mex-text-status-side-sub-hash-not-found", {
            sampling: 0.1,
          });
        return;
      }
      var a = o("WAWebWidFactory").createWid(r.id),
        i = r.textStatusLastUpdateTime,
        l = await o("WAWebContactTextStatusBridge").getTextStatus(a, i);
      return l.error != null
        ? l.error instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          l.error.statusCode === 401
          ? o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
              contactId: a,
              textString: null,
              emoji: null,
              ephemeralDuration: null,
              newUpdateTime: o("WAWebTextStatusUtils")
                .TEXT_STATUS_NOT_AUTHORIZED,
              source: "mex-notification-side-sub",
            })
          : void 0
        : o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
            contactId: l.id,
            textString: l.text,
            emoji: l.emoji,
            ephemeralDuration: l.ephemeralDurationSeconds,
            newUpdateTime: l.lastUpdateTime,
            source: "mex-notification-side-sub",
          });
    }
    ((l.mexHandleTextStatusUpdate = u),
      (l.mexHandleTextStatusUpdateSideSub = c));
  },
  98,
);
