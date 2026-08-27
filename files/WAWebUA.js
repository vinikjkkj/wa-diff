__d(
  "WAWebUA",
  ["gkx", "ua-parser-js"],
  function (t, n, r, o, a, i, l) {
    var e = {
        CHROME: "chrome",
        CHROMIUM: "chromium",
        FIREFOX: "firefox",
        SAFARI: "safari",
        IE: "ie",
        OPERA: "opera",
        EDGE: "edge",
      },
      s = { WINDOWS: "windows", MAC: "mac os", CHROMEOS: "chromium os" };
    function u(e, t) {
      var n,
        r,
        o = /(\.0)+[^\.]*$/,
        a = (e + "").replace(o, "").split("."),
        i = (t + "").replace(o, "").split("."),
        l = Math.min(a.length, i.length);
      for (n = 0; n < l; n++)
        if (((r = parseInt(a[n], 10) - parseInt(i[n], 10)), r !== 0)) return r;
      return a.length - i.length;
    }
    function c(e, t) {
      return u(e, t) >= 0;
    }
    function d(e, t) {
      return u(e, t) < 0;
    }
    function m(e) {
      var t = new (r("ua-parser-js"))();
      t.setUA(e || "");
      var n = (t.getBrowser().name || "").toUpperCase(),
        o = t.getBrowser().version || "0.0.0",
        a = (t.getEngine().name || "").toUpperCase(),
        i = (t.getOS().name || "").toUpperCase(),
        l = t.getOS().version || "0.0.0",
        s = !a || a === "WEBKIT",
        u = n === "SAFARI",
        m = n === "CHROME",
        p = n === "FIREFOX",
        _ = a === "TRIDENT" || a === "EDGEHTML",
        f = a === "GECKO",
        g = a === "BLINK",
        h = !m && !u && ("" + n).includes("OCULUS"),
        y =
          i !== "ANDROID" &&
          i !== "CHROMIUM OS" &&
          /\blinux\b/i.test(e != null ? e : ""),
        C = !1;
      e: {
        if (i === "MAC OS") {
          C = !0;
          break e;
        }
        if (i === "WINDOWS") {
          c(l, "8.1") && (f || m) && (C = !0);
          break e;
        }
        break e;
      }
      var b = m && c(o, "110.0.0");
      return {
        isWebkit: s,
        isGecko: f,
        isTrident: _,
        isSafari: u,
        isFirefox: p,
        isBlink: g,
        isBuggyVideoLoad: g,
        hasEmoji: C,
        troublesWithLotsOfVideos: r("gkx")("26258") === !0 && m,
        supportsEmojiEllipsification: !u,
        isBrokenDocPip: y,
        isBrokenVoipWasm: u && c(o, "26.2") && d(o, "26.3"),
        os: i.toLowerCase(),
        osVersion: l,
        browser: n.toLowerCase(),
        browserVersion: o,
        parser: t,
        isChrome: m,
        isOculusBrowser: h,
        hasCredentiallessIframeSupport: b,
      };
    }
    var p = m(typeof self != "undefined" ? self.navigator.userAgent : null);
    ((l.BROWSER_TYPE = e), (l.OS_TYPE = s), (l.parseUA = m), (l.UA = p));
  },
  98,
);
