__d(
  "WAWebShareContentUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebGetSharedSessionId",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebShareContentUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumShareContentUserJourneyAction",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          (e === void 0 &&
            (e = o("WAWebGetSharedSessionId").getSharedSessionId()),
            (this.loggingEnabled = !1),
            (this.loggingEnabled = o("WAWebABProps").getABPropConfigValue(
              "wa_web_share_content_uj",
            )),
            (this.$1 = e));
        }
        var n = t.prototype;
        return (
          (n.funnelStart = function (t, n, r, a) {
            this.$5({
              uiSurface: t,
              action: o("WAWebWamEnumShareContentUserJourneyAction")
                .SHARE_CONTENT_USER_JOURNEY_ACTION.FUNNEL_START,
              forwardUserJourneyFunnelId: n,
              entryPoint: r,
              selectedMessages: a,
            });
          }),
          (n.contactPickerDisplayed = function () {
            this.$5({
              action: o("WAWebWamEnumShareContentUserJourneyAction")
                .SHARE_CONTENT_USER_JOURNEY_ACTION.CONTACT_PICKER_DISPLAYED,
            });
          }),
          (n.recipientsSelected = function (t, n) {
            this.$5({
              action: o("WAWebWamEnumShareContentUserJourneyAction")
                .SHARE_CONTENT_USER_JOURNEY_ACTION.RECIPIENTS_SELECTED,
              numberOfRecipients: t,
              hasStatusRecipient: n,
            });
          }),
          (n.contentShared = function (t) {
            this.$5({
              action: o("WAWebWamEnumShareContentUserJourneyAction")
                .SHARE_CONTENT_USER_JOURNEY_ACTION.CONTENT_SHARED,
              captionAdded: t,
            });
          }),
          (n.cancel = function () {
            this.$5({
              action: o("WAWebWamEnumShareContentUserJourneyAction")
                .SHARE_CONTENT_USER_JOURNEY_ACTION.CANCEL,
            });
          }),
          (n.$5 = function (n) {
            if (this.loggingEnabled) {
              var t = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId();
              if (t == null) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [share content] Unified session ID is null",
                    ])),
                );
                return;
              }
              u(n.action) &&
                this.$2 == null &&
                ((this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()),
                (this.$3 = n.uiSurface),
                (this.$4 = n.entryPoint));
              var a = this.$2;
              if (a != null) {
                var i = new (o(
                  "WAWebShareContentUserJourneyWamEvent",
                ).ShareContentUserJourneyWamEvent)();
                if (
                  ((i.appSessionId = this.$1),
                  (i.unifiedSessionId = t),
                  (i.userJourneyFunnelId = a),
                  this.$3 != null && (i.uiSurface = this.$3),
                  (i.userJourneyEventMs = o("WATimeUtils").unixTimeMs()),
                  (i.shareContentUserJourneyAction = n.action),
                  n.forwardUserJourneyFunnelId != null &&
                    (i.forwardUserJourneyFunnelId =
                      n.forwardUserJourneyFunnelId),
                  this.$4 != null &&
                    (i.shareContentUserJourneyEntryPoint = this.$4),
                  n.numberOfRecipients != null &&
                    (i.numberOfRecipients = n.numberOfRecipients),
                  n.hasStatusRecipient != null &&
                    (i.hasStatusRecipient = n.hasStatusRecipient),
                  n.captionAdded != null && (i.captionAdded = n.captionAdded),
                  n.selectedMessages != null)
                ) {
                  var l = n.selectedMessages;
                  ((i.mediaCount = r("countWhere")(l, function (e) {
                    return o("WAWebMsgGetters").getIsMedia(e);
                  })),
                    (i.hasFiles = l.some(function (e) {
                      var t;
                      return (
                        (e == null || (t = e.mediaData) == null
                          ? void 0
                          : t.type) ===
                        o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT
                      );
                    })));
                }
                (i.commit(),
                  c(n.action) &&
                    ((this.$2 = null), (this.$4 = null), (this.$3 = null)));
              }
            }
          }),
          t
        );
      })();
    function u(e) {
      return (
        e ===
        o("WAWebWamEnumShareContentUserJourneyAction")
          .SHARE_CONTENT_USER_JOURNEY_ACTION.FUNNEL_START
      );
    }
    function c(e) {
      return (
        e ===
          o("WAWebWamEnumShareContentUserJourneyAction")
            .SHARE_CONTENT_USER_JOURNEY_ACTION.CONTENT_SHARED ||
        e ===
          o("WAWebWamEnumShareContentUserJourneyAction")
            .SHARE_CONTENT_USER_JOURNEY_ACTION.CANCEL ||
        e ===
          o("WAWebWamEnumShareContentUserJourneyAction")
            .SHARE_CONTENT_USER_JOURNEY_ACTION.ABANDONED ||
        e ===
          o("WAWebWamEnumShareContentUserJourneyAction")
            .SHARE_CONTENT_USER_JOURNEY_ACTION.SAVE_STATUS
      );
    }
    var d = new s();
    l.ShareContentUserJourneyLogger = d;
  },
  98,
);
