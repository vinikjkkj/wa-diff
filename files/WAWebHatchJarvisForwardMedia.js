__d(
  "WAWebHatchJarvisForwardMedia",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebHatchJarvisForwardPolicy",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 32,
      c = 1e3,
      d = new Map();
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (r === void 0 && (r = []),
            yield (s || (s = n("Promise"))).all(
              [].concat(
                e.map(function (e) {
                  return h(e.url);
                }),
                r.map(function (e) {
                  return h(e.url).catch(C);
                }),
              ),
            ));
          var o = f(e, t);
          if (o == null || o === "pending") return null;
          var a = new Map(_(r, t));
          return (
            o.forEach(function (e, t) {
              return a.set(t, e);
            }),
            a
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = new Map();
      for (var r of e) {
        var o = d.get(r.url),
          a = o != null ? b(r, o, t != null ? t : []) : null;
        a != null && n.set(r.url, a);
      }
      return n;
    }
    function f(e, t) {
      var n = new Map();
      for (var r of e) {
        var o = d.get(r.url);
        if (o == null) return "pending";
        var a = b(r, o, t != null ? t : []);
        if (a == null) return null;
        n.set(r.url, a);
      }
      return n;
    }
    function g(e, t) {
      var n = R(e);
      return (
        n != null &&
        n.length === t.length &&
        n.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d.get(e);
          if (t != null) return t;
          var n = yield o(
            "WAWebUnifiedResponseUtils",
          ).computeRichResponseMediaId(e);
          return (d.set(e, n), n);
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-jarvis-forward] preview id failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-jarvis-forward-preview-id-failed"),
        null
      );
    }
    function b(e, t, n) {
      var r,
        a = n.filter(function (e) {
          return e.id === t;
        }),
        i = a.length === 1 ? a[0].previewMedia : null;
      return i == null ||
        !v(i) ||
        o("WAWebHatchJarvisForwardPolicy").hatchJarvisMediaFamily(
          i.mimetype,
        ) !== e.family ||
        !S(e.envelopeFilehash, i.fileSha256)
        ? null
        : {
            directPath: i.directPath,
            encFilehash: i.fileEncSha256,
            filehash: i.fileSha256,
            mediaKey: i.mediaKey,
            mediaKeyTimestamp: Math.floor(
              ((r = i.mediaKeyTimestamp) != null ? r : 0) / c,
            ),
            mediaType: e.family,
            mimetype: i.mimetype,
          };
    }
    function v(e) {
      var t;
      return (
        R(e.mediaKey) != null &&
        R(e.fileSha256) != null &&
        R(e.fileEncSha256) != null &&
        e.directPath.startsWith("/") &&
        ((t = e.mediaKeyTimestamp) != null ? t : 0) > 0
      );
    }
    function S(e, t) {
      if (e == null) return !0;
      var n = R(t);
      return n != null && g(e, n);
    }
    function R(e) {
      var t;
      try {
        t = new Uint8Array(o("WABase64").decodeB64(e));
      } catch (e) {
        return null;
      }
      return t.length === u ? t : null;
    }
    ((l.resolveHatchJarvisForwardMedia = m),
      (l.resolveHatchJarvisOptionalMediaSync = _),
      (l.resolveHatchJarvisForwardMediaSync = f),
      (l.matchesHash = g),
      (l.decodeHash = R));
  },
  98,
);
