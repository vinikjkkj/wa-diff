__d(
  "getDOMImageSize",
  ["EncryptedImg", "URI"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      ((e.onload = null),
        (e.onerror = null),
        (e.onreadystatechange = null),
        (e._callback = null),
        (e._thisObj = null),
        (e._srcStr = null),
        e.parentNode && e.parentNode.removeChild(e));
    }
    function u() {
      var e = this;
      (e._callback &&
        e._callback.call(
          e._thisObj,
          e.naturalWidth || e.width,
          e.naturalHeight || e.height,
          e._srcStr,
        ),
        s(e));
    }
    function c() {
      var e = this;
      e.readyState === "complete" && u.call(e);
    }
    function d() {
      var e = this;
      (e._callback && e._callback.call(e._thisObj, 0, 0, e._srcStr), s(e));
    }
    function m(t, n, o) {
      if (((o = o || null), !t)) {
        n.call(o, 0, 0, "");
        return;
      }
      var a = document.body;
      if (!a) {
        setTimeout(function () {
          return m(t, n, o);
        }, 500);
        return;
      }
      var i;
      if (typeof t == "string") i = t;
      else if (typeof t == "object")
        if (typeof t.width == "number" && typeof t.height == "number") {
          if (
            typeof t.src == "string" &&
            ((i = t.src), t.naturalWidth && t.naturalHeight)
          ) {
            n.call(o, t.naturalWidth, t.naturalHeight, i);
            return;
          }
          if (typeof t.uri == "string" && ((i = t.uri), t.width && t.height)) {
            n.call(o, t.width, t.height, i);
            return;
          }
        } else t instanceof (e || (e = r("URI"))) && (i = t.toString());
      if (!i) {
        n(0, 0, t);
        return;
      }
      var l = document.createElement("img");
      ((l.onreadystatechange = c),
        (l.onload = u),
        (l.onerror = d),
        (l._callback = n),
        (l._thisObj = o),
        (l._srcStr = i),
        r("EncryptedImg").isEncrypted(i)
          ? r("EncryptedImg").insertIntoDOM(i, l)
          : (l.src = i),
        (l.style.cssText =
          "\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  ".replace(
            /\s+/,
            " ",
          )),
        a.insertBefore(l, a.firstChild));
    }
    l.default = m;
  },
  98,
);
