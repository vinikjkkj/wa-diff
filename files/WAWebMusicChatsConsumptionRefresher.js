__d(
  "WAWebMusicChatsConsumptionRefresher",
  [
    "WALongInt",
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebFetchMusicChatsConsumption",
    "WAWebL10NCountryCodes",
    "WAWebMsgType",
    "WAWebMusicLyricsUtils",
    "WAWebMusicParsingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgRowOpaqueData"],
      s = 10800,
      u = 60,
      c = new Map();
    async function d(t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        a =
          r != null
            ? o("WAWebAsISOCountryCode").asISOCountryCode(
                o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(r.user),
              )
            : null;
      if (a == null) return !1;
      var i = o("WATimeUtils").unixTime(),
        l = (await m(t, (n == null ? void 0 : n.force) === !0, i)).filter(
          function (e) {
            var t = e.mediaId;
            return (n == null ? void 0 : n.force) === !0 || !_(t, i);
          },
        );
      if (l.length === 0) return !1;
      var s = l.some(function (e) {
          var t = e.musicData;
          return (
            t.style ===
            o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle
              .LYRICS
          );
        }),
        u = await o(
          "WAWebFetchMusicChatsConsumption",
        ).fetchMusicChatsConsumption(
          l.map(function (e) {
            var t = e.mediaId;
            return t;
          }),
          a,
          s,
        ),
        c = new Map(
          (u != null ? u : []).map(function (e) {
            return [e.mediaId, e];
          }),
        );
      if (
        (l.forEach(function (e) {
          var t = e.mediaId;
          return f(t, c.has(t), i);
        }),
        u == null)
      )
        return !1;
      var d = await m(
          l.map(function (e) {
            var t = e.msg;
            return t.id.toString();
          }),
          (n == null ? void 0 : n.force) === !0,
          i,
        ),
        p = d
          .map(function (e) {
            return g(e, c.get(e.mediaId), i);
          })
          .filter(Boolean);
      return p.length === 0
        ? !1
        : (await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkMergeOnly(
              p.map(function (e) {
                var t = e.msgKey,
                  n = e.msgRowOpaqueData;
                return { id: t, msgRowOpaqueData: n };
              }),
            ),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateMusicMsgConsumption",
            {
              updates: p.map(function (t) {
                var n = t.msgRowOpaqueData,
                  r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                return r;
              }),
            },
          ),
          !0);
    }
    async function m(e, t, n) {
      var r = await o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(Array.from(e));
      return r
        .filter(Boolean)
        .map(function (e) {
          return p(e, t, n);
        })
        .filter(Boolean);
    }
    function p(e, t, n) {
      var r = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        a = r.musicData,
        i = a == null ? void 0 : a.musicContentMediaId;
      return r.type !== o("WAWebMsgType").MSG_TYPE.MUSIC ||
        a == null ||
        i == null ||
        (!t &&
          a.consumptionCheckedAtS != null &&
          n - a.consumptionCheckedAtS < s)
        ? null
        : { mediaId: i, msg: r, musicData: a };
    }
    function _(e, t) {
      var n = c.get(e);
      return n != null && t - n < u;
    }
    function f(e, t, n) {
      t ? c.delete(e) : c.set(e, n);
    }
    function g(e, t, n) {
      var r,
        a,
        i,
        l = e.msg,
        s = e.musicData;
      if (t == null) return null;
      var u = babelHelpers.extends(
          {},
          s,
          {
            songUri:
              (r = o("WAWebMusicParsingUtils").toAllowedUri(
                t.songUri,
                "song",
              )) != null
                ? r
                : s.songUri,
            artworkUri:
              (a = o("WAWebMusicParsingUtils").toAllowedUri(
                t.artworkUri,
                "artwork",
              )) != null
                ? a
                : s.artworkUri,
            consumptionCheckedAtS: n,
            isAvailableForConsumption:
              (i = t.isAvailable) != null ? i : s.isAvailableForConsumption,
          },
          h(s, t.lyrics, n),
        ),
        c = o("WAWebDBMessageSerialization").dbRowFromMessage(
          babelHelpers.extends({}, l, { musicData: u }),
          { storeReportingInfo: !0 },
        ),
        d = c.msgRowOpaqueData;
      return { msgKey: l.id.toString(), msgRowOpaqueData: d, musicData: u };
    }
    function h(e, t, n) {
      var r, a, i;
      if (
        e.style !==
        o("WAWebProtobufsE2E.pb").Message$MusicMessage$MusicMessageStyle.LYRICS
      )
        return {};
      if (t == null)
        return o("WAWebMusicLyricsUtils").areLyricsExpired(e, n)
          ? { lyrics: [] }
          : {};
      if (!t.available) return { lyrics: [], lyricsConfirmedAtS: n };
      var l = (r = e.songStartTimeMs) != null ? r : 0,
        s = l + ((a = e.clipDurationMs) != null ? a : 0),
        u = t.lines.filter(function (e) {
          var t = o("WALongInt").maybeNumber(e.startTimeInMs),
            n = o("WALongInt").maybeNumber(e.endTimeInMs);
          return t == null || n == null || (n > l && t < s);
        });
      return u.length === 0 && e.clipDurationMs != null
        ? {
            lyrics: [o("WAWebMusicLyricsUtils").getNoLyricsLine(l, s)],
            lyricsConfirmedAtS: n,
          }
        : {
            lyrics:
              (i = o("WAWebMusicLyricsUtils").toMusicLyrics(
                { lines: u },
                e.songStartTimeMs,
                e.clipDurationMs,
              )) != null
                ? i
                : [],
            lyricsConfirmedAtS: n,
          };
    }
    l.refreshMusicChatsConsumption = d;
  },
  98,
);
