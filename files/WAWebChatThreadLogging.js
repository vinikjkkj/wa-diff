__d(
  "WAWebChatThreadLogging",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatThreadLoggingEventStore",
    "WAWebChatThreadLoggingEventUploader",
    "WAWebChatThreadLoggingLocalstorageMetadataHandler",
    "WAWebChatThreadLoggingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
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
    async function S(e) {
      e === void 0 && (e = !0);
      var t =
        e &&
        o("WAWebABProps").getABPropConfigValue(
          "message_count_logging_md_enabled",
        );
      (await o(
        "WAWebUserPrefsMultiDevice",
      ).getChatThreadLoggingLastUploadedStartTs()) == null &&
        (await o(
          "WAWebUserPrefsMultiDevice",
        ).setChatThreadLoggingLastUploadedStartTs(0));
      var n = new (o(
          "WAWebChatThreadLoggingLocalstorageMetadataHandler",
        ).ChatThreadLoggingMetadataLocalStorage)(),
        r = t
          ? new (o(
              "WAWebChatThreadLoggingEventStore",
            ).ChatThreadLoggingEventStoreImpl)(n)
          : {
              handleMessages: function () {
                return Promise.resolve();
              },
              getEvent: function () {
                return Promise.resolve();
              },
              getBeforeInclusive: function () {
                return Promise.resolve([]);
              },
              deleteBeforeInclusive: function () {
                return Promise.resolve(0);
              },
            },
        a = t
          ? new (o(
              "WAWebChatThreadLoggingEventUploader",
            ).ChatThreadLoggingEventUploaderImpl)(n, r)
          : {
              uploadEvents: function () {
                return Promise.resolve(0);
              },
            },
        i = await n.getOffset();
      (i != null && I(i),
        (b = { metadataStore: n, eventStore: r, eventUploader: a }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "chat thread logging initialized",
            ])),
        ));
    }
    async function R(e) {
      var t, n;
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: setting offset",
          ])),
      );
      var r =
        (t = await ((n = v()) == null
          ? void 0
          : n.metadataStore.setOffset(e))) != null
          ? t
          : !1;
      return (r && I(e), r);
    }
    function L(e) {
      var t, n;
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "chat_thread_logging: setting thread_id_user_secret",
            ])),
        ),
        (t = (n = v()) == null ? void 0 : n.metadataStore.setSecret(e)) != null
          ? t
          : Promise.resolve(!1)
      );
    }
    function E(e) {
      var t;
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: handling ",
            " message(s)",
          ])),
        e.length,
      ),
        (t = v()) == null ||
          t.eventStore.handleMessages(e).catch(function (e) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "chat_thread_logging: error handling activities",
                ])),
            );
          }));
    }
    async function k(e) {
      var t,
        n,
        r,
        a = await ((t = v()) == null ? void 0 : t.metadataStore.getOffset());
      if (a == null) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[ctl] upload failed: offset unset",
            ])),
        );
        return;
      }
      var i = await ((n = v()) == null ? void 0 : n.metadataStore.getSecret());
      if (i == null) {
        o("WALogger").ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[ctl] upload failed: secret unset",
            ])),
        );
        return;
      }
      var l = await ((r = v()) == null
        ? void 0
        : r.eventUploader.uploadEvents(e));
    }
    function I(e) {
      var t = o("WATimeUtils").unixTime(),
        n = t - (t % 86400),
        r = n + e,
        a = r - t;
      (a < 0 && (a += o("WATimeUtils").DAY_SECONDS),
        self.setTimeout(async function () {
          var t;
          (await ((t = v()) == null ? void 0 : t.eventUploader.uploadEvents()),
            I(e));
        }, a * 1e3));
    }
    function T() {
      if (!r("gkx")("26258")) return v();
    }
    async function D() {
      var e = await v(),
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
    async function x(e, t) {
      var n = await D();
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
    async function $(e) {
      var t = await D();
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
    async function P(e) {
      var t = await D();
      return t == null
        ? (o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[ctl] getMessageIDHMAC failed: secret unset",
              ])),
          ),
          null)
        : o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
    }
    async function N(e) {
      try {
        var t = o("WAWebUserPrefsMeUser")
            .getMePnUserOrThrow_DO_NOT_USE()
            .toJid(),
          n = e.key.id;
        return o("WAWebChatThreadLoggingUtils").generateUserThreadIDHMAC(t, n);
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
    }
    ((l.initChatThreadLogging = S),
      (l.setThreadDsTimeframeOffset = R),
      (l.setThreadIdUserSecret = L),
      (l.handleActivitiesForChatThreadLogging = E),
      (l.uploadChatThreadLoggingEvents = k),
      (l.getChatThreadLoggingStateDebug = T),
      (l.getChatThreadID = x),
      (l.getChatThreadIDHMAC = $),
      (l.getMessageIDHMAC = P),
      (l.getThreadIDHMAC = N));
  },
  98,
);
