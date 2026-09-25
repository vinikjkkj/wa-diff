__d(
  "WAWebChatThreadLogging",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebUserPrefsMeUser",
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
            try {
              var t;
              yield (t = R()) == null ? void 0 : t.eventUploader.uploadEvents();
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctl] scheduled upload failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ctl-scheduled-upload-failed");
            } finally {
              $(e);
            }
          }),
          l * 1e3,
        ));
    }
    function P() {
      if (!r("gkx")("26258")) return R();
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield N();
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N();
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N();
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N();
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o("WAWebUserPrefsMeUser")
                .getMePnUserOrThrow_DO_NOT_USE()
                .toJid(),
              n = e.key.id;
            return o("WAWebChatThreadLoggingUtils").generateUserThreadIDHMAC(
              t,
              n,
            );
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
        H.apply(this, arguments)
      );
    }
    ((l.setChatThreadLoggingState = L),
      (l.setThreadDsTimeframeOffset = E),
      (l.setThreadIdUserSecret = I),
      (l.handleActivitiesForChatThreadLogging = T),
      (l.uploadChatThreadLoggingEvents = D),
      (l.initUploadTimer = $),
      (l.getChatThreadLoggingStateDebug = P),
      (l.getChatThreadID = w),
      (l.getChatThreadIDHMAC = F),
      (l.getCtwa3pdAggregatedThreadIDHMAC = B),
      (l.getMessageIDHMAC = q),
      (l.getThreadIDHMAC = V));
  },
  98,
);
