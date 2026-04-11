__d(
  "WAWebChatThreadLogging",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatThreadLoggingEventStore",
    "WAWebChatThreadLoggingEventUploader",
    "WAWebChatThreadLoggingLocalstorageMetadataHandler",
    "WAWebChatThreadLoggingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
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
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = !0);
          var t =
            e &&
            o("WAWebABProps").getABPropConfigValue(
              "message_count_logging_md_enabled",
            );
          (yield o(
            "WAWebUserPrefsMultiDevice",
          ).getChatThreadLoggingLastUploadedStartTs()) == null &&
            (yield o(
              "WAWebUserPrefsMultiDevice",
            ).setChatThreadLoggingLastUploadedStartTs(0));
          var r = new (o(
              "WAWebChatThreadLoggingLocalstorageMetadataHandler",
            ).ChatThreadLoggingMetadataLocalStorage)(),
            a = t
              ? new (o(
                  "WAWebChatThreadLoggingEventStore",
                ).ChatThreadLoggingEventStoreImpl)(r)
              : {
                  handleMessages: function () {
                    return (b || (b = n("Promise"))).resolve();
                  },
                  getEvent: function () {
                    return (b || (b = n("Promise"))).resolve();
                  },
                  getBeforeInclusive: function () {
                    return (b || (b = n("Promise"))).resolve([]);
                  },
                  deleteBeforeInclusive: function () {
                    return (b || (b = n("Promise"))).resolve(0);
                  },
                },
            i = t
              ? new (o(
                  "WAWebChatThreadLoggingEventUploader",
                ).ChatThreadLoggingEventUploaderImpl)(r, a)
              : {
                  uploadEvents: function () {
                    return (b || (b = n("Promise"))).resolve(0);
                  },
                },
            l = yield r.getOffset();
          (l != null && $(l),
            (v = { metadataStore: r, eventStore: a, eventUploader: i }),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "chat thread logging initialized",
                ])),
            ));
        })),
        L.apply(this, arguments)
      );
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
            (t = yield (n = S()) == null
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
        (t = (r = S()) == null ? void 0 : r.metadataStore.setSecret(e)) != null
          ? t
          : (b || (b = n("Promise"))).resolve(!1)
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
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = yield (t = S()) == null ? void 0 : t.metadataStore.getOffset();
          if (a == null) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctl] upload failed: secret unset",
                ])),
            );
            return;
          }
          var l = yield (r = S()) == null
            ? void 0
            : r.eventUploader.uploadEvents(e);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = o("WATimeUtils").unixTime(),
        r = t - (t % 86400),
        a = r + e,
        i = a - t;
      (i < 0 && (i += o("WATimeUtils").DAY_SECONDS),
        self.setTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t;
            (yield (t = S()) == null ? void 0 : t.eventUploader.uploadEvents(),
              $(e));
          }),
          i * 1e3,
        ));
    }
    function P() {
      if (!r("gkx")("26258")) return S();
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield S(),
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
            ? (o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getMessageIDHMAC failed: secret unset",
                  ])),
              ),
              null)
            : o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
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
        U.apply(this, arguments)
      );
    }
    ((l.initChatThreadLogging = R),
      (l.setThreadDsTimeframeOffset = E),
      (l.setThreadIdUserSecret = I),
      (l.handleActivitiesForChatThreadLogging = T),
      (l.uploadChatThreadLoggingEvents = D),
      (l.getChatThreadLoggingStateDebug = P),
      (l.getChatThreadID = w),
      (l.getChatThreadIDHMAC = F),
      (l.getMessageIDHMAC = B),
      (l.getThreadIDHMAC = q));
  },
  98,
);
