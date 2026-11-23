__d(
  "WAWebWamDeviceLinkReporter",
  [
    "WABase64",
    "WABinary",
    "WACryptoSha256",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WATimeUtils",
    "WAWebAndroidTabletVisitId",
    "WAWebAppTracker",
    "WAWebLinkDeviceExperience",
    "WAWebLocalStorage",
    "WAWebMdLinkDeviceCompanionWamEvent",
    "WAWebStartupLaunchAttribution",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = null,
      d = null,
      m = null,
      p = Promise.resolve(),
      _ = "deviceLinkWamState",
      f = 2e3;
    function g() {
      c != null &&
        (r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(_, JSON.stringify(c)));
    }
    function h() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(_);
    }
    function y() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(_);
        if (e != null) return (h(), JSON.parse(e));
      } catch (e) {}
      return null;
    }
    async function C(e, t, n) {
      (h(),
        (u = new (o(
          "WAWebMdLinkDeviceCompanionWamEvent",
        ).MdLinkDeviceCompanionWamEvent)()));
      var r = await S(e, t);
      return (
        (c = {
          launchAttribution: o(
            "WAWebStartupLaunchAttribution",
          ).getLaunchAttributionAppContextPart(window.location.search),
          regStartTime: n,
          sessionId: r,
          visitId: o(
            "WAWebAndroidTabletVisitId",
          ).getExistingAndroidTabletVisitId(),
        }),
        r
      );
    }
    async function b() {
      await o("WAPromiseTimeout")
        .promiseTimeout(p, f)
        .catch(function () {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Timed out waiting for device link WAM event persistence",
              ])),
          );
        });
    }
    async function v(e) {
      var t;
      if (!u) {
        var n = y();
        if (n == null) return;
        ((c = n),
          (u = new (o(
            "WAWebMdLinkDeviceCompanionWamEvent",
          ).MdLinkDeviceCompanionWamEvent)()));
      }
      (await ((t = m) == null ? void 0 : t.promise),
        (m = new (o("WAResolvable").Resolvable)()),
        (d = e),
        await R(),
        g());
    }
    async function S(e, t) {
      var n = new (o("WABinary").Binary)();
      (n.writeBuffer(e), n.write(95), n.writeBuffer(t));
      var r = n.readByteArrayView(),
        a = await o("WACryptoSha256").sha256(r);
      return o("WABase64").encodeB64(a);
    }
    function R(e) {
      var t;
      if (!(!u || !c)) {
        var n = c,
          a =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection() -
            n.regStartTime;
        if (d != null) {
          var i = d;
          u = new (o(
            "WAWebMdLinkDeviceCompanionWamEvent",
          ).MdLinkDeviceCompanionWamEvent)({
            mdDurationS: a,
            mdSessionId: n.sessionId,
            mdTimestampS: n.regStartTime,
            mdLinkDeviceCompanionErrorCode: e == null ? 0 : e,
            mdLinkDeviceCompanionStage: i,
            mdLinkDeviceExperienceId: o(
              "WAWebLinkDeviceExperience",
            ).getWebCompanionLinkDeviceExperienceId(),
          });
          var l = u,
            _ = n.visitId;
          (_ != null && (l.waWebVisitId = _),
            o("WAWebAppTracker").attachWAMAppContext(l, a * 1e3));
          var f = n.launchAttribution;
          if (f != null) {
            var g = l.appContext;
            l.appContext = g == null || g === "" ? f : g + "+" + f;
          }
          ((p = l.commitAndWaitForFlush(!0).catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to commit device link WAM event",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("device-link-wam-commit-failed");
          })),
            (t = m) == null || t.resolve(),
            (e != null ||
              l.mdLinkDeviceCompanionStage ===
                o("WAWebWamEnumMdLinkDeviceCompanionStage")
                  .MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE) &&
              ((u = null), (c = null), (d = null), h()));
        }
      }
    }
    ((l.initDeviceLinkEvent = C),
      (l.waitForDeviceLinkEventPersistence = b),
      (l.setDeviceLinkPairStage = v),
      (l.commitDeviceLinkEvent = R));
  },
  98,
);
