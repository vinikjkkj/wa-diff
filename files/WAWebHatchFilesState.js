__d(
  "WAWebHatchFilesState",
  [
    "WALogger",
    "WAWebHatchFileDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchSpacesDecoder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { files: null, pending: null },
      c = "artifacts.snapshot",
      d = "library";
    function m(e, t, n) {
      return t === c
        ? _(e, n)
        : t === o("WAWebHatchSpacesDecoder").HATCH_SPACES_UPDATED_OP_KEY
          ? y(e, n)
          : t === o("WAWebHatchSpacesDecoder").HATCH_SPACES_REMOVED_OP_KEY
            ? C(e, n)
            : e;
    }
    function p(e) {
      return e.pending == null
        ? e
        : babelHelpers.extends({}, e, { pending: null });
    }
    function _(t, n) {
      var r = f(t.pending, n);
      if (r == null)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-files: dropping snapshot reason=chunk",
                ])),
            )
            .sendLogs("hatch-files-snapshot-dropped"),
          p(t)
        );
      if (r.chunks.length < r.chunkCount)
        return babelHelpers.extends({}, t, { pending: r });
      var a = r.chunks.flat(),
        i = o("WAWebHatchJsonReaders").readField(n, "total_count");
      return i !== void 0 && i !== a.length
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-files: dropping snapshot reason=total_count",
                ])),
            )
            .sendLogs("hatch-files-snapshot-dropped"),
          p(t))
        : { files: h(a), pending: null };
    }
    function f(e, t) {
      var n = g(t, "chunk_number"),
        r = g(t, "chunk_count"),
        a = o("WAWebHatchJsonReaders").readArray(t, "artifacts");
      if (n == null || r == null || a == null) return null;
      var i = n === 1 ? { chunkCount: r, chunks: [] } : e;
      return i != null &&
        i.chunkCount === r &&
        i.chunks.length + 1 === n &&
        n <= r
        ? { chunkCount: r, chunks: [].concat(i.chunks, [a]) }
        : null;
    }
    function g(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return n === void 0
        ? 1
        : typeof n == "number" && Number.isInteger(n)
          ? n
          : null;
    }
    function h(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WAWebHatchFileDecoder").decodeHatchFileNode(n);
        r != null && t.set(r.artifactRef, r);
      }
      return v(Array.from(t.values()));
    }
    function y(e, t) {
      var n = e.files,
        r = o("WAWebHatchJsonReaders").readObject(t, "artifact"),
        a = o("WAWebHatchJsonReaders").readStringOrEmpty(r, "artifact_ref");
      if (n == null || a === "") return e;
      var i = n.filter(function (e) {
          return e.artifactRef !== a;
        }),
        l = o("WAWebHatchFileDecoder").decodeHatchFileNode(r);
      return l != null
        ? babelHelpers.extends({}, e, { files: v([].concat(i, [l])) })
        : i.length === n.length
          ? e
          : babelHelpers.extends({}, e, { files: i });
    }
    function C(e, t) {
      var n = e.files;
      if (n == null) return e;
      var r = b(n, t);
      return r == null
        ? e
        : babelHelpers.extends({}, e, {
            files: n.filter(function (e) {
              return e.artifactRef !== r;
            }),
          });
    }
    function b(e, t) {
      var n,
        r = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "artifact_ref");
      if (r !== "")
        return e.some(function (e) {
          return e.artifactRef === r;
        })
          ? r
          : null;
      if (o("WAWebHatchJsonReaders").readField(t, "source") !== d) return null;
      var a = o("WAWebHatchJsonReaders").readString(t, "item_key");
      return (n = e.find(function (e) {
        return e.itemKey === a;
      })) == null
        ? void 0
        : n.artifactRef;
    }
    function v(e) {
      return [].concat(e).sort(function (e, t) {
        return (
          Number(t.isPinned) - Number(e.isPinned) ||
          S(e) - S(t) ||
          R(t) - R(e) ||
          L(e.artifactRef, t.artifactRef)
        );
      });
    }
    function S(e) {
      var t;
      return e.isPinned
        ? (t = e.pinnedOrder) != null
          ? t
          : Number.MAX_VALUE
        : 0;
    }
    function R(e) {
      var t;
      return e.isPinned
        ? 0
        : (t = e.lastOpenedAtMs) != null
          ? t
          : -Number.MAX_VALUE;
    }
    function L(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    ((l.HATCH_FILES_INITIAL_STATE = u),
      (l.applyHatchFilesEvent = m),
      (l.dropHatchFilesPendingSnapshot = p));
  },
  98,
);
