__d(
  "Clipboard",
  ["Promise", "UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (
        (window.document &&
          window.document.queryCommandSupported instanceof Function &&
          window.document.queryCommandSupported("copy") &&
          !(
            r("UserAgent").isBrowser("Firefox < 41") ||
            r("UserAgent").isPlatform("iOS < 10.3")
          )) ||
        r("UserAgent").isBrowser("Chrome >= 43")
      );
    }
    var u =
      r("UserAgent").isPlatform("iOS >= 10.3") &&
      !r("UserAgent").isPlatform("iOS >= 18.4");
    function c(e, t) {
      var n = t || document.body;
      if (!n) return !1;
      var r = document.activeElement,
        o = !0,
        a = document.createElement("textarea");
      if ((n.appendChild(a), (a.value = e), u)) {
        var i = document.createRange();
        i.selectNodeContents(a);
        var l = window.getSelection();
        (l.removeAllRanges(), l.addRange(i), a.setSelectionRange(0, 999999));
      } else a.select();
      try {
        o = document.execCommand("copy");
      } catch (e) {
        o = !1;
      }
      return (n.removeChild(a), r != null && r.focus(), o);
    }
    function d(e) {
      if (u) return c(e.textContent);
      var t = e.style.userSelect;
      e.style.userSelect = "text";
      var n = window.getSelection(),
        r = null;
      n.rangeCount > 0 && (r = n.getRangeAt(0));
      var o = document.createRange();
      (o.selectNodeContents(e), n.removeAllRanges(), n.addRange(o));
      var a;
      try {
        (document.execCommand("copy"), (a = !0));
      } catch (e) {
        a = !1;
      }
      return (
        n.removeAllRanges(),
        r !== null && n.addRange(r),
        (e.style.userSelect = t),
        a
      );
    }
    function m(t) {
      var r = window.navigator;
      return r && r.clipboard && typeof r.clipboard.writeText == "function"
        ? r.clipboard.writeText(t)
        : c(t)
          ? (e || (e = n("Promise"))).resolve()
          : (e || (e = n("Promise"))).reject();
    }
    ((l.isSupported = s), (l.copy = c), (l.copyDOM = d), (l.copyAsync = m));
  },
  98,
);
