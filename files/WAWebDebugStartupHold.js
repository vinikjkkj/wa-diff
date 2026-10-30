__d(
  "WAWebDebugStartupHold",
  [
    "Promise",
    "WALogger",
    "WAWebBackendWorkerClient",
    "WAWebCmd",
    "WAWebOfflineResumeDevHold",
    "cr:11133",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = null,
      g = null,
      h = !1;
    function y() {
      return (
        r("vulture")("7QLzw8r9PoGzU3TKJ-P7JtjSE7I="),
        h ||
          ((h = !0),
          (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 &&
            o("WAWebOfflineResumeDevHold").readStartupDevHoldFlags().regions &&
            E()),
        f
      );
    }
    function C() {
      (r("vulture")("hgmMmtD4kn-u8jJzI1PlfRCCAlc="),
        k("showStartupSkeleton") &&
          (E(),
          o("WAWebCmd").Cmd.rerenderApp(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "debug: showStartupSkeleton: holding startup skeletons",
              ])),
          )));
    }
    ((C.doc =
      "Render every startup region skeleton until hideStartupSkeleton is called"),
      (C.paramsToExecute = []));
    function b() {
      r("vulture")("NXup_jHNP8vBs2r6za02uQnpXjw=");
      var e = g;
      ((f = null),
        (g = null),
        e == null || e(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "debug: hideStartupSkeleton: revealing startup regions",
            ])),
        ));
    }
    ((b.doc =
      "Reveal every region held by showStartupSkeleton, exercising the skeleton reveal"),
      (b.paramsToExecute = []));
    function v() {
      L({ regions: !0, resume: !0 }, "holdStartup");
    }
    ((v.doc =
      "Reload and keep every startup region on its skeleton with offline processing paused, until releaseStartup"),
      (v.paramsToExecute = []));
    function S() {
      L({ regions: !1, resume: !0 }, "holdStartupResume");
    }
    ((S.doc =
      "Reload with persisted chats shown but offline processing paused (partial sync), until releaseStartup"),
      (S.paramsToExecute = []));
    function R() {
      (o("WAWebOfflineResumeDevHold").clearStartupDevHoldFlags(),
        b(),
        o("WAWebOfflineResumeDevHold").releaseResume(),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "debug: releaseStartup: resuming startup",
            ])),
        ));
    }
    ((R.doc =
      "Release holdStartup or holdStartupResume and let offline resume finish"),
      (R.paramsToExecute = []));
    function L(e, t) {
      k(t) &&
        (e.resume &&
          o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady() &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "debug: ",
                ": offline processing can't be paused while the backend worker runs resume; only the startup skeletons will be held",
              ])),
            t,
          ),
        o("WAWebOfflineResumeDevHold").persistStartupDevHoldFlags(e),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[reload] debug: ",
              "",
            ])),
          t,
        ),
        window.location.reload());
    }
    function E() {
      f == null &&
        (f = new (_ || (_ = n("Promise")))(function (e) {
          g = e;
        }));
    }
    function k(e) {
      if ((n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0)
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "debug: ",
                ": skeleton is not enabled, reload with ?gk_enable=wa_web_startup_skeleton",
              ])),
            e,
          ),
          !1
        );
      return (
        o("WALogger").WARN(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "debug: ",
              ": only works in dev builds",
            ])),
          e,
        ),
        !1
      );
      return !0;
    }
    ((l.getRegionHold = y),
      (l.showStartupSkeleton = C),
      (l.hideStartupSkeleton = b),
      (l.holdStartup = v),
      (l.holdStartupResume = S),
      (l.releaseStartup = R));
  },
  98,
);
