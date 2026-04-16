__d(
  "oz-player/parsers/OzXmlParserImplDOMParser",
  ["oz-player/utils/OzErrorUtils"],
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
              r = this.$1.parseFromString(n, "application/xml"),
              a = r.querySelector("parsererror");
            if (a) {
              var i = a.querySelector("h3"),
                l = i ? i.nextElementSibling : null,
                u = l ? l.innerHTML : a.innerHTML,
                c = 2e3;
              throw o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_XML_PARSER",
                description:
                  "DOMParser parsererror: " +
                  String(u).trim() +
                  "; truncated xml (" +
                  Math.min(c, n.length) +
                  "/" +
                  n.length +
                  "): " +
                  n.substring(0, c),
                extra: {},
              });
            }
            var d = r.documentElement;
            return (d != null && (t[d.nodeName] = [s(d)]), t);
          } catch (e) {
            if (o("oz-player/utils/OzErrorUtils").isOzError(e)) throw e;
            var m = 2e3;
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_XML_PARSER",
              description:
                "XML parse exception: " +
                String(e) +
                "; truncated xml (" +
                Math.min(m, n.length) +
                "/" +
                n.length +
                "): " +
                n.substring(0, m),
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
