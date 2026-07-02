__d(
  "WAWebCopyPasteClipboard",
  [
    "WADepthFirstTraversal",
    "WAWebCopyPasteCopyable.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDomElementIs",
    "WAWebDomIsTextNode",
    "WAWebDomRangeGetContents",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "application/whatsapp",
      s = "data-native-text-fallback",
      u = (function () {
        function e(e) {
          this.$1 = e || "";
        }
        var t = e.prototype;
        return (
          (t.append = function (t, n) {
            return (
              n === void 0 && (n = ""),
              (this.$1 = [this.toString(), t]
                .filter(function (e) {
                  return e;
                })
                .join(n)),
              this
            );
          }),
          (t.prepend = function (t, n) {
            return (
              n === void 0 && (n = ""),
              (this.$1 = [t, this.toString()]
                .filter(function (e) {
                  return e;
                })
                .join(n)),
              this
            );
          }),
          (t.toString = function () {
            return this.$1;
          }),
          e
        );
      })(),
      c = (function () {
        function e(e, t) {
          (e === void 0 && (e = ""), (this.$1 = new u(e)), (this.$2 = t));
        }
        ((e.fromEl = function (n, r) {
          r === void 0 && (r = o("WAWebCopyPasteCopyable.react").isCopyable(n));
          var t = r
            ? o("WAWebCopyPasteCopyable.react").getAppTextTemplateData(n)
            : null;
          return new e("", t);
        }),
          (e.getTemplate = function (n) {
            var t = n;
            if (!t) return null;
            if (!(t instanceof HTMLElement)) {
              if (!t.parentElement) return null;
              t = t.parentElement;
            }
            for (
              var r = new e("${appText}"), a = t, i = 5, l = 0, s = !1;
              a && l < i;
            )
              (a instanceof HTMLElement &&
              o("WAWebCopyPasteCopyable.react").isCopyable(a)
                ? ((r = e.fromEl(a, !0).append(r.toString())),
                  (s = s || !r.isPlainText()),
                  (i = 5))
                : l++,
                (a = a.parentElement));
            return s ? r.toString() : null;
          }));
        var t = e.prototype;
        return (
          (t.append = function (t, n) {
            return (n === void 0 && (n = ""), this.$1.append(t, n), this);
          }),
          (t.prepend = function (t, n) {
            return (n === void 0 && (n = ""), this.$1.prepend(t, n), this);
          }),
          (t.isPlainText = function () {
            return this.$2 == null;
          }),
          (t.toString = function () {
            return this.$2 != null
              ? this.$2.replace(/\$\{appText\}/g, this.$1.toString())
              : this.$1.toString();
          }),
          e
        );
      })(),
      d = (function () {
        function e(e, t) {
          var n = e || "";
          ((this.$1 = new u(n)),
            t != null && t !== "" && (this.$2 = new c(n, t)));
        }
        ((e.$3 = function (n) {
          var t = this,
            r = o("WAWebCopyPasteCopyable.react").findCopyableChildren(n);
          return r.reduceRight(function (e, n) {
            return e.prepend(t.fromEl(n), "\n");
          }, new e());
        }),
          (e.$4 = function (t, n, a) {
            for (
              var e = this,
                i = n.cloneContents().childNodes,
                l = Array.from(i).some(function (t) {
                  return e.$5(t);
                }),
                s = r("WAWebDomRangeGetContents")(n),
                u = [],
                c = [],
                d = 0;
              d < i.length;
              d++
            ) {
              var m = i[d],
                p = s[d].parentElement,
                _ =
                  (a ||
                    o("WAWebCopyPasteSelectable.react").isSelectable(s[d]) ||
                    o("WAWebCopyPasteSelectable.react").hasSelectableChildren(
                      m,
                    )) &&
                  (t.contains(s[d]) || (p != null && p.contains(t)));
              _ && (u.push(m), c.push(s[d]));
            }
            ((i = u), (s = c));
            var f = a;
            if (i.length === 1) {
              var g = i[0];
              ((f =
                f || o("WAWebCopyPasteSelectable.react").isSelectable(s[0])),
                f ||
                  ((i = o(
                    "WAWebCopyPasteSelectable.react",
                  ).findSelectableChildren(g)),
                  (f = !1)));
            }
            return {
              rangeHasCopyableContent: l,
              rangeNodes: i,
              parentIsSelectable: f,
            };
          }),
          (e.fromCopyableEl = function (n, a) {
            var t = this;
            a === void 0 && (a = !1);
            var i =
                o("WAWebCopyPasteCopyable.react").getPrePlainTextData(n) || "",
              l = new e(i),
              s = o("WAWebCopyPasteCopyable.react").getPlainTextData(n),
              u = o("WAWebCopyPasteCopyable.react").getAppTextTemplateData(n),
              c = new e("", u);
            return s != null
              ? (c.appendPlainText(s), l.append(c))
              : a || o("WAWebCopyPasteSelectable.react").isSelectable(n)
                ? r("WAWebDomElementIs")(n, "br")
                  ? l.appendPlainText("\n")
                  : (Array.from(n.childNodes).reduceRight(function (e, n) {
                      var o = r("WAWebDomElementIs")(n, "div") ? "\n" : "";
                      return e.prepend(t.fromSelectableNode(n), o);
                    }, c),
                    l.append(c))
                : (c.append(this.$3(n)), l.append(c));
          }),
          (e.fromEl = function (t, n) {
            return (
              n === void 0 && (n = !1),
              o("WAWebCopyPasteCopyable.react").isCopyable(t) || n
                ? this.fromCopyableEl(t, n)
                : this.$3(t)
            );
          }),
          (e.fromNode = function (n, r) {
            return n instanceof HTMLElement
              ? this.fromEl(n, r)
              : r
                ? this.fromSelectableNode(n)
                : new e();
          }),
          (e.fromRange = function (n, r) {
            var t = this,
              a = r.commonAncestorContainer,
              i = c.getTemplate(a),
              l = new e("", i),
              s = o("WAWebCopyPasteSelectable.react").isSelectAll(a)
                ? a
                : o("WAWebCopyPasteSelectable.react").findSelectAllParent(a);
            if (s instanceof HTMLElement)
              return l.append(this.fromCopyableEl(s));
            var u = this.$4(
                n,
                r,
                o("WAWebCopyPasteSelectable.react").isSelectable(a),
              ),
              d = u.parentIsSelectable,
              m = u.rangeHasCopyableContent,
              p = u.rangeNodes,
              _ = p.reduceRight(function (e, n) {
                var r = t.fromNode(n, d),
                  o = !d && !r.toAppString().endsWith("\n") ? "\n" : "";
                return e.prepend(r, o);
              }, l);
            if (
              _.toPlainString() === "" &&
              this.$6(n, r) &&
              !this.$7(n, r, m)
            ) {
              var f = r.toString();
              if (f.trim() !== "") return new e(f);
            }
            return _;
          }),
          (e.$7 = function (t, n, r) {
            if (r) return !0;
            for (
              var e = n.commonAncestorContainer,
                a = e instanceof HTMLElement ? e : e.parentElement;
              a != null && t.contains(a);
            ) {
              if (
                a.classList.contains(
                  o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS,
                )
              )
                return !0;
              a = a.parentElement;
            }
            return !1;
          }),
          (e.$5 = function (t) {
            var e = this;
            return t instanceof HTMLElement
              ? t.classList.contains(
                  o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS,
                )
                ? !0
                : Array.from(t.childNodes).some(function (t) {
                    return e.$5(t);
                  })
              : !1;
          }),
          (e.$6 = function (t, n) {
            for (
              var e = n.commonAncestorContainer,
                r = e instanceof HTMLElement ? e : e.parentElement;
              r != null && t.contains(r);
            ) {
              if (r.hasAttribute(s)) return !0;
              r = r.parentElement;
            }
            return !1;
          }),
          (e.fromSelectableNode = function (n) {
            var t = this;
            if (r("WAWebDomIsTextNode")(n)) return new e(n.textContent);
            if (!(n instanceof HTMLElement)) return new e();
            var a = n,
              i = new e();
            return (
              r("WADepthFirstTraversal")(
                a,
                function (e) {
                  return r("WAWebDomIsTextNode")(e) ||
                    o("WAWebCopyPasteCopyable.react").isCopyable(e)
                    ? []
                    : Array.from(e.childNodes);
                },
                function (e) {
                  var a;
                  o("WAWebCopyPasteCopyable.react").isCopyable(e) &&
                  e instanceof HTMLElement
                    ? ((a = t.fromCopyableEl(e, !0)), i.append(a))
                    : r("WAWebDomIsTextNode")(e)
                      ? i.appendPlainText(e.textContent)
                      : r("WAWebDomElementIs")(n, "br") &&
                        i.appendPlainText("\n");
                },
              ),
              i
            );
          }),
          (e.fromSelection = function (n, r) {
            for (var t = new e(), o = 0; o < r.rangeCount; o++)
              t.append(this.fromRange(n, r.getRangeAt(o)), "\n");
            return t;
          }));
        var t = e.prototype;
        return (
          (t.append = function (t, n) {
            return (
              n === void 0 && (n = ""),
              t.hasAppText()
                ? ((this.$2 = this.$2 || new c(this.toPlainString())),
                  this.$2.append(t.toAppString(), n))
                : this.hasAppText() && this.$2.append(t.toAppString(), n),
              this.$1.append(t.toPlainString(), n),
              this
            );
          }),
          (t.appendPlainText = function (n, r) {
            return (r === void 0 && (r = ""), this.append(new e(n)), this);
          }),
          (t.prepend = function (t, n) {
            return (
              n === void 0 && (n = ""),
              t.hasAppText()
                ? ((this.$2 = this.$2 || new c(this.toPlainString())),
                  this.$2.prepend(t.toAppString(), n))
                : this.hasAppText() && this.$2.prepend(t.toAppString(), n),
              this.$1.prepend(t.toPlainString(), n),
              this
            );
          }),
          (t.hasAppText = function () {
            return !!this.$2;
          }),
          (t.toAppText = function () {
            return this.hasAppText() ? this.$2 : new c(this.toPlainString());
          }),
          (t.toPlainString = function () {
            return this.$1.toString();
          }),
          (t.toAppString = function () {
            return this.hasAppText()
              ? this.$2.toString()
              : this.toPlainString();
          }),
          e
        );
      })();
    ((l.APP_TEXT_MIMETYPE = e),
      (l.NATIVE_TEXT_FALLBACK_DATA_ATTR = s),
      (l.Clipboard = d));
  },
  98,
);
