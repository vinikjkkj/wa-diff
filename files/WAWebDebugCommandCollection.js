__d(
  "WAWebDebugCommandCollection",
  [
    "WATypeUtils",
    "WAWebBaseCollection",
    "WAWebDebug",
    "WAWebDebugCommandGetters",
    "WAWebDebugCommandModel",
    "WAWebFuzzySearch",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      u = /([^\s,]+)/g;
    function c(e) {
      var t = e.toString().replace(s, ""),
        n = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(u);
      return n == null ? [] : n;
    }
    function d(e, t) {
      var n = o("WAWebDebugCommandGetters").getNameNormalized(e),
        r = o("WAWebDebugCommandGetters").getKeywordsNormalized(e),
        a = o("WAWebDebugCommandGetters").getDocNormalized(e),
        i = o("WAWebFuzzySearch").fuzzySearch(t, n),
        l = r.some(function (e) {
          return o("WAWebFuzzySearch").fuzzySearch(t, e);
        }),
        s = n.includes(t),
        u = a.includes(t),
        c = s ? 1e3 : 0,
        d = u ? 50 : 0,
        m = i ? 100 : 0,
        p = l ? 20 : 0;
      return m + p + c + d;
    }
    var m = (function (e) {
      function t() {
        var t;
        return ((t = e.call(this) || this), t.addCommandsFromDebug(), t);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.query = function (t) {
          var e = t.toLowerCase();
          return this.filter(function (t) {
            var n = o("WAWebDebugCommandGetters").getNameNormalized(t),
              r = o("WAWebDebugCommandGetters").getDocNormalized(t),
              a = o("WAWebDebugCommandGetters").getKeywordsNormalized(t),
              i = o("WAWebFuzzySearch").fuzzySearch(e, n),
              l = o("WAWebFuzzySearch").fuzzySearch(e, t.funcName),
              s = r.includes(e),
              u = a.some(function (t) {
                return o("WAWebFuzzySearch").fuzzySearch(e, t);
              });
            return i || l || s || u;
          }).sort(function (t, n) {
            return d(t, e) <= d(n, e) ? 1 : -1;
          });
        }),
        (n.addCommandsFromDebug = function () {
          var e = this;
          Object.keys(r("WAWebDebug")).forEach(function (t) {
            var n = r("WAWebDebug")[t];
            n == null ||
              !o("WATypeUtils").isFunction(n) ||
              n.doc == null ||
              e.add({
                id: t,
                funcName: t,
                doc: n.doc,
                params: c(n),
                paramsToExecute:
                  n.paramsToExecute != null ? n.paramsToExecute : null,
                keywords: [],
                displayName: n.displayName != null ? n.displayName : null,
                func: n,
              });
          });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((m.model = r("WAWebDebugCommandModel")),
      (m.comparator = function (e, t) {
        return o("WAWebDebugCommandGetters")
          .getNameNormalized(e)
          .localeCompare(o("WAWebDebugCommandGetters").getNameNormalized(t));
      }));
    var p = new m();
    l.default = p;
  },
  98,
);
