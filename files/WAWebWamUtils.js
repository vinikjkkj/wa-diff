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
    "cr:9565",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (e = n("cr:9565")) != null ? e : {},
      d = c.getWindowsAppBuild;
    function m(e, t, n) {
      new (o("WAWebPsIdUpdateWamEvent").PsIdUpdateWamEvent)({
        psIdAction: e,
        psIdKey: t,
        psIdRotationFrequence: n,
      }).commit();
    }
    function p(e, t) {
      var n = JSON.parse(t),
        r = o("WAWebWamCodegenUtils").events[e];
      if (r == null) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
    function _(e, t) {
      var n,
        r = JSON.parse(t),
        a = r.value;
      o("WAWebWamGlobals").Global.set(((n = {}), (n[e] = a), n));
    }
    function f(e) {
      var t = e.action,
        n = e.name,
        r = e.payload;
      return t === "commit" ? p(n, r) : _(n, r);
    }
    function g(e) {
      var t = !0;
      try {
        var n = new (o("WABinary").Binary)(o("WABase64").decodeB64(e));
        t = n.size() > o("WAWebWamConstants").WAM_MAX_BUFFER_SIZE_FOR_UPLOAD;
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "dropping invalid wam buffer",
            ])),
        );
      }
      return t;
    }
    function h(e) {
      return e === "regular"
        ? "regular"
        : e === "realtime"
          ? "realtime"
          : "private";
    }
    function y() {
      var e = d == null ? void 0 : d();
      return e != null
        ? e
        : r("gkx")("26258")
          ? o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()
            ? o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.BETA
            : o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.RELEASE
          : o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.ALPHA;
    }
    function C() {
      if (r("gkx")("26259"))
        return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.INTERN;
      if (r("gkx")("26258"))
        return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.PROD;
      if (r("gkx")("26256"))
        return o("WAWebWamEnumWebcEnvCode").WEBC_ENV_CODE.E2E;
      throw r("err")("invalid env");
    }
    function b() {
      return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
    }
    function v() {
      o("WAWebWamGlobals").Global.set({ appBuild: y(), appIsBetaRelease: b() });
    }
    function S(e) {
      if (r("gkx")("26256")) {
        var t = window.__je2e_recordWAMEvent;
        (t || typeof t == "function") &&
          t(babelHelpers.extends({ name: e.$className }, e.all));
      }
    }
    function R(e, t) {
      if (r("gkx")("26256")) {
        var n = window.__je2e_recordWAMEvent;
        (n || typeof n == "function") && n({ name: e, value: t });
      }
    }
    function L() {
      return r("WAWebEnvironment").isGuest
        ? o("WAWebGuestCoreWamConstants")
            .WAM_IN_MEMORY_BUFFERING_DURATION_IN_SECS_FOR_GUEST
        : o("WAWebWamConstants").WAM_IN_MEMORY_BUFFERING_DURATION_IN_SECS;
    }
    function E() {
      return r("WAWebEnvironment").isGuest
        ? o("WAWebGuestCoreWamConstants")
            .WAM_BUFFER_ROTATE_INTERVAL_IN_SECS_FOR_GUEST
        : o("WAWebWamConstants").WAM_BUFFER_ROTATE_INTERVAL_IN_SECS;
    }
    ((l.logPsIdUpdate = m),
      (l.processWorkerWamDataRow = f),
      (l.isWamBufferTooBigToUpload = g),
      (l.getChannelFromBufferKey = h),
      (l.getAppBuild = y),
      (l.getWamEnv = C),
      (l.getAppIsBetaRelease = b),
      (l.refreshBetaWamGlobals = v),
      (l.maybeForwardWamEventToJestE2e = S),
      (l.maybeForwardWamAttributeToJestE2e = R),
      (l.getInMemoryBufferingDurationInSecs = L),
      (l.getBufferRotateIntervalInSecs = E));
  },
  98,
);
