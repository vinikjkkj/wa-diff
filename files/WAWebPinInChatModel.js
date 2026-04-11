__d(
  "WAWebPinInChatModel",
  [
    "WATimeUtils",
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebFrontendPinInChatGetters",
    "WAWebPinInChatGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.msgKey = o("WAWebBaseModel").prop()),
            (t.parentMsgKey = o("WAWebBaseModel").prop()),
            (t.senderTimestampMs = o("WAWebBaseModel").prop()),
            (t.t = o("WAWebBaseModel").prop()),
            (t.sender = o("WAWebBaseModel").prop()),
            (t.chatId = o("WAWebBaseModel").prop()),
            (t.pinType = o("WAWebBaseModel").prop()),
            (t.pinExpiryDuration = o("WAWebBaseModel").prop()),
            (t.id = o("WAWebBaseModel").prop()),
            (t.read = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.delete = function () {
            (e.prototype.delete.call(this),
              o("WAWebPinInChatGetters").clearPinInChatGetterCacheFor(this),
              o(
                "WAWebFrontendPinInChatGetters",
              ).clearFrontendPinInChatGetterCacheFor(this));
          }),
          (n.leftExpirationTime = function () {
            var e,
              t,
              n =
                ((e = this.t) != null
                  ? e
                  : Math.floor(this.senderTimestampMs / 1e3)) +
                ((t = this.pinExpiryDuration) != null ? t : 0);
            return n - o("WATimeUtils").unixTime();
          }),
          t
        );
      })(o("WAWebAddOnModel").AddOnBaseModel),
      s = o("WAWebBaseModel").defineModel(e);
    l.PinInChat = s;
  },
  98,
);
