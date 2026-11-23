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
      c = o("WAWebWidFactory").createWid("1@bot"),
      d = 36 * o("WATimeUtils").HOUR_SECONDS,
      m = null,
      p = null;
    async function _(e) {
      var t = e.coexV2SelfHosted,
        n = e.editType,
        a = e.msg,
        i = e.msgProtobuf,
        l = e.retryCount,
        u = await f(l > 0),
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
        var m = await C(c, o("WAWebSendMsgCommonApi").encodeAndPad(i));
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
    function f(e) {
      var t = m,
        n = t != null && h(t) ? t : null;
      if (p == null && !e && n != null) return Promise.resolve(n);
      var a = p != null ? p : g();
      return n == null
        ? a
        : a.catch(function (e) {
            if (!h(n)) throw e;
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] shared prekey bundle fetch failed, using the stored bundle",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              n
            );
          });
    }
    function g() {
      var e = y().finally(function () {
        p = null;
      });
      return ((p = e), e);
    }
    function h(e) {
      return o("WATimeUtils").unixTime() < e.fetchedAtSec + d;
    }
    async function y() {
      var e = o("WATimeUtils").unixTime(),
        t = await o("WAWebFetchPrekeysJob").fetchPrekeys([c]),
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
      return ((m = s), s);
    }
    async function C(t, n) {
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
          ((u = m) == null ? void 0 : u.keyInfo) === t && (m = null),
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
    l.encryptCoexV2RelayOneShot = _;
  },
  98,
);
