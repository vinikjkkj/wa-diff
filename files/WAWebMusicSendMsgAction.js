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
    "WAWebNetworkStatus",
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
      h,
      y,
      C = 15e3,
      b = 6e4,
      v = new Map(),
      S = new Map();
    async function R(e, t, n) {
      var a = e.composeQuotedMsg,
        i = await N(e, t, n, a);
      if (i != null) {
        e.composeQuotedMsg === a && (e.composeQuotedMsg = null);
        var l = o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, i, L),
          d = l[0],
          m = l[1];
        d.catch(function (e) {
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
        var p = await m.catch(function (e) {
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
          (p == null ? void 0 : p.messageSendResult) ===
          o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          try {
            await E(i.id);
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
    async function L(e) {
      var t = await k(e).catch(function (e) {
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
    function E(e) {
      return o("WAWebDBUpdateMessageTable").updateMessageTable(e, {
        isSendFailure: !1,
      });
    }
    async function k(e) {
      var t = e.musicData;
      if (t == null)
        return (
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[music] send refused: message without music data",
              ])),
          ),
          "failed"
        );
      (await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
        isSendFailure: !0,
      }),
        await r("WAWebNetworkStatus").waitIfOffline());
      var n = await I(e);
      if (n != null) return n;
      var a = await x(e, t);
      return a == null || a.type === "failed"
        ? "failed"
        : a.type === "song_unavailable"
          ? "song_unavailable"
          : T(e, t, a);
    }
    async function I(e) {
      var t = await o("WAWebSchemaMessage")
        .getMessageTable()
        .get(e.id.toString());
      if (t == null) return (v.delete(e.id.toString()), "deleted");
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(t).musicData;
      return (n == null ? void 0 : n.musicContentMediaId) == null
        ? null
        : (e.set({ musicData: n }), "saved");
    }
    function T(e, t, n) {
      var r = e.id.toString(),
        o = S.get(r);
      if (o != null) return o;
      var a = D(e, t, n).finally(function () {
        S.delete(r);
      });
      return (S.set(r, a), a);
    }
    async function D(e, t, n) {
      var r,
        a = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(e.id.toString());
      if (a == null) return (v.delete(e.id.toString()), "deleted");
      var i = o("WAWebDBMessageSerialization").messageFromDbRow(a).musicData;
      if ((i == null ? void 0 : i.musicContentMediaId) != null)
        return (e.set({ musicData: i }), v.delete(e.id.toString()), "saved");
      var l = babelHelpers.extends({}, t, {
          musicContentMediaId: n.mediaId,
          countryBlocklist: o("WAWebMusicParsingUtils").countryCodeSetToBuffer(
            new Set(n.countryBlocklist),
          ),
        }),
        s = o("WAWebDBMessageSerialization").dbRowFromMessage(
          babelHelpers.extends(
            {},
            o("WAWebDBMessageSerialization").messageFromDbRow(a),
            { musicData: l },
          ),
          { storeReportingInfo: !0 },
        ),
        u = s.msgRowOpaqueData;
      await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
        msgRowOpaqueData: u,
      });
      var c = await o("WAWebSchemaMessage")
        .getMessageTable()
        .get(e.id.toString());
      return c == null
        ? (v.delete(e.id.toString()), "deleted")
        : ((r = o("WAWebDBMessageSerialization").messageFromDbRow(
              c,
            ).musicData) == null
              ? void 0
              : r.musicContentMediaId) !== n.mediaId
          ? (o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] send stopped: the media id didn't persist",
                ])),
            ),
            "failed")
          : (e.set({ musicData: l }),
            v.delete(e.id.toString()),
            o("WAWebMusicSendLogger").logMusicSend(e.id),
            "saved");
    }
    async function x(e, t) {
      try {
        return await o("WAPromiseTimeout").promiseTimeout($(e, t), C);
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
    function $(e, t) {
      var n,
        a,
        i,
        l = e.id.toString(),
        s = v.get(l);
      if (s != null && (s.isSettled || Date.now() - s.startedAtMs < b))
        return s.report;
      var u = o(
          "WAWebMusicCreationReporterLoadable",
        ).reportMusicCreationLoadable({
          songId: t.songId,
          songStartTimeMs: (n = t.songStartTimeMs) != null ? n : 0,
          clipDurationMs: (a = t.clipDurationMs) != null ? a : 0,
          style:
            (i = t.style) != null
              ? i
              : o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
                  .VINYL,
        }),
        c = { report: u, startedAtMs: Date.now(), isSettled: !1 };
      return (
        v.set(l, c),
        u.then(
          function (n) {
            ((c.isSettled = !0),
              n.type === "reported"
                ? P(e, t, n)
                : v.get(l) === c && v.delete(l));
          },
          function (e) {
            (o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[music] creation report failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              v.get(l) === c && v.delete(l));
          },
        ),
        u
      );
    }
    async function P(e, t, n) {
      var a;
      if (
        !(
          n.type !== "reported" ||
          ((a = e.musicData) == null ? void 0 : a.musicContentMediaId) != null
        )
      )
        try {
          await T(e, t, n);
        } catch (e) {
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] couldn't keep a late media id",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("music-late-media-id-save-failed");
        }
    }
    async function N(e, t, n, a) {
      if (!o("WAWebMusicGatingUtils").canSendMusicTo(e.id))
        return (
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] send refused: song shorter than the shortest clip",
                ])),
            )
            .sendLogs("music-send-refused"),
          null
        );
      var i = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          e,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
        ),
        l = o("WAWebChatGetters").getIsGroup(e) ? i : void 0,
        s = o("WATimeUtils").unixTime();
      return babelHelpers.extends(
        {
          id: new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: e.id,
            id: await r("WAWebMsgKey").newId(),
            participant: l,
          }),
          type: o("WAWebMsgType").MSG_TYPE.MUSIC,
          kind: "music",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          t: s,
          from: i,
          to: e.id,
          author: l,
          isNewMsg: !0,
          local: !0,
          ack: o("WAWebAck").ACK.CLOCK,
          musicData: M(t, n, s),
        },
        a == null ? void 0 : a.msgContextInfo(e.id),
        o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(e),
      );
    }
    function M(t, n, r) {
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
    ((l.sendMusicMsg = R),
      (l.reportMusicCreationBeforeSend = L),
      (l.clearPendingSendFailure = E),
      (l.createMusicMsgData = N));
  },
  98,
);
