__d(
  "WAWebChatThreadLogging",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebDbEncryptionKey",
    "WAWebUserPrefsMeUser",
    "WAWebUserThreadIdHmac",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = null;
    function R() {
      return (
        S == null &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getChatThreadLoggingState: init incomplete!",
              ])),
          ),
        S
      );
    }
    function L(e) {
      S = e;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "chat_thread_logging: setting offset",
              ])),
          );
          var r =
            (t = yield (n = R()) == null
              ? void 0
              : n.metadataStore.setOffset(e)) != null
              ? t
              : !1;
          return (r && $(e), r);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t, r;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "chat_thread_logging: setting thread_id_user_secret",
            ])),
        ),
        (t = (r = R()) == null ? void 0 : r.metadataStore.setSecret(e)) != null
          ? t
          : (v || (v = n("Promise"))).resolve(!1)
      );
    }
    function T(e) {
      var t;
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: handling ",
            " message(s)",
          ])),
        e.length,
      ),
        (t = R()) == null ||
          t.eventStore.handleMessages(e).catch(function (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "chat_thread_logging: error handling activities",
                ])),
            );
          }));
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = yield (t = R()) == null ? void 0 : t.metadataStore.getOffset();
          if (a == null) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] upload failed: offset unset",
                ])),
            );
            return;
          }
          var i = yield (n = R()) == null
            ? void 0
            : n.metadataStore.getSecret();
          if (i == null) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] upload failed: secret unset",
                ])),
            );
            return;
          }
          var l = yield (r = R()) == null
            ? void 0
            : r.eventUploader.uploadEvents(e);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = o("WATimeUtils").unixTime(),
        a = t - (t % 86400),
        i = a + e,
        l = i - t;
      (l < 0 && (l += o("WATimeUtils").DAY_SECONDS),
        self.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = "wait-msg-key";
            try {
              var n;
              (yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                (t = "upload"),
                yield (n = R()) == null
                  ? void 0
                  : n.eventUploader.uploadEvents({
                      onStage: function (n) {
                        t = n;
                      },
                    }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctl] scheduled upload failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags(
                  "ctl_stage:" + t,
                  "ctl_msg_key:" + (P() ? "loaded" : "missing"),
                )
                .sendLogs("ctl-scheduled-upload-failed");
            } finally {
              $(e);
            }
          }),
          l * 1e3,
        ));
    }
    function P() {
      try {
        return (
          o("WAWebDbEncryptionKey").DbEncKeyStore.getDbMsgEncKeys({
            tableName: "ctl",
          }),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function N() {
      if (!r("gkx")("26258")) return R();
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield R(),
            t = yield e == null ? void 0 : e.metadataStore.getSecret();
          return t == null
            ? (o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctl] secret unavailable",
                    ])),
                )
                .sendLogs("ctl-secret-unset"),
              null)
            : t;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield M();
          if (n == null) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] getChatThreadID failed: secret unset",
                ])),
            );
            return;
          }
          var r = o("WAWebChatThreadLoggingUtils").getThreadDs(
            t != null ? t : o("WATimeUtils").unixTime(),
          );
          return o("WAWebChatThreadLoggingUtils").generateThreadID(n, e, r);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield M();
          return t == null
            ? (o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] getChatThreadIDHMAC failed: secret unset",
                    ])),
                )
                .sendLogs("ctwa-labels-thread-id-hmac-error"),
              null)
            : o("WAWebChatThreadLoggingUtils").generateThreadIDHMAC(t, e);
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield M();
          return t == null
            ? (o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] getCtwa3pdAggregatedThreadIDHMAC failed: secret unset",
                    ])),
                )
                .sendLogs("ctwa-3pd-aggregated-thread-id-hmac-error"),
              null)
            : o(
                "WAWebChatThreadLoggingUtils",
              ).generateCtwa3pdAggregatedThreadIDHMAC(t, e);
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield M();
          return t == null
            ? (o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getMessageIDHMAC failed: secret unset",
                  ])),
              ),
              null)
            : o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o("WAWebUserPrefsMeUser")
                .getMePnUserOrThrow_DO_NOT_USE()
                .toJid(),
              n = e.key.id;
            return o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(t, n);
          } catch (e) {
            return (
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getThreadIDHMAC failed: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    ((l.setChatThreadLoggingState = L),
      (l.setThreadDsTimeframeOffset = E),
      (l.setThreadIdUserSecret = I),
      (l.handleActivitiesForChatThreadLogging = T),
      (l.uploadChatThreadLoggingEvents = D),
      (l.initUploadTimer = $),
      (l.getChatThreadLoggingStateDebug = N),
      (l.getChatThreadID = A),
      (l.getChatThreadIDHMAC = O),
      (l.getCtwa3pdAggregatedThreadIDHMAC = W),
      (l.getMessageIDHMAC = U),
      (l.getThreadIDHMAC = H));
  },
  98,
);
