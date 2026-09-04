__d(
  "WAWebUnifiedResponseHeightEstimate",
  [
    "WALogger",
    "WAUnicodeUtils",
    "WAWebMessageCropping",
    "WAWebUnifiedResponseUtils",
    "getErrorSafe",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 100,
      u = 19,
      c = 13;
    function d(e) {
      try {
        return p(e);
      } catch (e) {
        return (f(e), 0);
      }
    }
    function m(e) {
      try {
        var t = e.unifiedResponse;
        return t == null ||
          e.forwardedAiBotMessageInfo != null ||
          !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)
          ? 0
          : p(t) + c;
      } catch (e) {
        return (f(e), c);
      }
    }
    function p(e) {
      var t = o("WAUnicodeUtils").numCodepoints(
          r("getPlainTextFromUnifiedResponse")(e),
        ),
        n = Math.ceil(t / s) * u;
      for (var a of o("WAWebUnifiedResponseUtils").getImaginePrimitives(e))
        n += g(a);
      return n;
    }
    var _ = !1;
    function f(t) {
      _ ||
        ((_ = !0),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unified response height estimate failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("ur-height-estimate-failed"));
    }
    function g(e) {
      var t = e.media,
        n = t == null ? void 0 : t.width,
        r = t == null ? void 0 : t.height;
      return n != null && n > 0 && r != null && r > 0
        ? Math.round(o("WAWebMessageCropping").IMAGINE_UR_WIDTH * (r / n))
        : o("WAWebMessageCropping").IMAGINE_UR_WIDTH;
    }
    ((l.estimateUnifiedResponseBodyHeight = d),
      (l.estimateRichResponseMsgHeight = m));
  },
  98,
);
