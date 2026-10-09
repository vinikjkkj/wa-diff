__d(
  "WAWebHatchSpaceRowDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "space",
      s = /^https:\/\/[^/\\\s?#]/i,
      u = /[\s\\]/;
    function c(t) {
      var n,
        r = o("WAWebHatchJsonReaders").readTrimmedString(t, "item_key"),
        a = o("WAWebHatchJsonReaders").readTrimmedString(t, "display_name");
      return o("WAWebHatchJsonReaders").readTrimmedString(t, "source") !== e ||
        r === "" ||
        a === ""
        ? null
        : {
            itemKey: r,
            displayName: a,
            iconUrl: d(t),
            isFavorite:
              (n = o("WAWebHatchJsonReaders").readBool(t, "is_favorite")) !=
              null
                ? n
                : !1,
            favoriteOrder: m(t, "favorite_order"),
            accessedAtMs: _(t, "accessed_at_ms"),
            constructionStatus: p(t, "construction_status"),
            shareUrl: f(
              o("WAWebHatchJsonReaders").readTrimmedString(
                o("WAWebHatchJsonReaders").readObject(t, "sharing"),
                "share_url",
              ),
            ),
          };
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "icon");
      return t != null && !o("WAWebHatchJsonReaders").isBlankText(t) ? t : null;
    }
    function m(e, t) {
      var n = o("WAWebHatchJsonReaders").readNumber(e, t);
      return n != null && Number.isFinite(n) ? n : null;
    }
    function p(e, t) {
      var n = o("WAWebHatchJsonReaders").readTrimmedString(e, t);
      return n === "" ? null : n;
    }
    function _(e, t) {
      var n = m(e, t);
      if (n != null) return n;
      var r = o("WAWebHatchJsonReaders").readTrimmedString(e, t),
        a = Number(r);
      return r !== "" && Number.isInteger(a) ? a : null;
    }
    function f(e) {
      if (!s.test(e) || u.test(e)) return null;
      try {
        return new URL(e).hostname !== "" ? e : null;
      } catch (e) {
        return null;
      }
    }
    ((l.HATCH_SPACE_SOURCE = e), (l.decodeHatchSpaceRow = c));
  },
  98,
);
