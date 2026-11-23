__d(
  "WAWebVoipBridgePerfSimulator",
  [
    "WALogger",
    "WAWebVoipWaCallEnums",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeInitiator",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      for (
        var n,
          a =
            (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator")
                .WAWebVoipBridgePerfSimulator,
            )) == null
              ? void 0
              : n.voip,
          i = Date.now(),
          l = [],
          s = 0;
        s < t;
        s++
      )
        l.push(a == null ? void 0 : a.requestCallInfo());
      var u = await Promise.all(l),
        c = Date.now();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[VoipBridgePerfSimulator] runTestGetCallInfoParallel: ",
            " took ",
            "ms",
          ])),
        t,
        c - i,
      );
    }
    async function m(e) {
      for (
        var t,
          n =
            (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator")
                .WAWebVoipBridgePerfSimulator,
            )) == null
              ? void 0
              : t.voip,
          a = Date.now(),
          i = [],
          l = 0;
        l < e;
        l++
      )
        i.push(await (n == null ? void 0 : n.requestCallInfo()));
      var u = Date.now();
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[VoipBridgePerfSimulator] runTestGetCallInfoSeq: ",
            " took ",
            "ms",
          ])),
        e,
        u - a,
      );
    }
    async function p(e) {
      for (
        var t,
          n =
            (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator")
                .WAWebVoipBridgePerfSimulator,
            )) == null
              ? void 0
              : t.voip,
          a = Date.now(),
          i = [],
          l = 0;
        l < e;
        l++
      ) {
        var s =
          n == null
            ? void 0
            : n.requestDevicesCountAsync(
                o("WAWebVoipWaCallEnums").DeviceTypeEnum.AudioCapture,
              );
        i.push(s);
      }
      var c = await Promise.all(i),
        d = Date.now();
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[VoipBridgePerfSimulator] runTestGetDeviceCountParallel: ",
            " took ",
            "ms",
          ])),
        e,
        d - a,
      );
    }
    async function _(e) {
      for (
        var t,
          n =
            (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator")
                .WAWebVoipBridgePerfSimulator,
            )) == null
              ? void 0
              : t.voip,
          a = Date.now(),
          i = [],
          l = 0;
        l < e;
        l++
      ) {
        var s = await (n == null
          ? void 0
          : n.requestDevicesCountAsync(
              o("WAWebVoipWaCallEnums").DeviceTypeEnum.AudioCapture,
            ));
        i.push(s);
      }
      var u = Date.now();
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[VoipBridgePerfSimulator] runTestGetDeviceCountSeq: ",
            " took ",
            "ms",
          ])),
        e,
        u - a,
      );
    }
    var f = {
      runTestGetCallInfoParallel: d,
      runTestGetCallInfoSeq: m,
      runTestGetDeviceCountParallel: p,
      runTestGetDeviceCountSeq: _,
    };
    l.VoipBridgePerfSimulator = f;
  },
  98,
);
