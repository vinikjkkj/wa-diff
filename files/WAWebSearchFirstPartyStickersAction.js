__d(
  "WAWebSearchFirstPartyStickersAction",
  [
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebL10NCountryCodes",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebMediaHostsUtil",
    "WAWebPonyfillsFetch",
    "WAWebServerErrors",
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
      c = "/wa/static/sticker",
      d = 300 * 1e3,
      m = 20,
      p = new Map(),
      _;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          for (var f = l || "default", g = 0, h = 0; g <= e; )
            g += 3 + encodeURIComponent(t[h++]).length;
          var y = t.slice(0, h - 1).join(","),
            C = { country: f },
            b = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            v = b === s ? "" + b + u : "" + b + c,
            S = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig(),
            R = o("WAWebABProps").getABPropConfigValue(
              "sticker_suggestion_enabled",
            );
          R && _ !== i && (p.clear(), (_ = i));
          var L = r("WAWebURLUtils").build(
            v,
            babelHelpers.extends(
              {},
              S,
              { cat: "sticker_search", terms: y, _nc_cat: 1 },
              C,
            ),
          );
          if (R) {
            var E = p.get(L);
            if (E != null && E.expiresAt > Date.now()) return E.stickers;
            p.delete(L);
          }
          var k = new (o(
            "WAWebStickerCommonQueryToStaticServerWamEvent",
          ).StickerCommonQueryToStaticServerWamEvent)();
          k.startQueryLatencyMs();
          var I = yield r("WAWebPonyfillsFetch")(L, {
            signal: n == null ? void 0 : n.signal,
          });
          if (
            (k.markQueryLatencyMs(),
            k.set({
              httpResponseCode: I.status,
              params: new URLSearchParams(C).toString(),
              queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_SEARCH,
            }),
            k.commit(),
            !I.ok)
          )
            throw new (o("WAWebServerErrors").InvalidServerResponseError)(
              L,
              I.status.toString(),
              "Invalid response from WhatsApp stickers endpoint",
            );
          var T = yield I.json();
          if (T == null)
            throw new (o("WAWebServerErrors").InvalidServerResponseError)(
              L,
              I.status.toString(),
              "Invalid response from WhatsApp stickers endpoint: " +
                JSON.stringify(T),
            );
          var D = T.map(function (e, t) {
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
          if (
            D.length > 0 &&
            R &&
            ((n == null ? void 0 : n.signal) == null || !n.signal.aborted)
          ) {
            if (p.size >= m) {
              var x = p.keys().next().value;
              x != null && p.delete(x);
            }
            p.set(L, { expiresAt: Date.now() + d, stickers: D });
          }
          return D;
        })),
        g.apply(this, arguments)
      );
    }
    l.searchFirstPartyStickers = f;
  },
  98,
);
