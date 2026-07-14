__d(
  "WAWebChatThreadLogging",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
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
      b = null;
    function v() {
      return (
        b == null &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getChatThreadLoggingState: init incomplete!",
              ])),
          ),
        b
      );
    }
    function S(e) {
      b = e;
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "chat_thread_logging: setting offset",
              ])),
          );
          var r =
            (t = yield (n = v()) == null
              ? void 0
              : n.metadataStore.setOffset(e)) != null
              ? t
              : !1;
          return (r && D(e), r);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t, r;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "chat_thread_logging: setting thread_id_user_secret",
            ])),
        ),
        (t = (r = v()) == null ? void 0 : r.metadataStore.setSecret(e)) != null
          ? t
          : (C || (C = n("Promise"))).resolve(!1)
      );
    }
    function k(e) {
      var t;
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: handling ",
            " message(s)",
          ])),
        e.length,
      ),
        (t = v()) == null ||
          t.eventStore.handleMessages(e).catch(function (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "chat_thread_logging: error handling activities",
                ])),
            );
          }));
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = yield (t = v()) == null ? void 0 : t.metadataStore.getOffset();
          if (a == null) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] upload failed: offset unset",
                ])),
            );
            return;
          }
          var i = yield (n = v()) == null
            ? void 0
            : n.metadataStore.getSecret();
          if (i == null) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] upload failed: secret unset",
                ])),
            );
            return;
          }
          var l = yield (r = v()) == null
            ? void 0
            : r.eventUploader.uploadEvents(e);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = o("WATimeUtils").unixTime(),
        r = t - (t % 86400),
        a = r + e,
        i = a - t;
      (i < 0 && (i += o("WATimeUtils").DAY_SECONDS),
        self.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t;
            (yield (t = v()) == null ? void 0 : t.eventUploader.uploadEvents(),
              D(e));
          }),
          i * 1e3,
        ));
    }
    function x() {
      if (!r("gkx")("26258")) return v();
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield v(),
            t = yield e == null ? void 0 : e.metadataStore.getSecret();
          return t == null
            ? (o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctl] secret unavailable",
                    ])),
                )
                .sendLogs("ctl-secret-unset"),
              null)
            : t;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield $();
          if (n == null) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield $();
          return t == null
            ? (o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] getChatThreadIDHMAC failed: secret unset",
                    ])),
                )
                .sendLogs("ctwa-labels-thread-id-hmac-error"),
              null)
            : o("WAWebChatThreadLoggingUtils").generateThreadIDHMAC(t, e);
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
          var t = yield $();
          return t == null
            ? (o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getMessageIDHMAC failed: secret unset",
                  ])),
              ),
              null)
            : o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getThreadIDHMAC failed: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    ((l.setChatThreadLoggingState = S),
      (l.setThreadDsTimeframeOffset = R),
      (l.setThreadIdUserSecret = E),
      (l.handleActivitiesForChatThreadLogging = k),
      (l.uploadChatThreadLoggingEvents = I),
      (l.initUploadTimer = D),
      (l.getChatThreadLoggingStateDebug = x),
      (l.getChatThreadID = N),
      (l.getChatThreadIDHMAC = w),
      (l.getMessageIDHMAC = F),
      (l.getThreadIDHMAC = B));
  },
  98,
);
