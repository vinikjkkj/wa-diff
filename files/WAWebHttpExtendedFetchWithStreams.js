__d(
  "WAWebHttpExtendedFetchWithStreams",
  ["WAWebABProps", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = ["onData", "onHeadersReceived", "onProgress", "timeout"];
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_native_fetch_media_download",
      );
    }
    function u(e) {
      return (
        "fetch" in self &&
        "ReadableStream" in self &&
        (e === "get" || e == null) &&
        s()
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            o = n.onData,
            a = n.onHeadersReceived,
            i = n.onProgress,
            l = n.timeout,
            s = babelHelpers.objectWithoutPropertiesLoose(n, e),
            u = yield self.fetch(t, s),
            c = u.headers;
          if (
            (a == null || a(c),
            (i == null && o == null) ||
              (s.method !== "get" && s.method != null))
          )
            return u;
          var d = c.get("Content-Length"),
            p = d != null ? Number.parseInt(d, 10) : null,
            _ = (r = u.clone().body) == null ? void 0 : r.getReader();
          return (m(_, { onProgress: i, onData: o }, { contentLength: p }), u);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      if (e != null) {
        var r = 0;
        return new ReadableStream({
          start: function (a) {
            o();
            function o() {
              e.read()
                .then(function (e) {
                  var i = e.done,
                    l = e.value;
                  if (i || !(l instanceof Uint8Array)) return a.close();
                  r += l.byteLength;
                  var s = new ProgressEvent("progress", {
                    total: n.contentLength,
                    lengthComputable: n.contentLength != null,
                    loaded: r,
                  });
                  (t.onData == null || t.onData(s, l.buffer),
                    t.onProgress == null || t.onProgress(s),
                    a.enqueue(l),
                    o());
                })
                .catch(function () {
                  a.close();
                });
            }
          },
        });
      }
    }
    ((l.canUseExtendedFetchWithStreams = u), (l.extendedFetchWithStreams = c));
  },
  98,
);
