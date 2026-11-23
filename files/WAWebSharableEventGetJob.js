__d(
  "WAWebSharableEventGetJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventDeletion",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventGetJobQuery.graphql",
    "WAWebSharableEventInviteMessageRefreshJob",
    "WAWebSharableEventInviteStatus",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerError",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStoreInvitation",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = e !== void 0 ? e : (e = n("WAWebSharableEventGetJobQuery.graphql"));
    async function p(e) {
      var t;
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "get",
      );
      var n = await o("WAWebDBSharableEvent").getSharableEvent(e),
        r = o("WATimeUtils").monotonicTime(),
        a = await f(e, n).catch(async function (t) {
          throw (
            o("WAWebSharableEventServerError").getSharableEventErrorKind(t) ===
              o("WAWebSharableEventServerError").SharableEventErrorKind
                .Unavailable && (await _(e)),
            t
          );
        }),
        i = a.reader,
        l = a.result;
      if (
        o("WAWebDBSharableEventDeletion").wasSharableEventDeletedSince(e, r)
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][get] eventId=",
              " deleted during the request, not stored",
            ])),
          e,
        );
        return;
      }
      var c = await g(l, i),
        d = await h(e, l, i),
        m = (t = d == null ? void 0 : d.row) != null ? t : c;
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][get] eventId=",
            " metadataChanged=",
            " invitees=",
            "",
          ])),
        e,
        String(c != null),
        d == null ? "unchanged" : String(d.invitees.length),
      ),
        m != null &&
          o("WAWebBackendApi").frontendFireAndForget(
            "applySharableEventUpdate",
            d == null
              ? { events: [m], inviteeLists: [] }
              : o(
                  "WAWebSharableEventStoreInvitation",
                ).toSharableEventInvitationUpdate(e, d),
          ));
    }
    async function _(e) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[sharable_event][get] eventId=",
            " unavailable, deleting it locally",
          ])),
        e,
      );
      try {
        await o("WAWebDBSharableEventDeletion").deleteSharableEventsLocally([
          e,
        ]);
      } catch (t) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][get] eventId=",
                " deleting the unavailable event locally failed",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("sharable-event-delete-unavailable-failed");
        return;
      }
      (o("WAWebBackendApi").frontendFireAndForget("applySharableEventUpdate", {
        deletedEventIds: [e],
      }),
        await o(
          "WAWebSharableEventInviteMessageRefreshJob",
        ).markSharableEventInviteMessagesEnded(
          [e],
          o("WAWebSharableEventInviteStatus").SharableEventInviteStatus.Deleted,
        ));
    }
    async function f(e, t) {
      var n = await o(
          "WAWebSharableEventServerClient",
        ).querySharableEventServer(m, {
          input: {
            event_id: e,
            event_last_updated_ts_usec:
              t == null ? void 0 : t.lastUpdatedTsUsec,
            invitation_last_updated_ts_usec:
              t == null ? void 0 : t.lastInvitationUpdatedTsUsec,
          },
        }),
        a = n.reader,
        i = n.response,
        l = i == null ? void 0 : i.xwa_event_get;
      if (l == null)
        throw r("err")("[sharable_event] xwa_event_get returned no event");
      return { reader: a, result: l };
    }
    async function g(e, t) {
      var n =
          e.is_event_metadata_unchanged === !0 ? null : e.privacy_aware_event,
        r =
          n == null
            ? null
            : o("WAWebSharableEventServerRows").readSharableEventMetadata(t, n);
      if (r == null) return null;
      var a = await o(
          "WAWebDBSharableEventMetadata",
        ).upsertSharableEventMetadataIfNewer([r], { insertMissing: !0 }),
        i = a[0];
      return i == null ? void 0 : i.row;
    }
    function h(e, t, n) {
      var r =
        t.is_invitation_metadata_unchanged === !0
          ? null
          : t.privacy_aware_invitation;
      return r == null
        ? Promise.resolve(null)
        : o("WAWebSharableEventStoreInvitation").storeSharableEventInvitation(
            e,
            n,
            r,
          );
    }
    l.syncSharableEvent = p;
  },
  98,
);
