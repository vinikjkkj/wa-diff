__d(
  "WAWebSharableEventDeleteJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBSharableEventDeletion",
    "WAWebRelayClient",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventDeleteJobMutation.graphql",
    "WAWebSharableEventInviteMessageRefreshJob",
    "WAWebSharableEventInviteStatus",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventDeleteJobMutation.graphql"));
    async function c(e) {
      var t;
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "delete",
      );
      var n = await o("WAWebRelayClient").commitMutation(
        u,
        { input: { event_id: e } },
        { environmentType: "whatsapp_web" },
      );
      if (
        (n == null || (t = n.xwa_event_delete) == null ? void 0 : t.success) !==
        !0
      )
        throw r("err")("[sharable_event] xwa_event_delete did not succeed");
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][delete] deleted eventId=",
            "",
          ])),
        e,
      ),
        await o("WAWebDBSharableEventDeletion").deleteSharableEventsLocally([
          e,
        ]),
        o("WAWebBackendApi").frontendFireAndForget("applySharableEventUpdate", {
          deletedEventIds: [e],
        }),
        await o(
          "WAWebSharableEventInviteMessageRefreshJob",
        ).markSharableEventInviteMessagesEnded(
          [e],
          o("WAWebSharableEventInviteStatus").SharableEventInviteStatus.Deleted,
        ));
    }
    l.deleteSharableEvent = c;
  },
  98,
);
