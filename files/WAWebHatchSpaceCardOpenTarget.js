__d(
  "WAWebHatchSpaceCardOpenTarget",
  ["WAWebHatchSpaceRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "succeeded",
      s = ["constructing", "updating"],
      u = "READY",
      c = ["muse.ai", "meta.ai", "metaaiusercontent.com"];
    function d(e, t) {
      var n;
      if (!t || !p(e)) return { kind: "none" };
      for (var r of [e.shareUrl, e.source === "SAVED" ? e.sourceUrl : null]) {
        var o = r != null ? _(r) : null;
        if (o != null) return { kind: "url", url: o };
      }
      return (n = m(e)) != null ? n : { kind: "unavailable" };
    }
    function m(e) {
      var t,
        n =
          e.source === "LOCAL" && e.status === u && e.slug != null
            ? o("WAWebHatchSpaceRoute").toHatchSpaceSlug(e.slug)
            : null;
      return n == null
        ? null
        : {
            kind: "host",
            slug: n,
            title: (t = e.displayName) != null ? t : "",
          };
    }
    function p(e) {
      return (
        e.canOpen &&
        (y(e.shareUrl) ||
          (e.source === "LOCAL" && y(e.slug)) ||
          (e.source === "SAVED" && y(e.sourceUrl)))
      );
    }
    function _(e) {
      if (!h(e)) return null;
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return null;
      }
      var n = t,
        r = n.hostname,
        o = n.password,
        a = n.port,
        i = n.protocol,
        l = n.username;
      return i !== "https:" ||
        l !== "" ||
        o !== "" ||
        a !== "" ||
        r === "" ||
        r.endsWith(".") ||
        !c.some(function (e) {
          return r === e || r.endsWith("." + e);
        })
        ? null
        : t.href;
    }
    function f(t) {
      if (t.constructionStatus === e) {
        var n = o("WAWebHatchSpaceRoute").toHatchSpaceSlug(t.itemKey);
        if (n != null) return { kind: "host", slug: n, title: t.displayName };
        var r = t.shareUrl != null ? _(t.shareUrl) : null;
        return r != null ? { kind: "url", url: r } : { kind: "unavailable" };
      }
      var a =
        t.constructionStatus != null &&
        s.includes(t.constructionStatus) &&
        t.shareUrl != null
          ? _(t.shareUrl)
          : null;
      return a != null ? { kind: "url", url: a } : { kind: "none" };
    }
    function g(e) {
      return _(e) != null;
    }
    function h(e) {
      if (/[\s\u0000-\u001f\u007f]/.test(e) || !/^https:\/\//i.test(e))
        return !1;
      var t = e.slice(8).split(/[/?#]/, 1)[0];
      return t !== "" && /^[\u0021-\u007e]+$/.test(t) && !/[@\\%]/.test(t);
    }
    function y(e) {
      return e != null && e !== "";
    }
    ((l.getHatchSpaceCardOpenTarget = d),
      (l.toHatchShareUrl = _),
      (l.getHatchLibrarySpaceOpenTarget = f),
      (l.isHatchShareUrl = g));
  },
  98,
);
