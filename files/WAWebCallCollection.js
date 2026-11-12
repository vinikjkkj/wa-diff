__d(
  "WAWebCallCollection",
  [
    "WALogger",
    "WAWebCallCollectionUtils",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebPttAudioChannels",
    "WAWebVoipEventConstants",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$CallCollectionImpl$p_1 = new Map()),
            (e.pendingOffers = {}),
            (e.pendingVoipCapChecks = {}),
            (e.isInConnectedCall = !1),
            (e.lastActiveCall = null),
            (e.lastEndedCall = null),
            (e.pendingCallLink = null),
            (e.pendingOutgoingCall = null),
            (e.pendingCallTransferLobby = null),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function (t) {
            return this.$CallCollectionImpl$p_1.get(t);
          }),
          (a.add = function (t, n) {
            if (n != null && n.merge) return this.merge(t);
            var e = o("WAWebCallCollectionUtils").createCallModel(t);
            return (this.$CallCollectionImpl$p_1.set(t.id, e), e);
          }),
          (a.merge = function (t) {
            var e = this.get(t.id);
            return e == null
              ? this.add(t)
              : o("WAWebCallCollectionUtils").assignCallPropsToCall(e, t);
          }),
          (a.remove = function (t) {
            this.$CallCollectionImpl$p_1.delete(t.id);
          }),
          (a.getModelsArray = function () {
            return Array.from(this.$CallCollectionImpl$p_1.values());
          }),
          (a.reset = function () {
            this.$CallCollectionImpl$p_1.clear();
          }),
          (a.delete = function () {
            (this.$CallCollectionImpl$p_1.clear(), this.stopListening());
          }),
          (a.setPendingCallLink = function (t) {
            ((this.pendingCallLink = t),
              t != null && this.$CallCollectionImpl$p_3(),
              this.trigger("change:pendingCallLink", t));
          }),
          (a.setPendingOutgoingCall = function (t) {
            ((this.pendingOutgoingCall = t),
              t != null && this.$CallCollectionImpl$p_3(),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .PENDING_OUTGOING_CALL,
                ),
                t,
              ));
          }),
          (a.setPendingCallTransferLobby = function (t) {
            ((this.pendingCallTransferLobby = t),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .PENDING_CALL_TRANSFER_LOBBY,
                ),
                t,
              ));
          }),
          (a.$CallCollectionImpl$p_3 = function () {
            var e;
            ((e = this.pendingCallTransferLobby) == null
              ? void 0
              : e.isJoining) === !1 && this.setPendingCallTransferLobby(null);
          }),
          (a.processIncomingCall = function (n, r, a) {
            if (this.get(n) != null)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:processIncomingCall: call already exists",
                    ])),
                ),
                this.get(n)
              );
            var t = o("WAWebCallCollectionUtils").buildCallPropsFromOffer(
              n,
              r,
              a,
            );
            return this.add(t);
          }),
          (a.setActiveCall = function (t) {
            var e;
            if (
              ((this.lastEndedCall = t == null ? this.activeCall : null),
              (this.activeCall = t),
              t != null && this.$CallCollectionImpl$p_3(),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .ACTIVE_CALL,
                ),
                t,
              ),
              (e = this.$CallCollectionImpl$p_2) == null || e.call(this),
              t != null)
            ) {
              var n;
              ((this.$CallCollectionImpl$p_2 = o(
                "WAWebPttAudioChannels",
              ).MainAudioChannel.claim(this, r("WAWebNoop"))),
                (n = this.lastActiveCall) != null &&
                  n.shouldShowPostCallSurvey &&
                  (this.lastActiveCall.shouldShowPostCallSurvey = !1),
                this.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallCollectionEvents
                      .SHOULD_SHOW_POST_CALL_SURVEY,
                  ),
                ));
            }
          }),
          (a.takeLastEndedCall = function (t) {
            var e = this.lastEndedCall;
            return (e == null ? void 0 : e.id) !== t
              ? null
              : ((this.lastEndedCall = null), e);
          }),
          (a.setIsInConnectedCall = function (t) {
            this.isInConnectedCall !== t &&
              ((this.isInConnectedCall = t),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .IS_IN_CONNECTED_CALL,
                ),
                t,
              ));
          }),
          (a.setCallFailedReason = function (t) {
            this.activeCall != null &&
              ((this.activeCall.callFailedReason = t),
              (this.lastActiveCall = this.activeCall));
          }),
          (a.setShouldShowPostCallSurveyOnLastActiveCall = function (t) {
            var e;
            this.lastActiveCall != null &&
              ((e = this.lastActiveCall) == null
                ? void 0
                : e.shouldShowPostCallSurvey) !== t &&
              ((this.lastActiveCall.shouldShowPostCallSurvey = t),
              this.trigger(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .SHOULD_SHOW_POST_CALL_SURVEY,
                ),
              ));
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
