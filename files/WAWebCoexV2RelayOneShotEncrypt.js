__d(
  "WAWebCoexV2RelayOneShotEncrypt",
  [
    "WAByteArray",
    "WACryptoLibrary",
    "WALogger",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebBackendJobs.flow",
    "WAWebCoexV2BotWid",
    "WAWebCryptoLibraryDbCallbacksApi",
    "WAWebCryptoLibrarySessionApi",
    "WAWebEncryptMsgProtobuf",
    "WAWebFetchPrekeysJob",
    "WAWebHandleMsgError",
    "WAWebPostE2eMessageSendMetric",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignalSessionApi",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["aeaEvidence"],
      s,
      u,
      c,
      d = o("WAWebWidFactory").createWid("1@bot"),
      m = 36 * o("WATimeUtils").HOUR_SECONDS,
      p = null,
      _ = null;
    async function f(e) {
      var t = e.coexV2SelfHosted,
        n = e.editType,
        a = e.msg,
        i = e.msgProtobuf,
        l = e.retryCount,
        u = await y(l > 0),
        c = u.keyInfo,
        d = {
          coexV2SelfHosted: t,
          editType: n,
          msg: a,
          retryCount: l,
          sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
          to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        };
      try {
        var m = await R(c, o("WAWebSendMsgCommonApi").encodeAndPad(i));
        return (
          o(
            "WAWebPostE2eMessageSendMetric",
          ).postSuccessDirectE2eMessageSendMetric(
            babelHelpers.extends({}, d, {
              isPq: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                m.ciphertext,
              ),
              type: m.type,
            }),
          ),
          m
        );
      } catch (e) {
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] one-shot relay encryption failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          o(
            "WAWebPostE2eMessageSendMetric",
          ).postFailureDirectE2eMessageSendMetric(babelHelpers.extends({}, d)),
          e instanceof o("WAWebHandleMsgError").MessageValidationError
            ? e
            : r("err")(
                "[coexv2] one-shot relay encryption failed: " +
                  r("getErrorSafe")(e).message,
              )
        );
      }
    }
    function g() {
      return b() != null
        ? !0
        : (_ == null &&
            C().catch(function (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] shared prekey bundle warm-up fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }),
          !1);
    }
    async function h(e) {
      var t = e.forceFetch,
        n = e.plaintext,
        r = t ? null : b(),
        o = r != null ? r : await y(t),
        a = o.keyInfo;
      return R(a, n);
    }
    function y(e) {
      var t = p,
        n = t != null && v(t) ? t : null;
      if (_ == null && !e && n != null) return Promise.resolve(n);
      var a = _ != null ? _ : C();
      return n == null
        ? a
        : a.catch(function (e) {
            if (!v(n)) throw e;
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] shared prekey bundle fetch failed, using the stored bundle",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              n
            );
          });
    }
    function C() {
      var e = S().finally(function () {
        _ = null;
      });
      return ((_ = e), e);
    }
    function b() {
      var e = p;
      return e != null && v(e) ? e : null;
    }
    function v(e) {
      return o("WATimeUtils").unixTime() < e.fetchedAtSec + m;
    }
    async function S() {
      var e = o("WATimeUtils").unixTime(),
        t = await o("WAWebFetchPrekeysJob").fetchPrekeys([d]),
        n = t.errors,
        a = t.prekeyBundles,
        i = a[0];
      if (i == null) {
        var l;
        throw (l = n[0]) != null
          ? l
          : r("err")("[coexv2] no shared prekey bundle in response");
      }
      var s = { fetchedAtSec: e, keyInfo: i };
      return ((p = s), s);
    }
    async function R(t, n) {
      var a = await o("WAWebCryptoLibraryDbCallbacksApi")
        .getCryptoDbCallbacks()
        .getRegistrationInfo();
      if (a == null) throw r("err")("[coexv2] no registration info");
      var i = t.aeaEvidence,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = await o("WACryptoLibrary").createOutgoingSession(
          a,
          babelHelpers.extends(
            {},
            o("WAWebCryptoLibrarySessionApi").toRawInitialSessionInfo(
              o("WAWebSignalSessionApi").toSignalPrekeyBundle(l),
            ),
            { oneTimeKey: null },
          ),
        );
      if (!s.success) {
        var u;
        throw (
          ((u = p) == null ? void 0 : u.keyInfo) === t && (p = null),
          r("err")(s.error)
        );
      }
      var c = s.value,
        d = await o("WACryptoLibrary").encryptContent(
          {
            loadSession: function () {
              return Promise.resolve(c);
            },
            handleNewSession: function () {
              return (
                (c = null),
                Promise.resolve(o("WAResultOrError").makeResult())
              );
            },
          },
          o("WAWebWidToJid").widToDeviceJid(
            o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
          ),
          n,
          null,
        );
      if (!d.success) throw r("err")(d.error);
      if (
        o("WAWebBackendJobs.flow").CiphertextType.cast(d.value.type) !==
        o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
      )
        throw r("err")("[coexv2] one-shot relay produced a " + d.value.type);
      return {
        ciphertext: o("WAByteArray").uint8ArrayToBuffer(d.value.ciphertext),
        type: o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
      };
    }
    ((l.encryptCoexV2RelayOneShot = f),
      (l.warmCoexV2BotPrekeyBundle = g),
      (l.encryptForCoexV2Bot = h));
  },
  98,
);
