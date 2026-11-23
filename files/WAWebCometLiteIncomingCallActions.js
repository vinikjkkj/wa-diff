__d(
  "WAWebCometLiteIncomingCallActions",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCometLiteIncomingCallOwnership",
    "WAWebEnsureVoipInited",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    async function p(t, n, a) {
      await o("WAWebEnsureVoipInited").ensureVoipInitialized("incoming");
      var i = r("WAWebCallCollection").activeCall,
        l = (i == null ? void 0 : i.id) === t ? i : null,
        u = n,
        c = !1;
      if (u) {
        var d = await o("WAWebVoipAcquireMediaStream").queryPermissionStatus(
            !0,
          ),
          m = d.cameraPermission;
        m === "denied" && ((u = !1), (c = !0));
      }
      var p = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
        u,
        l,
        a,
      );
      if (!p) return f(t, l, a);
      if (
        o("WAWebCometLiteIncomingCallOwnership").isIncomingCallStale(
          t,
          l,
          r("WAWebCallCollection").activeCall,
          a,
        )
      )
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebCometLiteIncomingCall: incoming call is no longer current after the media permission check, skipping stale accept",
              ])),
          ),
          "stale"
        );
      var _ = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (
        o("WAWebCometLiteIncomingCallOwnership").isIncomingCallStale(
          t,
          l,
          r("WAWebCallCollection").activeCall,
          a,
        )
      )
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebCometLiteIncomingCall: incoming call is no longer current after loading the VoIP stack, skipping stale accept",
              ])),
          ),
          "stale"
        );
      if (_ == null || _.type !== "web")
        throw r("err")(
          "WAWebCometLiteIncomingCall: VoIP stack unavailable after permission check",
        );
      return (await _.acceptCall(!0, n && !c), "accepted");
    }
    async function _(e) {
      var t = r("WAWebCallCollection").activeCall,
        n = (t == null ? void 0 : t.id) === e ? t : null,
        a = r("WAWebCallCollection").get(e),
        i = a == null ? void 0 : a.beginUserEndedCallIntent(),
        l = !1;
      try {
        (await o("WAWebEnsureVoipInited").ensureVoipInitialized("incoming"),
          (l =
            (await g({
              isCallCurrent: function () {
                return o(
                  "WAWebCometLiteIncomingCallOwnership",
                ).isIncomingCallCurrent({
                  activeCall: r("WAWebCallCollection").activeCall,
                  callId: e,
                  originatingCall: n,
                });
              },
            })) === "rejected"));
      } finally {
        i == null || i(l);
      }
    }
    async function f(e, t, n) {
      var a;
      try {
        a = await g({
          isCallCurrent: function () {
            return !o(
              "WAWebCometLiteIncomingCallOwnership",
            ).isIncomingCallStale(e, t, r("WAWebCallCollection").activeCall, n);
          },
        });
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebCometLiteIncomingCall: failed to reject after media permissions were not acquired",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("comet-lite-incoming-permission-reject"),
          e
        );
      }
      return a === "stale"
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebCometLiteIncomingCall: incoming call is no longer current after the media permission check, skipping stale reject",
              ])),
          ),
          "stale")
        : a === "unavailable"
          ? (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebCometLiteIncomingCall: media permissions not acquired and VoIP stack unavailable, call not accepted",
                ])),
            ),
            "not_acquired")
          : (o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebCometLiteIncomingCall: media permissions not acquired, call not accepted",
                ])),
            ),
            "not_acquired");
    }
    async function g(e) {
      e === void 0 && (e = {});
      var t = e,
        n = t.isCallCurrent;
      if ((n == null ? void 0 : n()) === !1) return "stale";
      var r = await o("WAWebVoipStackInterface").getVoipStackInterface();
      return (n == null ? void 0 : n()) === !1
        ? "stale"
        : r == null || r.type !== "web"
          ? "unavailable"
          : (await r.rejectCallWithEndReason(
              o("WAWebVoipWaCallEnums").RejectEndReason.Self,
            ),
            "rejected");
    }
    ((l.acceptIncomingCall = p), (l.declineIncomingCall = _));
  },
  98,
);
