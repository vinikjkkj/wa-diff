__d(
  "WAWebHatchFilesState",
  [
    "WALogger",
    "WAWebHatchArtifactCapabilities",
    "WAWebHatchFileDecoder",
    "WAWebHatchJsonReaders",
    "WAWebHatchSpaceRoute",
    "WAWebHatchSpaceRowDecoder",
    "WAWebHatchSpacesDecoder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { files: null, pending: null, spaceCapabilities: new Map() },
      c = "artifacts.snapshot",
      d = "library",
      m = "space:";
    function p(e, t, n) {
      return t === c
        ? f(e, n)
        : t === o("WAWebHatchSpacesDecoder").HATCH_SPACES_UPDATED_OP_KEY
          ? b(e, n)
          : t === o("WAWebHatchSpacesDecoder").HATCH_SPACES_REMOVED_OP_KEY
            ? R(e, n)
            : e;
    }
    function _(e) {
      return e.pending == null
        ? e
        : babelHelpers.extends({}, e, { pending: null });
    }
    function f(t, n) {
      var r = g(t.pending, n);
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
          _(t)
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
          _(t))
        : { files: y(a), pending: null, spaceCapabilities: C(a) };
    }
    function g(e, t) {
      var n = h(t, "chunk_number"),
        r = h(t, "chunk_count"),
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
    function h(e, t) {
      var n = o("WAWebHatchJsonReaders").readField(e, t);
      return n === void 0
        ? 1
        : typeof n == "number" && Number.isInteger(n)
          ? n
          : null;
    }
    function y(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WAWebHatchFileDecoder").decodeHatchFileNode(n);
        r != null && t.set(r.artifactRef, r);
      }
      return D(Array.from(t.values()));
    }
    function C(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "WAWebHatchArtifactCapabilities",
        ).decodeHatchSpaceCapabilities(n);
        r != null && r.capabilities != null && t.set(r.slug, r.capabilities);
      }
      return t;
    }
    function b(e, t) {
      var n = o("WAWebHatchJsonReaders").readObject(t, "artifact");
      return S(v(e, n), n);
    }
    function v(e, t) {
      var n = o("WAWebHatchArtifactCapabilities").decodeHatchSpaceCapabilities(
        t,
      );
      return n == null ? e : k(e, n.slug, n.capabilities);
    }
    function S(e, t) {
      var n = e.files,
        r = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "artifact_ref");
      if (n == null || r === "") return e;
      var a = n.filter(function (e) {
          return e.artifactRef !== r;
        }),
        i = o("WAWebHatchFileDecoder").decodeHatchFileNode(t);
      return i != null
        ? babelHelpers.extends({}, e, { files: D([].concat(a, [i])) })
        : a.length === n.length
          ? e
          : babelHelpers.extends({}, e, { files: a });
    }
    function R(e, t) {
      return I(L(e, t), t);
    }
    function L(e, t) {
      var n = E(t);
      return n == null ? e : k(e, n, null);
    }
    function E(e) {
      var t = o("WAWebHatchJsonReaders").readStringOrEmpty(e, "artifact_ref");
      return t !== ""
        ? t.startsWith(m)
          ? o("WAWebHatchSpaceRoute").toHatchSpaceSlug(t.slice(m.length))
          : null
        : o("WAWebHatchJsonReaders").readTrimmedString(e, "source") ===
            o("WAWebHatchSpaceRowDecoder").HATCH_SPACE_SOURCE
          ? o("WAWebHatchSpaceRoute").toHatchSpaceSlug(
              o("WAWebHatchJsonReaders").readTrimmedString(e, "item_key"),
            )
          : null;
    }
    function k(e, t, n) {
      var r = e.spaceCapabilities.get(t);
      if (
        (r == null ? void 0 : r.canShare) ===
          (n == null ? void 0 : n.canShare) &&
        (r == null ? void 0 : r.canDownloadHtml) ===
          (n == null ? void 0 : n.canDownloadHtml)
      )
        return e;
      var o = new Map(e.spaceCapabilities);
      return (
        n == null ? o.delete(t) : o.set(t, n),
        babelHelpers.extends({}, e, { spaceCapabilities: o })
      );
    }
    function I(e, t) {
      var n = e.files;
      if (n == null) return e;
      var r = T(n, t);
      return r == null
        ? e
        : babelHelpers.extends({}, e, {
            files: n.filter(function (e) {
              return e.artifactRef !== r;
            }),
          });
    }
    function T(e, t) {
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
    function D(e) {
      return [].concat(e).sort(function (e, t) {
        return (
          Number(t.isPinned) - Number(e.isPinned) ||
          x(e) - x(t) ||
          $(t) - $(e) ||
          P(e.artifactRef, t.artifactRef)
        );
      });
    }
    function x(e) {
      var t;
      return e.isPinned
        ? (t = e.pinnedOrder) != null
          ? t
          : Number.MAX_VALUE
        : 0;
    }
    function $(e) {
      var t;
      return e.isPinned
        ? 0
        : (t = e.lastOpenedAtMs) != null
          ? t
          : -Number.MAX_VALUE;
    }
    function P(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    ((l.HATCH_FILES_INITIAL_STATE = u),
      (l.applyHatchFilesEvent = p),
      (l.dropHatchFilesPendingSnapshot = _));
  },
  98,
);
