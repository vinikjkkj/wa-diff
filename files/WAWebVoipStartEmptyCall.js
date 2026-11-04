__d(
  "WAWebVoipStartEmptyCall",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebApiParse",
    "WAWebEnsureVoipInited",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipAutoPopoutLoader",
    "WAWebVoipCreateCallLink",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      var t;
      (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        t.closePreOpenedAutoPopout(e);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = "not_sent",
            l =
              (a = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
                ? void 0
                : a.maybePreOpenAutoPopoutForVideoCall({
                    cancelStart: function () {
                      return i === "sent" ? !1 : ((i = "cancelled"), !0);
                    },
                    isGroupCall: !0,
                    isVideo: !0,
                    needsCamera: !0,
                    needsMicrophone: !0,
                  });
          try {
            if (o("WAWebVoipStackInterface").getVoipStackInterface == null)
              throw r("err")("not in windows env");
            var d = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(!0);
            if (!d) return (p(l), !1);
            var _ = yield (c || (c = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                o("WAWebVoipCreateCallLink").createCallLink({
                  callType: "video",
                }),
                o("WAWebEnsureVoipInited").ensureVoipInitialized(),
              ]),
              f = _[0],
              g = _[1],
              h = o("WAWebApiParse").parseCallLink(g);
            if (h == null)
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] start call failed: malformed link ",
                        "",
                      ])),
                    g,
                  )
                  .sendLogs("voip-landing-page-start-call-link-malformed"),
                r("err")("malformed call link")
              );
            if (f == null) throw r("err")("voip stack interface unavailable");
            if (i === "cancelled") return !1;
            i = "sent";
            var y = o("WAWebFrontendContactGetters").getMyUsername(),
              C = yield f.previewAndJoinCallLink(h.data.token, !0, t, y);
            if (C != null && C !== 0)
              throw r("err")("previewAndJoinCallLink refused with status " + C);
            return !0;
          } catch (e) {
            return (
              p(l),
              e instanceof
                o("WAWebEnsureVoipInited").VoipInitUnavailableError ||
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
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Couldn't start a new call. Try again in a few minutes.",
                    ),
                  }),
                )),
              !1
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.startEmptyCall = _;
  },
  226,
);
