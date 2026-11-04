__d(
  "HTML",
  [
    "invariant",
    "Bootloader",
    "FBLogger",
    "createNodesFromMarkup",
    "emptyFunction",
    "evalGlobal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = /(<(\w+)[^>]*?)\/>/g,
      u = {
        abbr: !0,
        area: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
      },
      c = (function () {
        function t(e) {
          ((this.$1 = ""),
            (this.$2 = !1),
            (this.$4 = r("emptyFunction")),
            (this.$6 = !1));
          var n = e;
          if (
            (n &&
              typeof n.__html == "string" &&
              (r("FBLogger")("html").warn("HTML: Superfluous HTML() call."),
              (n = n.__html)),
            !(this instanceof t))
          )
            return n instanceof t ? n : new t(n);
          if (n) {
            var o = typeof n;
            o === "string" || s(0, 277, o);
          }
          ((this.$1 = n || ""),
            (this.$2 = !1),
            (this.$3 = null),
            (this.$4 = r("emptyFunction")),
            (this.$5 = null),
            (this.$6 = !1));
        }
        var n = t.prototype;
        return (
          (n.toString = function () {
            return this.$1;
          }),
          (n.getContent = function () {
            return this.$1;
          }),
          (n.getNodes = function () {
            return (this.$7(), this.$3);
          }),
          (n.getRootNode = function () {
            !this.$5 || s(0, 278);
            var e = this.getNodes();
            if (e.length === 1) this.$5 = e[0];
            else {
              for (
                var t = document.createDocumentFragment(), n = 0;
                n < e.length;
                n++
              )
                t.appendChild(e[n]);
              this.$5 = t;
            }
            return this.$5;
          }),
          (n.getAction = function () {
            var e = this;
            this.$7();
            var t = function () {
              e.$4();
            };
            return this.$2
              ? function () {
                  setTimeout(t, 0);
                }
              : t;
          }),
          (n.$7 = function () {
            if (this.$3 === null) {
              if (!this.$1) {
                this.$3 = [];
                return;
              }
              var t = this.$1.replace(e, function (e, t, n) {
                  return u[n.toLowerCase()] ? e : t + "></" + n + ">";
                }),
                n = null,
                o = r("createNodesFromMarkup")(t, function (e) {
                  if (
                    (r("FBLogger")("staticresources").warn(
                      "HTML: encountered script node while parsing, hasSrc=%s, type=%s",
                      !!e.src,
                      e.type == null || e.type === "" ? "<unknown>" : e.type,
                    ),
                    e.type !== "application/ld+json" &&
                      e.type !== "application/json")
                  ) {
                    n = n || [];
                    var t = e.innerHTML;
                    (n.push(
                      e.src
                        ? r(
                            "Bootloader",
                          ).requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(
                            r("Bootloader"),
                            e.src,
                          )
                        : function () {
                            return r("evalGlobal")(t);
                          },
                    ),
                      e.parentNode.removeChild(e));
                  }
                });
              if (n) {
                this.$6 = !0;
                var a = n;
                this.$4 = function () {
                  for (var e = 0; e < a.length; e++) a[e]();
                };
              }
              this.$3 = o;
            }
          }),
          (n.setDeferred = function (t) {
            return ((this.$2 = !!t), this);
          }),
          (n.hasInlineJs = function () {
            return this.$6;
          }),
          (t.isHTML = function (n) {
            return !!n && (n instanceof t || n.__html !== void 0);
          }),
          (t.replaceJSONWrapper = function (n) {
            return n && n.__html !== void 0 ? new t(n.__html) : n;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
