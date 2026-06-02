__d(
  "WAWebHttpExtendedFetchWithStreams",
  ["WAWebABProps"],
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
    async function c(t, n) {
      var r,
        o = n.onData,
        a = n.onHeadersReceived,
        i = n.onProgress,
        l = n.timeout,
        s = babelHelpers.objectWithoutPropertiesLoose(n, e),
        u = await self.fetch(t, s),
        c = u.headers;
      if (
        (a == null || a(c),
        (i == null && o == null) || (s.method !== "get" && s.method != null))
      )
        return u;
      var m = c.get("Content-Length"),
        p = m != null ? Number.parseInt(m, 10) : null,
        _ = (r = u.clone().body) == null ? void 0 : r.getReader();
      return (d(_, { onProgress: i, onData: o }, { contentLength: p }), u);
    }
    function d(e, t, n) {
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
