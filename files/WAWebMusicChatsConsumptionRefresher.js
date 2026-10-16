__d(
  "WAWebMusicChatsConsumptionRefresher",
  [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebFetchMusicChatsConsumption",
    "WAWebL10NCountryCodes",
    "WAWebMsgType",
    "WAWebMusicParsingUtils",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msgRowOpaqueData"],
      s = 10800;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            a =
              r != null
                ? o("WAWebAsISOCountryCode").asISOCountryCode(
                    o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
                      r.user,
                    ),
                  )
                : null;
          if (a == null) return !1;
          var i = o("WATimeUtils").unixTime(),
            l = yield d(t, (n == null ? void 0 : n.force) === !0, i);
          if (l.length === 0) return !1;
          var s = yield o(
            "WAWebFetchMusicChatsConsumption",
          ).fetchMusicChatsConsumption(
            l.map(function (e) {
              var t = e.musicData;
              return t.musicContentMediaId;
            }),
            a,
          );
          if (s == null) return !1;
          var u = new Map(
              s.map(function (e) {
                return [e.mediaId, e];
              }),
            ),
            c = yield d(
              l.map(function (e) {
                var t = e.msg;
                return t.id.toString();
              }),
              (n == null ? void 0 : n.force) === !0,
              i,
            ),
            m = c
              .map(function (e) {
                return _(e, u.get(e.musicData.musicContentMediaId), i);
              })
              .filter(Boolean);
          return m.length === 0
            ? !1
            : (yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkMergeOnly(
                  m.map(function (e) {
                    var t = e.msgKey,
                      n = e.msgRowOpaqueData;
                    return { id: t, msgRowOpaqueData: n };
                  }),
                ),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateMusicMsgConsumption",
                {
                  updates: m.map(function (t) {
                    var n = t.msgRowOpaqueData,
                      r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    return r;
                  }),
                },
              ),
              !0);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(Array.from(e));
          return r
            .filter(Boolean)
            .map(function (e) {
              return p(e, t, n);
            })
            .filter(Boolean);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      var r = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        a = r.musicData;
      return r.type !== o("WAWebMsgType").MSG_TYPE.MUSIC ||
        a == null ||
        (!t &&
          a.consumptionCheckedAtS != null &&
          n - a.consumptionCheckedAtS < s)
        ? null
        : { msg: r, musicData: a };
    }
    function _(e, t, n) {
      var r,
        a,
        i,
        l = e.msg,
        s = e.musicData;
      if (t == null) return null;
      var u = babelHelpers.extends({}, s, {
          songUri:
            (r = o("WAWebMusicParsingUtils").toAllowedUri(t.songUri, "song")) !=
            null
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
        }),
        c = o("WAWebDBMessageSerialization").dbRowFromMessage(
          babelHelpers.extends({}, l, { musicData: u }),
          { storeReportingInfo: !0 },
        ),
        d = c.msgRowOpaqueData;
      return { msgKey: l.id.toString(), msgRowOpaqueData: d, musicData: u };
    }
    l.refreshMusicChatsConsumption = u;
  },
  98,
);
