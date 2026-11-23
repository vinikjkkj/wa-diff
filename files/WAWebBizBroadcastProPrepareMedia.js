__d(
  "WAWebBizBroadcastProPrepareMedia",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ";base64,";
    async function s(t, n) {
      if ((t == null ? void 0 : t.file) == null) return null;
      if ((n == null ? void 0 : n.aborted) === !0)
        throw r("err")("prepareBizBroadcastProMedia: aborted");
      var o = t.file,
        a = t.fileExt,
        i = t.mimetype;
      if (a == null)
        throw r("err")("prepareBizBroadcastProMedia: missing file extension");
      var l = await new Promise(function (t, a) {
        var i = new FileReader(),
          l = function () {
            ((i.onload = null),
              (i.onerror = null),
              (i.onabort = null),
              n == null || n.removeEventListener("abort", s));
          },
          s = function () {
            (l(),
              i.abort(),
              a(r("err")("prepareBizBroadcastProMedia: aborted")));
          };
        if (
          ((i.onload = function () {
            l();
            var n = i.result;
            if (typeof n != "string") {
              a(
                r("err")(
                  "prepareBizBroadcastProMedia: unexpected FileReader result type",
                ),
              );
              return;
            }
            var o = n.indexOf(e);
            if (o === -1) {
              a(
                r("err")(
                  "prepareBizBroadcastProMedia: unexpected data URL format",
                ),
              );
              return;
            }
            t(n.slice(o + e.length));
          }),
          (i.onerror = function () {
            var e;
            (l(),
              a(
                (e = i.error) != null
                  ? e
                  : r("err")("prepareBizBroadcastProMedia: FileReader error"),
              ));
          }),
          (i.onabort = function () {
            (l(), a(r("err")("prepareBizBroadcastProMedia: aborted")));
          }),
          n == null || n.addEventListener("abort", s),
          (n == null ? void 0 : n.aborted) === !0)
        ) {
          s();
          return;
        }
        i.readAsDataURL(o);
      });
      if ((n == null ? void 0 : n.aborted) === !0)
        throw r("err")("prepareBizBroadcastProMedia: aborted");
      return { extension: a, mediaData: l, mimeType: i };
    }
    l.default = s;
  },
  98,
);
