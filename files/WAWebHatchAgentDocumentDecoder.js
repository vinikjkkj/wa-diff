__d(
  "WAWebHatchAgentDocumentDecoder",
  ["WABase64", "WAWebHatchAgentDocument.flow", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "(none)";
    function s(e) {
      if (m(e)) return { kind: "loaded", text: "" };
      if (e.kind !== "Ok" || !o("WAWebHatchJsonReaders").isObject(e.value))
        return { kind: "failed" };
      var t = p(e.value);
      return t == null
        ? { kind: "failed" }
        : f(e.value, t)
          ? { kind: "too_long" }
          : { kind: "loaded", text: t };
    }
    function u(e) {
      if (m(e)) return { kind: "undated" };
      if (e.kind !== "Ok" || !o("WAWebHatchJsonReaders").isObject(e.value))
        return { kind: "failed" };
      var t = o("WAWebHatchJsonReaders").readInteger(e.value, "modified_ms");
      return t != null && t > 0
        ? { kind: "dated", modifiedMs: t }
        : { kind: "undated" };
    }
    function c(t) {
      var n;
      if (t.kind !== "Ok" || !o("WAWebHatchJsonReaders").isObject(t.value))
        return null;
      var r = t.value,
        a = d(r, "emoji"),
        i = {
          creature: (n = d(r, "creature")) != null ? n : d(r, "description"),
          emoji: a === e ? null : a,
          name: d(r, "name"),
          tagline: d(r, "tagline"),
          vibe: d(r, "vibe"),
        };
      return Object.values(i).some(function (e) {
        return e != null;
      })
        ? i
        : null;
    }
    function d(e, t) {
      var n,
        r =
          (n = o("WAWebHatchJsonReaders").readString(e, t)) == null
            ? void 0
            : n.trim();
      return r == null || r === "" ? null : r;
    }
    function m(e) {
      return (
        e.kind === "Rejected" &&
        (e.statusCode === 404 || e.errorCode === "not_found")
      );
    }
    function p(e) {
      var t = o("WAWebHatchJsonReaders").readNonEmptyString(e, "text");
      if (t != null) return t;
      var n = o("WAWebHatchJsonReaders").readString(e, "data_base64");
      return n == null
        ? o("WAWebHatchJsonReaders").readString(e, "text")
        : _(n);
    }
    function _(e) {
      try {
        return o("WABase64").isBase64(e)
          ? new TextDecoder("utf-8", { fatal: !0 }).decode(
              o("WABase64").decodeB64(e),
            )
          : null;
      } catch (e) {
        return null;
      }
    }
    function f(e, t) {
      var n;
      return (
        o("WAWebHatchJsonReaders").readBool(e, "eof") === !1 ||
        ((n = o("WAWebHatchJsonReaders").readInteger(e, "len")) != null
          ? n
          : 0) >=
          o("WAWebHatchAgentDocument.flow").HATCH_AGENT_DOCUMENT_READ_BYTES ||
        new TextEncoder().encode(t).length >=
          o("WAWebHatchAgentDocument.flow").HATCH_AGENT_DOCUMENT_READ_BYTES
      );
    }
    ((l.decodeHatchAgentDocumentRead = s),
      (l.decodeHatchAgentDocumentStat = u),
      (l.decodeHatchAgentProfile = c));
  },
  98,
);
