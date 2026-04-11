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
  function (t, n, r, o, a, i, l) {
    var e = /(<(\w+)[^>]*?)\/>/g,
      s = {
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
      u = (function () {
        "use strict";
        function t(e) {
          if (
            (e && typeof e.__html == "string" && (e = e.__html),
            !(this instanceof t))
          )
            return e instanceof t ? e : new t(e);
          if (e) {
            var r = typeof e;
            r === "string" || l(0, 277, r);
          }
          ((this.$1 = e || ""),
            (this.$2 = !1),
            (this.$3 = null),
            (this.$4 = n("emptyFunction")),
            (this.$5 = null),
            (this.$6 = !1));
        }
        var r = t.prototype;
        return (
          (r.toString = function () {
            return this.$1;
          }),
          (r.getContent = function () {
            return this.$1;
          }),
          (r.getNodes = function () {
            return (this.$7(), this.$3);
          }),
          (r.getRootNode = function () {
            !this.$5 || l(0, 278);
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
          (r.getAction = function () {
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
          (r.$7 = function () {
            if (this.$3 === null) {
              if (!this.$1) {
                this.$3 = [];
                return;
              }
              var t = this.$1.replace(e, function (e, t, n) {
                  return s[n.toLowerCase()] ? e : t + "></" + n + ">";
                }),
                r = null,
                o = n("createNodesFromMarkup")(t, function (e) {
                  (n("FBLogger")("staticresources").warn(
                    "HTML: encountered script node while parsing, hasSrc=%s, type=%s",
                    !!e.src,
                    e.type == null || e.type === "" ? "<unknown>" : e.type,
                  ),
                    e.type !== "application/ld+json" &&
                      e.type !== "application/json" &&
                      ((r = r || []),
                      r.push(
                        e.src
                          ? n(
                              "Bootloader",
                            ).requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(
                              n("Bootloader"),
                              e.src,
                            )
                          : n("evalGlobal").bind(null, e.innerHTML),
                      ),
                      e.parentNode.removeChild(e)));
                });
              (r &&
                ((this.$6 = !0),
                (this.$4 = function () {
                  for (var e = 0; e < r.length; e++) r[e]();
                })),
                (this.$3 = o));
            }
          }),
          (r.setDeferred = function (t) {
            return ((this.$2 = !!t), this);
          }),
          (r.hasInlineJs = function () {
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
    a.exports = u;
  },
  null,
);
