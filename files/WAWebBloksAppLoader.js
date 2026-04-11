__d(
  "WAWebBloksAppLoader",
  [
    "AbstractWebBloksAppLoader",
    "WAWebXControllerFetchUtils",
    "WebBloksUtils",
    "WebBloksVersioningID",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/async/wbloks/fetch/",
      s = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.fetchApp = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r = yield this.$WAWebBloksAppLoader$p_1(e, t, "app");
                if (r.components != null && r.components.length > 0) {
                  var a = r.components[0];
                  if ((a == null ? void 0 : a.payload) != null)
                    return o("WebBloksUtils").normaliseBloksPayload(a.payload);
                }
                return ((n = r.payload) == null || (n = n.layout) == null
                  ? void 0
                  : n.bloks_payload) != null
                  ? o("WebBloksUtils").normaliseBloksPayload(r.payload)
                  : o("WebBloksUtils").normaliseBloksPayload(r);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WAWebBloksAppLoader$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = this.getAsyncFetchData(e, t, n);
                return this.makePostRequest(this.getAsyncFetchURI(e, t, n), r);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.makePostRequest = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = new URL(e);
                for (var a of Object.entries(t)) {
                  var i = a[0],
                    l = a[1];
                  l != null && n.searchParams.set(i, String(l));
                }
                var s = yield o(
                  "WAWebXControllerFetchUtils",
                ).fetchFromXController(n.toString(), { method: "POST" });
                if (!s.ok) throw r("err")("HTTP error! status: " + s.status);
                var u = yield o(
                  "WAWebXControllerFetchUtils",
                ).extractJsonFromResponse(s);
                if (u == null) throw r("err")("Failed to parse response JSON");
                return u;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getAsyncFetchURI = function (n, r, a) {
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
          (i.getAsyncFetchData = function (t, n, r) {
            return { params: n != null ? JSON.stringify(n) : null };
          }),
          a
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
