__d(
  "WAWebNewsletterAdminFunnelLogging",
  [
    "WALogger",
    "WAWebChannelAdminWamEvent",
    "WAWebCommonNewsletterEnums",
    "WAWebPhotoPickType",
    "WAWebWamEnumChannelAdminAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e) {
          ((this.sessionId = Math.round(Math.random() * 1e9)),
            (this.eventSequence = 0),
            (this.flowType = e));
        }
        var n = t.prototype;
        return (
          (n.$1 = function () {
            this.eventSequence += 1;
          }),
          (n.logImageSetEvent = function (n) {
            if (n == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[logImageSetEvent] photoPickType is null",
                  ])),
              );
              return;
            }
            switch (n) {
              case o("WAWebPhotoPickType").PhotoPickType.Camera:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .CHANNEL_ICON_SET_CAMERA,
                );
                break;
              case o("WAWebPhotoPickType").PhotoPickType.Emoji:
              case o("WAWebPhotoPickType").PhotoPickType.Sticker:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .CHANNEL_ICON_SET_EMOJI_STICKER,
                );
                break;
              case o("WAWebPhotoPickType").PhotoPickType.WebSearch:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .CHANNEL_ICON_SET_WEB,
                );
                break;
              case o("WAWebPhotoPickType").PhotoPickType.Gallery:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .CHANNEL_ICON_SET_GALLERY,
                );
                break;
              default:
                break;
            }
          }),
          (n.logReactionSetting = function (t) {
            switch (t) {
              case o("WAWebCommonNewsletterEnums")
                .NewsletterReactionCodesSetting.Basic:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .REACTIONS_SET_TO_DEFAULT_EMOJI,
                );
                break;
              case o("WAWebCommonNewsletterEnums")
                .NewsletterReactionCodesSetting.All:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .REACTIONS_SET_TO_ANY_EMOJI,
                );
                break;
              case o("WAWebCommonNewsletterEnums")
                .NewsletterReactionCodesSetting.None:
                this.logEvent(
                  o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                    .REACTIONS_SET_TO_NONE_EMOJI,
                );
                break;
              default:
                break;
            }
          }),
          (n.logEvent = function (t) {
            (this.$2({
              sessionId: this.sessionId,
              eventSequence: this.eventSequence,
              flowType: this.flowType,
              action: t,
            }),
              this.$1());
          }),
          (n.$2 = function (t) {
            var e = t.action,
              n = t.eventSequence,
              r = t.flowType,
              a = t.sessionId,
              i = new (o("WAWebChannelAdminWamEvent").ChannelAdminWamEvent)({
                channelAdminSessionId: a,
                adminFlowActionSequenceNumber: n,
                adminFlowType: r,
                channelAdminAction: e,
              });
            i.commit();
          }),
          t
        );
      })();
    l.NewsletterAdminFunnelLogger = s;
  },
  98,
);
