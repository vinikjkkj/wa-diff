__d(
  "WAWebChatdLoginIdentity",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCriticalEventWamEvent",
    "WAWebFailureErrorCodes",
    "WAWebProtobufsWa6.pb",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 0,
      u = "chatd_lid_login_rejected",
      c = "chatd_lid_login_self_lid_missing",
      d = "chatd_lid_login_pn_fallback_rejected",
      m = new Set([
        o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE,
        o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_NOT_AUTHORIZED,
        o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_LOCKED,
      ]),
      p = !1,
      _ = !1,
      f = !1,
      g = !1;
    function h() {
      var e,
        t = v();
      if (((p = t != null), t != null))
        return {
          username: parseInt(t.user, 10),
          device: t.getDeviceId(),
          product: o("WAWebProtobufsWa6.pb").ClientPayload$Product.WHATSAPP_LID,
        };
      var n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
      return {
        username: parseInt(n.user, 10),
        device: (e = n.device) != null ? e : s,
      };
    }
    function y(t) {
      return m.has(t)
        ? g
          ? ((g = !1),
            new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
              name: d,
              debug: String(t),
            }).commit(),
            !1)
          : p
            ? ((_ = !0),
              (p = !1),
              (g = !0),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] chatd rejected the LID login with ",
                    ", falling back to PN",
                  ])),
                t,
              ),
              new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
                name: u,
                debug: String(t),
              }).commit(),
              !0)
            : !1
        : !1;
    }
    function C() {
      g = !1;
    }
    function b() {
      ((p = !1), (_ = !1), (f = !1), (g = !1));
    }
    function v() {
      if (
        _ ||
        !o("WAWebABProps").getABPropConfigValue("prefer_lid_for_chatd_login")
      )
        return null;
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      return (
        e == null &&
          !f &&
          ((f = !0),
          new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
            name: c,
          }).commit()),
        e
      );
    }
    ((l.getChatdLoginIdentity = h),
      (l.maybeFallBackToPnLogin = y),
      (l.onChatdLoginSucceeded = C),
      (l.resetForTesting = b));
  },
  98,
);
