__d(
  "WAWebBaseL10N",
  [
    "Locale",
    "WAWeb-moment",
    "WAWebEventEmitter",
    "WAWebL10NNumbersPluginRegistry",
    "WAWebLocaleToTranslation",
    "WAWebSupportedLocales",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["fa"]),
      s = "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".split(
        "",
      ),
      u = 1024 * 1024 * 1024,
      c = 1024,
      d = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
      m = d.length - 1,
      p = Math.pow(10, 6),
      _ = Math.pow(10, 3),
      f = Math.pow(10, 4);
    function g(e) {
      return s[parseInt(e, 10)];
    }
    var h = r("err")("Unimplemented method"),
      y = (function (t) {
        function n(e) {
          var n;
          if (((n = t.call(this) || this), !e)) throw h;
          return ((n.$WAWebBaseL10n$p_1 = e), n.customizeMoment(), n);
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getLocale = function () {
            throw h;
          }),
          (a.getNormalizedLocale = function () {
            throw h;
          }),
          (a.getFullLocale = function () {
            throw h;
          }),
          (a.setLocale = function (t, n, r) {
            throw h;
          }),
          (a.normalizeLocaleToWajsLocale = function (t) {
            var e = t.replace(/-/g, "_").toLowerCase(),
              n = this.$WAWebBaseL10n$p_2(e);
            if (n) return n;
            for (var r = e; r; ) {
              r = r.split("_").slice(0, -1).join("_");
              var o = r && this.$WAWebBaseL10n$p_2(r);
              if (o != null && o !== "") return o;
            }
          }),
          (a.isLocaleSupported = function (t) {
            return (
              t != null && t !== "" && !!this.normalizeLocaleToWajsLocale(t)
            );
          }),
          (a.$WAWebBaseL10n$p_2 = function (t) {
            var e = r("WAWebLocaleToTranslation")[t] || t;
            return r("WAWebSupportedLocales")[e];
          }),
          (a.isRTL = function () {
            return o("Locale").isRTL();
          }),
          (a.LR = function (t, n) {
            return this.isRTL() ? n : t;
          }),
          (a.embedDir = function (t, n) {
            return (
              n === void 0 && (n = this.isRTL()),
              n ? this.embedRTL(t) : this.embedLTR(t)
            );
          }),
          (a.embedLTR = function (t) {
            return "\u202A" + t + "\u202C";
          }),
          (a.embedRTL = function (t) {
            return "\u202B" + t + "\u202C";
          }),
          (a.isolateLTR = function (t) {
            return "\u2066" + t + "\u2069";
          }),
          (a.isolateRTL = function (t) {
            return "\u2067" + t + "\u2069";
          }),
          (a.forceLTR = function (t) {
            return "\u200E" + t;
          }),
          (a.forceRTL = function (t) {
            return "\u200F" + t;
          }),
          (a.useArabicScriptDigits = function (n) {
            return e.has(n != null ? n : this.getNormalizedLocale());
          }),
          (a.d = function (t, n, r) {
            var e = o(
              "WAWebL10NNumbersPluginRegistry",
            ).l10nNumberFormattersRegister.get(this.getFullLocale());
            if (e != null && typeof t == "number")
              return e.format(t, this.getFullLocale());
            var a =
              typeof t == "number" && (t >= p || (t >= _ && t < f)) ? 1 : 0;
            return this.n(
              t,
              n,
              babelHelpers.extends({}, r, {
                notation: "compact",
                roundingMode: "trunc",
                trailingZeroDisplay: "stripIfInteger",
                minimumFractionDigits: a,
                maximumFractionDigits: a,
              }),
            );
          }),
          (a.n = function (t, n, r) {
            return typeof t == "number"
              ? Intl.NumberFormat(this.getFullLocale(), r).format(t)
              : this.useArabicScriptDigits(n)
                ? t.toString().replace(/[0-9]/g, g)
                : t;
          }),
          (a.filesizeWithParams = function (t, n) {
            var e;
            if (Number.isNaN(t)) throw r("err")("Invalid filesize value: NaN");
            var o = Math.abs(t),
              a = Math.min(
                m,
                Math.max(0, Math.floor(Math.log(o) / Math.log(c))),
              ),
              i = t > u ? 10 : 1,
              l = Math.round((o / Math.pow(c, a)) * i) / i;
            l === c && a < m && ((l = 1), a++);
            var s = d[a],
              p = (e = n[s]) != null ? e : s,
              _ = Intl.NumberFormat(this.getFullLocale()).format(
                t < 0 ? -l : l,
              );
            return this.n(_ + " " + p);
          }),
          (a.customizeMoment = function () {
            var e;
            ((e = r("WAWeb-moment")).relativeTimeRounding(Math.floor),
              e.relativeTimeThreshold("s", 60),
              e.relativeTimeThreshold("m", 60),
              e.relativeTimeThreshold("h", 24));
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    l.WAWebBaseL10n = y;
  },
  98,
);
