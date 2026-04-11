__d(
  "StyleXSheet",
  ["invariant", "ExecutionEnvironment", "Locale", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "__fb-light-mode",
      c = "__fb-dark-mode";
    function d(e, t) {
      var n = [];
      n.push(e + " {");
      for (var r in t) {
        var o = t[r];
        n.push("  --" + r + ": " + o + ";");
      }
      return (n.push("}"), n.join("\n"));
    }
    function m() {
      var e = document.createElement("style");
      (e.setAttribute("type", "text/css"),
        e.setAttribute("data-styled", "true"));
      var t = document.head || document.getElementsByTagName("head")[0];
      return (t || s(0, 2655), t.appendChild(e), e);
    }
    function p() {
      return (
        window.CSS != null &&
        window.CSS.supports != null &&
        window.CSS.supports("--fake-var:0")
      );
    }
    var _ = /var\(--(.*?)\)/g,
      f = (function () {
        function t(e) {
          var t, n;
          ((this.tag = null),
            (this.injected = !1),
            (this.ruleForPriority = new Map()),
            (this.rules = []),
            (this.rootTheme = e.rootTheme),
            (this.rootDarkTheme = e.rootDarkTheme),
            (this.isSlow =
              (t = e.isSlow) != null
                ? t
                : typeof location == "object" &&
                    typeof location.search == "string"
                  ? location.search.includes("stylex-slow")
                  : !1),
            (this.supportsVariables =
              (n = e.supportsVariables) != null ? n : p()),
            (this.$1 = o("Locale").isRTL()),
            (this.externalRules = new Set()));
        }
        var n = t.prototype;
        return (
          (n.getVariableMatch = function () {
            return _;
          }),
          (n.isHeadless = function () {
            return (
              this.tag == null ||
              !(e || (e = r("ExecutionEnvironment"))).canUseDOM
            );
          }),
          (n.getTag = function () {
            var e = this.tag;
            return (e != null || s(0, 11103), e);
          }),
          (n.getCSS = function () {
            return this.rules.join("\n");
          }),
          (n.getRulePosition = function (t) {
            return this.rules.indexOf(t);
          }),
          (n.getRuleCount = function () {
            return this.rules.length;
          }),
          (n.inject = function () {
            if (!this.injected) {
              if (
                ((this.injected = !0),
                !(e || (e = r("ExecutionEnvironment"))).canUseDOM)
              ) {
                this.injectTheme();
                return;
              }
              ((this.tag = m()), this.injectTheme());
            }
          }),
          (n.injectTheme = function () {
            r("gkx")("21106") ||
              (this.rootTheme != null &&
                this.insert(d(":root, ." + u, this.rootTheme), 0),
              this.rootDarkTheme != null &&
                this.insert(
                  d("." + c + ":root, ." + c, this.rootDarkTheme),
                  0,
                ));
          }),
          (n.__injectCustomThemeForTesting = function (t, n) {
            n != null && this.insert(d(t, n), 0);
          }),
          (n.delete = function (t) {
            var e = this.rules.indexOf(t);
            if (
              (e >= 0 || s(0, 2656, t),
              this.rules.splice(e, 1),
              !this.isHeadless())
            ) {
              var n = this.getTag();
              if (this.isSlow) n.removeChild(n.childNodes[e + 1]);
              else {
                var r = n.sheet;
                (r || s(0, 2657), r.deleteRule(e));
              }
            }
          }),
          (n.normalizeRule = function (t) {
            var e = this.rootTheme;
            return this.supportsVariables || e == null
              ? t
              : t.replace(_, function (t, n) {
                  return e[n];
                });
          }),
          (n.getInsertPositionForPriority = function (t) {
            var e = this.ruleForPriority.get(t);
            if (e != null) return this.rules.indexOf(e) + 1;
            var n = Array.from(this.ruleForPriority.keys())
              .sort(function (e, t) {
                return t - e;
              })
              .filter(function (e) {
                return e > t ? 1 : 0;
              });
            if (n.length === 0) return this.getRuleCount();
            var r = n.pop();
            return this.rules.indexOf(this.ruleForPriority.get(r));
          }),
          (n.insert = function (t, n, r) {
            this.injected === !1 && this.inject();
            var e = t.replace(
                /\.([a-zA-Z0-9]+), \.\1:root/g,
                ".$1.$1, .$1.$1:root",
              ),
              o = r;
            o != null &&
              (o = o.replace(
                /\.([a-zA-Z0-9]+), \.\1:root/g,
                ".$1.$1, .$1.$1:root",
              ));
            var a = this.$1 && o != null ? o : e;
            if (
              !this.externalRules.has(a.slice(0, a.indexOf("{")).trim()) &&
              !this.rules.includes(a)
            ) {
              var i = this.normalizeRule(a);
              if (!this.externalRules.has(i.slice(0, i.indexOf("{")).trim())) {
                var l = this.getInsertPositionForPriority(n);
                if (
                  (this.rules.splice(l, 0, i),
                  this.ruleForPriority.set(n, i),
                  !this.isHeadless())
                ) {
                  var s = this.getTag();
                  if (this.isSlow) {
                    var u = document.createTextNode(i);
                    s.insertBefore(u, s.childNodes[l]);
                  } else {
                    var c = s.sheet;
                    if (c != null)
                      try {
                        c.insertRule(i, Math.min(l, c.cssRules.length));
                      } catch (e) {}
                  }
                }
              }
            }
          }),
          t
        );
      })();
    ((f.LIGHT_MODE_CLASS_NAME = u),
      (f.DARK_MODE_CLASS_NAME = c),
      (l.default = f));
  },
  98,
);
