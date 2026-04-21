__d(
  "WAWebWamUtils",
  [
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebEnvironment",
    "WAWebGuestCoreWamConstants",
    "WAWebPsIdUpdateWamEvent",
    "WAWebUserPrefsGeneral",
    "WAWebWamCodegenUtils",
    "WAWebWamConstants",
    "WAWebWamEnumAppBuildType",
    "WAWebWamEnumWebcEnvCode",
    "WAWebWamGlobals",
    "WAWebWebWamForceFlushWamEvent",
    "cr:9565",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:9565")) != null ? e : {},
      m = d.getWindowsAppBuild;
    function p() {
      new (o("WAWebWebWamForceFlushWamEvent").WebWamForceFlushWamEvent)()
        .commitAndWaitForFlush(!0)
        .finally(function () {
          return o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "force flushed all wam buffers",
                ])),
            )
            .tags("wam");
        });
    }
    function _(e, t, n) {
      new (o("WAWebPsIdUpdateWamEvent").PsIdUpdateWamEvent)({
        psIdAction: e,
        psIdKey: t,
        psIdRotationFrequence: n,
      }).commit();
    }
    function f(e, t) {
      var n = JSON.parse(t),
        r = o("WAWebWamCodegenUtils").events[e];
      if (r == null) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAM: commitWorkerWamEvent failed, ",
                " is not defined",
              ])),
            e,
          )
          .sendLogs("wam-worker-event-undefined-error");
        return;
      }
      new r(n).commit();
    }
    function g(e, t) {
      var n,
        r = JSON.parse(t),
        a = r.value;
      o("WAWebWamGlobals").Global.set(((n = {}), (n[e] = a), n));
    }
    function h(e) {
      var t = e.action,
        n = e.name,
        r = e.payload;
      return t === "commit" ? f(n, r) : g(n, r);
    }
    function y(e) {
      var t = !0;
      try {
        var n = new (o("WABinary").Binary)(o("WABase64").decodeB64(e));
        t = n.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE_FOR_UPLOAD;
      } catch (e) {
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "dropping invalid wam buffer",
            ])),
        );
      }
      return t;
    }
    function C(e) {
      return e === "regular"
        ? "regular"
        : e === "realtime"
          ? "realtime"
          : "private";
    }
    function b() {
      var e = m == null ? void 0 : m();
      return e != null
        ? e
        : r("gkx")("26258")
          ? o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()
            ? o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.BETA
            : o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.RELEASE
          : o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.ALPHA;
    }
    function v() {
      if (r("gkx")("26259"))
        return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.INTERN;
      if (r("gkx")("26258"))
        return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.PROD;
      if (r("gkx")("26256"))
        return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.E2E;
      throw r("err")("invalid env");
    }
    function S() {
      return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
    }
    function R() {
      o("WAWebWamGlobals").Global.set({ appBuild: b(), appIsBetaRelease: S() });
    }
    function L(e) {
      if (r("gkx")("26256")) {
        var t = window.__je2e_recordWAMEvent;
        (t || typeof t == "function") &&
          t(babelHelpers.extends({ name: e.$className }, e.all));
      }
    }
    function E(e, t) {
      if (r("gkx")("26256")) {
        var n = window.__je2e_recordWAMEvent;
        (n || typeof n == "function") && n({ name: e, value: t });
      }
    }
    function k() {
      return r("WAWebEnvironment").isGuest
        ? o("WAWebGuestCoreWamConstants")
            .WAM_IN_MEMORY_BUFFERING_DURATION_IN_SECS_FOR_GUEST
        : o("WAWebWamConstants").WAM_IN_MEMORY_BUFFERING_DURATION_IN_SECS;
    }
    function I() {
      return r("WAWebEnvironment").isGuest
        ? o("WAWebGuestCoreWamConstants")
            .WAM_BUFFER_ROTATE_INTERVAL_IN_SECS_FOR_GUEST
        : o("WAWebWamConstants").WAM_BUFFER_ROTATE_INTERVAL_IN_SECS;
    }
    ((l.forceFlushAllWamAndQplBuffers = p),
      (l.logPsIdUpdate = _),
      (l.processWorkerWamDataRow = h),
      (l.isWamBufferTooBigToUpload = y),
      (l.getChannelFromBufferKey = C),
      (l.getAppBuild = b),
      (l.getWamEnv = v),
      (l.getAppIsBetaRelease = S),
      (l.refreshBetaWamGlobals = R),
      (l.maybeForwardWamEventToJestE2e = L),
      (l.maybeForwardWamAttributeToJestE2e = E),
      (l.getInMemoryBufferingDurationInSecs = k),
      (l.getBufferRotateIntervalInSecs = I));
  },
  98,
);
