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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo;
    function m(t) {
      var n = o("react-compiler-runtime").c(20),
        a = t.targetChat,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = p()), (n[0] = i))
        : (i = n[0]);
      var l = i,
        u;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = _(l)), (n[1] = u))
        : (u = n[1]);
      var d = u,
        m,
        f,
        g,
        h,
        y,
        C;
      if (n[2] !== a) {
        C = Symbol.for("react.early_return_sentinel");
        e: {
          var b = o("WAWebContactCollection").ContactCollection.getMeContact();
          if (b == null) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "schedule call modal: me contact is null",
                  ])),
              )
              .sendLogs("schedule-call-me-null"),
              (C = null));
            break e;
          }
          ((m = r("WAWebEventsCreateEventModalFlow.react")),
            (f = !0),
            (g = !0),
            (h = a != null ? a : null),
            (y = r("fbs")
              ._(/*BTDS*/ "{user-full-name}\u2019s call", [
                r("fbs")._param(
                  "user-full-name",
                  o("WAWebFrontendContactGetters").getDisplayName(b),
                ),
              ])
              .toString()));
        }
        ((n[2] = a),
          (n[3] = m),
          (n[4] = f),
          (n[5] = g),
          (n[6] = h),
          (n[7] = y),
          (n[8] = C));
      } else
        ((m = n[3]),
          (f = n[4]),
          (g = n[5]),
          (h = n[6]),
          (y = n[7]),
          (C = n[8]));
      if (C !== Symbol.for("react.early_return_sentinel")) return C;
      var v;
      n[9] !== y
        ? ((v = {
            eventName: y,
            eventCallType: "video",
            eventStartTime: l,
            eventEndTime: d,
          }),
          (n[9] = y),
          (n[10] = v))
        : (v = n[10]);
      var S, R, L;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Schedule call")),
          (S = s._(/*BTDS*/ "Call name")),
          (R = s._(/*BTDS*/ "Call name")),
          (n[11] = S),
          (n[12] = R),
          (n[13] = L))
        : ((S = n[11]), (R = n[12]), (L = n[13]));
      var E;
      return (
        n[14] !== m || n[15] !== f || n[16] !== g || n[17] !== h || n[18] !== v
          ? ((E = c.jsx(m, {
              isScheduledCall: f,
              callLinkRequired: g,
              preselectedChat: h,
              prefilledData: v,
              title: L,
              nameInputTitle: S,
              nameInputPlaceholder: R,
              showLocationField: !1,
              showRemoveEndTimeButton: !0,
              onSend: o("WAWebDrawerManager").closeDrawerLeft,
            })),
            (n[14] = m),
            (n[15] = f),
            (n[16] = g),
            (n[17] = h),
            (n[18] = v),
            (n[19] = E))
          : (E = n[19]),
        E
      );
    }
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
