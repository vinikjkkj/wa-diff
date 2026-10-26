__d(
  "WAWebWamDeviceLinkReporter",
  [
    "Promise",
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
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null,
      d = null,
      m = null,
      p = null,
      _ = (u || (u = n("Promise"))).resolve(),
      f = "deviceLinkWamState",
      g = 2e3;
    function h() {
      d != null &&
        (r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(f, JSON.stringify(d)));
    }
    function y() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(f);
    }
    function C() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(f);
        if (e != null) return (y(), JSON.parse(e));
      } catch (e) {}
      return null;
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (y(),
            (c = new (o(
              "WAWebMdLinkDeviceCompanionWamEvent",
            ).MdLinkDeviceCompanionWamEvent)()));
          var r = yield k(e, t);
          return (
            (d = {
              regStartTime: n,
              sessionId: r,
              visitId: o(
                "WAWebAndroidTabletVisitId",
              ).getExistingAndroidTabletVisitId(),
            }),
            r
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAPromiseTimeout")
            .promiseTimeout(_, g)
            .catch(function () {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Timed out waiting for device link WAM event persistence",
                  ])),
              );
            });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (!c) {
            var n = C();
            if (n == null) return;
            ((d = n),
              (c = new (o(
                "WAWebMdLinkDeviceCompanionWamEvent",
              ).MdLinkDeviceCompanionWamEvent)()));
          }
          (yield (t = p) == null ? void 0 : t.promise,
            (p = new (o("WAResolvable").Resolvable)()),
            (m = e),
            yield T(),
            h());
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WABinary").Binary)();
          (n.writeBuffer(e), n.write(95), n.writeBuffer(t));
          var r = n.readByteArrayView(),
            a = yield o("WACryptoSha256").sha256(r);
          return o("WABase64").encodeB64(a);
        })),
        I.apply(this, arguments)
      );
    }
    function T(t) {
      var n;
      if (!(!c || !d)) {
        var a = d,
          i =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection() -
            a.regStartTime;
        if (m != null) {
          var l = m;
          c = new (o(
            "WAWebMdLinkDeviceCompanionWamEvent",
          ).MdLinkDeviceCompanionWamEvent)({
            mdDurationS: i,
            mdSessionId: a.sessionId,
            mdTimestampS: a.regStartTime,
            mdLinkDeviceCompanionErrorCode: t == null ? 0 : t,
            mdLinkDeviceCompanionStage: l,
            mdLinkDeviceExperienceId: o(
              "WAWebLinkDeviceExperience",
            ).getWebCompanionLinkDeviceExperienceId(),
          });
          var s = c,
            u = a.visitId;
          (u != null && (s.waWebVisitId = u),
            o("WAWebAppTracker").attachWAMAppContext(s, i * 1e3),
            (_ = s.commitAndWaitForFlush(!0).catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to commit device link WAM event",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("device-link-wam-commit-failed");
            })),
            (n = p) == null || n.resolve(),
            (t != null ||
              s.mdLinkDeviceCompanionStage ===
                o("WAWebWamEnumMdLinkDeviceCompanionStage")
                  .MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE) &&
              ((c = null), (d = null), (m = null), y()));
        }
      }
    }
    ((l.initDeviceLinkEvent = b),
      (l.waitForDeviceLinkEventPersistence = S),
      (l.setDeviceLinkPairStage = L),
      (l.commitDeviceLinkEvent = T));
  },
  98,
);
