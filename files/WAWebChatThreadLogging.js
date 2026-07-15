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
      b,
      v = null;
    function S() {
      return (
        v == null &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getChatThreadLoggingState: init incomplete!",
              ])),
          ),
        v
      );
    }
    function R(e) {
      v = e;
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "chat_thread_logging: setting offset",
              ])),
          );
          var r =
            (t = yield (n = S()) == null
              ? void 0
              : n.metadataStore.setOffset(e)) != null
              ? t
              : !1;
          return (r && x(e), r);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t, r;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "chat_thread_logging: setting thread_id_user_secret",
            ])),
        ),
        (t = (r = S()) == null ? void 0 : r.metadataStore.setSecret(e)) != null
          ? t
          : (b || (b = n("Promise"))).resolve(!1)
      );
    }
    function I(e) {
      var t;
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: handling ",
            " message(s)",
          ])),
        e.length,
      ),
        (t = S()) == null ||
          t.eventStore.handleMessages(e).catch(function (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "chat_thread_logging: error handling activities",
                ])),
            );
          }));
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = yield (t = S()) == null ? void 0 : t.metadataStore.getOffset();
          if (a == null) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] upload failed: offset unset",
                ])),
            );
            return;
          }
          var i = yield (n = S()) == null
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
          var l = yield (r = S()) == null
            ? void 0
            : r.eventUploader.uploadEvents(e);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = o("WATimeUtils").unixTime(),
        r = t - (t % 86400),
        a = r + e,
        i = a - t;
      (i < 0 && (i += o("WATimeUtils").DAY_SECONDS),
        self.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t;
            (yield (t = S()) == null ? void 0 : t.eventUploader.uploadEvents(),
              x(e));
          }),
          i * 1e3,
        ));
    }
    function $() {
      if (!r("gkx")("26258")) return S();
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield S(),
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P();
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield P();
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield P();
          return t == null
            ? (o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] getCtwa3pdAggregatedThreadIDHMAC failed: secret unset",
                    ])),
                )
                .sendLogs("ctwa-3pd-aggregated-thread-id-hmac-error"),
              null)
            : o(
                "WAWebChatThreadLoggingUtils",
              ).generateCtwa3pdAggregatedThreadIDHMAC(t, e);
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
          var t = yield P();
          return t == null
            ? (o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getMessageIDHMAC failed: secret unset",
                  ])),
              ),
              null)
            : o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getThreadIDHMAC failed: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        V.apply(this, arguments)
      );
    }
    ((l.setChatThreadLoggingState = R),
      (l.setThreadDsTimeframeOffset = L),
      (l.setThreadIdUserSecret = k),
      (l.handleActivitiesForChatThreadLogging = I),
      (l.uploadChatThreadLoggingEvents = T),
      (l.initUploadTimer = x),
      (l.getChatThreadLoggingStateDebug = $),
      (l.getChatThreadID = M),
      (l.getChatThreadIDHMAC = A),
      (l.getCtwa3pdAggregatedThreadIDHMAC = O),
      (l.getMessageIDHMAC = W),
      (l.getThreadIDHMAC = U));
  },
  98,
);
