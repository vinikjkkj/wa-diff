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
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (o("WAWebVoipStackInterface").getVoipStackInterface == null)
              throw r("err")("not in windows env");
            var a = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(!0);
            if (!a) return !1;
            var i = yield (c || (c = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                o("WAWebVoipCreateCallLink").createCallLink({
                  callType: "video",
                }),
                o("WAWebEnsureVoipInited").ensureVoipInitialized(),
              ]),
              l = i[0],
              d = i[1],
              p = o("WAWebApiParse").parseCallLink(d);
            if (p == null)
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] start call failed: malformed link ",
                        "",
                      ])),
                    d,
                  )
                  .sendLogs("voip-landing-page-start-call-link-malformed"),
                r("err")("malformed call link")
              );
            if (l == null) throw r("err")("voip stack interface unavailable");
            var _ = o("WAWebFrontendContactGetters").getMyUsername();
            return (yield l.previewAndJoinCallLink(p.data.token, !0, t, _), !0);
          } catch (e) {
            return (
              o("WALogger")
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
                    /*BTDS*/ "Could not start a new call. Try again after waiting for a few minutes.",
                  ),
                }),
              ),
              !1
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.startEmptyCall = p;
  },
  226,
);
