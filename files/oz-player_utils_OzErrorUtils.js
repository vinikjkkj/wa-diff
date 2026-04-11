__d(
  "oz-player/utils/OzErrorUtils",
  ["oz-player/utils/OzError"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (typeof e == "object" && e != null && e.stack === void 0)
        try {
          throw e;
        } catch (e) {}
    }
    function s(e) {
      return e instanceof o("oz-player/utils/OzError").OzErrorClass;
    }
    function u(t, n) {
      var r;
      n === void 0 && (n = 0);
      var a = new (o("oz-player/utils/OzError").OzErrorClass)(t, 1 + n);
      return (e(a), e((r = t.extra) == null ? void 0 : r.originalError), a);
    }
    function c(e) {
      return u({ type: "OZ_CANCELLED", description: "Cancelled: " + e }, 1);
    }
    function d(e) {
      var t = e.description,
        n = e.requestUrl,
        r = e.responseBody,
        o = e.responseHeaders,
        a = e.responseStatus;
      return u(
        {
          type: "OZ_NETWORK",
          description:
            t +
            " Status:" +
            a +
            (r != null
              ? " Body:" +
                r.length +
                ":" +
                r.substr(0, 200) +
                (r.length > 200 ? "..." : "")
              : ""),
          extra: { code: a.toString(), headers: o, url: n },
        },
        1,
      );
    }
    function m(t, n) {
      e(t);
      var r = s(t) ? t : null;
      return u(
        babelHelpers.extends({}, n, {
          type: r ? r.getType() : n.type,
          description:
            n.description +
            " - " +
            (!(t instanceof Error) &&
            typeof t == "object" &&
            t != null &&
            typeof t.message == "string"
              ? t.message
              : String(t)),
          extra: babelHelpers.extends({}, n.extra, { originalError: t }),
        }),
        1,
      );
    }
    function p(e, t) {
      return u({
        type: e.getType(),
        description: e.getDescription(),
        extra: babelHelpers.extends({}, e.getExtra(), { mimeType: t }),
      });
    }
    function _(e) {
      var t, n;
      return (
        s(e)
          ? ((t = e.getExtra().code || ""), (n = e))
          : ((t =
              e.status != null && e.status !== "" ? e.status.toString() : "0"),
            (n = u({
              type: "OZ_NETWORK",
              description: e.message,
              extra: { originalError: e, code: t, url: e.url },
            }))),
        [n, t]
      );
    }
    ((l.isOzError = s),
      (l.createOzError = u),
      (l.createOzCancelledError = c),
      (l.createOzNetworkError = d),
      (l.convertPromiseRejectionReasonToOzError = m),
      (l.getOzErrorWithMIMEType = p),
      (l.getNormalizedErrorAndCode = _));
  },
  98,
);
