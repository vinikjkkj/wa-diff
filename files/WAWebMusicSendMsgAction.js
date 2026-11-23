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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "clipDurationMs",
        "lyrics",
        "lyricsConfirmedAtS",
        "songStartTimeMs",
        "style",
      ],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = 15e3;
    async function y(e, t, n) {
      var a = await R(e, t, n);
      if (a != null) {
        var i = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, a, C),
          l = i[0],
          d = i[1];
        l.catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] send stopped before the song reached the chat",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("music-send-add-failed");
        });
        var m = await d.catch(function (e) {
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
            await b(a.id);
          } catch (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] couldn't clear the pending send failure",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("music-clear-pending-failure-failed");
          }
      }
    }
    async function C(e) {
      var t = await v(e).catch(function (e) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
          o("WAWebMusicSongUnavailableAlert.react").showSongUnavailableAlert(),
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
          await o("WAWebDBUpdateMessageTable")
            .updateMessageTable(e.id, a)
            .catch(r("WAWebNoop")));
      }
      throw r("err")("music creation report: %s", t);
    }
    function b(e) {
      return o("WAWebDBUpdateMessageTable").updateMessageTable(e, {
        isSendFailure: !1,
      });
    }
    async function v(e) {
      var t,
        n = e.musicData;
      if (n == null)
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[music] send refused: message without music data",
              ])),
          ),
          "failed"
        );
      await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
        isSendFailure: !0,
      });
      var r = await S(n);
      if (r == null || r.type === "failed") return "failed";
      if (r.type === "song_unavailable") return "song_unavailable";
      var a = await o("WAWebSchemaMessage")
        .getMessageTable()
        .get(e.id.toString());
      if (a == null) return "deleted";
      var i = babelHelpers.extends({}, n, {
          musicContentMediaId: r.mediaId,
          countryBlocklist: o("WAWebMusicParsingUtils").countryCodeSetToBuffer(
            new Set(r.countryBlocklist),
          ),
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
      await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
        msgRowOpaqueData: s,
      });
      var u = await o("WAWebSchemaMessage")
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] send stopped: the media id didn't persist",
                ])),
            ),
            "failed")
          : (e.set({ musicData: i }),
            o("WAWebMusicSendLogger").logMusicSend(e.id),
            "saved");
    }
    async function S(e) {
      try {
        var t, n, r;
        return await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebMusicCreationReporterLoadable").reportMusicCreationLoadable({
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
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[music] creation report didn't finish: ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    async function R(e, t, n) {
      if (!o("WAWebMusicGatingUtils").canSendMusicTo(e.id))
        return (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
            id: await r("WAWebMsgKey").newId(),
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
          musicData: L(t, n, l),
        },
        o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(e),
      );
    }
    function L(t, n, r) {
      var a,
        i = n.clipDurationMs,
        l = n.lyrics,
        s = n.lyricsConfirmedAtS,
        u = n.songStartTimeMs,
        c = n.style,
        d = babelHelpers.objectWithoutPropertiesLoose(n, e),
        m = l != null && l.length > 0,
        p =
          (a = o("WAWebMusicParsingUtils")
            .getProducibleStyles(m)
            .find(function (e) {
              return e === c;
            })) != null
            ? a
            : o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
                .VINYL,
        _ = Math.min(
          Math.max(
            i != null ? i : o("WAWebMusicClip").MIN_CLIP_MS,
            o("WAWebMusicClip").MIN_CLIP_MS,
          ),
          o("WAWebMusicClip").getMaxClipDurationMs(t.durationMs, 0),
        );
      return babelHelpers.extends(
        {},
        d,
        {
          style: p,
          songStartTimeMs: o("WAWebMusicClip").clampClipStartMs(
            u != null ? u : 0,
            t.durationMs,
            _,
          ),
          clipDurationMs: _,
        },
        p ===
          o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
            .LYRICS
          ? { lyrics: l, lyricsConfirmedAtS: r }
          : {},
      );
    }
    ((l.sendMusicMsg = y),
      (l.reportMusicCreationBeforeSend = C),
      (l.clearPendingSendFailure = b),
      (l.createMusicMsgData = R));
  },
  98,
);
