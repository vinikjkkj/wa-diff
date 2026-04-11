__d(
  "WAWebPinnedMessagesUserJourneyLogger",
  [
    "WAWebMessagingUserJourneyLogger",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumActionType",
    "WAWebWamEnumTsSurface",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.messageMenuClickPin = function (t) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.MESSAGE_MENU,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .CLICK_PIN,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
          });
        }),
        (n.pinMessageReplacementDialogDisplay = function () {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .PIN_MESSAGE_REPLACEMENT_DIALOG,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .DISPLAY,
          });
        }),
        (n.pinMessageReplacementDialogContinue = function () {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .PIN_MESSAGE_REPLACEMENT_DIALOG,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .CONTINUE,
          });
        }),
        (n.pinMessageExpirationDialogDisplay = function (t) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .PIN_MESSAGE_EXPIRATION_DIALOG,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .DISPLAY,
            pinInChatExpirySecs: t,
          });
        }),
        (n.pinMessageExpirationDialogSelectOption = function (t) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .PIN_MESSAGE_EXPIRATION_DIALOG,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .SELECT_OPTION,
            pinInChatExpirySecs: t,
          });
        }),
        (n.pinMessageExpirationDialogClickPin = function (t) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .PIN_MESSAGE_EXPIRATION_DIALOG,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .CLICK_PIN,
            pinInChatExpirySecs: t,
          });
        }),
        (n.messageMenuClickUnpin = function (t, n) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.MESSAGE_MENU,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .CLICK_UNPIN,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            pinInChatExpirySecs: n == null ? void 0 : n.leftExpirationTime(),
            isSelfPin:
              n == null
                ? void 0
                : n.sender.equals(
                    o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  ),
          });
        }),
        (n.pinBannerClickUnpin = function (t, n) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_BANNER,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .CLICK_UNPIN,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            pinInChatExpirySecs: n == null ? void 0 : n.leftExpirationTime(),
            isSelfPin:
              n == null
                ? void 0
                : n.sender.equals(
                    o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  ),
          });
        }),
        (n.pinMessageExpirationDialogUnpin = function (t, n) {
          this.commitEvent({
            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.PIN_BANNER,
            messagingActionType: o("WAWebWamEnumActionType").ACTION_TYPE
              .CLICK_UNPIN,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            pinInChatExpirySecs: n == null ? void 0 : n.leftExpirationTime(),
            isSelfPin:
              n == null
                ? void 0
                : n.sender.equals(
                    o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  ),
          });
        }),
        t
      );
    })(o("WAWebMessagingUserJourneyLogger").MessagingUserJourneyLogger);
    l.PinnedMessagesUserJourneyLogger = e;
  },
  98,
);
