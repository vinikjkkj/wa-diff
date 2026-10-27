__d(
  "WAWebBizBroadcastCreationAttempt",
  [
    "WAWebBizBroadcastCreationState",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebEventEmitter",
    "WAWebFrontendChatGetters",
    "WAWebUIListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          n === void 0 && (n = !1),
          (r = e.call(this) || this),
          (r.$WAWebBizBroadcastCreationAttempt$p_2 = null),
          (r.$WAWebBizBroadcastCreationAttempt$p_3 = null),
          (r.$WAWebBizBroadcastCreationAttempt$p_4 = null),
          (r.$WAWebBizBroadcastCreationAttempt$p_5 = 0),
          (r.$WAWebBizBroadcastCreationAttempt$p_9 = function () {
            ((r.$WAWebBizBroadcastCreationAttempt$p_7 =
              r.$WAWebBizBroadcastCreationAttempt$p_8()),
              r.trigger("change"));
          }),
          (r.$WAWebBizBroadcastCreationAttempt$p_10 = function () {
            var e =
              r.$WAWebBizBroadcastCreationAttempt$p_1 == null
                ? null
                : o("WAWebFrontendChatGetters").getBroadcastMetadata(
                    r.$WAWebBizBroadcastCreationAttempt$p_1,
                  );
            if (e !== r.$WAWebBizBroadcastCreationAttempt$p_3) {
              var t;
              ((t = r.$WAWebBizBroadcastCreationAttempt$p_4) == null ||
                t.disengage(),
                (r.$WAWebBizBroadcastCreationAttempt$p_4 = null),
                (r.$WAWebBizBroadcastCreationAttempt$p_3 = e),
                e != null &&
                  ((r.$WAWebBizBroadcastCreationAttempt$p_4 = new (o(
                    "WAWebUIListener",
                  ).Listener)(
                    e,
                    "change:customAudienceFbid",
                    r.$WAWebBizBroadcastCreationAttempt$p_9,
                  )),
                  r.$WAWebBizBroadcastCreationAttempt$p_4.engage()));
            }
            r.$WAWebBizBroadcastCreationAttempt$p_9();
          }),
          (r.$WAWebBizBroadcastCreationAttempt$p_1 = t),
          (r.$WAWebBizBroadcastCreationAttempt$p_6 = n),
          (r.$WAWebBizBroadcastCreationAttempt$p_7 =
            r.$WAWebBizBroadcastCreationAttempt$p_8()),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getSnapshot = function () {
          return this.$WAWebBizBroadcastCreationAttempt$p_7;
        }),
        (n.hasProContext = function () {
          return this.$WAWebBizBroadcastCreationAttempt$p_6;
        }),
        (n.incObservers = function () {
          (this.$WAWebBizBroadcastCreationAttempt$p_5++,
            this.$WAWebBizBroadcastCreationAttempt$p_5 === 1 &&
              (this.listenTo(
                o("WAWebBizBroadcastProOnboardingStatus")
                  .bizBroadcastProNuxStateEmitter,
                "change",
                this.$WAWebBizBroadcastCreationAttempt$p_9,
              ),
              this.$WAWebBizBroadcastCreationAttempt$p_1 != null &&
                ((this.$WAWebBizBroadcastCreationAttempt$p_2 = new (o(
                  "WAWebUIListener",
                ).Listener)(
                  this.$WAWebBizBroadcastCreationAttempt$p_1,
                  "change:broadcastMetadata",
                  this.$WAWebBizBroadcastCreationAttempt$p_10,
                )),
                this.$WAWebBizBroadcastCreationAttempt$p_2.engage()),
              this.$WAWebBizBroadcastCreationAttempt$p_10()));
        }),
        (n.decObservers = function () {
          if (
            (this.$WAWebBizBroadcastCreationAttempt$p_5--,
            this.$WAWebBizBroadcastCreationAttempt$p_5 === 0)
          ) {
            var e, t;
            (this.stopListening(),
              (e = this.$WAWebBizBroadcastCreationAttempt$p_2) == null ||
                e.disengage(),
              (this.$WAWebBizBroadcastCreationAttempt$p_2 = null),
              (t = this.$WAWebBizBroadcastCreationAttempt$p_4) == null ||
                t.disengage(),
              (this.$WAWebBizBroadcastCreationAttempt$p_4 = null),
              (this.$WAWebBizBroadcastCreationAttempt$p_3 = null));
          }
        }),
        (n.$WAWebBizBroadcastCreationAttempt$p_8 = function () {
          var e,
            t = o(
              "WAWebBizBroadcastProOnboardingStatus",
            ).getBizBroadcastProNuxOnboardingStatus();
          return (
            (this.$WAWebBizBroadcastCreationAttempt$p_6 =
              this.$WAWebBizBroadcastCreationAttempt$p_6 ||
              o(
                "WAWebBizBroadcastCreationState",
              ).hasBizBroadcastProCreationContext(
                this.$WAWebBizBroadcastCreationAttempt$p_1,
                t,
              )),
            {
              audienceId:
                (e = this.$WAWebBizBroadcastCreationAttempt$p_1) == null ||
                (e = e.broadcastMetadata) == null
                  ? void 0
                  : e.customAudienceFbid,
              isReady: this.$WAWebBizBroadcastCreationAttempt$p_5 > 0,
              state: o(
                "WAWebBizBroadcastCreationState",
              ).getBizBroadcastCreationState(
                this.$WAWebBizBroadcastCreationAttempt$p_6,
                t,
              ),
            }
          );
        }),
        t
      );
    })(r("WAWebEventEmitter"));
    l.default = e;
  },
  98,
);
