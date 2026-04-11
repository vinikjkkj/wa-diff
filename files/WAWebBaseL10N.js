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
    "filesize",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["fa"]),
      s = "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".split(
        "",
      ),
      u = 1024 * 1024 * 1024,
      c = Math.pow(10, 6),
      d = Math.pow(10, 3),
      m = Math.pow(10, 4);
    function p(e) {
      return s[parseInt(e, 10)];
    }
    var _ = r("err")("Unimplemented method"),
      f = (function (t) {
        function n(e) {
          var n;
          if (((n = t.call(this) || this), !e)) throw _;
          return ((n.$WAWebBaseL10n$p_1 = e), n.customizeMoment(), n);
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getLocale = function () {
            throw _;
          }),
          (a.getNormalizedLocale = function () {
            throw _;
          }),
          (a.getFullLocale = function () {
            throw _;
          }),
          (a.setLocale = function (t, n, r) {
            throw _;
          }),
          (a.normalizeLocaleToWajsLocale = function (t) {
            var e = t.replace(/-/g, "_").toLowerCase(),
              n = this.$WAWebBaseL10n$p_2(e);
            if (n) return n;
            for (var r = e; r; ) {
              r = r.split("_").slice(0, -1).join("_");
              var o = r && this.$WAWebBaseL10n$p_2(r);
              if (o) return o;
            }
          }),
          (a.isLocaleSupported = function (t) {
            return !!t && !!this.normalizeLocaleToWajsLocale(t);
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
              typeof t == "number" && (t >= c || (t >= d && t < m)) ? 1 : 0;
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
            var e = t;
            return typeof e == "number"
              ? Intl.NumberFormat(this.getFullLocale(), r).format(e)
              : this.useArabicScriptDigits(n)
                ? e.toString().replace(/[0-9]/g, p)
                : e;
          }),
          (a.filesizeWithParams = function (t, n) {
            var e = t > u ? 1 : 0,
              o = this.getFullLocale();
            return this.n(
              r("filesize")(t, { base: 2, round: e, locale: o, symbols: n }),
            );
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
    l.WAWebBaseL10n = f;
  },
  98,
);
