__d(
  "WAWebSharableEventInviteMessageRefreshJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBSharableEvent",
    "WAWebDBSharableEventInviteMessage",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebSharableEventCallLinkUrl",
    "WAWebSharableEventInviteStatus",
    "cr:375",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (e = n("cr:375")) != null ? e : {},
      _ = p.ftsLightClient;
    async function f(e) {
      if (
        !(
          e.length === 0 ||
          !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage()
        )
      )
        try {
          var t = (
            await Promise.all(
              e.map(function (e) {
                return v(e);
              }),
            )
          ).flat();
          if (t.length === 0) return;
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][invite_message] rewrote ",
                " for ",
                " events",
              ])),
            t.length,
            e.length,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { inviteMessages: t },
            ));
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite_message] rewriting failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sharable-event-invite-message-rewrite-failed");
        }
    }
    async function g(e, t) {
      try {
        if (
          !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage()
        )
          return;
        await o(
          "WAWebDBSharableEventInviteMessage",
        ).recordSharableEventInviteMessages([{ msgKey: e, eventId: t }]);
        var n = await o("WAWebDBSharableEvent").getSharableEvent(t);
        n != null && (await f([n]));
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][invite_message] catching up failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sharable-event-invite-message-catch-up-failed");
      }
    }
    async function h(e, t) {
      if (
        !(
          e.length === 0 ||
          !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage()
        )
      )
        try {
          var n = (
              await Promise.all(
                e.map(
                  o("WAWebDBSharableEventInviteMessage")
                    .getSharableEventInviteMessageKeys,
                ),
              )
            ).flat(),
            a = { sharableEventInviteStatus: t },
            i = (await o("WAWebDBMsgUtils").getMsgsByMsgKey(n)).filter(
              function (e) {
                return (
                  e.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE &&
                  e.sharableEventInviteStatus !== t
                );
              },
            );
          if (i.length === 0) return;
          (await Promise.all(
            R(i).map(function (e) {
              return o("WAWebDBProcessMessage").updateExistingMessages(
                e.map(function (e) {
                  return babelHelpers.extends({}, e, a);
                }),
              );
            }),
          ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite_message] marked ",
                  " ",
                  "",
                ])),
              i.length,
              t,
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              {
                inviteMessages: i.map(function (e) {
                  return { msgKey: e.id.toString(), fields: a };
                }),
              },
            ));
        } catch (e) {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite_message] marking ",
                  " failed",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sharable-event-invite-message-mark-failed");
        }
    }
    async function y(e, t) {
      var n = await o("WAWebDBMsgUtils").getMsgsByMsgKey([e]),
        r = n[0],
        a = await o("WAWebDBSharableEvent").getSharableEvent(t);
      return a == null
        ? { kind: "event-not-stored" }
        : r == null ||
            a.coverImageUrl == null ||
            r.sharableEventInviteJpegThumbnail != null ||
            r.sharableEventInviteCoverImageHandle !== a.coverImageHandle
          ? { kind: "none" }
          : { kind: "cover", url: a.coverImageUrl };
    }
    async function C(e, t) {
      var n = await o("WAWebDBMsgUtils").getMsgsByMsgKey([e]),
        r = n[0];
      r == null ||
        r.type !== o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE ||
        (await o("WAWebDBProcessMessage").updateExistingMessages([
          babelHelpers.extends({}, r, { sharableEventInviteJpegThumbnail: t }),
        ]));
    }
    function b(e) {
      var t, n;
      return {
        sharableEventInviteTitle: e.name,
        sharableEventInviteStartTime: e.startTsSec,
        sharableEventInviteEndTime: e.endTsSec,
        sharableEventInviteCallLink:
          (t = o("WAWebSharableEventCallLinkUrl").getSharableEventCallLinkUrl(
            e,
          )) != null
            ? t
            : void 0,
        sharableEventInviteStatus:
          (n = o(
            "WAWebSharableEventInviteStatus",
          ).toSharableEventInviteStatusFromStored(e.status)) != null
            ? n
            : void 0,
        sharableEventInviteLocationName: e.locationName,
        sharableEventInviteCoverImageHandle: e.coverImageHandle,
        sharableEventInviteLastUpdatedTsUsec: e.lastUpdatedTsUsec,
      };
    }
    async function v(e) {
      var t = await o(
        "WAWebDBSharableEventInviteMessage",
      ).getSharableEventInviteMessageKeys(e.eventId);
      if (t.length === 0) return [];
      var n = b(e),
        r = (await o("WAWebDBMsgUtils").getMsgsByMsgKey([].concat(t))).filter(
          function (t) {
            var n;
            return (
              t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE &&
              ((n = t.sharableEventInviteLastUpdatedTsUsec) != null ? n : 0) <
                e.lastUpdatedTsUsec
            );
          },
        );
      return (
        await Promise.all(
          R(r).map(function (e) {
            return o("WAWebDBProcessMessage").updateExistingMessages(
              e.map(function (e) {
                return babelHelpers.extends({}, e, S(e, n));
              }),
            );
          }),
        ),
        L(
          r.filter(function (e) {
            return e.sharableEventInviteTitle !== n.sharableEventInviteTitle;
          }),
        ),
        r.map(function (e) {
          return { msgKey: e.id.toString(), fields: S(e, n) };
        })
      );
    }
    function S(e, t) {
      return e.sharableEventInviteCoverImageHandle ===
        t.sharableEventInviteCoverImageHandle
        ? t
        : babelHelpers.extends({}, t, {
            sharableEventInviteJpegThumbnail: void 0,
          });
    }
    function R(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.id.remote.toString();
          t.set(r, [].concat((n = t.get(r)) != null ? n : [], [e]));
        }),
        Array.from(t.values())
      );
    }
    function L(e) {
      var t = e.flatMap(function (e) {
        return e.rowId == null ? [] : [String(e.rowId)];
      });
      if (!(t.length === 0 || _ == null)) {
        var n = _;
        n.purge(t)
          .then(function () {
            return n.addToIndexingTable(t);
          })
          .then(function () {
            return n.index();
          })
          .catch(r("WAWebNoop"));
      }
    }
    ((l.refreshSharableEventInviteMessages = f),
      (l.catchUpSharableEventInviteMessage = g),
      (l.markSharableEventInviteMessagesEnded = h),
      (l.getSharableEventInviteCoverToThumbnail = y),
      (l.saveSharableEventInviteThumbnail = C),
      (l.getSharableEventInviteLiveFields = b));
  },
  98,
);
