__d(
  "WAWebPinInChatCollection",
  [
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebFrontendPinInChatGetters",
    "WAWebPinInChatModel",
    "WAWebPinMsgConstants",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.byChatId = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.chatId;
          })),
          (t.byIsFailedByMe = o("WAWebCollectionUtils").aggregated(
            function (e) {
              return (
                o("WAWebFrontendPinInChatGetters").getIsFailed(e) &&
                o("WAWebUserPrefsMeUser").isMeAccount(e.sender)
              );
            },
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.deleteByParentMessageKey = function (t) {
          this.remove(s(t));
        }),
        (n.getByMsgKey = function (t) {
          return this.findFirst(function (e) {
            return e.msgKey.equals(t);
          });
        }),
        (n.getByParentMsgKey = function (t) {
          return this.get(s(t));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebPinInChatModel").PinInChat),
      (e.comparator = function (e, t) {
        return Number(t.t) - Number(e.t);
      }));
    function s(e) {
      return "!!" + e.toString();
    }
    function u(e) {
      var t, n;
      if (e.senderTimestampMs == null) return !1;
      var r = e.pinExpiryDuration != null,
        a =
          ((t = e.t) != null ? t : Math.floor(e.senderTimestampMs / 1e3)) +
          ((n = e.pinExpiryDuration) != null ? n : 0);
      return r && a < o("WATimeUtils").unixTime();
    }
    function c(e) {
      return (
        e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN &&
        e.parentMsgKey != null &&
        !u(e)
      );
    }
    var d = new e();
    ((l.getPinInChatId = s),
      (l.isPinExpired = u),
      (l.isPinValid = c),
      (l.PinInChatCollection = d));
  },
  98,
);
