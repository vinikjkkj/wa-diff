__d(
  "VideoPlayerNextgendashHostXMLDOMParser",
  ["nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        var n = new DOMParser(),
          r = n.parseFromString(t, "application/xml"),
          a = r.querySelector("parsererror"),
          i = a == null ? void 0 : a.firstChild,
          l = i == null ? void 0 : i.nextSibling,
          u =
            i != null &&
            i.nodeName.toLowerCase() === "h3" &&
            l != null &&
            l.nodeName.toLowerCase() === "div"
              ? l.innerText
              : a == null
                ? void 0
                : a.innerText;
        if (a != null) {
          u = u != null ? u : a.innerHTML;
          var c = new Error(u);
          throw (c.stack, (c.name = "parsererror"), c);
        }
        return s(r.documentElement);
      } catch (n) {
        var d =
            typeof n == "object" && n != null && typeof n.name == "string"
              ? n.name
              : "NotAnError",
          m =
            typeof n == "object" && n != null && typeof n.message == "string"
              ? n.message
              : String(n),
          p = 1e3;
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashHostXMLDOMParserException",
          "parseXMLViaDOMParser exception: " + d + ": " + m + "; (%s/%s): %s",
          Math.min(p, t.length),
          t.length,
          t.substr(0, p),
        );
      }
    }
    function s(e) {
      var t = { $: {} };
      return (e != null && (t[e.nodeName] = [u(e)]), t);
    }
    function u(e) {
      for (var t = { $: {} }, n = e.attributes, r = 0; r < n.length; ++r) {
        var o = n[r];
        t.$[o.name] = o.value;
      }
      for (var a = e.childNodes, i = 0; i < a.length; ++i) {
        var l = a[i];
        if (l.nodeName === "#text") {
          var s = l.nodeValue.trim();
          s && (t._ = s);
        } else {
          var c,
            d = l.nodeName,
            m = (c = t[d]) != null ? c : [];
          ((t[d] = m), m.push(u(l)));
        }
      }
      return t;
    }
    l.parseXMLViaDOMParser = e;
  },
  98,
);
