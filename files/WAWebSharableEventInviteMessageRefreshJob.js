__d(
  "WAWebSharableEventInviteMessageRefreshJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      p,
      _ = (e = n("cr:375")) != null ? e : {},
      f = _.ftsLightClient;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              e.length === 0 ||
              !o(
                "WAWebDBSharableEvent",
              ).canUseSharableEventInviteMessageStorage()
            )
          )
            try {
              var t = (yield (p || (p = n("Promise"))).all(
                e.map(function (e) {
                  return I(e);
                }),
              )).flat();
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              !o(
                "WAWebDBSharableEvent",
              ).canUseSharableEventInviteMessageStorage()
            )
              return;
            yield o(
              "WAWebDBSharableEventInviteMessage",
            ).recordSharableEventInviteMessages([{ msgKey: e, eventId: t }]);
            var n = yield o("WAWebDBSharableEvent").getSharableEvent(t);
            n != null && (yield g([n]));
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              e.length === 0 ||
              !o(
                "WAWebDBSharableEvent",
              ).canUseSharableEventInviteMessageStorage()
            )
          )
            try {
              var a = (yield (p || (p = n("Promise"))).all(
                  e.map(
                    o("WAWebDBSharableEventInviteMessage")
                      .getSharableEventInviteMessageKeys,
                  ),
                )).flat(),
                i = { sharableEventInviteStatus: t },
                l = (yield o("WAWebDBMsgUtils").getMsgsByMsgKey(a)).filter(
                  function (e) {
                    return (
                      e.type ===
                        o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE &&
                      e.sharableEventInviteStatus !== t
                    );
                  },
                );
              if (l.length === 0) return;
              (yield p.all(
                x(l).map(function (e) {
                  return o("WAWebDBProcessMessage").updateExistingMessages(
                    e.map(function (e) {
                      return babelHelpers.extends({}, e, i);
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
                  l.length,
                  t,
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "applySharableEventUpdate",
                  {
                    inviteMessages: l.map(function (e) {
                      return { msgKey: e.id.toString(), fields: i };
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBMsgUtils").getMsgsByMsgKey([e]),
            r = n[0],
            a = yield o("WAWebDBSharableEvent").getSharableEvent(t);
          return r == null ||
            (a == null ? void 0 : a.coverImageUrl) == null ||
            r.sharableEventInviteJpegThumbnail != null ||
            r.sharableEventInviteCoverImageHandle !== a.coverImageHandle
            ? null
            : a.coverImageUrl;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBMsgUtils").getMsgsByMsgKey([e]),
            r = n[0];
          r == null ||
            r.type !== o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE ||
            (yield o("WAWebDBProcessMessage").updateExistingMessages([
              babelHelpers.extends({}, r, {
                sharableEventInviteJpegThumbnail: t,
              }),
            ]));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebDBSharableEventInviteMessage",
          ).getSharableEventInviteMessageKeys(e.eventId);
          if (t.length === 0) return [];
          var r = k(e),
            a = (yield o("WAWebDBMsgUtils").getMsgsByMsgKey(
              [].concat(t),
            )).filter(function (t) {
              var n;
              return (
                t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE &&
                ((n = t.sharableEventInviteLastUpdatedTsUsec) != null ? n : 0) <
                  e.lastUpdatedTsUsec
              );
            });
          return (
            yield (p || (p = n("Promise"))).all(
              x(a).map(function (e) {
                return o("WAWebDBProcessMessage").updateExistingMessages(
                  e.map(function (e) {
                    return babelHelpers.extends({}, e, D(e, r));
                  }),
                );
              }),
            ),
            $(
              a.filter(function (e) {
                return (
                  e.sharableEventInviteTitle !== r.sharableEventInviteTitle
                );
              }),
            ),
            a.map(function (e) {
              return { msgKey: e.id.toString(), fields: D(e, r) };
            })
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return e.sharableEventInviteCoverImageHandle ===
        t.sharableEventInviteCoverImageHandle
        ? t
        : babelHelpers.extends({}, t, {
            sharableEventInviteJpegThumbnail: void 0,
          });
    }
    function x(e) {
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
    function $(e) {
      var t = e.flatMap(function (e) {
        return e.rowId == null ? [] : [String(e.rowId)];
      });
      if (!(t.length === 0 || f == null)) {
        var n = f;
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
    ((l.refreshSharableEventInviteMessages = g),
      (l.catchUpSharableEventInviteMessage = y),
      (l.markSharableEventInviteMessagesEnded = b),
      (l.getSharableEventInviteCoverToThumbnail = S),
      (l.saveSharableEventInviteThumbnail = L),
      (l.getSharableEventInviteLiveFields = k));
  },
  98,
);
