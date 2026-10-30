__d(
  "WAWebCoexV2RelayOneShotEncrypt",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.coexV2SelfHosted,
            n = e.editType,
            a = e.msg,
            i = e.msgProtobuf,
            l = e.retryCount,
            s = yield h(l > 0),
            c = s.keyInfo,
            d = {
              coexV2SelfHosted: t,
              editType: n,
              msg: a,
              retryCount: l,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
            };
          try {
            var m = yield S(c, o("WAWebSendMsgCommonApi").encodeAndPad(i));
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] one-shot relay encryption failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              o(
                "WAWebPostE2eMessageSendMetric",
              ).postFailureDirectE2eMessageSendMetric(
                babelHelpers.extends({}, d),
              ),
              e instanceof o("WAWebHandleMsgError").MessageValidationError
                ? e
                : r("err")(
                    "[coexv2] one-shot relay encryption failed: " +
                      r("getErrorSafe")(e).message,
                  )
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = p,
        a = t != null && C(t) ? t : null;
      if (_ == null && !e && a != null)
        return (c || (c = n("Promise"))).resolve(a);
      var i = _ != null ? _ : y();
      return a == null
        ? i
        : i.catch(function (e) {
            if (!C(a)) throw e;
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] shared prekey bundle fetch failed, using the stored bundle",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              a
            );
          });
    }
    function y() {
      var e = b().finally(function () {
        _ = null;
      });
      return ((_ = e), e);
    }
    function C(e) {
      return o("WATimeUtils").unixTime() < e.fetchedAtSec + m;
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WATimeUtils").unixTime(),
            t = yield o("WAWebFetchPrekeysJob").fetchPrekeys([d]),
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = yield o("WAWebCryptoLibraryDbCallbacksApi")
            .getCryptoDbCallbacks()
            .getRegistrationInfo();
          if (i == null) throw r("err")("[coexv2] no registration info");
          var l = t.aeaEvidence,
            s = babelHelpers.objectWithoutPropertiesLoose(t, e),
            u = yield o("WACryptoLibrary").createOutgoingSession(
              i,
              babelHelpers.extends(
                {},
                o("WAWebCryptoLibrarySessionApi").toRawInitialSessionInfo(
                  o("WAWebSignalSessionApi").toSignalPrekeyBundle(s),
                ),
                { oneTimeKey: null },
              ),
            );
          if (!u.success) {
            var d;
            throw (
              ((d = p) == null ? void 0 : d.keyInfo) === t && (p = null),
              r("err")(u.error)
            );
          }
          var m = u.value,
            _ = yield o("WACryptoLibrary").encryptContent(
              {
                loadSession: function () {
                  return (c || (c = n("Promise"))).resolve(m);
                },
                handleNewSession: function () {
                  return (
                    (m = null),
                    (c || (c = n("Promise"))).resolve(
                      o("WAResultOrError").makeResult(),
                    )
                  );
                },
              },
              o("WAWebWidToJid").widToDeviceJid(
                o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
              ),
              a,
              null,
            );
          if (!_.success) throw r("err")(_.error);
          if (
            o("WAWebBackendJobs.flow").CiphertextType.cast(_.value.type) !==
            o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
          )
            throw r("err")(
              "[coexv2] one-shot relay produced a " + _.value.type,
            );
          return {
            ciphertext: o("WAByteArray").uint8ArrayToBuffer(_.value.ciphertext),
            type: o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
          };
        })),
        R.apply(this, arguments)
      );
    }
    l.encryptCoexV2RelayOneShot = f;
  },
  98,
);
