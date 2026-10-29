__d(
  "WAWebMusicLyricsRetentionJob",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDBMessageSerialization",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 5 * o("WATimeUtils").DAY_SECONDS,
      u = 200;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WATimeUtils").unixTime() - s,
            n = yield m(t, [o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MUSIC_MSG]);
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[music] cleared expired lyrics from ",
                " messages",
              ])),
            n,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["typeFlag", "t", "internalId"],
                t,
                [o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MUSIC_MSG, e],
                { lowerInclusive: !1, upperInclusive: !1, limit: u },
              ),
            r = n
              .map(function (t) {
                return _(t, e);
              })
              .filter(Boolean);
          r.length > 0 &&
            (yield o("WAWebSchemaMessage").getMessageTable().bulkMergeOnly(r));
          var a = n.at(-1);
          return n.length < u || (a == null ? void 0 : a.internalId) == null
            ? r.length
            : r.length +
                (yield m(e, [
                  o("WAWebMsgType").MESSAGE_TYPE_FLAGS.MUSIC_MSG,
                  a.t,
                  a.internalId,
                ]));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = babelHelpers.extends({}, e);
      o("WAWebDBMessageSerialization").movFieldFromOpaqueDataBackToMsg(n);
      var r = n.musicData;
      if (
        (r == null ? void 0 : r.lyrics) == null ||
        r.lyrics.length === 0 ||
        (r.lyricsConfirmedAtS != null && r.lyricsConfirmedAtS >= t)
      )
        return null;
      var a = babelHelpers.extends({}, n, {
        musicData: babelHelpers.extends({}, r, { lyrics: [] }),
      });
      return (
        o("WAWebDBMessageSerialization").movEncFieldToOpaqueData(a, {
          storeReportingInfo: !0,
        }),
        { id: e.id, msgRowOpaqueData: a.msgRowOpaqueData }
      );
    }
    l.cleanExpiredMusicLyricsJob = c;
  },
  98,
);
