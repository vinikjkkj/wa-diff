__d(
  "WAWebBloksAppLoader",
  [
    "AbstractWebBloksAppLoader",
    "WAWebXControllerFetchUtils",
    "WebBloksUtils",
    "WebBloksVersioningID",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/async/wbloks/fetch/",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.fetchApp = async function (t, n) {
            var e,
              r = await this.$WAWebBloksAppLoader$p_1(t, n, "app");
            if (r.components != null && r.components.length > 0) {
              var a = r.components[0];
              if ((a == null ? void 0 : a.payload) != null)
                return o("WebBloksUtils").normaliseBloksPayload(a.payload);
            }
            return ((e = r.payload) == null || (e = e.layout) == null
              ? void 0
              : e.bloks_payload) != null
              ? o("WebBloksUtils").normaliseBloksPayload(r.payload)
              : o("WebBloksUtils").normaliseBloksPayload(r);
          }),
          (a.$WAWebBloksAppLoader$p_1 = async function (t, n, r) {
            var e = this.getAsyncFetchData(t, n, r);
            return this.makePostRequest(this.getAsyncFetchURI(t, n, r), e);
          }),
          (a.makePostRequest = async function (t, n) {
            var e = new URL(t);
            for (var a of Object.entries(n)) {
              var i = a[0],
                l = a[1];
              l != null && e.searchParams.set(i, String(l));
            }
            var s = await o("WAWebXControllerFetchUtils").fetchFromXController(
              e.toString(),
              { method: "POST" },
            );
            if (!s.ok) throw r("err")("HTTP error! status: " + s.status);
            var u = await o(
              "WAWebXControllerFetchUtils",
            ).extractJsonFromResponse(s);
            if (u == null) throw r("err")("Failed to parse response JSON");
            return u;
          }),
          (a.getAsyncFetchURI = function (n, r, a) {
            var t = new URL(e, window.location.origin);
            return (
              t.searchParams.set("appid", n),
              t.searchParams.set("type", a),
              t.searchParams.set(
                "__bkv",
                o("WebBloksVersioningID").versioningID,
              ),
              t.toString()
            );
          }),
          (a.getAsyncFetchData = function (t, n, r) {
            return { params: n != null ? JSON.stringify(n) : null };
          }),
          n
        );
      })(o("AbstractWebBloksAppLoader").AbstractWebBloksAppLoader),
      u = null;
    function c() {
      return (u == null && (u = new s()), u);
    }
    ((l.WAWebBloksAppLoader = s), (l.getWAWebBloksAppLoader = c));
  },
  98,
);
