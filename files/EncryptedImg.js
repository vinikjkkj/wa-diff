__d(
  "EncryptedImg",
  [
    "DeadCodeDetector",
    "EncryptedImgUtils",
    "URI",
    "XHRRequest",
    "getCrossOriginTransport",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u() {
      s || ((s = !0), o("DeadCodeDetector").isThisDead("EncryptedImg:load"));
    }
    var c = babelHelpers.extends(
        {
          insertIntoStyleBackgroundImage: function (t, n) {
            var e = function (e, t) {
              e && (e.style.backgroundImage = "url('" + t + "')");
            }.bind(void 0, n);
            c.load(t, e);
          },
          insertIntoDOM: function (t, n) {
            var e = function (e, t) {
              e && e.setAttribute("src", t);
            }.bind(void 0, n);
            c.load(t, e);
          },
          load: function (n, a, i) {
            (i === void 0 && (i = !0), u());
            var t = new (e || (e = r("URI")))(n),
              l = o("EncryptedImgUtils").extractKey(t),
              s = m.bind(void 0, l, a, i);
            ((s.includeHeaders = !0),
              new (r("XHRRequest"))(t.toString())
                .setTransportBuilder(r("getCrossOriginTransport"))
                .setMethod("GET")
                .setResponseType("arraybuffer")
                .setResponseHandler(s)
                .send());
          },
          dataUrlPrefix: function (t, n) {
            if ((n === void 0 && (n = 32), !t.startsWith("data:"))) return t;
            var e = t.indexOf(",");
            return ((e < 0 || e > n) && (e = n), t.slice(0, e));
          },
        },
        o("EncryptedImgUtils"),
      ),
      d = c;
    function m(e, t, n, r, o) {
      if (!e) {
        t(f(r, _(o)));
        return;
      }
      var a = p(e),
        i = new Uint8Array(r),
        l = i.subarray(2, 14);
      i = i.subarray(14, i.length);
      var s = { name: "AES-GCM", iv: l, tagLength: 128 };
      window.crypto.subtle
        .importKey("raw", a, s, !1, ["encrypt", "decrypt"])
        .then(function (e) {
          return window.crypto.subtle.decrypt(s, e, i);
        })
        .then(function (e) {
          t(n ? f(e, _(o)) : e);
        })
        .catch(function () {});
    }
    function p(e) {
      if (typeof e == "string") {
        var t = new Uint8Array(Math.floor(e.length / 2)),
          n = 0;
        return (
          e.replace(/(..)/g, function (e) {
            t[n++] = parseInt(e, 16);
          }),
          t
        );
      }
      return null;
    }
    function _(e) {
      var t = "image/jpeg",
        n = e.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);
      return (n && n.length > 1 && (t = n[1]), t);
    }
    function f(e, t) {
      for (
        var n = new Uint8Array(e), r = "", o = 0, a = n.byteLength;
        o < a;
        ++o
      )
        r += String.fromCharCode(n[o]);
      return "data:" + t + ";base64," + window.btoa(r);
    }
    l.default = d;
  },
  98,
);
