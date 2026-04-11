__d(
  "oz-player/parsers/OzXmlParserImplDOMParser",
  [
    "oz-player/shims/OzXmlParserTrustedTypesHTMLPolicy",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return { $: {} };
    }
    function s(t) {
      for (var n = e(), r = t.attributes, o = 0; o < r.length; ++o) {
        var a = r[o];
        n.$[a.name] = a.value;
      }
      for (var i = t.childNodes, l = 0; l < i.length; ++l) {
        var u = i[l];
        if (u instanceof Element) {
          var c = u.nodeName;
          (Object.prototype.hasOwnProperty.call(n, c) || (n[c] = []),
            n[c].push(s(u)));
        } else {
          var d = u.nodeValue.trim();
          d && (n._ = d);
        }
      }
      return n;
    }
    var u = (function () {
      function t() {
        this.$1 = new DOMParser();
      }
      var n = t.prototype;
      return (
        (n.parse = function (n) {
          try {
            var t = e(),
              r = o(
                "oz-player/shims/OzXmlParserTrustedTypesHTMLPolicy",
              ).createTrustedHTMLForDOMParser(n),
              a = this.$1.parseFromString(r, "application/xml"),
              i = a.querySelector("parsererror");
            if (i) {
              var l = i.querySelector("h3"),
                u = l ? l.nextElementSibling : null,
                c = u ? u.innerHTML : i.innerHTML,
                d = 2e3;
              throw o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_XML_PARSER",
                description:
                  "DOMParser parsererror: " +
                  String(c).trim() +
                  "; truncated xml (" +
                  Math.min(d, n.length) +
                  "/" +
                  n.length +
                  "): " +
                  n.substring(0, d),
                extra: {},
              });
            }
            var m = a.documentElement;
            return (m != null && (t[m.nodeName] = [s(m)]), t);
          } catch (e) {
            if (o("oz-player/utils/OzErrorUtils").isOzError(e)) throw e;
            var p = 2e3;
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_XML_PARSER",
              description:
                "XML parse exception: " +
                String(e) +
                "; truncated xml (" +
                Math.min(p, n.length) +
                "/" +
                n.length +
                "): " +
                n.substring(0, p),
              extra: { originalError: e },
            });
          }
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
