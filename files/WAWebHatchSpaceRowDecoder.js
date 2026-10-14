__d(
  "WAWebHatchSpaceRowDecoder",
  ["WAWebHatchJsonReaders", "WAWebHatchUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "space";
    function s(t) {
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
            iconUrl: u(t),
            isFavorite:
              (n = o("WAWebHatchJsonReaders").readBool(t, "is_favorite")) !=
              null
                ? n
                : !1,
            favoriteOrder: c(t, "favorite_order"),
            accessedAtMs: m(t, "accessed_at_ms"),
            constructionStatus: d(t, "construction_status"),
            shareUrl: o("WAWebHatchUrl").toHttpsUrl(
              o("WAWebHatchJsonReaders").readTrimmedString(
                o("WAWebHatchJsonReaders").readObject(t, "sharing"),
                "share_url",
              ),
            ),
          };
    }
    function u(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "icon");
      return t != null && !o("WAWebHatchJsonReaders").isBlankText(t) ? t : null;
    }
    function c(e, t) {
      var n = o("WAWebHatchJsonReaders").readNumber(e, t);
      return n != null && Number.isFinite(n) ? n : null;
    }
    function d(e, t) {
      var n = o("WAWebHatchJsonReaders").readTrimmedString(e, t);
      return n === "" ? null : n;
    }
    function m(e, t) {
      var n = c(e, t);
      if (n != null) return n;
      var r = o("WAWebHatchJsonReaders").readTrimmedString(e, t),
        a = Number(r);
      return r !== "" && Number.isInteger(a) ? a : null;
    }
    ((l.HATCH_SPACE_SOURCE = e), (l.decodeHatchSpaceRow = s));
  },
  98,
);
