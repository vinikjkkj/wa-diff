__d(
  "WAWebFetchMusicCatalog",
  [
    "WALogger",
    "WAWebACSTokenConfig",
    "WAWebAsISOCountryCode",
    "WAWebL10NCountryCodes",
    "WAWebL10nGetRenderedLocale",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicParsingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "28486923140999264",
      m = 25,
      p = 150,
      _ = "1490318767758566",
      f = "HIGHLIGHT_TIME_IN_MS";
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            n =
              t != null
                ? o("WAWebAsISOCountryCode").asISOCountryCode(
                    o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
                      t.user,
                    ),
                  )
                : null;
          if (n == null) return { ok: !1, error: "no_country" };
          var r = yield o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
            docId: d,
            project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
            variables: y(e, n),
            viaOhai: !1,
          });
          if (!r.ok) return { ok: !1, error: r.error.type };
          var a = x(r.data, "xwa_music_picker");
          return a == null || typeof a != "object"
            ? { ok: !1, error: "invalid_response" }
            : { ok: !0, page: v(a) };
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n = e.artistId,
        r = e.browseSessionId,
        a = e.category,
        i = e.cursor,
        l = e.searchText,
        s = l != null && l !== "",
        u = {
          available_countries: [t],
          search_text: s ? l : null,
          first: m,
          product: "WA_CHATS",
          result_types: C(n, s),
          browse_session_id: r,
          locale: o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale(),
        },
        c = b(e, s);
      return (
        c != null && (u.constraint = c),
        a != null && !s && (u.category_params = { category_type: a }),
        i != null && (u.end_cursor = i),
        { params: u, artwork_width: p, artwork_height: p, browse_session_id: r }
      );
    }
    function C(e, t) {
      return e != null
        ? ["TRACK"]
        : t
          ? ["TRACK", "ARTIST", "TAG"]
          : ["TRACK", "ARTIST"];
    }
    function b(e, t) {
      var n = e.artistId,
        r = e.tagId;
      return n != null
        ? { id: n, type: "ARTIST" }
        : t
          ? null
          : { id: r != null ? r : _, type: "TAG" };
    }
    function v(t) {
      var n = [],
        r = [],
        a = [],
        i = [],
        l = x(t, "items");
      for (var s of Array.isArray(l) ? l : []) {
        var u = x(s, "item"),
          c =
            String(x(s, "display_type")) +
            ":" +
            String(x(u, "display_item_type"));
        e: {
          if (c === "ROW:TRACK") {
            I(n, S(u));
            break e;
          }
          if (c === "ROW:ARTIST") {
            I(r, R(u));
            break e;
          }
          if (c === "ROW:TAG") {
            I(a, L(u));
            break e;
          }
          if (c === "SECTION:TAG") {
            I(i, E(u, x(s, "sub_items")));
            break e;
          }
          {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[music] skipped catalog item ",
                  "",
                ])),
              c,
            );
            break e;
          }
        }
      }
      var d = x(t, "page_info"),
        m = x(d, "end_cursor");
      return {
        tracks: n,
        artists: r,
        tags: a,
        sections: i,
        nextCursor:
          x(d, "has_next_page") === !0 && typeof m == "string" ? m : null,
      };
    }
    function S(e) {
      var t = x(e, "display_id"),
        n = x(e, "song_id"),
        r = x(x(e, "display_title"), "text"),
        a = x(x(e, "display_subtitle"), "text"),
        i = x(e, "duration_in_ms"),
        l = x(e, "progressive_download"),
        u = o("WAWebMusicParsingUtils").toAllowedUri(
          D(Array.isArray(l) ? x(l[0], "url") : null),
          "song",
        );
      return typeof t != "string" ||
        typeof n != "string" ||
        n === "" ||
        typeof r != "string" ||
        typeof i != "number" ||
        !(i > 0) ||
        u == null
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[music] dropped catalog track ",
                "",
              ])),
            String(t),
          ),
          null)
        : {
            id: t,
            songId: n,
            title: r,
            artist: typeof a == "string" ? a : "",
            durationMs: i,
            songUri: u,
            artworkUri: k(e),
            isExplicit: x(e, "is_explicit") === !0,
            highlightTimesMs: T(x(e, "tags")),
            isLyricsAvailable: x(x(e, "lyrics"), "available") === !0,
          };
    }
    function R(e) {
      var t = L(e);
      return t == null ? null : { id: t.id, name: t.name, artworkUri: k(e) };
    }
    function L(e) {
      var t = x(e, "display_id"),
        n = x(x(e, "display_title"), "text");
      return typeof t != "string" || t === "" || typeof n != "string"
        ? (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[music] dropped catalog item ",
                "",
              ])),
            String(t),
          ),
          null)
        : { id: t, name: n };
    }
    function E(e, t) {
      var n = L(e);
      if (n == null) return null;
      var r = [];
      for (var a of Array.isArray(t) ? t : []) {
        var i = x(a, "display_item_type");
        if (i !== "TRACK") {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[music] skipped section item ",
                "",
              ])),
            String(i),
          );
          continue;
        }
        I(r, S(a));
      }
      return { tag: n, tracks: r };
    }
    function k(e) {
      return o("WAWebMusicParsingUtils").toAllowedUri(
        D(x(x(e, "display_image"), "downloadable_uri")),
        "artwork",
      );
    }
    function I(e, t) {
      t != null && e.push(t);
    }
    function T(e) {
      return (Array.isArray(e) ? e : [])
        .filter(function (e) {
          return x(e, "type") === f;
        })
        .map(function (e) {
          return Number(x(e, "name"));
        })
        .filter(function (e) {
          return Number.isInteger(e) && e >= 0;
        });
    }
    function D(e) {
      return typeof e == "string" ? e : null;
    }
    function x(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicCatalog = g;
  },
  98,
);
