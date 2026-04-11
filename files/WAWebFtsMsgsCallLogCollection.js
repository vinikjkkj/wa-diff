__d(
  "WAWebFtsMsgsCallLogCollection",
  [
    "WAWebContactCollection",
    "WAWebFtsMsgsChatlessCollection",
    "WAWebMsgCollection",
    "WAWebPhoneNumberSearch",
    "WAWebUserPrefsMeUser",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var r = t.prototype;
      return (
        (r.getNextMsgs = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return o("WAWebMsgCollection").MsgCollection.getVoipCallLogMsgs(
                e,
                t,
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.filterMsgs = function (t, n) {
          var e = t.filter(function (e) {
              return (
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.getByCallId(e.id.id) == null
              );
            }),
            r = e.filter(function (e) {
              var t,
                n = e.callParticipants;
              if (n == null) return !0;
              var r =
                  (t = n.some(function (e) {
                    return e.participant.isLid();
                  })) != null
                    ? t
                    : !1,
                a = r
                  ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                  : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
              return n.some(function (e) {
                return !e.participant.equals(a);
              });
            });
          return n === ""
            ? r
            : r.filter(function (e) {
                var t,
                  r = o("WAWebPhoneNumberSearch").numberSearch(n),
                  a = o("WAWebContactCollection").ContactCollection.get(e.from);
                return (t = a == null ? void 0 : a.searchMatchExact(n, r)) !=
                  null
                  ? t
                  : !1;
              });
        }),
        t
      );
    })(r("WAWebFtsMsgsChatlessCollection"));
    l.default = e;
  },
  98,
);
