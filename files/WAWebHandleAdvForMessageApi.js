__d(
  "WAWebHandleAdvForMessageApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCurrentUser",
    "WAWebHandleAdvListResetApi",
    "WAWebHandleAdvNoListResetApi",
    "WAWebSignalCommonUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t, n, r, o, a, i, l) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l, u, c) {
            l === void 0 && (l = !1);
            var d = n.keyIndex,
              m = n.rawId,
              p = n.timestamp;
            (m != null || s(0, 56258),
              p != null || s(0, 56257),
              d != null || s(0, 56256));
            var _ = { rawId: m, timestamp: p, keyIndex: d },
              f = t.device;
            (f != null && f !== o("WAJids").DEFAULT_DEVICE_ID) || s(0, 56259);
            var g = o("WAWebWidFactory").asUserWidOrThrow(t),
              h = yield o("WAWebApiDeviceList").getDeviceRecord(g),
              y =
                r == null ||
                (a != null && !o("WAWebSignalCommonUtils").bufferEqual(r, a));
            return (
              o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleADVDeviceIdentity: isNewPrimaryIdentity-",
                      "",
                    ])),
                  y,
                ),
              !h || h.deleted || h.rawId !== m || y
                ? o("WAWebHandleAdvListResetApi").handleListReset(
                    t,
                    _,
                    y ? a : null,
                    i,
                    h,
                    l,
                    u,
                    c,
                  )
                : o("WAWebHandleAdvNoListResetApi").handleNoListReset(
                    t,
                    _,
                    i,
                    h,
                    l,
                    u,
                    c,
                  )
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.handleADVDeviceUpdateForMessage = u;
  },
  98,
);
