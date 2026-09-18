__d(
  "WAWebBizBroadcastProPrepareMedia",
  ["Promise", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ";base64,";
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          if ((t == null ? void 0 : t.file) == null) return null;
          if ((o == null ? void 0 : o.aborted) === !0)
            throw r("err")("prepareBizBroadcastProMedia: aborted");
          var a = t.file,
            i = t.fileExt,
            l = t.mimetype;
          if (i == null)
            throw r("err")(
              "prepareBizBroadcastProMedia: missing file extension",
            );
          var u = yield new (e || (e = n("Promise")))(function (e, t) {
            var n = new FileReader(),
              i = function () {
                ((n.onload = null),
                  (n.onerror = null),
                  (n.onabort = null),
                  o == null || o.removeEventListener("abort", l));
              },
              l = function () {
                (i(),
                  n.abort(),
                  t(r("err")("prepareBizBroadcastProMedia: aborted")));
              };
            if (
              ((n.onload = function () {
                i();
                var o = n.result;
                if (typeof o != "string") {
                  t(
                    r("err")(
                      "prepareBizBroadcastProMedia: unexpected FileReader result type",
                    ),
                  );
                  return;
                }
                var a = o.indexOf(s);
                if (a === -1) {
                  t(
                    r("err")(
                      "prepareBizBroadcastProMedia: unexpected data URL format",
                    ),
                  );
                  return;
                }
                e(o.slice(a + s.length));
              }),
              (n.onerror = function () {
                var e;
                (i(),
                  t(
                    (e = n.error) != null
                      ? e
                      : r("err")(
                          "prepareBizBroadcastProMedia: FileReader error",
                        ),
                  ));
              }),
              (n.onabort = function () {
                (i(), t(r("err")("prepareBizBroadcastProMedia: aborted")));
              }),
              o == null || o.addEventListener("abort", l),
              (o == null ? void 0 : o.aborted) === !0)
            ) {
              l();
              return;
            }
            n.readAsDataURL(a);
          });
          if ((o == null ? void 0 : o.aborted) === !0)
            throw r("err")("prepareBizBroadcastProMedia: aborted");
          return { extension: i, mediaData: u, mimeType: l };
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
