__d(
  "WAWebVoipStartEmptyCall",
  [
    "fbt",
    "WALogger",
    "WAWebApiParse",
    "WAWebEnsureVoipInited",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipAutoPopoutLoader",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCreateCallLink",
    "WAWebVoipStackInterface",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      var t;
      (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        t.closePreOpenedAutoPopout(e);
    }
    async function p(t) {
      var n,
        a = "not_sent",
        i =
          (n = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
            ? void 0
            : n.maybePreOpenAutoPopoutForVideoCall({
                cancelStart: function () {
                  return a === "sent" ? !1 : ((a = "cancelled"), !0);
                },
                isGroupCall: !0,
                isVideo: !0,
                needsCamera: !0,
                needsMicrophone: !0,
              });
      try {
        if (o("WAWebVoipStackInterface").getVoipStackInterface == null)
          throw r("err")("not in windows env");
        if (o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline())
          return (m(i), !1);
        var l = await o(
          "WAWebVoipAcquireMediaStream",
        ).checkVoipDevicePermissions(!0);
        if (!l) return (m(i), !1);
        var c = await Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            o("WAWebVoipCreateCallLink").createCallLink({ callType: "video" }),
            o("WAWebEnsureVoipInited").ensureVoipInitialized(),
          ]),
          p = c[0],
          _ = c[1],
          f = o("WAWebApiParse").parseCallLink(_);
        if (f == null)
          throw (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] start call failed: malformed link ",
                    "",
                  ])),
                _,
              )
              .sendLogs("voip-landing-page-start-call-link-malformed"),
            r("err")("malformed call link")
          );
        if (p == null) throw r("err")("voip stack interface unavailable");
        if (a === "cancelled") return !1;
        a = "sent";
        var g = o("WAWebFrontendContactGetters").getMyUsername(),
          h = await p.previewAndJoinCallLink(f.data.token, !0, t, g);
        if (h != null && h !== 0)
          throw r("err")("previewAndJoinCallLink refused with status " + h);
        return !0;
      } catch (e) {
        return (
          m(i),
          e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError ||
            (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: landing page: start call failed to create call link: ",
                    "",
                  ])),
                e,
              )
              .sendLogs(
                "voip-landing-page-start-call-call-link-creation-failed",
              ),
            o("WAWebToastManager").ToastManager.open(
              d.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
            )),
          !1
        );
      }
    }
    l.startEmptyCall = p;
  },
  226,
);
