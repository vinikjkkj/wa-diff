__d(
  "WAWebVoipCallsTabCallInfoUtils",
  [
    "WAWebCallLogUtils",
    "WAWebChatLockUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipOngoingCallCollection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .map(function (e) {
          return e.id.toString();
        })
        .join("|");
    }
    function s(e) {
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
    function u(e) {
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
    function c(e) {
      return (
        o("WAWebChatLockUtils").chatIsAccessible(
          o("WAWebFrontendMsgGetters").getChat(e),
        ) &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.SEARCH,
          e.viewMode,
        ) &&
        !e.star &&
        !o("WAWebMsgGetters").getIsKept(e) &&
        o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.getByCallId(e.id.id) == null &&
        !u(e)
      );
    }
    function d(e, t) {
      var n;
      if (!c(e)) return null;
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
        l = o("WAWebCallLogUtils").mergeCallRecords(s([e].concat(t))),
        u =
          (n = l.find(function (e) {
            var t = e.mergedMsgs;
            return t.some(function (e) {
              return e.id.toString() === i;
            });
          })) == null
            ? void 0
            : n.mergedMsgs;
      return (u == null
        ? void 0
        : u.some(function (e) {
            return e.id.toString() === a;
          })) === !0
        ? u
        : null;
    }
    ((l.getCallLogMsgsKey = e),
      (l.getSortedUniqueCallLogMsgs = s),
      (l.getIsSelfOnlyCallLog = u),
      (l.getShouldShowInCallsTabCallLog = c),
      (l.getUpdatedCallLogInfoPropsForWrittenMsg = d));
  },
  98,
);
