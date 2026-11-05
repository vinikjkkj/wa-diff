__d(
  "WAWebSearchFirstPartyStickersAction",
  [
    "JSResourceForInteraction",
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
      p = r("JSResourceForInteraction")(
        "WAWebRecentStickerCollectionMd",
      ).__setRef("WAWebSearchFirstPartyStickersAction"),
      _ = new Map(),
      f;
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          for (var p = l || "default", g = 0, h = 0; g <= e; )
            g += 3 + encodeURIComponent(t[h++]).length;
          var C = t.slice(0, h - 1).join(","),
            b = { country: p },
            v = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            S = v === s ? "" + v + u : "" + v + c,
            R = o("WAWebStickerUtils").getStickerFetchParamsFromABConfig(),
            L = y(),
            E = o("WAWebABProps").getABPropConfigValue(
              "sticker_suggestion_enabled",
            );
          E && f !== i && (_.clear(), (f = i));
          var k = r("WAWebURLUtils").build(
            S,
            babelHelpers.extends(
              {},
              R,
              L,
              { cat: "sticker_search", terms: C, _nc_cat: 1 },
              b,
            ),
          );
          if (E) {
            var I = _.get(k);
            if (I != null && I.expiresAt > Date.now()) return I.stickers;
            _.delete(k);
          }
          var T = new (o(
            "WAWebStickerCommonQueryToStaticServerWamEvent",
          ).StickerCommonQueryToStaticServerWamEvent)();
          T.startQueryLatencyMs();
          var D = yield r("WAWebPonyfillsFetch")(k, {
            signal: n == null ? void 0 : n.signal,
          });
          if (
            (T.markQueryLatencyMs(),
            T.set({
              httpResponseCode: D.status,
              params: new URLSearchParams(b).toString(),
              queryType: o("WAWebWamEnumQueryType").QUERY_TYPE.STICKER_SEARCH,
            }),
            T.commit(),
            !D.ok)
          )
            throw new (o("WAWebServerErrors").InvalidServerResponseError)(
              k,
              D.status.toString(),
              "Invalid response from WhatsApp stickers endpoint",
            );
          var x = yield D.json();
          if (x == null)
            throw new (o("WAWebServerErrors").InvalidServerResponseError)(
              k,
              D.status.toString(),
              "Invalid response from WhatsApp stickers endpoint: " +
                JSON.stringify(x),
            );
          var $ = x.map(function (e, t) {
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
            $.length > 0 &&
            E &&
            ((n == null ? void 0 : n.signal) == null || !n.signal.aborted)
          ) {
            if (_.size >= m) {
              var P = _.keys().next().value;
              P != null && _.delete(P);
            }
            _.set(k, { expiresAt: Date.now() + d, stickers: $ });
          }
          return $;
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      var e,
        t = p.getModuleIfRequired();
      return o("WAWebStickerUtils").getPremiumParams(
        (e = t == null ? void 0 : t.RecentStickerCollectionMd.length) != null
          ? e
          : 0,
      );
    }
    l.searchFirstPartyStickers = g;
  },
  98,
);
