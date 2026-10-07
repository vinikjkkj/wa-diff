__d(
  "WAWebMuseGroupRichResponseLinks",
  [
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebLinkify",
    "WAWebMsgGetters",
    "WAWebMuseGroupRichResponseForward",
    "WAWebUnifiedResponseUtils",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new WeakMap();
    function s(t) {
      if (
        !o("WAWebMuseGroupRichResponseForward").isMuseGroupAgentRichResponse(t)
      )
        return [];
      var n = t.richResponse,
        a = t.unifiedResponse,
        i = o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t),
        l = e.get(t);
      if (
        l != null &&
        l.richResponse === n &&
        l.unifiedResponse === a &&
        l.unifiedResponseVisible === i
      )
        return l.links;
      var s = u(t, i),
        c =
          s === ""
            ? []
            : r("uniqueBy")(
                o("WAWebLinkify").findLinks(
                  s,
                  !1,
                  o("WAWebMsgGetters").getSender(t),
                ),
                function (e) {
                  return e.href;
                },
              ).filter(function (e) {
                return e.isHttp;
              });
      return (
        e.set(t, {
          links: c,
          richResponse: n,
          unifiedResponse: a,
          unifiedResponseVisible: i,
        }),
        c
      );
    }
    function u(e, t) {
      var n = e.richResponse,
        r = e.unifiedResponse;
      if (r != null && t) {
        var a = o(
          "WAWebGroupAgentRichResponseLinkIndex",
        ).getUnifiedResponseLinkSourceText(r);
        if (a !== "") return a;
      }
      return n != null
        ? o(
            "WAWebGroupAgentRichResponseLinkIndex",
          ).getRichResponseLinkSourceText(n)
        : "";
    }
    l.getMuseGroupRichResponseGalleryLinks = s;
  },
  98,
);
