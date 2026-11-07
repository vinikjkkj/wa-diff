__d(
  "WAWebVoipCallsTabCallInfoUtils",
  [
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebChatLockUtils",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipEventConstants",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOngoingTransferCalls",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        {
          isShown: function (t) {
            return o("WAWebChatLockUtils").chatIsAccessible(
              o("WAWebFrontendMsgGetters").getChat(t),
            );
          },
          triggers: [
            {
              source: function () {
                return o("WAWebCmd").Cmd;
              },
              events: ["chatlock:lock", "chatlock:unlock"],
              delivery: "immediate",
            },
            {
              source: function () {
                return o("WAWebChatCollection").ChatCollection;
              },
              events: ["change:isLocked"],
              delivery: "batched",
            },
          ],
        },
        {
          isShown: function (t) {
            return o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.SEARCH,
              t.viewMode,
            );
          },
          triggers: [
            {
              source: function () {
                return o("WAWebMsgCollection").MsgCollection;
              },
              events: ["change:viewMode"],
              delivery: "batchedCallLogs",
            },
          ],
        },
        {
          isShown: function (t) {
            return !t.star;
          },
          triggers: [
            {
              source: function () {
                return o("WAWebMsgCollection").MsgCollection;
              },
              events: ["change:star"],
              delivery: "batchedCallLogs",
            },
          ],
        },
        {
          isShown: function (t) {
            return !o("WAWebMsgGetters").getIsKept(t);
          },
          triggers: [
            {
              source: function () {
                return o("WAWebMsgCollection").MsgCollection;
              },
              events: ["change:kicState"],
              delivery: "batchedCallLogs",
            },
          ],
        },
        {
          isShown: function (t) {
            return (
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getByCallId(t.id.id) == null
            );
          },
          triggers: [
            {
              source: function () {
                return o("WAWebVoipOngoingCallCollection")
                  .WAWebVoipOngoingCallCollection;
              },
              events: ["add", "remove", "reset"],
              delivery: "immediate",
            },
          ],
        },
        {
          isShown: function (t) {
            return !o("WAWebVoipOngoingTransferCalls")
              .getOngoingTransferRootCallIds()
              .has(t.id.id);
          },
          triggers: [
            {
              source: function () {
                return o("WAWebVoipCallTransferEntryPointStore")
                  .WAWebVoipCallTransferEntryPointStore;
              },
              events: ["change"],
              delivery: "immediate",
            },
            {
              source: function () {
                return r("WAWebCallCollection");
              },
              events: [
                (e = o("WAWebVoipEventConstants")).getChangeEvent(
                  e.VoipCallCollectionEvents.ACTIVE_CALL,
                ),
                e.getChangeEvent(e.VoipCallCollectionEvents.ACTIVE_CALL_ID),
              ],
              delivery: "immediate",
            },
          ],
        },
        {
          isShown: function (t) {
            return !m(t);
          },
          triggers: [
            {
              source: function () {
                return o("WAWebMsgCollection").MsgCollection;
              },
              events: ["change:callParticipants"],
              delivery: "batchedCallLogs",
            },
          ],
        },
      ],
      u = s.flatMap(function (e) {
        var t = e.triggers;
        return t;
      });
    function c(e) {
      return e
        .map(function (e) {
          return e.id.toString();
        })
        .join("|");
    }
    function d(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          t.set(e.id.toString(), e);
        }),
        Array.from(t.values()).sort(function (e, t) {
          return t.t - e.t;
        })
      );
    }
    function m(e) {
      var t = e.callParticipants;
      if (t == null) return !1;
      var n = t.some(function (e) {
          return e.participant.isLid();
        }),
        r = n
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return !t.some(function (e) {
        return !e.participant.equals(r);
      });
    }
    function p(e) {
      return s.every(function (t) {
        var n = t.isShown;
        return n(e);
      });
    }
    function _(e, t) {
      var n;
      if (!p(e)) return null;
      var r = t[t.length - 1];
      if (r == null) return null;
      var a = e.id.toString();
      if (
        t.some(function (e) {
          return e.id.toString() === a;
        })
      )
        return null;
      var i = r.id.toString(),
        l = o("WAWebCallLogUtils").mergeCallRecords(d([e].concat(t))),
        s =
          (n = l.find(function (e) {
            var t = e.mergedMsgs;
            return t.some(function (e) {
              return e.id.toString() === i;
            });
          })) == null
            ? void 0
            : n.mergedMsgs;
      return (s == null
        ? void 0
        : s.some(function (e) {
            return e.id.toString() === a;
          })) === !0
        ? s
        : null;
    }
    ((l.CALLS_TAB_CALL_LOG_VISIBILITY_TRIGGERS = u),
      (l.getCallLogMsgsKey = c),
      (l.getSortedUniqueCallLogMsgs = d),
      (l.getShouldShowInCallsTabCallLog = p),
      (l.getUpdatedCallLogInfoPropsForWrittenMsg = _));
  },
  98,
);
