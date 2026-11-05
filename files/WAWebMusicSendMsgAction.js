__d(
  "WAWebMusicSendMsgAction",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebDBMessageSerialization",
    "WAWebDBUpdateMessageTable",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMeUserForChat",
    "WAWebMediaPrepHelpers",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebMusicClip",
    "WAWebMusicCreationReporterLoadable",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebMusicSendLogger",
    "WAWebMusicSongUnavailableAlert.react",
    "WAWebNoop",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessage",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      g = [
        "clipDurationMs",
        "lyrics",
        "lyricsConfirmedAtS",
        "songStartTimeMs",
        "style",
      ],
      h = 15e3;
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = yield I(t, n, a);
          if (i != null) {
            var l = o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, i, b),
              c = l[0],
              d = l[1];
            c.catch(function (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] send stopped before the song reached the chat",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("music-send-add-failed");
            });
            var m = yield d.catch(function (e) {
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] send stopped: ",
                      "",
                    ])),
                  String(e),
                ),
                null
              );
            });
            if (
              (m == null ? void 0 : m.messageSendResult) ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            )
              try {
                yield S(i.id);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[music] couldn't clear the pending send failure",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("music-clear-pending-failure-failed");
              }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield R(e).catch(function (e) {
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] send stopped: ",
                    "",
                  ])),
                String(e),
              ),
              "failed"
            );
          });
          if (t === "saved") return e;
          if (
            (t === "song_unavailable" &&
              o(
                "WAWebMusicSongUnavailableAlert.react",
              ).showSongUnavailableAlert(),
            t === "deleted")
          ) {
            var n;
            (n = e.wamMessageSendReporter) == null ||
              n.postFailure({
                result: o("WAWebWamEnumMessageSendResultType")
                  .MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
                isTerminal: !0,
              });
          } else {
            o("WAWebMediaPrepHelpers").errorUpload(e);
            var a = { isSendFailure: !0, ack: o("WAWebAck").ACK.FAILED };
            (e.set(a),
              yield o("WAWebDBUpdateMessageTable")
                .updateMessageTable(e.id, a)
                .catch(r("WAWebNoop")));
          }
          throw r("err")("music creation report: %s", t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return o("WAWebDBUpdateMessageTable").updateMessageTable(e, {
        isSendFailure: !1,
      });
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.musicData;
          if (n == null)
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] send refused: message without music data",
                  ])),
              ),
              "failed"
            );
          yield o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
            isSendFailure: !0,
          });
          var r = yield E(n);
          if (r == null || r.type === "failed") return "failed";
          if (r.type === "song_unavailable") return "song_unavailable";
          var a = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.id.toString());
          if (a == null) return "deleted";
          var i = babelHelpers.extends({}, n, {
              musicContentMediaId: r.mediaId,
              countryBlocklist: o(
                "WAWebMusicParsingUtils",
              ).countryCodeSetToBuffer(new Set(r.countryBlocklist)),
            }),
            l = o("WAWebDBMessageSerialization").dbRowFromMessage(
              babelHelpers.extends(
                {},
                o("WAWebDBMessageSerialization").messageFromDbRow(a),
                { musicData: i },
              ),
              { storeReportingInfo: !0 },
            ),
            s = l.msgRowOpaqueData;
          yield o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
            msgRowOpaqueData: s,
          });
          var u = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.id.toString());
          return u == null
            ? "deleted"
            : ((t = o("WAWebDBMessageSerialization").messageFromDbRow(
                  u,
                ).musicData) == null
                  ? void 0
                  : t.musicContentMediaId) !== r.mediaId
              ? (o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] send stopped: the media id didn't persist",
                    ])),
                ),
                "failed")
              : (e.set({ musicData: i }),
                o("WAWebMusicSendLogger").logMusicSend(e.id),
                "saved");
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
          try {
            var t, n, r;
            return yield o("WAPromiseTimeout").promiseTimeout(
              o(
                "WAWebMusicCreationReporterLoadable",
              ).reportMusicCreationLoadable({
                songId: e.songId,
                songStartTimeMs: (t = e.songStartTimeMs) != null ? t : 0,
                clipDurationMs: (n = e.clipDurationMs) != null ? n : 0,
                style:
                  (r = e.style) != null
                    ? r
                    : o("WAWebProtobufsE2E.pb")
                        .Message$MusicMessage$MusicMessageStyle.VINYL,
              }),
              h,
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report didn't finish: ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebMusicGatingUtils").canSendMusicTo(e.id))
            return (
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] send refused: music can't be sent to this chat",
                    ])),
                )
                .sendLogs("music-send-refused"),
              null
            );
          if (!o("WAWebMusicClip").canClipSong(t.durationMs))
            return (
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] send refused: song shorter than the shortest clip",
                    ])),
                )
                .sendLogs("music-send-refused"),
              null
            );
          var a = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
              e,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            i = o("WAWebChatGetters").getIsGroup(e) ? a : void 0,
            l = o("WATimeUtils").unixTime();
          return babelHelpers.extends(
            {
              id: new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: e.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: i,
              }),
              type: o("WAWebMsgType").MSG_TYPE.MUSIC,
              kind: "music",
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              t: l,
              from: a,
              to: e.id,
              author: i,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              musicData: D(t, n, l),
            },
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(e),
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      var r,
        a = t.clipDurationMs,
        i = t.lyrics,
        l = t.lyricsConfirmedAtS,
        s = t.songStartTimeMs,
        u = t.style,
        c = babelHelpers.objectWithoutPropertiesLoose(t, g),
        d = i != null && i.length > 0,
        m =
          (r = o("WAWebMusicParsingUtils")
            .getProducibleStyles(d)
            .find(function (e) {
              return e === u;
            })) != null
            ? r
            : o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
                .VINYL,
        p = Math.min(
          Math.max(
            a != null ? a : o("WAWebMusicClip").MIN_CLIP_MS,
            o("WAWebMusicClip").MIN_CLIP_MS,
          ),
          o("WAWebMusicClip").getMaxClipDurationMs(e.durationMs, 0),
        );
      return babelHelpers.extends(
        {},
        c,
        {
          style: m,
          songStartTimeMs: o("WAWebMusicClip").clampClipStartMs(
            s != null ? s : 0,
            e.durationMs,
            p,
          ),
          clipDurationMs: p,
        },
        m ===
          o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
            .LYRICS
          ? { lyrics: i, lyricsConfirmedAtS: n }
          : {},
      );
    }
    ((l.sendMusicMsg = y),
      (l.reportMusicCreationBeforeSend = b),
      (l.clearPendingSendFailure = S),
      (l.createMusicMsgData = I));
  },
  98,
);
