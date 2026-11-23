__d(
  "WAWebSharableEventLeaveJob",
  [
    "WALogger",
    "WAWebRelayClient",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventInviteStatus",
    "WAWebSharableEventLeaveJobMutation.graphql",
    "WAWebSharableEventNotificationPersistJob",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventLeaveJobMutation.graphql"));
    async function d(e) {
      var t;
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "leave",
      );
      var n = await o("WAWebRelayClient").commitMutation(
        c,
        { input: { event_id: e } },
        { environmentType: "whatsapp_web" },
      );
      if (
        (n == null || (t = n.xwa_event_remove_self_invitation) == null
          ? void 0
          : t.success) !== !0
      )
        throw r("err")(
          "[sharable_event] xwa_event_remove_self_invitation did not succeed",
        );
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][leave] left eventId=",
            "",
          ])),
        e,
      );
      try {
        await o(
          "WAWebSharableEventNotificationPersistJob",
        ).deleteSharableEventFromNotification(
          e,
          o("WAWebSharableEventInviteStatus").SharableEventInviteStatus.Left,
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][leave] eventId=",
                " local cleanup failed",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("sharable-event-leave-cleanup-failed");
      }
    }
    l.leaveSharableEvent = d;
  },
  98,
);
