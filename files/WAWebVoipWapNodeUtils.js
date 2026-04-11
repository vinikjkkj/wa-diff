__d(
  "WAWebVoipWapNodeUtils",
  [
    "Promise",
    "WAParsableWapNode",
    "WAWap",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return (
        e.content == null ||
          e.content instanceof Uint8Array ||
          (e.content = r("compactMap")(e.content, function (e) {
            return t(e) ? e : null;
          })),
        e
      );
    }
    function u(e, t) {
      e.content == null ||
        e.content instanceof Uint8Array ||
        (e.content = [].concat(e.content, [t]));
    }
    function c(e, t) {
      t == null ||
        e.content == null ||
        e.content instanceof Uint8Array ||
        (e.content = e.content.map(function (e) {
          return e instanceof o("WAWap").WapNode && e.tag === t.tag ? t : e;
        }));
    }
    function d(e, t) {
      return (
        e.content == null ||
          e.content instanceof Uint8Array ||
          (e.content = e.content.map(t)),
        e
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          return (
            t.content == null ||
              t.content instanceof Uint8Array ||
              (t.content = (yield (e || (e = n("Promise"))).all(
                t.content.map(r),
              )).filter(Boolean)),
            t
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
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
    function f(e) {
      return new (o("WAParsableWapNode").ParsableWapNode)(e.tag, e);
    }
    ((l.filterVoipWapNodeChildren = s),
      (l.appendVoipWapChildInPlace = u),
      (l.replaceVoipWapChild = c),
      (l.mapVoipWapChildren = d),
      (l.mapVoipWapChildrenAsync = m),
      (l.getVoipWapChild = _),
      (l.toVoipParsableWapNode = f));
  },
  98,
);
