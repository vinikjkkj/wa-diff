__d(
  "WAWebWamDeviceLinkReporter",
  [
    "WABase64",
    "WABinary",
    "WACryptoSha256",
    "WAResolvable",
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebLinkDeviceExperience",
    "WAWebLocalStorage",
    "WAWebMdLinkDeviceCompanionWamEvent",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = null,
      u = null,
      c = null,
      d = "deviceLinkWamState";
    function m() {
      s != null &&
        (r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(d, JSON.stringify(s)));
    }
    function p() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(d);
    }
    function _() {
      try {
        var e =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(d);
        if (e != null) return (p(), JSON.parse(e));
      } catch (e) {}
      return null;
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          (p(),
            (e = new (o(
              "WAWebMdLinkDeviceCompanionWamEvent",
            ).MdLinkDeviceCompanionWamEvent)()));
          var a = yield C(t, n);
          return ((s = { regStartTime: r, sessionId: a }), a);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (!e) {
            var r = _();
            if (r == null) return;
            ((s = r),
              (e = new (o(
                "WAWebMdLinkDeviceCompanionWamEvent",
              ).MdLinkDeviceCompanionWamEvent)()));
          }
          (yield (n = c) == null ? void 0 : n.promise,
            (c = new (o("WAResolvable").Resolvable)()),
            (u = t),
            yield v(),
            m());
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WABinary").Binary)();
          (n.writeBuffer(e), n.write(95), n.writeBuffer(t));
          var r = n.readByteArrayView(),
            a = yield o("WACryptoSha256").sha256(r);
          return o("WABase64").encodeB64(a);
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
      var n;
      if (!(!e || !s)) {
        var r = s,
          a =
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection() -
            r.regStartTime;
        if (u != null) {
          var i = u;
          e = new (o(
            "WAWebMdLinkDeviceCompanionWamEvent",
          ).MdLinkDeviceCompanionWamEvent)({
            mdDurationS: a,
            mdSessionId: r.sessionId,
            mdTimestampS: r.regStartTime,
            mdLinkDeviceCompanionErrorCode: t == null ? 0 : t,
            mdLinkDeviceCompanionStage: i,
            mdLinkDeviceExperienceId: o(
              "WAWebLinkDeviceExperience",
            ).getWebCompanionLinkDeviceExperienceId(),
          });
          var l = e;
          (o("WAWebAppTracker").attachWAMAppContext(l, a * 1e3),
            l.commitAndWaitForFlush(!0),
            (n = c) == null || n.resolve(),
            (t != null ||
              l.mdLinkDeviceCompanionStage ===
                o("WAWebWamEnumMdLinkDeviceCompanionStage")
                  .MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE) &&
              ((e = null), (s = null), (u = null), p()));
        }
      }
    }
    ((l.initDeviceLinkEvent = f),
      (l.setDeviceLinkPairStage = h),
      (l.commitDeviceLinkEvent = v));
  },
  98,
);
