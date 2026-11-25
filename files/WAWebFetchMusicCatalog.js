__d(
  "WAWebFetchMusicCatalog",
  [
    "WALogger",
    "WAWebACSTokenConfig",
    "WAWebL10nGetRenderedLocale",
    "WAWebMusicGraphQLRequest",
    "WAWebMusicParsingUtils",
    "WAWebMusicViewerCountry",
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
    async function g(e) {
      var t = o("WAWebMusicViewerCountry").getMusicViewerCountry();
      if (t == null) return { ok: !1, error: "no_country" };
      var n = await o("WAWebMusicGraphQLRequest").fetchMusicGraphQL({
        docId: d,
        project: o("WAWebACSTokenConfig").ACS_PROJECTS.WA_ChatsMusic,
        variables: h(e, t),
        viaOhai: !1,
      });
      if (!n.ok) return { ok: !1, error: n.error.type };
      var r = D(n.data, "xwa_music_picker");
      return r == null || typeof r != "object"
        ? { ok: !1, error: "invalid_response" }
        : { ok: !0, page: b(r) };
    }
    function h(e, t) {
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
          result_types: y(n, s),
          browse_session_id: r,
          locale: o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale(),
        },
        c = C(e, s);
      return (
        c != null && (u.constraint = c),
        a != null && !s && (u.category_params = { category_type: a }),
        i != null && (u.end_cursor = i),
        { params: u, artwork_width: p, artwork_height: p, browse_session_id: r }
      );
    }
    function y(e, t) {
      return e != null
        ? ["TRACK"]
        : t
          ? ["TRACK", "ARTIST", "TAG"]
          : ["TRACK", "ARTIST"];
    }
    function C(e, t) {
      var n = e.artistId,
        r = e.tagId;
      return n != null
        ? { id: n, type: "ARTIST" }
        : t
          ? null
          : { id: r != null ? r : _, type: "TAG" };
    }
    function b(t) {
      var n = [],
        r = [],
        a = [],
        i = [],
        l = D(t, "items");
      for (var s of Array.isArray(l) ? l : []) {
        var u = D(s, "item"),
          c =
            String(D(s, "display_type")) +
            ":" +
            String(D(u, "display_item_type"));
        e: {
          if (c === "ROW:TRACK") {
            k(n, v(u));
            break e;
          }
          if (c === "ROW:ARTIST") {
            k(r, S(u));
            break e;
          }
          if (c === "ROW:TAG") {
            k(a, R(u));
            break e;
          }
          if (c === "SECTION:TAG") {
            k(i, L(u, D(s, "sub_items")));
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
      var d = D(t, "page_info"),
        m = D(d, "end_cursor");
      return {
        tracks: n,
        artists: r,
        tags: a,
        sections: i,
        nextCursor:
          D(d, "has_next_page") === !0 && typeof m == "string" ? m : null,
      };
    }
    function v(e) {
      var t = D(e, "display_id"),
        n = D(e, "song_id"),
        r = D(D(e, "display_title"), "text"),
        a = D(D(e, "display_subtitle"), "text"),
        i = D(e, "duration_in_ms"),
        l = D(e, "progressive_download"),
        u = o("WAWebMusicParsingUtils").toAllowedUri(
          T(Array.isArray(l) ? D(l[0], "url") : null),
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
            artworkUri: E(e),
            isExplicit: D(e, "is_explicit") === !0,
            highlightTimesMs: I(D(e, "tags")),
            isLyricsAvailable: D(D(e, "lyrics"), "available") === !0,
          };
    }
    function S(e) {
      var t = R(e);
      return t == null ? null : { id: t.id, name: t.name, artworkUri: E(e) };
    }
    function R(e) {
      var t = D(e, "display_id"),
        n = D(D(e, "display_title"), "text");
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
    function L(e, t) {
      var n = R(e);
      if (n == null) return null;
      var r = [];
      for (var a of Array.isArray(t) ? t : []) {
        var i = D(a, "display_item_type");
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
        k(r, v(a));
      }
      return { tag: n, tracks: r };
    }
    function E(e) {
      return o("WAWebMusicParsingUtils").toAllowedUri(
        T(D(D(e, "display_image"), "downloadable_uri")),
        "artwork",
      );
    }
    function k(e, t) {
      t != null && e.push(t);
    }
    function I(e) {
      return (Array.isArray(e) ? e : [])
        .filter(function (e) {
          return D(e, "type") === f;
        })
        .map(function (e) {
          return Number(D(e, "name"));
        })
        .filter(function (e) {
          return Number.isInteger(e) && e >= 0;
        });
    }
    function T(e) {
      return typeof e == "string" ? e : null;
    }
    function D(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : void 0;
    }
    l.fetchMusicCatalog = g;
  },
  98,
);
