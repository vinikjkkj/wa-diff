__d(
  "WAWebVoipHandleCallAutoSwitch",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEventConstants",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferredCallRegistry",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentCallId,
            n = e.oldCallId,
            a = r("WAWebCallCollection").activeCall;
          if (a == null) {
            var i = r("WAWebCallCollection").takeLastEndedCall(n);
            i != null
              ? yield g(i, t)
              : o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallAutoSwitch ignored, no active call",
                    ])),
                );
            return;
          }
          if (a.id !== n) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch ignored, ",
                  " is not the active call",
                ])),
              n,
            );
            return;
          }
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: CallAutoSwitch ",
                " -> ",
                "",
              ])),
            n,
            t,
          ),
            C(a, t),
            (a.id = t),
            a.trigger("change:id"),
            r("WAWebCallCollection").trigger(
              o("WAWebVoipEventConstants").getChangeEvent(
                o("WAWebVoipEventConstants").VoipCallCollectionEvents
                  .ACTIVE_CALL_ID,
              ),
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (C(e, t)) {
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch with no active call, ending ",
                  " that replaced ",
                  "",
                ])),
              t,
              e.id,
            ),
              o("WAWebVoipTransferredCallRegistry").markTransferredCallEnded(t),
              o("WAWebVoipTransferredCallRegistry").markTransferredCallFailed(
                t,
              ));
            try {
              var n = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (y()) {
                var a;
                (o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallAutoSwitch: a call started here, not ending ",
                      "",
                    ])),
                  t,
                ),
                  ((a = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : a.id) === t &&
                    o(
                      "WAWebVoipTransferredCallRegistry",
                    ).clearTransferredCallEndMarks(t));
                return;
              }
              yield n == null
                ? void 0
                : n.endCall(
                    o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                    !0,
                  );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallAutoSwitch: ending the unseen segment failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-call-auto-switch-end-unseen-segment-failed");
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null
      );
    }
    function C(e, t) {
      return (
        o("WAWebVoipTransferredCallRegistry").rekeyTransferredCall(e.id, t) ||
        b(e, t)
      );
    }
    function b(t, n) {
      var r = t.outgoing
        ? o("WAWebUserPrefsMeUser").getMeUserOrThrow()
        : t.peerJid;
      return r == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallAutoSwitch: no peer for ",
                  ", call log not carried over",
                ])),
              t.id,
            )
            .sendLogs("voip-call-auto-switch-no-root"),
          !1)
        : (o("WAWebVoipTransferredCallRegistry").registerTransferredCall(n, {
            rootCallId: t.id,
            rootCallCreatorWid: r,
          }),
          !0);
    }
    l.handleCallAutoSwitch = _;
  },
  98,
);
