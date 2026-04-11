__d(
  "WAWebURLUtils",
  [
    "WABase64",
    "WABinary",
    "WACryptoHmac",
    "WALogger",
    "WATypeUtils",
    "WAWebDataUrlToBlob",
    "WAWebFileUtils",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLValidSchemes",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
      u = "https://l.wl.co/l",
      c = {
        URL_REGEX: s,
        build: function (t, n) {
          var e = new (r("WAWebPonyfillsUrlSearchParams"))();
          return (
            r("lodash").forOwn(n || {}, function (t, n) {
              e.set(n, t);
            }),
            t + "?" + e.toString()
          );
        },
        canMuckHistory: function () {
          var t;
          return o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "URLUtils: canMuckHistory() invalid in worker",
                  ])),
              ),
              !1)
            : !!((t = window.history) != null && t.pushState && self.location);
        },
        relToAbs: function (t) {
          var e = new URL(t, self.location.href);
          return e.href;
        },
        hostname: r("lodash").memoize(function (e) {
          try {
            var t = new URL(this.isHttp(e) ? e : "http://" + e);
            return t.hostname;
          } catch (e) {
            return "";
          }
        }),
        withoutWww: function (t) {
          return t.split("www.").join("");
        },
        isHttp: function (t) {
          return (
            t &&
            (t.toLowerCase().substring(0, 8) === "https://" ||
              t.toLowerCase().substring(0, 7) === "http://")
          );
        },
        isHttps: function (t) {
          return t && t.toLowerCase().substring(0, 8) === "https://";
        },
        hasValidUrlScheme: function (t) {
          var e = t.trim().toLowerCase();
          return o("WAWebURLValidSchemes").VALID_URL_SCHEMES.some(function (t) {
            return e.indexOf(t) === 0;
          });
        },
        isBlob: function (t) {
          return o("WATypeUtils").isString(t) && t.substring(0, 5) === "blob:";
        },
        isData: function (t) {
          return o("WATypeUtils").isString(t) && t.substring(0, 5) === "data:";
        },
        parseDataURL: function (t) {
          var e = t.indexOf(":"),
            n = t.indexOf(";"),
            r = t.indexOf(",");
          return { mimetype: t.substring(e + 1, n), data: t.substring(r + 1) };
        },
        dataURLtoFile: function (t) {
          var e = this.parseDataURL(t).mimetype;
          return o("WAWebFileUtils").createFile(
            [o("WAWebDataUrlToBlob").dataURLtoBlob(t)],
            "",
            { type: e },
          );
        },
        GSM_API_KEY: "AIzaSyC2fN-v_A00tijlZwyrKQBfpKW9t10DgXc",
        GSM_API_KEY_SECRET: "TkKfl2pAWhxFWBWx7_4NI8DMuMs=",
        gsmURL: function (t, n) {
          var e = n.replace(/\-/g, "+").replace(/_/g, "/"),
            r = o("WABase64").decodeB64(e),
            a = new URL(t),
            i = (a.pathname || "") + (a.search || ""),
            l = o("WABinary").Binary.build(i).readByteArrayView();
          return o("WACryptoHmac")
            .hmacSha1(r, l)
            .then(function (e) {
              return t + "&signature=" + o("WABase64").encodeB64UrlSafe(e);
            });
        },
        thumbToCSSURL: function (t) {
          var e =
            this.isHttp(t) || t.startsWith("data:")
              ? t
              : "data:image/jpeg;base64," + t;
          return 'url("' + e + '")';
        },
        thumbAsBackgroundImage: function (t) {
          return t ? { backgroundImage: this.thumbToCSSURL(t) } : {};
        },
        isValid: function (t) {
          return s.test(t);
        },
        toMaliciousSiteRedirect: function (t) {
          return t === "" || t.indexOf(u) === 0
            ? t
            : u + "?u=" + encodeURIComponent(t);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
