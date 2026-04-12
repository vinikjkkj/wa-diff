__d(
  "WAWebVoipCallsTabScheduleCallModal.react",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebEventsCreateEventModalFlow.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "fbs",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo;
    function m(t) {
      var n = t.targetChat,
        a = d(function () {
          return p();
        }, []),
        i = d(
          function () {
            return _(a);
          },
          [a],
        ),
        l = o("WAWebContactCollection").ContactCollection.getMeContact();
      return l == null
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "schedule call modal: me contact is null",
                ])),
            )
            .sendLogs("schedule-call-me-null"),
          null)
        : c.jsx(r("WAWebEventsCreateEventModalFlow.react"), {
            isScheduledCall: !0,
            callLinkRequired: !0,
            preselectedChat: n != null ? n : null,
            prefilledData: {
              eventName: r("fbs")
                ._(/*BTDS*/ "{user-full-name}\u2019s call", [
                  r("fbs")._param(
                    "user-full-name",
                    o("WAWebFrontendContactGetters").getDisplayName(l),
                  ),
                ])
                .toString(),
              eventCallType: "video",
              eventStartTime: a,
              eventEndTime: i,
            },
            title: s._(/*BTDS*/ "Schedule call"),
            nameInputTitle: s._(/*BTDS*/ "Call name"),
            nameInputPlaceholder: s._(/*BTDS*/ "Call name"),
            showLocationField: !1,
            showRemoveEndTimeButton: !0,
            onSend: o("WAWebDrawerManager").closeDrawerLeft,
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      var e = o("WATimeUtils").unixTime(),
        t = 1800,
        n = Math.ceil(e / t) * t;
      return o("WATimeUtils").castToUnixTime(n);
    }
    function _(e) {
      return o("WATimeUtils").futureUnixTime(
        30 * o("WATimeUtils").MINUTE_SECONDS,
        e,
      );
    }
    function f(e) {
      o("WAWebModalManager").ModalManager.open(c.jsx(m, { targetChat: e }));
    }
    ((l.WAWebVoipCallsTabScheduleCallModal = m),
      (l.handleScheduleCallForChat = f));
  },
  226,
);
