__d(
  "WAWebHatchFileDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "file",
      s = "library",
      u = new Set([
        "avi",
        "bmp",
        "gif",
        "heic",
        "heif",
        "jpeg",
        "jpg",
        "m4v",
        "mkv",
        "mov",
        "mp4",
        "png",
        "webm",
        "webp",
      ]),
      c = /^[a-z0-9]{0,9}[a-z][a-z0-9]{0,9}$/;
    function d(t) {
      var n = o("WAWebHatchJsonReaders").readField(t, "placement");
      if (
        o("WAWebHatchJsonReaders").readStringOrEmpty(t, "source") !== e ||
        (n != null && n !== s)
      )
        return null;
      var r = m(t),
        a = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "artifact_ref"),
        i = p(t, r),
        l = _(o("WAWebHatchJsonReaders").readStringOrEmpty(t, "format"), i, r);
      if (r === "" || a === "" || u.has(l)) return null;
      var c = o("WAWebHatchJsonReaders").readObject(t, "capabilities");
      return {
        artifactRef: a,
        itemKey: r,
        displayName: i,
        format: l,
        createdAtMs: h(t, "created_at_ms"),
        updatedAtMs: h(t, "updated_at_ms"),
        lastOpenedAtMs: h(t, "last_opened_at_ms"),
        isPinned: o("WAWebHatchJsonReaders").readBool(t, "is_pinned") === !0,
        pinnedOrder: h(t, "pinned_order"),
        canPin: o("WAWebHatchJsonReaders").readBool(c, "can_pin") === !0,
        canShare: o("WAWebHatchJsonReaders").readBool(c, "can_share") === !0,
        canDelete: o("WAWebHatchJsonReaders").readBool(c, "can_delete") === !0,
      };
    }
    function m(e) {
      var t = o("WAWebHatchJsonReaders").readStringOrEmpty(
        o("WAWebHatchJsonReaders").readObject(e, "open_target"),
        "path",
      );
      return t.startsWith("/") ? t.slice(1) : t;
    }
    function p(e, t) {
      var n = o("WAWebHatchJsonReaders").readTrimmedString(e, "display_name");
      return n !== "" ? n : g(t);
    }
    function _(e, t, n) {
      var r;
      return (r = [e, f(t), f(g(n))]
        .map(function (e) {
          return e.toLowerCase();
        })
        .find(function (e) {
          return c.test(e);
        })) != null
        ? r
        : "";
    }
    function f(e) {
      var t = e.lastIndexOf(".");
      return t === -1 ? "" : e.slice(t + 1);
    }
    function g(e) {
      return e.slice(e.lastIndexOf("/") + 1);
    }
    function h(e, t) {
      var n = o("WAWebHatchJsonReaders").readNumber(e, t);
      return n != null && Number.isFinite(n) ? n : null;
    }
    ((l.decodeHatchFileNode = d), (l.lastSegment = g));
  },
  98,
);
