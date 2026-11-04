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
      f = [
        "clipDurationMs",
        "lyrics",
        "lyricsConfirmedAtS",
        "songStartTimeMs",
        "style",
      ],
      g = 15e3;
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = yield k(t, n, a);
          if (i != null) {
            var l = o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, i, C),
              u = l[1],
              c = yield u.catch(function (t) {
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[music] send stopped: ",
                        "",
                      ])),
                    String(t),
                  ),
                  null
                );
              });
            if (
              (c == null ? void 0 : c.messageSendResult) ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            )
              try {
                yield v(i.id);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[music] couldn't clear the pending send failure",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("music-clear-pending-failure-failed");
              }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield S(e).catch(function (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return o("WAWebDBUpdateMessageTable").updateMessageTable(e, {
        isSendFailure: !1,
      });
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.musicData;
          if (n == null)
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] send refused: message without music data",
                  ])),
              ),
              "failed"
            );
          yield o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
            isSendFailure: !0,
          });
          var r = yield L(n);
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[music] send stopped: the media id didn't persist",
                    ])),
                ),
                "failed")
              : (e.set({ musicData: i }), "saved");
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              g,
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report didn't finish: ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebMusicGatingUtils").canSendMusicTo(e.id))
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] send refused: music can't be sent to this chat",
                  ])),
              ),
              null
            );
          if (!o("WAWebMusicClip").canClipSong(t.durationMs))
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] send refused: song shorter than the shortest clip",
                  ])),
              ),
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
              musicData: T(t, n, l),
            },
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(e),
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      var r,
        a = t.clipDurationMs,
        i = t.lyrics,
        l = t.lyricsConfirmedAtS,
        s = t.songStartTimeMs,
        u = t.style,
        c = babelHelpers.objectWithoutPropertiesLoose(t, f),
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
    ((l.sendMusicMsg = h),
      (l.reportMusicCreationBeforeSend = C),
      (l.clearPendingSendFailure = v),
      (l.createMusicMsgData = k));
  },
  98,
);
