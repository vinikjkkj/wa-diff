__d(
  "WAWebURLUtils",
  [
    "WABase64",
    "WABinary",
    "WACryptoHmac",
    "WALogger",
    "WAMemoizeCache",
    "WATypeUtils",
    "WAWebDataUrlToBlob",
    "WAWebFileUtils",
    "WAWebPonyfillsUrlSearchParams",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLValidSchemes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/,
      u = "https://l.wl.co/l",
      c = "AIzaSyC2fN-v_A00tijlZwyrKQBfpKW9t10DgXc",
      d = "AIzaSyBsgqekZoWfPW9nHXH-d2XRNSHW11GPibg",
      m = r("justknobx")._("753") ? d : c,
      p = {
        URL_REGEX: s,
        build: function (t, n) {
          var e = new (r("WAWebPonyfillsUrlSearchParams"))(),
            o = n || {};
          return (
            Object.keys(o).forEach(function (t) {
              e.set(t, String(o[t]));
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
        hostname: o("WAMemoizeCache").memoizeWithArgs(
          function (e) {
            try {
              var t = new URL(p.isHttp(e) ? e : "http://" + e);
              return t.hostname;
            } catch (e) {
              return "";
            }
          },
          function (e) {
            return e;
          },
        ),
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
        GSM_API_KEY: m,
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
          var e;
          return (
            p.isHttp(t) || t.startsWith("data:")
              ? (e = t)
              : (e = "data:image/jpeg;base64," + t),
            'url("' + e + '")'
          );
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
        consumeLoginNextParam: function (t) {
          var e = new (r("WAWebPonyfillsUrlSearchParams"))(t),
            n = e.get("next"),
            o;
          if (n == null) o = "/";
          else {
            if (!n.startsWith("/") || n.startsWith("//") || n.includes("\\"))
              return "/";
            o = n;
          }
          e.delete("next");
          var a = e.toString();
          if (a === "") return o;
          var i = o.includes("?") ? "&" : "?";
          return o + i + a;
        },
        buildLoginUrlWithNext: function (t, n) {
          if (t === "/login" || t.startsWith("/login/")) return t + n;
          var e = new (r("WAWebPonyfillsUrlSearchParams"))(n);
          e.delete("next");
          var o = e.toString(),
            a = t === "" || t === "/";
          if (a) return o === "" ? "/login/" : "/login/?" + o;
          var i = "/login/?next=" + encodeURIComponent(t);
          return o === "" ? i : i + "&" + o;
        },
      },
      _ = p;
    l.default = _;
  },
  98,
);
