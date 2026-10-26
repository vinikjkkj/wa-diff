__d(
  "WAWebVideoDashPrefetchRepresentations",
  ["WAWebMediaUrlAllowlist"],
  function (t, n, r, o, a, i, l) {
    var e = /^(\d+)-(\d+)$/;
    function s(e) {
      var t,
        n = new DOMParser().parseFromString(e, "application/xml");
      if (
        ((t = n.documentElement) == null ? void 0 : t.nodeName) !== "MPD" ||
        n.getElementsByTagName("parsererror").length > 0
      )
        return [];
      var r = n.getElementsByTagName("Period")[0];
      return r == null
        ? []
        : Array.from(r.getElementsByTagName("Representation"))
            .map(u)
            .filter(Boolean);
    }
    function u(e) {
      var t,
        n = c(e),
        r = _(e),
        o = f(e);
      if (n == null || r == null || o == null) return null;
      var a = m(e, n.mimeType);
      return a == null
        ? null
        : babelHelpers.extends({}, n, a, {
            baseURL: r,
            playbackResolutionCSVQM: e.getAttribute(
              "FBPlaybackResolutionCsvqm",
            ),
            playbackResolutionMOS:
              (t = e.getAttribute("FBPlaybackResolutionMos")) != null ? t : "",
            segments: o,
          });
    }
    function c(e) {
      var t = e.getAttribute("id"),
        n = Number(e.getAttribute("bandwidth")),
        r = d(e, "mimeType"),
        o = d(e, "codecs");
      return t == null ||
        !Number.isFinite(n) ||
        n <= 0 ||
        r == null ||
        o == null
        ? null
        : { bandwidth: n, codecs: o, mimeType: r, representationID: t };
    }
    function d(e, t) {
      var n, r;
      return (n = e.getAttribute(t)) != null
        ? n
        : (r = e.parentElement) == null
          ? void 0
          : r.getAttribute(t);
    }
    function m(e, t) {
      var n;
      return t.startsWith("video/")
        ? (n = p(e)) != null
          ? n
          : p(e.parentElement)
        : { height: 0, width: 0 };
    }
    function p(e) {
      var t,
        n,
        r = Number.parseInt(
          (t = e == null ? void 0 : e.getAttribute("width")) != null ? t : "",
          10,
        ),
        o = Number.parseInt(
          (n = e == null ? void 0 : e.getAttribute("height")) != null ? n : "",
          10,
        );
      return Number.isSafeInteger(r) &&
        Number.isSafeInteger(o) &&
        r > 0 &&
        o > 0
        ? { height: o, width: r }
        : null;
    }
    function _(e) {
      var t,
        n = (t = g(e, "BaseURL")) == null ? void 0 : t.textContent.trim();
      return n != null && o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(n)
        ? n
        : null;
    }
    function f(e) {
      var t,
        n = g(e, "SegmentBase");
      if (n == null) return null;
      var r = h(
          (t = g(n, "Initialization")) == null
            ? void 0
            : t.getAttribute("range"),
        ),
        o = h(n.getAttribute("indexRange"));
      if (r == null || o == null || o.start !== r.end + 1) return null;
      var a = h(n.getAttribute("FBFirstSegmentRange"));
      return a != null && a.start === o.end + 1 ? [r, o, a] : [r, o];
    }
    function g(e, t) {
      return Array.from(e.children).find(function (e) {
        return e.nodeName === t;
      });
    }
    function h(t) {
      var n = t != null ? e.exec(t) : null;
      if (n == null) return null;
      var r = Number(n[1]),
        o = Number(n[2]);
      return r <= o ? { end: o, start: r } : null;
    }
    l.getVideoDashPrefetchRepresentations = s;
  },
  98,
);
