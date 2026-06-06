__d(
  "WAWebSearchFirstPartyStickersAction",
  [
    "WAWebCurrentUser",
    "WAWebL10NCountryCodes",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebMediaHostsUtil",
    "WAWebMiscErrors",
    "WAWebPonyfillsFetch",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebStickerCommonQueryToStaticServerWamEvent",
    "WAWebStickerModel",
    "WAWebStickerUtils",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumQueryType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 250,
      s = "https://static.whatsapp.net",
      u = "/sticker",
      c = "/wa/static/sticker";
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i =
              (a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
                ? void 0
                : a.user,
            l = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(i);
          o("WAWebCurrentUser").isEmployee() &&
            i != null &&
            o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).compareCountryCodeOutput(i, l, "searchFirstPartyStickers");
          for (var d = l || "default", m = 0, p = 0; m <= e; )
            m += 3 + encodeURIComponent(t[p++]).length;
          var _ = t.slice(0, p - 1).join(","),
            f = { country: d },
            g = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            h = g === s ? "" + g + u : "" + g + c,
            y = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig(),
            C = r("WAWebURLUtils").build(
              h,
              babelHelpers.extends(
                {},
                y,
                { cat: "sticker_search", terms: _, _nc_cat: 1 },
                f,
              ),
            ),
            b = new (o(
              "WAWebStickerCommonQueryToStaticServerWamEvent",
            ).StickerCommonQueryToStaticServerWamEvent)();
          b.startQueryLatencyMs();
          var v = yield r("WAWebPonyfillsFetch")(C, {
            signal: n == null ? void 0 : n.signal,
          });
          if (
            (b.markQueryLatencyMs(),
            b.set({
              httpResponseCode: v.status,
              params: new (r("WAWebPonyfillsUrlSearchParams"))(f).toString(),
              queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_SEARCH,
            }),
            b.commit(),
            !v.ok)
          )
            throw new (o("WAWebMiscErrors").InvalidServerResponseError)(
              C,
              v.status.toString(),
              "Invalid response from WhatsApp stickers endpoint",
            );
          var S = yield v.json();
          if (S == null)
            throw new (o("WAWebMiscErrors").InvalidServerResponseError)(
              C,
              v.status.toString(),
              "Invalid response from WhatsApp stickers endpoint: " +
                JSON.stringify(S),
            );
          return S.map(function (e, t) {
            return new (o("WAWebStickerModel").StickerModel)({
              mimetype: e.mimetype,
              width: e.width,
              height: e.height,
              filehash: e["file-hash"],
              directPath: e["direct-path"],
              mediaKey: e["media-key"],
              id: e["file-hash"],
              encFilehash: e["enc-file-hash"],
              mediaKeyTimestamp: 0,
              index: t,
            });
          });
        })),
        m.apply(this, arguments)
      );
    }
    l.searchFirstPartyStickers = d;
  },
  98,
);
