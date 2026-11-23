__d(
  "WAWebFtsMsgsCallLogCollection",
  [
    "WAWebCallLogUtils",
    "WAWebContactCollection",
    "WAWebFtsMsgsChatlessCollection",
    "WAWebMsgQueryUtils",
    "WAWebPhoneNumberSearch",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getNextMsgs = async function (t) {
          var e = t.count,
            n = t.msgKeyAnchor;
          return o("WAWebMsgQueryUtils").getVoipCallLogMsgs(e, n);
        }),
        (n.filterMsgs = function (t, n) {
          var e = t.filter(function (e) {
            var t,
              n = e.callParticipants;
            if (
              n == null ||
              (n.length === 0 && o("WAWebCallLogUtils").getIsOneToOneCallLog(e))
            )
              return !0;
            var r =
                (t = n.some(function (e) {
                  return e.participant.isLid();
                })) != null
                  ? t
                  : !1,
              a = r
                ? o("WAWebUserUtils").getMeLidUserOrThrow()
                : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            return n.some(function (e) {
              return !e.participant.equals(a);
            });
          });
          return n === ""
            ? e
            : e.filter(function (e) {
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
