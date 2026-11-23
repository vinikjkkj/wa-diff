__d(
  "WAWebChatThreadLogging",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebDbEncryptionKey",
    "WAWebUserThreadIdHmac",
    "WAWebUserUtils",
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
    async function L(e) {
      var t, n;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: setting offset",
          ])),
      );
      var r =
        (t = await ((n = S()) == null
          ? void 0
          : n.metadataStore.setOffset(e))) != null
          ? t
          : !1;
      return (r && T(e), r);
    }
    function E(e) {
      var t, n;
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "chat_thread_logging: setting thread_id_user_secret",
            ])),
        ),
        (t = (n = S()) == null ? void 0 : n.metadataStore.setSecret(e)) != null
          ? t
          : Promise.resolve(!1)
      );
    }
    function k(e) {
      var t;
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: handling ",
            " message(s)",
          ])),
        e.length,
      ),
        (t = S()) == null ||
          t.eventStore.handleMessages(e).catch(function (e) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "chat_thread_logging: error handling activities",
                ])),
            );
          }));
    }
    async function I(e) {
      var t,
        n,
        r,
        a = await ((t = S()) == null ? void 0 : t.metadataStore.getOffset());
      if (a == null) {
        o("WALogger").ERROR(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[ctl] upload failed: offset unset",
            ])),
        );
        return;
      }
      var i = await ((n = S()) == null ? void 0 : n.metadataStore.getSecret());
      if (i == null) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[ctl] upload failed: secret unset",
            ])),
        );
        return;
      }
      var l = await ((r = S()) == null
        ? void 0
        : r.eventUploader.uploadEvents(e));
    }
    function T(e) {
      var t = o("WATimeUtils").unixTime(),
        n = t - (t % 86400),
        a = n + e,
        i = a - t;
      (i < 0 && (i += o("WATimeUtils").DAY_SECONDS),
        self.setTimeout(async function () {
          var t = "wait-msg-key";
          try {
            var n;
            (await o(
              "WAWebDbEncryptionKey",
            ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
              (t = "upload"),
              await ((n = S()) == null
                ? void 0
                : n.eventUploader.uploadEvents({
                    onStage: function (n) {
                      t = n;
                    },
                  })));
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] scheduled upload failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags(
                "ctl_stage:" + t,
                "ctl_msg_key:" + (D() ? "loaded" : "missing"),
              )
              .sendLogs("ctl-scheduled-upload-failed");
          } finally {
            T(e);
          }
        }, i * 1e3));
    }
    function D() {
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
    function x() {
      if (!r("gkx")("26258")) return S();
    }
    async function $() {
      var e = await S(),
        t = await (e == null ? void 0 : e.metadataStore.getSecret());
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
    }
    async function P(e, t) {
      var n = await $();
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
    }
    async function N(e) {
      var t = await $();
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
    }
    async function M(e) {
      var t = await $();
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
    }
    async function w(e) {
      var t = await $();
      return t == null
        ? (o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[ctl] getMessageIDHMAC failed: secret unset",
              ])),
          ),
          null)
        : o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
    }
    async function A(e) {
      try {
        var t = o("WAWebUserUtils").getMePnLessOrFallback_DO_NOT_USE().toJid(),
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
    }
    ((l.setChatThreadLoggingState = R),
      (l.setThreadDsTimeframeOffset = L),
      (l.setThreadIdUserSecret = E),
      (l.handleActivitiesForChatThreadLogging = k),
      (l.uploadChatThreadLoggingEvents = I),
      (l.initUploadTimer = T),
      (l.getChatThreadLoggingStateDebug = x),
      (l.getChatThreadID = P),
      (l.getChatThreadIDHMAC = N),
      (l.getCtwa3pdAggregatedThreadIDHMAC = M),
      (l.getMessageIDHMAC = w),
      (l.getThreadIDHMAC = A));
  },
  98,
);
