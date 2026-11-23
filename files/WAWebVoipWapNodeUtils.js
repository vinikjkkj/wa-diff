__d(
  "WAWebVoipWapNodeUtils",
  ["WAParsableWapNode", "WAWap", "compactMap", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        e.content == null ||
          e.content instanceof Uint8Array ||
          (e.content = r("compactMap")(e.content, function (e) {
            return t(e) ? e : null;
          })),
        e
      );
    }
    function s(e, t) {
      e.content == null ||
        e.content instanceof Uint8Array ||
        (e.content = [].concat(e.content, [t]));
    }
    function u(e, t) {
      t == null ||
        e.content == null ||
        e.content instanceof Uint8Array ||
        (e.content = e.content.map(function (e) {
          return e instanceof o("WAWap").WapNode && e.tag === t.tag ? t : e;
        }));
    }
    function c(e, t) {
      return (
        e.content == null ||
          e.content instanceof Uint8Array ||
          (e.content = e.content.map(t)),
        e
      );
    }
    async function d(e, t) {
      return (
        e.content == null ||
          e.content instanceof Uint8Array ||
          (e.content = (await Promise.all(e.content.map(t))).filter(Boolean)),
        e
      );
    }
    function m(e, t) {
      if (e.content == null || e.content instanceof Uint8Array)
        throw r("err")(
          "getChild: Expected child nodes in stanza with tag: " + e.tag,
        );
      var n = e.content.find(function (e) {
        return e.tag === t;
      });
      if (!n)
        throw r("err")(
          "getChild: Expected to find child node with tag " +
            t +
            " in node with tag " +
            e.tag,
        );
      return n;
    }
    function p(e, t, n) {
      var r = e.content;
      (e.tag === t && n(e),
        Array.isArray(r) &&
          r.forEach(function (e) {
            p(e, t, n);
          }));
    }
    function _(e) {
      var t = e.attrs,
        n = e.content;
      return t == null || t.relay_name == null || !(n instanceof Uint8Array)
        ? null
        : { content: n, relayName: String(t.relay_name) };
    }
    function f(e) {
      return new (o("WAParsableWapNode").ParsableWapNode)(e.tag, e);
    }
    ((l.filterVoipWapNodeChildren = e),
      (l.appendVoipWapChildInPlace = s),
      (l.replaceVoipWapChild = u),
      (l.mapVoipWapChildren = c),
      (l.mapVoipWapChildrenAsync = d),
      (l.getVoipWapChild = m),
      (l.forEachVoipWapNodeWithTag = p),
      (l.getVoipRelayTe2Endpoint = _),
      (l.toVoipParsableWapNode = f));
  },
  98,
);
